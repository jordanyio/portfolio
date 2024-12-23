export const getStyles = (theme, isMobile = window.innerWidth < 1024) => ({
    pageWrapper: {
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: theme.background
    },
    backgroundEffect: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: isMobile ? '100%' : '60%',
      height: '100%',
      backgroundImage: 'url(/detroit.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.1,
      maskImage: 'linear-gradient(to left, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
      WebkitMaskImage: 'linear-gradient(to left, rgba(0, 0, 0, 0.99) 0%, rgba(0, 0, 0, 0) 100%)',
      zIndex: 1
    },
    container: {
      position: 'relative',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '1rem' : '2rem',
      minHeight: 'calc(100vh - 4rem)',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: isMobile ? 'center' : 'space-between',
      gap: isMobile ? '2rem' : '4rem',
      zIndex: 2
    },
    textSection: {
      flex: '1',
      maxWidth: isMobile ? '100%' : '600px',
      textAlign: isMobile ? 'center' : 'left'
    },
    title: {
      fontSize: isMobile ? '2.5rem' : '3.5rem',
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: '0.5rem'
    },
    roleTitle: {
      fontSize: isMobile ? '2rem' : '3.5rem',
      fontWeight: 'bold',
      color: theme.accent,
      marginBottom: isMobile ? '1.5rem' : '2rem',
      minHeight: isMobile ? '60px' : '84px',
      opacity: 1,
      transition: 'opacity 0.5s ease-in-out'
    },
    imageContainer: {
      maxWidth: isMobile ? '200px' : '450px',
      width: '100%',
      padding: isMobile ? '0.5rem' : '1rem',
      backgroundColor: theme.card,
      borderRadius: '12px',
      border: `1px solid ${theme.accent}22`,
      boxShadow: `0 8px 32px -8px ${theme.accent}33`,
      margin: isMobile ? '0 auto' : '0'
    },
    imageWrapper: {
      position: 'relative',
      borderRadius: '8px',
      overflow: 'hidden',
      border: `1px solid ${theme.accent}33`
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
      borderRadius: '6px'
    },
    description: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      lineHeight: 1.6,
      color: theme.text,
      opacity: 0.9,
      maxWidth: isMobile ? '100%' : '500px',
      marginTop: isMobile ? '1.5rem' : '0',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      textAlign: isMobile ? 'center' : 'left'
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: isMobile ? '0.5rem 1.25rem' : '0.75rem 1.5rem',
      backgroundColor: theme.accent,
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: isMobile ? '0.9rem' : '1rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textDecoration: 'none'
    },
    buttonIcon: {
      transition: 'transform 0.2s ease'
    }
  });