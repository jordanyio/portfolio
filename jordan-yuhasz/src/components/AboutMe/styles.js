export const getStyles = (theme, isMobile = window.innerWidth < 1024) => ({
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '1rem' : '2rem'
  },
  header: {
    marginBottom: isMobile ? '2rem' : '3rem',
    textAlign: 'center'
  },
  title: {
    fontSize: isMobile ? '2rem' : '2.5rem',
    fontWeight: 'bold',
    marginBottom: isMobile ? '1rem' : '1.5rem',
    color: theme.text
  },
  highlight: {
    color: theme.accent
  },
  content: {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '2rem' : '4rem',
    alignItems: 'start'
  },
  textSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '1.5rem' : '2rem',
    order: isMobile ? 2 : 1
  },
  paragraph: {
    fontSize: isMobile ? '1rem' : '1.1rem',
    lineHeight: '1.8',
    color: theme.text,
    opacity: 0.9
  },
  imageContainer: {
    position: 'relative',
    borderRadius: '12px',
    backgroundColor: theme.card,
    padding: isMobile ? '1rem' : '1.5rem',
    boxShadow: `0 20px 40px ${theme.accent}22`,
    height: 'fit-content',
    maxWidth: isMobile ? '280px' : 'none',
    margin: isMobile ? '0 auto' : '0',
    order: isMobile ? 1 : 2
  },
  imageWrapper: {
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    border: `2px solid ${theme.accent}33`,
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '6px'
  },
  decorSquare1: {
    position: 'absolute',
    top: isMobile ? '-15px' : '-20px',
    right: isMobile ? '-15px' : '-20px',
    width: isMobile ? '80px' : '100px',
    height: isMobile ? '80px' : '100px',
    backgroundColor: `${theme.accent}11`,
    transform: 'rotate(15deg)',
    borderRadius: isMobile ? '12px' : '15px',
    zIndex: 0
  },
  decorSquare2: {
    position: 'absolute',
    bottom: isMobile ? '-10px' : '-15px',
    left: isMobile ? '-10px' : '-15px',
    width: isMobile ? '60px' : '80px',
    height: isMobile ? '60px' : '80px',
    backgroundColor: `${theme.accent}08`,
    transform: 'rotate(-10deg)',
    borderRadius: isMobile ? '10px' : '12px',
    zIndex: 0
  },
  sideImage: {
    width: isMobile ? '140px' : '180px',
    height: isMobile ? '220px' : '300px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginTop: isMobile ? '1.5rem' : '2rem',
    border: `2px solid ${theme.accent}33`,
    boxShadow: `0 10px 20px ${theme.accent}22`,
    alignSelf: isMobile ? 'center' : 'flex-start'
  }
});