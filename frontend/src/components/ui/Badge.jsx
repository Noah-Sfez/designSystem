import React from 'react';
import { useTheme } from '../../themes/ThemeProvider';

export const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  dot = false,
  removable = false,
  onRemove,
  className = '',
  icon,
  pulse = false,
  outline = false
}) => {
  const { theme } = useTheme();

  const variants = {
    default: {
      bg: 'rgba(99, 102, 241, 0.1)',
      color: '#6366f1',
      border: 'rgba(99, 102, 241, 0.2)'
    },
    success: {
      bg: 'rgba(16, 185, 129, 0.1)',
      color: '#10b981',
      border: 'rgba(16, 185, 129, 0.2)'
    },
    warning: {
      bg: 'rgba(245, 158, 11, 0.1)',
      color: '#f59e0b',
      border: 'rgba(245, 158, 11, 0.2)'
    },
    danger: {
      bg: 'rgba(239, 68, 68, 0.1)',
      color: '#ef4444',
      border: 'rgba(239, 68, 68, 0.2)'
    },
    info: {
      bg: 'rgba(6, 182, 212, 0.1)',
      color: '#06b6d4',
      border: 'rgba(6, 182, 212, 0.2)'
    },
    secondary: {
      bg: 'rgba(139, 92, 246, 0.1)',
      color: '#8b5cf6',
      border: 'rgba(139, 92, 246, 0.2)'
    }
  };

  const sizes = {
    sm: { padding: '2px 6px', fontSize: '0.75rem', height: '20px' },
    md: { padding: '4px 8px', fontSize: '0.8125rem', height: '24px' },
    lg: { padding: '6px 12px', fontSize: '0.875rem', height: '32px' }
  };

  const currentVariant = variants[variant];
  const currentSize = sizes[size];

  const badgeStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: currentSize.padding,
    fontSize: currentSize.fontSize,
    fontWeight: '500',
    height: currentSize.height,
    borderRadius: '12px',
    backgroundColor: outline ? 'transparent' : currentVariant.bg,
    color: currentVariant.color,
    border: `1px solid ${currentVariant.border}`,
    transition: 'all 0.2s ease',
    cursor: removable ? 'pointer' : 'default',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)'
  };

  const dotStyles = {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: currentVariant.color,
    boxShadow: `0 0 6px ${currentVariant.color}60`,
    animation: pulse ? 'pulse 2s infinite' : 'none'
  };

  const removeButtonStyles = {
    marginLeft: '4px',
    padding: '2px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    color: currentVariant.color,
    fontSize: '12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '16px',
    height: '16px',
    transition: 'all 0.2s ease'
  };

  const handleRemoveHover = (e) => {
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    e.target.style.transform = 'scale(1.1)';
  };

  const handleRemoveLeave = (e) => {
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    e.target.style.transform = 'scale(1)';
  };

  const handleBadgeHover = (e) => {
    if (removable) {
      e.currentTarget.style.transform = 'scale(1.05)';
      e.currentTarget.style.boxShadow = `0 4px 12px ${currentVariant.color}30`;
    }
  };

  const handleBadgeLeave = (e) => {
    if (removable) {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = 'none';
    }
  };

  return (
    <span
      style={badgeStyles}
      className={`badge ${className}`}
      onMouseEnter={handleBadgeHover}
      onMouseLeave={handleBadgeLeave}
    >
      {dot && <div style={dotStyles} />}
      {icon && <span style={{ fontSize: '1em' }}>{icon}</span>}
      <span>{children}</span>
      {removable && (
        <button
          style={removeButtonStyles}
          onClick={onRemove}
          onMouseEnter={handleRemoveHover}
          onMouseLeave={handleRemoveLeave}
        >
          ×
        </button>
      )}
      
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </span>
  );
};