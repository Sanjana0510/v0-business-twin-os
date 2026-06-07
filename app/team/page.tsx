'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, AlertTriangle, Zap, Activity, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const departments = [
  {
    id: 1,
    name: 'Engineering',
    head: 'Sarah Chen',
    size: 34,
    productivity: 92,
    health: 'Excellent',
    capacity: '85%',
    risks: ['High overtime', 'Module complexity'],
    hiring: '+6 engineers needed',
  },
  {
    id: 2,
    name: 'Sales',
    head: 'Marcus Johnson',
    size: 28,
    productivity: 88,
    health: 'Good',
    capacity: '72%',
    risks: ['Q3 pipeline pressure'],
    hiring: '+4 account executives',
  },
  {
    id: 3,
    name: 'Product',
    head: 'Priya Patel',
    size: 16,
    productivity: 86,
    health: 'Good',
    capacity: '68%',
    risks: ['Feature backlog growing'],
    hiring: '+2 product managers',
  },
  {
    id: 4,
    name: 'Marketing',
    head: 'Alex Rivera',
    size: 12,
    productivity: 84,
    health: 'Good',
    capacity: '75%',
    risks: ['Content deadline slippage'],
    hiring: '+1 content specialist',
  },
];

export default function TeamIntelligencePage() {
  const [selectedDept, setSelectedDept] = useState(departments[0]);

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="w-full bg-background">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md px-6 py-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Team Intelligence</h1>
              <p className="text-sm text-muted-foreground mt-1">Workforce analytics and insights</p>
            </div>
            <Button className="gap-2">
              <Users className="w-4 h-4" />
              Team Report
            </Button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-full px-6 py-8">
          {/* Global Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-12 gap-4 mb-8"
          >
            {[
              { label: 'Total Team', value: '90', color: 'from-blue-500 to-cyan-500' },
              { label: 'Avg Productivity', value: '87.5%', color: 'from-emerald-500 to-teal-500' },
              { label: 'Team Health', value: 'Excellent', color: 'from-purple-500 to-pink-500' },
              { label: 'Hiring Needs', value: '+13', color: 'from-orange-500 to-red-500' },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
                className="col-span-12 sm:col-span-6 lg:col-span-3 relative group"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50" />
                <div className="relative backdrop-blur-xl rounded-2xl border border-slate-700/80 bg-slate-900/40 p-6 shadow-lg">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} p-3 mb-4`}>
                    <Zap className="w-full h-full text-white" />
                  </div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{metric.label}</p>
                  <p className="text-2xl font-bold text-white mt-2">{metric.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Department Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-12 gap-4 mb-8"
          >
            {departments.map((dept, i) => (
              <motion.button
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedDept(dept)}
                className={`col-span-12 sm:col-span-6 lg:col-span-3 text-left px-6 py-5 rounded-xl border transition-all duration-200 ${
                  selectedDept.id === dept.id
                    ? 'border-primary bg-slate-800/50 shadow-lg shadow-primary/10'
                    : 'border-slate-700 bg-slate-800/30 hover:bg-slate-800/40 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold text-white">{dept.name}</p>
                  <span className={`text-xs font-medium px-2 py-1 rounded-lg ${
                    dept.health === 'Excellent' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                  }`}>
                    {dept.health}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-400">Head: {dept.head}</p>
                  <p className="text-xs text-slate-400">Team Size: {dept.size} people</p>
                  <div className="mt-3 pt-3 border-t border-slate-700/50">
                    <p className="text-xs font-semibold text-white">Productivity: {dept.productivity}%</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Department Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-12 gap-6"
          >
            {/* Left Column */}
            <div className="col-span-12 lg:col-span-6 space-y-6">
              {/* Department Overview */}
              <div className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg">
                <h3 className="font-bold text-white mb-6">{selectedDept.name} Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Department Head</span>
                    <span className="font-semibold text-white">{selectedDept.head}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Team Size</span>
                    <span className="font-semibold text-white">{selectedDept.size} people</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Capacity Usage</span>
                    <span className="font-semibold text-white">{selectedDept.capacity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Productivity Score</span>
                    <span className="font-semibold text-emerald-400">{selectedDept.productivity}%</span>
                  </div>
                </div>
              </div>

              {/* Risks */}
              <div className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-red-500/20">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-bold text-white">Potential Risks</h3>
                </div>
                <ul className="space-y-2">
                  {selectedDept.risks.map((risk, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-300">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-12 lg:col-span-6 space-y-6">
              {/* Performance Metrics */}
              <div className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg">
                <h3 className="font-bold text-white mb-6">Performance Indicators</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Delivery Rate', value: '94%', trend: '+3%' },
                    { label: 'Code Quality', value: '88%', trend: '+5%' },
                    { label: 'Team Satisfaction', value: '86%', trend: '+2%' },
                    { label: 'Sprint Velocity', value: '92%', trend: '+8%' },
                  ].map((metric, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">{metric.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-white">{metric.value}</span>
                        <span className="text-xs text-emerald-400 font-medium">{metric.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hiring Recommendation */}
              <div className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-white">Hiring Recommendation</h3>
                </div>
                <p className="text-sm text-slate-300 mb-4">{selectedDept.hiring}</p>
                <Button className="w-full gap-2">
                  <Users className="w-4 h-4" />
                  View Positions
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
