'use client';

import Image from 'next/image';
import { SignIn } from '@clerk/nextjs';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  useEffect(() => {
    const hideClerkDevMode = () => {
      const dialogs = document.querySelectorAll('[role="alertdialog"], [role="dialog"], .cl-modal, .cl-devModeBanner');
      dialogs.forEach((dialog) => {
        dialog.style.display = 'none !important';
        dialog.style.visibility = 'hidden';
        dialog.style.pointerEvents = 'none';
      });
    };
    hideClerkDevMode();
    const timer = setTimeout(hideClerkDevMode, 500);
    const observer = new MutationObserver(hideClerkDevMode);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1429] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-blue-500/20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">⧛</span>
          </div>
          <span className="font-semibold text-lg">Business Twin OS</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-bold">SA</div>
          <span>Sanjana Solanki</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[calc(100vh-80px)]">
        {/* Left - Login Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center px-8 py-12 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27]"
        >
          <div className="w-full max-w-md">
            <h1 className="text-4xl font-bold mb-3">Welcome Back</h1>
            <p className="text-gray-400 mb-8">Access your AI Executive Intelligence Platform</p>

            {/* Login Card with Glow */}
            <motion.div
              className="relative p-8 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-transparent backdrop-blur-xl shadow-2xl shadow-blue-500/10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

              <div className="relative z-10">
                <h2 className="text-xl font-semibold mb-1 text-center">Sign in to business-twin-os</h2>
                <p className="text-sm text-gray-400 text-center mb-6">Welcome back! Please sign in to continue</p>

                {/* Clerk SignIn */}
                <div className="[&_.cl-rootBox]:bg-transparent [&_.cl-rootBox]:shadow-none [&_.cl-card]:bg-transparent [&_.cl-card]:shadow-none [&_.cl-card]:border-0">
                  <SignIn
                    appearance={{
                      elements: {
                        rootBox: 'w-full',
                        card: 'w-full shadow-none border-0 bg-transparent',
                        socialButtonsBlockButton: 'w-full h-11 border border-blue-500/30 bg-blue-900/20 text-white rounded-lg hover:bg-blue-900/40 hover:border-blue-400/50 transition-all duration-200 font-medium',
                        formButtonPrimary: 'w-full h-11 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-pink-500 transition-all duration-200 shadow-lg shadow-blue-500/50',
                        formFieldInput: 'bg-blue-900/20 border border-blue-500/30 text-white rounded-lg focus:bg-blue-900/30 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-500',
                        formFieldLabel: 'text-gray-300 font-semibold text-sm',
                        dividerLine: 'bg-blue-500/20',
                        dividerText: 'text-gray-500 text-sm',
                      },
                      layout: {
                        socialButtonsPlacement: 'top',
                        socialButtonsVariant: 'blockButton',
                      },
                    }}
                    redirectUrl="/dashboard"
                  />
                </div>

                {/* Forgot Password */}
                <div className="mt-6 text-center">
                  <a href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    Forgot password?
                  </a>
                </div>

                {/* Sign Up */}
                <div className="mt-6 text-center text-sm text-gray-400">
                  Don&apos;t have an account?{' '}
                  <a href="/signup" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                    Sign up
                  </a>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-6 border-t border-blue-500/20 text-center">
                  <p className="text-xs text-gray-500">Secured by Clerk</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Dashboard Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex items-center justify-center p-8 bg-gradient-to-b from-[#0f1429] to-[#1a1f3a]"
        >
          <div className="w-full max-w-lg space-y-4">
            {/* Dashboard Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* AI Insights */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-blue-900/10 backdrop-blur-xl hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded flex items-center justify-center text-xs">⚡</div>
                  <span className="text-xs font-semibold text-purple-300">AI Insights</span>
                </div>
                <div className="text-2xl font-bold">847</div>
                <div className="text-xs text-gray-400">Active alerts</div>
              </motion.div>

              {/* Market Trends */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 rounded-xl border border-pink-500/30 bg-gradient-to-br from-pink-900/20 to-blue-900/10 backdrop-blur-xl hover:border-pink-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded flex items-center justify-center text-xs">📈</div>
                  <span className="text-xs font-semibold text-pink-300">Market Trends</span>
                </div>
                <div className="text-2xl font-bold">+12.8%</div>
                <div className="text-xs text-gray-400">Market momentum</div>
              </motion.div>

              {/* Revenue Growth */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-purple-900/10 backdrop-blur-xl hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-pink-500 rounded flex items-center justify-center text-xs">🚀</div>
                  <span className="text-xs font-semibold text-blue-300">Revenue Growth</span>
                </div>
                <div className="text-2xl font-bold">+27.4%</div>
                <div className="text-xs text-gray-400">vs last quarter</div>
              </motion.div>

              {/* Business Health */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 rounded-xl border border-green-500/30 bg-gradient-to-br from-green-900/20 to-blue-900/10 backdrop-blur-xl hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded flex items-center justify-center text-xs">💚</div>
                  <span className="text-xs font-semibold text-green-300">Business Health</span>
                </div>
                <div className="text-2xl font-bold">92</div>
                <div className="text-xs text-gray-400">Health Score</div>
              </motion.div>
            </div>

            {/* Large Analytics Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent backdrop-blur-xl hover:border-blue-400/50 transition-all duration-300 h-48"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-blue-300 mb-1">Analytics Overview</h3>
                  <p className="text-xs text-gray-500">Real-time business metrics</p>
                </div>
                <div className="text-2xl opacity-20">📊</div>
              </div>
              <div className="space-y-2 mt-6">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Performance</span>
                  <span className="text-blue-400">85%</span>
                </div>
                <div className="h-1 bg-blue-900/30 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-purple-500" />
                </div>
                <div className="flex justify-between text-xs mt-4">
                  <span className="text-gray-400">Efficiency</span>
                  <span className="text-pink-400">92%</span>
                </div>
                <div className="h-1 bg-blue-900/30 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-gradient-to-r from-pink-500 to-blue-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 px-8 py-4 flex items-center justify-between text-xs text-gray-500 bg-gradient-to-r from-[#0a0e27] to-[#1a1f3a]">
        <p>© 2026 Business Twin OS. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
