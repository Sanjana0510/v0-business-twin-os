'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* LEFT SIDE - Image (50% width, full height) */}
      <div className="hidden lg:block lg:w-1/2 h-screen relative overflow-hidden">
        {/* Hero Image */}
        <Image
          src="/auth-hero.png"
          alt="Business Team with AI Analytics"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

        {/* Logo & Brand - Top Left Absolute */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-8 left-8 z-20 bg-black/40 backdrop-blur-sm rounded-xl p-3 inline-flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="text-white font-bold text-lg">Business Twin OS</span>
        </motion.div>
      </div>

      {/* RIGHT SIDE - Login Form (50% width, full height) */}
      <div className="w-full lg:w-1/2 h-screen bg-[#0f172a] flex items-center justify-center p-4 sm:p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md bg-white rounded-2xl shadow-2xl shadow-black/40 p-8"
        >
          {/* Clerk SignIn Component */}
          <div className="[&_.cl-rootBox]:bg-transparent [&_.cl-rootBox]:shadow-none [&_.cl-rootBox]:p-0 [&_.cl-card]:bg-transparent [&_.cl-card]:shadow-none [&_.cl-card]:border-0 [&_.cl-card]:p-0 [&_.cl-socialButtonsBlockButton]:w-full [&_.cl-socialButtonsBlockButton]:h-11 [&_.cl-socialButtonsBlockButton]:rounded-lg [&_.cl-socialButtonsBlockButton]:border [&_.cl-socialButtonsBlockButton]:border-slate-200 [&_.cl-socialButtonsBlockButton]:bg-white [&_.cl-socialButtonsBlockButton]:text-slate-900 [&_.cl-socialButtonsBlockButton]:font-medium [&_.cl-socialButtonsBlockButton]:hover:bg-slate-50 [&_.cl-socialButtonsBlockButton]:hover:border-slate-300 [&_.cl-socialButtonsBlockButton]:transition-all [&_.cl-socialButtonsBlockButton]:duration-200 [&_.cl-formButtonPrimary]:w-full [&_.cl-formButtonPrimary]:h-11 [&_.cl-formButtonPrimary]:bg-gradient-to-r [&_.cl-formButtonPrimary]:from-blue-600 [&_.cl-formButtonPrimary]:to-purple-600 [&_.cl-formButtonPrimary]:text-white [&_.cl-formButtonPrimary]:rounded-lg [&_.cl-formButtonPrimary]:font-semibold [&_.cl-formButtonPrimary]:hover:shadow-lg [&_.cl-formButtonPrimary]:hover:shadow-blue-500/30 [&_.cl-formButtonPrimary]:hover:scale-105 [&_.cl-formButtonPrimary]:transition-all [&_.cl-formButtonPrimary]:duration-200 [&_.cl-formButtonPrimary]:border-0 [&_.cl-formFieldInput]:bg-slate-50 [&_.cl-formFieldInput]:border [&_.cl-formFieldInput]:border-slate-200 [&_.cl-formFieldInput]:text-slate-900 [&_.cl-formFieldInput]:rounded-lg [&_.cl-formFieldInput]:placeholder:text-slate-500 [&_.cl-formFieldInput]:focus:bg-white [&_.cl-formFieldInput]:focus:border-blue-500 [&_.cl-formFieldInput]:focus:outline-none [&_.cl-formFieldInput]:focus:ring-2 [&_.cl-formFieldInput]:focus:ring-blue-500/20 [&_.cl-formFieldLabel]:text-slate-700 [&_.cl-formFieldLabel]:font-semibold [&_.cl-formFieldLabel]:text-sm [&_.cl-divider]:bg-slate-200 [&_.cl-dividerText]:text-slate-500 [&_.cl-dividerText]:text-sm [&_.cl-footerActionLink]:text-blue-600 [&_.cl-footerActionLink]:hover:text-blue-700 [&_.cl-footerActionLink]:font-medium">
            <SignIn
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'w-full bg-transparent shadow-none border-0',
                  formButtonPrimary: 'w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-200',
                  socialButtonsBlockButton: 'w-full h-11 border border-slate-200 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-200',
                  formFieldInput: 'bg-slate-50 border border-slate-200 text-slate-900 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-slate-500',
                  formFieldLabel: 'text-slate-700 font-semibold text-sm',
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

          {/* Forgot Password Link */}
          <div className="mt-6 text-center border-t border-slate-200 pt-6">
            <a href="/forgot-password" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center text-sm text-slate-600">
            Don&apos;t have an account?{' '}
            <a href="/signup" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Sign up
            </a>
          </div>
        </motion.div>
      </div>

      {/* Mobile - Full screen dark with form only */}
      <div className="lg:hidden fixed inset-0 w-full h-screen bg-[#0f172a] flex items-center justify-center z-0 p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md bg-white rounded-2xl shadow-2xl shadow-black/40 p-8"
        >
          {/* Clerk SignIn Component */}
          <div className="[&_.cl-rootBox]:bg-transparent [&_.cl-rootBox]:shadow-none [&_.cl-rootBox]:p-0 [&_.cl-card]:bg-transparent [&_.cl-card]:shadow-none [&_.cl-card]:border-0 [&_.cl-card]:p-0 [&_.cl-socialButtonsBlockButton]:w-full [&_.cl-socialButtonsBlockButton]:h-11 [&_.cl-socialButtonsBlockButton]:rounded-lg [&_.cl-socialButtonsBlockButton]:border [&_.cl-socialButtonsBlockButton]:border-slate-200 [&_.cl-socialButtonsBlockButton]:bg-white [&_.cl-socialButtonsBlockButton]:text-slate-900 [&_.cl-socialButtonsBlockButton]:font-medium [&_.cl-socialButtonsBlockButton]:hover:bg-slate-50 [&_.cl-socialButtonsBlockButton]:hover:border-slate-300 [&_.cl-socialButtonsBlockButton]:transition-all [&_.cl-socialButtonsBlockButton]:duration-200 [&_.cl-formButtonPrimary]:w-full [&_.cl-formButtonPrimary]:h-11 [&_.cl-formButtonPrimary]:bg-gradient-to-r [&_.cl-formButtonPrimary]:from-blue-600 [&_.cl-formButtonPrimary]:to-purple-600 [&_.cl-formButtonPrimary]:text-white [&_.cl-formButtonPrimary]:rounded-lg [&_.cl-formButtonPrimary]:font-semibold [&_.cl-formButtonPrimary]:hover:shadow-lg [&_.cl-formButtonPrimary]:hover:shadow-blue-500/30 [&_.cl-formButtonPrimary]:hover:scale-105 [&_.cl-formButtonPrimary]:transition-all [&_.cl-formButtonPrimary]:duration-200 [&_.cl-formButtonPrimary]:border-0 [&_.cl-formFieldInput]:bg-slate-50 [&_.cl-formFieldInput]:border [&_.cl-formFieldInput]:border-slate-200 [&_.cl-formFieldInput]:text-slate-900 [&_.cl-formFieldInput]:rounded-lg [&_.cl-formFieldInput]:placeholder:text-slate-500 [&_.cl-formFieldInput]:focus:bg-white [&_.cl-formFieldInput]:focus:border-blue-500 [&_.cl-formFieldInput]:focus:outline-none [&_.cl-formFieldInput]:focus:ring-2 [&_.cl-formFieldInput]:focus:ring-blue-500/20 [&_.cl-formFieldLabel]:text-slate-700 [&_.cl-formFieldLabel]:font-semibold [&_.cl-formFieldLabel]:text-sm [&_.cl-divider]:bg-slate-200 [&_.cl-dividerText]:text-slate-500 [&_.cl-dividerText]:text-sm [&_.cl-footerActionLink]:text-blue-600 [&_.cl-footerActionLink]:hover:text-blue-700 [&_.cl-footerActionLink]:font-medium">
            <SignIn
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'w-full bg-transparent shadow-none border-0',
                  formButtonPrimary: 'w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-200',
                  socialButtonsBlockButton: 'w-full h-11 border border-slate-200 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-200',
                  formFieldInput: 'bg-slate-50 border border-slate-200 text-slate-900 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-slate-500',
                  formFieldLabel: 'text-slate-700 font-semibold text-sm',
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

          {/* Forgot Password Link */}
          <div className="mt-6 text-center border-t border-slate-200 pt-6">
            <a href="/forgot-password" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center text-sm text-slate-600">
            Don&apos;t have an account?{' '}
            <a href="/signup" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Sign up
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
