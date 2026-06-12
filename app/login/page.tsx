'use client';

import { motion } from 'framer-motion';
import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#060B23] dark:bg-[#060B23]">
      {/* Animated Gradient Orbs - Premium Background */}
      <motion.div
        animate={{
          opacity: [0.05, 0.12, 0.05],
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.08, 1],
          x: [0, -30, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tl from-purple-600/25 via-blue-600/15 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(100,150,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Split Screen Container */}
      <div className="relative w-full h-screen flex">
        {/* LEFT SIDE - Login Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-8 lg:py-12"
        >
          {/* Logo and Branding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8 text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-xl">T</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-slate-400 text-sm sm:text-base font-medium">
              Access your AI Executive Intelligence Platform
            </p>
          </motion.div>

          {/* Login Card - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="w-full max-w-md"
          >
            <div className="relative group">
              {/* Glow Background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glass Card */}
              <div className="relative backdrop-blur-2xl border border-white/10 rounded-3xl p-8 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-transparent shadow-2xl shadow-black/40">
                {/* Clerk SignIn Component */}
                <div className="clerk-sign-in-wrapper [&_.cl-rootBox]:bg-transparent [&_.cl-rootBox]:shadow-none [&_.cl-card]:bg-transparent [&_.cl-card]:shadow-none [&_.cl-card]:border-0 [&_.cl-formButtonPrimary]:bg-gradient-to-r [&_.cl-formButtonPrimary]:from-blue-600 [&_.cl-formButtonPrimary]:via-purple-600 [&_.cl-formButtonPrimary]:to-pink-600 [&_.cl-formButtonPrimary]:hover:shadow-lg [&_.cl-formButtonPrimary]:hover:shadow-blue-500/30 [&_.cl-formButtonPrimary]:w-full [&_.cl-formButtonPrimary]:h-11 [&_.cl-formButtonPrimary]:rounded-xl [&_.cl-socialButtonsBlockButton]:w-full [&_.cl-socialButtonsBlockButton]:border [&_.cl-socialButtonsBlockButton]:border-white/10 [&_.cl-socialButtonsBlockButton]:rounded-xl [&_.cl-socialButtonsBlockButton]:bg-white/5 [&_.cl-socialButtonsBlockButton]:hover:bg-white/10 [&_.cl-socialButtonsBlockButton]:text-white [&_.cl-socialButtonsBlockButton]:h-11 [&_.cl-formFieldInput]:bg-white/5 [&_.cl-formFieldInput]:border [&_.cl-formFieldInput]:border-white/10 [&_.cl-formFieldInput]:rounded-lg [&_.cl-formFieldInput]:text-white [&_.cl-formFieldInput]:focus:bg-white/10 [&_.cl-formFieldInput]:focus:border-blue-500/50 [&_.cl-divider]:bg-white/5 [&_.cl-dividerText]:text-slate-500">
                  <SignIn
                    appearance={{
                      elements: {
                        rootBox: 'w-full',
                        card: 'bg-transparent shadow-none border-0',
                        formButtonPrimary:
                          'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-lg hover:shadow-blue-500/30 w-full h-11 rounded-xl text-base font-semibold',
                        socialButtonsBlockButton:
                          'w-full border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 text-white h-11 font-medium',
                        formFieldInput:
                          'bg-white/5 border border-white/10 rounded-lg text-white focus:bg-white/10 focus:border-blue-500/50 placeholder:text-slate-500',
                        formFieldLabel: 'text-white text-sm font-medium',
                        dividerLine: 'bg-white/10',
                        dividerText: 'text-slate-500',
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
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
              <span>Enterprise Security</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-600" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50" />
              <span>99.99% Uptime SLA</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-600" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-pink-500/50" />
              <span>HIPAA Compliant</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Hero Image (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent" />

          {/* Hero Image */}
          <div className="relative w-full h-full flex items-center justify-center p-8">
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-600/20">
              <Image
                src="/auth-hero.png"
                alt="Business Team with AI Analytics"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

              {/* Floating Analytics Cards - Glass UI */}
              {/* Revenue Card */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-12 left-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-2xl shadow-blue-600/20 max-w-xs group hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">↗</span>
                  </div>
                  <span className="text-white/80 text-sm font-medium">Revenue Growth</span>
                </div>
                <p className="text-white text-xl font-bold">+27.4%</p>
                <p className="text-white/50 text-xs mt-1">vs last quarter</p>
              </motion.div>

              {/* AI Insights Card */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-12 right-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-2xl shadow-purple-600/20 max-w-xs group hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">⚡</span>
                  </div>
                  <span className="text-white/80 text-sm font-medium">AI Insights</span>
                </div>
                <p className="text-white text-xl font-bold">847</p>
                <p className="text-white/50 text-xs mt-1">Active alerts</p>
              </motion.div>

              {/* Market Trends Card */}
              <motion.div
                animate={{
                  y: [0, -18, 0],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-1/3 right-12 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-2xl shadow-pink-600/20 max-w-xs group hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">📊</span>
                  </div>
                  <span className="text-white/80 text-sm font-medium">Market Trends</span>
                </div>
                <p className="text-white text-xl font-bold">+12.8%</p>
                <p className="text-white/50 text-xs mt-1">Market momentum</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Hero Image (Mobile/Tablet) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="lg:hidden relative w-full h-64 mt-8 mb-12 px-4"
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-blue-600/20">
          <Image
            src="/auth-hero.png"
            alt="Business Team with AI Analytics"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}
