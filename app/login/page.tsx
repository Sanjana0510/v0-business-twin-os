'use client';

import Image from 'next/image';
import { SignIn } from '@clerk/nextjs';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  useEffect(() => {
    const hideDevMode = () => {
      document.querySelectorAll('[role="alertdialog"], [role="dialog"]').forEach((el) => {
        el.style.display = 'none';
      });
    };
    hideDevMode();
    setTimeout(hideDevMode, 100);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0a0e27] flex overflow-hidden">
      <style>{`
        [role="alertdialog"], [role="dialog"] { display: none !important; }
        .cl-devModeBanner { display: none !important; }
      `}</style>

      {/* LEFT SIDE - LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-8 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27]"
      >
        <div className="w-full max-w-md">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-12"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-white font-semibold">Business Twin OS</span>
          </motion.div>

          {/* Welcome Back Heading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-bold text-white mb-3">Welcome Back</h1>
            <p className="text-slate-300 text-base">Access your AI Executive Intelligence Platform</p>
          </motion.div>

          {/* Login Card - Dark Glassmorphic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-b from-[#1a1f3a]/50 to-[#0f172a]/50 backdrop-blur-2xl border-2 border-blue-500/30 rounded-3xl p-8 shadow-2xl shadow-blue-900/40 group hover:border-blue-400/50 transition-all duration-300"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              {/* Form Title */}
              <h2 className="text-xl font-bold text-white text-center mb-1">Sign in to business-twin-os</h2>
              <p className="text-sm text-slate-400 text-center mb-6">Welcome back! Please sign in to continue</p>

              {/* Clerk SignIn */}
              <div className="[&_.cl-rootBox]:bg-transparent [&_.cl-rootBox]:shadow-none [&_.cl-card]:bg-transparent [&_.cl-card]:shadow-none [&_.cl-card]:border-0 [&_.cl-card]:p-0">
                <SignIn
                  appearance={{
                    elements: {
                      rootBox: 'w-full',
                      card: 'w-full shadow-none border-0 bg-transparent',
                      socialButtonsBlockButton: 'w-full bg-[#0f172a]/60 border-2 border-slate-600 text-white rounded-lg py-2.5 hover:bg-[#1a1f3a]/80 hover:border-slate-400 transition-all duration-200 font-medium',
                      formButtonPrimary: 'w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg py-2.5 font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-200',
                      formFieldInput: 'bg-[#0f172a]/60 border-2 border-slate-600 text-white rounded-lg px-4 py-2.5 placeholder:text-slate-500 focus:bg-[#1a1f3a] focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all duration-200',
                      dividerLine: 'bg-slate-600',
                      dividerText: 'text-slate-500 text-xs',
                      footerActionLink: 'text-blue-400 hover:text-blue-300 font-medium',
                    },
                    layout: {
                      socialButtonsPlacement: 'top',
                      socialButtonsVariant: 'blockButton',
                    },
                  }}
                  redirectUrl="/"
                />
              </div>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-slate-400 mt-6">
                Don&apos;t have an account?{' '}
                <a href="/signup" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  Sign up
                </a>
              </p>

              {/* Secured by Clerk */}
              <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mt-8 pt-6 border-t border-slate-700">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1z" />
                </svg>
                Secured by Clerk
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* RIGHT SIDE - DASHBOARD WITH FLOATING CARDS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f1429]/60 to-[#0a0e27]/80 p-8"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/auth-hero.png"
            alt="Dashboard Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/90 via-[#0a0e27]/40 to-transparent" />
        </div>

        {/* Floating Cards Grid */}
        <div className="relative z-10 w-full max-w-2xl grid grid-cols-2 gap-6">
          {/* AI Insights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl border border-purple-500/40 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent backdrop-blur-xl hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-lg shadow-lg shadow-purple-500/50">
                ⚡
              </div>
              <span className="text-purple-300 text-sm font-medium">AI Insights</span>
            </div>
            <p className="text-4xl font-bold text-white mb-2">847</p>
            <p className="text-purple-300/70 text-sm">Active alerts</p>
          </motion.div>

          {/* Market Trends */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl border border-pink-500/40 bg-gradient-to-br from-pink-900/20 via-purple-900/10 to-transparent backdrop-blur-xl hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-lg shadow-lg shadow-pink-500/50">
                📊
              </div>
              <span className="text-pink-300 text-sm font-medium">Market Trends</span>
            </div>
            <p className="text-4xl font-bold text-white mb-2">+12.8%</p>
            <p className="text-pink-300/70 text-sm">Market momentum</p>
          </motion.div>

          {/* Revenue Growth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-transparent backdrop-blur-xl hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-lg shadow-lg shadow-cyan-500/50">
                📈
              </div>
              <span className="text-cyan-300 text-sm font-medium">Revenue Growth</span>
            </div>
            <p className="text-4xl font-bold text-white mb-2">+27.4%</p>
            <p className="text-cyan-300/70 text-sm">vs last quarter</p>
          </motion.div>

          {/* Business Health */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-transparent backdrop-blur-xl hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-lg shadow-lg shadow-emerald-500/50">
                💚
              </div>
              <span className="text-emerald-300 text-sm font-medium">Business Health</span>
            </div>
            <p className="text-4xl font-bold text-white mb-2">92</p>
            <p className="text-emerald-300/70 text-sm">Health Score</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-6 left-6 right-6 text-xs text-slate-500 text-center">
        <p>© 2026 Business Twin OS. All rights reserved.</p>
      </div>
    </div>
  );
}
