import React, { useEffect } from 'react';
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
    sm: { maxWidth: '400px', width: '90vw' },
    md: { maxWidth: '500px', width: '90vw' },
    lg: { maxWidth: '700px', width: '90vw' },
    xl: { maxWidth: '900px', width: '90vw' }
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible' : 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '20px'
  };

  const modalStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(40px)',
    WebkitBackdropFilter: 'blur(40px)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    maxHeight: '80vh',
    overflow: 'hidden',
    transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(10px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    ...sizeStyles[size]
  };

  const headerStyles = {
    padding: '24px 24px 16px 24px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const titleStyles = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'var(--color-text)',
    margin: 0
  };

  const closeButtonStyles = {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: 'var(--color-text)',
    padding: '4px',
    borderRadius: '6px',
    transition: 'all 0.2s',
    opacity: 0.7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px'
  };

  const bodyStyles = {
    padding: '24px',
    maxHeight: 'calc(80vh - 120px)',
    overflowY: 'auto'
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseButtonHover = (e) => {
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    e.target.style.opacity = '1';
  };

  const handleCloseButtonLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.opacity = '0.7';
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