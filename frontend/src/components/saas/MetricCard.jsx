import React from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { GlassCard } from '../ui/GlassCard';

export const MetricCard = ({ 
  title, 
  value, 
  change, 
  icon, 
  trend = 'up',
  className = '',
  sparklineData = [],
  category = 'default'
}) => {
  const { theme } = useTheme();

  const categories = {
    default: {
      iconBg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
      iconBorder: 'rgba(99, 102, 241, 0.2)',
      iconColor: 'var(--color-primary)',
      accent: 'var(--color-primary)'
    },
    success: {
      iconBg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)',
      iconBorder: 'rgba(16, 185, 129, 0.3)',
      iconColor: '#10b981',
      accent: '#10b981'
    },
    warning: {
      iconBg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%)',
      iconBorder: 'rgba(245, 158, 11, 0.3)',
      iconColor: '#f59e0b',
      accent: '#f59e0b'
    },
    danger: {
      iconBg: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(248, 113, 113, 0.1) 100%)',
      iconBorder: 'rgba(239, 68, 68, 0.3)',
      iconColor: '#ef4444',
      accent: '#ef4444'
    }
  };

  const currentCategory = categories[category];

  const cardStyles = {
    padding: '24px',
    position: 'relative',
    minHeight: '160px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const headerStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '16px'
  };

  const iconContainerStyles = {
    width: '48px',
    height: '48px',
    borderRadius: '14px',
    background: currentCategory.iconBg,
    border: `1px solid ${currentCategory.iconBorder}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    color: currentCategory.iconColor,
    position: 'relative',
    boxShadow: `0 8px 16px ${currentCategory.accent}20`
  };

  const titleStyles = {
    fontSize: '0.875rem',
    color: 'var(--color-text)',
    opacity: 0.8,
    fontWeight: '500',
    marginBottom: '12px',
    lineHeight: '1.2'
  };

  const valueStyles = {
    fontSize: '2.25rem',
    fontWeight: '700',
    color: 'var(--color-text)',
    lineHeight: '1.1',
    marginBottom: '16px'
  };

  const changeContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const changeStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: trend === 'up' ? '#10b981' : '#ef4444',
    padding: '4px 8px',
    borderRadius: '8px',
    backgroundColor: trend === 'up' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
    border: `1px solid ${trend === 'up' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`
  };

  const sparklineStyles = {
    flex: 1,
    height: '20px',
    marginLeft: '12px'
  };

  const backgroundPatternStyles = {
    position: 'absolute',
    top: '-50%',
    right: '-50%',
    width: '100%',
    height: '100%',
    background: `radial-gradient(circle, ${currentCategory.accent}08 0%, transparent 70%)`,
    borderRadius: '50%',
    zIndex: 0
  };

  const contentStyles = {
    position: 'relative',
    zIndex: 1
  };

  const trendIconStyles = {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    transform: trend === 'up' ? 'rotate(-45deg)' : 'rotate(45deg)',
    transition: 'transform 0.2s ease'
  };

  // Simple sparkline component
  const Sparkline = ({ data }) => {
    if (!data || data.length === 0) return null;

    const width = 60;
    const height = 20;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;

    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg width={width} height={height} style={{ display: 'block' }}>
        <polyline
          points={points}
          fill="none"
          stroke={currentCategory.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
      </svg>
    );
  };

  const handleCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = `0 12px 40px ${currentCategory.accent}20`;
    e.currentTarget.style.border = `1px solid ${currentCategory.accent}40`;
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
  };

  return (
    <GlassCard 
      style={cardStyles} 
      className={`metric-card ${className}`}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
      hover={false}
    >
      <div style={backgroundPatternStyles} />
      
      <div style={contentStyles}>
        <div style={headerStyles}>
          <div style={titleStyles}>{title}</div>
          <div style={iconContainerStyles}>
            {icon}
            <div style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: currentCategory.accent,
              boxShadow: `0 0 10px ${currentCategory.accent}60`,
              animation: 'pulse 2s infinite'
            }} />
          </div>
        </div>
        
        <div style={valueStyles}>{value}</div>
        
        <div style={changeContainerStyles}>
          <div style={changeStyles}>
            <span style={trendIconStyles}>
              {trend === 'up' ? '↗' : '↘'}
            </span>
            <span>{change}</span>
          </div>
          
          <div style={sparklineStyles}>
            <Sparkline data={sparklineData} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}</style>
    </GlassCard>
  );
};