'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Filter } from 'lucide-react';
import Link from 'next/link';
import { RecommendationCardComponent } from '@/components/recommendations/recommendation-card';
import { recommendations } from '@/lib/recommendations-data';
import type { RecommendationCard } from '@/lib/recommendations-data';

type CategoryFilter = 'all' | 'Revenue' | 'Cost' | 'Pricing' | 'Churn' | 'Marketing' | 'Product' | 'Partnership' | 'Retention';
type PriorityFilter = 'all' | 'High' | 'Medium' | 'Low';

const categories: { label: string; value: CategoryFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Revenue', value: 'Revenue' },
  { label: 'Cost', value: 'Cost' },
  { label: 'Pricing', value: 'Pricing' },
  { label: 'Churn', value: 'Churn' },
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Product', value: 'Product' },
  { label: 'Partnership', value: 'Partnership' },
  { label: 'Retention', value: 'Retention' },
];

const priorityOptions: { label: string; value: PriorityFilter }[] = [
  { label: 'All Priorities', value: 'all' },
  { label: 'High Impact', value: 'High' },
  { label: 'Medium Impact', value: 'Medium' },
  { label: 'Quick Wins', value: 'Low' },
];

export default function RecommendationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [selectedPriority, setSelectedPriority] = useState<PriorityFilter>('all');

  const filteredRecommendations = useMemo(() => {
    return recommendations.filter((rec) => {
      const categoryMatch = selectedCategory === 'all' || rec.category === selectedCategory;
      const priorityMatch = selectedPriority === 'all' || rec.priority === selectedPriority;
      return categoryMatch && priorityMatch;
    });
  }, [selectedCategory, selectedPriority]);

  const totalPotentialROI = filteredRecommendations.reduce((sum, rec) => {
    const roiMatch = rec.estimatedROI.match(/\+\$([\d.]+)M/);
    if (roiMatch) {
      return sum + parseFloat(roiMatch[1]);
    }
    const roiMatch2 = rec.estimatedROI.match(/\+\$([\d.]+)K/);
    if (roiMatch2) {
      return sum + parseFloat(roiMatch2[1]) / 1000;
    }
    return sum;
  }, 0);

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
                <h1 className="text-4xl font-bold text-white">AI Opportunity Engine</h1>
              </div>
              <p className="text-lg text-slate-400">
                Discover data-driven recommendations to maximize revenue, reduce costs, and accelerate growth.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 whitespace-nowrap"
            >
              <p className="text-xs text-slate-400 uppercase font-bold mb-1">Total Potential ROI</p>
              <p className="text-3xl font-bold text-primary">${totalPotentialROI.toFixed(1)}M</p>
            </motion.div>
          </div>

          {/* Filters */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4" />
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <motion.button
                    key={cat.value}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      selectedCategory === cat.value
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                        : 'bg-slate-800/60 border border-slate-700 text-slate-300 hover:border-primary/50'
                    }`}
                  >
                    {cat.label}
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4" />
                Priority
              </label>
              <div className="flex flex-wrap gap-2">
                {priorityOptions.map((opt) => (
                  <motion.button
                    key={opt.value}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedPriority(opt.value)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      selectedPriority === opt.value
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                        : 'bg-slate-800/60 border border-slate-700 text-slate-300 hover:border-primary/50'
                    }`}
                  >
                    {opt.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Recommendations Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredRecommendations.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 flex items-center justify-between"
            >
              <h2 className="text-xl font-bold text-white">
                {filteredRecommendations.length} Recommendation{filteredRecommendations.length !== 1 ? 's' : ''}
              </h2>
              <p className="text-sm text-slate-400">
                Sorted by impact potential
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecommendations
                .sort((a, b) => b.impactScore - a.impactScore)
                .map((rec, i) => (
                  <RecommendationCardComponent key={rec.id} rec={rec} index={i} />
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
            <p className="text-lg text-slate-400">No recommendations match your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedPriority('all');
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
            href="/decisions"
            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 rounded-xl font-semibold text-white transition-all inline-flex items-center gap-2"
          >
            View Decision History
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
