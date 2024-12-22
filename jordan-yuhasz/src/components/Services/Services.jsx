import React from 'react';
import { 
  Brain, 
  Code, 
  Laptop, 
  Wrench, 
  MessageCircle, 
  Bot, 
  BarChart,
  Search,
  Globe
} from 'lucide-react';

const Services = ({ theme }) => {
  const services = [
    {
      title: "AI Development",
      description: "Custom AI solution development including LLM integration, tool-calling systems, machine learning models, neural networks, and natural language processing systems. Expertise in building practical AI applications for real-world business needs.",
      icon: Brain,
      primaryService: true
    },
    {
      title: "Web Application Development",
      description: "Full-stack web application development using modern technologies and frameworks. Building scalable, secure, and performant applications with focus on user experience.",
      icon: Code,
      primaryService: true
    },
    {
      title: "Freelance Development",
      description: "Available for freelance projects of any scale. Flexible engagement models to suit your project needs with clear communication and reliable delivery.",
      icon: Laptop,
      primaryService: true
    },
    {
      title: "Website Maintenance & Upgrades",
      description: "Ongoing website maintenance, performance optimization, security updates, and feature additions to keep your web presence current and effective.",
      icon: Wrench
    },
    {
      title: "SEO Services",
      description: "Comprehensive search engine optimization including keyword research, on-page optimization, technical SEO, and content strategy. Improve your website's visibility and organic traffic.",
      icon: Search
    },
    {
      title: "Google Business Profile Management",
      description: "Setup, optimization, and management of your Google Business Profile. Enhance your local presence, manage reviews, and improve visibility in Google search and maps.",
      icon: Globe
    },
    {
      title: "Technical Consultation",
      description: "Expert consultation on web technologies, architecture decisions, and technology stack selection. Help making informed decisions for your digital projects.",
      icon: MessageCircle
    },
    {
      title: "AI Consultation",
      description: "Strategic guidance on AI implementation, model selection, and integration. Help understanding and leveraging AI capabilities for your business needs.",
      icon: Bot
    },
    {
      title: "ML Model Development",
      description: "Custom machine learning model development, training, and deployment. Specialized in developing models that solve specific business problems.",
      icon: BarChart
    },
    
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: '1rem'
    },
    subtitle: {
      fontSize: '1.1rem',
      color: theme.text,
      opacity: 0.8,
      maxWidth: '600px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    card: {
      backgroundColor: theme.card,
      borderRadius: '12px',
      padding: '2rem',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      position: 'relative',
      overflow: 'hidden',
      height: '100%', // Ensure all cards are the same height
      display: 'flex',
      flexDirection: 'column'
    },
    primaryCard: {
      border: `2px solid ${theme.accent}22`
    },
    iconContainer: {
      width: '50px',
      height: '50px',
      borderRadius: '10px',
      backgroundColor: `${theme.accent}11`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: theme.text
    },
    cardDescription: {
      color: theme.text,
      opacity: 0.8,
      lineHeight: 1.6,
      flex: 1 // Allow description to fill remaining space
    },
    decorSquare: {
      position: 'absolute',
      bottom: '-20px',
      right: '-20px',
      width: '100px',
      height: '100px',
      backgroundColor: `${theme.accent}05`,
      transform: 'rotate(15deg)',
      borderRadius: '10px'
    }
  };

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
                size={24} 
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