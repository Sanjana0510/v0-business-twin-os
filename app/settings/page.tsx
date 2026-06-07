'use client';

import { motion } from 'framer-motion';
import { Building2, Users, Bell, Lock, CreditCard, Key, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const settings = [
  {
    id: 'company',
    label: 'Company Profile',
    icon: Building2,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'team',
    label: 'Team Management',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: Bell,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'security',
    label: 'Security',
    icon: Lock,
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: CreditCard,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'api',
    label: 'API Keys',
    icon: Key,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    id: 'theme',
    label: 'Theme Preferences',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
  },
];

export default function SettingsPage() {
  const [selectedSetting, setSelectedSetting] = useState('company');

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
              <h1 className="text-3xl font-bold text-foreground">Settings</h1>
              <p className="text-sm text-muted-foreground mt-1">Manage your workspace</p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-full px-6 py-8">
          <div className="grid grid-cols-12 gap-6">
            {/* Settings Menu */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="col-span-12 lg:col-span-3"
            >
              <div className="space-y-2">
                {settings.map((setting, i) => {
                  const Icon = setting.icon;
                  return (
                    <motion.button
                      key={setting.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                      whileHover={{ x: 4 }}
                      onClick={() => setSelectedSetting(setting.id)}
                      className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200 ${
                        selectedSetting === setting.id
                          ? 'border-primary bg-slate-800/50 shadow-lg shadow-primary/10'
                          : 'border-slate-700 bg-slate-800/30 hover:bg-slate-800/40'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{setting.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Settings Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              key={selectedSetting}
              className="col-span-12 lg:col-span-9"
            >
              {selectedSetting === 'company' && (
                <div className="space-y-6">
                  <div className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-white mb-6">Company Profile</h3>
                    <div className="space-y-4">
                      {[
                        { label: 'Company Name', value: 'Twin OS Inc.' },
                        { label: 'Industry', value: 'B2B SaaS' },
                        { label: 'Founded', value: '2021' },
                        { label: 'Headquarters', value: 'San Francisco, CA' },
                      ].map((field, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-slate-400">{field.label}</span>
                          <input
                            type="text"
                            defaultValue={field.value}
                            className="bg-slate-800/50 text-white px-4 py-2 rounded-lg border border-slate-700 focus:border-primary focus:outline-none"
                          />
                        </div>
                      ))}
                    </div>
                    <Button className="mt-6">Save Changes</Button>
                  </div>
                </div>
              )}

              {selectedSetting === 'team' && (
                <div className="space-y-6">
                  <div className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-white mb-6">Team Members</h3>
                    <div className="space-y-3 mb-6">
                      {[
                        { name: 'Sarah Chen', role: 'CEO', status: 'Active' },
                        { name: 'Marcus Johnson', role: 'CTO', status: 'Active' },
                        { name: 'Priya Patel', role: 'CFO', status: 'Active' },
                      ].map((member, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg">
                          <div>
                            <p className="font-semibold text-white">{member.name}</p>
                            <p className="text-sm text-slate-400">{member.role}</p>
                          </div>
                          <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-sm font-medium">
                            {member.status}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button className="gap-2">
                      <span>+ Invite Team Member</span>
                    </Button>
                  </div>
                </div>
              )}

              {selectedSetting === 'notifications' && (
                <div className="space-y-6">
                  <div className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-white mb-6">Notification Preferences</h3>
                    <div className="space-y-4">
                      {[
                        { label: 'Email Notifications', enabled: true },
                        { label: 'Slack Alerts', enabled: true },
                        { label: 'Daily Reports', enabled: false },
                        { label: 'Alert on Risk Detection', enabled: true },
                      ].map((notif, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-white">{notif.label}</span>
                          <input type="checkbox" defaultChecked={notif.enabled} className="w-5 h-5" />
                        </div>
                      ))}
                    </div>
                    <Button className="mt-6">Save Preferences</Button>
                  </div>
                </div>
              )}

              {selectedSetting === 'security' && (
                <div className="space-y-6">
                  <div className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-white mb-6">Security Settings</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-800/30 rounded-lg">
                        <p className="font-semibold text-white mb-2">Two-Factor Authentication</p>
                        <p className="text-sm text-slate-400 mb-3">Enabled</p>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                      <div className="p-4 bg-slate-800/30 rounded-lg">
                        <p className="font-semibold text-white mb-2">Session Timeout</p>
                        <p className="text-sm text-slate-400 mb-3">30 minutes</p>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedSetting === 'billing' && (
                <div className="space-y-6">
                  <div className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-white mb-6">Billing Information</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-slate-400 mb-1">Current Plan</p>
                        <p className="text-2xl font-bold text-white">Enterprise</p>
                      </div>
                      <div>
                        <p className="text-slate-400 mb-1">Monthly Invoice</p>
                        <p className="text-2xl font-bold text-white">$4,999</p>
                      </div>
                      <Button>Update Payment Method</Button>
                      <Button variant="outline">View Invoices</Button>
                    </div>
                  </div>
                </div>
              )}

              {selectedSetting === 'api' && (
                <div className="space-y-6">
                  <div className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-white mb-6">API Keys</h3>
                    <div className="space-y-3 mb-6">
                      {[
                        { name: 'Production Key', key: 'twos_prod_abc123...' },
                        { name: 'Development Key', key: 'twos_dev_xyz789...' },
                      ].map((api, i) => (
                        <div key={i} className="p-4 bg-slate-800/30 rounded-lg flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-white">{api.name}</p>
                            <p className="text-sm text-slate-400 font-mono">{api.key}</p>
                          </div>
                          <Button variant="outline" size="sm">Copy</Button>
                        </div>
                      ))}
                    </div>
                    <Button>Generate New Key</Button>
                  </div>
                </div>
              )}

              {selectedSetting === 'theme' && (
                <div className="space-y-6">
                  <div className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-white mb-6">Theme Preferences</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { name: 'Midnight Executive', colors: ['#6366f1', '#8b5cf6', '#ec4899'] },
                        { name: 'Stripe Elite', colors: ['#06b6d4', '#0ea5e9', '#3b82f6'] },
                        { name: 'Linear Pro', colors: ['#a855f7', '#d946ef', '#f59e0b'] },
                      ].map((theme, i) => (
                        <button
                          key={i}
                          className="p-4 rounded-lg border border-slate-700 hover:border-slate-600 transition-all"
                        >
                          <p className="font-semibold text-white mb-2">{theme.name}</p>
                          <div className="flex gap-1">
                            {theme.colors.map((color, ci) => (
                              <div key={ci} className="w-6 h-6 rounded" style={{ backgroundColor: color }} />
                            ))}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
