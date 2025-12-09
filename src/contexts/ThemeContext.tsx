import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'slate' | 'navy' | 'graphite';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: { id: Theme; name: string; colors: { primary: string; accent: string }; isDark: boolean }[];
}

const themes = [
  { id: 'light' as Theme, name: 'Ivory', colors: { primary: '#5b4cdb', accent: '#b87333' }, isDark: false },
  { id: 'dark' as Theme, name: 'Midnight', colors: { primary: '#7c6ef5', accent: '#cd8f4f' }, isDark: true },
  { id: 'slate' as Theme, name: 'Slate', colors: { primary: '#7469f2', accent: '#c98642' }, isDark: true },
  { id: 'navy' as Theme, name: 'Navy Bronze', colors: { primary: '#cd8f4f', accent: '#7c6ef5' }, isDark: true },
  { id: 'graphite' as Theme, name: 'Graphite', colors: { primary: '#cd8f4f', accent: '#7c6ef5' }, isDark: true },
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
