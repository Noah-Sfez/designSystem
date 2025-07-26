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
    sm: 150,
    md: 200,
    lg: 250
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
      const duration = 2000;
      const steps = 60;
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

  const speedometerStyles = {
    width: speedometerSize,
    height: speedometerSize / 2 + 40,
    position: 'relative',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const arcStyles = {
    width: speedometerSize,
    height: speedometerSize / 2,
    border: `8px solid var(--color-border)`,
    borderBottom: 'none',
    borderRadius: `${speedometerSize / 2}px ${speedometerSize / 2}px 0 0`,
    position: 'relative',
    overflow: 'hidden'
  };

  const progressArcStyles = {
    width: speedometerSize - 16,
    height: speedometerSize / 2 - 8,
    border: `8px solid ${speedometerColor}`,
    borderBottom: 'none',
    borderRadius: `${(speedometerSize - 16) / 2}px ${(speedometerSize - 16) / 2}px 0 0`,
    position: 'absolute',
    top: '0',
    left: '0',
    clipPath: `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`,
    transition: animated ? 'clip-path 0.3s ease' : 'none'
  };

  const needleStyles = {
    width: '4px',
    height: speedometerSize / 2 - 20,
    backgroundColor: speedometerColor,
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transformOrigin: 'bottom center',
    transform: `translateX(-50%) rotate(${angle}deg)`,
    transition: animated ? 'transform 0.3s ease' : 'none',
    borderRadius: '2px',
    boxShadow: `0 0 10px ${speedometerColor}50`
  };

  const centerDotStyles = {
    width: '20px',
    height: '20px',
    backgroundColor: speedometerColor,
    borderRadius: '50%',
    position: 'absolute',
    bottom: '5px',
    left: '50%',
    transform: 'translateX(-50%)',
    boxShadow: `0 0 15px ${speedometerColor}40`
  };

  const labelStyles = {
    marginTop: '1rem',
    textAlign: 'center'
  };

  const titleStyles = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'var(--color-text)',
    marginBottom: '0.5rem'
  };

  const valueStyles = {
    fontSize: '2rem',
    fontWeight: '700',
    color: speedometerColor,
    marginBottom: '0.25rem'
  };

  const unitStyles = {
    fontSize: '0.875rem',
    color: 'var(--color-textMuted)'
  };

  const scaleStyles = {
    position: 'absolute',
    bottom: '10px',
    left: '0',
    right: '0',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px',
    fontSize: '0.75rem',
    color: 'var(--color-textMuted)'
  };

  return (
    <GlassCard className={`speedometer ${className}`}>
      <div style={speedometerStyles}>
        <div style={arcStyles}>
          <div style={progressArcStyles} />
          <div style={needleStyles} />
          <div style={centerDotStyles} />
          <div style={scaleStyles}>
            <span>{min}</span>
            <span>{Math.round((min + max) / 2)}</span>
            <span>{max}</span>
          </div>
        </div>
        <div style={labelStyles}>
          <div style={titleStyles}>{title}</div>
          <div style={valueStyles}>
            {Math.round(animatedValue)}
            <span style={unitStyles}>{unit}</span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};