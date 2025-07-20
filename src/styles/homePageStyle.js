 

export const getHomePageStyles = (darkMode) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 64px)', 
    position: 'relative',
  background: darkMode
  ? `radial-gradient(ellipse 60% 30% at 70% 15%, rgba(0, 0, 0, 0.22) 0%, transparent 70%),
      radial-gradient(ellipse 50% 20% at 20% 70%, rgba(255, 102, 0, 0.16) 0%, transparent 80%),
      linear-gradient(135deg, #09090f 0%, #181829 60%, #1a130b 100%)`
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
  buddha: {
    position: 'relative',
    zIndex: 2,
    width: { xs: 120, md: 170 },
    animation: 'float 4s ease-in-out infinite',
  },
});
