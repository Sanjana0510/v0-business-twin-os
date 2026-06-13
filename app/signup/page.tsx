'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SignUp } from '@clerk/nextjs';

export default function SignupPage() {
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
        {/* LEFT SIDE - SIGNUP FORM */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-12 bg-gradient-to-b from-[#1a1f3a]/60 to-[#0a0e27]/80"
        >
          <div className="w-full max-w-2xl flex flex-col items-center justify-center">
            {/* Welcome Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-center"
            >
              <h1 className="text-4xl font-bold text-white mb-2">Create Your Vision</h1>
              <p className="text-slate-300 text-sm">An AI-assisted workspace to craft and elevate your business intelligence</p>
            </motion.div>

            {/* Signup Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-12 rounded-3xl border-2 border-purple-500/40 bg-gradient-to-br from-purple-900/15 via-blue-900/10 to-transparent backdrop-blur-2xl hover:border-purple-500/60 transition-all duration-300 group shadow-2xl shadow-purple-900/30 hover:shadow-purple-900/50"
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-pink-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg pointer-events-none" />

              <div className="relative z-10">
                {/* Form Heading */}
                <h2 className="text-xl font-bold text-white text-center mb-2">Create an account</h2>
                <p className="text-sm text-slate-400 text-center mb-8">Join thousands of companies using Business Twin OS</p>

                {/* Clerk SignUp Component */}
                <style>{`
                  [data-testid="clerk-portal-footer"], 
                  .cl-footer,
                  .cl-footerPageLink,
                  .cl-footerLinks {
                    display: none !important;
                  }
                `}</style>
                <div className="[&_.cl-rootBox]:bg-transparent [&_.cl-rootBox]:shadow-none [&_.cl-rootBox]:p-0 [&_.cl-card]:bg-transparent [&_.cl-card]:shadow-none [&_.cl-card]:border-0 [&_.cl-card]:p-0 [&_.cl-socialButtonsBlockButton]:w-full [&_.cl-socialButtonsBlockButton]:h-11 [&_.cl-socialButtonsBlockButton]:rounded-lg [&_.cl-socialButtonsBlockButton]:border [&_.cl-socialButtonsBlockButton]:border-slate-600 [&_.cl-socialButtonsBlockButton]:bg-slate-900/40 [&_.cl-socialButtonsBlockButton]:text-white [&_.cl-socialButtonsBlockButton]:font-medium [&_.cl-socialButtonsBlockButton]:hover:bg-slate-900/60 [&_.cl-socialButtonsBlockButton]:hover:border-slate-400 [&_.cl-socialButtonsBlockButton]:transition-all [&_.cl-socialButtonsBlockButton]:duration-200 [&_.cl-formButtonPrimary]:w-full [&_.cl-formButtonPrimary]:h-11 [&_.cl-formButtonPrimary]:bg-gradient-to-r [&_.cl-formButtonPrimary]:from-purple-600 [&_.cl-formButtonPrimary]:to-pink-600 [&_.cl-formButtonPrimary]:text-white [&_.cl-formButtonPrimary]:rounded-lg [&_.cl-formButtonPrimary]:font-bold [&_.cl-formButtonPrimary]:hover:shadow-lg [&_.cl-formButtonPrimary]:hover:shadow-purple-500/50 [&_.cl-formButtonPrimary]:transition-all [&_.cl-formButtonPrimary]:duration-200 [&_.cl-formButtonPrimary]:border-0 [&_.cl-formFieldInput]:bg-slate-900/40 [&_.cl-formFieldInput]:border-2 [&_.cl-formFieldInput]:border-slate-600 [&_.cl-formFieldInput]:text-white [&_.cl-formFieldInput]:rounded-lg [&_.cl-formFieldInput]:placeholder:text-slate-500 [&_.cl-formFieldInput]:focus:bg-slate-900/60 [&_.cl-formFieldInput]:focus:border-purple-400 [&_.cl-formFieldInput]:focus:outline-none [&_.cl-formFieldInput]:focus:ring-1 [&_.cl-formFieldInput]:focus:ring-purple-500/50 [&_.cl-formFieldLabel]:text-slate-300 [&_.cl-formFieldLabel]:font-medium [&_.cl-divider]:bg-slate-600 [&_.cl-dividerText]:text-slate-500 [&_.cl-dividerText]:text-xs [&_.cl-footerActionLink]:text-purple-400 [&_.cl-footerActionLink]:hover:text-purple-300 [&_.cl-footer]:hidden">
                  <SignUp
                    appearance={{
                      elements: {
                        rootBox: 'w-full',
                        card: 'w-full bg-transparent shadow-none border-0 p-0',
                        formButtonPrimary: 'w-full h-11 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200',
                        socialButtonsBlockButton: 'w-full h-11 border-2 border-slate-600 bg-slate-900/40 text-white font-medium rounded-lg hover:bg-slate-900/60 hover:border-slate-400 transition-all duration-200',
                        formFieldInput: 'bg-slate-900/40 border-2 border-slate-600 text-white rounded-lg focus:bg-slate-900/60 focus:border-purple-400 focus:ring-1 focus:ring-purple-500/50 placeholder:text-slate-500 py-3 px-4',
                        formFieldLabel: 'text-slate-300 font-medium text-sm',
                        dividerLine: 'bg-slate-600',
                        dividerText: 'text-slate-500 text-xs',
                        footerActionLink: 'text-purple-400 hover:text-purple-300 font-medium',
                      },
                      layout: {
                        socialButtonsPlacement: 'top',
                        socialButtonsVariant: 'blockButton',
                      },
                    }}
                    redirectUrl="/login"
                  />
                </div>

                {/* Sign In Link */}
                <p className="text-center text-sm text-slate-400 mt-6">
                  Already have an account?{' '}
                  <a href="/login" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                    Sign in
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

          {/* Analytics Cards Grid */}
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
            </motion.div>

            {/* AI Insights - Large Card */}
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
    </div>
  );
}
