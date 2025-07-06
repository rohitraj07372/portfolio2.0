export const getNavbarStyles = (darkMode, colorPalette) => ({
  navBar: {
    backgroundColor: darkMode ? '#1a1a1a' : colorPalette.primary.main,
    color: darkMode ? '#fff' : '#000',
    transition: 'all 0.5s ease',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menu: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  menuItem: {
    position: 'relative',
    padding: '8px 16px',
    borderRadius: '20px',
    transition: 'background-color 0.3s',
    fontWeight: '600',
    textDecoration: 'none',
    color: 'inherit',
  },
  activeItem: {
    backgroundColor: darkMode ? '#333' : '#d79b00',
    boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.3)',
  },
  socialIcons: {
    display: 'flex',
    gap: '12px',
    
  },
  brandText: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
     
    color: darkMode ? '#fff' : '#000',
  },
  profileImg: {
    width: 35,
    height: 35,
   
  }
});
