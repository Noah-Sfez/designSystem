import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../themes/ThemeProvider';

export const GlassDropdown = ({ 
  trigger, 
  items = [], 
  onSelect,
  className = '',
  align = 'left',
  maxHeight = '300px'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { theme } = useTheme();

  const dropdownStyles = {
    position: 'relative',
    display: 'inline-block'
  };

  const menuStyles = {
    position: 'absolute',
    top: '100%',
    [align]: 0,
    marginTop: '8px',
    minWidth: '200px',
    maxHeight: maxHeight,
    overflowY: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.95)',
    visibility: isOpen ? 'visible' : 'hidden',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '6px'
  };

  const itemStyles = {
    padding: '10px 12px',
    cursor: 'pointer',
    color: 'var(--color-text)',
    borderRadius: '8px',
    transition: 'all 0.15s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.875rem',
    fontWeight: '400',
    margin: '2px 0',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none'
  };

  const separatorStyles = {
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    margin: '4px 0'
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    if (item.disabled) return;
    onSelect(item);
    setIsOpen(false);
  };

  const handleItemHover = (e) => {
    if (e.currentTarget.disabled) return;
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
    e.currentTarget.style.color = 'var(--color-text)';
  };

  const handleItemLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = 'var(--color-text)';
  };

  const renderItem = (item, index) => {
    if (item.type === 'separator') {
      return <div key={index} style={separatorStyles} />;
    }

    const itemStyle = {
      ...itemStyles,
      ...(item.disabled && {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none'
      })
    };

    return (
      <div
        key={index}
        style={itemStyle}
        onClick={() => handleItemClick(item)}
        onMouseEnter={handleItemHover}
        onMouseLeave={handleItemLeave}
        disabled={item.disabled}
      >
        {item.icon && (
          <span style={{ 
            fontSize: '1rem', 
            opacity: 0.8,
            width: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {item.icon}
          </span>
        )}
        <span style={{ flex: 1 }}>{item.label}</span>
        {item.shortcut && (
          <span style={{ 
            fontSize: '0.75rem', 
            opacity: 0.6,
            fontWeight: '500',
            marginLeft: '8px'
          }}>
            {item.shortcut}
          </span>
        )}
        {item.badge && (
          <span style={{
            fontSize: '0.6875rem',
            padding: '2px 6px',
            borderRadius: '10px',
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            color: 'var(--color-primary)',
            fontWeight: '500',
            marginLeft: '8px'
          }}>
            {item.badge}
          </span>
        )}
      </div>
    );
  };

  return (
    <div ref={dropdownRef} style={dropdownStyles} className={`glass-dropdown ${className}`}>
      <div onClick={handleTriggerClick} style={{ cursor: 'pointer' }}>
        {trigger}
      </div>
      <div style={menuStyles}>
        {items.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
};