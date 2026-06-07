'use client';

import { motion } from 'framer-motion';
import { Zap, TrendingUp, AlertCircle, Lightbulb, BarChart3 } from 'lucide-react';
import { Sidebar } from '@/components/layout/sidebar';
import { TopNav } from '@/components/layout/top-nav';
import { KPICard } from '@/components/dashboard/kpi-card';
import { ChartCard } from '@/components/dashboard/chart-card';
import { AICopilot } from '@/components/dashboard/ai-copilot';
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

export default function Dashboard() {
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      {/* Layout */}
      <Sidebar />
      <TopNav />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="lg:ml-0 pt-20 pb-12 px-4 md:px-6"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Executive Dashboard
            </h1>
            <p className="text-muted-foreground">
              Real-time insights and AI-powered business intelligence
            </p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
          >
            <Button className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Zap className="w-4 h-4" />
              <span>Ask Copilot</span>
            </Button>
            <Button variant="outline" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              <span>Generate Report</span>
            </Button>
            <Button variant="outline" className="gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Analyze Growth</span>
            </Button>
            <Button variant="outline" className="gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>Detect Risks</span>
            </Button>
          </motion.div>

          {/* KPI Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {kpiData.map((kpi, i) => (
              <KPICard
                key={i}
                title={kpi.title}
                value={kpi.value}
                trend={kpi.trend}
                icon={iconMap[kpi.icon] || kpi.icon}
                index={i}
              />
            ))}
          </motion.div>

          {/* Charts Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
          >
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
            <ChartCard
              title="Retention Rate"
              subtitle="Cohort retention over time"
              data={retentionData}
              type="line"
              lines={[{ key: 'rate', name: 'Rate %' }]}
              index={3}
            />
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {/* Alerts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 glass-card"
            >
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
                    transition={{ delay: 0.45 + i * 0.05 }}
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
            </motion.div>

            {/* AI Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card"
            >
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">
                  AI Insights
                </h3>
              </div>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/40 transition-all cursor-pointer"
                >
                  <p className="text-sm font-medium text-primary mb-1">
                    Revenue Insight
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Your Q3 pipeline looks strong. Consider accelerating sales outreach.
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
                    Your CAC decreased 12%. Scaling this channel is recommended.
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
                    Monitor churn in segment C. Early intervention recommended.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>

      {/* AI Copilot */}
      <AICopilot />
    </div>
  );
}
