'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  AlertTriangle,
  Zap,
  Clock,
  RefreshCw,
  Activity,
  Target,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CommandCenterData {
  healthScore: number;
  revenueGrowth: number;
  activeRisks: number;
  opportunities: number;
  lastSync: string;
}

const mockData: CommandCenterData = {
  healthScore: 94,
  revenueGrowth: 23,
  activeRisks: 3,
  opportunities: 7,
  lastSync: '2 minutes ago',
};

export function HeroCommandCenter() {
  const [mounted, setMounted] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  if (!mounted) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-b border-border bg-gradient-to-br from-background via-background/80 to-background"
    >
      <div className="max-w-full mx-auto px-6 py-8 sm:py-10">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Welcome Section - Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="col-span-12 lg:col-span-4"
          >
            <motion.div variants={itemVariants} className="h-full">
              {/* Welcome Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border border-primary/20 backdrop-blur-xl p-6 sm:p-8">
                {/* Background Glow */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Welcome back
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                      CEO
                    </h1>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                      <p className="text-xs text-muted-foreground mb-2">
                        AI Executive Summary
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        Business performing exceptionally. Revenue trending upward +23% MoM. 1,247
                        active customers. Recommend accelerating Q4 outreach.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Key Metrics - Middle Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="col-span-12 lg:col-span-4 space-y-4"
          >
            {/* Business Health Score */}
            <motion.div variants={itemVariants}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-background/50 border border-border backdrop-blur-xl p-6 group hover:border-primary/40 transition-all duration-300">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-secondary/10" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        Business Health Score
                      </p>
                      <div className="flex items-baseline gap-1">
                        <p className="text-3xl font-bold text-foreground">
                          {mockData.healthScore}
                        </p>
                        <p className="text-lg text-muted-foreground">/100</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Activity className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${mockData.healthScore}%` }}
                      transition={{ delay: 0.6, duration: 1 }}
                      className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                    />
                  </div>

                  <p className="text-xs text-primary font-medium mt-3">
                    Excellent condition
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Revenue Growth */}
            <motion.div variants={itemVariants}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-background/50 border border-border backdrop-blur-xl p-6 group hover:border-primary/40 transition-all duration-300">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-secondary/10" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        Revenue Growth
                      </p>
                      <div className="flex items-baseline gap-1">
                        <p className="text-3xl font-bold text-foreground">
                          +{mockData.revenueGrowth}%
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">vs last month</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20 border border-green-500/40">
                      <ArrowUpRight className="w-6 h-6 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Alerts & Opportunities - Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="col-span-12 lg:col-span-4 space-y-4"
          >
            {/* Active Risks */}
            <motion.div variants={itemVariants}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-background/50 border border-border backdrop-blur-xl p-6 group hover:border-amber-500/40 transition-all duration-300">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-amber-500/10 to-orange-500/10" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        Active Risks
                      </p>
                      <p className="text-3xl font-bold text-foreground">
                        {mockData.activeRisks}
                      </p>
                      <p className="text-xs text-amber-500/80 font-medium mt-2">
                        Require attention
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/20 border border-amber-500/40">
                      <AlertTriangle className="w-6 h-6 text-amber-500" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Growth Opportunities */}
            <motion.div variants={itemVariants}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-background/50 border border-border backdrop-blur-xl p-6 group hover:border-emerald-500/40 transition-all duration-300">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-emerald-500/10 to-teal-500/10" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        Growth Opportunities
                      </p>
                      <p className="text-3xl font-bold text-foreground">
                        {mockData.opportunities}
                      </p>
                      <p className="text-xs text-emerald-500/80 font-medium mt-2">
                        Ready to execute
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20 border border-emerald-500/40">
                      <Target className="w-6 h-6 text-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Sync Status Bar - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Clock className="w-4 h-4 text-muted-foreground" />
            </motion.div>
            <span className="text-xs font-medium text-foreground">
              Last synced:{' '}
              <span className="text-primary font-semibold">{mockData.lastSync}</span>
            </span>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleSync}
            disabled={isSyncing}
            className="gap-2 h-7 text-xs"
          >
            <motion.div
              animate={{ rotate: isSyncing ? 360 : 0 }}
              transition={{ duration: 0.6, repeat: isSyncing ? Infinity : 0 }}
            >
              <RefreshCw className="w-3 h-3" />
            </motion.div>
            {isSyncing ? 'Syncing...' : 'Sync Now'}
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
