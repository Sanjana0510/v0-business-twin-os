'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full">

      {/* LEFT SIDE - IMAGE */}
      <div className="hidden lg:block w-1/2 h-full relative">
        <Image
          src="/auth-hero.png"
          alt="Business Team"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Logo */}
        <div className="absolute top-6 left-6 z-10 bg-black/40 backdrop-blur px-3 py-1 rounded-lg text-white font-semibold">
          Business Twin OS
        </div>
      </div>

      {/* RIGHT SIDE - LOGIN */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center bg-[#0f172a]">

        <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6">

          {/* Clerk SignIn */}
          <SignIn
            appearance={{
              elements: {
                card: 'shadow-none border-0',
              },
            }}
            redirectUrl="/"
          />

          {/* Extra Links */}
          <div className="mt-6 text-center border-t pt-4">
            <a href="/forgot-password" className="text-blue-600 text-sm">
              Forgot password?
            </a>
          </div>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <a href="/signup" className="text-blue-600 font-medium">
              Sign up
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}