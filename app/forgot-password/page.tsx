'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AuthLayout } from '@/components/auth/auth-layout';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <AuthLayout>
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex justify-center mb-8"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary">
          <span className="text-white font-bold text-lg">T</span>
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative group"
      >
        {/* Background layers */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-700/40 border border-slate-700/50" />

        {/* Main card */}
        <div className="relative backdrop-blur-xl rounded-2xl border border-slate-700/80 bg-slate-900/60 p-8 shadow-2xl shadow-black/20">
          {isSubmitted ? (
            <>
              {/* Success state */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/40 flex items-center justify-center"
                  >
                    <Mail className="w-8 h-8 text-primary" />
                  </motion.div>
                </div>

                <h1 className="text-2xl font-bold text-white mb-2">Check your email</h1>
                <p className="text-sm text-slate-400 mb-6">
                  We&apos;ve sent a password reset link to <span className="text-primary font-semibold">{email}</span>
                </p>

                <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-4 mb-6 text-left">
                  <p className="text-xs text-slate-300">
                    <span className="font-semibold">Next steps:</span>
                  </p>
                  <ul className="text-xs text-slate-400 space-y-2 mt-2 list-disc list-inside">
                    <li>Open the email from Business Twin OS</li>
                    <li>Click the password reset link</li>
                    <li>Enter your new password</li>
                  </ul>
                </div>

                <p className="text-xs text-slate-500 mb-6">
                  Didn&apos;t receive the email? Check your spam folder or{' '}
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    try again
                  </button>
                </p>

                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to login
                </Link>
              </motion.div>
            </>
          ) : (
            <>
              {/* Form state */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">Reset password</h1>
                <p className="text-sm text-slate-400">Enter your email and we&apos;ll send you a reset link</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-xs font-medium text-slate-300 mb-2 uppercase tracking-wide">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-11 bg-slate-800/40 border-slate-700/50 text-slate-100 placeholder:text-slate-600"
                      required
                    />
                  </div>
                </motion.div>

                {/* Submit button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-11 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base font-semibold"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      'Send reset link'
                    )}
                  </Button>
                </motion.div>
              </form>

              {/* Back to login */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-center"
              >
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to login
                </Link>
              </motion.div>
            </>
          )}
        </div>
      </motion.div>

      {/* Footer text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-xs text-slate-500 mt-6"
      >
        Powered by Business Twin OS
      </motion.p>
    </AuthLayout>
  );
}
