'use client';

import { motion } from 'framer-motion';
import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#060B23] flex">
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

      {/* LEFT SIDE - Login Card (Larger) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 overflow-y-auto"
      >
        {/* Heading and Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-10 sm:mb-12 md:mb-14 text-center shrink-0"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-5 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl font-medium max-w-md mx-auto">
            Access your AI Executive Intelligence Platform
          </p>
        </motion.div>

        {/* Glassmorphism Login Card - LARGER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="w-full max-w-lg sm:max-w-xl md:max-w-2xl shrink-0"
        >
          <div className="relative group">
            {/* Glow Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Glass Card Container */}
            <div className="relative backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-14 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-transparent shadow-2xl shadow-black/40">
              {/* Clerk SignIn Component with Enhanced Styling */}
              <div className="w-full [&_.cl-rootBox]:bg-transparent [&_.cl-rootBox]:shadow-none [&_.cl-rootBox]:p-0 [&_.cl-card]:bg-transparent [&_.cl-card]:shadow-none [&_.cl-card]:border-0 [&_.cl-card]:p-0 [&_.cl-socialButtonsBlockButton]:w-full [&_.cl-socialButtonsBlockButton]:h-12 sm:[&_.cl-socialButtonsBlockButton]:h-13 md:[&_.cl-socialButtonsBlockButton]:h-14 [&_.cl-socialButtonsBlockButton]:rounded-xl [&_.cl-socialButtonsBlockButton]:bg-white/8 [&_.cl-socialButtonsBlockButton]:border [&_.cl-socialButtonsBlockButton]:border-white/15 [&_.cl-socialButtonsBlockButton]:text-white [&_.cl-socialButtonsBlockButton]:font-semibold [&_.cl-socialButtonsBlockButton]:text-base sm:[&_.cl-socialButtonsBlockButton]:text-lg [&_.cl-socialButtonsBlockButton]:hover:bg-white/15 [&_.cl-socialButtonsBlockButton]:hover:border-white/25 [&_.cl-socialButtonsBlockButton]:transition-all [&_.cl-formButtonPrimary]:w-full [&_.cl-formButtonPrimary]:h-12 sm:[&_.cl-formButtonPrimary]:h-13 md:[&_.cl-formButtonPrimary]:h-14 [&_.cl-formButtonPrimary]:bg-gradient-to-r [&_.cl-formButtonPrimary]:from-blue-600 [&_.cl-formButtonPrimary]:via-purple-600 [&_.cl-formButtonPrimary]:to-pink-600 [&_.cl-formButtonPrimary]:rounded-xl [&_.cl-formButtonPrimary]:font-semibold [&_.cl-formButtonPrimary]:text-base sm:[&_.cl-formButtonPrimary]:text-lg [&_.cl-formButtonPrimary]:hover:shadow-lg [&_.cl-formButtonPrimary]:hover:shadow-blue-500/30 [&_.cl-formButtonPrimary]:border-0 [&_.cl-formFieldInput]:bg-white/6 [&_.cl-formFieldInput]:border [&_.cl-formFieldInput]:border-white/12 [&_.cl-formFieldInput]:text-white [&_.cl-formFieldInput]:rounded-lg [&_.cl-formFieldInput]:placeholder:text-slate-500 [&_.cl-formFieldInput]:text-base sm:[&_.cl-formFieldInput]:text-lg [&_.cl-formFieldInput]:py-3 sm:[&_.cl-formFieldInput]:py-4 [&_.cl-formFieldInput]:focus:bg-white/10 [&_.cl-formFieldInput]:focus:border-blue-500/40 [&_.cl-formFieldInput]:focus:outline-none [&_.cl-formFieldLabel]:text-white/90 [&_.cl-formFieldLabel]:text-sm sm:[&_.cl-formFieldLabel]:text-base [&_.cl-formFieldLabel]:font-semibold [&_.cl-divider]:bg-white/8 [&_.cl-dividerText]:text-slate-500 [&_.cl-dividerText]:text-sm">
                <SignIn
                  appearance={{
                    elements: {
                      rootBox: 'w-full',
                      card: 'w-full bg-transparent shadow-none border-0',
                      formButtonPrimary:
                        'w-full h-12 sm:h-13 md:h-14 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-base sm:text-lg rounded-xl hover:shadow-lg hover:shadow-blue-500/30 border-0',
                      socialButtonsBlockButton:
                        'w-full h-12 sm:h-13 md:h-14 bg-white/8 border border-white/15 text-white font-semibold text-base sm:text-lg rounded-xl hover:bg-white/15 hover:border-white/25 transition-all',
                      formFieldInput:
                        'w-full bg-white/6 border border-white/12 text-white rounded-lg placeholder:text-slate-500 text-base sm:text-lg py-3 sm:py-4 focus:bg-white/10 focus:border-blue-500/40 focus:outline-none',
                      formFieldLabel: 'text-white/90 text-sm sm:text-base font-semibold',
                      dividerLine: 'bg-white/10',
                      dividerText: 'text-slate-500 text-sm',
                      footerActionLink: 'text-blue-400 hover:text-blue-300 text-base sm:text-lg',
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
          className="mt-10 sm:mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm md:text-base text-slate-400 shrink-0"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-500/50" />
            <span>Enterprise Security</span>
          </div>
          <div className="hidden sm:block w-px h-5 sm:h-6 bg-slate-600" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-purple-500/50" />
            <span>99.99% Uptime</span>
          </div>
          <div className="hidden sm:block w-px h-5 sm:h-6 bg-slate-600" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-pink-500/50" />
            <span>HIPAA Compliant</span>
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE - Hero Image with Logo (Desktop Only) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent" />

        {/* Top Header with Logo on Right Side */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative h-20 flex items-center justify-center px-8 z-10"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-2xl">T</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Business Twin OS</span>
          </div>
        </motion.div>

        {/* Hero Image Container */}
        <div className="relative flex-1 flex items-center justify-center px-6 md:px-8 pb-6">
          <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-600/20">
            <Image
              src="/auth-hero.png"
              alt="Business Team with AI Analytics"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

            {/* Floating Analytics Cards - Glass UI */}
            {/* Revenue Card */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-10 left-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 shadow-2xl shadow-blue-600/20 max-w-xs group hover:bg-white/15 hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">↗</span>
                </div>
                <span className="text-white/80 text-sm font-semibold">Revenue Growth</span>
              </div>
              <p className="text-white text-2xl font-bold">+27.4%</p>
              <p className="text-white/50 text-xs mt-1">vs last quarter</p>
            </motion.div>

            {/* AI Insights Card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-10 right-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 shadow-2xl shadow-purple-600/20 max-w-xs group hover:bg-white/15 hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">⚡</span>
                </div>
                <span className="text-white/80 text-sm font-semibold">AI Insights</span>
              </div>
              <p className="text-white text-2xl font-bold">847</p>
              <p className="text-white/50 text-xs mt-1">Active alerts</p>
            </motion.div>

            {/* Market Trends Card */}
            <motion.div
              animate={{
                y: [0, -18, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-1/4 right-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 shadow-2xl shadow-pink-600/20 max-w-xs group hover:bg-white/15 hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">📊</span>
                </div>
                <span className="text-white/80 text-sm font-semibold">Market Trends</span>
              </div>
              <p className="text-white text-2xl font-bold">+12.8%</p>
              <p className="text-white/50 text-xs mt-1">Market momentum</p>
            </motion.div>

            {/* Health Score Card */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
              className="absolute top-1/3 left-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 shadow-2xl shadow-emerald-600/20 max-w-xs group hover:bg-white/15 hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <span className="text-white/80 text-sm font-semibold">Health Score</span>
              </div>
              <p className="text-white text-2xl font-bold">98%</p>
              <p className="text-white/50 text-xs mt-1">System healthy</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Hero Image (Mobile/Tablet) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute lg:hidden top-0 left-0 right-0 w-full h-32 sm:h-40 md:h-48 pointer-events-none"
      >
        <div className="relative w-full h-full rounded-b-2xl overflow-hidden border-b border-white/10 shadow-xl shadow-blue-600/20">
          <Image
            src="/auth-hero.png"
            alt="Business Team with AI Analytics"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}
