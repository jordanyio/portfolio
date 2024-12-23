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
    gap: isMobile ? '1rem' : '2rem'
  },
  card: {
    backgroundColor: theme.card,
    borderRadius: isMobile ? '10px' : '12px',
    padding: isMobile ? '1.5rem' : '2rem',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  primaryCard: {
    border: `2px solid ${theme.accent}22`
  },
  iconContainer: {
    width: isMobile ? '40px' : '50px',
    height: isMobile ? '40px' : '50px',
    borderRadius: isMobile ? '8px' : '10px',
    backgroundColor: `${theme.accent}11`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: isMobile ? '1rem' : '1.5rem'
  },
  cardTitle: {
    fontSize: isMobile ? '1.1rem' : '1.25rem',
    fontWeight: 'bold',
    marginBottom: isMobile ? '0.75rem' : '1rem',
    color: theme.text
  },
  cardDescription: {
    color: theme.text,
    opacity: 0.8,
    lineHeight: 1.6,
    flex: 1,
    fontSize: isMobile ? '0.95rem' : '1rem'
  },
  decorSquare: {
    position: 'absolute',
    bottom: isMobile ? '-15px' : '-20px',
    right: isMobile ? '-15px' : '-20px',
    width: isMobile ? '80px' : '100px',
    height: isMobile ? '80px' : '100px',
    backgroundColor: `${theme.accent}05`,
    transform: 'rotate(15deg)',
    borderRadius: isMobile ? '8px' : '10px'
  }
});