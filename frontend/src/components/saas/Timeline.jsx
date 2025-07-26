import React from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { GlassCard } from '../ui/GlassCard';

export const Timeline = ({ 
  items = [], 
  className = '',
  variant = 'vertical',
  showTime = true,
  showConnector = true
}) => {
  const { theme } = useTheme();

  const containerStyles = {
    padding: '24px',
    position: 'relative'
  };

  const timelineStyles = {
    position: 'relative',
    display: 'flex',
    flexDirection: variant === 'vertical' ? 'column' : 'row',
    gap: variant === 'vertical' ? '24px' : '32px'
  };

  const connectorStyles = {
    position: 'absolute',
    [variant === 'vertical' ? 'left' : 'top']: '20px',
    [variant === 'vertical' ? 'top' : 'left']: '40px',
    [variant === 'vertical' ? 'bottom' : 'right']: '40px',
    [variant === 'vertical' ? 'width' : 'height']: '2px',
    background: 'linear-gradient(to bottom, var(--color-primary), transparent)',
    borderRadius: '1px',
    opacity: 0.3
  };

  const TimelineItem = ({ item, index, isLast }) => {
    const itemStyles = {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
      minHeight: '60px'
    };

    const dotStyles = {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${item.color || 'var(--color-primary)'} 0%, ${item.color || 'var(--color-primary)'}aa 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
      color: 'white',
      boxShadow: `0 4px 12px ${item.color || 'var(--color-primary)'}40`,
      position: 'relative',
      zIndex: 2,
      flexShrink: 0
    };

    const pulseStyles = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '50%',
      background: item.color || 'var(--color-primary)',
      animation: item.status === 'active' ? 'pulse 2s infinite' : 'none',
      opacity: 0.6
    };

    const contentStyles = {
      flex: 1,
      paddingTop: '2px'
    };

    const titleStyles = {
      fontSize: '1rem',
      fontWeight: '600',
      color: 'var(--color-text)',
      marginBottom: '4px',
      lineHeight: '1.4'
    };

    const descriptionStyles = {
      fontSize: '0.875rem',
      color: 'var(--color-text)',
      opacity: 0.8,
      lineHeight: '1.5',
      marginBottom: '8px'
    };

    const timeStyles = {
      fontSize: '0.75rem',
      color: 'var(--color-text)',
      opacity: 0.6,
      fontWeight: '500'
    };

    const statusStyles = {
      fontSize: '0.75rem',
      fontWeight: '600',
      padding: '2px 8px',
      borderRadius: '12px',
      marginTop: '8px',
      display: 'inline-block',
      ...(item.status === 'completed' && {
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        color: '#10b981',
        border: '1px solid rgba(16, 185, 129, 0.2)'
      }),
      ...(item.status === 'active' && {
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        color: '#6366f1',
        border: '1px solid rgba(99, 102, 241, 0.2)'
      }),
      ...(item.status === 'pending' && {
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        color: '#f59e0b',
        border: '1px solid rgba(245, 158, 11, 0.2)'
      })
    };

    return (
      <div style={itemStyles}>
        <div style={dotStyles}>
          <div style={pulseStyles} />
          {item.icon || '●'}
        </div>
        
        <div style={contentStyles}>
          <div style={titleStyles}>{item.title}</div>
          {item.description && (
            <div style={descriptionStyles}>{item.description}</div>
          )}
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {showTime && item.time && (
              <div style={timeStyles}>{item.time}</div>
            )}
            {item.status && (
              <div style={statusStyles}>
                {item.status === 'completed' && '✓ Terminé'}
                {item.status === 'active' && '🔄 En cours'}
                {item.status === 'pending' && '⏳ En attente'}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <GlassCard style={containerStyles} className={`timeline ${className}`}>
      <div style={timelineStyles}>
        {showConnector && items.length > 1 && (
          <div style={connectorStyles} />
        )}
        
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            isLast={index === items.length - 1}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.6; }
        }
      `}</style>
    </GlassCard>
  );
};