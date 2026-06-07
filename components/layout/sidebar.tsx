'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BarChart3,
  Brain,
  Zap,
  Settings,
  LogOut,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
  { icon: BarChart3, label: 'Analytics', href: '#' },
  { icon: Brain, label: 'AI Insights', href: '#' },
  { icon: Zap, label: 'Performance', href: '#' },
];

const bottomItems = [
  { icon: Settings, label: 'Settings', href: '#' },
  { icon: LogOut, label: 'Logout', href: '#' },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-40 lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X /> : <Menu />}
      </Button>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isOpen ? 280 : 100,
          x: isMobileOpen ? 0 : -280,
        }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-screen glass-dark border-r border-white/10 flex flex-col justify-between p-4 z-30 lg:relative lg:translate-x-0"
      >
        {/* Logo */}
        <div className="space-y-6">
          <motion.div
            animate={{ scale: isOpen ? 1 : 0.8 }}
            className="flex items-center gap-3 px-2"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col"
              >
                <span className="font-bold text-sm text-foreground">Twin OS</span>
                <span className="text-xs text-muted-foreground">Enterprise</span>
              </motion.div>
            )}
          </motion.div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    item.label === 'Dashboard'
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'text-muted-foreground hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {isOpen && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm font-medium"
                    >
                      {item.label}
                    </motion.span>
                  )}
                  {isOpen && item.label === 'Dashboard' && (
                    <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="space-y-2">
          {bottomItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-white/10 transition-all"
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </Link>
          ))}
        </div>

        {/* Collapse Toggle */}
        {!isMobileOpen && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute -right-3 top-1/2 -translate-y-1/2 bg-card border border-white/10 rounded-full p-1.5 hover:bg-white/10 transition-all"
          >
            <ChevronRight
              className={`w-4 h-4 transition-transform ${!isOpen ? 'rotate-180' : ''}`}
            />
          </button>
        )}
      </motion.aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}
