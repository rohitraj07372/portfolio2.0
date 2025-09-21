// import React, { useRef, useEffect } from "react";
// import { Box } from "@mui/material";

// function VideoPlayer({ videoId, darkmode }) {
//   const videoRef = useRef();

//   useEffect(() => {
//     const iframe = videoRef.current;
//     if (!iframe) return;

//     // Ambient backlight effect
//     iframe.onload = () => {
//       const glow = document.getElementById("video-glow");
//       glow.style.background = `radial-gradient(circle, rgba(255,255,255,0.15), transparent 80%)`;
//     };
//   }, [videoId]);

//   return (
//     <Box sx={{ position: "relative", borderRadius: "10px",

//     width: "100%",  }}>
//       {/* Ambient glow */}
//       <Box
//         id="video-glow"
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           filter: "blur(60px)",
//           opacity: 0.7,
//           zIndex: 0,
//           borderRadius:2,
//           transition: "background 0.5s ease",
//         }}
//       />
//       <iframe
//         ref={videoRef}
//         width="100%"
//         height="420rem"
//         src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
//         title="YouTube video player"
//         frameBorder="0"
//         borderRadius="10px"
//         allowFullScreen
//         style={{ position: "relative", zIndex: 1 }}
//       />
//     </Box>
//   );
// }

// export default VideoPlayer;


import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";

function VideoPlayer({ videoId, darkmode }) {
  const videoRef = useRef();

  useEffect(() => {
    const iframe = videoRef.current;
    if (!iframe) return;

    // Ambient backlight effect
    iframe.onload = () => {
      const glow = document.getElementById("video-glow");
      if (glow)
        glow.style.background = `radial-gradient(circle, rgba(255,255,255,0.15), transparent 80%)`;
    };
  }, [videoId]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%", // 16:9 aspect ratio
        borderRadius: 2,
        overflow: "hidden",
        background: "#111",
      }}
    >
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
          borderRadius: 2,
          transition: "background 0.5s ease",
          pointerEvents: "none",
        }}
      />
      <iframe
        ref={videoRef}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
          zIndex: 1,
          borderRadius: "10px",
          background: "#000",
        }}
      />
    </Box>
  );
}

export default VideoPlayer;
