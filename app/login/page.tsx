'use client';

import { motion } from 'framer-motion';
import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50 to-neutral-100">
      {/* Premium Animated Background Gradients */}
      <motion.div
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-300/40 via-yellow-200/20 to-transparent rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-amber-200/30 to-transparent rounded-full blur-3xl"
      />

      {/* Content Grid Layout */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* LEFT SECTION: Premium Login Form */}
        <div className="flex flex-col justify-center items-center px-6 sm:px-12 py-12 lg:py-0">
          {/* Branding with Animation */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-12 w-full max-w-sm"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(217, 119, 6, 0.3)',
                      '0 0 40px rgba(217, 119, 6, 0.5)',
                      '0 0 20px rgba(217, 119, 6, 0.3)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center shadow-xl"
                >
                  <span className="text-white font-black text-2xl">T</span>
                </motion.div>
              </div>
              <div>
                <h1 className="text-2xl font-black text-neutral-900 leading-tight">Business Twin OS</h1>
                <p className="text-xs font-semibold text-amber-600">AI Executive Intelligence</p>
              </div>
            </motion.div>

            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-black text-neutral-900 mb-4 leading-tight">
                Welcome to your
                <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">AI Command Center</span>
              </h2>
              <p className="text-base font-medium text-neutral-600 mb-2">
                Enter to access real-time business intelligence and strategic insights powered by AI.
              </p>
            </motion.div>
          </motion.div>

          {/* Luxury Login Card with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full max-w-sm mb-8"
          >
            <div className="relative group">
              {/* Premium Glow Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400/30 via-orange-400/20 to-amber-400/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Glassmorphism Card */}
              <div className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-amber-200/40 shadow-2xl overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-transparent to-orange-50/30 pointer-events-none" />

                {/* Card Content */}
                <div className="relative p-8 sm:p-10">
                  {/* Card Header */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45, duration: 0.6 }}
                    className="mb-8"
                  >
                    <h3 className="text-2xl font-black text-neutral-900 mb-2">Sign in</h3>
                    <p className="text-sm font-medium text-neutral-600">Access your AI intelligence platform</p>
                  </motion.div>

                  {/* Clerk SignIn Component */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55, duration: 0.6 }}
                    className="clerk-signin-wrapper"
                  >
                    <SignIn
                      appearance={{
                        elements: {
                          rootBox: 'w-full',
                          card: 'bg-transparent shadow-none border-0 px-0',
                          socialButtonsBlockButton:
                            'w-full bg-gradient-to-r from-neutral-100 to-amber-50/50 border border-neutral-200 hover:from-neutral-50 hover:to-amber-100 text-neutral-700 hover:text-neutral-900 h-11 rounded-xl transition-all duration-200 font-semibold shadow-sm hover:shadow-md',
                          formButtonPrimary:
                            'w-full bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:via-orange-700 hover:to-amber-800 text-white h-11 rounded-xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:shadow-amber-600/30',
                          formFieldInput:
                            'bg-neutral-50/80 border border-neutral-200 rounded-lg h-11 text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none transition-all font-medium',
                          formFieldLabel: 'text-neutral-700 text-sm font-semibold mb-2 block',
                          formFieldHint: 'text-neutral-500 text-xs font-medium mt-1',
                          dividerLine: 'bg-neutral-200/50',
                          dividerText: 'text-neutral-600 text-xs font-semibold',
                          footerActionLink:
                            'text-amber-600 hover:text-orange-600 transition-colors font-semibold',
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
                    transition={{ delay: 0.65, duration: 0.6 }}
                    className="mt-8 pt-8 border-t border-neutral-200/50"
                  >
                    <p className="text-center text-sm text-neutral-600 font-medium">
                      New to Business Twin OS?{' '}
                      <a
                        href="/signup"
                        className="text-amber-600 hover:text-orange-600 font-bold transition-colors"
                      >
                        Create account
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
              transition={{ delay: 0.75, duration: 0.6 }}
              className="flex items-center justify-center gap-6 mt-8 text-xs font-medium text-neutral-600"
            >
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-green-500" />
                Enterprise Security
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-green-500" />
                99.99% Uptime
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-green-500" />
                HIPAA Compliant
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT SECTION: Immersive Hero with Floating Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="hidden lg:flex flex-col justify-center items-center px-12 py-0 relative overflow-hidden"
        >
          {/* Hero Background Image */}
          <div className="absolute inset-0 rounded-3xl mx-4 my-12 overflow-hidden">
            <Image
              src="/auth-hero.png"
              alt="AI Team Collaboration"
              fill
              className="object-cover"
              priority
            />
            {/* Dark Overlay for Better Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/40 via-amber-900/20 to-neutral-900/30" />
          </div>

          {/* Floating Glassmorphism Cards */}
          <div className="relative w-full h-full flex items-center justify-center px-8">
            {/* Top Left Card - AI Insights */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, -10, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-20 left-8 w-72"
            >
              <div className="rounded-2xl bg-white/85 backdrop-blur-xl border border-white/40 shadow-2xl p-6">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    ↗️
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-500 uppercase">Revenue Growth</p>
                    <p className="text-xl font-black text-neutral-900">+27.4%</p>
                  </div>
                </motion.div>
                <p className="text-xs text-neutral-600 font-medium">YoY business growth acceleration</p>
              </div>
            </motion.div>

            {/* Middle Right Card - Analytics */}
            <motion.div
              animate={{
                y: [0, 20, 0],
                x: [0, 10, 0],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 right-8 w-72 -translate-y-1/2"
            >
              <div className="rounded-2xl bg-white/85 backdrop-blur-xl border border-white/40 shadow-2xl p-6">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    📊
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-500 uppercase">AI Insights</p>
                    <p className="text-xl font-black text-neutral-900">847 Alerts</p>
                  </div>
                </motion.div>
                <p className="text-xs text-neutral-600 font-medium">Real-time market intelligence</p>
              </div>
            </motion.div>

            {/* Bottom Left Card - Team Activity */}
            <motion.div
              animate={{
                y: [0, 15, 0],
                x: [0, -8, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-20 left-12 w-72"
            >
              <div className="rounded-2xl bg-white/85 backdrop-blur-xl border border-white/40 shadow-2xl p-6">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold">
                    👥
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-500 uppercase">Team Activity</p>
                    <p className="text-xl font-black text-neutral-900">24 Active</p>
                  </div>
                </motion.div>
                <p className="text-xs text-neutral-600 font-medium">Team members online now</p>
              </div>
            </motion.div>
          </div>

          {/* Floating Particles */}
          <motion.div
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 right-1/4 w-2 h-2 bg-amber-400 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full blur-sm"
          />
        </motion.div>
      </div>

      {/* Footer Text - Mobile Responsive */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 lg:right-1/2 p-6 text-center lg:text-left"
      >
        <p className="text-xs font-semibold text-neutral-600">
          Enterprise-grade AI intelligence for billion-dollar companies
        </p>
      </motion.div>
    </div>
  );
}
