export type Theme = 
  | 'midnight-executive'
  | 'stripe-elite'
  | 'linear-pro'
  | 'emerald-finance'
  | 'cyber-intelligence'
  | 'luxury-gold'
  | 'arctic-glass'
  | 'founder-mode';

export interface ThemeColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  accent: string;
  muted: string;
  mutedForeground: string;
  border: string;
  chart: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
  };
}

export const themes: Record<Theme, ThemeColors> = {
  'midnight-executive': {
    background: '#0a0e27',
    foreground: '#f1f5f9',
    card: '#1a1f3a',
    cardForeground: '#e2e8f0',
    primary: '#6366f1',
    primaryForeground: '#ffffff',
    secondary: '#8b5cf6',
    accent: '#ec4899',
    muted: '#334155',
    mutedForeground: '#cbd5e1',
    border: '#1e293b',
    chart: {
      line1: '#6366f1',
      line2: '#8b5cf6',
      line3: '#ec4899',
      line4: '#f59e0b',
    },
  },
  'stripe-elite': {
    background: '#0f172a',
    foreground: '#f8fafc',
    card: '#1e293b',
    cardForeground: '#e2e8f0',
    primary: '#0066ff',
    primaryForeground: '#ffffff',
    secondary: '#00d9ff',
    accent: '#ff00d9',
    muted: '#475569',
    mutedForeground: '#cbd5e1',
    border: '#1e293b',
    chart: {
      line1: '#0066ff',
      line2: '#00d9ff',
      line3: '#6366f1',
      line4: '#10b981',
    },
  },
  'linear-pro': {
    background: '#111827',
    foreground: '#f3f4f6',
    card: '#1f2937',
    cardForeground: '#e5e7eb',
    primary: '#5b21b6',
    primaryForeground: '#ffffff',
    secondary: '#7c3aed',
    accent: '#f59e0b',
    muted: '#4b5563',
    mutedForeground: '#d1d5db',
    border: '#2d3748',
    chart: {
      line1: '#7c3aed',
      line2: '#5b21b6',
      line3: '#f59e0b',
      line4: '#10b981',
    },
  },
  'emerald-finance': {
    background: '#0c2e1f',
    foreground: '#ecfdf5',
    card: '#1a3d31',
    cardForeground: '#d1fae5',
    primary: '#059669',
    primaryForeground: '#ffffff',
    secondary: '#10b981',
    accent: '#34d399',
    muted: '#4b7c6b',
    mutedForeground: '#a7f3d0',
    border: '#15462e',
    chart: {
      line1: '#10b981',
      line2: '#059669',
      line3: '#34d399',
      line4: '#6366f1',
    },
  },
  'cyber-intelligence': {
    background: '#0a0f20',
    foreground: '#e0f2fe',
    card: '#0f1929',
    cardForeground: '#cffafe',
    primary: '#00d9ff',
    primaryForeground: '#000000',
    secondary: '#0ea5e9',
    accent: '#6366f1',
    muted: '#0f766e',
    mutedForeground: '#5eead4',
    border: '#164e63',
    chart: {
      line1: '#00d9ff',
      line2: '#0ea5e9',
      line3: '#6366f1',
      line4: '#a78bfa',
    },
  },
  'luxury-gold': {
    background: '#1a1410',
    foreground: '#fef7f1',
    card: '#2d2620',
    cardForeground: '#f5e6d3',
    primary: '#d97706',
    primaryForeground: '#ffffff',
    secondary: '#f59e0b',
    accent: '#fbbf24',
    muted: '#78350f',
    mutedForeground: '#fed7aa',
    border: '#451a03',
    chart: {
      line1: '#d97706',
      line2: '#f59e0b',
      line3: '#fbbf24',
      line4: '#fcd34d',
    },
  },
  'arctic-glass': {
    background: '#0f1419',
    foreground: '#f8fbff',
    card: '#1a2332',
    cardForeground: '#e8f1ff',
    primary: '#3b82f6',
    primaryForeground: '#ffffff',
    secondary: '#60a5fa',
    accent: '#93c5fd',
    muted: '#334155',
    mutedForeground: '#cbd5e1',
    border: '#1e3a5f',
    chart: {
      line1: '#3b82f6',
      line2: '#60a5fa',
      line3: '#93c5fd',
      line4: '#dbeafe',
    },
  },
  'founder-mode': {
    background: '#0a0a0a',
    foreground: '#ffffff',
    card: '#1a1a1a',
    cardForeground: '#e5e5e5',
    primary: '#ffffff',
    primaryForeground: '#000000',
    secondary: '#a0a0a0',
    accent: '#ff4444',
    muted: '#404040',
    mutedForeground: '#808080',
    border: '#262626',
    chart: {
      line1: '#ffffff',
      line2: '#d4d4d8',
      line3: '#a1a1aa',
      line4: '#ff4444',
    },
  },
};

export const themeNames: Record<Theme, string> = {
  'midnight-executive': 'Midnight Executive',
  'stripe-elite': 'Stripe Elite',
  'linear-pro': 'Linear Pro',
  'emerald-finance': 'Emerald Finance',
  'cyber-intelligence': 'Cyber Intelligence',
  'luxury-gold': 'Luxury Gold',
  'arctic-glass': 'Arctic Glass',
  'founder-mode': 'Founder Mode',
};
