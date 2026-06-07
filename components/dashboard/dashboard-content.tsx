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
      <div className="max-w-full px-6 py-6 sm:py-8">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-12 gap-3 mb-8"
        >
          <Button className="col-span-12 sm:col-span-6 lg:col-span-3 gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Zap className="w-4 h-4" />
            <span>Ask Copilot</span>
          </Button>
          <Button variant="outline" className="col-span-12 sm:col-span-6 lg:col-span-3 gap-2">
            <BarChart3 className="w-4 h-4" />
            <span>Generate Report</span>
          </Button>
          <Button variant="outline" className="col-span-12 sm:col-span-6 lg:col-span-3 gap-2">
            <TrendingUp className="w-4 h-4" />
            <span>Analyze Growth</span>
          </Button>
          <Button variant="outline" className="col-span-12 sm:col-span-6 lg:col-span-3 gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>Detect Risks</span>
          </Button>
        </motion.div>

        {/* KPI Cards - 12 Column Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="grid grid-cols-12 gap-4 mb-8"
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

        {/* Charts Grid - 12 Column Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-12 gap-6 mb-8"
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
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">
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
                    className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{alert.icon}</span>
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm">
                          {alert.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {alert.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">
                  AI Insights
                </h3>
              </div>

              <div className="space-y-3">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/40 transition-all cursor-pointer"
                >
                  <p className="text-sm font-medium text-primary mb-1">
                    Revenue Insight
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Your Q3 pipeline looks strong.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 hover:border-secondary/40 transition-all cursor-pointer"
                >
                  <p className="text-sm font-medium text-secondary mb-1">
                    Efficiency Alert
                  </p>
                  <p className="text-xs text-muted-foreground">
                    CAC decreased 12%.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 hover:border-accent/40 transition-all cursor-pointer"
                >
                  <p className="text-sm font-medium text-accent mb-1">
                    Risk Signal
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Monitor segment C churn.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
