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
    const timers = [
      setTimeout(hideClerkDevMode, 100),
      setTimeout(hideClerkDevMode, 500),
    ];
    const observer = new MutationObserver(hideClerkDevMode);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      timers.forEach(clearTimeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1429] text-white overflow-hidden">
      <style>{`
        .cl-devModeBanner, [role="alertdialog"], [role="dialog"], .cl-modal {
          display: none !important;
        }
      `}</style>

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-blue-500/20 bg-black/20 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">⧛</span>
          </div>
          <span className="font-semibold text-lg">Business Twin OS</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-bold">SA</div>
          <span className="text-sm">Sanjana Solanki</span>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[calc(100vh-73px)]">
        {/* LEFT SIDE - Login Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center px-6 sm:px-8 py-12 bg-gradient-to-b from-[#1a1f3a]/80 to-[#0a0e27]/80"
        >
          <div className="w-full max-w-md">
            {/* Heading */}
            <h1 className="text-5xl font-bold mb-3">Welcome Back</h1>
            <p className="text-gray-400 text-lg mb-10">Access your AI Executive Intelligence Platform</p>

            {/* Login Card with Glow Border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative p-8 rounded-2xl border-2 border-blue-500/40 bg-gradient-to-br from-blue-900/15 via-purple-900/10 to-transparent backdrop-blur-2xl shadow-2xl shadow-blue-500/20 group hover:shadow-blue-500/40 transition-all duration-300"
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg pointer-events-none" />

              <div className="relative z-10">
                {/* Form Heading */}
                <h2 className="text-xl font-semibold text-center mb-1">Sign in to business-twin-os</h2>
                <p className="text-sm text-gray-400 text-center mb-8">Welcome back! Please sign in to continue</p>

                {/* Clerk SignIn Component */}
                <div className="[&_.cl-rootBox]:bg-transparent [&_.cl-rootBox]:shadow-none [&_.cl-rootBox]:p-0 [&_.cl-card]:bg-transparent [&_.cl-card]:shadow-none [&_.cl-card]:border-0 [&_.cl-card]:p-0">
                  <SignIn
                    appearance={{
                      elements: {
                        rootBox: 'w-full',
                        card: 'w-full shadow-none border-0 bg-transparent p-0',
                        socialButtonsBlockButton: 'w-full h-12 border-2 border-blue-500/30 bg-blue-900/20 text-white rounded-lg hover:bg-blue-900/50 hover:border-blue-400/60 transition-all duration-200 font-semibold text-base',
                        formButtonPrimary: 'w-full h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-200',
                        formFieldInput: 'bg-blue-900/20 border-2 border-blue-500/30 text-white rounded-lg focus:bg-blue-900/40 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/30 placeholder:text-gray-500 h-11',
                        formFieldLabel: 'text-gray-300 font-semibold text-sm',
                        dividerLine: 'bg-blue-500/20',
                        dividerText: 'text-gray-500 text-sm',
                        footerActionLink: 'text-blue-400 hover:text-blue-300',
                      },
                      layout: {
                        socialButtonsPlacement: 'top',
                        socialButtonsVariant: 'blockButton',
                      },
                    }}
                    redirectUrl="/"
                  />
                </div>

                {/* Forgot Password */}
                <div className="mt-6 text-center">
                  <a href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium">
                    Forgot password?
                  </a>
                </div>

                {/* Sign Up Link */}
                <div className="mt-6 text-center text-sm text-gray-400">
                  Don&apos;t have an account?{' '}
                  <a href="/signup" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                    Sign up
                  </a>
                </div>

                {/* Secured by Clerk */}
                <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secured by Clerk</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - Dashboard Background with Floating Analytics Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-br from-[#0f1429]/40 via-[#1a1f3a]/30 to-[#0a0e27]/40 flex items-center justify-center p-8"
        >
          {/* Background Dashboard Image */}
          <div className="absolute inset-0">
            <Image
              src="/auth-hero.png"
              alt="Dashboard Background"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/80 via-transparent to-[#0a0e27]/40" />
          </div>

          {/* Floating Analytics Cards */}
          <div className="relative z-10 w-full max-w-2xl">
            <div className="grid grid-cols-2 gap-6">
              {/* AI Insights Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl border border-purple-500/40 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent backdrop-blur-xl hover:border-purple-500/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                  <span className="text-sm font-medium text-gray-300">AI Insights</span>
                </div>
                <p className="text-3xl font-bold">847</p>
                <p className="text-xs text-gray-400 mt-1">Active alerts</p>
              </motion.div>

              {/* Market Trends Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl border border-pink-500/40 bg-gradient-to-br from-pink-900/20 via-purple-900/10 to-transparent backdrop-blur-xl hover:border-pink-500/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📊</span>
                  </div>
                  <span className="text-sm font-medium text-gray-300">Market Trends</span>
                </div>
                <p className="text-3xl font-bold">+12.8%</p>
                <p className="text-xs text-gray-400 mt-1">Market momentum</p>
              </motion.div>

              {/* Revenue Growth Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl border border-blue-500/40 bg-gradient-to-br from-blue-900/20 via-cyan-900/10 to-transparent backdrop-blur-xl hover:border-blue-500/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📈</span>
                  </div>
                  <span className="text-sm font-medium text-gray-300">Revenue Growth</span>
                </div>
                <p className="text-3xl font-bold">+27.4%</p>
                <p className="text-xs text-gray-400 mt-1">vs last quarter</p>
              </motion.div>

              {/* Business Health Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl border border-emerald-500/40 bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-transparent backdrop-blur-xl hover:border-emerald-500/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <span className="text-lg">💚</span>
                  </div>
                  <span className="text-sm font-medium text-gray-300">Business Health</span>
                </div>
                <p className="text-3xl font-bold">92</p>
                <p className="text-xs text-gray-400 mt-1">Health Score</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 bg-black/30 backdrop-blur-md px-8 py-4 text-center text-sm text-gray-500">
        <p>© 2026 Business Twin OS. All rights reserved.</p>
      </footer>
    </div>
  );
}
