'use client';

import { motion } from 'framer-motion';
import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

export default function LoginPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#060B23] dark:bg-[#060B23] flex flex-col">
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
      <div className="relative w-full flex-1 flex overflow-hidden">
        {/* LEFT SIDE - Login Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 overflow-y-auto"
        >
          {/* Logo and Branding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 sm:mb-7 md:mb-8 text-center shrink-0"
          >
            <div className="flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">T</span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base font-medium">
              Access your AI Executive Intelligence Platform
            </p>
          </motion.div>

          {/* Login Card - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="w-full max-w-sm sm:max-w-md shrink-0"
          >
            <div className="relative group">
              {/* Glow Background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glass Card */}
              <div className="relative backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-transparent shadow-2xl shadow-black/40">
                {/* Clerk SignIn Component */}
                <div className="clerk-sign-in-wrapper [&_.cl-rootBox]:bg-transparent [&_.cl-rootBox]:shadow-none [&_.cl-card]:bg-transparent [&_.cl-card]:shadow-none [&_.cl-card]:border-0 [&_.cl-formButtonPrimary]:bg-gradient-to-r [&_.cl-formButtonPrimary]:from-blue-600 [&_.cl-formButtonPrimary]:via-purple-600 [&_.cl-formButtonPrimary]:to-pink-600 [&_.cl-formButtonPrimary]:hover:shadow-lg [&_.cl-formButtonPrimary]:hover:shadow-blue-500/30 [&_.cl-formButtonPrimary]:w-full [&_.cl-formButtonPrimary]:h-10 sm:[&_.cl-formButtonPrimary]:h-11 [&_.cl-formButtonPrimary]:rounded-xl [&_.cl-socialButtonsBlockButton]:w-full [&_.cl-socialButtonsBlockButton]:border [&_.cl-socialButtonsBlockButton]:border-white/10 [&_.cl-socialButtonsBlockButton]:rounded-xl [&_.cl-socialButtonsBlockButton]:bg-white/5 [&_.cl-socialButtonsBlockButton]:hover:bg-white/10 [&_.cl-socialButtonsBlockButton]:text-white [&_.cl-socialButtonsBlockButton]:h-10 sm:[&_.cl-socialButtonsBlockButton]:h-11 [&_.cl-formFieldInput]:bg-white/5 [&_.cl-formFieldInput]:border [&_.cl-formFieldInput]:border-white/10 [&_.cl-formFieldInput]:rounded-lg [&_.cl-formFieldInput]:text-white [&_.cl-formFieldInput]:focus:bg-white/10 [&_.cl-formFieldInput]:focus:border-blue-500/50 [&_.cl-divider]:bg-white/5 [&_.cl-dividerText]:text-slate-500">
                  <SignIn
                    appearance={{
                      elements: {
                        rootBox: 'w-full',
                        card: 'bg-transparent shadow-none border-0',
                        formButtonPrimary:
                          'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-lg hover:shadow-blue-500/30 w-full h-10 sm:h-11 rounded-xl text-sm sm:text-base font-semibold',
                        socialButtonsBlockButton:
                          'w-full border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 text-white h-10 sm:h-11 font-medium text-sm',
                        formFieldInput:
                          'bg-white/5 border border-white/10 rounded-lg text-white focus:bg-white/10 focus:border-blue-500/50 placeholder:text-slate-500 text-sm',
                        formFieldLabel: 'text-white text-xs sm:text-sm font-medium',
                        dividerLine: 'bg-white/10',
                        dividerText: 'text-slate-500 text-xs',
                        footerActionLink: 'text-blue-400 hover:text-blue-300 text-xs sm:text-sm',
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
            className="mt-6 sm:mt-7 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs text-slate-400 shrink-0"
          >
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-500/50" />
              <span>Enterprise Security</span>
            </div>
            <div className="hidden sm:block w-px h-3 sm:h-4 bg-slate-600" />
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-500/50" />
              <span>99.99% Uptime</span>
            </div>
            <div className="hidden sm:block w-px h-3 sm:h-4 bg-slate-600" />
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-pink-500/50" />
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
          <div className="relative w-full h-full flex items-center justify-center p-6 md:p-8">
            <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-600/20">
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
                className="absolute bottom-8 left-6 md:bottom-12 md:left-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-3 md:p-4 shadow-2xl shadow-blue-600/20 max-w-xs group hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm md:text-lg">↗</span>
                  </div>
                  <span className="text-white/80 text-xs md:text-sm font-medium">Revenue Growth</span>
                </div>
                <p className="text-white text-lg md:text-xl font-bold">+27.4%</p>
                <p className="text-white/50 text-xs mt-1">vs last quarter</p>
              </motion.div>

              {/* AI Insights Card */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-8 right-6 md:top-12 md:right-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-3 md:p-4 shadow-2xl shadow-purple-600/20 max-w-xs group hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm md:text-lg">⚡</span>
                  </div>
                  <span className="text-white/80 text-xs md:text-sm font-medium">AI Insights</span>
                </div>
                <p className="text-white text-lg md:text-xl font-bold">847</p>
                <p className="text-white/50 text-xs mt-1">Active alerts</p>
              </motion.div>

              {/* Market Trends Card */}
              <motion.div
                animate={{
                  y: [0, -18, 0],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-1/3 right-6 md:right-12 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-3 md:p-4 shadow-2xl shadow-pink-600/20 max-w-xs group hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm md:text-lg">📊</span>
                  </div>
                  <span className="text-white/80 text-xs md:text-sm font-medium">Market Trends</span>
                </div>
                <p className="text-white text-lg md:text-xl font-bold">+12.8%</p>
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
        className="lg:hidden relative w-full flex-shrink-0 h-48 sm:h-56 md:h-64 px-4 pb-4"
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
