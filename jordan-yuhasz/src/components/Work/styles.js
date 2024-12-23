export const getStyles = (theme, isMobile = window.innerWidth < 1024) => ({
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
    marginBottom: isMobile ? '0.75rem' : '1rem'
  },
  subtitle: {
    fontSize: isMobile ? '1rem' : '1.1rem',
    color: theme.text,
    opacity: 0.8,
    maxWidth: '600px',
    margin: '0 auto',
    padding: isMobile ? '0 0.5rem' : 0
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: isMobile ? '1.5rem' : '2rem'
  },
  card: {
    backgroundColor: theme.card,
    borderRadius: isMobile ? '10px' : '12px',
    padding: isMobile ? '1.5rem' : '2rem',
    transition: 'all 0.2s ease',
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: `1px solid ${theme.accent}11`
  },
  featuredCard: {
    gridColumn: isMobile ? 'span 1' : 'span 3',
    border: `2px solid ${theme.accent}22`
  },
  videoContainer: {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    marginBottom: isMobile ? '1.5rem' : '2rem',
    height: 0,
    overflow: 'hidden',
    borderRadius: isMobile ? '6px' : '8px',
    backgroundColor: theme.background,
    border: `1px solid ${theme.accent}22`
  },
  notebookContainer: {
    marginBottom: isMobile ? '1.5rem' : '2rem',
    borderRadius: isMobile ? '6px' : '8px',
    overflow: 'hidden',
    backgroundColor: theme.background,
    border: `1px solid ${theme.accent}22`,
    height: isMobile ? '400px' : '800px' // Reduced height for mobile
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none'
  },
  cardTitle: {
    fontSize: isMobile ? '1.15rem' : '1.25rem',
    fontWeight: 'bold',
    marginBottom: isMobile ? '0.75rem' : '1rem',
    color: theme.text
  },
  cardDescription: {
    color: theme.text,
    opacity: 0.8,
    lineHeight: 1.6,
    marginBottom: isMobile ? '1rem' : '1.5rem',
    fontSize: isMobile ? '0.95rem' : '1rem'
  },
  techContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: isMobile ? '0.4rem' : '0.5rem',
    marginBottom: isMobile ? '1rem' : '1.5rem'
  },
  techTag: {
    backgroundColor: `${theme.accent}11`,
    color: theme.accent,
    padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
    borderRadius: '999px',
    fontSize: isMobile ? '0.8rem' : '0.875rem',
    border: `1px solid ${theme.accent}22`
  },
  linksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: isMobile ? '0.75rem' : '1rem',
    marginTop: 'auto',
    fontSize: isMobile ? '0.9rem' : '1rem'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: theme.accent,
    textDecoration: 'none',
    transition: 'opacity 0.2s ease',
    opacity: 0.8,
    fontSize: isMobile ? '0.9rem' : '1rem',
    ':hover': {
      opacity: 1
    }
  }
});