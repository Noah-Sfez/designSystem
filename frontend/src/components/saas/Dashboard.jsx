import React, { useState } from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

export const Dashboard = ({ data }) => {
  const { theme } = useTheme();
  const [selectedMetric, setSelectedMetric] = useState('users');

  const dashboardStyles = {
    padding: '2rem',
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
  };

  const headerStyles = {
    marginBottom: '2rem'
  };

  const titleStyles = {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '0.5rem'
  };

  const subtitleStyles = {
    color: 'var(--color-textMuted)',
    fontSize: '1.125rem'
  };

  const metricsGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem'
  };

  const metricCardStyles = {
    padding: '1.5rem',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s',
    border: selectedMetric === 'users' ? '2px solid var(--color-primary)' : '1px solid var(--color-border)'
  };

  const metricValueStyles = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: 'var(--color-primary)',
    marginBottom: '0.5rem'
  };

  const metricLabelStyles = {
    color: 'var(--color-textMuted)',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const chartPlaceholderStyles = {
    height: '300px',
    backgroundColor: 'var(--color-surface)',
    borderRadius: 'var(--border-radius)',
    border: '1px solid var(--color-border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-textMuted)',
    fontSize: '1.125rem',
    backgroundImage: `linear-gradient(45deg, transparent 25%, var(--color-border) 25%, var(--color-border) 50%, transparent 50%, transparent 75%, var(--color-border) 75%)`,
    backgroundSize: '20px 20px'
  };

  return (
    <div style={dashboardStyles}>
      <div style={headerStyles}>
        <h1 style={titleStyles}>Dashboard Analytics</h1>
        <p style={subtitleStyles}>Vue d'ensemble de vos métriques business</p>
      </div>

      <div style={metricsGrid}>
        <GlassCard style={metricCardStyles} onClick={() => setSelectedMetric('users')}>
          <div style={metricValueStyles}>{data.users.toLocaleString()}</div>
          <div style={metricLabelStyles}>Utilisateurs Actifs</div>
        </GlassCard>

        <GlassCard style={metricCardStyles} onClick={() => setSelectedMetric('revenue')}>
          <div style={metricValueStyles}>{data.revenue.toLocaleString()}€</div>
          <div style={metricLabelStyles}>Chiffre d'Affaires</div>
        </GlassCard>

        <GlassCard style={metricCardStyles} onClick={() => setSelectedMetric('conversion')}>
          <div style={metricValueStyles}>{data.conversion}%</div>
          <div style={metricLabelStyles}>Taux de Conversion</div>
        </GlassCard>

        <GlassCard style={metricCardStyles} onClick={() => setSelectedMetric('growth')}>
          <div style={metricValueStyles}>+{data.growth}%</div>
          <div style={metricLabelStyles}>Croissance</div>
        </GlassCard>
      </div>

      <GlassCard>
        <h3 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>
          Évolution - {selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1)}
        </h3>
        <div style={chartPlaceholderStyles}>
          📊 Graphique interactif pour {selectedMetric}
        </div>
      </GlassCard>

      <GlassCard>
        <h3 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>Actions Rapides</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <GlassButton variant="primary">Générer Rapport</GlassButton>
          <GlassButton variant="secondary">Exporter Données</GlassButton>
          <GlassButton variant="accent">Paramètres</GlassButton>
        </div>
      </GlassCard>
    </div>
  );
};