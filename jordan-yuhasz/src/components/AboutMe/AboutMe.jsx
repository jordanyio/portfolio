import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/data';
import { getStyles } from './styles';
import './AboutMe.css';

const AboutMe = ({ theme }) => {
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
        <h2 style={styles.title}>About <span style={styles.highlight}>Me</span></h2>
      </header>
      
      <div style={styles.content}>
        <div style={styles.textSection}>
          <p style={styles.paragraph}>
            {personalInfo.about}
          </p>
          <p style={styles.paragraph}>
            Beyond my professional work in software engineering, I have a strong background in athletics. 
            I played ice hockey as a goalie, which taught me valuable lessons about focus, quick decision-making, 
            and performing under pressure. I also represented my school on the golf team, where I developed 
            discipline, precision, and strategic thinking - skills that translate well into my technical work.
          </p>
          <img
            src='/jordanhockey.jpg'
            alt="Jordan Yuhasz"
            style={styles.sideImage}
          />
        </div>
        
        <div style={styles.imageContainer} className="window-frame">
          <div style={styles.decorSquare1} className="decor-square decor-square-1" />
          <div style={styles.decorSquare2} className="decor-square decor-square-2" />
          <div style={styles.imageWrapper}>
            <img
              src='/JordanYuhasz-removebg-preview.png'
              alt="Profile"
              style={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;