'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ExecutiveAgentCard } from '@/components/boardroom/executive-agent-card';
import { ExecutiveVerdict } from '@/components/boardroom/executive-verdict';
import { executiveResponses, executiveVerdict, sampleQuestions } from '@/lib/boardroom-data';

export default function BoardroomPage() {
  const [question, setQuestion] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setIsAnalyzing(true);
    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const handleSampleQuestion = (sampleQ: string) => {
    setQuestion(sampleQ);
  };

  return (
    <main className="min-h-screen w-full bg-background">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative border-b border-slate-700/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Navigation Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-200 mb-6 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Dashboard
          </Link>

          <div className="flex items-start justify-between gap-8 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20"
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
                <h1 className="text-4xl font-bold text-white">Ask Your Executive Team Anything</h1>
              </div>
              <p className="text-lg text-slate-400">
                Receive strategic advice from your AI executive board. Get consensus-driven decisions powered by six specialized executive agents.
              </p>
            </div>
          </div>

          {/* Question Input */}
          <div className="relative">
            {/* Background Layers */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 blur-xl opacity-0 hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50" />

            {/* Input Card */}
            <div className="relative backdrop-blur-xl rounded-2xl border border-slate-700/80 bg-slate-900/40 p-6 shadow-lg">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
                  placeholder="Ask a strategic question..."
                  className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAsk}
                  disabled={isAnalyzing}
                  className="px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 rounded-xl font-semibold text-white disabled:opacity-50 transition-all"
                >
                  {isAnalyzing ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} className="inline-block">
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </motion.button>
              </div>

              {/* Sample Questions */}
              <div className="mt-4">
                <p className="text-xs text-slate-400 font-medium mb-2">Example Questions:</p>
                <div className="flex flex-wrap gap-2">
                  {sampleQuestions.slice(0, 5).map((q, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handleSampleQuestion(q)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700 hover:border-primary/50 text-xs text-slate-300 hover:text-slate-100 transition-all"
                    >
                      {q}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* AI Thinking Animation */}
      {isAnalyzing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto px-6 py-16"
        >
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            </motion.div>
            <p className="text-lg font-semibold text-white mb-2">Analyzing with AI Executive Board</p>
            <p className="text-sm text-slate-400">Gathering insights from CEO, CFO, CMO, Product, Operations, and Risk executives...</p>
          </div>
        </motion.div>
      )}

      {/* Results */}
      {showResults && !isAnalyzing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto px-6 py-12"
        >
          {/* Executive Agents Grid */}
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-white mb-8"
            >
              Executive Board Responses
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {executiveResponses.map((agent, i) => (
                <ExecutiveAgentCard key={agent.name} agent={agent} index={i} />
              ))}
            </div>
          </div>

          {/* Executive Verdict */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <ExecutiveVerdict verdict={executiveVerdict} />
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-4 justify-center"
          >
            <Link
              href="/recommendations"
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 rounded-xl font-semibold text-white transition-all inline-flex items-center gap-2"
            >
              View AI Recommendations
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/decisions"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl font-semibold text-white transition-all inline-flex items-center gap-2"
            >
              View Decision History
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
