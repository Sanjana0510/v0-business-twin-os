'use client';

import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';
import type { ExecutiveResponse } from '@/lib/boardroom-data';

interface ExecutiveAgentCardProps {
  agent: ExecutiveResponse;
  index: number;
}

const avatarEmojis: { [key: string]: string } = {
  'Sarah Chen': '👔',
  'Michael Rodriguez': '💰',
  'Amanda Foster': '📢',
  'James Park': '🚀',
  'Priya Kapoor': '⚙️',
  'Dr. Elena Volkov': '🛡️',
};

export function ExecutiveAgentCard({ agent, index }: ExecutiveAgentCardProps) {
  const isPositive = agent.recommendation.includes('APPROVE') || agent.recommendation.includes('PROCEED') || agent.recommendation.includes('LAUNCH');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="relative group"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50" />

      {/* Card */}
      <div className="relative backdrop-blur-xl rounded-2xl border border-slate-700/80 bg-slate-900/40 p-6 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{avatarEmojis[agent.name] || '👤'}</div>
            <div>
              <h3 className="text-lg font-bold text-white">{agent.name}</h3>
              <p className="text-xs text-slate-400 font-medium">{agent.title}</p>
            </div>
          </div>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide border ${
            isPositive
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
              : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
          }`}>
            <TrendingUp className="w-4 h-4" />
            <span>{Math.round(agent.confidenceScore * 100)}%</span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-5 pb-5 border-b border-slate-700/50">
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            {agent.executiveSummary}
          </p>
        </div>

        {/* Key Insights */}
        <div className="mb-5">
          <p className="text-xs font-bold text-slate-400 uppercase mb-3 tracking-wider">Key Insights</p>
          <div className="space-y-2">
            {agent.keyInsights.map((insight, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300">{insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendation */}
        <div className={`p-4 rounded-xl border mb-4 ${
          isPositive
            ? 'bg-emerald-500/10 border-emerald-500/30'
            : 'bg-amber-500/10 border-amber-500/30'
        }`}>
          <div className="flex items-start gap-2">
            {isPositive ? (
              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            )}
            <p className={`text-sm font-bold ${isPositive ? 'text-emerald-300' : 'text-amber-300'}`}>
              {agent.recommendation}
            </p>
          </div>
        </div>

        {/* Risk Factors */}
        {agent.riskFactors && (
          <div className="pt-4 border-t border-slate-700/50">
            <p className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-wider">Risk Factors</p>
            <div className="flex flex-wrap gap-1.5">
              {agent.riskFactors.map((risk, i) => (
                <span key={i} className="px-2 py-1 rounded-lg bg-slate-800/60 border border-slate-700 text-xs text-slate-300">
                  {risk}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

