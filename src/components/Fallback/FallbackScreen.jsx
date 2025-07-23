import React from 'react';
import { Box, Typography, Skeleton, useTheme } from '@mui/material';

const LoadingScreen = ({ darkMode }) => {
  // Colors adjusting for dark/light theme
  const backgroundColor = darkMode ? '#121212' : '#fff8a6';
  const textColor = darkMode ? '#fff' : '#333';

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        bgcolor: backgroundColor,
        color: textColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
        overflow: 'hidden',
        zIndex: 1400,
      }}
    >
      {/* Title skeleton */}
      <Skeleton
        variant="text"
        width={240}
        height={48}
        sx={{ mb: 3, bgcolor: darkMode ? 'grey.800' : 'grey.300' }}
      />

      {/* Subtitle skeleton */}
      <Skeleton
        variant="text"
        width={180}
        height={24}
        sx={{ mb: 5, bgcolor: darkMode ? 'grey.800' : 'grey.300' }}
      />

      {/* Content block skeletons */}
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          width: '100%',
          maxWidth: 600,
          justifyContent: 'center',
        }}
      >
        {/* Media skeleton */}
        <Skeleton
          variant="rectangular"
          width={150}
          height={150}
          sx={{ borderRadius: 2, bgcolor: darkMode ? 'grey.800' : 'grey.300' }}
        />

        {/* Text block skeleton */}
        <Box sx={{ flex: 1 }}>
          <Skeleton
            variant="text"
            width="80%"
            height={30}
            sx={{ mb: 2, bgcolor: darkMode ? 'grey.800' : 'grey.300' }}
          />
          <Skeleton
            variant="text"
            width="60%"
            height={24}
            sx={{ mb: 2, bgcolor: darkMode ? 'grey.800' : 'grey.300' }}
          />
          <Skeleton
            variant="text"
            width="90%"
            height={24}
            sx={{ bgcolor: darkMode ? 'grey.800' : 'grey.300' }}
          />
        </Box>
      </Box>

      {/* Optional footer loading text */}
      <Typography
        variant="subtitle1"
        mt={6}
        sx={{
          animation: 'pulse 2.5s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.5 },
          },
        }}
      >
        Loading content, please wait...
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
