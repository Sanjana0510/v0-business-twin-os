'use client';

import { motion } from 'framer-motion';
import { SignIn } from '@clerk/nextjs';
import React from 'react';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-secondary/20 to-primary/20 rounded-full blur-3xl"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Content Container */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Top Branding Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/50"
            >
              <span className="text-white font-bold text-xl">T</span>
            </motion.div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-white tracking-tight">Business Twin OS</h2>
              <p className="text-xs text-slate-400">Executive Intelligence Platform</p>
            </div>
          </div>
        </motion.div>

        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Glassmorphism Card */}
          <div className="relative group">
            {/* Glow effect on hover */}
            <motion.div
              whileHover={{ opacity: 1 }}
              className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"
            />

            {/* Card Background Layers */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-700/20 backdrop-blur-xl border border-slate-700/40" />

            {/* Main Card Content */}
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-2xl border border-slate-600/30 p-8 shadow-2xl shadow-black/40">
              {/* Card Header */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-8"
              >
                <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
                <p className="text-sm text-slate-400">Sign in to access your executive dashboard</p>
              </motion.div>

              {/* Clerk SignIn Component */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="clerk-signin-wrapper"
              >
                <SignIn
                  appearance={{
                    elements: {
                      rootBox: 'w-full',
                      card: 'bg-transparent shadow-none border-0 px-0',
                      socialButtonsBlockButton:
                        'w-full bg-slate-800/50 border border-slate-600/40 hover:bg-slate-700/50 text-slate-200 hover:text-white h-11 rounded-lg transition-all duration-200 hover:border-slate-500/60',
                      formButtonPrimary:
                        'w-full bg-gradient-to-r from-primary via-secondary to-primary hover:shadow-lg hover:shadow-primary/40 h-11 rounded-lg transition-all duration-300',
                      formFieldInput:
                        'bg-slate-800/40 border border-slate-600/40 rounded-lg h-11 text-white placeholder:text-slate-500 focus:bg-slate-800/60 focus:border-slate-500/60 transition-all',
                      formFieldLabel: 'text-slate-300 text-sm font-medium',
                      dividerLine: 'bg-slate-700/30',
                      dividerText: 'text-slate-400 text-xs',
                      footerActionLink:
                        'text-primary hover:text-secondary transition-colors font-medium',
                      headerTitle: 'text-white font-bold',
                      headerSubtitle: 'text-slate-400',
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

              {/* Divider Line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-6 pt-6 border-t border-slate-700/30"
              >
                <p className="text-center text-sm text-slate-400">
                  Don't have an account?{' '}
                  <a
                    href="/signup"
                    className="text-primary hover:text-secondary transition-colors font-semibold"
                  >
                    Create account
                  </a>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Bottom Branding */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center text-xs text-slate-500 mt-8"
          >
            Enterprise AI Intelligence Platform
          </motion.p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 w-2 h-2 bg-primary/40 rounded-full blur-sm"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 left-10 w-2 h-2 bg-secondary/40 rounded-full blur-sm"
      />
    </div>
  );
}
