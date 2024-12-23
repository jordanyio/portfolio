export const getStyles = (theme) => ({
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
  });