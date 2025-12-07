import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, X } from 'lucide-react';
import { useTheme, Theme } from '@/contexts/ThemeContext';

export const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, themes } = useTheme();

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass-premium glow-primary flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
      </motion.button>

      {/* Theme switcher modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-24 right-6 z-50 w-80 glass-premium rounded-2xl p-6 border border-border/50"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Theme</h3>
                  <p className="text-sm text-muted-foreground">Select your experience</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                {themes.map((t) => (
                  <motion.button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      setIsOpen(false);
                    }}
                    className={`w-full p-4 rounded-xl flex items-center gap-4 transition-all ${
                      theme === t.id
                        ? 'bg-primary/10 border border-primary/30'
                        : 'bg-muted/30 border border-transparent hover:bg-muted/50'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Color preview */}
                    <div className="flex -space-x-1">
                      <div
                        className="w-6 h-6 rounded-full border-2 border-background"
                        style={{ backgroundColor: t.colors.primary }}
                      />
                      <div
                        className="w-6 h-6 rounded-full border-2 border-background"
                        style={{ backgroundColor: t.colors.accent }}
                      />
                    </div>

                    <div className="flex-1 text-left">
                      <span className="font-medium text-foreground">{t.name}</span>
                    </div>

                    {theme === t.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                      >
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>

              <p className="mt-4 text-xs text-muted-foreground text-center">
                Luxury theme system • Axiomio
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
