import React from 'react';
import { personalInfo } from '../../data/data';

const AboutMe = ({ theme }) => {
  const styles = {
    container: {
      display: 'flex',
      gap: '4rem',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem'
    },
    content: {
      flex: '1',
      position: 'relative',
      zIndex: 1
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: theme.text
    },
    description: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: theme.text,
      opacity: 0.9
    },
    highlight: {
      color: theme.accent
    },
    imageContainer: {
      flex: '1',
      position: 'relative',
      minHeight: '600px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    windowFrame: {
      position: 'relative',
      width: '100%',
      height: '100%',
      padding: '20px',
      borderRadius: '12px',
      backgroundColor: theme.card,
      boxShadow: `0 20px 40px ${theme.accent}22`,
      overflow: 'hidden'
    },
    windowInner: {
      position: 'relative',
      width: '100%',
      height: '100%',
      border: `2px solid ${theme.accent}33`,
      borderRadius: '8px',
      overflow: 'hidden'
    },
    decorSquare1: {
      position: 'absolute',
      top: '-50px',
      right: '-50px',
      width: '200px',
      height: '200px',
      backgroundColor: `${theme.accent}11`,
      transform: 'rotate(15deg)',
      borderRadius: '20px'
    },
    decorSquare2: {
      position: 'absolute',
      bottom: '-30px',
      left: '-30px',
      width: '150px',
      height: '150px',
      backgroundColor: `${theme.accent}08`,
      transform: 'rotate(-10deg)',
      borderRadius: '15px'
    },
    imageWrapper: {
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '6px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.title}>About <span style={styles.highlight}>Me</span></h2>
        <p style={styles.description}>
          {personalInfo.about}
        </p>
      </div>
      
      <div style={styles.imageContainer}>
        <div style={styles.windowFrame}>
          <div style={styles.decorSquare1} />
          <div style={styles.decorSquare2} />
          <div style={styles.windowInner}>
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
    </div>
  );
};

export default AboutMe;