import React from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { GlassCard } from './GlassCard';
import { GlassButton } from './GlassButton';

export const ThemeSwitcher = ({ className = '' }) => {
  const { theme, mode, themes, switchTheme, toggleMode } = useTheme();

  const switcherStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    minWidth: '280px'
  };

  const sectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const labelStyles = {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: 'var(--color-text)',
    marginBottom: '12px',
    opacity: 0.9
  };

  const themeGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px'
  };

  const themePreviewStyles = {
    height: '64px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: '500',
    position: 'relative',
    overflow: 'hidden'
  };

  const getThemePreviewStyles = (themeName) => {
    const themeColors = themes[themeName].colors[mode];
    const isSelected = theme === themeName;
    
    return {
      ...themePreviewStyles,
      backgroundColor: isSelected ? 'rgba(99, 102, 241, 0.1)' : 'rgba(255, 255, 255, 0.03)',
      color: themeColors.text,
      border: isSelected ? '2px solid var(--color-primary)' : '1px solid rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(10px)',
      transform: isSelected ? 'scale(1.02)' : 'scale(1)'
    };
  };

  const modeToggleStyles = {
    display: 'flex',
    gap: '8px'
  };

  const handleThemeClick = (themeName) => {
    switchTheme(themeName);
  };

  const handleThemeHover = (e) => {
    if (e.target.style.border.includes('var(--color-primary)')) return;
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    e.target.style.transform = 'scale(1.02)';
  };

  const handleThemeLeave = (e) => {
    if (e.target.style.border.includes('var(--color-primary)')) return;
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
    e.target.style.transform = 'scale(1)';
  };

  return (
    <GlassCard style={switcherStyles} className={`theme-switcher ${className}`}>
      <div style={sectionStyles}>
        <div style={labelStyles}>Mode d'affichage</div>
        <div style={modeToggleStyles}>
          <GlassButton
            size="sm"
            variant={mode === 'light' ? 'primary' : 'secondary'}
            onClick={() => mode !== 'light' && toggleMode()}
          >
            ☀️ Clair
          </GlassButton>
          <GlassButton
            size="sm"
            variant={mode === 'dark' ? 'primary' : 'secondary'}
            onClick={() => mode !== 'dark' && toggleMode()}
          >
            🌙 Sombre
          </GlassButton>
        </div>
      </div>

      <div style={sectionStyles}>
        <div style={labelStyles}>Thème de couleur</div>
        <div style={themeGridStyles}>
          {Object.entries(themes).map(([themeName, themeData]) => (
            <div
              key={themeName}
              style={getThemePreviewStyles(themeName)}
              onClick={() => handleThemeClick(themeName)}
              onMouseEnter={handleThemeHover}
              onMouseLeave={handleThemeLeave}
            >
              {themeData.name}
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};