'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  trend: number;
  icon: React.ReactNode;
  index: number;
}

export function KPICard({ title, value, trend, icon, index }: KPICardProps) {
  const isPositive = trend >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
          <div className="text-primary">{icon}</div>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
          isPositive
            ? 'bg-emerald-500/20 text-emerald-400'
            : 'bg-red-500/20 text-red-400'
        }`}>
          {isPositive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span className="text-xs font-semibold">{Math.abs(trend)}%</span>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-foreground">{value}</h3>
      </div>

      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.5 }}
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"
        />
      </div>
    </motion.div>
  );
}
