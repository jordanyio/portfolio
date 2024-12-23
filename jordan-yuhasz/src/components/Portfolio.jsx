// Portfolio.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Settings } from 'lucide-react';
import { personalInfo, workHistory, languages, projects, themes } from '../data/data';
import { getThemeStyles } from '../data/themeStyles';
import './Portfolio.css';

import MobileNavbar from './Mobile/MobileNavbar';
import ChatWindow from './Chat/ChatWindow';

import AboutMe from './AboutMe/AboutMe';
import Services from './Services/Services';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';
import Work from './Work/Work';
import Blog from './Blog/Blog';
import Home from './Home/Home';

const Portfolio = () => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef(null);
  
  const theme = themes[currentTheme];
  const styles = getThemeStyles(theme);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home theme={theme} setActiveSection={setActiveSection}/>;
      case 'about':
        return <AboutMe theme={theme}/>;
      case 'services':
        return <Services theme={theme} />;
      case 'skills':
        return <Skills theme={theme}/>;
      case 'experience':
        return <Experience theme={theme}/>;
      case 'work':
        return <Work theme={theme}/>;
      case 'blog':
        return <Blog theme={theme}/>;
      case 'contact':
        return <Contact theme={theme}/>;
      default:
        return (
          <div className="content-section">
            <p>Select a section from the menu</p>
          </div>
        );
    }
  };

  return (
    <div style={styles.portfolio}>
      {/* Mobile Navigation */}
      <MobileNavbar 
        theme={theme}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        themes={themes}
      />
  
      {/* Desktop Sidebar */}
      <aside style={styles.leftSidebar} className="desktop-sidebar">
        <div style={styles.profileSection}>
          <img
            src={personalInfo.profilePicUrl}
            alt="Profile"
            style={styles.profileImage}
          />
          <h1 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '4px' }}>{personalInfo.name}</h1>
          <p style={{ fontSize: '0.875rem', opacity: 0.75 }}>{personalInfo.title}</p>
        </div>
  
        <nav style={styles.navigationSection}>
          {['home', 'about', 'services', 'skills', 'experience', 'work', 'blog', 'contact'].map((section) => (
            <a
              key={section}
              onClick={() => setActiveSection(section)}
              style={{
                ...styles.navLink,
                ...(activeSection === section ? styles.activeNavLink : {})
              }}
            >
              {section.toUpperCase()}
            </a>
          ))}
        </nav>
  
        <div style={styles.settingsSection} ref={settingsRef}>
          <button
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            style={styles.settingsButton}
          >
            <span>Settings</span>
            <Settings size={16} />
          </button>
  
          {isSettingsOpen && (
            <div style={styles.settingsDropup}>
              {Object.keys(themes).map((themeName) => (
                <button
                  key={themeName}
                  onClick={() => {
                    setCurrentTheme(themeName);
                    setIsSettingsOpen(false);
                  }}
                  style={{
                    ...styles.themeOption,
                    backgroundColor: currentTheme === themeName ? `${theme.accent}22` : 'transparent'
                  }}
                >
                  {themeName.charAt(0).toUpperCase() + themeName.slice(1)} Theme
                </button>
              ))}
            </div>
          )}
        </div>
      </aside>
  
      <main style={styles.mainContent} className="main-content">
        {renderContent()}
      </main>
  
      <ChatWindow theme={theme} />
    </div>
  );
};

export default Portfolio;