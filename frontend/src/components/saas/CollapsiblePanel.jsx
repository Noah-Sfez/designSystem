import React, { useState } from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { GlassCard } from '../ui/GlassCard';

export const CollapsiblePanel = ({ 
  title, 
  children, 
  defaultExpanded = false,
  icon,
  className = '',
  variant = 'default'
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const { theme } = useTheme();

  const variants = {
    default: {
      iconBg: 'rgba(99, 102, 241, 0.1)',
      iconBorder: 'rgba(99, 102, 241, 0.2)',
      iconColor: 'var(--color-primary)'
    },
    success: {
      iconBg: 'rgba(16, 185, 129, 0.1)',
      iconBorder: 'rgba(16, 185, 129, 0.2)',
      iconColor: '#10b981'
    },
    warning: {
      iconBg: 'rgba(245, 158, 11, 0.1)',
      iconBorder: 'rgba(245, 158, 11, 0.2)',
      iconColor: '#f59e0b'
    },
    danger: {
      iconBg: 'rgba(239, 68, 68, 0.1)',
      iconBorder: 'rgba(239, 68, 68, 0.2)',
      iconColor: '#ef4444'
    }
  };

  const currentVariant = variants[variant];

  const panelStyles = {
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: isExpanded ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.05)',
    background: isExpanded ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)'
  };

  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 24px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    borderBottom: isExpanded ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
  };

  const titleContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  };

  const iconContainerStyles = {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    backgroundColor: currentVariant.iconBg,
    border: `1px solid ${currentVariant.iconBorder}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    color: currentVariant.iconColor,
    transition: 'all 0.2s ease'
  };

  const titleStyles = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'var(--color-text)',
    margin: 0
  };

  const chevronStyles = {
    fontSize: '1.25rem',
    color: 'var(--color-text)',
    opacity: 0.6,
    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    backgroundColor: isExpanded ? 'rgba(255, 255, 255, 0.05)' : 'transparent'
  };

  const contentStyles = {
    maxHeight: isExpanded ? '1000px' : '0',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: isExpanded ? 1 : 0
  };

  const contentInnerStyles = {
    padding: isExpanded ? '24px' : '0 24px',
    transition: 'padding 0.3s ease'
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleHeaderHover = (e) => {
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
    const iconContainer = e.currentTarget.querySelector('.icon-container');
    if (iconContainer) {
      iconContainer.style.transform = 'scale(1.05)';
      iconContainer.style.backgroundColor = currentVariant.iconBg;
    }
  };

  const handleHeaderLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    const iconContainer = e.currentTarget.querySelector('.icon-container');
    if (iconContainer) {
      iconContainer.style.transform = 'scale(1)';
      iconContainer.style.backgroundColor = currentVariant.iconBg;
    }
  };

  return (
    <GlassCard style={panelStyles} className={`collapsible-panel ${className}`} hover={false}>
      <div
        style={headerStyles}
        onClick={handleToggle}
        onMouseEnter={handleHeaderHover}
        onMouseLeave={handleHeaderLeave}
      >
        <div style={titleContainerStyles}>
          {icon && (
            <div 
              className="icon-container" 
              style={iconContainerStyles}
            >
              {icon}
            </div>
          )}
          <h3 style={titleStyles}>{title}</h3>
        </div>
        <div style={chevronStyles}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.427 9.573l3.396-3.396a.25.25 0 01.354 0l3.396 3.396a.25.25 0 01-.177.427H4.604a.25.25 0 01-.177-.427z"/>
          </svg>
        </div>
      </div>
      
      <div style={contentStyles}>
        <div style={contentInnerStyles}>
          {children}
        </div>
      </div>
    </GlassCard>
  );
};