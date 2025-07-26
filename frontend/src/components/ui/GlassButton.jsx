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
    borderRadius: '12px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateY(0)',
    outline: 'none',
    fontFamily: 'inherit',
    textDecoration: 'none',
    userSelect: 'none',
    opacity: disabled ? 0.5 : 1
  };

  const sizeStyles = {
    sm: { 
      padding: '8px 16px', 
      fontSize: '0.875rem',
      minHeight: '36px'
    },
    md: { 
      padding: '12px 24px', 
      fontSize: '0.9375rem',
      minHeight: '44px'
    },
    lg: { 
      padding: '16px 32px', 
      fontSize: '1rem',
      minHeight: '52px'
    }
  };

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      color: 'white',
      boxShadow: '0 2px 8px rgba(99, 102, 241, 0.2)',
      ':hover': {
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 16px rgba(99, 102, 241, 0.3)'
      }
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.05)',
      color: 'var(--color-text)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      ':hover': {
        background: 'rgba(255, 255, 255, 0.08)',
        transform: 'translateY(-1px)'
      }
    },
    accent: {
      background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      color: 'white',
      boxShadow: '0 2px 8px rgba(6, 182, 212, 0.2)',
      ':hover': {
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 16px rgba(6, 182, 212, 0.3)'
      }
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-text)',
      ':hover': {
        background: 'rgba(255, 255, 255, 0.05)'
      }
    }
  };

  const handleMouseEnter = (e) => {
    if (disabled) return;
    const variant = variantStyles[variant];
    if (variant[':hover']) {
      Object.assign(e.target.style, variant[':hover']);
    }
  };

  const handleMouseLeave = (e) => {
    if (disabled) return;
    e.target.style.transform = 'translateY(0)';
    
    if (variant === 'primary') {
      e.target.style.boxShadow = '0 2px 8px rgba(99, 102, 241, 0.2)';
    } else if (variant === 'accent') {
      e.target.style.boxShadow = '0 2px 8px rgba(6, 182, 212, 0.2)';
    } else if (variant === 'secondary') {
      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
    } else if (variant === 'ghost') {
      e.target.style.background = 'transparent';
    }
  };

  return (
    <button
      style={{
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant]
      }}
      className={className}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};