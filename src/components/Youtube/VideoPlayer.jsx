import React, { useRef, useEffect, useState } from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

function VideoPlayer({ videoId }) {
  const iframeRef = useRef();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  // Fullscreen
  const enterFullScreen = () => {
    if (iframeRef.current.requestFullscreen) {
      iframeRef.current.requestFullscreen();
    }
  };
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  return (
    <Box sx={{ position: 'relative', bgcolor: '#000', borderRadius: 2, overflow: 'hidden', minHeight: 360 }}>
      <iframe
        ref={iframeRef}
        width="100%"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allowFullScreen
        title="YouTube video player"
        style={{ width: '100%', minHeight: 360 }}
      />
      <IconButton onClick={enterFullScreen} sx={{ position: 'absolute', top: 8, right: 8, bgcolor: "#222", color: "#fff" }} size="large">
        <FullscreenIcon />
      </IconButton>
      <Stack direction="row" spacing={2} sx={{ mt: 2, ml: 2 }}>
        <IconButton color={liked ? "primary" : "default"} onClick={() => { setLiked(!liked); setDisliked(false); }}>
          <ThumbUpIcon />
        </IconButton>
        <IconButton color={disliked ? "primary" : "default"} onClick={() => { setDisliked(!disliked); setLiked(false); }}>
          <ThumbDownIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default VideoPlayer;
