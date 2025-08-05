import React, { useState, useEffect } from 'react';
 
import { useYoutubePlaylist } from '../services/youtube/youtubeServices';
import VideoPlayer from '../components/Youtube/VideoPlayer';
import VideoSidebar from '../components/Youtube/VideoSidebar';
 
import { Box, Grid, Typography, CircularProgress } from '@mui/material';
import YoutubeHeader from '../components/Youtube/YoutubeHeader';

const PLAYLIST_ID = 'UUhUYAjYRl9dTtna5ZET3E5Q';

function Youtube() {
  const { data: videos, isLoading } = useYoutubePlaylist(PLAYLIST_ID);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  useEffect(() => {
    if (!selectedVideoId && videos && videos.length) {
      setSelectedVideoId(videos[0].snippet.resourceId.videoId);
    }
  }, [videos, selectedVideoId]);

  if (isLoading) return <CircularProgress sx={{ mt: 4 }} />;
  if (!videos) return <Typography>No videos found.</Typography>;

  const selectedVideo = videos.find(v => v.snippet.resourceId.videoId === selectedVideoId);

  return (
    <Box sx={{ bgcolor: "#121212", height: "100%", p: 3,   }}>
        <YoutubeHeader/>
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 8 }}>
          {selectedVideoId && (
            <>
              <VideoPlayer videoId={selectedVideoId} />
              <Typography sx={{ mt: 2, color: "#fff" }} variant="h6">
                {selectedVideo?.snippet.title}
              </Typography>
              <Typography sx={{ color: "#bbb" }}>
                {selectedVideo?.snippet.channelTitle}
              </Typography>
              <Typography sx={{ color: "#999", mt: 1 }}>
                {selectedVideo?.snippet.publishedAt && new Date(selectedVideo.snippet.publishedAt).toLocaleString()}
              </Typography>
            </>
          )}
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <VideoSidebar
            videos={videos}
            onSelect={setSelectedVideoId}
            selectedId={selectedVideoId}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Youtube;
