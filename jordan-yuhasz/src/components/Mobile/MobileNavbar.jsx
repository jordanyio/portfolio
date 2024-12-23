// MobileNavbar.jsx
import React, { useState } from 'react';
import { Menu, X, Settings } from 'lucide-react';
import { personalInfo } from '../../data/data';

const MobileNavbar = ({ 
  theme, 
  activeSection, 
  setActiveSection, 
  setCurrentTheme,
  currentTheme,
  themes
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSettingsOpen(false);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
    setIsMenuOpen(false);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div style={{ 
      backgroundColor: theme.card,
      borderBottom: `1px solid ${theme.accent}33`,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      display: 'none' // Hidden by default, shown via media query
    }} className="mobile-navbar">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem',
        height: '64px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <img
            src={personalInfo.profilePicUrl}
            alt="Profile"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <span style={{ color: theme.text }}>{personalInfo.name}</span>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <button
            onClick={toggleSettings}
            style={{ 
              color: theme.text,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            <Settings size={20} />
          </button>
          <button
            onClick={toggleMenu}
            style={{ 
              color: theme.text,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav style={{ 
          backgroundColor: theme.card,
          borderBottom: `1px solid ${theme.accent}33`
        }}>
          {['home', 'about', 'services', 'skills', 'experience', 'work', 'blog', 'contact'].map((section) => (
            <a
              key={section}
              onClick={() => handleNavClick(section)}
              style={{
                display: 'block',
                padding: '12px 16px',
                color: theme.text,
                opacity: activeSection === section ? 1 : 0.8,
                backgroundColor: activeSection === section ? `${theme.accent}22` : 'transparent',
                cursor: 'pointer'
              }}
            >
              {section.toUpperCase()}
            </a>
          ))}
        </nav>
      )}

      {isSettingsOpen && (
        <div style={{ 
          backgroundColor: theme.card,
          border: `1px solid ${theme.accent}33`,
          borderRadius: '4px',
          position: 'absolute',
          top: '64px',
          right: '16px',
          width: '200px'
        }}>
          {Object.keys(themes).map((themeName) => (
            <button
              key={themeName}
              onClick={() => {
                setCurrentTheme(themeName);
                setIsSettingsOpen(false);
              }}
              style={{
                width: '100%',
                padding: '8px 16px',
                textAlign: 'left',
                border: 'none',
                background: currentTheme === themeName ? `${theme.accent}22` : 'transparent',
                color: theme.text,
                cursor: 'pointer'
              }}
            >
              {themeName.charAt(0).toUpperCase() + themeName.slice(1)} Theme
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;