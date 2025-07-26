import React, { useState } from 'react';
import { useToast } from './components/ui/GlassToast';
import { useTheme } from './themes/ThemeProvider';

// Import all components
import { GlassButton } from './components/ui/GlassButton';
import { GlassInput } from './components/ui/GlassInput';
import { GlassCard } from './components/ui/GlassCard';
import { GlassModal } from './components/ui/GlassModal';
import { GlassDropdown } from './components/ui/GlassDropdown';
import { ThemeSwitcher } from './components/ui/ThemeSwitcher';
import { LoadingSpinner, PulseLoader, WaveLoader } from './components/loaders/LoadingSpinner';
import { Dashboard } from './components/saas/Dashboard';
import { MetricCard } from './components/saas/MetricCard';
import { DataTable } from './components/saas/DataTable';
import { CollapsiblePanel } from './components/saas/CollapsiblePanel';
import { Speedometer } from './components/saas/Speedometer';

// Import mock data
import { 
  dashboardData, 
  tableData, 
  dropdownItems, 
  metricsData, 
  speedometerData, 
  panelData, 
  tableColumns 
} from './mock/mockData';

const ComponentLibrary = () => {
  const { toast } = useToast();
  const { currentColors } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedSection, setSelectedSection] = useState('basics');

  const containerStyles = {
    minHeight: '100vh',
    background: `linear-gradient(135deg, ${currentColors.background}, ${currentColors.surface})`,
    padding: '2rem'
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '3rem'
  };

  const titleStyles = {
    fontSize: '3rem',
    fontWeight: '700',
    background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1rem'
  };

  const subtitleStyles = {
    fontSize: '1.25rem',
    color: currentColors.textMuted,
    marginBottom: '2rem'
  };

  const navigationStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '3rem',
    flexWrap: 'wrap'
  };

  const sectionStyles = {
    marginBottom: '4rem'
  };

  const sectionTitleStyles = {
    fontSize: '2rem',
    fontWeight: '600',
    color: currentColors.text,
    marginBottom: '2rem',
    textAlign: 'center'
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  };

  const demoCardStyles = {
    padding: '2rem',
    textAlign: 'center'
  };

  const codeBlockStyles = {
    backgroundColor: currentColors.surface,
    border: `1px solid ${currentColors.border}`,
    borderRadius: 'var(--border-radius)',
    padding: '1rem',
    fontFamily: 'monospace',
    fontSize: '0.875rem',
    color: currentColors.text,
    overflow: 'auto',
    marginTop: '1rem'
  };

  const handleDropdownSelect = (item) => {
    toast.info('Action sélectionnée', `Vous avez cliqué sur ${item.label}`);
  };

  const handleToastDemo = (type) => {
    switch (type) {
      case 'success':
        toast.success('Succès !', 'Opération réalisée avec succès');
        break;
      case 'error':
        toast.error('Erreur !', 'Une erreur s\'est produite');
        break;
      case 'warning':
        toast.warning('Attention !', 'Veuillez vérifier vos données');
        break;
      default:
        toast.info('Information', 'Voici une notification d\'information');
    }
  };

  const sections = [
    { id: 'basics', label: 'Composants de base', icon: '🧩' },
    { id: 'loaders', label: 'Loaders', icon: '⏳' },
    { id: 'saas', label: 'Composants SaaS', icon: '💼' },
    { id: 'themes', label: 'Thèmes', icon: '🎨' }
  ];

  const renderBasicComponents = () => (
    <div style={sectionStyles}>
      <h2 style={sectionTitleStyles}>🧩 Composants de Base</h2>
      
      <div style={gridStyles}>
        {/* Buttons */}
        <GlassCard style={demoCardStyles}>
          <h3 style={{ marginBottom: '1rem', color: currentColors.text }}>Boutons</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <GlassButton variant="primary">Primaire</GlassButton>
            <GlassButton variant="secondary">Secondaire</GlassButton>
            <GlassButton variant="accent">Accent</GlassButton>
            <GlassButton variant="primary" disabled>Désactivé</GlassButton>
          </div>
          <pre style={codeBlockStyles}>
{`<GlassButton variant="primary">Primaire</GlassButton>
<GlassButton variant="secondary">Secondaire</GlassButton>
<GlassButton variant="accent">Accent</GlassButton>`}
          </pre>
        </GlassCard>

        {/* Inputs */}
        <GlassCard style={demoCardStyles}>
          <h3 style={{ marginBottom: '1rem', color: currentColors.text }}>Champs de saisie</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <GlassInput
              placeholder="Entrez votre nom"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              label="Nom complet"
            />
            <GlassInput
              placeholder="email@example.com"
              type="email"
              label="Email"
            />
            <GlassInput
              placeholder="Champ avec erreur"
              error="Ce champ est obligatoire"
              label="Avec erreur"
            />
          </div>
          <pre style={codeBlockStyles}>
{`<GlassInput
  placeholder="Entrez votre nom"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  label="Nom complet"
/>`}
          </pre>
        </GlassCard>

        {/* Modal */}
        <GlassCard style={demoCardStyles}>
          <h3 style={{ marginBottom: '1rem', color: currentColors.text }}>Modal</h3>
          <GlassButton variant="primary" onClick={() => setIsModalOpen(true)}>
            Ouvrir Modal
          </GlassButton>
          <GlassModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Titre du Modal"
            size="md"
          >
            <p style={{ color: currentColors.text, marginBottom: '1rem' }}>
              Contenu du modal avec effet glassmorphism. Vous pouvez y placer n'importe quel contenu.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <GlassButton variant="secondary" onClick={() => setIsModalOpen(false)}>
                Annuler
              </GlassButton>
              <GlassButton variant="primary" onClick={() => setIsModalOpen(false)}>
                Confirmer
              </GlassButton>
            </div>
          </GlassModal>
          <pre style={codeBlockStyles}>
{`<GlassModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Titre du Modal"
  size="md"
>
  <p>Contenu du modal...</p>
</GlassModal>`}
          </pre>
        </GlassCard>

        {/* Dropdown */}
        <GlassCard style={demoCardStyles}>
          <h3 style={{ marginBottom: '1rem', color: currentColors.text }}>Dropdown</h3>
          <GlassDropdown
            trigger={
              <GlassButton variant="secondary">
                Menu utilisateur ⌄
              </GlassButton>
            }
            items={dropdownItems}
            onSelect={handleDropdownSelect}
          />
          <pre style={codeBlockStyles}>
{`<GlassDropdown
  trigger={<GlassButton>Menu ⌄</GlassButton>}
  items={dropdownItems}
  onSelect={handleDropdownSelect}
/>`}
          </pre>
        </GlassCard>

        {/* Toasts */}
        <GlassCard style={demoCardStyles}>
          <h3 style={{ marginBottom: '1rem', color: currentColors.text }}>Notifications</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <GlassButton variant="primary" size="sm" onClick={() => handleToastDemo('success')}>
              Succès
            </GlassButton>
            <GlassButton variant="secondary" size="sm" onClick={() => handleToastDemo('error')}>
              Erreur
            </GlassButton>
            <GlassButton variant="accent" size="sm" onClick={() => handleToastDemo('warning')}>
              Attention
            </GlassButton>
            <GlassButton variant="secondary" size="sm" onClick={() => handleToastDemo('info')}>
              Info
            </GlassButton>
          </div>
          <pre style={codeBlockStyles}>
{`const { toast } = useToast();
toast.success('Succès !', 'Opération réalisée');
toast.error('Erreur !', 'Une erreur s\'est produite');`}
          </pre>
        </GlassCard>
      </div>
    </div>
  );

  const renderLoaders = () => (
    <div style={sectionStyles}>
      <h2 style={sectionTitleStyles}>⏳ Loaders Animés</h2>
      
      <div style={gridStyles}>
        <GlassCard style={demoCardStyles}>
          <h3 style={{ marginBottom: '1rem', color: currentColors.text }}>Spinner</h3>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <LoadingSpinner size="sm" color="primary" />
              <p style={{ fontSize: '0.875rem', color: currentColors.textMuted, marginTop: '0.5rem' }}>Small</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <LoadingSpinner size="md" color="secondary" />
              <p style={{ fontSize: '0.875rem', color: currentColors.textMuted, marginTop: '0.5rem' }}>Medium</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <LoadingSpinner size="lg" color="accent" />
              <p style={{ fontSize: '0.875rem', color: currentColors.textMuted, marginTop: '0.5rem' }}>Large</p>
            </div>
          </div>
          <pre style={codeBlockStyles}>
{`<LoadingSpinner size="md" color="primary" />
<LoadingSpinner size="lg" color="secondary" />
<LoadingSpinner size="sm" color="accent" />`}
          </pre>
        </GlassCard>

        <GlassCard style={demoCardStyles}>
          <h3 style={{ marginBottom: '1rem', color: currentColors.text }}>Pulse Loader</h3>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <PulseLoader size="sm" color="primary" />
              <p style={{ fontSize: '0.875rem', color: currentColors.textMuted, marginTop: '0.5rem' }}>Small</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <PulseLoader size="md" color="secondary" />
              <p style={{ fontSize: '0.875rem', color: currentColors.textMuted, marginTop: '0.5rem' }}>Medium</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <PulseLoader size="lg" color="accent" />
              <p style={{ fontSize: '0.875rem', color: currentColors.textMuted, marginTop: '0.5rem' }}>Large</p>
            </div>
          </div>
          <pre style={codeBlockStyles}>
{`<PulseLoader size="md" color="primary" />
<PulseLoader size="lg" color="secondary" />
<PulseLoader size="sm" color="accent" />`}
          </pre>
        </GlassCard>

        <GlassCard style={demoCardStyles}>
          <h3 style={{ marginBottom: '1rem', color: currentColors.text }}>Wave Loader</h3>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <WaveLoader size="sm" color="primary" />
              <p style={{ fontSize: '0.875rem', color: currentColors.textMuted, marginTop: '0.5rem' }}>Small</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <WaveLoader size="md" color="secondary" />
              <p style={{ fontSize: '0.875rem', color: currentColors.textMuted, marginTop: '0.5rem' }}>Medium</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <WaveLoader size="lg" color="accent" />
              <p style={{ fontSize: '0.875rem', color: currentColors.textMuted, marginTop: '0.5rem' }}>Large</p>
            </div>
          </div>
          <pre style={codeBlockStyles}>
{`<WaveLoader size="md" color="primary" />
<WaveLoader size="lg" color="secondary" />
<WaveLoader size="sm" color="accent" />`}
          </pre>
        </GlassCard>
      </div>
    </div>
  );

  const renderSaaSComponents = () => (
    <div style={sectionStyles}>
      <h2 style={sectionTitleStyles}>💼 Composants SaaS</h2>
      
      {/* Dashboard */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.5rem', color: currentColors.text, marginBottom: '1rem' }}>Dashboard</h3>
        <Dashboard data={dashboardData} />
      </div>

      {/* Metrics Cards */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.5rem', color: currentColors.text, marginBottom: '1rem' }}>Cartes de Métriques</h3>
        <div style={gridStyles}>
          {metricsData.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              icon={metric.icon}
              trend={metric.trend}
            />
          ))}
        </div>
        <pre style={codeBlockStyles}>
{`<MetricCard
  title="Utilisateurs Actifs"
  value="12,547"
  change="+12.5%"
  icon="👥"
  trend="up"
/>`}
        </pre>
      </div>

      {/* Speedometers */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.5rem', color: currentColors.text, marginBottom: '1rem' }}>Speedometers</h3>
        <div style={gridStyles}>
          {speedometerData.map((speedometer, index) => (
            <Speedometer
              key={index}
              title={speedometer.title}
              value={speedometer.value}
              max={speedometer.max}
              unit={speedometer.unit}
              color={speedometer.color}
              animated={true}
            />
          ))}
        </div>
        <pre style={codeBlockStyles}>
{`<Speedometer
  title="Performance CPU"
  value={73}
  max={100}
  unit="%"
  color="warning"
  animated={true}
/>`}
        </pre>
      </div>

      {/* Collapsible Panels */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.5rem', color: currentColors.text, marginBottom: '1rem' }}>Panneaux Dépliants</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {panelData.map((panel, index) => (
            <CollapsiblePanel
              key={index}
              title={panel.title}
              icon={panel.icon}
              defaultExpanded={index === 0}
            >
              <p style={{ color: currentColors.text, lineHeight: '1.6' }}>
                {panel.content}
              </p>
            </CollapsiblePanel>
          ))}
        </div>
        <pre style={codeBlockStyles}>
{`<CollapsiblePanel
  title="Statistiques Utilisateurs"
  icon="📊"
  defaultExpanded={true}
>
  <p>Contenu du panneau...</p>
</CollapsiblePanel>`}
        </pre>
      </div>

      {/* Data Table */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.5rem', color: currentColors.text, marginBottom: '1rem' }}>Tableau de Données</h3>
        <DataTable
          data={tableData}
          columns={tableColumns}
          searchable={true}
          sortable={true}
          pagination={true}
          pageSize={5}
        />
        <pre style={codeBlockStyles}>
{`<DataTable
  data={tableData}
  columns={tableColumns}
  searchable={true}
  sortable={true}
  pagination={true}
  pageSize={5}
/>`}
        </pre>
      </div>
    </div>
  );

  const renderThemes = () => (
    <div style={sectionStyles}>
      <h2 style={sectionTitleStyles}>🎨 Système de Thèmes</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <ThemeSwitcher />
      </div>

      <GlassCard style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: currentColors.text }}>Variables CSS Personnalisables</h3>
        <p style={{ color: currentColors.textMuted, marginBottom: '1rem' }}>
          Tous les composants utilisent des variables CSS dynamiques qui s'adaptent automatiquement au thème sélectionné.
        </p>
        <pre style={codeBlockStyles}>
{`// Variables CSS générées automatiquement
:root {
  --color-primary: ${currentColors.primary};
  --color-secondary: ${currentColors.secondary};
  --color-accent: ${currentColors.accent};
  --color-background: ${currentColors.background};
  --color-surface: ${currentColors.surface};
  --color-text: ${currentColors.text};
  --color-textMuted: ${currentColors.textMuted};
  --color-border: ${currentColors.border};
  --color-shadow: ${currentColors.shadow};
  --backdrop-blur: 20px;
  --border-radius: 16px;
}`}
        </pre>
      </GlassCard>
    </div>
  );

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <h1 style={titleStyles}>Librairie de Composants SaaS</h1>
        <p style={subtitleStyles}>
          Collection complète de composants React avec effet glassmorphism et système de thèmes
        </p>
        
        <div style={navigationStyles}>
          {sections.map((section) => (
            <GlassButton
              key={section.id}
              variant={selectedSection === section.id ? 'primary' : 'secondary'}
              onClick={() => setSelectedSection(section.id)}
            >
              {section.icon} {section.label}
            </GlassButton>
          ))}
        </div>
      </div>

      {selectedSection === 'basics' && renderBasicComponents()}
      {selectedSection === 'loaders' && renderLoaders()}
      {selectedSection === 'saas' && renderSaaSComponents()}
      {selectedSection === 'themes' && renderThemes()}
    </div>
  );
};

export default ComponentLibrary;