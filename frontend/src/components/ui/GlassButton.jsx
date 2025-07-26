import React from 'react';
import { useTheme } from '../../themes/ThemeProvider';

export const GlassButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  className = '',
  ...props 
}) => {
  const { theme } = useTheme();

  const baseStyles = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    borderRadius: 'var(--border-radius)',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface)',
    backdropFilter: `blur(var(--backdrop-blur))`,
    WebkitBackdropFilter: `blur(var(--backdrop-blur))`,
    color: 'var(--color-text)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateY(0)',
    boxShadow: `0 4px 6px -1px var(--color-shadow)`,
    overflow: 'hidden'
  };

  const sizeStyles = {
    sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
    md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    lg: { padding: '1rem 2rem', fontSize: '1.125rem' }
  };

  const variantStyles = {
    primary: {
      background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
      color: 'white',
      boxShadow: `0 4px 15px rgba(99, 102, 241, 0.3)`
    },
    secondary: {
      background: 'var(--color-surface)',
      color: 'var(--color-text)',
      border: '1px solid var(--color-border)'
    },
    accent: {
      background: `linear-gradient(135deg, var(--color-accent), var(--color-primary))`,
      color: 'white',
      boxShadow: `0 4px 15px rgba(6, 182, 212, 0.3)`
    }
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = `0 8px 25px ${variant === 'primary' ? 'rgba(99, 102, 241, 0.4)' : 'var(--color-shadow)'}`;
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = variant === 'primary' ? '0 4px 15px rgba(99, 102, 241, 0.3)' : '0 4px 6px -1px var(--color-shadow)';
  };

  const handleMouseDown = (e) => {
    e.target.style.transform = 'translateY(1px)';
  };

  const handleMouseUp = (e) => {
    e.target.style.transform = 'translateY(-2px)';
  };

  return (
    <button
      style={{
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
        opacity: disabled ? 0.6 : 1
      }}
      className={className}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {!disabled && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
            transform: 'translateX(-100%)',
            transition: 'transform 0.6s'
          }}
          className="shimmer"
        />
      )}
    </button>
  );
};