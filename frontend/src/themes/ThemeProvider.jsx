import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('glassmorphism');
  const [mode, setMode] = useState('dark');

  const themes = {
    glassmorphism: {
      name: 'Glassmorphism',
      colors: {
        light: {
          primary: '#6366f1',
          secondary: '#8b5cf6',
          accent: '#06b6d4',
          background: '#f8fafc',
          surface: 'rgba(255, 255, 255, 0.25)',
          text: '#1e293b',
          textMuted: '#64748b',
          border: 'rgba(255, 255, 255, 0.3)',
          shadow: 'rgba(0, 0, 0, 0.1)',
        },
        dark: {
          primary: '#818cf8',
          secondary: '#a78bfa',
          accent: '#22d3ee',
          background: '#0f172a',
          surface: 'rgba(255, 255, 255, 0.1)',
          text: '#f1f5f9',
          textMuted: '#94a3b8',
          border: 'rgba(255, 255, 255, 0.2)',
          shadow: 'rgba(0, 0, 0, 0.3)',
        }
      }
    },
    cyberpunk: {
      name: 'Cyberpunk',
      colors: {
        light: {
          primary: '#ff00ff',
          secondary: '#00ffff',
          accent: '#ffff00',
          background: '#f0f0f0',
          surface: 'rgba(255, 0, 255, 0.1)',
          text: '#000000',
          textMuted: '#666666',
          border: 'rgba(255, 0, 255, 0.3)',
          shadow: 'rgba(255, 0, 255, 0.2)',
        },
        dark: {
          primary: '#ff00ff',
          secondary: '#00ffff',
          accent: '#ffff00',
          background: '#0a0a0a',
          surface: 'rgba(255, 0, 255, 0.15)',
          text: '#ffffff',
          textMuted: '#cccccc',
          border: 'rgba(255, 0, 255, 0.4)',
          shadow: 'rgba(255, 0, 255, 0.3)',
        }
      }
    },
    minimal: {
      name: 'Minimal',
      colors: {
        light: {
          primary: '#2563eb',
          secondary: '#7c3aed',
          accent: '#059669',
          background: '#ffffff',
          surface: 'rgba(0, 0, 0, 0.02)',
          text: '#111827',
          textMuted: '#6b7280',
          border: 'rgba(0, 0, 0, 0.1)',
          shadow: 'rgba(0, 0, 0, 0.05)',
        },
        dark: {
          primary: '#3b82f6',
          secondary: '#8b5cf6',
          accent: '#10b981',
          background: '#111827',
          surface: 'rgba(255, 255, 255, 0.05)',
          text: '#f9fafb',
          textMuted: '#9ca3af',
          border: 'rgba(255, 255, 255, 0.1)',
          shadow: 'rgba(0, 0, 0, 0.2)',
        }
      }
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'glassmorphism';
    const savedMode = localStorage.getItem('mode') || 'dark';
    setTheme(savedTheme);
    setMode(savedMode);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const currentTheme = themes[theme];
    const currentColors = currentTheme.colors[mode];

    Object.entries(currentColors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Additional glassmorphism effects
    if (theme === 'glassmorphism') {
      root.style.setProperty('--backdrop-blur', '20px');
      root.style.setProperty('--border-radius', '16px');
    } else if (theme === 'cyberpunk') {
      root.style.setProperty('--backdrop-blur', '10px');
      root.style.setProperty('--border-radius', '4px');
    } else {
      root.style.setProperty('--backdrop-blur', '0px');
      root.style.setProperty('--border-radius', '8px');
    }

    localStorage.setItem('theme', theme);
    localStorage.setItem('mode', mode);
  }, [theme, mode]);

  const toggleMode = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const switchTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      mode,
      themes,
      switchTheme,
      toggleMode,
      currentTheme: themes[theme],
      currentColors: themes[theme].colors[mode]
    }}>
      <div className="min-h-screen transition-all duration-300" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};