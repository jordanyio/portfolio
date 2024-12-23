import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send, Linkedin, Github } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { getStyles } from './styles';
import './Contact.css';

const Contact = ({ theme }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', 
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    const ContactInfo = () => (
    <div style={styles.contactInfo}>
      <h3 style={styles.contactTitle}>Contact Information</h3>
      
      <a href="mailto:JordanYuhaszDev@gmail.com" style={styles.contactMethod} className="contact-method">
        <span style={styles.contactIcon}>
          <Mail size={isMobile ? 18 : 20} color="white" />
        </span>
        <span>JordanYuhaszDev@gmail.com</span>
      </a>

      <a href="tel:+12483182279" style={styles.contactMethod} className="contact-method">
        <span style={styles.contactIcon}>
          <Phone size={isMobile ? 18 : 20} color="white" />
        </span>
        <span>+1 (248) 318-2279</span>
      </a>

      <div style={styles.socialLinks}>
        <a 
          href="https://linkedin.com/in/jordan-yuhasz" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.socialLink}
          className="social-link"
        >
          <Linkedin size={isMobile ? 20 : 24} />
        </a>
        <p style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
          Connect with me on LinkedIn
        </p>
      </div>
    </div>
  );

  const ContactForm = () => (
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
        <label style={styles.label}>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
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
        <label style={styles.label}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
      </div>

      <button 
        type="submit" 
        style={{
          ...styles.submitButton,
          opacity: isSubmitting ? 0.7 : 1,
          cursor: isSubmitting ? 'not-allowed' : 'pointer'
        }} 
        disabled={isSubmitting}
        className="submit-button"
      >
        <Send size={isMobile ? 18 : 20} />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {error && (
        <div style={styles.error} className="error-message">
          {error}
        </div>
      )}

      {isSubmitted && (
        <div style={styles.success} className="success-message">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
    </form>
  );

  return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await addDoc(collection(db, 'contact_messages'), {
        ...formData,
        timestamp: serverTimestamp()
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const styles = getStyles(theme, isMobile);

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
          
          <a href="mailto:JordanYuhaszDev@gmail.com" style={styles.contactMethod} className="contact-method">
            <span style={styles.contactIcon}>
              <Mail size={isMobile ? 18 : 20} color="white" />
            </span>
            <span>JordanYuhaszDev@gmail.com</span>
          </a>

          <a href="tel:+12483182279" style={styles.contactMethod} className="contact-method">
            <span style={styles.contactIcon}>
              <Phone size={isMobile ? 18 : 20} color="white" />
            </span>
            <span>+1 (248) 318-2279</span>
          </a>

          <div style={styles.socialLinks}>
            <a 
              href="https://linkedin.com/in/jordan-yuhasz" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.socialLink}
              className="social-link"
            >
              <Linkedin size={isMobile ? 20 : 24} />
            </a>
            <p style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
              Connect with me on LinkedIn
            </p>
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
            <label style={styles.label}>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
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
            <label style={styles.label}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>

          <button 
            type="submit" 
            style={{
              ...styles.submitButton,
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }} 
            disabled={isSubmitting}
            className="submit-button"
          >
            <Send size={isMobile ? 18 : 20} />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {error && (
            <div style={styles.error} className="error-message">
              {error}
            </div>
          )}

          {isSubmitted && (
            <div style={styles.success} className="success-message">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;