// homepagestyle.js

import { alignItems, border, display, height, justifyContent, maxHeight, padding, width } from "@mui/system";
import { colorPalette } from "./colorPallet/colors";
import { transform } from "framer-motion";

export const getHomePageStyles = (darkMode) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 64px)', 
    backgroundColor: darkMode ?'rgb(0, 0, 0)' : '#fff8a6',
    color: darkMode ? '#fff' : '#000',
    transition: 'all 0.5s ease',
    justifyContent: 'center',
    
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
