'use client';

import { motion } from 'framer-motion';
import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen bg-[#0f172a] flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-white font-semibold text-lg">Business Twin OS</span>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            href="/signup"
            className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
          >
            Don't have an account? <span className="text-blue-500 hover:text-blue-400 font-semibold">Sign up</span>
          </motion.a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-md"
        >
          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Welcome back</h1>
            <p className="text-slate-400 text-sm sm:text-base">Sign in to your account to continue</p>
          </div>

          {/* Login Card - Solid White Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl shadow-black/20 p-8 sm:p-10"
          >
            {/* Clerk SignIn Component */}
            <div className="[&_.cl-rootBox]:bg-transparent [&_.cl-rootBox]:shadow-none [&_.cl-rootBox]:p-0 [&_.cl-card]:bg-transparent [&_.cl-card]:shadow-none [&_.cl-card]:border-0 [&_.cl-card]:p-0 [&_.cl-socialButtonsBlockButton]:w-full [&_.cl-socialButtonsBlockButton]:h-11 [&_.cl-socialButtonsBlockButton]:rounded-lg [&_.cl-socialButtonsBlockButton]:border [&_.cl-socialButtonsBlockButton]:border-slate-300 [&_.cl-socialButtonsBlockButton]:bg-white [&_.cl-socialButtonsBlockButton]:text-slate-900 [&_.cl-socialButtonsBlockButton]:font-medium [&_.cl-socialButtonsBlockButton]:hover:bg-slate-50 [&_.cl-socialButtonsBlockButton]:hover:border-slate-400 [&_.cl-socialButtonsBlockButton]:transition-all [&_.cl-socialButtonsBlockButton]:duration-200 [&_.cl-formButtonPrimary]:w-full [&_.cl-formButtonPrimary]:h-11 [&_.cl-formButtonPrimary]:bg-blue-600 [&_.cl-formButtonPrimary]:text-white [&_.cl-formButtonPrimary]:rounded-lg [&_.cl-formButtonPrimary]:font-semibold [&_.cl-formButtonPrimary]:hover:bg-blue-700 [&_.cl-formButtonPrimary]:transition-colors [&_.cl-formButtonPrimary]:duration-200 [&_.cl-formButtonPrimary]:border-0 [&_.cl-formFieldInput]:bg-slate-50 [&_.cl-formFieldInput]:border [&_.cl-formFieldInput]:border-slate-300 [&_.cl-formFieldInput]:text-slate-900 [&_.cl-formFieldInput]:rounded-lg [&_.cl-formFieldInput]:placeholder:text-slate-500 [&_.cl-formFieldInput]:focus:bg-white [&_.cl-formFieldInput]:focus:border-blue-500 [&_.cl-formFieldInput]:focus:outline-none [&_.cl-formFieldInput]:focus:ring-1 [&_.cl-formFieldInput]:focus:ring-blue-500 [&_.cl-formFieldLabel]:text-slate-700 [&_.cl-formFieldLabel]:font-medium [&_.cl-formFieldLabel]:text-sm [&_.cl-divider]:bg-slate-200 [&_.cl-dividerText]:text-slate-500 [&_.cl-dividerText]:text-sm [&_.cl-footerActionLink]:text-blue-600 [&_.cl-footerActionLink]:hover:text-blue-700">
              <SignIn
                appearance={{
                  elements: {
                    rootBox: 'w-full',
                    card: 'w-full bg-transparent shadow-none border-0',
                    formButtonPrimary: 'w-full h-11 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200',
                    socialButtonsBlockButton: 'w-full h-11 border border-slate-300 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-50 transition-all',
                    formFieldInput: 'bg-slate-50 border border-slate-300 text-slate-900 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
                    formFieldLabel: 'text-slate-700 font-medium text-sm',
                    dividerLine: 'bg-slate-200',
                    dividerText: 'text-slate-500 text-sm',
                    footerActionLink: 'text-blue-600 hover:text-blue-700 font-medium',
                  },
                  layout: {
                    socialButtonsPlacement: 'top',
                    socialButtonsVariant: 'blockButton',
                  },
                }}
                redirectUrl="/"
              />
            </div>
          </motion.div>

          {/* Footer Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-xs text-slate-500 mt-6"
          >
            By signing in, you agree to our{' '}
            <a href="#" className="text-blue-500 hover:text-blue-400">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-500 hover:text-blue-400">
              Privacy Policy
            </a>
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
}
