'use client';

import { motion } from 'framer-motion';
import { FileText, Download, Calendar, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const reports = [
  {
    id: 1,
    type: 'Weekly Report',
    period: 'Week of April 15, 2024',
    date: '2024-04-22',
    status: 'Ready',
    metrics: {
      revenue: '+12.5%',
      customers: '+145',
      retention: '94.2%',
    },
    highlights: [
      'Strong revenue growth driven by enterprise deals',
      'New customer acquisition at 18-month high',
      'Churn rate decreased to lowest quarterly rate',
    ],
    risks: [
      'Extended sales cycle (avg 42 days)',
      'Market competitor pricing pressure',
    ],
    opportunities: [
      'Mid-market segment expansion (estimated $2.1M)',
      'International market entry Q3',
    ],
  },
  {
    id: 2,
    type: 'Monthly Report',
    period: 'April 2024',
    date: '2024-04-30',
    status: 'Ready',
    metrics: {
      revenue: '+18.3%',
      customers: '+892',
      retention: '93.8%',
    },
    highlights: [
      'Record monthly revenue: $4.2M',
      'Customer base grew to 15,200',
      'Product satisfaction scores up 8%',
    ],
    risks: [
      'Operating costs increased 12%',
      'Competitive product launches',
    ],
    opportunities: [
      'Upsell to existing customers ($1.5M potential)',
      'Enterprise partnerships (3 in progress)',
    ],
  },
  {
    id: 3,
    type: 'Quarterly Report',
    period: 'Q1 2024',
    date: '2024-03-31',
    status: 'Draft',
    metrics: {
      revenue: '+25.2%',
      customers: '+2400',
      retention: '93.5%',
    },
    highlights: [
      'Record quarterly revenue: $11.8M',
      'Achieved profitability milestone',
      'Market share increased to 12%',
    ],
    risks: [
      'Regulatory changes in key markets',
      'Talent acquisition challenges',
    ],
    opportunities: [
      'New vertical market expansion ($5M+)',
      'Strategic partnership with enterprise vendors',
    ],
  },
  {
    id: 4,
    type: 'Annual Report',
    period: 'FY 2024',
    date: '2024-12-31',
    status: 'Coming Soon',
    metrics: {
      revenue: '+32.1%',
      customers: '+5200',
      retention: '92.8%',
    },
    highlights: [
      'Annual revenue projected: $48M',
      'Customer base expected to reach 20,000',
      'Expanding into 5 new markets',
    ],
    risks: [
      'Macro economic uncertainty',
      'Talent market competition',
    ],
    opportunities: [
      'International expansion ($15M+ potential)',
      'Adjacent product lines ($8M+ potential)',
    ],
  },
];

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState(reports[0]);

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="w-full bg-background">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md px-6 py-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Executive Reports</h1>
              <p className="text-sm text-muted-foreground mt-1">AI-powered insights and analysis</p>
            </div>
            <Button className="gap-2">
              <FileText className="w-4 h-4" />
              Generate New Report
            </Button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-full px-6 py-8">
          <div className="grid grid-cols-12 gap-6">
            {/* Reports List - Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="col-span-12 lg:col-span-4"
            >
              <div className="space-y-3">
                {reports.map((report, i) => (
                  <motion.button
                    key={report.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                    onClick={() => setSelectedReport(report)}
                    className={`w-full text-left px-4 py-4 rounded-xl border transition-all duration-200 group ${
                      selectedReport.id === report.id
                        ? 'border-primary bg-slate-800/50 shadow-lg shadow-primary/10'
                        : 'border-slate-700 bg-slate-800/30 hover:bg-slate-800/40 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1">
                        <p className="font-semibold text-white">{report.type}</p>
                        <p className="text-xs text-slate-400 mt-1">{report.period}</p>
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap ${
                        report.status === 'Ready' ? 'bg-emerald-500/20 text-emerald-300' :
                        report.status === 'Draft' ? 'bg-amber-500/20 text-amber-300' :
                        'bg-slate-500/20 text-slate-300'
                      }`}>
                        {report.status}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Report Details - Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="col-span-12 lg:col-span-8"
            >
              <div className="space-y-6">
                {/* Report Header */}
                <div className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedReport.type}</h2>
                      <p className="text-sm text-slate-400 mt-2">{selectedReport.period}</p>
                    </div>
                    <span className={`text-sm font-medium px-3 py-1.5 rounded-lg ${
                      selectedReport.status === 'Ready' ? 'bg-emerald-500/20 text-emerald-300' :
                      selectedReport.status === 'Draft' ? 'bg-amber-500/20 text-amber-300' :
                      'bg-slate-500/20 text-slate-300'
                    }`}>
                      {selectedReport.status}
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(selectedReport.metrics).map(([key, value]) => (
                      <motion.div
                        key={key}
                        whileHover={{ y: -4 }}
                        className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50"
                      >
                        <p className="text-xs text-slate-400 uppercase font-medium tracking-wide">{key}</p>
                        <p className="text-2xl font-bold text-emerald-400 mt-2">{value}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Export Buttons */}
                  <div className="flex gap-3 mt-6 pt-6 border-t border-slate-700/50">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-3.5 h-3.5" />
                      PDF
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-3.5 h-3.5" />
                      CSV
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-3.5 h-3.5" />
                      Excel
                    </Button>
                  </div>
                </div>

                {/* Highlights */}
                <div className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-emerald-500/20">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="font-bold text-white">Key Highlights</h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedReport.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="flex gap-3 text-sm text-slate-300"
                      >
                        <span className="text-emerald-400 font-bold mt-1">•</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Risks & Opportunities */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-6 backdrop-blur-xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-red-500/20">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      </div>
                      <h3 className="font-bold text-white text-sm">Risks</h3>
                    </div>
                    <ul className="space-y-2">
                      {selectedReport.risks.map((risk, i) => (
                        <li key={i} className="flex gap-2 text-xs text-slate-300">
                          <span className="text-red-400 font-bold">•</span>
                          <span>{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative group rounded-2xl border border-slate-700 bg-slate-900/40 p-6 backdrop-blur-xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/20">
                        <Lightbulb className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-white text-sm">Opportunities</h3>
                    </div>
                    <ul className="space-y-2">
                      {selectedReport.opportunities.map((opp, i) => (
                        <li key={i} className="flex gap-2 text-xs text-slate-300">
                          <span className="text-primary font-bold">•</span>
                          <span>{opp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
