'use client';

import { motion } from 'framer-motion';
import { Sidebar } from '@/components/layout/sidebar';
import { TopNav } from '@/components/layout/top-nav';
import { AICopilot } from '@/components/dashboard/ai-copilot';
import DashboardContent from './dashboard-content';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Layout: Sidebar + Main Content */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navigation */}
          <TopNav />

          {/* Dashboard Content */}
          <main className="flex-1 overflow-auto">
            <DashboardContent />
          </main>
        </div>
      </div>

      {/* AI Copilot */}
      <AICopilot />
    </div>
  );
}
