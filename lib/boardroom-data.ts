export interface ExecutiveResponse {
  name: string;
  title: string;
  confidenceScore: number;
  executiveSummary: string;
  keyInsights: string[];
  recommendation: string;
  riskFactors?: string[];
  opportunities?: string[];
}

export interface ExecutiveVerdictData {
  confidenceScore: number;
  consensusLevel: number;
  strategicRecommendation: string;
  opportunities: string[];
  risks: string[];
  financialImpact: {
    best: string;
    worst: string;
    expected: string;
  };
  predictedOutcome: string;
  actionPlan: string[];
}

export const executiveResponses: ExecutiveResponse[] = [
  {
    name: 'Sarah Chen',
    title: 'CEO Agent',
    confidenceScore: 0.92,
    executiveSummary: 'Strategic alignment check: This decision aligns with Q3 OKRs.',
    keyInsights: [
      'Market timing is optimal',
      'Competitive advantage strengthens',
      'Team readiness confirmed',
    ],
    recommendation: 'PROCEED with full implementation',
    opportunities: ['Market leadership', 'Customer retention'],
    riskFactors: ['Integration complexity', 'Resource allocation'],
  },
  {
    name: 'Michael Rodriguez',
    title: 'CFO Agent',
    confidenceScore: 0.88,
    executiveSummary: 'Financial viability: ROI projects to 340% within 18 months.',
    keyInsights: [
      'Cash flow impact: +$2.4M',
      'Break-even in Q4',
      'Healthy margin profile',
    ],
    recommendation: 'APPROVE with budget allocation',
    opportunities: ['Cost savings', 'Revenue acceleration'],
    riskFactors: ['Market volatility', 'Execution delays'],
  },
  {
    name: 'Amanda Foster',
    title: 'CMO Agent',
    confidenceScore: 0.85,
    executiveSummary: 'Market positioning: Strong brand fit with target audience.',
    keyInsights: [
      'Brand sentiment +23%',
      'Customer acquisition cost reduced',
      'Social engagement surged',
    ],
    recommendation: 'RECOMMEND aggressive marketing campaign',
    opportunities: ['Brand amplification', 'Market share gains'],
    riskFactors: ['Channel saturation', 'Competitive response'],
  },
  {
    name: 'James Park',
    title: 'Product Agent',
    confidenceScore: 0.90,
    executiveSummary: 'Product-market fit confirmed through beta testing.',
    keyInsights: [
      'User retention: 94%',
      'NPS score: 72',
      'Feature adoption: 87%',
    ],
    recommendation: 'LAUNCH to general availability',
    opportunities: ['Platform expansion', 'Integration partnerships'],
    riskFactors: ['Scaling challenges', 'Support overhead'],
  },
  {
    name: 'Priya Kapoor',
    title: 'Operations Agent',
    confidenceScore: 0.87,
    executiveSummary: 'Operational readiness: All systems prepared for scale.',
    keyInsights: [
      'Infrastructure capacity: 300% headroom',
      'Team capacity: 85% available',
      'Supplier relationships: Confirmed',
    ],
    recommendation: 'GO ahead with deployment',
    opportunities: ['Process optimization', 'Efficiency gains'],
    riskFactors: ['Supply chain risks', 'Team burnout'],
  },
  {
    name: 'Dr. Elena Volkov',
    title: 'Risk Agent',
    confidenceScore: 0.83,
    executiveSummary: 'Risk assessment: Moderate risk profile with clear mitigation.',
    keyInsights: [
      'Regulatory compliance: Verified',
      'Security audit: Passed',
      'Contingency plans: In place',
    ],
    recommendation: 'PROCEED with risk monitoring',
    opportunities: ['Risk diversification', 'Insurance optimization'],
    riskFactors: ['Market disruption', 'Regulatory changes'],
  },
];

export const executiveVerdict: ExecutiveVerdictData = {
  confidenceScore: 0.88,
  consensusLevel: 0.92,
  strategicRecommendation:
    'Proceed with the initiative. Strong consensus across all executive functions with high confidence. Market conditions favor immediate action.',
  opportunities: [
    'Capture 12% market share in next fiscal year',
    'Establish industry leadership position',
    'Create significant shareholder value',
    'Enable strategic partnerships',
    'Unlock new revenue streams',
  ],
  risks: [
    'Execution delays could reduce ROI by 25%',
    'Competitive response within 6 months likely',
    'Requires sustained operational focus',
    'Market conditions could shift rapidly',
  ],
  financialImpact: {
    best: '+$8.2M revenue, 420% ROI',
    expected: '+$4.5M revenue, 340% ROI',
    worst: '+$1.2M revenue, 180% ROI',
  },
  predictedOutcome:
    'Enterprise leader in category within 24 months with 60%+ market penetration.',
  actionPlan: [
    'Phase 1 (Week 1-4): Infrastructure deployment and team ramp-up',
    'Phase 2 (Week 5-12): Beta launch and customer onboarding',
    'Phase 3 (Week 13-16): Full market launch and support scaling',
    'Phase 4 (Month 5+): Optimization and expansion planning',
  ],
};

export const sampleQuestions = [
  'Should we increase ad spend?',
  'Should we hire more engineers?',
  'Should we launch a new product?',
  'Should we expand internationally?',
  'Should we raise prices?',
  'Should we acquire this competitor?',
  'Should we pivot our strategy?',
];
