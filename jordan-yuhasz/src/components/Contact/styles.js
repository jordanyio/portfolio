// styles.js
export const getStyles = (theme, isMobile = window.innerWidth < 1024) => ({
  container: {
    maxWidth: isMobile ? '100%' : '1200px',
    margin: '0 auto',
    padding: isMobile ? '1rem' : '2rem',
    width: '100%',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    textAlign: 'center',
    marginBottom: isMobile ? '2rem' : '4rem',
    width: '100%',
    maxWidth: '600px'
  },
  title: {
    fontSize: isMobile ? '2rem' : '2.5rem',
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: isMobile ? '0.75rem' : '1rem'
  },
  subtitle: {
    color: theme.text,
    opacity: 0.8,
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
    fontSize: isMobile ? '0.95rem' : '1rem',
    padding: isMobile ? '0 0.5rem' : 0
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '1.5rem' : '3rem',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px'
  },
  contactInfo: {
    backgroundColor: theme.card,
    padding: isMobile ? '1.5rem' : '2rem',
    borderRadius: isMobile ? '10px' : '12px',
    border: `1px solid ${theme.accent}22`,
    width: '100%'
  },
  contactTitle: {
    fontSize: isMobile ? '1.25rem' : '1.5rem',
    fontWeight: 'bold',
    marginBottom: isMobile ? '1.25rem' : '1.5rem',
    color: theme.text
  },
  contactMethod: {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.75rem' : '1rem',
    padding: isMobile ? '0.75rem' : '1rem',
    marginBottom: isMobile ? '0.75rem' : '1rem',
    backgroundColor: `${theme.accent}11`,
    borderRadius: isMobile ? '6px' : '8px',
    color: theme.text,
    textDecoration: 'none',
    transition: 'transform 0.2s ease',
    width: '100%'
  },
  contactIcon: {
    backgroundColor: theme.accent,
    padding: isMobile ? '0.4rem' : '0.5rem',
    borderRadius: isMobile ? '6px' : '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    backgroundColor: theme.card,
    padding: isMobile ? '1.5rem' : '2rem',
    borderRadius: isMobile ? '10px' : '12px',
    border: `1px solid ${theme.accent}22`,
    width: '100%'
  },
  formGroup: {
    marginBottom: isMobile ? '1.25rem' : '1.5rem',
    width: '100%'
  },
  label: {
    display: 'block',
    marginBottom: isMobile ? '0.4rem' : '0.5rem',
    color: theme.text,
    fontSize: isMobile ? '0.85rem' : '0.9rem'
  },
  input: {
    width: '100%',
    padding: isMobile ? '0.65rem' : '0.75rem',
    borderRadius: isMobile ? '5px' : '6px',
    border: `1px solid ${theme.accent}33`,
    backgroundColor: `${theme.accent}11`,
    color: theme.text,
    fontSize: isMobile ? '0.95rem' : '1rem',
    '::placeholder': {
      color: `${theme.text}80`
    }
  },
  textarea: {
    width: '100%',
    padding: isMobile ? '0.65rem' : '0.75rem',
    borderRadius: isMobile ? '5px' : '6px',
    border: `1px solid ${theme.accent}33`,
    backgroundColor: `${theme.accent}11`,
    color: theme.text,
    fontSize: isMobile ? '0.95rem' : '1rem',
    minHeight: isMobile ? '120px' : '150px',
    resize: 'vertical',
    '::placeholder': {
      color: `${theme.text}80`
    }
  },
  submitButton: {
    backgroundColor: theme.accent,
    color: 'white',
    padding: isMobile ? '0.65rem 1.25rem' : '0.75rem 1.5rem',
    borderRadius: isMobile ? '5px' : '6px',
    border: 'none',
    fontSize: isMobile ? '0.95rem' : '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.4rem' : '0.5rem',
    transition: 'opacity 0.2s ease',
    width: isMobile ? '100%' : 'auto',
    justifyContent: 'center'
  },
  success: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: isMobile ? '0.75rem' : '1rem',
    borderRadius: isMobile ? '5px' : '6px',
    marginTop: isMobile ? '0.75rem' : '1rem',
    textAlign: 'center',
    fontSize: isMobile ? '0.95rem' : '1rem',
    width: '100%'
  },
  error: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: isMobile ? '0.75rem' : '1rem',
    borderRadius: isMobile ? '5px' : '6px',
    marginTop: isMobile ? '0.75rem' : '1rem',
    textAlign: 'center',
    fontSize: isMobile ? '0.95rem' : '1rem',
    width: '100%'
  },
  socialLinks: {
    display: 'flex',
    gap: isMobile ? '0.75rem' : '1rem',
    marginTop: isMobile ? '1.25rem' : '1.5rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  socialLink: {
    padding: isMobile ? '0.65rem' : '0.75rem',
    borderRadius: isMobile ? '6px' : '8px',
    backgroundColor: `${theme.accent}11`,
    color: theme.text,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease'
  }
});