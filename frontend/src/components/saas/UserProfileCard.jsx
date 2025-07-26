import React, { useState } from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import { GlassCard } from '../ui/GlassCard';
import { GlassButton } from '../ui/GlassButton';
import { Badge } from '../ui/Badge';

export const UserProfileCard = ({ 
  user = {},
  actions = [],
  showStats = true,
  showBadges = true,
  className = '',
  variant = 'default'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();

  const defaultUser = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: null,
    role: 'Admin',
    status: 'online',
    joinDate: '2023-01-15',
    location: 'Paris, France',
    bio: 'Développeur full-stack passionné par les technologies modernes et l\'innovation.',
    stats: {
      projects: 24,
      contributions: 156,
      followers: 892
    },
    badges: ['Pro', 'Verified', 'Top Contributor'],
    socialLinks: {
      twitter: '@johndoe',
      linkedin: 'john-doe',
      github: 'johndoe'
    }
  };

  const userData = { ...defaultUser, ...user };

  const cardStyles = {
    padding: '24px',
    position: 'relative',
    overflow: 'hidden',
    background: variant === 'premium' 
      ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
    border: variant === 'premium' 
      ? '1px solid rgba(255, 215, 0, 0.3)'
      : '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px'
  };

  const avatarStyles = {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    background: userData.avatar 
      ? `url(${userData.avatar})` 
      : 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    color: 'white',
    fontWeight: '600',
    position: 'relative',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
  };

  const statusIndicatorStyles = {
    position: 'absolute',
    bottom: '2px',
    right: '2px',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: userData.status === 'online' ? '#10b981' : 
                    userData.status === 'away' ? '#f59e0b' : '#6b7280',
    border: '2px solid var(--color-background)',
    boxShadow: `0 0 10px ${userData.status === 'online' ? '#10b981' : 
                           userData.status === 'away' ? '#f59e0b' : '#6b7280'}60`
  };

  const infoStyles = {
    flex: 1
  };

  const nameStyles = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const emailStyles = {
    fontSize: '0.875rem',
    color: 'var(--color-text)',
    opacity: 0.7,
    marginBottom: '8px'
  };

  const roleStyles = {
    fontSize: '0.8125rem',
    fontWeight: '500',
    color: 'var(--color-primary)',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    padding: '4px 8px',
    borderRadius: '8px',
    display: 'inline-block',
    border: '1px solid rgba(99, 102, 241, 0.2)'
  };

  const statsStyles = {
    display: 'flex',
    gap: '24px',
    marginBottom: '16px',
    padding: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.05)'
  };

  const statItemStyles = {
    textAlign: 'center',
    flex: 1
  };

  const statValueStyles = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--color-text)',
    marginBottom: '2px'
  };

  const statLabelStyles = {
    fontSize: '0.75rem',
    color: 'var(--color-text)',
    opacity: 0.6,
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const badgesStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '16px'
  };

  const bioStyles = {
    fontSize: '0.875rem',
    color: 'var(--color-text)',
    opacity: 0.8,
    lineHeight: '1.5',
    marginBottom: '16px'
  };

  const actionsStyles = {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  };

  const expandedContentStyles = {
    marginTop: '16px',
    padding: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.05)'
  };

  const socialLinksStyles = {
    display: 'flex',
    gap: '12px',
    marginTop: '12px'
  };

  const socialLinkStyles = {
    padding: '8px 12px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: 'var(--color-text)',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'all 0.2s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const premiumBadgeStyles = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'linear-gradient(135deg, #ffd700 0%, #ffed4a 100%)',
    color: '#000',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '600',
    boxShadow: '0 2px 8px rgba(255, 215, 0, 0.4)'
  };

  const handleCardHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  const handleSocialLinkHover = (e) => {
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    e.target.style.transform = 'translateY(-2px)';
  };

  const handleSocialLinkLeave = (e) => {
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    e.target.style.transform = 'translateY(0)';
  };

  return (
    <GlassCard 
      style={cardStyles} 
      className={`user-profile-card ${className}`}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
      hover={false}
    >
      {variant === 'premium' && (
        <div style={premiumBadgeStyles}>
          ✨ Premium
        </div>
      )}

      <div style={headerStyles}>
        <div style={avatarStyles}>
          <div style={statusIndicatorStyles} />
          {!userData.avatar && userData.name.charAt(0).toUpperCase()}
        </div>
        
        <div style={infoStyles}>
          <div style={nameStyles}>
            {userData.name}
            {userData.verified && <span style={{ color: '#10b981' }}>✓</span>}
          </div>
          <div style={emailStyles}>{userData.email}</div>
          <div style={roleStyles}>{userData.role}</div>
        </div>
      </div>

      {showStats && (
        <div style={statsStyles}>
          <div style={statItemStyles}>
            <div style={statValueStyles}>{userData.stats.projects}</div>
            <div style={statLabelStyles}>Projets</div>
          </div>
          <div style={statItemStyles}>
            <div style={statValueStyles}>{userData.stats.contributions}</div>
            <div style={statLabelStyles}>Contributions</div>
          </div>
          <div style={statItemStyles}>
            <div style={statValueStyles}>{userData.stats.followers}</div>
            <div style={statLabelStyles}>Followers</div>
          </div>
        </div>
      )}

      {showBadges && userData.badges && (
        <div style={badgesStyles}>
          {userData.badges.map((badge, index) => (
            <Badge 
              key={index} 
              variant={badge === 'Pro' ? 'success' : badge === 'Verified' ? 'info' : 'default'}
              size="sm"
            >
              {badge}
            </Badge>
          ))}
        </div>
      )}

      {userData.bio && (
        <div style={bioStyles}>{userData.bio}</div>
      )}

      <div style={actionsStyles}>
        <GlassButton 
          size="sm" 
          variant="primary"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Moins d\'infos' : 'Plus d\'infos'}
        </GlassButton>
        
        {actions.map((action, index) => (
          <GlassButton
            key={index}
            size="sm"
            variant="secondary"
            onClick={action.onClick}
          >
            {action.label}
          </GlassButton>
        ))}
      </div>

      {isExpanded && (
        <div style={expandedContentStyles}>
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: 'var(--color-text)', fontSize: '0.875rem' }}>
              Membre depuis: 
            </strong>
            <span style={{ color: 'var(--color-text)', opacity: 0.8, fontSize: '0.875rem', marginLeft: '8px' }}>
              {new Date(userData.joinDate).toLocaleDateString('fr-FR')}
            </span>
          </div>
          
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: 'var(--color-text)', fontSize: '0.875rem' }}>
              Localisation: 
            </strong>
            <span style={{ color: 'var(--color-text)', opacity: 0.8, fontSize: '0.875rem', marginLeft: '8px' }}>
              {userData.location}
            </span>
          </div>

          <div style={socialLinksStyles}>
            {userData.socialLinks.twitter && (
              <a 
                href={`https://twitter.com/${userData.socialLinks.twitter}`}
                style={socialLinkStyles}
                onMouseEnter={handleSocialLinkHover}
                onMouseLeave={handleSocialLinkLeave}
              >
                🐦 Twitter
              </a>
            )}
            {userData.socialLinks.linkedin && (
              <a 
                href={`https://linkedin.com/in/${userData.socialLinks.linkedin}`}
                style={socialLinkStyles}
                onMouseEnter={handleSocialLinkHover}
                onMouseLeave={handleSocialLinkLeave}
              >
                💼 LinkedIn
              </a>
            )}
            {userData.socialLinks.github && (
              <a 
                href={`https://github.com/${userData.socialLinks.github}`}
                style={socialLinkStyles}
                onMouseEnter={handleSocialLinkHover}
                onMouseLeave={handleSocialLinkLeave}
              >
                🐙 GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </GlassCard>
  );
};