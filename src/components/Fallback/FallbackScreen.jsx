// import React from 'react';
// import { Box, Typography, Skeleton, CircularProgress } from '@mui/material';

// const LoadingScreen = ({ darkMode }) => {
//   // Colors adjusting for dark/light theme
//   const backgroundColor = darkMode ? '#0f0f0f' : '#ffffff';
//   const textColor = darkMode ? '#f1f1f1' : '#202020';
//   const skeletonBg = darkMode ? 'grey.900' : 'grey.200';

//   return (
//     <Box
//       sx={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         height: '100vh',
//         width: '100vw',
//         bgcolor: backgroundColor,
//         color: textColor,
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         p: 4,
//         overflow: 'hidden',
//         zIndex: 1400,
//       }}
//     >
//       {/* Simulated top bar like YouTube */}
//       <Box
//         sx={{
//           width: '100%',
//           height: 56,
//           display: 'flex',
//           alignItems: 'center',
//           px: 2,
//           borderBottom: `1px solid ${darkMode ? '#303030' : '#e0e0e0'}`,
//         }}
//       >
//         {/* Fake logo placeholder */}
//         <Skeleton variant="rectangular" width={90} height={28} sx={{ bgcolor: skeletonBg, borderRadius: 1 }} />
//       </Box>

//       {/* Content area like YouTube home loading */}
//       <Box
//         sx={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
//           gap: 3,
//           mt: 4,
//           width: '100%',
//           maxWidth: 1200,
//         }}
//       >
//         {[...Array(6)].map((_, i) => (
//           <Box key={i}>
//             {/* Video thumbnail */}
//             <Skeleton
//               variant="rectangular"
//               width="100%"
//               height={160}
//               sx={{ borderRadius: 2, bgcolor: skeletonBg, mb: 1 }}
//             />
//             {/* Video title */}
//             <Skeleton
//               variant="text"
//               width="80%"
//               height={28}
//               sx={{ bgcolor: skeletonBg, mb: 1 }}
//             />
//             {/* Channel name */}
//             <Skeleton
//               variant="text"
//               width="50%"
//               height={20}
//               sx={{ bgcolor: skeletonBg }}
//             />
//           </Box>
//         ))}
//       </Box>

//       {/* Center circular loader */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           transform: 'translateY(-50%)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <CircularProgress
//           thickness={4}
//           size={48}
//           sx={{ color: darkMode ? '#f1f1f1' : '#202020', mb: 2 }}
//         />
//         <Typography
//           variant="subtitle1"
//           sx={{
//             fontWeight: 500,
//             opacity: 0.7,
//             animation: 'pulse 2s ease-in-out infinite',
//             '@keyframes pulse': {
//               '0%, 100%': { opacity: 0.7 },
//               '50%': { opacity: 0.3 },
//             },
//           }}
//         >
//           Loading content...
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default LoadingScreen;
import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const neonColor = '#00fff1';

const MinimalFuturisticLoader = ({ darkMode }) => (
  <Box
    sx={{
      position: 'fixed',
      inset: 0,
      bgcolor: darkMode ? '#16181a' : '#f5f7fa',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1500,
      minHeight: '100vh',
    }}
  >
    {/* Minimal glass circle with neon glow */}
    <Box
      sx={{
        width: 80,
        height: 80,
        borderRadius: '50%',
        bgcolor: darkMode ? 'rgba(22,36,37,0.7)' : 'rgba(255,255,255,0.7)',
        boxShadow: `0 0 16px 1px ${neonColor}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 3,
        backdropFilter: 'blur(8px)',
      }}
    >
      <CircularProgress
        size={48}
        thickness={4}
        sx={{
          color: neonColor,
          animation: 'spin 1.3s linear infinite',
          filter: `drop-shadow(0 0 4px ${neonColor})`,
        }}
      />
    </Box>
    <Typography
      variant="subtitle1"
      sx={{
        mt: 1,
        letterSpacing: 1,
        color: darkMode ? '#CFF' : '#2c3f44',
        opacity: 0.8,
        fontFamily: `'Montserrat', 'Arial', sans-serif`,
        fontWeight: 500,
      }}
    >
      Loading...
    </Typography>
    {/* Keyframes */}
    <style>{`
      @keyframes spin { 100% { transform: rotate(360deg);} }
    `}</style>
  </Box>
);

export default MinimalFuturisticLoader;
