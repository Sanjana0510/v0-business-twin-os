'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Lightbulb,
  TrendingUp,
  Brain,
  FileText,
  BarChart3,
  Users,
  Zap,
  Database,
  Settings,
  LogOut,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Brain, label: 'AI Boardroom', href: '/boardroom' },
  { icon: Lightbulb, label: 'Recommendations', href: '/recommendations' },
  { icon: FileText, label: 'Decision Memory', href: '/decisions' },
  { icon: BarChart3, label: 'Executive Reports', href: '/reports' },
  { icon: TrendingUp, label: 'Forecasting', href: '/forecasting' },
  { icon: Users, label: 'Team Intelligence', href: '/team' },
  { icon: Zap, label: 'Integrations', href: '/integrations' },
  { icon: Database, label: 'Data Hub', href: '/data-hub' },
];

const bottomItems = [
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: LogOut, label: 'Logout', href: '#' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -256 }}
      animate={{ x: 0 }}
      className="hidden md:flex flex-col w-64 h-screen border-r border-border bg-background/50 backdrop-blur-sm overflow-y-auto sticky top-0"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-3 px-6 py-6 border-b border-border"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary">
          <span className="text-white font-bold text-lg">T</span>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-bold text-foreground">Twin OS</h2>
          <p className="text-xs text-muted-foreground">Business Intelligence</p>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href === '/' && pathname === '/');

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Link href={item.href}>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                    isActive
                      ? 'bg-primary/20 text-primary border border-primary/40'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </button>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="border-t border-border px-4 py-4 space-y-2"
      >
        {bottomItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link key={item.label} href={item.href}>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all border border-transparent">
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{item.label}</span>
              </button>
            </Link>
          );
        })}
      </motion.div>

      {/* Footer Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="px-4 py-4 border-t border-border text-xs text-muted-foreground"
      >
        <p className="text-center">v1.0.0</p>
      </motion.div>
    </motion.aside>
  );
}
