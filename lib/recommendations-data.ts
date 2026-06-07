export interface RecommendationCard {
  id: string;
  title: string;
  description: string;
  impactScore: number;
  estimatedROI: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  priority: 'High' | 'Medium' | 'Low';
  timeline: string;
  aiReasoning: string;
  category: 'Revenue' | 'Cost' | 'Pricing' | 'Churn' | 'Marketing' | 'Product' | 'Partnership' | 'Retention';
  tags: string[];
}

export const recommendations: RecommendationCard[] = [
  {
    id: 'rev-001',
    title: 'Revenue Growth',
    description: 'Expand into adjacent market segments with proven demand patterns.',
    impactScore: 0.94,
    estimatedROI: '+$2.4M/year',
    difficulty: 'Medium',
    priority: 'High',
    timeline: '90 days',
    aiReasoning: 'Market analysis shows 34% untapped demand in adjacent segments. Customer base has 78% natural expansion affinity.',
    category: 'Revenue',
    tags: ['market-expansion', 'sales', 'enterprise'],
  },
  {
    id: 'cost-001',
    title: 'Cost Reduction',
    description: 'Optimize cloud infrastructure and reduce compute costs.',
    impactScore: 0.87,
    estimatedROI: '+$680K/year',
    difficulty: 'Easy',
    priority: 'High',
    timeline: '30 days',
    aiReasoning: 'Current infrastructure utilization is 42%. Reserved instances could save 38% on compute costs with minimal operational changes.',
    category: 'Cost',
    tags: ['infrastructure', 'cloud', 'efficiency'],
  },
  {
    id: 'price-001',
    title: 'Pricing Optimization',
    description: 'Implement dynamic pricing based on customer value and market demand.',
    impactScore: 0.91,
    estimatedROI: '+$1.8M/year',
    difficulty: 'Medium',
    priority: 'High',
    timeline: '60 days',
    aiReasoning: 'Elasticity analysis shows 23% pricing power without demand loss. Willingness-to-pay studies confirm premium positioning.',
    category: 'Pricing',
    tags: ['monetization', 'strategy', 'pricing-power'],
  },
  {
    id: 'churn-001',
    title: 'Churn Prevention',
    description: 'Implement predictive churn model with targeted retention programs.',
    impactScore: 0.89,
    estimatedROI: '+$1.2M/year',
    difficulty: 'Medium',
    priority: 'High',
    timeline: '45 days',
    aiReasoning: 'Current churn rate is 8.2%. Early intervention programs could reduce by 40%. ROI becomes positive in Month 2.',
    category: 'Churn',
    tags: ['retention', 'customer-success', 'predictive'],
  },
  {
    id: 'mkt-001',
    title: 'Marketing Opportunities',
    description: 'Launch targeted account-based marketing (ABM) program.',
    impactScore: 0.85,
    estimatedROI: '+$3.2M/year',
    difficulty: 'Hard',
    priority: 'Medium',
    timeline: '120 days',
    aiReasoning: 'ABM programs in similar industries show 340% ROI. Your TAM includes 450 high-fit accounts. Sales readiness confirmed.',
    category: 'Marketing',
    tags: ['demand-generation', 'enterprise-sales', 'abm'],
  },
  {
    id: 'prod-001',
    title: 'Product Expansion',
    description: 'Build AI-powered analytics module for premium tier.',
    impactScore: 0.88,
    estimatedROI: '+$4.1M/year',
    difficulty: 'Hard',
    priority: 'High',
    timeline: '180 days',
    aiReasoning: 'Customer demand for analytics is 87%. Premium market shows 340% willingness-to-pay premium. 12-month payback period.',
    category: 'Product',
    tags: ['product-led', 'premium', 'analytics'],
  },
  {
    id: 'part-001',
    title: 'Strategic Partnerships',
    description: 'Partner with complementary SaaS platforms for co-marketing.',
    impactScore: 0.82,
    estimatedROI: '+$920K/year',
    difficulty: 'Easy',
    priority: 'Medium',
    timeline: '60 days',
    aiReasoning: 'Three high-fit partners identified. Co-marketing reaches 50K qualified prospects. Historical data shows 12% conversion lift.',
    category: 'Partnership',
    tags: ['partnerships', 'channels', 'demand-gen'],
  },
  {
    id: 'ret-001',
    title: 'Customer Retention',
    description: 'Create premium success program with dedicated support.',
    impactScore: 0.86,
    estimatedROI: '+$1.5M/year',
    difficulty: 'Medium',
    priority: 'Medium',
    timeline: '90 days',
    aiReasoning: 'Premium customers show 18% higher lifetime value. Success programs improve retention by 31%. Payback in 14 months.',
    category: 'Retention',
    tags: ['customer-success', 'retention', 'premium'],
  },
];
