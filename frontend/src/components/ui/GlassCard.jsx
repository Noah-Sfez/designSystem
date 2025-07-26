import React from 'react';
import { useTheme } from '../../themes/ThemeProvider';

export const GlassCard = ({ 
  children, 
  className = '',
  hover = true,
  padding = 'md',
  ...props 
}) => {
  const { theme } = useTheme();

  const paddingStyles = {
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem'
  };

  const baseStyles = {
    backgroundColor: 'var(--color-surface)',
    backdropFilter: `blur(var(--backdrop-blur))`,
    WebkitBackdropFilter: `blur(var(--backdrop-blur))`,
    borderRadius: 'var(--border-radius)',
    border: '1px solid var(--color-border)',
    padding: paddingStyles[padding],
    boxShadow: '0 8px 32px var(--color-shadow)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden'
  };

  const hoverStyles = hover ? {
    ':hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 40px var(--color-shadow)'
    }
  } : {};

  const handleMouseEnter = (e) => {
    if (hover) {
      e.target.style.transform = 'translateY(-4px)';
      e.target.style.boxShadow = '0 12px 40px var(--color-shadow)';
    }
  };

  const handleMouseLeave = (e) => {
    if (hover) {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 8px 32px var(--color-shadow)';
    }
  };

  return (
    <div
      style={baseStyles}
      className={`glass-card ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
};