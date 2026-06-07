'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme, themes } from './themes';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const DEFAULT_THEME: Theme = 'midnight-executive';
const THEME_STORAGE_KEY = 'business-twin-theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    if (stored && stored in themes) {
      setThemeState(stored);
      applyTheme(stored);
    } else {
      applyTheme(DEFAULT_THEME);
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    if (newTheme in themes) {
      setThemeState(newTheme);
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      applyTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mounted }}>
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
  const themeConfig = themes[theme];
  const colors = themeConfig.colors;
  const root = document.documentElement;

  // Apply colors
  Object.entries(colors).forEach(([key, value]) => {
    if (key === 'chart') {
      Object.entries(value).forEach(([chartKey, chartValue]) => {
        root.style.setProperty(`--chart-${chartKey}`, chartValue);
      });
    } else {
      root.style.setProperty(`--${key}`, value);
    }
  });

  // Apply theme-specific styling properties
  root.style.setProperty('--theme-gradient-primary', themeConfig.gradient.primary);
  root.style.setProperty('--theme-gradient-secondary', themeConfig.gradient.secondary);
  root.style.setProperty('--theme-gradient-accent', themeConfig.gradient.accent);
  root.style.setProperty('--theme-card-background', themeConfig.card.background);
  root.style.setProperty('--theme-card-border', themeConfig.card.border);
  root.style.setProperty('--theme-card-shadow-color', themeConfig.card.shadowColor);
  root.style.setProperty('--theme-chart-background', themeConfig.chart.background);
  root.style.setProperty('--theme-chart-grid-color', themeConfig.chart.gridColor);
  root.style.setProperty('--theme-glass-blur', themeConfig.glass.blurStrength);
  root.style.setProperty('--theme-glass-opacity', themeConfig.glass.opacity);
}

