// styles/contactPage/contactPageStyle.js
export const getContactPageStyles = (darkMode, colorPallet) => ({
  root: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
     minHeight: 'calc(100vh - 63px)',
     
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    px:2,
background: darkMode
  ? `radial-gradient(ellipse 60% 30% at 70% 15%, rgba(0, 0, 0, 0.22) 0%, transparent 70%),
      radial-gradient(ellipse 50% 20% at 20% 70%, rgba(255, 102, 0, 0.16) 0%, transparent 80%),
      linear-gradient(135deg, #09090f 0%, #181829 60%, #1a130b 100%)`
  : '#fff8a6',
    overflow: 'hidden',
    
    transition: 'background 0.4s, color 0.4s',
  },
  formContainer: {
    width: '100%',
    maxWidth: 430,
    bgcolor: darkMode
      ? 'rgba(30, 30, 45, 0.43)'  
      : 'rgba(215, 133, 0, 0.22)' ,
    borderRadius: 5,
    boxShadow: darkMode
      ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      : '0 4px 24px rgba(80,80,80,0.05)',
    p: { xs: 2, sm: 3, md: 4 },
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backdropFilter: darkMode ? 'blur(4px) saturate(180%)' : 'none',
    border: darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid #f4f4cc',
    zIndex: 1,
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    minHeight: 200,
    p: { xs: 1, md: 3 },
  },
  glassTextField: {
    input: {
      color: darkMode ? '#fff' : '#232323',
      fontWeight: 500,
       
      
      backdropFilter: darkMode ? 'blur(4px) saturate(150%)' : 'none',
      padding: '14px',
      boxShadow: darkMode
        ? '0 2px 8px 0 rgba(130, 70, 11, 0.17)'
        : undefined,
    },
    fieldset: {
      
      borderColor: darkMode ? 'rgba(255,255,255,0.18)' : '#eed',
    },
    '& .MuiOutlinedInput-root': {
      
      background: darkMode
        ? 'rgba(255,255,255,0.13)'
        : 'rgba(174, 107, 0, 0.43)',

    }
  }
});
