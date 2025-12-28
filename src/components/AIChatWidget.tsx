import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Volume2, VolumeX, Loader2, Mic, MicOff, Phone, PhoneOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useConversation } from '@elevenlabs/react';
import { supabase } from '@/integrations/supabase/client';
import logo from '@/assets/axiomio-logo-transparent.png';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat`;
const TTS_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/text-to-speech`;

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'voice'>('chat');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTTSEnabled, setIsTTSEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isVoiceConnecting, setIsVoiceConnecting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ElevenLabs Conversation Hook
  const conversation = useConversation({
    onConnect: () => {
      setIsVoiceConnecting(false);
    },
    onDisconnect: () => {
      setIsVoiceConnecting(false);
    },
    onMessage: () => {
      // Voice message received
    },
    onError: () => {
      setIsVoiceConnecting(false);
    },
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current && activeTab === 'chat') {
      inputRef.current.focus();
    }
  }, [isOpen, activeTab]);

  const startVoiceConversation = async () => {
    try {
      setIsVoiceConnecting(true);
      
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Get signed URL from edge function
      const { data, error } = await supabase.functions.invoke('elevenlabs-conversation-token');

      if (error || !data?.signed_url) {
        throw new Error(error?.message || 'Failed to get conversation token');
      }

      // Start the conversation with WebSocket
      await conversation.startSession({
        signedUrl: data.signed_url,
      });
    } catch {
      setIsVoiceConnecting(false);
    }
  };

  const endVoiceConversation = async () => {
    await conversation.endSession();
  };

  const playTTS = async (text: string) => {
    if (!isTTSEnabled) return;
    
    try {
      setIsSpeaking(true);
      const response = await fetch(TTS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ text, voice: 'Sarah' }),
      });

      if (!response.ok) throw new Error('TTS failed');
      
      const data = await response.json();
      const audioUrl = `data:audio/mpeg;base64,${data.audioContent}`;
      
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      audioRef.current = new Audio(audioUrl);
      audioRef.current.onended = () => setIsSpeaking(false);
      audioRef.current.onerror = () => setIsSpeaking(false);
      await audioRef.current.play();
    } catch {
      setIsSpeaking(false);
    }
  };

  const streamChat = useCallback(async (userMessage: string) => {
    const newMessages: Message[] = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);
    
    let assistantContent = '';
    
    try {
      const response = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok || !response.body) {
        throw new Error('Stream failed');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      setMessages([...newMessages, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        buffer += decoder.decode(value, { stream: true });
        
        let newlineIndex: number;
        while ((newlineIndex = buffer.indexOf('\n')) !== -1) {
          let line = buffer.slice(0, newlineIndex);
          buffer = buffer.slice(newlineIndex + 1);
          
          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;
          
          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') break;
          
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantContent += content;
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = { role: 'assistant', content: assistantContent };
                return updated;
              });
            }
          } catch {
            // Incomplete JSON
          }
        }
      }

      if (assistantContent && isTTSEnabled) {
        playTTS(assistantContent);
      }
    } catch {
      setMessages(prev => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: 'I apologize, but I encountered an error. Please try again.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isTTSEnabled]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    streamChat(userMessage);
  };

  const toggleTTS = () => {
    if (isSpeaking && audioRef.current) {
      audioRef.current.pause();
      setIsSpeaking(false);
    }
    setIsTTSEnabled(!isTTSEnabled);
  };

  return (
    <>
      {/* Sleek Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background border border-border shadow-xl shadow-black/20 flex items-center justify-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
            <img 
              src={logo} 
              alt="Alex" 
              className="w-7 h-7 sm:w-9 sm:h-9 object-contain relative z-10 group-hover:scale-110 transition-transform duration-200 brightness-100"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            className="fixed inset-4 sm:inset-auto sm:bottom-6 sm:right-6 z-50 sm:w-[340px] sm:h-[520px] sm:max-h-[75vh] bg-background border border-border/50 rounded-2xl shadow-2xl shadow-black/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 border-b border-border/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center p-1.5">
                  <img src={logo} alt="Alex" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground leading-none">Alex</h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5">AI Assistant</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTTS}
                  className={cn(
                    "h-7 w-7 rounded-full",
                    isTTSEnabled && "text-primary bg-primary/10"
                  )}
                >
                  {isTTSEnabled ? (
                    <Volume2 className={cn("w-3.5 h-3.5", isSpeaking && "animate-pulse")} />
                  ) : (
                    <VolumeX className="w-3.5 h-3.5" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-7 w-7 rounded-full hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>

            {/* Tab Switcher */}
            <div className="flex border-b border-border/50">
              <button
                onClick={() => setActiveTab('chat')}
                className={cn(
                  "flex-1 py-2 text-xs font-medium transition-colors relative",
                  activeTab === 'chat' 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Chat
                {activeTab === 'chat' && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('voice')}
                className={cn(
                  "flex-1 py-2 text-xs font-medium transition-colors relative",
                  activeTab === 'voice' 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Voice Call
                {activeTab === 'voice' && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            </div>

            {/* Chat Tab */}
            {activeTab === 'chat' && (
              <>
                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                  {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center px-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mb-3 p-2">
                        <img src={logo} alt="Alex" className="w-full h-full object-contain" />
                      </div>
                      <h4 className="font-medium text-sm text-foreground mb-1">Hi, I'm Alex</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Ask me anything about Axiom.io's services, solutions, or how we can help your business.
                      </p>
                    </div>
                  )}
                  
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "flex",
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed",
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground rounded-br-sm'
                            : 'bg-muted/70 text-foreground rounded-bl-sm'
                        )}
                      >
                        {message.content || (
                          <span className="flex items-center gap-1.5">
                            <Loader2 className="w-3 h-3 animate-spin" />
                            Thinking...
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSubmit} className="p-3 border-t border-border/50 bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type a message..."
                      disabled={isLoading}
                      className="flex-1 bg-muted/50 border border-border/50 rounded-full px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      disabled={isLoading || !input.trim()}
                      className="h-8 w-8 rounded-full bg-primary hover:bg-primary/90 shadow-sm"
                    >
                      {isLoading ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <Send className="w-3.5 h-3.5" />
                      )}
                    </Button>
                  </div>
                </form>
              </>
            )}

            {/* Voice Tab */}
            {activeTab === 'voice' && (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                {/* Voice Status Visualization */}
                <div className="relative mb-6">
                  <motion.div
                    animate={conversation.status === 'connected' ? {
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={cn(
                      "absolute inset-0 rounded-full",
                      conversation.status === 'connected' 
                        ? "bg-green-500/20" 
                        : "bg-primary/10"
                    )}
                    style={{ transform: 'scale(1.5)' }}
                  />
                  <motion.div
                    animate={conversation.isSpeaking ? {
                      scale: [1, 1.15, 1],
                    } : {}}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className={cn(
                      "relative w-20 h-20 rounded-full flex items-center justify-center",
                      conversation.status === 'connected'
                        ? "bg-gradient-to-br from-green-500/20 to-green-500/10 border-2 border-green-500/30"
                        : "bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/20"
                    )}
                  >
                    {conversation.status === 'connected' ? (
                      conversation.isSpeaking ? (
                        <Volume2 className="w-8 h-8 text-green-500 animate-pulse" />
                      ) : (
                        <Mic className="w-8 h-8 text-green-500" />
                      )
                    ) : (
                      <Phone className="w-8 h-8 text-primary" />
                    )}
                  </motion.div>
                </div>

                <h4 className="font-medium text-sm text-foreground mb-1">
                  {conversation.status === 'connected' 
                    ? conversation.isSpeaking ? 'Alex is speaking...' : 'Listening...'
                    : 'Voice Conversation'
                  }
                </h4>
                <p className="text-xs text-muted-foreground mb-6 max-w-[200px]">
                  {conversation.status === 'connected'
                    ? 'Speak naturally - AXIA will respond in real-time'
                    : 'Start a live voice call with AXIA for hands-free assistance'
                  }
                </p>

                {conversation.status === 'disconnected' ? (
                  <Button
                    onClick={startVoiceConversation}
                    disabled={isVoiceConnecting}
                    className="rounded-full px-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg shadow-primary/20"
                  >
                    {isVoiceConnecting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        <Phone className="w-4 h-4 mr-2" />
                        Start Call
                      </>
                    )}
                  </Button>
                ) : (
                  <Button
                    onClick={endVoiceConversation}
                    variant="destructive"
                    className="rounded-full px-6"
                  >
                    <PhoneOff className="w-4 h-4 mr-2" />
                    End Call
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;
