// themeStyles.js

export const getThemeStyles = (theme) => ({
    portfolio: {
      background: theme.background,
      color: theme.text,
      minHeight: '100vh',
      display: 'flex'
    },
    leftSidebar: {
      width: '20%',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      backgroundColor: theme.card,
      borderRight: `1px solid ${theme.accent}33`,
      display: 'flex',
      flexDirection: 'column',
      padding: '1.5rem 0'
    },
    mainContent: {
      marginLeft: '200px',
      flex: 1,
      padding: '2rem',
      backgroundColor: theme.background
    },
    profileSection: {
      padding: '0 1.5rem',
      marginBottom: '2rem',
      textAlign: 'center'
    },
    profileImage: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      marginBottom: '1rem',
      objectFit: 'cover'
    },
    navigationSection: {
      flex: 1,
      padding: '0 1rem'
    },
    navLink: {
      display: 'block',
      padding: '0.5rem 1rem',
      margin: '0.25rem 0',
      color: theme.text,
      fontSize: '0.9rem',
      opacity: 0.8,
      cursor: 'pointer',
      transition: 'all 0.2s',
      textDecoration: 'none'
    },
    activeNavLink: {
      opacity: 1,
      color: theme.accent
    },
    settingsSection: {
      padding: '0 1.5rem',
      position: 'relative',
      marginTop: 'auto'
    },
    settingsButton: {
      width: '100%',
      padding: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
      border: 'none',
      color: theme.text,
      cursor: 'pointer',
      fontSize: '0.9rem',
      opacity: 0.8
    },
    settingsDropup: {
      position: 'absolute',
      bottom: '100%',
      left: 0,
      right: 0,
      backgroundColor: theme.card,
      border: `1px solid ${theme.accent}33`,
      borderRadius: '0.25rem',
      marginBottom: '0.5rem',
      overflow: 'hidden'
    },
    themeOption: {
      width: '100%',
      padding: '0.5rem 1rem',
      textAlign: 'left',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontSize: '0.9rem',
      color: theme.text
    }
  });