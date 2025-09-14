import React, { useState, useEffect } from "react";
import { useYoutubePlaylist } from "../services/youtube/youtubeServices";
import VideoPlayer from "../components/Youtube/VideoPlayer";
import VideoSidebar from "../components/Youtube/VideoSidebar";
import YoutubeHeader from "../components/Youtube/YoutubeHeader";

import {
  Box,
  Grid,
  Typography,
  CircularProgress,
  Avatar,
  Button,
} from "@mui/material";
import {
  palette,
  containerStyles,
  videoInfoStyles,
  channelStyles,
  dateStyles,
} from "../styles/youtube/style.js";
import LightRays from "../components/LightRays/LightRays.jsx";
import {Helmet} from "react-helmet";

const PLAYLIST_ID = "UUhUYAjYRl9dTtna5ZET3E5Q";

function Youtube({darkmode}) {
  
  const { data: videos, isLoading, search } = useYoutubePlaylist(PLAYLIST_ID);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
console.log("data from youtube", videos);
   
  const colors = palette[darkmode? "dark" : "light" ];

  useEffect(() => {
    if (!selectedVideoId && videos && videos.length) {
      setSelectedVideoId(videos[0].snippet.resourceId.videoId);
    }
  }, [videos, selectedVideoId]);

  if (isLoading)
    return (
      <CircularProgress sx={{ mt: 4, mx: "auto", display: "block" }} />
    );
  if (!videos) return <Typography>No videos found.</Typography>;

  const selectedVideo = videos.find(
    (v) => v.snippet.resourceId.videoId === selectedVideoId
  );

  return (
    <Box sx={containerStyles(colors)}>
 
 
      <Grid container spacing={4} sx={{ py: 2, px: 4 }}>
        <Grid size={{xs:12, md:8}} >
          {selectedVideoId && (
            <>
              {/* Player */}
              <VideoPlayer videoId={selectedVideoId} darkmode={darkmode} />

              {/* Video Title */}
              <Typography
                sx={{ ...videoInfoStyles(colors), mt: .5, fontWeight: 600 }}
                 
              >
                {selectedVideo?.snippet.title}
              </Typography>

              {/* Channel Row */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap:3,
                  mt: .5,
                  
                }}
              >
                {/* Left Side - Channel info */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    alt={selectedVideo?.snippet.channelTitle}
                    src={`https://yt3.ggpht.com/ytc/${selectedVideo?.snippet.channelId}=s88-c-k-c0x00ffffff-no-rj`}
                  />
                  <Box>
                    <Typography
                      sx={{ fontWeight: 500, color: colors.title }}
                    >
                      {selectedVideo?.snippet.channelTitle}
                    </Typography>
                    <Typography sx={{ fontSize: "13px", color: colors.date }}>
                      {selectedVideo?.snippet.publishedAt &&
                        new Date(
                          selectedVideo.snippet.publishedAt
                        ).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>


<Helmet>
    <script src="https://apis.google.com/js/platform.js"></script>  </Helmet>


                {/* Right Side - Subscribe */}
                {/* <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#b1b1b1ff",
                    color: "#292929ff",
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": { bgcolor: "#e60000", color: "#fff" },
                    borderRadius: "9999px",
                    width: '10rem',
                    height: '40px',
                    alignSelf: "flex-start"

                  }}
                >
                  Subscribe
                </Button> */}
                <div class="g-ytsubscribe" data-channelid="UChUYAjYRl9dTtna5ZET3E5Q" data-layout="full" data-count="default"></div>
              </Box>
            </>
          )}
        </Grid>

        {/* Sidebar */}
        <Grid size={{xs:12, md:4}}  >
          <VideoSidebar
            darkmode={darkmode}
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
