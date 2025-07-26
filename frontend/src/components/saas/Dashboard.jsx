import React, { useState } from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';
import { LineChart, BarChart } from './Chart';

export const Dashboard = ({ data }) => {
  const { theme } = useTheme();
  const [selectedMetric, setSelectedMetric] = useState('users');
  const [chartType, setChartType] = useState('line');

  const containerStyles = {
    display: 'grid',
    gap: '24px',
    gridTemplateColumns: '1fr'
  };

  const headerStyles = {
    marginBottom: '32px',
    textAlign: 'center'
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
    position: 'relative',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    background: 'rgba(255, 255, 255, 0.02)'
  };

  const selectedMetricStyles = {
    ...metricCardStyles,
    border: '2px solid var(--color-primary)',
    background: 'rgba(99, 102, 241, 0.05)',
    transform: 'scale(1.02)'
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

  const chartHeaderStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    flexWrap: 'wrap',
    gap: '16px'
  };

  const chartTitleStyles = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'var(--color-text)'
  };

  const chartControlsStyles = {
    display: 'flex',
    gap: '8px'
  };

  const actionsStyles = {
    padding: '24px'
  };

  const buttonGroupStyles = {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  };

  const metrics = [
    { key: 'users', label: 'Utilisateurs Actifs', value: data.users.toLocaleString(), icon: '👥' },
    { key: 'revenue', label: 'Chiffre d\'Affaires', value: `${data.revenue.toLocaleString()}€`, icon: '💰' },
    { key: 'conversion', label: 'Taux de Conversion', value: `${data.conversion}%`, icon: '📊' },
    { key: 'growth', label: 'Croissance', value: `+${data.growth}%`, icon: '📈' }
  ];

  const handleMetricClick = (metric) => {
    setSelectedMetric(metric);
  };

  const handleMetricHover = (e) => {
    if (!e.currentTarget.classList.contains('selected')) {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
      e.currentTarget.style.transform = 'scale(1.01)';
    }
  };

  const handleMetricLeave = (e) => {
    if (!e.currentTarget.classList.contains('selected')) {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
      e.currentTarget.style.transform = 'scale(1)';
    }
  };

  const getChartData = () => {
    // Mock data based on selected metric
    const baseData = {
      users: [
        { x: 0, y: 8500 }, { x: 1, y: 9200 }, { x: 2, y: 8800 },
        { x: 3, y: 10200 }, { x: 4, y: 11500 }, { x: 5, y: 12200 },
        { x: 6, y: 11800 }, { x: 7, y: 12800 }, { x: 8, y: 12100 },
        { x: 9, y: 13200 }, { x: 10, y: 12800 }, { x: 11, y: 12547 }
      ],
      revenue: [
        { x: 0, y: 72000 }, { x: 1, y: 75000 }, { x: 2, y: 71000 },
        { x: 3, y: 78000 }, { x: 4, y: 82000 }, { x: 5, y: 85000 },
        { x: 6, y: 83000 }, { x: 7, y: 87000 }, { x: 8, y: 86000 },
        { x: 9, y: 91000 }, { x: 10, y: 88000 }, { x: 11, y: 89650 }
      ],
      conversion: [
        { x: 0, y: 2.8 }, { x: 1, y: 3.1 }, { x: 2, y: 2.9 },
        { x: 3, y: 3.3 }, { x: 4, y: 3.5 }, { x: 5, y: 3.4 },
        { x: 6, y: 3.2 }, { x: 7, y: 3.6 }, { x: 8, y: 3.1 },
        { x: 9, y: 3.4 }, { x: 10, y: 3.3 }, { x: 11, y: 3.2 }
      ],
      growth: [
        { x: 0, y: 8.2 }, { x: 1, y: 9.1 }, { x: 2, y: 8.7 },
        { x: 3, y: 10.5 }, { x: 4, y: 11.2 }, { x: 5, y: 11.8 },
        { x: 6, y: 10.9 }, { x: 7, y: 12.1 }, { x: 8, y: 11.6 },
        { x: 9, y: 12.8 }, { x: 10, y: 12.3 }, { x: 11, y: 12.5 }
      ]
    };

    return baseData[selectedMetric] || baseData.users;
  };

  const getBarChartData = () => {
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'];
    const chartData = getChartData();
    
    return months.map((month, index) => ({
      label: month,
      value: chartData[index * 2]?.y || 0
    }));
  };

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <h1 style={titleStyles}>Dashboard Analytics</h1>
        <p style={subtitleStyles}>Vue d'ensemble de vos métriques business</p>
      </div>

      <div style={metricsGrid}>
        {metrics.map((metric) => (
          <GlassCard 
            key={metric.key}
            style={selectedMetric === metric.key ? selectedMetricStyles : metricCardStyles}
            onClick={() => handleMetricClick(metric.key)}
            onMouseEnter={handleMetricHover}
            onMouseLeave={handleMetricLeave}
            className={selectedMetric === metric.key ? 'selected' : ''}
            hover={false}
          >
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{metric.icon}</div>
            <div style={metricValueStyles}>{metric.value}</div>
            <div style={metricLabelStyles}>{metric.label}</div>
          </GlassCard>
        ))}
      </div>

      <GlassCard style={chartContainerStyles}>
        <div style={chartHeaderStyles}>
          <h3 style={chartTitleStyles}>
            Évolution - {metrics.find(m => m.key === selectedMetric)?.label}
          </h3>
          <div style={chartControlsStyles}>
            <GlassButton
              size="sm"
              variant={chartType === 'line' ? 'primary' : 'ghost'}
              onClick={() => setChartType('line')}
            >
              📈 Courbe
            </GlassButton>
            <GlassButton
              size="sm"
              variant={chartType === 'bar' ? 'primary' : 'ghost'}
              onClick={() => setChartType('bar')}
            >
              📊 Barres
            </GlassButton>
          </div>
        </div>
        
        {chartType === 'line' ? (
          <LineChart data={getChartData()} title={selectedMetric} />
        ) : (
          <BarChart data={getBarChartData()} title={selectedMetric} />
        )}
      </GlassCard>

      <GlassCard style={actionsStyles}>
        <h3 style={chartTitleStyles}>Actions Rapides</h3>
        <div style={buttonGroupStyles}>
          <GlassButton variant="primary" size="sm">📊 Générer Rapport</GlassButton>
          <GlassButton variant="secondary" size="sm">📤 Exporter Données</GlassButton>
          <GlassButton variant="accent" size="sm">⚙️ Paramètres</GlassButton>
          <GlassButton variant="ghost" size="sm">🔄 Actualiser</GlassButton>
        </div>
      </GlassCard>
    </div>
  );
};