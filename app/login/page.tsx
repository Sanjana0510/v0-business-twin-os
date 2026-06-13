'use client';

import Image from 'next/image';
import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full">

      {/* LEFT SIDE - IMAGE */}
      <div className="hidden lg:block relative h-full">
        <Image
          src="/auth-hero.png"
          alt="Business Team"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* LOGO */}
        <div className="absolute top-6 left-6 z-10 bg-black/40 backdrop-blur px-4 py-2 rounded-lg text-white font-semibold">
          Business Twin OS
        </div>
      </div>

      {/* RIGHT SIDE - LOGIN */}
      <div className="flex items-center justify-center h-full bg-[#0f172a]">

        <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-xl p-6">

          {/* Heading */}
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back to Business Twin OS</h1>
          <p className="text-slate-600 text-sm mb-6">Access your executive dashboard and business insights.</p>

          {/* Clerk SignIn */}
          <SignIn
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "w-full shadow-none border-0",
              },
            }}
            redirectUrl="/dashboard"
          />

          {/* Forgot Password Link - Inside Card */}
          <div className="mt-4 text-center">
            <a href="/forgot-password" className="text-blue-600 text-sm hover:text-blue-700 transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Sign Up Link - Only One */}
          <div className="mt-4 text-center text-sm text-slate-600">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Sign up
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
