import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { getHomePageStyles } from "../styles/homePageStyle";
import chakra from "../assets/chakra.png";
import buddha from "../assets/buddha.png";
import mongo from "../assets/tech/mongo.png";
import express from "../assets/tech/express.png";
import javascript from "../assets/tech/javascript.png";
import reactLogo from "../assets/tech/react.png";
import node from "../assets/tech/node js.png";
import tailwindcss from "../assets/tech/tailwindcss.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import next from "../assets/tech/next.png";
import sql from "../assets/tech/sql.png";
import { useNavigate } from "react-router-dom";
// import Particles from "../components/particleBackground/Particle";
import LightRays from "../components/LightRays/LightRays";

const Home = ({ darkMode }) => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const styles = getHomePageStyles(darkMode);
  const navigate = useNavigate();
  return (
    <Box sx={{ ...styles.root }}>
      {darkMode && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            width: "100%",
            height: "100%",
          }}
        >
          {/* <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={8}
            speed={0.12}
            particleBaseSize={90}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          /> */}
          
 
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
          ...styles.section,
          flexDirection: isMobile ? "column-reverse" : "row",
          gap: 8,
        }}
      >
        {/* Left Text */}
        <Box sx={styles.textContainer}>
          <Typography variant="h5" sx={{ color: darkMode ? "#ccc" : "#555" }}>
            Hi there! I'm
          </Typography>
          <Typography variant="h3" fontWeight="bold" color="primary">
            ROHIT
          </Typography>
          <Typography variant="h3" fontWeight="bold" color="primary">
            Software Engineer
          </Typography>
          <Typography
            color="primary"
            sx={{ mt: 2, fontSize: 22, fontWeight: "bold" }}
          >
            "Turning clean code and UI magic into full-stack functional
            experiences."
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
            <Button
              onClick={() => {
                navigate("/about");
              }}
              variant="contained"
            >
              Learn More
            </Button>
            <Button variant="contained" color="secondary">
              Resume
            </Button>
          </Box>
        </Box>

        {/* Right Visual */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Chakra (Back Layer) */}
          <Box component="img" src={chakra} alt="chakra" sx={styles.chakra} />

          {/* Tech Logos Diagonal Cross Orbit */}
          <Box sx={styles.techOrbit}>
            <Box
              className="techWrapper"
              style={{ transform: "rotate(0deg) translateY(-180px)" }}
            >
              <img src={mongo} alt="MongoDB" className="techIcon" />
            </Box>
            <Box
              className="techWrapper"
              style={{ transform: "rotate(36deg) translateY(-170px)" }}
            >
              <img src={express} alt="Express" className="techIcon" />
            </Box>
            <Box
              className="techWrapper"
              style={{ transform: "rotate(72deg) translateY(-140px)" }}
            >
              <img src={reactLogo} alt="React" className="techIcon" />
            </Box>
            <Box
              className="techWrapper"
              style={{ transform: "rotate(108deg) translateY(-120px)" }}
            >
              <img src={node} alt="Node.js" className="techIcon" />
            </Box>
            <Box
              className="techWrapper"
              style={{ transform: "rotate(144deg) translateY(-130px)" }}
            >
              <img src={javascript} alt="JavaScript" className="techIcon" />
            </Box>
            <Box
              className="techWrapper"
              style={{ transform: "rotate(180deg) translateY(-120px)" }}
            >
              <img src={tailwindcss} alt="Tailwind CSS" className="techIcon" />
            </Box>
            <Box
              className="techWrapper"
              style={{ transform: "rotate(216deg) translateY(-140px)" }}
            >
              <img src={html} alt="HTML" className="techIcon" />
            </Box>
            <Box
              className="techWrapper"
              style={{ transform: "rotate(252deg) translateY(-160px)" }}
            >
              <img src={css} alt="CSS" className="techIcon" />
            </Box>
            <Box
              className="techWrapper"
              style={{ transform: "rotate(288deg) translateY(-170px)" }}
            >
              <img src={next} alt="Next.js" className="techIcon" />
            </Box>
            <Box
              className="techWrapper"
              style={{ transform: "rotate(324deg) translateY(-180px)" }}
            >
              <img src={sql} alt="SQL" className="techIcon" />
            </Box>
          </Box>

          {/* Buddha (Top Layer) */}
          <Box component="img" src={buddha} alt="buddha" sx={styles.buddha} />
        </Box>
      </Box>

      {/* Animations */}
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
          @keyframes spinCounter {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}


        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }

      @keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

.techWrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}


 
  .techIcon {
  width: 35px;
  height: 35px;
  animation: spinCounter 12s linear infinite;
  pointer-events: none;
  object-fit: cover;
}


 

          
      `}</style>
    </Box>
  );
};

export default Home;
