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

  const chartColors = [
    colors.chart.line1,
    colors.chart.line2,
    colors.chart.line3,
    colors.chart.line4,
  ];

  const ChartComponent =
    type === 'line' ? LineChart : type === 'bar' ? BarChart : AreaChart;
  const DataComponent = type === 'line' ? Line : type === 'bar' ? Bar : Area;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-card col-span-1"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <ChartComponent data={data}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={chartColors[0]} stopOpacity={0.3} />
              <stop offset="95%" stopColor={chartColors[0]} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={colors.border}
            vertical={false}
          />
          <XAxis
            dataKey="name"
            stroke={colors.mutedForeground}
            style={{ fontSize: '12px' }}
          />
          <YAxis stroke={colors.mutedForeground} style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: colors.card,
              border: `1px solid ${colors.border}`,
              borderRadius: '8px',
            }}
            labelStyle={{ color: colors.foreground }}
          />
          {lines && lines.length > 1 && <Legend />}

          {lines?.map((line, i) => (
            <DataComponent
              key={line.key}
              type="monotone"
              dataKey={line.key}
              stroke={chartColors[i % chartColors.length]}
              fill={type === 'area' ? 'url(#colorGradient)' : 'none'}
              strokeWidth={2}
              dot={false}
              name={line.name}
            />
          ))}
        </ChartComponent>
      </ResponsiveContainer>
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
