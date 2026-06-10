import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Routes that don't require authentication
const isPublicRoute = createRouteMatcher(['/login', '/signup', '/forgot-password']);

export default clerkMiddleware(async (auth, req) => {
  // If it's not a public route, check authentication
  if (!isPublicRoute(req)) {
    const { userId } = await auth();
    
    // If no user, redirect to login
    if (!userId) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
