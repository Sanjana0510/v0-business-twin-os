'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useTheme } from '@/lib/theme-context';
import { themes } from '@/lib/themes';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  data: any[];
  type: 'line' | 'bar' | 'area';
  lines?: { key: string; name: string }[];
  index: number;
}

function ChartCardContent({ title, subtitle, data, type, lines, index }: ChartCardProps) {
  const { theme } = useTheme();
  const colors = themes[theme];

  // Theme colors for lines and areas
  const chartColors = [
    colors.chart.line1,
    colors.chart.line2,
    colors.chart.line3,
    colors.chart.line4,
  ];

  // Bright blue colors for bars - ensures excellent visibility on dark backgrounds
  const barColors = [
    '#3b82f6', // Bright blue
    '#0ea5e9', // Cyan blue
  ];

  const ChartComponent =
    type === 'line' ? LineChart : type === 'bar' ? BarChart : AreaChart;
  const DataComponent = type === 'line' ? Line : type === 'bar' ? Bar : Area;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group col-span-1"
    >
      {/* Background Layers for Premium Depth */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50" />

      {/* Main Card */}
      <div className="relative backdrop-blur-xl rounded-2xl border border-slate-700/80 bg-slate-900/40 p-6 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full">
        <div className="mb-7">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          {subtitle && <p className="text-sm text-slate-400 mt-2 font-medium">{subtitle}</p>}
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <ChartComponent data={data}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColors[0]} stopOpacity={0.4} />
                <stop offset="95%" stopColor={chartColors[0]} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="0"
              stroke={colors.border}
              vertical={false}
              strokeOpacity={0.1}
            />
            <XAxis
              dataKey="name"
              stroke={colors.mutedForeground}
              style={{ fontSize: '12px', fontWeight: 500 }}
              strokeOpacity={0.7}
            />
            <YAxis 
              stroke={colors.mutedForeground} 
              style={{ fontSize: '12px', fontWeight: 500 }}
              strokeOpacity={0.7}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: `${colors.card}dd`,
                border: `1px solid ${colors.border}`,
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                backdropFilter: 'blur(8px)',
              }}
              labelStyle={{ color: colors.foreground, fontWeight: 600 }}
              cursor={{ stroke: colors.primary, strokeWidth: 2, strokeOpacity: 0.3 }}
            />
            {lines && lines.length > 1 && (
              <Legend 
                wrapperStyle={{ paddingTop: '16px' }}
                iconType="line"
              />
            )}

            {lines?.map((line, i) => (
              <DataComponent
                key={line.key}
                type="monotone"
                dataKey={line.key}
                stroke={type === 'bar' ? barColors[i % barColors.length] : chartColors[i % chartColors.length]}
                fill={type === 'area' ? 'url(#colorGradient)' : (type === 'bar' ? barColors[i % barColors.length] : 'none')}
                strokeWidth={type === 'line' ? 3 : 2}
                dot={false}
                name={line.name}
                isAnimationActive={true}
              />
            ))}
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export function ChartCard(props: ChartCardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: props.index * 0.1 }}
        className="glass-card col-span-1 h-80"
      />
    );
  }

  return <ChartCardContent {...props} />;
}
