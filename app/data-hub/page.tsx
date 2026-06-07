'use client';

import { motion } from 'framer-motion';
import { Upload, Plus, Activity, AlertCircle, CheckCircle, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const dataMetrics = [
  { label: 'Data Completeness', value: '94%', icon: CheckCircle, color: 'emerald' },
  { label: 'Health Score', value: '88%', icon: Activity, color: 'blue' },
  { label: 'Last Updated', value: '2 mins ago', icon: BarChart3, color: 'purple' },
];

const dataPoints = [
  { name: 'Monthly Revenue', value: '$4.2M', source: 'Stripe', status: 'Complete', icon: '💰' },
  { name: 'Total Customers', value: '15,200', source: 'Manual + Stripe', status: 'Complete', icon: '👥' },
  { name: 'Churn Rate', value: '2.3%', source: 'Manual', status: 'Complete', icon: '📉' },
  { name: 'Customer Lifetime Value', value: '$12,400', source: 'Calculated', status: 'Complete', icon: '📊' },
  { name: 'Marketing Spend', value: '$340K', source: 'CSV Upload', status: 'Complete', icon: '📢' },
  { name: 'Employee Count', value: '90', source: 'Manual', status: 'Complete', icon: '👨‍💼' },
  { name: 'Average CAC', value: '$380', source: 'Calculated', status: 'Incomplete', icon: '💵' },
  { name: 'NPS Score', value: '72', source: 'Survey Data', status: 'Complete', icon: '⭐' },
];

export default function DataHubPage() {
  const [activeTab, setActiveTab] = useState('manual');

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
              <h1 className="text-3xl font-bold text-foreground">Data Hub</h1>
              <p className="text-sm text-muted-foreground mt-1">Universal business data center</p>
            </div>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add Data
            </Button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-full px-6 py-8">
          {/* Data Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-12 gap-4 mb-8"
          >
            {dataMetrics.map((metric, i) => {
              const Icon = metric.icon;
              const colorClass = metric.color === 'emerald' ? 'from-emerald-500 to-teal-500' :
                                metric.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                                'from-purple-500 to-pink-500';
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="col-span-12 sm:col-span-6 lg:col-span-4 relative group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50" />
                  <div className="relative backdrop-blur-xl rounded-2xl border border-slate-700/80 bg-slate-900/40 p-6 shadow-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{metric.label}</p>
                        <p className="text-3xl font-bold text-white mt-2">{metric.value}</p>
                      </div>
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${colorClass}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Data Input Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-sm font-medium text-slate-400 mb-3">Add Data</p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { id: 'manual', label: 'Manual Entry', icon: Plus },
                { id: 'upload', label: 'File Upload', icon: Upload },
                { id: 'integration', label: 'Integrations', icon: BarChart3 },
              ].map((method) => {
                const Icon = method.icon;
                return (
                  <motion.button
                    key={method.id}
                    whileHover={{ y: -4 }}
                    onClick={() => setActiveTab(method.id)}
                    className={`px-6 py-4 rounded-xl border transition-all duration-200 flex items-center gap-3 ${
                      activeTab === method.id
                        ? 'border-primary bg-slate-800/50 shadow-lg shadow-primary/10'
                        : 'border-slate-700 bg-slate-800/30 hover:bg-slate-800/40'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <div className="text-left">
                      <p className="font-semibold text-white">{method.label}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Data List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h3 className="font-bold text-white mb-4">Data Points ({dataPoints.length})</h3>
            <div className="space-y-3">
              {dataPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.03 }}
                  className="relative group rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-slate-800/40 p-4 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-2xl">{point.icon}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-white">{point.name}</p>
                        <p className="text-xs text-slate-400 mt-1">Source: {point.source}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-bold text-white">{point.value}</p>
                        <span className={`text-xs font-medium px-2 py-1 rounded-lg ${
                          point.status === 'Complete'
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : 'bg-amber-500/20 text-amber-300'
                        }`}>
                          {point.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upload Section */}
          {activeTab === 'upload' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 relative group rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900/40 p-12 backdrop-blur-xl text-center"
            >
              <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Upload Data</h3>
              <p className="text-sm text-slate-400 mb-6">CSV, Excel, or JSON files</p>
              <Button>Choose File</Button>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
