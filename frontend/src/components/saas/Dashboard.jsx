import React, { useState } from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';

export const Dashboard = ({ data }) => {
  const { theme } = useTheme();
  const [selectedMetric, setSelectedMetric] = useState('users');

  const containerStyles = {
    display: 'grid',
    gap: '24px',
    gridTemplateColumns: '1fr'
  };

  const headerStyles = {
    marginBottom: '32px'
  };

  const titleStyles = {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '8px'
  };

  const subtitleStyles = {
    color: 'var(--color-text)',
    fontSize: '1rem',
    opacity: 0.7
  };

  const metricsGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    marginBottom: '32px'
  };

  const metricCardStyles = {
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s',
    border: selectedMetric === 'users' ? '2px solid var(--color-primary)' : '1px solid rgba(255, 255, 255, 0.08)',
    position: 'relative'
  };

  const metricValueStyles = {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '8px'
  };

  const metricLabelStyles = {
    color: 'var(--color-text)',
    fontSize: '0.875rem',
    opacity: 0.7,
    fontWeight: '500'
  };

  const chartContainerStyles = {
    padding: '24px'
  };

  const chartTitleStyles = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'var(--color-text)',
    marginBottom: '20px'
  };

  const chartPlaceholderStyles = {
    height: '300px',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-text)',
    fontSize: '1rem',
    opacity: 0.6
  };

  const actionsStyles = {
    padding: '24px'
  };

  const buttonGroupStyles = {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  };

  const handleMetricClick = (metric) => {
    setSelectedMetric(metric);
  };

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <h1 style={titleStyles}>Dashboard Analytics</h1>
        <p style={subtitleStyles}>Vue d'ensemble de vos métriques business</p>
      </div>

      <div style={metricsGrid}>
        <GlassCard 
          style={metricCardStyles} 
          onClick={() => handleMetricClick('users')}
          hover={false}
        >
          <div style={metricValueStyles}>{data.users.toLocaleString()}</div>
          <div style={metricLabelStyles}>Utilisateurs Actifs</div>
        </GlassCard>

        <GlassCard 
          style={metricCardStyles} 
          onClick={() => handleMetricClick('revenue')}
          hover={false}
        >
          <div style={metricValueStyles}>{data.revenue.toLocaleString()}€</div>
          <div style={metricLabelStyles}>Chiffre d'Affaires</div>
        </GlassCard>

        <GlassCard 
          style={metricCardStyles} 
          onClick={() => handleMetricClick('conversion')}
          hover={false}
        >
          <div style={metricValueStyles}>{data.conversion}%</div>
          <div style={metricLabelStyles}>Taux de Conversion</div>
        </GlassCard>

        <GlassCard 
          style={metricCardStyles} 
          onClick={() => handleMetricClick('growth')}
          hover={false}
        >
          <div style={metricValueStyles}>+{data.growth}%</div>
          <div style={metricLabelStyles}>Croissance</div>
        </GlassCard>
      </div>

      <GlassCard style={chartContainerStyles}>
        <h3 style={chartTitleStyles}>
          Évolution - {selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1)}
        </h3>
        <div style={chartPlaceholderStyles}>
          📊 Graphique interactif pour {selectedMetric}
        </div>
      </GlassCard>

      <GlassCard style={actionsStyles}>
        <h3 style={chartTitleStyles}>Actions Rapides</h3>
        <div style={buttonGroupStyles}>
          <GlassButton variant="primary" size="sm">Générer Rapport</GlassButton>
          <GlassButton variant="secondary" size="sm">Exporter Données</GlassButton>
          <GlassButton variant="accent" size="sm">Paramètres</GlassButton>
        </div>
      </GlassCard>
    </div>
  );
};