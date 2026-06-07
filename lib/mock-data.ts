export const kpiData = [
  {
    title: 'Total Revenue',
    value: '$2.4M',
    trend: 23,
    icon: '💰',
  },
  {
    title: 'Active Customers',
    value: '1,247',
    trend: 12,
    icon: '👥',
  },
  {
    title: 'Monthly Recurring',
    value: '$180K',
    trend: 18,
    icon: '📈',
  },
  {
    title: 'Health Score',
    value: '94%',
    trend: 5,
    icon: '❤️',
  },
  {
    title: 'Churn Rate',
    value: '2.3%',
    trend: -0.8,
    icon: '📉',
  },
  {
    title: 'Conversion',
    value: '4.2%',
    trend: 2.1,
    icon: '🎯',
  },
  {
    title: 'Avg Order Value',
    value: '$1,923',
    trend: 7.3,
    icon: '🛒',
  },
  {
    title: 'CAC',
    value: '$145',
    trend: -12,
    icon: '💸',
  },
];

export const revenueTrendData = [
  { name: 'Jan', revenue: 240000, target: 280000 },
  { name: 'Feb', revenue: 380000, target: 300000 },
  { name: 'Mar', revenue: 420000, target: 350000 },
  { name: 'Apr', revenue: 560000, target: 400000 },
  { name: 'May', revenue: 680000, target: 450000 },
  { name: 'Jun', revenue: 890000, target: 500000 },
];

export const customerGrowthData = [
  { name: 'Week 1', new: 120, churn: 8, total: 1050 },
  { name: 'Week 2', new: 145, churn: 12, total: 1183 },
  { name: 'Week 3', new: 178, churn: 6, total: 1355 },
  { name: 'Week 4', new: 203, churn: 10, total: 1548 },
  { name: 'Week 5', new: 189, churn: 9, total: 1728 },
  { name: 'Week 6', new: 224, churn: 11, total: 1941 },
];

export const cashFlowData = [
  { name: 'Jan', inflow: 240, outflow: 180, net: 60 },
  { name: 'Feb', inflow: 380, outflow: 200, net: 180 },
  { name: 'Mar', inflow: 420, outflow: 220, net: 200 },
  { name: 'Apr', inflow: 560, outflow: 280, net: 280 },
  { name: 'May', inflow: 680, outflow: 300, net: 380 },
  { name: 'Jun', inflow: 890, outflow: 350, net: 540 },
];

export const funnelData = [
  { name: 'Visitors', value: 45000 },
  { name: 'Leads', value: 12000 },
  { name: 'Qualified', value: 3600 },
  { name: 'Customers', value: 1247 },
];

export const retentionData = [
  { name: 'Month 1', rate: 92 },
  { name: 'Month 2', rate: 85 },
  { name: 'Month 3', rate: 78 },
  { name: 'Month 4', rate: 72 },
  { name: 'Month 5', rate: 68 },
  { name: 'Month 6', rate: 64 },
];

export const productsData = [
  { name: 'Product A', revenue: 45, customers: 340, trend: 12 },
  { name: 'Product B', revenue: 28, customers: 210, trend: 8 },
  { name: 'Product C', revenue: 18, customers: 150, trend: -3 },
  { name: 'Product D', revenue: 9, customers: 80, trend: 15 },
];

export const recentAlerts = [
  { icon: '⚠️', title: 'Revenue Drop Alert', desc: 'Daily revenue decreased by 15% compared to baseline' },
  { icon: '✨', title: 'Opportunity Found', desc: 'Segment A shows 3x higher engagement potential' },
  { icon: '❌', title: 'Churn Risk', desc: '23 accounts show early warning signs' },
  { icon: '🎉', title: 'Record Breaking Day', desc: 'Today exceeded previous monthly average!' },
];
