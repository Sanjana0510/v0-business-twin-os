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

export interface ThemeConfig {
  colors: ThemeColors;
  gradient: {
    primary: string;
    secondary: string;
    accent: string;
  };
  card: {
    background: string;
    border: string;
    shadowColor: string;
  };
  chart: {
    background: string;
    gridColor: string;
  };
  glass: {
    blurStrength: string;
    opacity: string;
  };
}

export const themes: Record<Theme, ThemeConfig> = {
  'midnight-executive': {
    colors: {
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
    gradient: {
      primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      secondary: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      accent: 'linear-gradient(135deg, #ec4899 0%, #6366f1 100%)',
    },
    card: {
      background: 'rgba(26, 31, 58, 0.4)',
      border: 'rgba(99, 102, 241, 0.2)',
      shadowColor: 'rgba(99, 102, 241, 0.1)',
    },
    chart: {
      background: 'rgba(26, 31, 58, 0.2)',
      gridColor: 'rgba(99, 102, 241, 0.1)',
    },
    glass: {
      blurStrength: 'blur(12px)',
      opacity: '0.7',
    },
  },
  'stripe-elite': {
    colors: {
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
    gradient: {
      primary: 'linear-gradient(135deg, #0066ff 0%, #00d9ff 100%)',
      secondary: 'linear-gradient(135deg, #00d9ff 0%, #ff00d9 100%)',
      accent: 'linear-gradient(135deg, #ff00d9 0%, #0066ff 100%)',
    },
    card: {
      background: 'rgba(30, 41, 59, 0.5)',
      border: 'rgba(0, 102, 255, 0.3)',
      shadowColor: 'rgba(0, 102, 255, 0.15)',
    },
    chart: {
      background: 'rgba(30, 41, 59, 0.3)',
      gridColor: 'rgba(0, 102, 255, 0.15)',
    },
    glass: {
      blurStrength: 'blur(16px)',
      opacity: '0.8',
    },
  },
  'linear-pro': {
    colors: {
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
    gradient: {
      primary: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
      secondary: 'linear-gradient(135deg, #5b21b6 0%, #f59e0b 100%)',
      accent: 'linear-gradient(135deg, #f59e0b 0%, #7c3aed 100%)',
    },
    card: {
      background: 'rgba(31, 41, 55, 0.4)',
      border: 'rgba(124, 58, 237, 0.25)',
      shadowColor: 'rgba(124, 58, 237, 0.12)',
    },
    chart: {
      background: 'rgba(31, 41, 55, 0.25)',
      gridColor: 'rgba(124, 58, 237, 0.12)',
    },
    glass: {
      blurStrength: 'blur(14px)',
      opacity: '0.75',
    },
  },
  'emerald-finance': {
    colors: {
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
    gradient: {
      primary: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
      secondary: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      accent: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
    },
    card: {
      background: 'rgba(26, 61, 49, 0.35)',
      border: 'rgba(5, 150, 105, 0.3)',
      shadowColor: 'rgba(5, 150, 105, 0.1)',
    },
    chart: {
      background: 'rgba(26, 61, 49, 0.2)',
      gridColor: 'rgba(5, 150, 105, 0.12)',
    },
    glass: {
      blurStrength: 'blur(12px)',
      opacity: '0.7',
    },
  },
  'cyber-intelligence': {
    colors: {
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
    gradient: {
      primary: 'linear-gradient(135deg, #00d9ff 0%, #0ea5e9 100%)',
      secondary: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
      accent: 'linear-gradient(135deg, #6366f1 0%, #00d9ff 100%)',
    },
    card: {
      background: 'rgba(15, 25, 41, 0.45)',
      border: 'rgba(0, 217, 255, 0.35)',
      shadowColor: 'rgba(0, 217, 255, 0.15)',
    },
    chart: {
      background: 'rgba(15, 25, 41, 0.3)',
      gridColor: 'rgba(0, 217, 255, 0.15)',
    },
    glass: {
      blurStrength: 'blur(18px)',
      opacity: '0.85',
    },
  },
  'luxury-gold': {
    colors: {
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
    gradient: {
      primary: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
      secondary: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
      accent: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
    },
    card: {
      background: 'rgba(45, 38, 32, 0.4)',
      border: 'rgba(217, 119, 6, 0.25)',
      shadowColor: 'rgba(217, 119, 6, 0.12)',
    },
    chart: {
      background: 'rgba(45, 38, 32, 0.25)',
      gridColor: 'rgba(217, 119, 6, 0.12)',
    },
    glass: {
      blurStrength: 'blur(14px)',
      opacity: '0.75',
    },
  },
  'arctic-glass': {
    colors: {
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
    gradient: {
      primary: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
      secondary: 'linear-gradient(135deg, #60a5fa 0%, #93c5fd 100%)',
      accent: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)',
    },
    card: {
      background: 'rgba(26, 35, 50, 0.35)',
      border: 'rgba(59, 130, 246, 0.3)',
      shadowColor: 'rgba(59, 130, 246, 0.1)',
    },
    chart: {
      background: 'rgba(26, 35, 50, 0.2)',
      gridColor: 'rgba(59, 130, 246, 0.12)',
    },
    glass: {
      blurStrength: 'blur(20px)',
      opacity: '0.9',
    },
  },
  'founder-mode': {
    colors: {
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
    gradient: {
      primary: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
      secondary: 'linear-gradient(135deg, #a0a0a0 0%, #ff4444 100%)',
      accent: 'linear-gradient(135deg, #ff4444 0%, #ffffff 100%)',
    },
    card: {
      background: 'rgba(26, 26, 26, 0.4)',
      border: 'rgba(255, 255, 255, 0.2)',
      shadowColor: 'rgba(0, 0, 0, 0.3)',
    },
    chart: {
      background: 'rgba(26, 26, 26, 0.3)',
      gridColor: 'rgba(255, 255, 255, 0.1)',
    },
    glass: {
      blurStrength: 'blur(10px)',
      opacity: '0.6',
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

export const themeDescriptions: Record<Theme, string> = {
  'midnight-executive': 'Deep navy with purple & pink accents. Perfect for executive dashboards.',
  'stripe-elite': 'Vibrant cyan with electric blue. Modern & tech-forward aesthetic.',
  'linear-pro': 'Purple-dominant with amber highlights. Clean professional look.',
  'emerald-finance': 'Green-based for financial clarity. Trust & stability focused.',
  'cyber-intelligence': 'Bright cyan for cutting-edge analytics. AI-forward theme.',
  'luxury-gold': 'Warm gold tones for premium experience. Sophisticated design.',
  'arctic-glass': 'Cool blue glassmorphism. Minimalist & elegant aesthetic.',
  'founder-mode': 'Pure monochrome with red accent. No-frills execution focus.',
};
