'use client';

import { motion } from 'framer-motion';
import { SignIn } from '@clerk/nextjs';
import React from 'react';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Premium Animated Gradient Background */}
      <motion.div
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-1/2 -left-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-purple-900/40 via-cyan-900/20 to-transparent rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-1/3 -right-1/4 w-[900px] h-[900px] bg-gradient-to-tl from-cyan-900/30 via-purple-900/20 to-transparent rounded-full blur-3xl"
      />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40" />

      {/* Radial Spotlight Effect */}
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
        }}
      />

      {/* Content Container */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        {/* Animated Top Decoration */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-2xl"
        />

        {/* Branding Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-16 text-center z-10"
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="flex items-center justify-center gap-4 mb-6 mx-auto w-fit"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl blur-xl opacity-75" />
              <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 shadow-2xl">
                <span className="text-white font-black text-2xl">T</span>
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-black text-white tracking-tighter">Business Twin OS</h1>
              <p className="text-sm text-slate-400 font-medium">AI Executive Intelligence</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full max-w-md z-10"
        >
          {/* Premium Glassmorphism Card */}
          <div className="relative group">
            {/* Glow Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

            {/* Background Blur Layers */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-950/80 backdrop-blur-2xl border border-slate-700/30" />

            {/* Card Content */}
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/60 via-slate-950/60 to-black/80 backdrop-blur-3xl border border-slate-600/20 px-8 py-10 sm:px-10 shadow-2xl shadow-black/60">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-black text-white mb-3 leading-tight">Welcome back</h2>
                <p className="text-base text-slate-400">Sign in to your AI dashboard</p>
              </motion.div>

              {/* Clerk SignIn Component */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="clerk-signin-wrapper space-y-4"
              >
                <SignIn
                  appearance={{
                    elements: {
                      rootBox: 'w-full',
                      card: 'bg-transparent shadow-none border-0 px-0',
                      socialButtonsBlockButton:
                        'w-full bg-gradient-to-r from-slate-800/40 to-slate-700/40 border border-slate-600/30 hover:from-slate-700/60 hover:to-slate-600/60 text-slate-100 hover:text-white h-12 rounded-xl transition-all duration-200 hover:border-slate-500/50 font-medium',
                      formButtonPrimary:
                        'w-full bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-500 hover:via-purple-400 hover:to-cyan-400 hover:shadow-2xl hover:shadow-purple-500/40 h-12 rounded-xl transition-all duration-300 font-bold text-white',
                      formFieldInput:
                        'bg-slate-800/30 border border-slate-600/30 rounded-lg h-11 text-white placeholder:text-slate-500 focus:bg-slate-800/50 focus:border-slate-500/50 focus:ring-0 focus:outline-none transition-all font-medium',
                      formFieldLabel: 'text-slate-200 text-sm font-semibold mb-2 block',
                      formFieldHint: 'text-slate-500 text-xs font-medium mt-1',
                      dividerLine: 'bg-slate-700/20',
                      dividerText: 'text-slate-400 text-xs font-semibold',
                      footerActionLink:
                        'text-cyan-400 hover:text-cyan-300 transition-colors font-semibold',
                      headerTitle: 'hidden',
                      headerSubtitle: 'hidden',
                    },
                    layout: {
                      socialButtonsPlacement: 'bottom',
                      socialButtonsVariant: 'blockButton',
                    },
                  }}
                  redirectUrl="/"
                  afterSignInUrl="/"
                />
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="mt-8 pt-8 border-t border-slate-700/20"
              >
                <p className="text-center text-sm text-slate-400 font-medium">
                  New here?{' '}
                  <a
                    href="/signup"
                    className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
                  >
                    Create account
                  </a>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Bottom Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="text-center text-xs text-slate-500 mt-8 font-medium"
          >
            Enterprise-grade AI intelligence platform
          </motion.p>
        </motion.div>

        {/* Floating Accent Elements */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 5, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 right-20 w-1 h-1 bg-cyan-400/60 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -5, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400/50 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-300/40 rounded-full blur-sm"
        />
      </div>
    </div>
  );
}
