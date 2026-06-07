'use client';

import { motion } from 'framer-motion';
import { Plug, CheckCircle, Clock, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const integrations = [
  { id: 1, name: 'Stripe', status: 'connected', lastSync: '2 hours ago', icon: '💳' },
  { id: 2, name: 'Shopify', status: 'connected', lastSync: '1 hour ago', icon: '🛍️' },
  { id: 3, name: 'HubSpot', status: 'connected', lastSync: '3 hours ago', icon: '📊' },
  { id: 4, name: 'QuickBooks', status: 'connected', lastSync: '30 mins ago', icon: '📈' },
  { id: 5, name: 'Google Analytics', status: 'pending', lastSync: 'Awaiting connection', icon: '📉' },
  { id: 6, name: 'Slack', status: 'connected', lastSync: '15 mins ago', icon: '💬' },
  { id: 7, name: 'Salesforce', status: 'available', lastSync: 'Not connected', icon: '🔗' },
  { id: 8, name: 'Notion', status: 'available', lastSync: 'Not connected', icon: '📝' },
  { id: 9, name: 'Airtable', status: 'available', lastSync: 'Not connected', icon: '📋' },
  { id: 10, name: 'Zapier', status: 'available', lastSync: 'Not connected', icon: '⚡' },
];

export default function IntegrationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filtered = integrations.filter(int => {
    const matchesSearch = int.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || int.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const connected = integrations.filter(i => i.status === 'connected');
  const available = integrations.filter(i => i.status === 'available' || i.status === 'pending');

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
              <h1 className="text-3xl font-bold text-foreground">Integrations</h1>
              <p className="text-sm text-muted-foreground mt-1">Connect tools and data sources</p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-full px-6 py-8">
          {/* Connected Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-12 gap-4 mb-8"
          >
            {[
              { label: 'Connected', value: connected.length, color: 'from-emerald-500 to-teal-500' },
              { label: 'Available', value: available.length, color: 'from-blue-500 to-cyan-500' },
              { label: 'Data Sources', value: '7', color: 'from-purple-500 to-pink-500' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
                className="col-span-12 sm:col-span-6 lg:col-span-4 relative group"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50" />
                <div className="relative backdrop-blur-xl rounded-2xl border border-slate-700/80 bg-slate-900/40 p-6 shadow-lg">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{stat.label}</p>
                  <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-700 bg-slate-800/50 text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex gap-2">
              {['all', 'connected', 'available', 'pending'].map(status => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filterStatus === status
                      ? 'bg-primary text-white'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Integration Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="grid grid-cols-12 gap-4"
          >
            {filtered.map((integration, i) => (
              <motion.div
                key={integration.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.04 }}
                whileHover={{ y: -4 }}
                className="col-span-12 sm:col-span-6 lg:col-span-3 relative group"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 group-hover:border-slate-600/50 transition-all" />
                <div className="relative backdrop-blur-xl rounded-2xl border border-slate-700/80 bg-slate-900/40 p-6 shadow-lg">
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4">
                    {integration.status === 'connected' ? (
                      <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
                    ) : integration.status === 'pending' ? (
                      <div className="w-3 h-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50" />
                    ) : (
                      <div className="w-3 h-3 rounded-full bg-slate-500 shadow-lg shadow-slate-500/50" />
                    )}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4">{integration.icon}</div>

                  {/* Content */}
                  <h3 className="font-bold text-white mb-1">{integration.name}</h3>
                  <p className="text-xs text-slate-400 mb-4">
                    {integration.status === 'connected'
                      ? `Last sync: ${integration.lastSync}`
                      : integration.status === 'pending'
                      ? 'Awaiting approval'
                      : 'Not connected'}
                  </p>

                  {/* Button */}
                  {integration.status === 'connected' ? (
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Connected
                    </Button>
                  ) : integration.status === 'pending' ? (
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      Pending
                    </Button>
                  ) : (
                    <Button size="sm" className="w-full gap-2">
                      <Plus className="w-3.5 h-3.5" />
                      Connect
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
