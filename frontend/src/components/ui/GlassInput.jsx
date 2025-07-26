import React, { useState } from 'react';
import { useTheme } from '../../themes/ThemeProvider';

export const GlassInput = ({ 
  placeholder = '',
  value = '',
  onChange,
  type = 'text',
  label,
  error,
  disabled = false,
  className = '',
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const { theme } = useTheme();

  const baseStyles = {
    position: 'relative',
    width: '100%',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    borderRadius: 'var(--border-radius)',
    border: `1px solid ${error ? '#ef4444' : 'var(--color-border)'}`,
    backgroundColor: 'var(--color-surface)',
    backdropFilter: `blur(var(--backdrop-blur))`,
    WebkitBackdropFilter: `blur(var(--backdrop-blur))`,
    color: 'var(--color-text)',
    outline: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: isFocused 
      ? `0 0 0 2px ${error ? '#ef4444' : 'var(--color-primary)'}40`
      : '0 2px 4px var(--color-shadow)',
    opacity: disabled ? 0.6 : 1
  };

  const labelStyles = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: 'var(--color-text)'
  };

  const errorStyles = {
    marginTop: '0.25rem',
    fontSize: '0.875rem',
    color: '#ef4444'
  };

  return (
    <div className={`glass-input-container ${className}`}>
      {label && (
        <label style={labelStyles}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        style={baseStyles}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {error && (
        <div style={errorStyles}>
          {error}
        </div>
      )}
    </div>
  );
};