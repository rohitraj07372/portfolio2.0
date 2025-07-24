import React from "react";

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Box from "@mui/material/Box";
import { useState } from "react";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import Butterfly from "./components/Butterfly/Butterfly";
import LoadingScreen from "./components/fallback/FallbackScreen";
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const ContactUs = lazy(() => import("./pages/contactUs"));
const Youtube = lazy(() => import("./pages/youtube"));

const App = () => {
  const getInitialDarkMode = () => {
     
    const saved = sessionStorage.getItem("darkMode");
      if (saved === null) {
    
    return true;
      }
    return saved === "true";
  };

  const [darkMode, setDarkMode] = useState(getInitialDarkMode);
  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newValue = !prev;
      sessionStorage.setItem("darkMode", newValue);
      return newValue;
    });
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      {darkMode && <SplashCursor />}
      <Box sx={{ position: "sticky", top: 0, zIndex: 100 }}>
        <Navbar
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          menuItems={[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Projects", path: "/projects" },
            { label: "Experience", path: "/experience" },
            { label: "Youtube", path: "/youtube" },
            { label: "Contact", path: "/contact" },
          ]}
        />
      </Box>

      <Box>
        <Suspense
          fallback={
            <Box>
              <LoadingScreen darkMode={darkMode} />
            </Box>
          }
        >
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route
              path="/contact"
              element={<ContactUs darkMode={darkMode} />}
            />
            <Route path="/youtube" element={<Youtube />} />
          </Routes>
        </Suspense>
      </Box>
    </Box>
  );
};

export default App;
