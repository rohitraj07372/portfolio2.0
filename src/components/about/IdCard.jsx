import React, { useState, useEffect } from "react";
import {
  Box, Typography, Avatar, IconButton, Paper,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import profile from "../../assets/resume_profile.jpg";

// Keyframes for heart flying animation
const style = `
@keyframes flyHeart {
  0% {
    opacity: 1;
    transform: scale(0.8) translateY(0);
  }
  50% {
    transform: scale(1.4) translateY(-50px);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1) translateY(-100px);
  }
}
`;

const user = {
  name: "Rohit Kumar",
  username: "Rohit_Kumar",
  role: "Software Engineer",
  location: "Delhi, India",
  phone: "+91 7372053803",
  email: "rohit.kumar053803@gmail.com",
 
  img: profile,
};

const hashtags = ["#software", "#coding", "#engineer", "#react" ];

const InstagramPostCard = ({darkMode}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(533);
  const [animating, setAnimating] = useState(false);

  const handleLike = () => {
    if (!liked) {
      console.log("Liked");
      setLiked(true);
      setLikes(likes + 1);
      setAnimating(true);
    } else {
      console.log("Unliked");
      setLiked(false);
      setLikes(likes - 1);
    }
  };

  // Remove animation state after animation finishes (~700ms)
  useEffect(() => {
    if (animating) {
      const timeout = setTimeout(() => {
        setAnimating(false);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [animating]);

  return (
    <>
      <style>{style}</style>
      <Box sx={{
         
        width: "100%",
        height: "100%",
        p: 2,
        boxSizing: "border-box",
        bgcolor: darkMode?  "rgba(0, 79, 99, 0.53)" :"rgb(253,241,241)",
        borderRadius: 3,
        boxShadow: "0 0 24px rgba(255,40,80,0.13)",
        overflow: "hidden",
         backdropFilter: "blur(18px)",  
          WebkitBackdropFilter: "blur(18px)", 
        position: "relative",
        border: "1px solid #52ff69a2",
      }}>
        <Paper elevation={0} sx={{ bgcolor: "transparent" }}>
          {/* Gradient Bar Top */}
          <Box sx={{
            height: 7,
            width: "100%",
            background: "linear-gradient(90deg, #f27121 0%, #e94057 46%, #8a2387 100%)",
            position: "absolute",
            top: 0,
            left: 0,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            zIndex: 10,
          }} />

          {/* Header */}
          <Box sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            
            pb: 1.1,
            zIndex: 11,
            position: "relative",
          }}>
            <Avatar
              src={user.img}
              sx={{
                width: 42,
                height: 42,
                mr: 1.2,
                border: "2px solid #e94057",
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, color: darkMode?"#e2e2e2ff": "#222", fontSize: "1.06rem", lineHeight: 1.1 }}>
                {user.username}
              </Typography>
              <Typography sx={{ fontSize: "0.98rem", color: darkMode?"#d8d6d6ff" : "#9c9b9bff", lineHeight: 1.05 }}>
                {user.location}
              </Typography>
            </Box>
            <IconButton size="small" sx={{ zIndex: 11 }}>
              <MoreHorizIcon sx={{ color: darkMode?"#e2e2e2ff": "#222" }} />
            </IconButton>
          </Box>

          {/* Post Image */}
          <Box sx={{
            width: "100%",
            height: 260,
            background: darkMode?"#005f85a8" :"#e5e5ef",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
            overflow: "hidden",
            position: "relative",
            userSelect: "none",
          }}>
            <img
              src={user.img}
              alt="profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              draggable={false}
            />
            {/* Flying Heart Animation */}
            {animating && (
              <FavoriteIcon
                sx={{
                  position: "absolute",
                  color: "#e94057",
                  fontSize: 96,
                  animation: "flyHeart 700ms ease forwards",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  userSelect: "none",
                  zIndex: 20,
                }}
              />
            )}
          </Box>

          {/* Actions row */}
          <Box sx={{
            display: "flex",
            alignItems: "center",
            pl: 1,
            pt: 0.6,
            pb: 0.1,
          }}>
            <IconButton onClick={handleLike} sx={{ color:darkMode? liked ? "#e94057" : "#eeeeeeff" : liked?"#e94057":"#363636ff", cursor:'pointer' }}>
              {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            <IconButton sx={{ ml: 0.1,color: darkMode?"#e2e2e2ff": "#222" }}>
              <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton sx={{ ml: 0.1, color: darkMode?"#e2e2e2ff": "#222" }}>
              <SendOutlinedIcon />
            </IconButton>
          </Box>

          {/* Likes count */}
          <Typography
            sx={{
              px: 2,
              fontWeight: 600,
              color: darkMode?"#e2e2e2ff": "#222",
              fontSize: "0.99rem",
              mt: 0.7,
            }}
          >
            {likes} Likes
          </Typography>

          {/* Caption area */}
          <Box sx={{ px: 2, pt: 0.8, pb: 1, maxWidth: "100%" }}>
            <Typography component="span" sx={{ fontWeight: 700,color: darkMode?"#e2e2e2ff": "#222", fontSize: "0.97rem" }}>
              {user.username}
            </Typography>
            <Typography component="span" sx={{ fontSize: "0.96rem", ml: 0.7, color: darkMode?"#e2e2e2ff": "#2e2e2eff"}}>
              {" "}Software Engineer  
            </Typography>
            <Box sx={{ mt: 0.5, wordBreak: "break-word" }}>
              <Typography
                component="span"
                sx={{ color: darkMode?"#949494ff": "#4d4c4cff", fontSize: "0.95rem" }}
              >
                {user.phone} | {user.email}
              </Typography>
            </Box>
            <Box sx={{ mt: 0.3 }}>
              {hashtags.map((tag) => (
                <Typography
                  key={tag}
                  component="span"
                  sx={{
                    color: "#4896ff",
                    fontWeight: 600,
                    mr: 1,
                    fontSize: "0.95rem",
                  }}
                >
                  {tag}
                </Typography>
              ))}
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default InstagramPostCard;
