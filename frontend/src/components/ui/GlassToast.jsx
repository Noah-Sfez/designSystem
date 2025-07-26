import React, { createContext, useContext, useState, useCallback } from 'react';
import { useTheme } from '../../themes/ThemeProvider';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ title, description, type = 'info', duration = 4000 }) => {
    const id = Date.now() + Math.random();
    const toast = { id, title, description, type, duration };
    
    setToasts(prev => [...prev, toast]);

    setTimeout(() => {
      removeToast(id);
    }, duration);

    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const toast = {
    success: (title, description) => addToast({ title, description, type: 'success' }),
    error: (title, description) => addToast({ title, description, type: 'error' }),
    warning: (title, description) => addToast({ title, description, type: 'warning' }),
    info: (title, description) => addToast({ title, description, type: 'info' })
  };

  return (
    <ToastContext.Provider value={{ toast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

const ToastContainer = ({ toasts, removeToast }) => {
  const containerStyles = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '400px'
  };

  return (
    <div style={containerStyles}>
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  );
};

const Toast = ({ toast, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  React.useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => onClose(), 300);
  };

  const typeColors = {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6'
  };

  const typeIcons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  const toastStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    padding: '16px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    transform: isLeaving ? 'translateX(100%)' : (isVisible ? 'translateX(0)' : 'translateX(100%)'),
    opacity: isLeaving ? 0 : (isVisible ? 1 : 0),
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    minWidth: '320px'
  };

  const headerStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: toast.description ? '8px' : 0
  };

  const titleStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '500',
    color: 'var(--color-text)',
    fontSize: '0.875rem',
    lineHeight: '1.4'
  };

  const iconStyles = {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: typeColors[toast.type],
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    flexShrink: 0
  };

  const descriptionStyles = {
    color: 'var(--color-text)',
    fontSize: '0.8125rem',
    lineHeight: '1.5',
    opacity: 0.8,
    marginLeft: '26px'
  };

  const closeButtonStyles = {
    background: 'none',
    border: 'none',
    color: 'var(--color-text)',
    cursor: 'pointer',
    padding: '2px',
    fontSize: '16px',
    borderRadius: '4px',
    transition: 'all 0.2s',
    opacity: 0.6,
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  };

  const handleCloseHover = (e) => {
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    e.target.style.opacity = '1';
  };

  const handleCloseLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.opacity = '0.6';
  };

  return (
    <div style={toastStyles}>
      <div style={headerStyles}>
        <div style={titleStyles}>
          <div style={iconStyles}>{typeIcons[toast.type]}</div>
          <span>{toast.title}</span>
        </div>
        <button
          style={closeButtonStyles}
          onClick={handleClose}
          onMouseEnter={handleCloseHover}
          onMouseLeave={handleCloseLeave}
        >
          ×
        </button>
      </div>
      {toast.description && (
        <div style={descriptionStyles}>
          {toast.description}
        </div>
      )}
    </div>
  );
};