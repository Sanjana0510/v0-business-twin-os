'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { SignUp } from '@clerk/nextjs';

export default function SignupPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0f172a]">
      {/* LEFT SIDE - Image (50% width, full height) */}
      <div className="hidden lg:block lg:w-1/2 h-screen relative overflow-hidden">
        {/* Hero Image */}
        <Image
          src="/auth-hero.png"
          alt="AI Workspace"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

        {/* Logo & Brand - Top Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-8 left-8 z-20"
        >
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 inline-flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-white font-bold text-lg">Business Twin OS</span>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-12 left-8 right-8 z-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Create Your Vision</h2>
          <p className="text-lg text-slate-200">AI-assisted workspace to craft and elevate your ideas.</p>
        </motion.div>
      </div>

      {/* RIGHT SIDE - Signup Form (50% width, full height) */}
      <div className="w-full lg:w-1/2 h-screen bg-[#0f172a] flex items-center justify-center p-4 sm:p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md bg-[#1a2340] rounded-2xl shadow-2xl shadow-black/40 p-8 border border-slate-700/30"
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Create An Account</h1>
            <p className="text-sm text-slate-400">Join thousands using Business Twin OS</p>
          </div>

          {/* Clerk SignUp Component */}
          <div className="[&_.cl-rootBox]:bg-transparent [&_.cl-rootBox]:shadow-none [&_.cl-rootBox]:p-0 [&_.cl-card]:bg-transparent [&_.cl-card]:shadow-none [&_.cl-card]:border-0 [&_.cl-card]:p-0 [&_.cl-socialButtonsBlockButton]:w-full [&_.cl-socialButtonsBlockButton]:h-11 [&_.cl-socialButtonsBlockButton]:rounded-lg [&_.cl-socialButtonsBlockButton]:border [&_.cl-socialButtonsBlockButton]:border-slate-600 [&_.cl-socialButtonsBlockButton]:bg-slate-800/40 [&_.cl-socialButtonsBlockButton]:text-slate-200 [&_.cl-socialButtonsBlockButton]:font-medium [&_.cl-socialButtonsBlockButton]:hover:bg-slate-700/60 [&_.cl-socialButtonsBlockButton]:hover:border-slate-500 [&_.cl-socialButtonsBlockButton]:transition-all [&_.cl-socialButtonsBlockButton]:duration-200 [&_.cl-formButtonPrimary]:w-full [&_.cl-formButtonPrimary]:h-11 [&_.cl-formButtonPrimary]:bg-gradient-to-r [&_.cl-formButtonPrimary]:from-yellow-500 [&_.cl-formButtonPrimary]:to-yellow-600 [&_.cl-formButtonPrimary]:text-slate-900 [&_.cl-formButtonPrimary]:rounded-lg [&_.cl-formButtonPrimary]:font-semibold [&_.cl-formButtonPrimary]:hover:shadow-lg [&_.cl-formButtonPrimary]:hover:shadow-yellow-500/30 [&_.cl-formButtonPrimary]:hover:scale-105 [&_.cl-formButtonPrimary]:transition-all [&_.cl-formButtonPrimary]:duration-200 [&_.cl-formButtonPrimary]:border-0 [&_.cl-formFieldInput]:bg-slate-800/40 [&_.cl-formFieldInput]:border [&_.cl-formFieldInput]:border-slate-600 [&_.cl-formFieldInput]:text-slate-100 [&_.cl-formFieldInput]:rounded-lg [&_.cl-formFieldInput]:placeholder:text-slate-600 [&_.cl-formFieldInput]:focus:bg-slate-800/60 [&_.cl-formFieldInput]:focus:border-blue-500 [&_.cl-formFieldInput]:focus:outline-none [&_.cl-formFieldInput]:focus:ring-2 [&_.cl-formFieldInput]:focus:ring-blue-500/20 [&_.cl-formFieldLabel]:text-slate-300 [&_.cl-formFieldLabel]:font-semibold [&_.cl-formFieldLabel]:text-sm [&_.cl-divider]:bg-slate-700/50 [&_.cl-dividerText]:text-slate-500 [&_.cl-dividerText]:text-sm [&_.cl-footerActionLink]:text-blue-400 [&_.cl-footerActionLink]:hover:text-blue-300">
            <SignUp
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'w-full bg-transparent shadow-none border-0',
                  formButtonPrimary: 'w-full h-11 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-200',
                  socialButtonsBlockButton: 'w-full h-11 border border-slate-600 bg-slate-800/40 text-slate-200 font-medium rounded-lg hover:bg-slate-700/60 hover:border-slate-500 transition-all duration-200',
                  formFieldInput: 'bg-slate-800/40 border border-slate-600 text-slate-100 rounded-lg focus:bg-slate-800/60 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-slate-600',
                  formFieldLabel: 'text-slate-300 font-semibold text-sm',
                  dividerLine: 'bg-slate-700/50',
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

          {/* Sign In Link */}
          <div className="mt-6 text-center border-t border-slate-700/30 pt-6 text-sm text-slate-400">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Sign in
            </Link>
          </div>

          {/* Terms */}
          <p className="text-xs text-slate-500 mt-6 text-center leading-relaxed">
            By creating an account, you agree to our{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </div>

      {/* Mobile - Full screen dark with form only */}
      <div className="lg:hidden fixed inset-0 w-full h-screen bg-[#0f172a] flex items-center justify-center z-0 p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md bg-[#1a2340] rounded-2xl shadow-2xl shadow-black/40 p-8 border border-slate-700/30"
        >
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">T</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2 text-center">Create An Account</h1>
            <p className="text-sm text-slate-400 text-center">Join Business Twin OS today</p>
          </div>

          {/* Clerk SignUp Component */}
          <div className="[&_.cl-rootBox]:bg-transparent [&_.cl-rootBox]:shadow-none [&_.cl-rootBox]:p-0 [&_.cl-card]:bg-transparent [&_.cl-card]:shadow-none [&_.cl-card]:border-0 [&_.cl-card]:p-0 [&_.cl-socialButtonsBlockButton]:w-full [&_.cl-socialButtonsBlockButton]:h-11 [&_.cl-socialButtonsBlockButton]:rounded-lg [&_.cl-socialButtonsBlockButton]:border [&_.cl-socialButtonsBlockButton]:border-slate-600 [&_.cl-socialButtonsBlockButton]:bg-slate-800/40 [&_.cl-socialButtonsBlockButton]:text-slate-200 [&_.cl-socialButtonsBlockButton]:font-medium [&_.cl-socialButtonsBlockButton]:hover:bg-slate-700/60 [&_.cl-socialButtonsBlockButton]:hover:border-slate-500 [&_.cl-socialButtonsBlockButton]:transition-all [&_.cl-socialButtonsBlockButton]:duration-200 [&_.cl-formButtonPrimary]:w-full [&_.cl-formButtonPrimary]:h-11 [&_.cl-formButtonPrimary]:bg-gradient-to-r [&_.cl-formButtonPrimary]:from-yellow-500 [&_.cl-formButtonPrimary]:to-yellow-600 [&_.cl-formButtonPrimary]:text-slate-900 [&_.cl-formButtonPrimary]:rounded-lg [&_.cl-formButtonPrimary]:font-semibold [&_.cl-formButtonPrimary]:hover:shadow-lg [&_.cl-formButtonPrimary]:hover:shadow-yellow-500/30 [&_.cl-formButtonPrimary]:hover:scale-105 [&_.cl-formButtonPrimary]:transition-all [&_.cl-formButtonPrimary]:duration-200 [&_.cl-formButtonPrimary]:border-0 [&_.cl-formFieldInput]:bg-slate-800/40 [&_.cl-formFieldInput]:border [&_.cl-formFieldInput]:border-slate-600 [&_.cl-formFieldInput]:text-slate-100 [&_.cl-formFieldInput]:rounded-lg [&_.cl-formFieldInput]:placeholder:text-slate-600 [&_.cl-formFieldInput]:focus:bg-slate-800/60 [&_.cl-formFieldInput]:focus:border-blue-500 [&_.cl-formFieldInput]:focus:outline-none [&_.cl-formFieldInput]:focus:ring-2 [&_.cl-formFieldInput]:focus:ring-blue-500/20 [&_.cl-formFieldLabel]:text-slate-300 [&_.cl-formFieldLabel]:font-semibold [&_.cl-formFieldLabel]:text-sm [&_.cl-divider]:bg-slate-700/50 [&_.cl-dividerText]:text-slate-500 [&_.cl-dividerText]:text-sm [&_.cl-footerActionLink]:text-blue-400 [&_.cl-footerActionLink]:hover:text-blue-300">
            <SignUp
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'w-full bg-transparent shadow-none border-0',
                  formButtonPrimary: 'w-full h-11 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-200',
                  socialButtonsBlockButton: 'w-full h-11 border border-slate-600 bg-slate-800/40 text-slate-200 font-medium rounded-lg hover:bg-slate-700/60 hover:border-slate-500 transition-all duration-200',
                  formFieldInput: 'bg-slate-800/40 border border-slate-600 text-slate-100 rounded-lg focus:bg-slate-800/60 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-slate-600',
                  formFieldLabel: 'text-slate-300 font-semibold text-sm',
                  dividerLine: 'bg-slate-700/50',
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

          {/* Sign In Link */}
          <div className="mt-6 text-center border-t border-slate-700/30 pt-6 text-sm text-slate-400">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Sign in
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
