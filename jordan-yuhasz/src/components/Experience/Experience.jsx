import React, { useState, useEffect } from 'react';
import { Calendar, Building2, ChevronRight } from 'lucide-react';

const Experience = ({ theme }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const experiences = [
    {
      title: "Software Engineer",
      company: "Finys",
      period: "July 2024 - Present",
      description: "My current role at Finys includes working on new AI features, maintaining their flagship web application, and managing/leading a project focused on building automation tools for the company.",
      tags: ["AI", "Web Development", "Project Management", "Automation"]
    },
    {
      title: "AI Software Developer",
      company: "United Wholesale Mortgage",
      period: "July 2023 - July 2024",
      description: "At UWM, I was involved in building a very fun project called ChatUWM. This app allowed users at the company to access AI assistants like Chat gpt's 3.5 and 4.0 llm's, without exposing proprietary company data to public sources like OpenAI. We also built a RAG query system, that allowed users to ask domain specific questions about mortgage products and industry questions, where the AI was able to source an answer by essentially reading thousands of Fanny Mae and Freddy Mac documents for the user, in seconds.",
      tags: ["AI Development", "LLMs", "RAG Systems", "Enterprise Software"]
    },
    {
      title: "Research Development Software Engineer",
      company: "Avant-Garde Capital",
      period: "August 2021 - July 2023",
      description: "In my postition at AG Cap, I spent time automating data collection and building trading engines for a firm that was focused on a variety of arbitrage trading strategies in the stock market. I spent lots of time doing data anaylsis, training machine learning models, and building decision making systems.",
      tags: ["Machine Learning", "Data Analysis", "Trading Systems", "Automation"]
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '1rem' : '2rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: isMobile ? '2rem' : '4rem'
    },
    title: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: '1rem'
    },
    timeline: {
      position: 'relative',
      maxWidth: isMobile ? '100%' : '800px',
      margin: '0 auto'
    },
    timelineBar: {
      position: 'absolute',
      left: isMobile ? '20px' : '50%',
      width: '2px',
      height: '100%',
      backgroundColor: `${theme.accent}33`,
      transform: isMobile ? 'none' : 'translateX(-50%)'
    },
    experienceCard: {
      position: 'relative',
      width: '100%',
      marginBottom: isMobile ? '2rem' : '3rem',
      paddingLeft: isMobile ? '40px' : 0,
      opacity: 0,
      animation: 'fadeIn 0.5s ease forwards'
    },
    cardContent: {
      backgroundColor: theme.card,
      borderRadius: isMobile ? '10px' : '12px',
      padding: isMobile ? '1.5rem' : '2rem',
      boxShadow: `0 4px 20px ${theme.accent}11`,
      border: `1px solid ${theme.accent}22`,
      position: 'relative',
      zIndex: 1,
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    companyInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.5rem'
    },
    periodInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: theme.text,
      opacity: 0.7,
      fontSize: isMobile ? '0.85rem' : '0.9rem',
      marginBottom: '1rem'
    },
    jobTitle: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: '0.5rem'
    },
    company: {
      color: theme.accent,
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: '500'
    },
    description: {
      color: theme.text,
      lineHeight: 1.6,
      marginBottom: '1.5rem',
      fontSize: isMobile ? '0.95rem' : '1rem'
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },
    tag: {
      backgroundColor: `${theme.accent}11`,
      color: theme.accent,
      padding: '0.25rem 0.75rem',
      borderRadius: '999px',
      fontSize: isMobile ? '0.8rem' : '0.85rem'
    },
    timelineDot: {
      position: 'absolute',
      left: isMobile ? '16px' : '50%',
      top: isMobile ? '1.5rem' : '2rem',
      width: isMobile ? '0.75rem' : '1rem',
      height: isMobile ? '0.75rem' : '1rem',
      backgroundColor: theme.accent,
      borderRadius: '50%',
      transform: isMobile ? 'none' : 'translateX(-50%)',
      zIndex: 2
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.title}>Experience</h2>
      </header>

      <div style={styles.timeline}>
        <div style={styles.timelineBar} />
        
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            style={{
              ...styles.experienceCard,
              animationDelay: `${index * 0.2}s`
            }}
            className="experience-card"
          >
            <div style={styles.timelineDot} />
            <div style={styles.cardContent}>
              <div style={styles.companyInfo}>
                <Building2 size={isMobile ? 18 : 20} color={theme.accent} />
                <span style={styles.company}>{exp.company}</span>
              </div>
              
              <h3 style={styles.jobTitle}>{exp.title}</h3>
              
              <div style={styles.periodInfo}>
                <Calendar size={isMobile ? 14 : 16} />
                <span>{exp.period}</span>
              </div>

              <p style={styles.description}>{exp.description}</p>

              <div style={styles.tagsContainer}>
                {exp.tags.map((tag, i) => (
                  <span key={i} style={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;