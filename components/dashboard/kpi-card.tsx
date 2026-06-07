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
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="relative group"
    >
      {/* Background Layers for Premium Depth */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50" />

      {/* Main Card */}
      <div className="relative backdrop-blur-xl rounded-2xl border border-slate-700/80 bg-slate-900/40 p-6 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
        <div className="flex justify-between items-start mb-5">
          {/* Icon Container with Premium Styling */}
          <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 shadow-lg shadow-primary/5">
            <div className="text-primary text-lg">{icon}</div>
          </div>

          {/* Trend Badge with Better Contrast */}
          <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-medium text-xs tracking-wide ${
            isPositive
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              : 'bg-red-500/20 text-red-300 border border-red-500/30'
          }`}>
            {isPositive ? (
              <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" />
            ) : (
              <TrendingDown className="w-3.5 h-3.5 flex-shrink-0" />
            )}
            <span className="font-bold">{Math.abs(trend)}%</span>
          </div>
        </div>

        {/* Content with Improved Typography */}
        <div className="space-y-3">
          <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">{title}</p>
          <h3 className="text-3xl font-bold text-white leading-tight">{value}</h3>
        </div>

        {/* Subtle Accent Gradient Overlay on Hover */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}
