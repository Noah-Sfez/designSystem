import React from 'react';
import { useTheme } from '../../themes/ThemeProvider';

export const GlassModal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md',
  className = '' 
}) => {
  const { theme } = useTheme();

  const sizeStyles = {
    sm: { maxWidth: '400px' },
    md: { maxWidth: '600px' },
    lg: { maxWidth: '800px' },
    xl: { maxWidth: '1200px' }
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible' : 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const modalStyles = {
    backgroundColor: 'var(--color-surface)',
    backdropFilter: `blur(var(--backdrop-blur))`,
    WebkitBackdropFilter: `blur(var(--backdrop-blur))`,
    borderRadius: 'var(--border-radius)',
    border: '1px solid var(--color-border)',
    boxShadow: '0 25px 50px var(--color-shadow)',
    width: '90vw',
    maxHeight: '90vh',
    overflow: 'auto',
    transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(-20px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    ...sizeStyles[size]
  };

  const headerStyles = {
    padding: '1.5rem 1.5rem 0 1.5rem',
    borderBottom: '1px solid var(--color-border)',
    paddingBottom: '1rem',
    marginBottom: '1rem'
  };

  const titleStyles = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'var(--color-text)',
    margin: 0
  };

  const closeButtonStyles = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: 'var(--color-textMuted)',
    padding: '0.5rem',
    borderRadius: '50%',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const bodyStyles = {
    padding: '0 1.5rem 1.5rem 1.5rem'
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseButtonHover = (e) => {
    e.target.style.backgroundColor = 'var(--color-border)';
    e.target.style.transform = 'scale(1.1)';
  };

  const handleCloseButtonLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.transform = 'scale(1)';
  };

  if (!isOpen) return null;

  return (
    <div style={overlayStyles} onClick={handleOverlayClick}>
      <div style={modalStyles} className={`glass-modal ${className}`}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>{title}</h2>
          <button
            style={closeButtonStyles}
            onClick={onClose}
            onMouseEnter={handleCloseButtonHover}
            onMouseLeave={handleCloseButtonLeave}
          >
            ×
          </button>
        </div>
        <div style={bodyStyles}>
          {children}
        </div>
      </div>
    </div>
  );
};