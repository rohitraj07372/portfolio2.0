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
  useMediaQuery,
} from "@mui/material";
import {
  palette,
  containerStyles,
  videoInfoStyles,
} from "../styles/youtube/style.js";
import LightRays from "../components/LightRays/LightRays.jsx";
import { Helmet } from "react-helmet";

const PLAYLIST_ID = "UUhUYAjYRl9dTtna5ZET3E5Q";

function Youtube({ darkmode }) {
  const isMobile = useMediaQuery("(max-width:900px)");
  const { data: videos, isLoading } = useYoutubePlaylist(PLAYLIST_ID);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const colors = palette[darkmode ? "dark" : "light"];

  useEffect(() => {
    if (!selectedVideoId && videos && videos.length) {
      setSelectedVideoId(videos[0].snippet.resourceId.videoId);
    }
  }, [videos, selectedVideoId]);

  if (isLoading)
    return (
  <Box sx={{width:"100%" , height:"calc(100vh - 70px)", display:"flex", justifyContent:'center', alignItems:'center' }}   >
   <CircularProgress sx={{ mt: 4, mx: "auto", display: "block" }} />
  </Box>
   
    );
  if (!videos) return <Typography>No videos found.</Typography>;

  const selectedVideo = videos.find(
    (v) => v.snippet.resourceId.videoId === selectedVideoId
  );

  return (
    <Box
      sx={{
        ...containerStyles(colors),
        minHeight: "100vh",
        px: isMobile ? 0 : 4,
        py: isMobile ? 1 : 2,
        background: colors.background,
      }}
    >
      {/* Optional: <YoutubeHeader /> for branding/navbar above */}
      {/* <YoutubeHeader /> */}

      <Grid
        container
        spacing={isMobile ? 0 : 4}
        sx={{
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* Main Video content */}
        <Grid size={{xs:12,md:8}} sx={{ px: isMobile ? 0 : 2 }}>
          {selectedVideoId && (
            <>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "16/9",
                  position: "relative",
                  borderRadius: isMobile ? 0 : 3,
                  overflow: "hidden",
                  mb: isMobile ? 0.75 : 2,
                }}
              >
                <VideoPlayer videoId={selectedVideoId} darkmode={darkmode} />
              </Box>

              <Typography
                sx={{
                  ...videoInfoStyles(colors),
                  mt: isMobile ? 1 : 0.5,
                  fontWeight: 600,
                  fontSize: isMobile ? 12 : 16,
                  px: isMobile ? 2 : 0,
                }}
              >
                {selectedVideo?.snippet.title}
              </Typography>

              {/* Channel and subscribe row */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mt: isMobile ? 0.5 : 1,
                  px: isMobile ? 2 : 0,
                  flexDirection: isMobile ? "row" : "row",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    alt={selectedVideo?.snippet.channelTitle}
                    src={`https://yt3.ggpht.com/ytc/${selectedVideo?.snippet.channelId}=s88-c-k-c0x00ffffff-no-rj`}
                    sx={{ width: 40, height: 40 }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: colors.title,
                        fontSize: isMobile ? 14 : 18,
                      }}
                    >
                      {selectedVideo?.snippet.channelTitle}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: isMobile ? 11 : 13,
                        color: colors.date,
                      }}
                    >
                      {selectedVideo?.snippet.publishedAt &&
                        new Date(
                          selectedVideo.snippet.publishedAt
                        ).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  {/* Youtube Subscribe Button */}
                  <Helmet>
                    <script src="https://apis.google.com/js/platform.js"></script>
                  </Helmet>
                  <div
                    className="g-ytsubscribe"
                    data-channelid="UChUYAjYRl9dTtna5ZET3E5Q"
                    data-layout={isMobile ? "default" : "full"}
                    data-count="default"
                  ></div>
                </Box>
              </Box>
            </>
          )}
        </Grid>

        {/* Video List/Sidebar */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            mt: isMobile ? 2 : 0,
            px: isMobile ? 0 : 2,
            borderLeft: isMobile ? "none" : `1px solid ${colors.border}`,
            borderTop: isMobile ? `1px solid ${colors.border}` : "none",
            pt: isMobile ? 2 : 0,
          }}
        >
          <VideoSidebar
            darkmode={darkmode}
            videos={videos}
            onSelect={setSelectedVideoId}
            selectedId={selectedVideoId}
            mobile={isMobile}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Youtube;
