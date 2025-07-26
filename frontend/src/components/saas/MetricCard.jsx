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
    padding: '1.5rem',
    position: 'relative',
    overflow: 'hidden'
  };

  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  };

  const iconStyles = {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
  };

  const titleStyles = {
    fontSize: '0.875rem',
    color: 'var(--color-textMuted)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '0.5rem'
  };

  const valueStyles = {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '0.5rem'
  };

  const changeStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    fontSize: '0.875rem',
    color: trend === 'up' ? '#10b981' : '#ef4444'
  };

  const backgroundPattern = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100px',
    height: '100px',
    opacity: 0.1,
    background: `linear-gradient(45deg, var(--color-primary), var(--color-secondary))`,
    borderRadius: '50%',
    transform: 'translate(30px, -30px)'
  };

  return (
    <GlassCard style={cardStyles} className={className}>
      <div style={backgroundPattern} />
      <div style={headerStyles}>
        <div style={titleStyles}>{title}</div>
        <div style={iconStyles}>{icon}</div>
      </div>
      <div style={valueStyles}>{value}</div>
      <div style={changeStyles}>
        <span>{trend === 'up' ? '↗' : '↘'}</span>
        <span>{change}</span>
      </div>
    </GlassCard>
  );
};