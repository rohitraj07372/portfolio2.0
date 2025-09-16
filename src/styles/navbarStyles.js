export const getNavbarStyles = (darkMode, colorPalette) => ({
  navBar: {
    background : darkMode ?  ` 
    linear-gradient(135deg, #011025ff 0%, #001d3d 60%, #000b1a 100%)` : colorPalette.primary.main,
    color: darkMode ? '#5590ccff' : '#000',
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
    backgroundColor: darkMode ? '#00071dff' : '#f4b003ff',
    boxShadow: 'inset 0 2px 2px rgba(0, 0, 0, 0.7)',
    color: darkMode ? '#2089c5ff' : '#624700ff',
  },
  socialIcons: {
    display: 'flex',
    gap: '12px',
    
  },
  brandText: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
     
    color: darkMode ? '#0777aaff' : '#000',
  },
  profileImg: {
    width: 35,
    height: 35,
   
  }
});
