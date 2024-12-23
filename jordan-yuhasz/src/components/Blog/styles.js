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
  featuredGrid: {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '1rem' : '2rem',
    marginBottom: isMobile ? '1.5rem' : '2rem'
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
    border: `1px solid ${theme.accent}11`,
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: `0 4px 12px ${theme.accent}11`
    }
  },
  featuredCard: {
    gridColumn: isMobile ? 'span 1' : 'span 2',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '1rem' : '2rem',
    padding: '0',
    border: `2px solid ${theme.accent}22`
  },
  cardImage: {
    backgroundColor: `${theme.accent}11`,
    borderRadius: isMobile ? '6px' : '8px',
    aspectRatio: '16/9',
    marginBottom: isMobile ? '1rem' : '1.5rem'
  },
  featuredImage: {
    borderRadius: isMobile ? '10px 10px 0 0' : '12px 0 0 12px',
    height: '100%'
  },
  cardContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  featuredContent: {
    padding: isMobile ? '1.5rem' : '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  cardMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.75rem' : '1rem',
    marginBottom: isMobile ? '0.75rem' : '1rem',
    flexWrap: isMobile ? 'wrap' : 'nowrap'
  },
  category: {
    color: theme.accent,
    fontSize: isMobile ? '0.8rem' : '0.875rem',
    fontWeight: '500'
  },
  date: {
    color: theme.text,
    opacity: 0.6,
    fontSize: isMobile ? '0.8rem' : '0.875rem'
  },
  readTime: {
    color: theme.text,
    opacity: 0.6,
    fontSize: isMobile ? '0.8rem' : '0.875rem'
  },
  cardTitle: {
    fontSize: isMobile ? '1.15rem' : '1.25rem',
    fontWeight: 'bold',
    marginBottom: isMobile ? '0.75rem' : '1rem',
    color: theme.text,
    lineHeight: 1.4
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
    marginTop: 'auto'
  },
  techTag: {
    backgroundColor: `${theme.accent}11`,
    color: theme.accent,
    padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
    borderRadius: '999px',
    fontSize: isMobile ? '0.8rem' : '0.875rem',
    border: `1px solid ${theme.accent}22`
  }
});