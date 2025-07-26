import React from 'react';
import { useTheme } from '../../themes/ThemeProvider';

export const LineChart = ({ data, title, height = 300 }) => {
  const { theme } = useTheme();

  // Sample data points for the chart
  const dataPoints = data || [
    { x: 0, y: 20 },
    { x: 1, y: 45 },
    { x: 2, y: 30 },
    { x: 3, y: 70 },
    { x: 4, y: 60 },
    { x: 5, y: 85 },
    { x: 6, y: 75 },
    { x: 7, y: 95 },
    { x: 8, y: 80 },
    { x: 9, y: 120 },
    { x: 10, y: 110 },
    { x: 11, y: 140 }
  ];

  const width = 600;
  const padding = 40;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;

  // Calculate scales
  const maxY = Math.max(...dataPoints.map(d => d.y));
  const minY = Math.min(...dataPoints.map(d => d.y));
  const maxX = Math.max(...dataPoints.map(d => d.x));

  const scaleX = (x) => (x / maxX) * chartWidth + padding;
  const scaleY = (y) => height - padding - ((y - minY) / (maxY - minY)) * chartHeight;

  // Create path string for the line
  const pathData = dataPoints.map((point, index) => {
    const x = scaleX(point.x);
    const y = scaleY(point.y);
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  // Create area path for gradient fill
  const areaPath = pathData + 
    ` L ${scaleX(maxX)} ${height - padding}` +
    ` L ${scaleX(0)} ${height - padding}` +
    ' Z';

  const chartStyles = {
    width: '100%',
    height: height,
    backgroundColor: 'transparent',
    borderRadius: '12px',
    overflow: 'hidden'
  };

  const gridLineStyle = {
    stroke: 'rgba(255, 255, 255, 0.1)',
    strokeWidth: 1
  };

  const axisStyle = {
    stroke: 'rgba(255, 255, 255, 0.2)',
    strokeWidth: 1
  };

  const lineStyle = {
    stroke: 'var(--color-primary)',
    strokeWidth: 2,
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };

  const areaStyle = {
    fill: 'url(#gradient)',
    opacity: 0.3
  };

  const pointStyle = {
    fill: 'var(--color-primary)',
    stroke: 'var(--color-background)',
    strokeWidth: 2,
    r: 4
  };

  return (
    <div style={chartStyles}>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0 }} />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {Array.from({ length: 6 }, (_, i) => {
          const y = padding + (i * chartHeight / 5);
          return (
            <line
              key={`grid-${i}`}
              x1={padding}
              y1={y}
              x2={width - padding}
              y2={y}
              style={gridLineStyle}
            />
          );
        })}

        {/* Axes */}
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          style={axisStyle}
        />
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          style={axisStyle}
        />

        {/* Area fill */}
        <path d={areaPath} style={areaStyle} />

        {/* Line */}
        <path d={pathData} style={lineStyle} />

        {/* Data points */}
        {dataPoints.map((point, index) => (
          <circle
            key={index}
            cx={scaleX(point.x)}
            cy={scaleY(point.y)}
            style={pointStyle}
          />
        ))}

        {/* Y-axis labels */}
        {Array.from({ length: 6 }, (_, i) => {
          const value = Math.round(minY + (i * (maxY - minY) / 5));
          const y = height - padding - (i * chartHeight / 5);
          return (
            <text
              key={`y-label-${i}`}
              x={padding - 10}
              y={y + 4}
              textAnchor="end"
              fontSize="12"
              fill="rgba(255, 255, 255, 0.6)"
            >
              {value}
            </text>
          );
        })}

        {/* X-axis labels */}
        {dataPoints.filter((_, i) => i % 2 === 0).map((point, index) => (
          <text
            key={`x-label-${index}`}
            x={scaleX(point.x)}
            y={height - padding + 20}
            textAnchor="middle"
            fontSize="12"
            fill="rgba(255, 255, 255, 0.6)"
          >
            {point.x}
          </text>
        ))}
      </svg>
    </div>
  );
};

export const BarChart = ({ data, title, height = 300 }) => {
  const { theme } = useTheme();

  const dataPoints = data || [
    { label: 'Jan', value: 65 },
    { label: 'Fév', value: 80 },
    { label: 'Mar', value: 75 },
    { label: 'Avr', value: 90 },
    { label: 'Mai', value: 110 },
    { label: 'Jun', value: 95 }
  ];

  const width = 600;
  const padding = 40;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;

  const maxValue = Math.max(...dataPoints.map(d => d.value));
  const barWidth = chartWidth / dataPoints.length * 0.8;
  const barSpacing = chartWidth / dataPoints.length * 0.2;

  const chartStyles = {
    width: '100%',
    height: height,
    backgroundColor: 'transparent',
    borderRadius: '12px',
    overflow: 'hidden'
  };

  return (
    <div style={chartStyles}>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'var(--color-secondary)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {Array.from({ length: 6 }, (_, i) => {
          const y = padding + (i * chartHeight / 5);
          return (
            <line
              key={`grid-${i}`}
              x1={padding}
              y1={y}
              x2={width - padding}
              y2={y}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* Bars */}
        {dataPoints.map((point, index) => {
          const barHeight = (point.value / maxValue) * chartHeight;
          const x = padding + (index * chartWidth / dataPoints.length) + barSpacing / 2;
          const y = height - padding - barHeight;

          return (
            <g key={index}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill="url(#barGradient)"
                rx="4"
                ry="4"
                opacity="0.8"
              />
              <text
                x={x + barWidth / 2}
                y={height - padding + 20}
                textAnchor="middle"
                fontSize="12"
                fill="rgba(255, 255, 255, 0.6)"
              >
                {point.label}
              </text>
              <text
                x={x + barWidth / 2}
                y={y - 8}
                textAnchor="middle"
                fontSize="12"
                fill="var(--color-text)"
                fontWeight="500"
              >
                {point.value}
              </text>
            </g>
          );
        })}

        {/* Y-axis labels */}
        {Array.from({ length: 6 }, (_, i) => {
          const value = Math.round((i * maxValue / 5));
          const y = height - padding - (i * chartHeight / 5);
          return (
            <text
              key={`y-label-${i}`}
              x={padding - 10}
              y={y + 4}
              textAnchor="end"
              fontSize="12"
              fill="rgba(255, 255, 255, 0.6)"
            >
              {value}
            </text>
          );
        })}
      </svg>
    </div>
  );
};