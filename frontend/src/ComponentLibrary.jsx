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
import { ProgressBar } from './components/ui/ProgressBar';
import { Badge } from './components/ui/Badge';
import { LoadingSpinner, PulseLoader, WaveLoader } from './components/loaders/LoadingSpinner';
import { Dashboard } from './components/saas/Dashboard';
import { MetricCard } from './components/saas/MetricCard';
import { StatsCard } from './components/saas/StatsCard';
import { DataTable } from './components/saas/DataTable';
import { CollapsiblePanel } from './components/saas/CollapsiblePanel';
import { Speedometer } from './components/saas/Speedometer';
import { Timeline } from './components/saas/Timeline';
import { UserProfileCard } from './components/saas/UserProfileCard';

// Import mock data
import { 
  dashboardData, 
  tableData, 
  dropdownItems, 
  metricsData, 
  speedometerData, 
  panelData, 
  tableColumns,
  statsData,
  timelineData,
  userProfileData,
  progressData
} from './mock/mockData';

const ComponentLibrary = () => {
  const { toast } = useToast();
  const { currentColors } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedSection, setSelectedSection] = useState('basics');

  const containerStyles = {
    minHeight: '100vh',
    padding: '40px 20px',
    backgroundImage: `
      radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
    `
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '48px',
    maxWidth: '800px',
    margin: '0 auto 48px auto'
  };

  const titleStyles = {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: '700',
    background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '16px',
    lineHeight: '1.2'
  };

  const subtitleStyles = {
    fontSize: '1.125rem',
    color: 'var(--color-text)',
    marginBottom: '32px',
    opacity: 0.8,
    lineHeight: '1.6'
  };

  const navigationStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '48px',
    flexWrap: 'wrap'
  };

  const contentStyles = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const sectionStyles = {
    marginBottom: '64px'
  };

  const sectionTitleStyles = {
    fontSize: '2rem',
    fontWeight: '600',
    color: 'var(--color-text)',
    marginBottom: '32px',
    textAlign: 'center'
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
    marginBottom: '32px'
  };

  const demoCardStyles = {
    padding: '32px',
    textAlign: 'center',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const demoTitleStyles = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'var(--color-text)',
    marginBottom: '24px'
  };

  const codeBlockStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '20px',
    fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: '0.8125rem',
    color: 'var(--color-text)',
    overflow: 'auto',
    marginTop: '20px',
    lineHeight: '1.5'
  };

  const handleDropdownSelect = (item) => {
    toast.info('Action sélectionnée', `Vous avez cliqué sur ${item.label}`);
  };

  const handleToastDemo = (type) => {
    switch (type) {
      case 'success':
        toast.success('Opération réussie', 'L\'action a été effectuée avec succès');
        break;
      case 'error':
        toast.error('Erreur détectée', 'Une erreur inattendue s\'est produite');
        break;
      case 'warning':
        toast.warning('Attention requise', 'Veuillez vérifier les informations');
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
          <h3 style={demoTitleStyles}>Boutons</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <GlassButton variant="primary" size="sm">Primaire</GlassButton>
            <GlassButton variant="secondary" size="sm">Secondaire</GlassButton>
            <GlassButton variant="accent" size="sm">Accent</GlassButton>
            <GlassButton variant="ghost" size="sm">Ghost</GlassButton>
          </div>
          <pre style={codeBlockStyles}>
{`<GlassButton variant="primary">Primaire</GlassButton>
<GlassButton variant="secondary">Secondaire</GlassButton>
<GlassButton variant="accent">Accent</GlassButton>
<GlassButton variant="ghost">Ghost</GlassButton>`}
          </pre>
        </GlassCard>

        {/* Inputs */}
        <GlassCard style={demoCardStyles}>
          <h3 style={demoTitleStyles}>Champs de saisie</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
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
          <h3 style={demoTitleStyles}>Modal</h3>
          <GlassButton variant="primary" onClick={() => setIsModalOpen(true)}>
            Ouvrir Modal
          </GlassButton>
          <GlassModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Exemple de Modal"
            size="md"
          >
            <p style={{ color: 'var(--color-text)', marginBottom: '20px', lineHeight: '1.6' }}>
              Ceci est un exemple de contenu dans un modal avec effet glassmorphism. 
              Le design est épuré et moderne.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
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
  title="Exemple de Modal"
  size="md"
>
  <p>Contenu du modal...</p>
</GlassModal>`}
          </pre>
        </GlassCard>

        {/* Dropdown */}
        <GlassCard style={demoCardStyles}>
          <h3 style={demoTitleStyles}>Dropdown</h3>
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

        {/* Badges */}
        <GlassCard style={demoCardStyles}>
          <h3 style={demoTitleStyles}>Badges</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '16px' }}>
            <Badge variant="default" size="sm">Default</Badge>
            <Badge variant="success" size="sm" dot>Success</Badge>
            <Badge variant="warning" size="md" icon="⚠">Warning</Badge>
            <Badge variant="danger" size="md" pulse>Danger</Badge>
            <Badge variant="info" size="lg" removable onRemove={() => {}}>Removable</Badge>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Badge variant="default" outline>Outline</Badge>
            <Badge variant="success" outline dot pulse>Outline + Dot</Badge>
          </div>
          <pre style={codeBlockStyles}>
{`<Badge variant="success" size="sm" dot>Success</Badge>
<Badge variant="warning" icon="⚠">Warning</Badge>
<Badge variant="danger" pulse>Danger</Badge>
<Badge variant="info" removable onRemove={() => {}}>Removable</Badge>`}
          </pre>
        </GlassCard>

        {/* Progress Bars */}
        <GlassCard style={demoCardStyles}>
          <h3 style={demoTitleStyles}>Barres de Progression</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
            {progressData.map((progress, index) => (
              <ProgressBar
                key={index}
                label={progress.label}
                value={progress.value}
                color={progress.color}
                size={progress.size}
                striped={progress.striped}
                animated={progress.animated}
                glowing={progress.glowing}
                showPercentage={true}
              />
            ))}
          </div>
          <pre style={codeBlockStyles}>
{`<ProgressBar 
  label="Développement Frontend" 
  value={87} 
  color="primary" 
  striped 
  animated 
  showPercentage 
/>`}
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
          <h3 style={demoTitleStyles}>Spinner</h3>
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <LoadingSpinner size="sm" color="primary" />
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text)', marginTop: '8px', opacity: 0.7 }}>Small</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <LoadingSpinner size="md" color="secondary" />
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text)', marginTop: '8px', opacity: 0.7 }}>Medium</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <LoadingSpinner size="lg" color="accent" />
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text)', marginTop: '8px', opacity: 0.7 }}>Large</p>
            </div>
          </div>
          <pre style={codeBlockStyles}>
{`<LoadingSpinner size="md" color="primary" />
<LoadingSpinner size="lg" color="secondary" />
<LoadingSpinner size="sm" color="accent" />`}
          </pre>
        </GlassCard>

        <GlassCard style={demoCardStyles}>
          <h3 style={demoTitleStyles}>Pulse Loader</h3>
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <PulseLoader size="sm" color="primary" />
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text)', marginTop: '8px', opacity: 0.7 }}>Small</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <PulseLoader size="md" color="secondary" />
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text)', marginTop: '8px', opacity: 0.7 }}>Medium</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <PulseLoader size="lg" color="accent" />
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text)', marginTop: '8px', opacity: 0.7 }}>Large</p>
            </div>
          </div>
          <pre style={codeBlockStyles}>
{`<PulseLoader size="md" color="primary" />
<PulseLoader size="lg" color="secondary" />
<PulseLoader size="sm" color="accent" />`}
          </pre>
        </GlassCard>

        <GlassCard style={demoCardStyles}>
          <h3 style={demoTitleStyles}>Wave Loader</h3>
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <WaveLoader size="sm" color="primary" />
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text)', marginTop: '8px', opacity: 0.7 }}>Small</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <WaveLoader size="md" color="secondary" />
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text)', marginTop: '8px', opacity: 0.7 }}>Medium</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <WaveLoader size="lg" color="accent" />
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text)', marginTop: '8px', opacity: 0.7 }}>Large</p>
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
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)', marginBottom: '24px', textAlign: 'center' }}>Dashboard</h3>
        <Dashboard data={dashboardData} />
      </div>

      {/* Metrics Cards */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)', marginBottom: '24px', textAlign: 'center' }}>Cartes de Métriques</h3>
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
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)', marginBottom: '24px', textAlign: 'center' }}>Speedometers</h3>
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
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)', marginBottom: '24px', textAlign: 'center' }}>Panneaux Dépliants</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
          {panelData.map((panel, index) => (
            <CollapsiblePanel
              key={index}
              title={panel.title}
              icon={panel.icon}
              variant={panel.variant}
              defaultExpanded={index === 0}
            >
              <p style={{ color: 'var(--color-text)', lineHeight: '1.6', opacity: 0.8 }}>
                {panel.content}
              </p>
            </CollapsiblePanel>
          ))}
        </div>
        <pre style={codeBlockStyles}>
{`<CollapsiblePanel
  title="Statistiques Utilisateurs"
  icon="📊"
  variant="default"
  defaultExpanded={true}
>
  <p>Contenu du panneau...</p>
</CollapsiblePanel>`}
        </pre>
      </div>

      {/* Data Table */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)', marginBottom: '24px', textAlign: 'center' }}>Tableau de Données</h3>
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
      
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
        <ThemeSwitcher />
      </div>

      <GlassCard style={{ padding: '32px', maxWidth: '800px', margin: '0 auto' }}>
        <h3 style={{ marginBottom: '20px', color: 'var(--color-text)', fontSize: '1.25rem' }}>Variables CSS Personnalisables</h3>
        <p style={{ color: 'var(--color-text)', marginBottom: '20px', lineHeight: '1.6', opacity: 0.8 }}>
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
          Collection moderne de composants React avec design glassmorphism et système de thèmes avancé
        </p>
        
        <div style={navigationStyles}>
          {sections.map((section) => (
            <GlassButton
              key={section.id}
              variant={selectedSection === section.id ? 'primary' : 'secondary'}
              onClick={() => setSelectedSection(section.id)}
              size="sm"
            >
              {section.icon} {section.label}
            </GlassButton>
          ))}
        </div>
      </div>

      <div style={contentStyles}>
        {selectedSection === 'basics' && renderBasicComponents()}
        {selectedSection === 'loaders' && renderLoaders()}
        {selectedSection === 'saas' && renderSaaSComponents()}
        {selectedSection === 'themes' && renderThemes()}
      </div>
    </div>
  );
};

export default ComponentLibrary;