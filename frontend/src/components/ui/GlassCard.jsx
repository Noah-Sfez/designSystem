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
    sm: '16px',
    md: '24px',
    lg: '32px'
  };

  const baseStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: paddingStyles[padding],
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden'
  };

  const handleMouseEnter = (e) => {
    if (hover) {
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    }
  };

  const handleMouseLeave = (e) => {
    if (hover) {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
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