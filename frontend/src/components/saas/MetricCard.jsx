import React from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { GlassCard } from '../ui/GlassCard';

export const MetricCard = ({ 
  title, 
  value, 
  change, 
  icon, 
  trend = 'up',
  className = '' 
}) => {
  const { theme } = useTheme();

  const cardStyles = {
    padding: '24px',
    position: 'relative',
    minHeight: '140px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px'
  };

  const iconStyles = {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    color: 'var(--color-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    border: '1px solid rgba(99, 102, 241, 0.2)'
  };

  const titleStyles = {
    fontSize: '0.875rem',
    color: 'var(--color-text)',
    opacity: 0.8,
    fontWeight: '500',
    marginBottom: '8px'
  };

  const valueStyles = {
    fontSize: '1.875rem',
    fontWeight: '700',
    color: 'var(--color-text)',
    lineHeight: '1.2',
    marginBottom: '12px'
  };

  const changeStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '0.8125rem',
    fontWeight: '500',
    color: trend === 'up' ? '#10b981' : '#ef4444'
  };

  const trendIconStyles = {
    fontSize: '0.75rem',
    fontWeight: 'bold'
  };

  return (
    <GlassCard style={cardStyles} className={className}>
      <div>
        <div style={headerStyles}>
          <div style={titleStyles}>{title}</div>
          <div style={iconStyles}>{icon}</div>
        </div>
        <div style={valueStyles}>{value}</div>
      </div>
      <div style={changeStyles}>
        <span style={trendIconStyles}>
          {trend === 'up' ? '↗' : '↘'}
        </span>
        <span>{change}</span>
      </div>
    </GlassCard>
  );
};