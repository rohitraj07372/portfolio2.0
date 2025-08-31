import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";

function VideoPlayer({ videoId, mode }) {
  const videoRef = useRef();

  useEffect(() => {
    const iframe = videoRef.current;
    if (!iframe) return;

    // Ambient backlight effect
    iframe.onload = () => {
      const glow = document.getElementById("video-glow");
      glow.style.background = `radial-gradient(circle, rgba(255,255,255,0.15), transparent 80%)`;
    };
  }, [videoId]);

  return (
    <Box sx={{ position: "relative", borderRadius: "10px",

    width: "100%",  }}>
      {/* Ambient glow */}
      <Box
        id="video-glow"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          filter: "blur(60px)",
          opacity: 0.7,
          zIndex: 0,
          borderRadius:2,
          transition: "background 0.5s ease",
        }}
      />
      <iframe
        ref={videoRef}
        width="100%"
        height="420rem"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        borderRadius="10px"
        allowFullScreen
        style={{ position: "relative", zIndex: 1 }}
      />
    </Box>
  );
}

export default VideoPlayer;
