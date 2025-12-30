import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/axiomio-logo-transparent.png';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const CHAT_URL = 'https://n8n.axiomio.com/webhook/854c829c-2ce6-426f-89e2-ed44d33182f3/chat';

// Generate a unique session ID
const generateSessionId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID().replace(/-/g, '');
  }
  // Fallback for older browsers
  return 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/x/g, () =>
    Math.floor(Math.random() * 16).toString(16)
  );
};

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => generateSessionId());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = useCallback(async (userMessage: string) => {
    const newMessages: Message[] = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const payload = [
        {
          sessionId: sessionId,
          action: 'sendMessage',
          chatInput: userMessage
        }
      ];

      console.log('Sending to n8n webhook:', payload);

      const response = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('n8n response status:', response.status);

      if (!response.ok) {
        throw new Error(`Chat request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log('n8n response data:', data);

      // Try multiple possible response fields from n8n
      let assistantMessage = data.output || data.response || data.text || data.reply || data.answer || data.message;

      // Check if n8n is just echoing the input back (not processed)
      if (assistantMessage === userMessage) {
        console.error('n8n is echoing input back - workflow not configured properly');
        assistantMessage = 'The AI agent is not configured correctly. Please check your n8n workflow to ensure it calls an AI service and returns the response in the "output" or "response" field.';
      } else if (!assistantMessage || typeof assistantMessage !== 'string') {
        assistantMessage = 'I apologize, but I couldn\'t process that request.';
      }

      console.log('Extracted assistant message:', assistantMessage);

      setMessages([...newMessages, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([
        ...newMessages,
        { role: 'assistant', content: 'I apologize, but I encountered an error. Please try again.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, sessionId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    sendMessage(userMessage);
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
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-7 w-7 rounded-full hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mb-3 p-2">
                    <img src={logo} alt="Alex" className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-medium text-sm text-foreground mb-1">Hi, I'm Alex</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Welcome to AXIOMIO, please chat with our Agent
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
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted/70 text-foreground rounded-xl rounded-bl-sm px-3 py-2 text-xs">
                    <span className="flex items-center gap-1.5">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      Thinking...
                    </span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;
