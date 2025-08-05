import React from 'react';
import { List, ListItemButton, ListItemAvatar, Avatar, ListItemText, Typography, Box } from '@mui/material';

function VideoSidebar({ videos, onSelect, selectedId }) {
  return (
    <List sx={{ width: 360, bgcolor: "#181818", color: "#fff", borderRadius: 2 }}>
      {videos.map((vid) => (
        <ListItemButton
          key={vid.snippet.resourceId.videoId}
          selected={vid.snippet.resourceId.videoId === selectedId}
          onClick={() => onSelect(vid.snippet.resourceId.videoId)}
          sx={{ my: 0.5, bgcolor: vid.snippet.resourceId.videoId === selectedId ? '#232323' : undefined }}
        >
          <ListItemAvatar>
            <Avatar
              src={vid.snippet.thumbnails.medium.url}
              alt={vid.snippet.title}
              variant="rounded"
              sx={{ width: 80, height: 60, mr: 2 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography noWrap fontWeight={600} fontSize={14}>
                {vid.snippet.title}
              </Typography>
            }
            secondary={
              <Typography variant="caption" color="#ccc" noWrap>
                {new Date(vid.snippet.publishedAt).toLocaleDateString()}
              </Typography>
            }
          />
        </ListItemButton>
      ))}
    </List>
  );
}

export default VideoSidebar;
