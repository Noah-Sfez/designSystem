import React, { useState } from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { GlassCard } from '../ui/GlassCard';

export const CollapsiblePanel = ({ 
  title, 
  children, 
  defaultExpanded = false,
  icon,
  className = '' 
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const { theme } = useTheme();

  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 1.5rem',
    cursor: 'pointer',
    borderBottom: isExpanded ? '1px solid var(--color-border)' : 'none',
    transition: 'all 0.3s'
  };

  const titleStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'var(--color-text)'
  };

  const iconStyles = {
    width: '24px',
    height: '24px',
    color: 'var(--color-primary)'
  };

  const chevronStyles = {
    fontSize: '1.5rem',
    color: 'var(--color-textMuted)',
    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const contentStyles = {
    padding: isExpanded ? '1.5rem' : '0 1.5rem',
    maxHeight: isExpanded ? 'none' : '0',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: isExpanded ? 1 : 0
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleHeaderHover = (e) => {
    e.currentTarget.style.backgroundColor = 'var(--color-surface)';
  };

  const handleHeaderLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
  };

  return (
    <GlassCard className={`collapsible-panel ${className}`} hover={false}>
      <div
        style={headerStyles}
        onClick={handleToggle}
        onMouseEnter={handleHeaderHover}
        onMouseLeave={handleHeaderLeave}
      >
        <div style={titleStyles}>
          {icon && <div style={iconStyles}>{icon}</div>}
          {title}
        </div>
        <div style={chevronStyles}>⌄</div>
      </div>
      
      <div style={contentStyles}>
        {isExpanded && children}
      </div>
    </GlassCard>
  );
};