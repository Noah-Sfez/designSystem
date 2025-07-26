import React, { useEffect, useState } from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { GlassCard } from '../ui/GlassCard';

export const Speedometer = ({ 
  value = 0, 
  min = 0, 
  max = 100, 
  title = 'Indicateur',
  unit = '%',
  color = 'primary',
  size = 'md',
  animated = true,
  className = '' 
}) => {
  const { theme } = useTheme();
  const [animatedValue, setAnimatedValue] = useState(0);

  const sizes = {
    sm: 120,
    md: 160,
    lg: 200
  };

  const colors = {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accent: 'var(--color-accent)',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444'
  };

  const speedometerSize = sizes[size];
  const speedometerColor = colors[color];

  useEffect(() => {
    if (animated) {
      const duration = 1500;
      const steps = 30;
      const stepValue = value / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setAnimatedValue(stepValue * currentStep);
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedValue(value);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    } else {
      setAnimatedValue(value);
    }
  }, [value, animated]);

  const percentage = Math.min(Math.max((animatedValue - min) / (max - min) * 100, 0), 100);
  const angle = (percentage / 100) * 180 - 90;

  const containerStyles = {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '220px'
  };

  const speedometerStyles = {
    width: speedometerSize,
    height: speedometerSize / 2 + 20,
    position: 'relative',
    marginBottom: '20px'
  };

  const trackStyles = {
    width: speedometerSize,
    height: speedometerSize / 2,
    border: '4px solid rgba(255, 255, 255, 0.1)',
    borderBottom: 'none',
    borderRadius: `${speedometerSize / 2}px ${speedometerSize / 2}px 0 0`,
    position: 'relative',
    overflow: 'hidden'
  };

  const fillStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: speedometerSize - 8,
    height: speedometerSize / 2 - 4,
    background: `conic-gradient(from -90deg, ${speedometerColor} 0deg, ${speedometerColor} ${percentage * 1.8}deg, transparent ${percentage * 1.8}deg)`,
    borderRadius: `${(speedometerSize - 8) / 2}px ${(speedometerSize - 8) / 2}px 0 0`,
    mask: `radial-gradient(circle at 50% 100%, transparent 30%, black 32%)`,
    WebkitMask: `radial-gradient(circle at 50% 100%, transparent 30%, black 32%)`
  };

  const needleStyles = {
    width: '3px',
    height: speedometerSize / 2 - 15,
    backgroundColor: 'var(--color-text)',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transformOrigin: 'bottom center',
    transform: `translateX(-50%) rotate(${angle}deg)`,
    transition: animated ? 'transform 0.5s ease-out' : 'none',
    borderRadius: '2px',
    zIndex: 2
  };

  const centerDotStyles = {
    width: '12px',
    height: '12px',
    backgroundColor: 'var(--color-text)',
    borderRadius: '50%',
    position: 'absolute',
    bottom: '-6px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 3
  };

  const labelStyles = {
    textAlign: 'center',
    width: '100%'
  };

  const titleStyles = {
    fontSize: '1rem',
    fontWeight: '500',
    color: 'var(--color-text)',
    marginBottom: '8px',
    opacity: 0.8
  };

  const valueStyles = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--color-text)',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    gap: '2px'
  };

  const unitStyles = {
    fontSize: '0.875rem',
    color: 'var(--color-text)',
    opacity: 0.6,
    fontWeight: '500'
  };

  const rangeStyles = {
    position: 'absolute',
    bottom: '-10px',
    left: '0',
    right: '0',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: 'var(--color-text)',
    opacity: 0.5,
    padding: '0 8px'
  };

  return (
    <GlassCard style={containerStyles} className={`speedometer ${className}`}>
      <div style={speedometerStyles}>
        <div style={trackStyles}>
          <div style={fillStyles} />
          <div style={needleStyles} />
          <div style={centerDotStyles} />
          <div style={rangeStyles}>
            <span>{min}</span>
            <span>{max}</span>
          </div>
        </div>
      </div>
      <div style={labelStyles}>
        <div style={titleStyles}>{title}</div>
        <div style={valueStyles}>
          {Math.round(animatedValue)}
          <span style={unitStyles}>{unit}</span>
        </div>
      </div>
    </GlassCard>
  );
};