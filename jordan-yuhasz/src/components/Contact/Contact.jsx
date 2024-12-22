import React, { useState } from 'react';
import { Mail, Phone, Send, Linkedin, Github } from 'lucide-react';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      color: theme.text,
      opacity: 0.8,
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.6
    },
    content: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
      alignItems: 'start'
    },
    contactInfo: {
      backgroundColor: theme.card,
      padding: '2rem',
      borderRadius: '12px',
      border: `1px solid ${theme.accent}22`
    },
    contactTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: theme.text
    },
    contactMethod: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      marginBottom: '1rem',
      backgroundColor: `${theme.accent}11`,
      borderRadius: '8px',
      color: theme.text,
      textDecoration: 'none',
      transition: 'transform 0.2s ease'
    },
    contactIcon: {
      backgroundColor: theme.accent,
      padding: '0.5rem',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    form: {
      backgroundColor: theme.card,
      padding: '2rem',
      borderRadius: '12px',
      border: `1px solid ${theme.accent}22`
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: theme.text,
      fontSize: '0.9rem'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '6px',
      border: `1px solid ${theme.accent}33`,
      backgroundColor: theme.background,
      color: theme.text,
      fontSize: '1rem'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '6px',
      border: `1px solid ${theme.accent}33`,
      backgroundColor: theme.background,
      color: theme.text,
      fontSize: '1rem',
      minHeight: '150px',
      resize: 'vertical'
    },
    submitButton: {
      backgroundColor: theme.accent,
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '6px',
      border: 'none',
      fontSize: '1rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'opacity 0.2s ease'
    },
    success: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '1rem',
      borderRadius: '6px',
      marginTop: '1rem',
      textAlign: 'center'
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      marginTop: '1.5rem'
    },
    socialLink: {
      padding: '0.75rem',
      borderRadius: '8px',
      backgroundColor: `${theme.accent}11`,
      color: theme.text,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.2s ease'
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.title}>Get in Touch</h2>
        <p style={styles.subtitle}>
          Have a question or want to work together? Feel free to reach out through any of 
          these channels or fill out the contact form below.
        </p>
      </header>

      <div style={styles.content}>
        <div style={styles.contactInfo}>
          <h3 style={styles.contactTitle}>Contact Information</h3>
          
          <a href="mailto:your.email@example.com" style={styles.contactMethod} className="contact-method">
            <span style={styles.contactIcon}>
              <Mail size={20} color="white" />
            </span>
            <span>your.email@example.com</span>
          </a>

          <a href="tel:+1234567890" style={styles.contactMethod} className="contact-method">
            <span style={styles.contactIcon}>
              <Phone size={20} color="white" />
            </span>
            <span>+1 (234) 567-890</span>
          </a>

          <div style={styles.socialLinks}>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.socialLink}
              className="social-link"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.socialLink}
              className="social-link"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        <form style={styles.form} onSubmit={handleSubmit}>
          <h3 style={styles.contactTitle}>Send a Message</h3>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>

          <button type="submit" style={styles.submitButton} className="submit-button">
            <Send size={20} />
            Send Message
          </button>

          {isSubmitted && (
            <div style={styles.success}>
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;