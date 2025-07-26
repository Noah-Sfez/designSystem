import React from 'react';
import { useTheme } from '../../themes/ThemeProvider';

export const LoadingSpinner = ({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}) => {
  const { theme } = useTheme();

  const sizes = {
    sm: 24,
    md: 40,
    lg: 56
  };

  const colors = {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accent: 'var(--color-accent)'
  };

  const spinnerSize = sizes[size];
  const spinnerColor = colors[color];

  return (
    <div 
      className={`loading-spinner ${className}`}
      style={{
        width: spinnerSize,
        height: spinnerSize,
        display: 'inline-block',
        position: 'relative'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: `conic-gradient(from 0deg, transparent, ${spinnerColor})`,
          animation: 'spin 1s linear infinite',
          maskImage: 'radial-gradient(circle, transparent 35%, black 35%)',
          WebkitMaskImage: 'radial-gradient(circle, transparent 35%, black 35%)'
        }}
      />
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export const PulseLoader = ({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}) => {
  const sizes = {
    sm: 8,
    md: 12,
    lg: 16
  };

  const colors = {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accent: 'var(--color-accent)'
  };

  const dotSize = sizes[size];
  const dotColor = colors[color];

  return (
    <div className={`pulse-loader ${className}`} style={{ display: 'flex', gap: '4px' }}>
      {[0, 1, 2].map(i => (
        <div
          key={i}
          style={{
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            backgroundColor: dotColor,
            animation: `pulse 1.4s ease-in-out ${i * 0.16}s infinite both`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes pulse {
          0%, 80%, 100% { 
            transform: scale(0);
            opacity: 0.5;
          }
          40% { 
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export const WaveLoader = ({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}) => {
  const sizes = {
    sm: 4,
    md: 6,
    lg: 8
  };

  const colors = {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accent: 'var(--color-accent)'
  };

  const barWidth = sizes[size];
  const barColor = colors[color];

  return (
    <div className={`wave-loader ${className}`} style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
      {[0, 1, 2, 3, 4].map(i => (
        <div
          key={i}
          style={{
            width: barWidth,
            height: barWidth * 3,
            backgroundColor: barColor,
            borderRadius: '2px',
            animation: `wave 1.2s ease-in-out ${i * 0.1}s infinite`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes wave {
          0%, 40%, 100% { 
            transform: scaleY(0.4);
            opacity: 0.5;
          }
          20% { 
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};