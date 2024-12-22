// Portfolio.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Settings } from 'lucide-react';
import { personalInfo, workHistory, languages, projects, themes } from '../data/data';
import { getThemeStyles } from '../data/themeStyles';
import './Portfolio.css';

import ChatWindow from './ChatWindow';
import AboutMe from './AboutMe/AboutMe';
import Services from './Services/Services';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';

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
        return (
          <div className="content-section">
            <h1 className="text-4xl font-bold mb-4">Welcome</h1>
            <p className="text-lg">{personalInfo.intro}</p>
          </div>
        );
        
      case 'about':
        return (
          <AboutMe theme={theme}/>
        );

      case 'services':
        return (
            <Services theme={theme} />
        );

      case 'skills':
        return (
          <Skills theme={theme}/>
        );

      case 'experience':
        return (
          <Experience theme={theme}/>
        );

      case 'work':
        return (
          <div className="content-section">
            <h2 className="text-4xl font-bold mb-6">Work</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
            <Contact theme={theme}/>
        )

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
      <aside style={styles.leftSidebar}>
        <div style={styles.profileSection}>
          <img
            src={personalInfo.profilePicUrl}
            alt="Profile"
            style={styles.profileImage}
          />
          <h1 className="text-base font-medium mb-1">{personalInfo.name}</h1>
          <p className="text-sm opacity-75">{personalInfo.title}</p>
        </div>

        <nav style={styles.navigationSection}>
          {['home', 'about', 'services', 'skills', 'education', 'experience', 'work', 'blog', 'contact'].map((section) => (
            <a
              key={section}
              onClick={() => setActiveSection(section)}
              style={{
                ...styles.navLink,
                ...(activeSection === section ? styles.activeNavLink : {})
              }}
              className="hover:opacity-100"
            >
              {section.toUpperCase()}
            </a>
          ))}
        </nav>

        <div style={styles.settingsSection} ref={settingsRef}>
          <button
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            style={styles.settingsButton}
            className="hover:opacity-100"
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
                  className="hover:opacity-100"
                >
                  {themeName.charAt(0).toUpperCase() + themeName.slice(1)} Theme
                </button>
              ))}
            </div>
          )}
        </div>
      </aside>

      <main style={styles.mainContent}>
        {renderContent()}
      </main>

      <ChatWindow theme={theme} />
    </div>
  );
};

export default Portfolio;