'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex">
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
      >
        <Image
          src="/auth-hero.png"
          alt="Business Team with AI Analytics"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        
        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute bottom-12 left-12 right-12 z-10"
        >
          <h2 className="text-3xl font-bold text-white">Smarter Decisions Start Here</h2>
          <p className="text-slate-300 mt-3">Unlock AI-powered insights for your business</p>
        </motion.div>
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-12 sm:py-16"
      >
        {/* Logo and Brand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 text-center lg:text-left lg:self-start"
        >
          <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:inline">Business Twin OS</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center lg:text-left mb-10 w-full max-w-md"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">Welcome Back</h1>
          <p className="text-slate-400 text-lg">Sign in to your account</p>
        </motion.div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-md"
        >
          <div className="bg-[#1f2937] rounded-2xl shadow-2xl shadow-black/40 p-8 border border-slate-700/50">
            {/* Clerk SignIn Component */}
            <div className="[&_.cl-rootBox]:bg-transparent [&_.cl-rootBox]:shadow-none [&_.cl-rootBox]:p-0 [&_.cl-card]:bg-transparent [&_.cl-card]:shadow-none [&_.cl-card]:border-0 [&_.cl-card]:p-0 [&_.cl-socialButtonsBlockButton]:w-full [&_.cl-socialButtonsBlockButton]:h-12 [&_.cl-socialButtonsBlockButton]:rounded-lg [&_.cl-socialButtonsBlockButton]:border [&_.cl-socialButtonsBlockButton]:border-slate-600 [&_.cl-socialButtonsBlockButton]:bg-slate-700 [&_.cl-socialButtonsBlockButton]:text-white [&_.cl-socialButtonsBlockButton]:font-medium [&_.cl-socialButtonsBlockButton]:hover:bg-slate-600 [&_.cl-socialButtonsBlockButton]:hover:border-slate-500 [&_.cl-socialButtonsBlockButton]:transition-all [&_.cl-socialButtonsBlockButton]:duration-200 [&_.cl-formButtonPrimary]:w-full [&_.cl-formButtonPrimary]:h-12 [&_.cl-formButtonPrimary]:bg-gradient-to-r [&_.cl-formButtonPrimary]:from-blue-600 [&_.cl-formButtonPrimary]:via-blue-600 [&_.cl-formButtonPrimary]:to-purple-600 [&_.cl-formButtonPrimary]:text-white [&_.cl-formButtonPrimary]:rounded-lg [&_.cl-formButtonPrimary]:font-semibold [&_.cl-formButtonPrimary]:hover:shadow-lg [&_.cl-formButtonPrimary]:hover:shadow-blue-500/30 [&_.cl-formButtonPrimary]:hover:scale-105 [&_.cl-formButtonPrimary]:transition-all [&_.cl-formButtonPrimary]:duration-200 [&_.cl-formButtonPrimary]:border-0 [&_.cl-formFieldInput]:bg-slate-800 [&_.cl-formFieldInput]:border [&_.cl-formFieldInput]:border-slate-600 [&_.cl-formFieldInput]:text-white [&_.cl-formFieldInput]:rounded-lg [&_.cl-formFieldInput]:placeholder:text-slate-500 [&_.cl-formFieldInput]:focus:bg-slate-800 [&_.cl-formFieldInput]:focus:border-blue-500 [&_.cl-formFieldInput]:focus:outline-none [&_.cl-formFieldInput]:focus:ring-2 [&_.cl-formFieldInput]:focus:ring-blue-500/30 [&_.cl-formFieldLabel]:text-slate-300 [&_.cl-formFieldLabel]:font-medium [&_.cl-formFieldLabel]:text-sm [&_.cl-divider]:bg-slate-700 [&_.cl-dividerText]:text-slate-500 [&_.cl-dividerText]:text-sm [&_.cl-footerActionLink]:text-blue-400 [&_.cl-footerActionLink]:hover:text-blue-300 [&_.cl-footerActionLink]:font-medium">
              <SignIn
                appearance={{
                  elements: {
                    rootBox: 'w-full',
                    card: 'w-full bg-transparent shadow-none border-0',
                    formButtonPrimary: 'w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-200',
                    socialButtonsBlockButton: 'w-full h-12 border border-slate-600 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-600 hover:border-slate-500 transition-all duration-200',
                    formFieldInput: 'bg-slate-800 border border-slate-600 text-white rounded-lg focus:bg-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 placeholder:text-slate-500',
                    formFieldLabel: 'text-slate-300 font-medium text-sm',
                    dividerLine: 'bg-slate-700',
                    dividerText: 'text-slate-500 text-sm',
                    footerActionLink: 'text-blue-400 hover:text-blue-300 font-medium',
                  },
                  layout: {
                    socialButtonsPlacement: 'top',
                    socialButtonsVariant: 'blockButton',
                  },
                }}
                redirectUrl="/"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="mt-6 text-center">
              <a href="/forgot-password" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                Forgot password?
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-slate-500 mt-8"
        >
          By signing in, you agree to our{' '}
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Privacy Policy
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}
