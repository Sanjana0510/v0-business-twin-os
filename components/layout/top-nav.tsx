'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Bell,
  Command,
  Menu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeSwitcher } from '@/components/dashboard/theme-switcher';

function TopNavContent() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/50 backdrop-blur-sm sticky top-0 z-10"
    >
      {/* Left Section - Search */}
      <div className="flex items-center gap-4 flex-1">
        <motion.div
          animate={{ width: showSearch ? 300 : 250 }}
          className="relative hidden sm:block"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="Search or ask (Ctrl+K)..."
            className="glass-input pl-10 pr-4 w-full"
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
          />
        </motion.div>

        {/* Mobile Menu Icon */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Keyboard Shortcut */}
        <div className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-muted-foreground">
          <Command className="w-3 h-3" />
          <span>K</span>
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full"
          />
        </Button>

        {/* Theme Switcher */}
        <ThemeSwitcher />

        {/* User Profile */}
        <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary hover:opacity-90">
          <span className="text-white font-semibold text-sm">J</span>
        </Button>
      </div>
    </motion.header>
  );
}

export function TopNav() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/50 backdrop-blur-sm sticky top-0 z-10"
      />
    );
  }

  return <TopNavContent />;
}

