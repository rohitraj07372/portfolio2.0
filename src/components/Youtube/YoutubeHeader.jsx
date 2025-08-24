import React, { useState } from "react";
import { AppBar, Toolbar, InputBase, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function YoutubeHeader({ onSearch, mode }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      onSearch(query);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: mode === "dark" ? "#202020" : "#fff",
        boxShadow: "none",
        borderBottom: `1px solid ${mode === "dark" ? "#333" : "#ddd"}`,
        px: 2,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton>
            <MenuIcon sx={{ color: mode === "dark" ? "#fff" : "#000" }} />
          </IconButton>
          <Box sx={{ fontWeight: "bold", fontSize: "20px", color: mode === "dark" ? "#fff" : "#000" }}>
            YouTube Clone
          </Box>
        </Box>

        {/* Middle (Search bar) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: mode === "dark" ? "#303030" : "#f0f0f0",
            borderRadius: 20,
            px: 2,
            flex: 1,
            maxWidth: "600px",
            mx: 3,
          }}
        >
          <SearchIcon sx={{ color: "#888" }} />
          <InputBase
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            sx={{
              ml: 1,
              flex: 1,
              color: mode === "dark" ? "#fff" : "#000",
            }}
          />
        </Box>

        {/* Right */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <VideoCallIcon sx={{ color: mode === "dark" ? "#fff" : "#000" }} />
          </IconButton>
          <IconButton>
            <NotificationsIcon sx={{ color: mode === "dark" ? "#fff" : "#000" }} />
          </IconButton>
          <IconButton>
            <AccountCircleIcon sx={{ color: mode === "dark" ? "#fff" : "#000" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default YoutubeHeader;
