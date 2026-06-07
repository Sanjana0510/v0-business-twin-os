export interface Decision {
  id: string;
  decision: string;
  date: string;
  category: 'Strategic' | 'Product' | 'Financial' | 'Operational' | 'Marketing';
  aiReasoning: string;
  executiveVotes: {
    ceo: 'Yes' | 'No' | 'Abstain';
    cfo: 'Yes' | 'No' | 'Abstain';
    cmo: 'Yes' | 'No' | 'Abstain';
    product: 'Yes' | 'No' | 'Abstain';
    operations: 'Yes' | 'No' | 'Abstain';
    risk: 'Yes' | 'No' | 'Abstain';
  };
  finalVerdict: 'Approved' | 'Rejected' | 'Pending';
  confidenceScore: number;
  outcome?: {
    status: 'Success' | 'Partial' | 'Failed';
    kpiImpact: string;
    lessonsLearned: string[];
  };
  tags: string[];
}

export const decisions: Decision[] = [
  {
    id: 'dec-001',
    decision: 'Expand to European market',
    date: '2024-04-15',
    category: 'Strategic',
    aiReasoning: 'EU market shows 45% CAGR, regulatory compliance pathway clear, competitive advantage sustainable for 18+ months.',
    executiveVotes: {
      ceo: 'Yes',
      cfo: 'Yes',
      cmo: 'Yes',
      product: 'Yes',
      operations: 'Yes',
      risk: 'Yes',
    },
    finalVerdict: 'Approved',
    confidenceScore: 0.94,
    outcome: {
      status: 'Success',
      kpiImpact: '+$8.2M ARR, 250 enterprise customers',
      lessonsLearned: [
        'Local partnerships essential for market entry',
        'Regulatory compliance requires 3-month planning',
        'Sales cycle 40% longer than AMER',
      ],
    },
    tags: ['expansion', 'international', 'high-growth'],
  },
  {
    id: 'dec-002',
    decision: 'Launch freemium tier',
    date: '2024-03-22',
    category: 'Product',
    aiReasoning: 'Freemium users convert at 8.2% within 12 months. TAM expansion 3x. Competitive analysis shows proven model.',
    executiveVotes: {
      ceo: 'Yes',
      cfo: 'Abstain',
      cmo: 'Yes',
      product: 'Yes',
      operations: 'Yes',
      risk: 'No',
    },
    finalVerdict: 'Approved',
    confidenceScore: 0.87,
    outcome: {
      status: 'Partial',
      kpiImpact: '+12K freemium signups, 2.1% conversion, $1.2M MRR new revenue',
      lessonsLearned: [
        'Feature parity concerns reduced conversion from projections',
        'Support costs higher for freemium segment',
        'Upgrade path optimization critical for scaling',
      ],
    },
    tags: ['product-led', 'go-to-market', 'growth'],
  },
  {
    id: 'dec-003',
    decision: 'Acquire competing startup',
    date: '2024-02-10',
    category: 'Financial',
    aiReasoning: 'Strategic fit 92%, synergy potential $4.2M, valuation favorable, integration plan viable in 6 months.',
    executiveVotes: {
      ceo: 'Yes',
      cfo: 'Yes',
      cmo: 'Yes',
      product: 'Yes',
      operations: 'No',
      risk: 'Abstain',
    },
    finalVerdict: 'Approved',
    confidenceScore: 0.82,
    outcome: {
      status: 'Success',
      kpiImpact: 'Combined $18M ARR, 3x customer base, 120% increase in engineering capacity',
      lessonsLearned: [
        'Cultural integration took longer than planned (8 vs 6 months)',
        'Retained 87% of acquisition team (better than 85% target)',
        'Platform consolidation delayed by 2 months',
      ],
    },
    tags: ['m&a', 'strategic', 'scale'],
  },
  {
    id: 'dec-004',
    decision: 'Increase pricing by 15%',
    date: '2024-01-18',
    category: 'Financial',
    aiReasoning: 'Elasticity study shows 8% demand loss, net revenue gain 6.8%. Willingness to pay supports premium positioning.',
    executiveVotes: {
      ceo: 'Yes',
      cfo: 'Yes',
      cmo: 'No',
      product: 'Abstain',
      operations: 'Yes',
      risk: 'Yes',
    },
    finalVerdict: 'Approved',
    confidenceScore: 0.79,
    outcome: {
      status: 'Success',
      kpiImpact: '+$2.4M ARR, 12% actual churn (8% projected), improved profitability',
      lessonsLearned: [
        'Segmented pricing worked better than flat increase',
        'Enterprise customers accepted full price increase',
        'SMB segment showed 18% churn (above expectations)',
      ],
    },
    tags: ['monetization', 'pricing', 'profitability'],
  },
  {
    id: 'dec-005',
    decision: 'Build AI-powered features',
    date: '2023-12-01',
    category: 'Product',
    aiReasoning: 'AI feature demand 91% from customers. Market differentiation strong. 12-month ROI clear. Execution risks manageable.',
    executiveVotes: {
      ceo: 'Yes',
      cfo: 'Yes',
      cmo: 'Yes',
      product: 'Yes',
      operations: 'Yes',
      risk: 'Yes',
    },
    finalVerdict: 'Approved',
    confidenceScore: 0.91,
    tags: ['ai', 'product-innovation', 'competitive-advantage'],
  },
];

export const decisionMetrics = {
  totalDecisions: decisions.length,
  approvedDecisions: decisions.filter((d) => d.finalVerdict === 'Approved').length,
  successfulOutcomes: decisions.filter((d) => d.outcome?.status === 'Success').length,
  averageConfidence: (decisions.reduce((sum, d) => sum + d.confidenceScore, 0) / decisions.length * 100).toFixed(1),
};
