'use client';

import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Users, DollarSign, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const forecastData = [
  { month: 'Jan', conservative: 2200, expected: 2400, aggressive: 2600 },
  { month: 'Feb', conservative: 2400, expected: 2600, aggressive: 2900 },
  { month: 'Mar', conservative: 2800, expected: 3200, aggressive: 3600 },
  { month: 'Apr', conservative: 3400, expected: 4200, aggressive: 5100 },
  { month: 'May', conservative: 4100, expected: 5400, aggressive: 6800 },
  { month: 'Jun', conservative: 5200, expected: 6800, aggressive: 8200 },
];

const forecasts = [
  {
    id: 1,
    type: 'Revenue Forecast',
    icon: DollarSign,
    color: 'from-emerald-500 to-teal-500',
    current: '$3.8M',
    expected: '$6.8M',
    confidence: '94%',
    timeframe: 'Next 6 months',
    growth: '+78.9%',
  },
  {
    id: 2,
    type: 'Customer Forecast',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    current: '12,400',
    expected: '18,900',
    confidence: '91%',
    timeframe: 'Next 6 months',
    growth: '+52.4%',
  },
  {
    id: 3,
    type: 'Churn Forecast',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500',
    current: '3.2%',
    expected: '2.1%',
    confidence: '88%',
    timeframe: 'Next 6 months',
    growth: '-34.4%',
  },
  {
    id: 4,
    type: 'Profit Forecast',
    icon: BarChart3,
    color: 'from-purple-500 to-pink-500',
    current: '$1.2M',
    expected: '$2.8M',
    confidence: '86%',
    timeframe: 'Next 6 months',
    growth: '+133.3%',
  },
  {
    id: 5,
    type: 'Cash Flow Forecast',
    icon: Zap,
    color: 'from-yellow-500 to-amber-500',
    current: '$890K',
    expected: '$2.1M',
    confidence: '89%',
    timeframe: 'Next 6 months',
    growth: '+135.9%',
  },
];

export default function ForecastingPage() {
  const [selectedScenario, setSelectedScenario] = useState('expected');
  const [selectedForecast, setSelectedForecast] = useState(forecasts[0]);

  const scenarios = [
    { id: 'conservative', label: 'Conservative', description: 'Lower growth assumptions' },
    { id: 'expected', label: 'Expected', description: 'Base case scenario' },
    { id: 'aggressive', label: 'Aggressive', description: 'Optimistic growth' },
  ];

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
              <h1 className="text-3xl font-bold text-foreground">AI Forecasting</h1>
              <p className="text-sm text-muted-foreground mt-1">6-month predictive analytics</p>
            </div>
            <Button className="gap-2">
              <BarChart3 className="w-4 h-4" />
              Run Simulation
            </Button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-full px-6 py-8">
          {/* Scenario Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <p className="text-sm font-medium text-slate-400 mb-3">Scenario Simulator</p>
            <div className="grid grid-cols-3 gap-4">
              {scenarios.map((scenario) => (
                <motion.button
                  key={scenario.id}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedScenario(scenario.id)}
                  className={`px-6 py-4 rounded-xl border transition-all duration-200 ${
                    selectedScenario === scenario.id
                      ? 'border-primary bg-slate-800/50 shadow-lg shadow-primary/10'
                      : 'border-slate-700 bg-slate-800/30 hover:bg-slate-800/40'
                  }`}
                >
                  <p className="font-semibold text-white">{scenario.label}</p>
                  <p className="text-xs text-slate-400 mt-1">{scenario.description}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Forecast Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-12 gap-4 mb-8"
          >
            {forecasts.map((forecast, i) => {
              const Icon = forecast.icon;
              return (
                <motion.button
                  key={forecast.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedForecast(forecast)}
                  className={`col-span-12 sm:col-span-6 lg:col-span-2.4 relative group rounded-xl border transition-all duration-200 ${
                    selectedForecast.id === forecast.id
                      ? 'border-primary bg-slate-800/50 shadow-lg shadow-primary/10'
                      : 'border-slate-700 bg-slate-800/30 hover:bg-slate-800/40 hover:border-slate-600'
                  }`}
                >
                  <div className="p-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${forecast.color} p-2 mb-3`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{forecast.type}</p>
                    <p className="text-lg font-bold text-white mt-2">{forecast.expected}</p>
                    <p className="text-xs text-emerald-400 mt-1 font-medium">{forecast.growth}</p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Main Forecast Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg mb-8"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">{selectedForecast.type}</h3>
              <p className="text-sm text-slate-400 mt-1">Next 6 months projection</p>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={forecastData}>
                <defs>
                  <linearGradient id="colorConservative" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorExpected" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorAggressive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="0" stroke="#334155" vertical={false} strokeOpacity={0.1} />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px', fontWeight: 500 }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px', fontWeight: 500 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  }}
                  labelStyle={{ color: '#f1f5f9', fontWeight: 600 }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="conservative"
                  stroke="#ef4444"
                  fill="url(#colorConservative)"
                  strokeWidth={2}
                  isAnimationActive={true}
                />
                <Area
                  type="monotone"
                  dataKey="expected"
                  stroke="#3b82f6"
                  fill="url(#colorExpected)"
                  strokeWidth={3}
                  isAnimationActive={true}
                />
                <Area
                  type="monotone"
                  dataKey="aggressive"
                  stroke="#10b981"
                  fill="url(#colorAggressive)"
                  strokeWidth={2}
                  isAnimationActive={true}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Forecast Details */}
          <div className="grid grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="col-span-12 lg:col-span-6 relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg"
            >
              <h3 className="font-bold text-white mb-4">Current Performance</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Current Value</span>
                  <span className="font-bold text-white">{selectedForecast.current}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Timeframe</span>
                  <span className="font-bold text-white">{selectedForecast.timeframe}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Confidence Score</span>
                  <span className="font-bold text-emerald-400">{selectedForecast.confidence}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="col-span-12 lg:col-span-6 relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg"
            >
              <h3 className="font-bold text-white mb-4">6-Month Projection</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Expected Value</span>
                  <span className="font-bold text-white">{selectedForecast.expected}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Growth Rate</span>
                  <span className="font-bold text-emerald-400">{selectedForecast.growth}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Scenario</span>
                  <span className="font-bold text-white capitalize">{selectedScenario}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
