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

  const containerStyles = {
    position: 'relative',
    width: '100%'
  };

  const labelStyles = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: 'var(--color-text)',
    opacity: 0.9
  };

  const inputStyles = {
    width: '100%',
    padding: '14px 16px',
    fontSize: '0.9375rem',
    borderRadius: '12px',
    border: error ? '2px solid #ef4444' : isFocused ? '2px solid var(--color-primary)' : '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    color: 'var(--color-text)',
    outline: 'none',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: 'inherit',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'text'
  };

  const errorStyles = {
    marginTop: '6px',
    fontSize: '0.8125rem',
    color: '#ef4444',
    opacity: 0.9
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div style={containerStyles} className={`glass-input-container ${className}`}>
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
        style={inputStyles}
        onFocus={handleFocus}
        onBlur={handleBlur}
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