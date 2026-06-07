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
            className="absolute right-0 mt-3 w-80 max-h-96 overflow-hidden rounded-2xl bg-background border border-border shadow-2xl z-50"
          >
            {/* Header */}
            <div className="sticky top-0 px-6 py-4 border-b border-border bg-background/80 backdrop-blur-sm">
              <p className="text-sm font-semibold text-foreground">Choose Theme</p>
              <p className="text-xs text-muted-foreground mt-1">Select your preferred visual style</p>
            </div>

            {/* Theme Grid */}
            <div className="overflow-y-auto max-h-80 p-4">
              <div className="space-y-3">
                {themeList.map((t, index) => {
                  const themeConfig = themes[t];
                  const isSelected = theme === t;

                  return (
                    <motion.button
                      key={t}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleThemeSelect(t)}
                      className={`w-full text-left transition-all duration-200 rounded-xl p-4 border-2 group overflow-hidden relative ${
                        isSelected
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50 bg-background hover:bg-background/80'
                      }`}
                    >
                      {/* Background gradient preview */}
                      <div
                        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                        style={{ background: themeConfig.gradient.primary }}
                      />

                      {/* Content */}
                      <div className="relative z-10 flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-foreground text-sm">
                              {themeNames[t]}
                            </p>
                            {isSelected && (
                              <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {themeDescriptions[t]}
                          </p>
                        </div>

                        {/* Color Preview Dots */}
                        <div className="flex gap-1.5 flex-shrink-0">
                          <motion.div
                            className="w-3 h-3 rounded-full"
                            style={{
                              backgroundColor: themeConfig.colors.primary,
                            }}
                            whileHover={{ scale: 1.2 }}
                          />
                          <motion.div
                            className="w-3 h-3 rounded-full"
                            style={{
                              backgroundColor: themeConfig.colors.secondary,
                            }}
                            whileHover={{ scale: 1.2 }}
                          />
                          <motion.div
                            className="w-3 h-3 rounded-full"
                            style={{
                              backgroundColor: themeConfig.colors.accent,
                            }}
                            whileHover={{ scale: 1.2 }}
                          />
                        </div>
                      </div>

                      {/* Hover effect */}
                      {isSelected && (
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-5"
                          layoutId="theme-highlight"
                          style={{
                            background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent)',
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 px-6 py-3 border-t border-border bg-background/80 backdrop-blur-sm text-center">
              <p className="text-xs text-muted-foreground">
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
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
