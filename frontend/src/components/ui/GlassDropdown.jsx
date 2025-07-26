import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../themes/ThemeProvider';

export const GlassDropdown = ({ 
  trigger, 
  items = [], 
  onSelect,
  className = '',
  align = 'left'
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
    marginTop: '0.5rem',
    minWidth: '200px',
    backgroundColor: 'var(--color-surface)',
    backdropFilter: `blur(var(--backdrop-blur))`,
    WebkitBackdropFilter: `blur(var(--backdrop-blur))`,
    borderRadius: 'var(--border-radius)',
    border: '1px solid var(--color-border)',
    boxShadow: '0 10px 25px var(--color-shadow)',
    zIndex: 1000,
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)',
    visibility: isOpen ? 'visible' : 'hidden',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const itemStyles = {
    padding: '0.75rem 1rem',
    cursor: 'pointer',
    color: 'var(--color-text)',
    borderBottom: '1px solid var(--color-border)',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.875rem'
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  const handleItemHover = (e) => {
    e.target.style.backgroundColor = 'var(--color-border)';
    e.target.style.transform = 'translateX(4px)';
  };

  const handleItemLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.transform = 'translateX(0)';
  };

  return (
    <div ref={dropdownRef} style={dropdownStyles} className={`glass-dropdown ${className}`}>
      <div onClick={handleTriggerClick}>
        {trigger}
      </div>
      <div style={menuStyles}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              ...itemStyles,
              borderBottom: index === items.length - 1 ? 'none' : '1px solid var(--color-border)'
            }}
            onClick={() => handleItemClick(item)}
            onMouseEnter={handleItemHover}
            onMouseLeave={handleItemLeave}
          >
            {item.icon && <span style={{ marginRight: '0.5rem' }}>{item.icon}</span>}
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};