import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'slate' | 'navy' | 'graphite';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: { id: Theme; name: string; colors: { primary: string; accent: string }; isDark: boolean }[];
}

const themes = [
  { id: 'light' as Theme, name: 'Professional', colors: { primary: '#2563eb', accent: '#0ea5e9' }, isDark: false },
  { id: 'dark' as Theme, name: 'Dark Mode', colors: { primary: '#3b82f6', accent: '#0ea5e9' }, isDark: true },
  { id: 'slate' as Theme, name: 'Slate', colors: { primary: '#3b82f6', accent: '#0ea5e9' }, isDark: true },
  { id: 'navy' as Theme, name: 'Navy & Gold', colors: { primary: '#eab308', accent: '#0ea5e9' }, isDark: true },
  { id: 'graphite' as Theme, name: 'Graphite', colors: { primary: '#fafafa', accent: '#a1a1aa' }, isDark: true },
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
    return 'light';
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
