export const getIDCardStyles = (darkMode, colorPalette) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '2rem',
    backgroundColor: darkMode ? '#121212' : '#fafafa',
    color: darkMode ? '#ffffff' : '#000000',
    transition: 'background-color 0.5s ease, color 0.5s ease',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    fontFamily: 'sans-serif',
    color: darkMode ? '#f4b003ff' : '#333',
  },
  scene: {
    borderRadius: '8px',
    boxShadow: darkMode
      ? '0 10px 20px rgba(0, 0, 0, 0.4)'
      : '0 10px 20px rgba(0, 0, 0, 0.1)',
  },
});
