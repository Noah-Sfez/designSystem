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

  const addToast = useCallback(({ title, description, type = 'info', duration = 5000 }) => {
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
  const { theme } = useTheme();

  const containerStyles = {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
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
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const typeColors = {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: 'var(--color-primary)'
  };

  const typeIcons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  const toastStyles = {
    backgroundColor: 'var(--color-surface)',
    backdropFilter: `blur(var(--backdrop-blur))`,
    WebkitBackdropFilter: `blur(var(--backdrop-blur))`,
    borderRadius: 'var(--border-radius)',
    border: '1px solid var(--color-border)',
    borderLeft: `4px solid ${typeColors[toast.type]}`,
    padding: '1rem',
    boxShadow: '0 10px 25px var(--color-shadow)',
    transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative'
  };

  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: toast.description ? '0.5rem' : 0
  };

  const titleStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: '600',
    color: 'var(--color-text)',
    fontSize: '0.875rem'
  };

  const iconStyles = {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: typeColors[toast.type],
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem'
  };

  const descriptionStyles = {
    color: 'var(--color-textMuted)',
    fontSize: '0.875rem',
    lineHeight: '1.4'
  };

  const closeButtonStyles = {
    background: 'none',
    border: 'none',
    color: 'var(--color-textMuted)',
    cursor: 'pointer',
    padding: '0.25rem',
    fontSize: '1.2rem',
    borderRadius: '50%',
    transition: 'all 0.2s'
  };

  const handleCloseHover = (e) => {
    e.target.style.backgroundColor = 'var(--color-border)';
  };

  const handleCloseLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
  };

  return (
    <div style={toastStyles}>
      <div style={headerStyles}>
        <div style={titleStyles}>
          <div style={iconStyles}>{typeIcons[toast.type]}</div>
          {toast.title}
        </div>
        <button
          style={closeButtonStyles}
          onClick={onClose}
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