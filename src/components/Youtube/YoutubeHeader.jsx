import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Box, Avatar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';

function YoutubeHeader() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#212121' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left: Menu button + YouTube Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton size="large" color="inherit" edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Box component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
            sx={{ height: 30, cursor: 'pointer' }}
          />
          <Box
            component="span"
            sx={{
              ml: 0.5,
              fontWeight: 'bold',
              fontSize: 18,
              color: '#fff',
            }}
          >
            IN
          </Box>
        </Box>

        {/* Center: Search bar + mic */}
        <Box
          sx={{
            flex: 1,
            maxWidth: 600,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#121212',
            borderRadius: 1,
            border: '1px solid #303030',
            height: 36,
            px: 1,
          }}
        >
          <InputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search youtube' }}
            sx={{ color: 'white', flex: 1, pl: 1 }}
          />
          <IconButton type="submit" sx={{ p: '6px', color: '#fff' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton sx={{ p: '6px', color: '#fff' }} aria-label="voice search">
            <MicIcon />
          </IconButton>
        </Box>

        {/* Right: Create, Notifications, Account */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title="Create">
            <IconButton size="large" color="inherit">
              <VideoCallIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton size="large" color="inherit">
              <Badge badgeContent={9} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <IconButton size="large" color="inherit" sx={{ p: 0 }}>
            <Avatar alt="User Account" src="https://i.pravatar.cc/300" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default YoutubeHeader;
