import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { getStyles } from './styles';

const Home = ({ theme, setActiveSection }) => {
  const roles = [
    'Software Engineer',
    'Website Developer',
    'Data Scientist',
    'Consultant',
    'Freelancer',
    'AI/ML Engineer',
    'Problem Solver',
    'Web Servicer'
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => 
          prevIndex === roles.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 500);
      
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const styles = getStyles(theme, isMobile);

  const handlePortfolioClick = () => {
    setActiveSection('work');  // This will switch to the Work section
  };

  const ImageComponent = () => (
    <div style={styles.imageContainer}>
      <div style={styles.imageWrapper}>
        <img
          src="/JordanYuhasz-removebg-preview.png"
          alt="Jordan Yuhasz"
          style={styles.image}
        />
      </div>
    </div>
  );

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.backgroundEffect} />
      <div style={styles.container}>
        {!isMobile && <ImageComponent />}
        <div style={styles.textSection}>
          <h1 style={styles.title}>
            I am a
          </h1>
          <div style={{
            ...styles.roleTitle,
            opacity: isVisible ? 1 : 0
          }}>
            {roles[currentRoleIndex]}
          </div>
          
          {isMobile && <ImageComponent />}
          
          <p style={styles.description}>
            Specializing in web development and applied AI/ML applications. Building 
            enterprise-grade solutions with modern technologies and best practices.
          </p>
          <button 
            onClick={handlePortfolioClick}
            style={styles.button}
          >
            View Portfolio
            <ArrowRight size={isMobile ? 18 : 20} style={styles.buttonIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;