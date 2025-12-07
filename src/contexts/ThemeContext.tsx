import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'midnight' | 'emerald' | 'rose' | 'ocean' | 'ivory';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: { id: Theme; name: string; colors: { primary: string; accent: string } }[];
}

const themes = [
  { id: 'dark' as Theme, name: 'Obsidian', colors: { primary: '#00d4ff', accent: '#a855f7' } },
  { id: 'midnight' as Theme, name: 'Midnight', colors: { primary: '#6366f1', accent: '#8b5cf6' } },
  { id: 'emerald' as Theme, name: 'Emerald', colors: { primary: '#10b981', accent: '#14b8a6' } },
  { id: 'rose' as Theme, name: 'Rose Gold', colors: { primary: '#f43f5e', accent: '#ec4899' } },
  { id: 'ocean' as Theme, name: 'Ocean', colors: { primary: '#0ea5e9', accent: '#06b6d4' } },
  { id: 'ivory' as Theme, name: 'Ivory', colors: { primary: '#c9932a', accent: '#d4853a' } },
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('axiomio-theme');
      if (stored && themes.some(t => t.id === stored)) {
        return stored as Theme;
      }
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('axiomio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Set theme on initial mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
