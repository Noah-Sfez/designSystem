import React, { useState, useEffect } from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { GlassCard } from '../ui/GlassCard';

export const StatsCard = ({ 
  title, 
  value, 
  previousValue,
  icon, 
  color = 'primary',
  animated = true,
  showTrend = true,
  format = 'number',
  className = '',
  subtitle = ''
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  const colors = {
    primary: {
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      glow: '#6366f1',
      bg: 'rgba(99, 102, 241, 0.1)'
    },
    success: {
      gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      glow: '#10b981',
      bg: 'rgba(16, 185, 129, 0.1)'
    },
    warning: {
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
      glow: '#f59e0b',
      bg: 'rgba(245, 158, 11, 0.1)'
    },
    danger: {
      gradient: 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)',
      glow: '#ef4444',
      bg: 'rgba(239, 68, 68, 0.1)'
    },
    info: {
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
      glow: '#06b6d4',
      bg: 'rgba(6, 182, 212, 0.1)'
    }
  };

  const currentColor = colors[color];

  useEffect(() => {
    setIsVisible(true);
    if (animated) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setAnimatedValue(Math.min(stepValue * currentStep, value));
        
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    } else {
      setAnimatedValue(value);
    }
  }, [value, animated]);

  const formatValue = (val) => {
    if (format === 'currency') {
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
      }).format(val);
    } else if (format === 'percentage') {
      return `${val}%`;
    } else if (format === 'number') {
      return new Intl.NumberFormat('fr-FR').format(val);
    }
    return val;
  };

  const calculateTrend = () => {
    if (!previousValue || !showTrend) return null;
    
    const change = ((value - previousValue) / previousValue) * 100;
    const isPositive = change > 0;
    
    return {
      value: Math.abs(change).toFixed(1),
      isPositive,
      color: isPositive ? '#10b981' : '#ef4444'
    };
  };

  const trend = calculateTrend();

  const cardStyles = {
    padding: '24px',
    position: 'relative',
    minHeight: '160px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    background: `linear-gradient(135deg, ${currentColor.bg} 0%, rgba(255, 255, 255, 0.02) 100%)`,
    border: `1px solid ${currentColor.glow}20`,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    opacity: isVisible ? 1 : 0
  };

  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px'
  };

  const iconContainerStyles = {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    background: currentColor.gradient,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.75rem',
    color: 'white',
    boxShadow: `0 8px 24px ${currentColor.glow}40`,
    position: 'relative',
    overflow: 'hidden'
  };

  const iconGlowStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
    borderRadius: '16px'
  };

  const titleStyles = {
    fontSize: '0.875rem',
    color: 'var(--color-text)',
    opacity: 0.8,
    fontWeight: '500',
    marginBottom: '8px',
    lineHeight: '1.4'
  };

  const subtitleStyles = {
    fontSize: '0.75rem',
    color: 'var(--color-text)',
    opacity: 0.6,
    marginBottom: '16px'
  };

  const valueStyles = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: 'var(--color-text)',
    lineHeight: '1.1',
    marginBottom: '16px'
  };

  const trendStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: trend?.color,
    padding: '4px 8px',
    borderRadius: '8px',
    backgroundColor: `${trend?.color}15`,
    border: `1px solid ${trend?.color}30`,
    marginTop: 'auto'
  };

  const backgroundPatternStyles = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '120px',
    height: '120px',
    background: `radial-gradient(circle, ${currentColor.glow}08 0%, transparent 70%)`,
    borderRadius: '50%',
    transform: 'translate(30px, -30px)',
    zIndex: 0
  };

  const contentStyles = {
    position: 'relative',
    zIndex: 1,
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  };

  const handleCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = `0 12px 40px ${currentColor.glow}25`;
    e.currentTarget.style.borderColor = `${currentColor.glow}40`;
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = `${currentColor.glow}20`;
  };

  return (
    <GlassCard 
      style={cardStyles} 
      className={`stats-card ${className}`}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
      hover={false}
    >
      <div style={backgroundPatternStyles} />
      
      <div style={contentStyles}>
        <div style={headerStyles}>
          <div>
            <div style={titleStyles}>{title}</div>
            {subtitle && <div style={subtitleStyles}>{subtitle}</div>}
          </div>
          <div style={iconContainerStyles}>
            <div style={iconGlowStyles} />
            {icon}
          </div>
        </div>
        
        <div style={valueStyles}>
          {formatValue(animatedValue)}
        </div>
        
        {trend && (
          <div style={trendStyles}>
            <span style={{ transform: trend.isPositive ? 'rotate(-45deg)' : 'rotate(45deg)' }}>
              {trend.isPositive ? '↗' : '↘'}
            </span>
            <span>{trend.value}%</span>
            <span style={{ opacity: 0.8 }}>vs période précédente</span>
          </div>
        )}
      </div>
    </GlassCard>
  );
};