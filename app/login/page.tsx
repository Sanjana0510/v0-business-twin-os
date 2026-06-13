'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1429] flex flex-col overflow-hidden">
      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-purple-500/20 bg-black/30 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
            <span className="text-white font-bold text-lg">⬡</span>
          </div>
          <span className="text-white font-bold text-lg">Business Twin OS</span>
        </motion.div>
      </header>

      {/* MAIN CONTENT */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* LEFT SIDE - LOGIN FORM */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-12 bg-gradient-to-b from-[#1a1f3a]/60 to-[#0a0e27]/80"
        >
          <div className="w-full max-w-md">
            {/* Welcome Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-slate-300 text-sm">Access your AI Executive Intelligence Platform</p>
            </motion.div>

            {/* Login Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl border-2 border-purple-500/40 bg-gradient-to-br from-purple-900/15 via-blue-900/10 to-transparent backdrop-blur-2xl hover:border-purple-500/60 transition-all duration-300 group shadow-2xl shadow-purple-900/30 hover:shadow-purple-900/50"
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-pink-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg pointer-events-none" />

              <div className="relative z-10">
                {/* Form Heading */}
                <h2 className="text-xl font-bold text-white text-center mb-2">Sign in to business-twin-os</h2>
                <p className="text-sm text-slate-400 text-center mb-8">Welcome back! Please sign in to continue</p>

                {/* Google Button */}
                <button 
                  onClick={() => window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth'}
                  className="w-full py-3 px-4 border-2 border-slate-600 rounded-lg text-white font-medium hover:bg-slate-900/40 hover:border-slate-400 transition-all duration-200 flex items-center justify-center gap-2 mb-4"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 h-px bg-slate-600" />
                  <span className="text-xs text-slate-500">or</span>
                  <div className="flex-1 h-px bg-slate-600" />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label className="text-sm text-slate-300 font-medium mb-2 block">Email address</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-900/40 border-2 border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:bg-slate-900/60 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all duration-200"
                  />
                </div>

                {/* Password Field */}
                <div className="mb-6">
                  <label className="text-sm text-slate-300 font-medium mb-2 block">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 bg-slate-900/40 border-2 border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:bg-slate-900/60 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all duration-200"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Continue Button */}
                <button 
                  onClick={() => {
                    if (email && password) {
                      window.location.href = '/dashboard';
                    }
                  }}
                  className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                  disabled={!email || !password}
                >
                  Continue
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-slate-400 mt-6">
                  Don't have an account?{' '}
                  <a href="/signup" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                    Sign up
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - DASHBOARD ANALYTICS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex relative items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f1429]/50 to-[#0a0e27]/80 p-8"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/auth-hero.png"
              alt="Dashboard"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/90 via-[#0a0e27]/40 to-transparent" />
          </div>

          {/* Analytics Cards Grid - Smaller cards for background visibility */}
          <div className="relative z-10 w-full max-w-2xl grid grid-cols-3 gap-3 auto-rows-max">
            {/* Overview - Revenue Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="col-span-1 p-4 rounded-lg border border-blue-500/40 bg-gradient-to-br from-blue-900/20 via-slate-900/10 to-transparent backdrop-blur-xl hover:border-blue-500/60 transition-all duration-300"
            >
              <p className="text-xs text-slate-400 mb-2">Revenue</p>
              <p className="text-2xl font-bold text-white">$2.45M</p>
              <p className="text-xs text-blue-400 mt-1">+12.5% vs last month</p>
            </motion.div>

            {/* Business Health Score - Large Circle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="col-span-1 p-4 rounded-lg border border-purple-500/40 bg-gradient-to-br from-purple-900/20 via-slate-900/10 to-transparent backdrop-blur-xl hover:border-purple-500/60 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="w-24 h-24 rounded-full border-4 border-purple-500 flex items-center justify-center mb-3">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">88</p>
                  <p className="text-xs text-slate-400">Excellent</p>
                </div>
              </div>
            </motion.div>

            {/* Revenue Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="col-span-1 p-4 rounded-lg border border-pink-500/40 bg-gradient-to-br from-pink-900/20 via-slate-900/10 to-transparent backdrop-blur-xl hover:border-pink-500/60 transition-all duration-300"
            >
              <p className="text-xs text-slate-400 mb-2">Revenue Overview</p>
              <p className="text-2xl font-bold text-white">$8.45M</p>
              <p className="text-xs text-pink-400 mt-1">+18.6% vs last quarter</p>
            </motion.div>

            {/* Growth Rate */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="col-span-1 p-4 rounded-lg border border-cyan-500/40 bg-gradient-to-br from-cyan-900/20 via-slate-900/10 to-transparent backdrop-blur-xl hover:border-cyan-500/60 transition-all duration-300"
            >
              <p className="text-xs text-slate-400 mb-2">Growth Rate</p>
              <p className="text-2xl font-bold text-white">27.4%</p>
              <p className="text-xs text-cyan-400 mt-1">+4.2% vs last month</p>
            </motion.div>{/* AI Insights - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="col-span-1 row-span-2 p-4 rounded-lg border border-purple-500/40 bg-gradient-to-br from-purple-900/30 via-purple-900/10 to-transparent backdrop-blur-xl hover:border-purple-500/60 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-purple-500/50">
                <span className="text-white text-lg font-bold">⚡</span>
              </div>
              <p className="text-purple-300 text-sm font-medium mb-3 text-center">AI Insights</p>
              <p className="text-4xl font-bold text-white text-center">847</p>
              <p className="text-purple-400 text-xs mt-2 text-center">Active alerts</p>
            </motion.div>

            {/* Market Trends - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="col-span-1 row-span-2 p-4 rounded-lg border border-pink-500/40 bg-gradient-to-br from-pink-900/30 via-pink-900/10 to-transparent backdrop-blur-xl hover:border-pink-500/60 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-pink-500/50">
                <span className="text-white text-lg font-bold">📊</span>
              </div>
              <p className="text-pink-300 text-sm font-medium mb-3 text-center">Market Trends</p>
              <p className="text-4xl font-bold text-white text-center">+12.8%</p>
              <p className="text-pink-400 text-xs mt-2 text-center">Market momentum</p>
            </motion.div>

            {/* Revenue Growth - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className="col-span-1 row-span-2 p-4 rounded-lg border border-cyan-500/40 bg-gradient-to-br from-cyan-900/30 via-cyan-900/10 to-transparent backdrop-blur-xl hover:border-cyan-500/60 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/50">
                <span className="text-white text-lg font-bold">📈</span>
              </div>
              <p className="text-cyan-300 text-sm font-medium mb-3 text-center">Revenue Growth</p>
              <p className="text-4xl font-bold text-white text-center">+27.4%</p>
              <p className="text-cyan-400 text-xs mt-2 text-center">vs last quarter</p>
            </motion.div>

            {/* Business Health - Small Bottom Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="col-span-1 p-4 rounded-lg border border-emerald-500/40 bg-gradient-to-br from-emerald-900/30 via-emerald-900/10 to-transparent backdrop-blur-xl hover:border-emerald-500/60 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-3 shadow-lg shadow-emerald-500/50">
                <span className="text-white text-sm font-bold">💚</span>
              </div>
              <p className="text-emerald-300 text-xs font-medium mb-2 text-center">Business Health</p>
              <p className="text-3xl font-bold text-white text-center">92</p>
              <p className="text-emerald-400 text-xs mt-1 text-center">Health Score</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
    </div>
  );
}
