'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme, themes } from './themes';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('midnight-executive');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('business-twin-theme') as Theme | null;
    if (stored && stored in themes) {
      setThemeState(stored);
      applyTheme(stored);
    } else {
      applyTheme('midnight-executive');
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('business-twin-theme', newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

function applyTheme(theme: Theme) {
  const colors = themes[theme];
  const root = document.documentElement;

  Object.entries(colors).forEach(([key, value]) => {
    if (key === 'chart') {
      Object.entries(value).forEach(([chartKey, chartValue]) => {
        root.style.setProperty(`--chart-${chartKey}`, chartValue);
      });
    } else {
      root.style.setProperty(`--${key}`, value);
    }
  });
}

