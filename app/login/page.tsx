'use client';

import Image from 'next/image';
import { SignIn } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    // Hide Clerk dev mode alerts dynamically
    const hideClerkDevMode = () => {
      // Hide all dialogs and alert dialogs
      const dialogs = document.querySelectorAll('[role="alertdialog"], [role="dialog"], .cl-modal, .cl-devModeBanner');
      dialogs.forEach((dialog) => {
        dialog.style.display = 'none !important';
        dialog.style.visibility = 'hidden';
        dialog.style.pointerEvents = 'none';
        dialog.style.opacity = '0';
        dialog.style.height = '0';
        dialog.style.width = '0';
      });

      // Also hide any parent containers that might be hosting the dialog
      const parents = document.querySelectorAll('[class*="portal"], [class*="modal"], [class*="dialog"]');
      parents.forEach((parent) => {
        const text = parent.textContent || '';
        if (text.includes('Configure your application') || text.includes('Development') || text.includes('Temporary API')) {
          parent.style.display = 'none';
          parent.style.visibility = 'hidden';
          parent.style.pointerEvents = 'none';
        }
      });
    };

    // Initial hide
    hideClerkDevMode();
    
    // Hide after a small delay to catch dynamic rendering
    const timer1 = setTimeout(hideClerkDevMode, 100);
    const timer2 = setTimeout(hideClerkDevMode, 500);
    
    // Setup mutation observer to catch new elements
    const observer = new MutationObserver(() => {
      hideClerkDevMode();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    observer.observe(document.documentElement, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      observer.disconnect();
    };
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full">
      <style>{`
        /* Hide Clerk dev mode indicators */
        .cl-devModeBanner,
        .cl-devModeNotification,
        [role="alertdialog"],
        [aria-label*="Configure"],
        [aria-label*="Development"],
        .cl-modal,
        div[class*="modal"] {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
          width: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        /* Hide any Clerk alert/notification dialogs */
        div[role="dialog"],
        div[role="alertdialog"],
        [class*="ClerkAlert"],
        [class*="clerk-alert"] {
          display: none !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
        /* Hide the overlay/backdrop */
        div[class*="overlay"],
        div[class*="backdrop"] {
          display: none !important;
        }
      `}</style>

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
      <div className="flex items-center justify-center h-full bg-[#0f172a] px-4 sm:px-6 md:px-8">

        <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-8">

          {/* Heading */}
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back to Business Twin OS</h1>
          <p className="text-slate-600 text-base mb-8">Access your executive dashboard and business insights.</p>

          {/* Clerk SignIn */}
          <div className="[&_.cl-signIn-start]:hidden [&_[aria-label*='Development']]:hidden [&_.cl-devModeBanner]:hidden [&_[aria-label*='Configure']]:hidden [&_[role='alertdialog']]:hidden">
            <SignIn
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "w-full shadow-none border-0",
                  devModeBanner: "hidden",
                },
              }}
              redirectUrl="/dashboard"
            />
          </div>

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

          {/* Footer Text */}
          <div className="mt-6 text-center text-xs text-slate-500">
            Secure Authentication
          </div>

        </div>

      </div>
    </div>
  );
}
