// About.js
import React from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import IdCard from "../components/about/IdCard";
import CommandPrompt from "../components/about/CommandPrompt";

import LightRays from "../components/LightRays/LightRays";
import { getAboutStyles } from "../styles/aboutPage/aboutPageStyle";
import IdCardInstagram from "../components/about/IdCard";
import InstagramPostCard from "../components/about/IdCard";

export default function About({ darkMode }) {
  const styles = getAboutStyles(darkMode);
  console.log("DARK MODE IS", darkMode);
 const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <Box sx={{ ...styles.root, marginTop:isMobile? 2 : 0 }}>
      {darkMode && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.2}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
           
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          width: "100%",
          gap: isMobile ? 4 : 8,
          
          padding: { xs: 0, md: 4 },
          
  
        }}
      >
        <Box sx={{  width: { xs: "100%", md: "40%",     }, height: "90%",   zindex: 4, paddingX:3}}>
        <InstagramPostCard darkMode={darkMode} />
        </Box>
        <Box
          sx={{
            width:  { xs: "100%", md: "60%" },
            zIndex: 3,
            height: "90%",
           
          
          }}
        >
          <CommandPrompt darkMode={darkMode} />
        </Box>
      </Box>
    </Box>
  );
}
