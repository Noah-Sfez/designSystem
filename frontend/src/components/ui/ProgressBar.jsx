import React, { useState, useEffect } from 'react';
import { useTheme } from '../../themes/ThemeProvider';

export const ProgressBar = ({ 
  value = 0, 
  max = 100, 
  size = 'md',
  color = 'primary',
  showPercentage = true,
  animated = true,
  striped = false,
  className = '',
  label = '',
  glowing = false
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const { theme } = useTheme();

  const colors = {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444'
  };

  const sizes = {
    sm: { height: '6px', fontSize: '0.75rem' },
    md: { height: '8px', fontSize: '0.875rem' },
    lg: { height: '12px', fontSize: '1rem' },
    xl: { height: '16px', fontSize: '1.125rem' }
  };

  const selectedColor = colors[color];
  const selectedSize = sizes[size];

  useEffect(() => {
    if (animated) {
      const duration = 1000;
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

  const percentage = Math.min(Math.max((animatedValue / max) * 100, 0), 100);

  const containerStyles = {
    width: '100%',
    marginBottom: label || showPercentage ? '8px' : 0
  };

  const labelContainerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '6px',
    fontSize: selectedSize.fontSize,
    color: 'var(--color-text)'
  };

  const trackStyles = {
    width: '100%',
    height: selectedSize.height,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: selectedSize.height,
    overflow: 'hidden',
    position: 'relative',
    boxShadow: glowing ? `0 0 20px ${selectedColor}30` : 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const fillStyles = {
    height: '100%',
    width: `${percentage}%`,
    background: striped 
      ? `linear-gradient(45deg, ${selectedColor} 25%, transparent 25%, transparent 50%, ${selectedColor} 50%, ${selectedColor} 75%, transparent 75%, transparent)`
      : `linear-gradient(90deg, ${selectedColor}, ${selectedColor}dd)`,
    backgroundSize: striped ? `${selectedSize.height} ${selectedSize.height}` : 'auto',
    borderRadius: selectedSize.height,
    transition: animated ? 'width 0.3s ease-out' : 'none',
    position: 'relative',
    boxShadow: glowing ? `0 0 15px ${selectedColor}60` : 'none',
    animation: striped ? 'progress-stripes 1s linear infinite' : 'none'
  };

  const glowStyles = glowing ? {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(90deg, transparent, ${selectedColor}40, transparent)`,
    animation: 'progress-glow 2s ease-in-out infinite'
  } : {};

  return (
    <div style={containerStyles} className={`progress-bar ${className}`}>
      {(label || showPercentage) && (
        <div style={labelContainerStyles}>
          <span>{label}</span>
          {showPercentage && (
            <span style={{ 
              fontWeight: '600', 
              color: selectedColor,
              textShadow: `0 0 10px ${selectedColor}60`
            }}>
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      
      <div style={trackStyles}>
        <div style={fillStyles}>
          {glowing && <div style={glowStyles} />}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress-stripes {
          0% { background-position: 0 0; }
          100% { background-position: ${selectedSize.height} 0; }
        }
        
        @keyframes progress-glow {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};