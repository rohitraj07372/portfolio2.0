// About.js
import React from "react";
import { Box, Grid } from "@mui/material";
import IdCard from "../components/about/IdCard";
import CommandPrompt from "../components/about/CommandPrompt";
 
import { getAboutStyles } from "../styles/aboutPage/aboutPageStyle";

export default function About({ darkMode, colorPallet }) {
  const styles = getAboutStyles(darkMode, colorPallet);

  return (
    
      <Box sx={styles.root}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
           <Grid size={{ xs: 12, md: 4 }}  >
            <IdCard darkMode={darkMode} />
          </Grid>
          <Grid size={{xs: 12, md:8}} sx={{display:'flex', justifyContent:"center", alignItems:'center', height:'20rem'}}    >
            <CommandPrompt darkMode={darkMode} />
          </Grid>
         
        </Grid>
      </Box>
  
  );
};
