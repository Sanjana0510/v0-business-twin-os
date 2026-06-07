'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Clock, Zap, TrendingUp, BarChart3 } from 'lucide-react';
import type { Decision } from '@/lib/decisions-data';

interface DecisionTimelineItemProps {
  decision: Decision;
  index: number;
  isLast: boolean;
}

const categoryColors: { [key: string]: { icon: React.ElementType; color: string } } = {
  Strategic: { icon: Zap, color: 'text-primary' },
  Product: { icon: BarChart3, color: 'text-blue-400' },
  Financial: { icon: TrendingUp, color: 'text-emerald-400' },
  Operational: { icon: Clock, color: 'text-amber-400' },
  Marketing: { icon: Zap, color: 'text-pink-400' },
};

const verdictColors: { [key: string]: string } = {
  Approved: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  Rejected: 'bg-red-500/10 text-red-300 border-red-500/30',
  Pending: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
};

export function DecisionTimelineItem({ decision, index, isLast }: DecisionTimelineItemProps) {
  const CategoryIcon = categoryColors[decision.category].icon;
  const verdictIcon = decision.finalVerdict === 'Approved' ? CheckCircle : decision.finalVerdict === 'Rejected' ? XCircle : Clock;
  const VerdictIcon = verdictIcon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="relative"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
      )}

      {/* Main Card */}
      <div className="mb-8 relative">
        {/* Timeline Node */}
        <div className="absolute left-0 top-6 w-16 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg" />
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-slate-900 flex items-center justify-center">
              <CategoryIcon className={`w-4 h-4 ${categoryColors[decision.category].color}`} />
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="ml-24">
          <div className="relative group">
            {/* Background Layers */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50" />

            {/* Card */}
            <div className="relative backdrop-blur-xl rounded-2xl border border-slate-700/80 bg-slate-900/40 p-6 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{decision.decision}</h3>
                  <p className="text-sm text-slate-400">{new Date(decision.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div className={`px-3 py-1.5 rounded-lg text-xs font-bold border flex items-center gap-1.5 whitespace-nowrap ${verdictColors[decision.finalVerdict]}`}>
                  <VerdictIcon className="w-4 h-4" />
                  {decision.finalVerdict}
                </div>
              </div>

              {/* Category & Confidence */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-700/50">
                <div className="px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700 text-xs font-bold text-slate-300">
                  {decision.category}
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold">Confidence Score</p>
                  <p className="text-sm font-bold text-primary">{Math.round(decision.confidenceScore * 100)}%</p>
                </div>
              </div>

              {/* AI Reasoning */}
              <div className="mb-4 p-3 rounded-lg bg-slate-800/40 border border-slate-700">
                <p className="text-xs text-slate-400 font-bold mb-1">AI Analysis</p>
                <p className="text-sm text-slate-300 leading-relaxed">{decision.aiReasoning}</p>
              </div>

              {/* Executive Votes */}
              <div className="mb-4">
                <p className="text-xs text-slate-400 font-bold mb-2 uppercase">Executive Votes</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {Object.entries(decision.executiveVotes).map(([exec, vote]) => (
                    <div key={exec} className="p-2 rounded-lg bg-slate-800/40 border border-slate-700 text-xs">
                      <p className="text-slate-400 font-bold capitalize">{exec}</p>
                      <p className={`font-bold ${vote === 'Yes' ? 'text-emerald-300' : vote === 'No' ? 'text-red-300' : 'text-amber-300'}`}>
                        {vote}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              {decision.outcome && (
                <div className="mb-4 p-4 rounded-lg bg-slate-800/40 border border-slate-700">
                  <p className="text-xs text-slate-400 font-bold mb-2 uppercase">Outcome</p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-slate-400">Status</p>
                      <p className={`text-sm font-bold ${decision.outcome.status === 'Success' ? 'text-emerald-300' : decision.outcome.status === 'Failed' ? 'text-red-300' : 'text-amber-300'}`}>
                        {decision.outcome.status}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">KPI Impact</p>
                      <p className="text-sm text-slate-200">{decision.outcome.kpiImpact}</p>
                    </div>
                    {decision.outcome.lessonsLearned.length > 0 && (
                      <div>
                        <p className="text-xs text-slate-400 font-bold mb-1">Lessons Learned</p>
                        <ul className="space-y-1">
                          {decision.outcome.lessonsLearned.map((lesson, i) => (
                            <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                              <span className="text-primary flex-shrink-0">•</span>
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {decision.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 rounded text-xs bg-slate-800/60 border border-slate-700 text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
