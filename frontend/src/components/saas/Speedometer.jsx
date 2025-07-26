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
    sm: 140,
    md: 180,
    lg: 220
  };

  const colors = {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
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
        setAnimatedValue(Math.min(stepValue * currentStep, value));
        
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
  const angle = (percentage / 100) * 270 - 135; // 270 degrees total range

  const containerStyles = {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '240px',
    background: `radial-gradient(circle at center, rgba(${speedometerColor.replace('#', '').match(/.{2}/g).map(hex => parseInt(hex, 16)).join(', ')}, 0.05) 0%, transparent 70%)`
  };

  const speedometerStyles = {
    width: speedometerSize,
    height: speedometerSize,
    position: 'relative',
    marginBottom: '24px'
  };

  const svgStyles = {
    width: '100%',
    height: '100%',
    transform: 'rotate(-135deg)'
  };

  const radius = speedometerSize / 2 - 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = (270 / 360) * circumference;
  const strokeDashoffset = strokeDasharray - (percentage / 100) * strokeDasharray;

  const trackStyle = {
    fill: 'none',
    stroke: 'rgba(255, 255, 255, 0.1)',
    strokeWidth: 8,
    strokeLinecap: 'round'
  };

  const progressStyle = {
    fill: 'none',
    stroke: speedometerColor,
    strokeWidth: 8,
    strokeLinecap: 'round',
    strokeDasharray: strokeDasharray,
    strokeDashoffset: strokeDashoffset,
    transition: animated ? 'stroke-dashoffset 2s ease-out' : 'none',
    filter: `drop-shadow(0 0 8px ${speedometerColor}40)`
  };

  const needleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '4px',
    height: `${radius - 10}px`,
    background: `linear-gradient(to top, ${speedometerColor}, rgba(255, 255, 255, 0.8))`,
    transformOrigin: 'bottom center',
    transform: `translate(-50%, -100%) rotate(${angle}deg)`,
    transition: animated ? 'transform 2s ease-out' : 'none',
    borderRadius: '2px',
    boxShadow: `0 0 10px ${speedometerColor}60`
  };

  const centerDotStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '16px',
    height: '16px',
    background: `radial-gradient(circle, ${speedometerColor}, rgba(255, 255, 255, 0.3))`,
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    boxShadow: `0 0 15px ${speedometerColor}50`
  };

  const labelStyles = {
    textAlign: 'center',
    width: '100%'
  };

  const titleStyles = {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--color-text)',
    marginBottom: '8px',
    opacity: 0.9
  };

  const valueContainerStyles = {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    gap: '2px',
    marginBottom: '12px'
  };

  const valueStyles = {
    fontSize: '2rem',
    fontWeight: '700',
    color: speedometerColor,
    textShadow: `0 0 20px ${speedometerColor}30`
  };

  const unitStyles = {
    fontSize: '0.875rem',
    color: 'var(--color-text)',
    opacity: 0.7,
    fontWeight: '500'
  };

  const rangeStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    fontSize: '0.75rem',
    color: 'var(--color-text)',
    opacity: 0.5
  };

  const getPerformanceColor = (percentage) => {
    if (percentage >= 80) return '#10b981';
    if (percentage >= 60) return '#f59e0b';
    return '#ef4444';
  };

  const performanceColor = getPerformanceColor(percentage);

  return (
    <GlassCard style={containerStyles} className={`speedometer ${className}`}>
      <div style={speedometerStyles}>
        <svg style={svgStyles}>
          {/* Track */}
          <circle
            cx={speedometerSize / 2}
            cy={speedometerSize / 2}
            r={radius}
            style={trackStyle}
          />
          
          {/* Progress */}
          <circle
            cx={speedometerSize / 2}
            cy={speedometerSize / 2}
            r={radius}
            style={progressStyle}
          />
        </svg>
        
        {/* Needle */}
        <div style={needleStyle} />
        
        {/* Center dot */}
        <div style={centerDotStyle} />
        
        {/* Scale markers */}
        {Array.from({ length: 6 }, (_, i) => {
          const markerAngle = -135 + (i * 54); // 270 degrees / 5 intervals
          const markerRadius = radius + 8;
          const x = speedometerSize / 2 + markerRadius * Math.cos(markerAngle * Math.PI / 180);
          const y = speedometerSize / 2 + markerRadius * Math.sin(markerAngle * Math.PI / 180);
          
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: x - 1,
                top: y - 1,
                width: '2px',
                height: '8px',
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '1px',
                transform: `rotate(${markerAngle + 90}deg)`,
                transformOrigin: 'center'
              }}
            />
          );
        })}
      </div>
      
      <div style={labelStyles}>
        <div style={titleStyles}>{title}</div>
        <div style={valueContainerStyles}>
          <span style={valueStyles}>{Math.round(animatedValue)}</span>
          <span style={unitStyles}>{unit}</span>
        </div>
        <div style={rangeStyles}>
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    </GlassCard>
  );
};