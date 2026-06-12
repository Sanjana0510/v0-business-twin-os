'use client';

import { motion } from 'framer-motion';
import { SignIn } from '@clerk/nextjs';
import React from 'react';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background dark:bg-slate-950">
      {/* Animated Background Gradients - Matching Dashboard */}
      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          opacity: [0.08, 0.12, 0.08],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tl from-secondary/15 to-transparent rounded-full blur-3xl"
      />

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12">
        {/* Logo and Branding */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <motion.div
              animate={{
                boxShadow: [
                  'inset 0 0 20px rgba(168, 85, 247, 0.1)',
                  'inset 0 0 40px rgba(168, 85, 247, 0.2)',
                  'inset 0 0 20px rgba(168, 85, 247, 0.1)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl"
            >
              <span className="text-white font-black text-xl">T</span>
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Business Twin OS</h1>
              <p className="text-xs font-medium text-muted-foreground">Executive Intelligence</p>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Welcome back</h2>
            <p className="text-sm font-medium text-muted-foreground max-w-sm">
              Sign in to your AI command center and access real-time business intelligence
            </p>
          </motion.div>
        </motion.div>

        {/* Clerk SignIn Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="relative group">
            {/* Subtle Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Glassmorphism Card */}
            <div className="relative rounded-2xl backdrop-blur-xl bg-slate-900/40 border border-white/10 shadow-2xl overflow-hidden p-8">
              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-transparent to-slate-900/20 pointer-events-none" />

              {/* Card Content */}
              <div className="relative space-y-6">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-foreground">Sign In</h3>
                  <p className="text-xs font-medium text-muted-foreground mt-1">
                    Enter your credentials to continue
                  </p>
                </motion.div>

                {/* Clerk SignIn Component */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <SignIn
                    appearance={{
                      elements: {
                        rootBox: 'w-full',
                        card: 'bg-transparent shadow-none border-0 px-0',
                        socialButtonsBlockButton:
                          'w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-foreground h-11 rounded-lg transition-all duration-200 font-medium shadow-sm',
                        formButtonPrimary:
                          'w-full bg-gradient-to-r from-primary via-secondary to-primary hover:from-primary/90 hover:via-secondary/90 hover:to-primary/90 text-white h-11 rounded-lg transition-all duration-300 font-bold shadow-lg hover:shadow-lg hover:shadow-primary/50',
                        formFieldInput:
                          'w-full bg-white/5 border border-white/10 rounded-lg h-11 text-foreground placeholder:text-muted-foreground focus:bg-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus:outline-none transition-all font-medium text-sm',
                        formFieldLabel: 'text-foreground text-sm font-semibold mb-2 block',
                        formFieldHint: 'text-muted-foreground text-xs font-medium mt-1',
                        dividerLine: 'bg-white/5',
                        dividerText: 'text-muted-foreground text-xs font-medium',
                        footerActionLink:
                          'text-primary hover:text-secondary transition-colors font-semibold',
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
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="border-t border-white/5 pt-6"
                >
                  <p className="text-center text-xs text-muted-foreground font-medium">
                    Don't have an account?{' '}
                    <a
                      href="/signup"
                      className="text-primary hover:text-secondary font-semibold transition-colors"
                    >
                      Sign up
                    </a>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center gap-4 mt-8 text-xs font-medium text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              <span>Enterprise Security</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              <span>99.99% Uptime</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xs font-medium text-muted-foreground">
            Trusted by enterprise teams worldwide
          </p>
        </motion.div>
      </div>
    </div>
  );
}
