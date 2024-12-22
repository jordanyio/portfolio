import React, { useState } from 'react';
import { X } from 'lucide-react';

const Skills = ({ theme }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      name: "Python",
      level: "Advanced",
      description: "I use Python extensively for AI/ML development, data processing, and backend services. Key areas include developing machine learning models with PyTorch and TensorFlow, creating data processing pipelines, and building FastAPI/Django backends.",
      details: [
        "Machine Learning model development with PyTorch & TensorFlow",
        "Data processing and analysis with Pandas & NumPy",
        "API development using FastAPI and Django",
        "Automation scripts and ETL pipelines",
        "Natural Language Processing applications"
      ]
    },
    {
      name: "Go",
      level: "Advanced",
      description: "I leverage Go for building high-performance microservices and backend systems. Particularly focused on developing concurrent applications and scalable web services.",
      details: [
        "Microservices development",
        "High-performance web services",
        "Concurrent application design",
        "REST API development",
        "System utilities and tools"
      ]
    },
    {
      name: "C#",
      level: "Advanced",
      description: "Extensive experience with C# in developing enterprise applications, particularly focusing on .NET Core web applications and services.",
      details: [
        ".NET Core web applications",
        "ASP.NET MVC development",
        "Microservices architecture",
        "Entity Framework Core",
        "Azure service integration"
      ]
    },
    {
      name: "Java",
      level: "Advanced",
      description: "Professional experience with Java in enterprise environments, building robust backend services and applications.",
      details: [
        "Spring Boot applications",
        "Enterprise service development",
        "RESTful API design",
        "Microservices architecture",
        "JUnit testing and CI/CD"
      ]
    },
    {
      name: "JavaScript",
      level: "Expert",
      description: "Expert-level JavaScript development across the full stack, with particular focus on modern frameworks and libraries.",
      details: [
        "Modern ES6+ features",
        "React and Vue.js development",
        "Node.js backend services",
        "TypeScript applications",
        "Frontend performance optimization"
      ]
    },
    {
      name: "React",
      level: "Expert",
      description: "Deep expertise in React ecosystem, building complex user interfaces and state management systems.",
      details: [
        "Complex UI development",
        "Redux state management",
        "React Hooks and Context API",
        "Performance optimization",
        "Component library development"
      ]
    },
    {
      name: "Kendo",
      level: "Expert",
      description: "Expert in Kendo UI development, creating sophisticated enterprise-grade web applications.",
      details: [
        "Complex data grid implementations",
        "Custom component development",
        "Theme customization",
        "Performance optimization",
        "Enterprise UI patterns"
      ]
    },
    {
      name: "Azure",
      level: "Advanced",
      description: "Advanced knowledge of Azure cloud services, focusing on cloud-native applications and DevOps practices.",
      details: [
        "Azure Functions and App Services",
        "Cloud architecture design",
        "Azure DevOps pipelines",
        "Cognitive Services integration",
        "Azure AD and security"
      ]
    },
    {
      name: "Node.js",
      level: "Advanced",
      description: "Advanced Node.js development for backend services and API development.",
      details: [
        "Express.js applications",
        "REST API development",
        "Real-time applications with Socket.io",
        "MongoDB integration",
        "Performance optimization"
      ]
    },
    {
      name: "SQL",
      level: "Intermediate",
      description: "Strong foundation in SQL database design and optimization.",
      details: [
        "Database design and modeling",
        "Query optimization",
        "Stored procedures",
        "Data migration",
        "Performance tuning"
      ]
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: '1rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '1.5rem'
    },
    skillCard: {
      backgroundColor: theme.card,
      borderRadius: '12px',
      padding: '1.5rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      border: `1px solid ${theme.accent}22`
    },
    skillName: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      color: theme.text
    },
    skillLevel: {
      color: theme.accent,
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '2rem'
    },
    modalContent: {
      backgroundColor: theme.card,
      borderRadius: '12px',
      padding: '2rem',
      maxWidth: '600px',
      width: '100%',
      position: 'relative',
      maxHeight: '80vh',
      overflow: 'auto'
    },
    closeButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: theme.text,
      padding: '0.5rem'
    },
    modalTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      color: theme.text
    },
    modalLevel: {
      color: theme.accent,
      fontSize: '1rem',
      marginBottom: '1.5rem'
    },
    description: {
      marginBottom: '1.5rem',
      lineHeight: '1.6',
      color: theme.text
    },
    detailsList: {
      listStyle: 'none',
      padding: 0
    },
    detailItem: {
      padding: '0.5rem 0',
      color: theme.text,
      opacity: 0.9,
      display: 'flex',
      alignItems: 'center',
      '&::before': {
        content: '"•"',
        color: theme.accent,
        marginRight: '0.5rem'
      }
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.title}>Skills & Expertise</h2>
      </header>

      <div style={styles.grid}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={styles.skillCard}
            className="skill-card"
            onClick={() => setSelectedSkill(skill)}
          >
            <h3 style={styles.skillName}>{skill.name}</h3>
            <p style={styles.skillLevel}>{skill.level}</p>
          </div>
        ))}
      </div>

      {selectedSkill && (
        <div style={styles.modal} onClick={() => setSelectedSkill(null)}>
          <div 
            style={styles.modalContent} 
            onClick={(e) => e.stopPropagation()}
            className="modal-content"
          >
            <button
              style={styles.closeButton}
              onClick={() => setSelectedSkill(null)}
            >
              <X size={24} />
            </button>

            <h3 style={styles.modalTitle}>{selectedSkill.name}</h3>
            <p style={styles.modalLevel}>{selectedSkill.level}</p>
            
            <p style={styles.description}>
              {selectedSkill.description}
            </p>

            <ul style={styles.detailsList}>
              {selectedSkill.details.map((detail, index) => (
                <li key={index} style={styles.detailItem}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;