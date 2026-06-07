'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Search, Filter, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { DecisionTimelineItem } from '@/components/decisions/decision-timeline-item';
import { decisions, decisionMetrics } from '@/lib/decisions-data';
import type { Decision } from '@/lib/decisions-data';

type CategoryFilter = 'all' | 'Strategic' | 'Product' | 'Financial' | 'Operational' | 'Marketing';
type VerdictFilter = 'all' | 'Approved' | 'Rejected' | 'Pending';

export default function DecisionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [selectedVerdict, setSelectedVerdict] = useState<VerdictFilter>('all');

  const filteredDecisions = useMemo(() => {
    return decisions.filter((decision) => {
      const searchMatch =
        searchTerm === '' ||
        decision.decision.toLowerCase().includes(searchTerm.toLowerCase()) ||
        decision.aiReasoning.toLowerCase().includes(searchTerm.toLowerCase()) ||
        decision.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const categoryMatch = selectedCategory === 'all' || decision.category === selectedCategory;
      const verdictMatch = selectedVerdict === 'all' || decision.finalVerdict === selectedVerdict;

      return searchMatch && categoryMatch && verdictMatch;
    });
  }, [searchTerm, selectedCategory, selectedVerdict]);

  return (
    <main className="min-h-screen w-full bg-background">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative border-b border-slate-700/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Navigation Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-200 mb-6 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Dashboard
          </Link>

          <div className="flex items-start justify-between gap-8 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20"
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
                <h1 className="text-4xl font-bold text-white">Decision Memory</h1>
              </div>
              <p className="text-lg text-slate-400">
                Executive decision timeline with AI reasoning, voting records, and outcome analysis.
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-xl bg-slate-800/40 border border-slate-700"
            >
              <p className="text-xs text-slate-400 uppercase font-bold mb-1">Total Decisions</p>
              <p className="text-2xl font-bold text-white">{decisionMetrics.totalDecisions}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30"
            >
              <p className="text-xs text-emerald-400 uppercase font-bold mb-1">Approved</p>
              <p className="text-2xl font-bold text-emerald-300">{decisionMetrics.approvedDecisions}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30"
            >
              <p className="text-xs text-blue-400 uppercase font-bold mb-1">Successful</p>
              <p className="text-2xl font-bold text-blue-300">{decisionMetrics.successfulOutcomes}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-4 rounded-xl bg-primary/10 border border-primary/30"
            >
              <p className="text-xs text-primary uppercase font-bold mb-1">Avg. Confidence</p>
              <p className="text-2xl font-bold text-primary">{decisionMetrics.averageConfidence}%</p>
            </motion.div>
          </div>

          {/* Search */}
          <div className="mb-6 relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 blur-xl opacity-0 hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50" />
            <div className="relative backdrop-blur-xl rounded-xl border border-slate-700/80 bg-slate-900/40 p-3 flex items-center gap-3">
              <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search decisions, reasoning, tags..."
                className="flex-1 bg-transparent text-white placeholder-slate-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4" />
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {(['all', 'Strategic', 'Product', 'Financial', 'Operational', 'Marketing'] as CategoryFilter[]).map((cat) => (
                  <motion.button
                    key={cat}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all capitalize ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                        : 'bg-slate-800/60 border border-slate-700 text-slate-300 hover:border-primary/50'
                    }`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4" />
                Verdict
              </label>
              <div className="flex flex-wrap gap-2">
                {(['all', 'Approved', 'Rejected', 'Pending'] as VerdictFilter[]).map((verdict) => (
                  <motion.button
                    key={verdict}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedVerdict(verdict)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all capitalize ${
                      selectedVerdict === verdict
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                        : 'bg-slate-800/60 border border-slate-700 text-slate-300 hover:border-primary/50'
                    }`}
                  >
                    {verdict}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {filteredDecisions.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <p className="text-sm text-slate-400">
                Showing {filteredDecisions.length} of {decisions.length} decisions
              </p>
            </motion.div>
            <div>
              {filteredDecisions.map((decision, i) => (
                <DecisionTimelineItem
                  key={decision.id}
                  decision={decision}
                  index={i}
                  isLast={i === filteredDecisions.length - 1}
                />
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Sparkles className="w-12 h-12 text-slate-600 mx-auto mb-4 opacity-50" />
            <p className="text-lg text-slate-400">No decisions match your filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedVerdict('all');
              }}
              className="mt-4 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 justify-center mt-16"
        >
          <Link
            href="/boardroom"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl font-semibold text-white transition-all inline-flex items-center gap-2"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to Boardroom
          </Link>
          <Link
            href="/recommendations"
            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 rounded-xl font-semibold text-white transition-all inline-flex items-center gap-2"
          >
            View Recommendations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
