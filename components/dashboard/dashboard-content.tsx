'use client';

import { motion } from 'framer-motion';
import { Zap, TrendingUp, AlertCircle, Lightbulb, BarChart3 } from 'lucide-react';
import { HeroCommandCenter } from '@/components/dashboard/hero-command-center';
import { KPICard } from '@/components/dashboard/kpi-card';
import { ChartCard } from '@/components/dashboard/chart-card';
import { Button } from '@/components/ui/button';
import {
  kpiData,
  revenueTrendData,
  customerGrowthData,
  cashFlowData,
  funnelData,
  retentionData,
  recentAlerts,
} from '@/lib/mock-data';

export default function DashboardContent() {
  const iconMap: Record<string, React.ReactNode> = {
    '💰': <span className="text-xl">💰</span>,
    '👥': <span className="text-xl">👥</span>,
    '📈': <span className="text-xl">📈</span>,
    '❤️': <span className="text-xl">❤️</span>,
    '📉': <span className="text-xl">📉</span>,
    '🎯': <span className="text-xl">🎯</span>,
    '🛒': <span className="text-xl">🛒</span>,
    '💸': <span className="text-xl">💸</span>,
  };

  return (
    <div className="w-full bg-background">
      {/* Executive Command Center Hero */}
      <HeroCommandCenter />

      {/* Main Content */}
      <div className="max-w-full px-6 py-8 sm:py-10">
        {/* Quick Actions - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-12 gap-4 mb-12"
        >
          <Button className="col-span-12 sm:col-span-6 lg:col-span-3 gap-2 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300 h-11 font-semibold text-base">
            <Zap className="w-5 h-5" />
            <span>Ask Copilot</span>
          </Button>
          <Button variant="outline" className="col-span-12 sm:col-span-6 lg:col-span-3 gap-2 h-11 font-semibold text-base border-slate-700 hover:bg-slate-800 hover:shadow-lg transition-all duration-300">
            <BarChart3 className="w-5 h-5" />
            <span>Generate Report</span>
          </Button>
          <Button variant="outline" className="col-span-12 sm:col-span-6 lg:col-span-3 gap-2 h-11 font-semibold text-base border-slate-700 hover:bg-slate-800 hover:shadow-lg transition-all duration-300">
            <TrendingUp className="w-5 h-5" />
            <span>Analyze Growth</span>
          </Button>
          <Button variant="outline" className="col-span-12 sm:col-span-6 lg:col-span-3 gap-2 h-11 font-semibold text-base border-slate-700 hover:bg-slate-800 hover:shadow-lg transition-all duration-300">
            <AlertCircle className="w-5 h-5" />
            <span>Detect Risks</span>
          </Button>
        </motion.div>

        {/* KPI Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.32 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold text-white">Key Performance Indicators</h2>
          <p className="text-slate-400 text-sm mt-1">Real-time metrics across your business</p>
        </motion.div>

        {/* KPI Cards - 12 Column Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="grid grid-cols-12 gap-6 mb-12"
        >
          {kpiData.map((kpi, i) => (
            <div key={i} className="col-span-12 sm:col-span-6 lg:col-span-3">
              <KPICard
                title={kpi.title}
                value={kpi.value}
                trend={kpi.trend}
                icon={iconMap[kpi.icon] || kpi.icon}
                index={i}
              />
            </div>
          ))}
        </motion.div>

        {/* Charts Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.38 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold text-white">Analytics & Insights</h2>
          <p className="text-slate-400 text-sm mt-1">Detailed performance analysis and forecasting</p>
        </motion.div>

        {/* Charts Grid - 12 Column Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-12 gap-6 mb-12"
        >
          <div className="col-span-12 lg:col-span-6">
            <ChartCard
              title="Revenue Trend"
              subtitle="Last 6 months performance"
              data={revenueTrendData}
              type="area"
              lines={[
                { key: 'revenue', name: 'Actual' },
                { key: 'target', name: 'Target' },
              ]}
              index={0}
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ChartCard
              title="Customer Growth"
              subtitle="New customers vs churn"
              data={customerGrowthData}
              type="bar"
              lines={[
                { key: 'new', name: 'New' },
                { key: 'churn', name: 'Churn' },
              ]}
              index={1}
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ChartCard
              title="Cash Flow"
              subtitle="Inflow vs outflow"
              data={cashFlowData}
              type="line"
              lines={[
                { key: 'inflow', name: 'Inflow' },
                { key: 'outflow', name: 'Outflow' },
              ]}
              index={2}
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ChartCard
              title="Retention Rate"
              subtitle="Cohort retention over time"
              data={retentionData}
              type="line"
              lines={[{ key: 'rate', name: 'Rate %' }]}
              index={3}
            />
          </div>
        </motion.div>

        {/* Bottom Section - 12 Column Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="grid grid-cols-12 gap-6 pb-8"
        >
          {/* Alerts - 8 columns */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="col-span-12 lg:col-span-8"
          >
            <div className="relative group">
              {/* Background Layers */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50" />

              {/* Main Card */}
              <div className="relative backdrop-blur-xl rounded-2xl border border-slate-700/80 bg-slate-900/40 p-7 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-7">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <AlertCircle className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Recent Alerts & Opportunities
                  </h3>
                </div>

                <div className="space-y-3">
                  {recentAlerts.map((alert, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.52 + i * 0.05 }}
                      className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:border-slate-600 hover:bg-slate-800/60 transition-all cursor-pointer group/alert"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl flex-shrink-0">{alert.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-white text-sm">
                            {alert.title}
                          </p>
                          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                            {alert.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Insights - 4 columns */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="col-span-12 lg:col-span-4"
          >
            <div className="relative group h-full">
              {/* Background Layers */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50" />

              {/* Main Card */}
              <div className="relative backdrop-blur-xl rounded-2xl border border-slate-700/80 bg-slate-900/40 p-7 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-7">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <Lightbulb className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    AI Insights
                  </h3>
                </div>

                <div className="space-y-3 flex-1">
                  <motion.div
                    whileHover={{ x: 5, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/10 border border-primary/30 hover:border-primary/50 transition-all cursor-pointer shadow-lg shadow-primary/5"
                  >
                    <p className="text-sm font-bold text-primary mb-2">
                      Revenue Insight
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Your Q3 pipeline looks strong.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/10 border border-blue-500/30 hover:border-blue-500/50 transition-all cursor-pointer shadow-lg shadow-blue-500/5"
                  >
                    <p className="text-sm font-bold text-blue-300 mb-2">
                      Efficiency Alert
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      CAC decreased 12%.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/10 border border-amber-500/30 hover:border-amber-500/50 transition-all cursor-pointer shadow-lg shadow-amber-500/5"
                  >
                    <p className="text-sm font-bold text-amber-300 mb-2">
                      Risk Signal
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Monitor segment C churn.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
