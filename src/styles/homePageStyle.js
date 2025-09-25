 

export const getHomePageStyles = (darkMode) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 64px)', 
    position: 'relative',
  background: darkMode
  ? ` radial-gradient(ellipse 60% 30% at 70% 15%, rgba(0, 30, 60, 0.25) 0%, transparent 70%),
    radial-gradient(ellipse 50% 20% at 20% 70%, rgba(0, 100, 140, 0.12) 0%, transparent 80%),
    linear-gradient(135deg, #000814 0%, #001d3d 60%, #000b1a 100%)`
  : '#fff8a6',
    color: darkMode ? '#fff' : '#000',
    transition: 'all 0.5s ease',
    justifyContent: 'center',
        overflow: 'hidden',
    
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4rem 4rem',
    position: 'relative',
    overflow: 'hidden',
     
 
     
   
  },
  textContainer: {
    flex: 1,
    zIndex: 3,
    marginBottom: { xs: 4, md: 0 },
  },
  chakra: {
    
    position: 'absolute',
    width: { xs: 300, md: 400 },
    animation: 'rotate 20s linear infinite',
    opacity: 1,
    zIndex: 0,
  },
techOrbit: {
  position:' absolute',
  width: '300px',
  height:' 300px',
 
  transform: 'translate(-50%, -50%)',
  animation: 'rotate 12s linear infinite',
  transformOrigin: 'center',
  

},


 
  techIcon: {
    width: 40,
    height: 40,
   
  
   
    
    
  },
  rotate180: {
    transform: 'rotate(180deg)',
     
  },
  buddha: {
    position: 'relative',
    zIndex: 2,
    width: { xs: 120, md: 170 },
    animation: 'float 4s ease-in-out infinite',
  },
});
