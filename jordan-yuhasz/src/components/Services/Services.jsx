import React, { useState, useEffect } from 'react';
import { services } from './data';
import { getStyles } from './styles';

const Services = ({ theme }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = getStyles(theme, isMobile);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.title}>Professional Services</h2>
        <p style={styles.subtitle}>
          Specialized in AI and web development, offering comprehensive technical solutions 
          and digital marketing services for modern business needs.
        </p>
      </header>

      <div style={styles.grid}>
        {services.map((service, index) => (
          <div 
            key={index}
            style={{
              ...styles.card,
              ...(service.primaryService ? styles.primaryCard : {})
            }}
            className="service-card"
          >
            <div style={styles.iconContainer}>
              <service.icon 
                size={isMobile ? 20 : 24} 
                color={theme.accent}
              />
            </div>
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardDescription}>{service.description}</p>
            <div style={styles.decorSquare} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;