'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/lib/theme-context';
import { themes, themeNames, themeDescriptions, type Theme } from '@/lib/themes';

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themeList = Object.keys(themes) as Theme[];

  const handleThemeSelect = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1"
      >
        <Palette className="w-5 h-5" />
        <ChevronDown className={`w-3 h-3 opacity-50 hidden sm:block transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 mt-3 w-80 max-h-96 overflow-hidden rounded-2xl bg-slate-950 border border-slate-700 shadow-2xl z-[9999]"
          >
            {/* Header */}
            <div className="sticky top-0 px-6 py-4 border-b border-slate-700 bg-slate-950">
              <p className="text-sm font-bold text-white">Choose Theme</p>
              <p className="text-xs text-slate-400 mt-1">Select your preferred visual style</p>
            </div>

            {/* Theme Grid */}
            <div className="overflow-y-auto max-h-80 p-4 space-y-2 bg-slate-950">
              {themeList.map((t, index) => {
                const themeConfig = themes[t];
                const isSelected = theme === t;

                return (
                  <motion.button
                    key={t}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleThemeSelect(t)}
                    className={`w-full text-left transition-all duration-200 rounded-lg p-4 border group overflow-hidden relative ${
                      isSelected
                        ? 'border-primary bg-slate-800 shadow-lg shadow-primary/20'
                        : 'border-slate-700 bg-slate-800/50 hover:bg-slate-750 hover:border-slate-600'
                    }`}
                  >
                    {/* Gradient overlay - subtle on unselected, visible on hover */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-200 ${
                        isSelected ? 'opacity-15' : 'opacity-0 group-hover:opacity-10'
                      }`}
                      style={{ background: themeConfig.gradient.primary }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <p className={`font-semibold text-sm truncate ${
                            isSelected ? 'text-white' : 'text-slate-100'
                          }`}>
                            {themeNames[t]}
                          </p>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="flex-shrink-0"
                            >
                              <Check className="w-4 h-4 text-primary font-bold" />
                            </motion.div>
                          )}
                        </div>
                        <p className={`text-xs line-clamp-2 ${
                          isSelected ? 'text-slate-300' : 'text-slate-400'
                        }`}>
                          {themeDescriptions[t]}
                        </p>
                      </div>

                      {/* Color Preview Dots */}
                      <div className="flex gap-2 flex-shrink-0">
                        <motion.div
                          className="w-3 h-3 rounded-full border border-slate-600 shadow-md"
                          style={{
                            backgroundColor: themeConfig.colors.primary,
                          }}
                          whileHover={{ scale: 1.3 }}
                        />
                        <motion.div
                          className="w-3 h-3 rounded-full border border-slate-600 shadow-md"
                          style={{
                            backgroundColor: themeConfig.colors.secondary,
                          }}
                          whileHover={{ scale: 1.3 }}
                        />
                        <motion.div
                          className="w-3 h-3 rounded-full border border-slate-600 shadow-md"
                          style={{
                            backgroundColor: themeConfig.colors.accent,
                          }}
                          whileHover={{ scale: 1.3 }}
                        />
                      </div>
                    </div>

                    {/* Selection indicator bar */}
                    {isSelected && (
                      <motion.div
                        layoutId="theme-highlight"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 px-6 py-3 border-t border-slate-700 bg-slate-950 text-center">
              <p className="text-xs text-slate-400">
                Theme saved automatically
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] backdrop-blur-sm bg-black/40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
