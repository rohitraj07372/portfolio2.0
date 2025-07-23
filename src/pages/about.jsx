// About.js
import React from "react";
import { Box } from "@mui/material";
import IdCard from "../components/about/IdCard";
import CommandPrompt from "../components/about/CommandPrompt";
 
import { getAboutStyles } from "../styles/aboutPage/aboutPageStyle";

export default function About({ darkMode, colorPallet }) {
  const styles = getAboutStyles(darkMode, colorPallet);

  return (
    <Box style={styles.root}>
      <IdCard darkMode={darkMode} colorPallet={colorPallet} />
      <Box style={styles.terminalSection}>
        <CommandPrompt darkMode={darkMode} colorPallet={colorPallet} />
      </Box>
    </Box>
  );
};
