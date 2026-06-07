'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Zap, AlertCircle, Clock } from 'lucide-react';
import type { RecommendationCard } from '@/lib/recommendations-data';

interface RecommendationCardComponentProps {
  rec: RecommendationCard;
  index: number;
}

const categoryColors: { [key: string]: { bg: string; text: string; border: string } } = {
  Revenue: { bg: 'bg-emerald-500/10', text: 'text-emerald-300', border: 'border-emerald-500/30' },
  Cost: { bg: 'bg-blue-500/10', text: 'text-blue-300', border: 'border-blue-500/30' },
  Pricing: { bg: 'bg-purple-500/10', text: 'text-purple-300', border: 'border-purple-500/30' },
  Churn: { bg: 'bg-amber-500/10', text: 'text-amber-300', border: 'border-amber-500/30' },
  Marketing: { bg: 'bg-pink-500/10', text: 'text-pink-300', border: 'border-pink-500/30' },
  Product: { bg: 'bg-cyan-500/10', text: 'text-cyan-300', border: 'border-cyan-500/30' },
  Partnership: { bg: 'bg-indigo-500/10', text: 'text-indigo-300', border: 'border-indigo-500/30' },
  Retention: { bg: 'bg-teal-500/10', text: 'text-teal-300', border: 'border-teal-500/30' },
};

const difficultyColors: { [key: string]: string } = {
  Easy: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Medium: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  Hard: 'bg-red-500/20 text-red-300 border-red-500/30',
};

export function RecommendationCardComponent({ rec, index }: RecommendationCardComponentProps) {
  const colors = categoryColors[rec.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="relative group h-full"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50" />

      {/* Card */}
      <div className="relative backdrop-blur-xl rounded-2xl border border-slate-700/80 bg-slate-900/40 p-6 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="text-lg font-bold text-white flex-1">{rec.title}</h3>
            <div className={`px-2.5 py-1 rounded-lg text-xs font-bold ${difficultyColors[rec.difficulty]} border whitespace-nowrap`}>
              {rec.difficulty}
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">{rec.description}</p>
        </div>

        {/* Category Badge */}
        <div className={`mb-4 px-3 py-1.5 rounded-lg text-xs font-bold ${colors.bg} ${colors.text} border ${colors.border} w-fit`}>
          {rec.category}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-slate-700/50">
          <div>
            <p className="text-xs text-slate-400 uppercase font-bold mb-1">Impact Score</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold text-primary">{Math.round(rec.impactScore * 100)}</p>
              <p className="text-xs text-slate-400">/100</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase font-bold mb-1">Est. ROI</p>
            <p className="text-lg font-bold text-emerald-400">{rec.estimatedROI}</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="space-y-3 mb-6 flex-1">
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-slate-400 font-medium">Timeline</p>
              <p className="text-sm text-slate-200">{rec.timeline}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-slate-400 font-medium">Priority</p>
              <p className={`text-sm font-semibold ${rec.priority === 'High' ? 'text-emerald-300' : rec.priority === 'Medium' ? 'text-amber-300' : 'text-slate-300'}`}>
                {rec.priority}
              </p>
            </div>
          </div>
        </div>

        {/* AI Reasoning */}
        <div className="mb-4 p-3 rounded-lg bg-slate-800/40 border border-slate-700">
          <p className="text-xs text-slate-400 font-bold mb-1">AI Reasoning</p>
          <p className="text-xs text-slate-300 leading-relaxed">{rec.aiReasoning}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {rec.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 rounded text-xs bg-slate-800/60 border border-slate-700 text-slate-400">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2 px-4 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 rounded-lg font-semibold text-white text-sm transition-all flex items-center justify-center gap-2"
        >
          <Zap className="w-4 h-4" />
          Take Action
        </motion.button>
      </div>
    </motion.div>
  );
}
