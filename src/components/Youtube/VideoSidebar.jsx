import React from 'react';
import {
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
} from '@mui/material';

// Accept mode prop ('light' or 'dark')
function VideoSidebar({ videos, onSelect, selectedId, mode = "dark" }) {
  // Palette for both modes
  const palette = {
    dark: {
      bgList: "#181818",
      color: "#fff",
      bgSelected: "#232323",
      thumbnailBorder: "#333",
      date: "#ccc",
    },
    light: {
      bgList: "#ffeeb8ff",
      color: "#212121",
      bgSelected: "#e3e3e3",
      thumbnailBorder: "#e0e0e0",
      date: "#666",
    },
  };

  const colors = palette[mode];

  return (
    <List
      sx={{
        width: 360,
        bgcolor: colors.bgList,
        color: colors.color,
        borderRadius: 2,
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 120px)',
        boxShadow: mode === 'dark' ? "0 1px 6px #0004" : "0 1px 6px #8882",
        scrollbarWidth: 'thin',
        scrollbarColor: mode === 'dark' ? '#555 #222' : '#ccc #f1f1f1',
      }}
    >
      {videos.map((vid) => {
        const videoId = vid.snippet.resourceId.videoId;
        return (
          <ListItemButton
            key={videoId}
            selected={videoId === selectedId}
            onClick={() => onSelect(videoId)}
            sx={{
              my: 0.5,
              bgcolor: videoId === selectedId ? colors.bgSelected : undefined,
              '&:hover': {
                bgcolor:
                  mode === "dark" ?
                    (videoId === selectedId ? "#232323" : "#222") :
                    (videoId === selectedId ? "#e3e3e3" : "#f6f6f6"),
              },
            }}
          >
            <ListItemAvatar>
              <Avatar
                src={vid.snippet.thumbnails.medium.url}
                alt={vid.snippet.title}
                variant="rounded"
                sx={{
                  width: 80,
                  height: 60,
                  mr: 2,
                  border: `1px solid ${colors.thumbnailBorder}`,
                  bgcolor: mode === "dark" ? "#232323" : "#fafafa",
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  noWrap
                  fontWeight={600}
                  fontSize={14}
                  color={colors.color}
                >
                  {vid.snippet.title}
                </Typography>
              }
              secondary={
                <Typography
                  variant="caption"
                  color={colors.date}
                  noWrap
                >
                  {new Date(vid.snippet.publishedAt).toLocaleDateString()}
                </Typography>
              }
            />
          </ListItemButton>
        );
      })}
    </List>
  );
}

export default VideoSidebar;
