'use client';

import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, TrendingUp, Zap } from 'lucide-react';
import type { ExecutiveVerdictData } from '@/lib/boardroom-data';

interface ExecutiveVerdictProps {
  verdict: ExecutiveVerdictData;
}

export function ExecutiveVerdict({ verdict }: ExecutiveVerdictProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="relative"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 blur-xl" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/60 border border-slate-700/60" />

      {/* Card */}
      <div className="relative backdrop-blur-xl rounded-2xl border border-slate-700/80 bg-slate-900/50 p-8 shadow-2xl shadow-black/30">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20"
          >
            <Zap className="w-6 h-6 text-primary" />
          </motion.div>
          <div>
            <h2 className="text-2xl font-bold text-white">Final Executive Verdict</h2>
            <p className="text-sm text-slate-400 mt-1">Consensus analysis across all executive functions</p>
          </div>
        </div>

        {/* Confidence Scores */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700">
            <p className="text-xs text-slate-400 uppercase font-bold mb-2">Confidence Score</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold text-primary">{Math.round(verdict.confidenceScore * 100)}%</p>
              <p className="text-xs text-slate-400">High confidence</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700">
            <p className="text-xs text-slate-400 uppercase font-bold mb-2">Consensus Level</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold text-emerald-400">{Math.round(verdict.consensusLevel * 100)}%</p>
              <p className="text-xs text-slate-400">Agreement</p>
            </div>
          </div>
        </div>

        {/* Strategic Recommendation */}
        <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/10 border border-primary/30">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-primary mb-2">Strategic Recommendation</p>
              <p className="text-base text-white font-semibold">{verdict.strategicRecommendation}</p>
            </div>
          </div>
        </div>

        {/* Financial Impact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <motion.div
            whileHover={{ y: -4 }}
            className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30"
          >
            <p className="text-xs text-emerald-400 font-bold uppercase mb-2">Best Case</p>
            <p className="text-lg font-bold text-emerald-300">{verdict.financialImpact.best}</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30"
          >
            <p className="text-xs text-blue-400 font-bold uppercase mb-2">Expected</p>
            <p className="text-lg font-bold text-blue-300">{verdict.financialImpact.expected}</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30"
          >
            <p className="text-xs text-amber-400 font-bold uppercase mb-2">Worst Case</p>
            <p className="text-lg font-bold text-amber-300">{verdict.financialImpact.worst}</p>
          </motion.div>
        </div>

        {/* Predicted Outcome */}
        <div className="mb-8 p-4 rounded-xl bg-slate-800/40 border border-slate-700">
          <p className="text-xs text-slate-400 uppercase font-bold mb-2">Predicted Outcome</p>
          <p className="text-sm text-slate-100 leading-relaxed">{verdict.predictedOutcome}</p>
        </div>

        {/* Opportunities & Risks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <p className="text-sm font-bold text-white uppercase">Opportunities</p>
            </div>
            <ul className="space-y-2">
              {verdict.opportunities.map((opp, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className="flex items-start gap-2 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">{opp}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <p className="text-sm font-bold text-white uppercase">Risks</p>
            </div>
            <ul className="space-y-2">
              {verdict.risks.map((risk, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.05 }}
                  className="flex items-start gap-2 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20"
                >
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">{risk}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Plan */}
        <div>
          <p className="text-sm font-bold text-white uppercase mb-4">Action Plan</p>
          <div className="space-y-2">
            {verdict.actionPlan.map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.05 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-700"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/30 text-primary font-bold text-xs flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-sm text-slate-200 flex-1">{action}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
