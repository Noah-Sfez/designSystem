import React from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { GlassCard } from './GlassCard';
import { GlassButton } from './GlassButton';

export const ThemeSwitcher = ({ className = '' }) => {
  const { theme, mode, themes, switchTheme, toggleMode } = useTheme();

  const switcherStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    minWidth: '250px'
  };

  const sectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };

  const labelStyles = {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: 'var(--color-text)',
    marginBottom: '0.5rem'
  };

  const themeGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0.5rem'
  };

  const themePreviewStyles = {
    height: '60px',
    borderRadius: 'var(--border-radius)',
    border: '2px solid var(--color-border)',
    cursor: 'pointer',
    transition: 'all 0.3s',
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
    return {
      ...themePreviewStyles,
      backgroundColor: themeColors.surface,
      color: themeColors.text,
      border: theme === themeName ? `2px solid ${themeColors.primary}` : `2px solid ${themeColors.border}`,
      backdropFilter: themeName === 'glassmorphism' ? 'blur(10px)' : 'none'
    };
  };

  const modeToggleStyles = {
    display: 'flex',
    gap: '0.5rem'
  };

  const handleThemeHover = (e, themeName) => {
    const themeColors = themes[themeName].colors[mode];
    e.target.style.transform = 'scale(1.05)';
    e.target.style.boxShadow = `0 4px 20px ${themeColors.primary}40`;
  };

  const handleThemeLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <GlassCard className={`theme-switcher ${className}`}>
      <div style={switcherStyles}>
        <div style={sectionStyles}>
          <div style={labelStyles}>Mode</div>
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
          <div style={labelStyles}>Thème</div>
          <div style={themeGridStyles}>
            {Object.entries(themes).map(([themeName, themeData]) => (
              <div
                key={themeName}
                style={getThemePreviewStyles(themeName)}
                onClick={() => switchTheme(themeName)}
                onMouseEnter={(e) => handleThemeHover(e, themeName)}
                onMouseLeave={handleThemeLeave}
              >
                <div style={{ position: 'relative', zIndex: 1 }}>
                  {themeData.name}
                </div>
                {themeName === 'glassmorphism' && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
                    zIndex: 0
                  }} />
                )}
                {themeName === 'cyberpunk' && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1))',
                    zIndex: 0
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
};