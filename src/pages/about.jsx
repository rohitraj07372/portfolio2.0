// About.js
import React from "react";
import { Box, Grid } from "@mui/material";
import IdCard from "../components/about/IdCard";
import CommandPrompt from "../components/about/CommandPrompt";
import Particles from "../components/particleBackground/Particle";

import { getAboutStyles } from "../styles/aboutPage/aboutPageStyle";

export default function About({ darkMode }) {
  const styles = getAboutStyles(darkMode);
  console.log("DARK MODE IS", darkMode);

  return (
    <Box sx={{ ...styles.root }}>
      {darkMode && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
          }}
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={8}
            speed={0.12}
            particleBaseSize={90}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          width: "100%",
      
        }}
      >
        <Box sx={{ width: "40%" }}>
          <IdCard darkMode={darkMode} />
        </Box>
        <Box
          sx={{
            width: "60%",
            zIndex: 3,
            height: "30rem",
           
          
          }}
        >
          <CommandPrompt darkMode={darkMode} />
        </Box>
      </Box>
    </Box>
  );
}
