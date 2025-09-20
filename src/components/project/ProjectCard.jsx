import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Button,
  Stack,
  useTheme,
  Box,
  IconButton,
  Collapse,
  
} from "@mui/material";
  
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ElectricBorder from "../../components/ElectricBorder/ElectricBorder"
const techColors = {
  React: "primary",
  TypeScript: "info",
  "Tailwind CSS": "success",
  "Framer Motion": "secondary",
  Vite: "warning",
};

export default function ProjectCard({
  title,
  description,
  image,
  tags = [],
  details,
  codeLink,
  liveDemoLink,
  darkMode = false,
}) {
  const theme = useTheme();
  const [showDetails, setShowDetails] = useState(false);

  const cardStyles = {
    background: darkMode ? "#0a90fd0a" : "#b97f0293",
    color: darkMode ? "#0a90fdde"  : theme.palette.grey[900],
    position: "relative",
    borderRadius: 2,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
      darkMode? ( 
        <Card sx={cardStyles}>
          {/* Image with Overlay */}
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              "&:hover img": {
                transform: "scale(1.08)",
              },
              "&:hover .overlay": {
                opacity: 1,
                visibility: "visible",
              },
            }}
          >
            {image && (
              <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                  height: 180,
                  width: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease-in-out",
                }}
              />
            )}

            {/* Overlay Icons */}
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 6,
                right: 6,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "start",
                justifyContent: "flex-end",
                gap: 2,
                opacity: 0,
                visibility: "hidden",
                transition: "all 0.3s ease-in-out",
              }}
            >
              {codeLink && (
                <IconButton
                  href={codeLink}
                  target="_blank"
                  sx={{
                    bgcolor: "white",
                    "&:hover": { bgcolor: "#ddd" },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              )}
              {liveDemoLink && (
                <IconButton
                  href={liveDemoLink}
                  target="_blank"
                  sx={{
                    bgcolor: "white",
                    "&:hover": { bgcolor: "#ddd" },
                  }}
                >
                  <LaunchIcon />
                </IconButton>
              )}
            </Box>
          </Box>

          {/* Card Content */}
          <CardContent sx={{ color: darkMode ? "#76e4ffd8" : "#312300ff", flexGrow: 1 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              {description}
            </Typography>

            {/* Smoothly collapsed details */}
            {details && (
              <Collapse in={showDetails} timeout="auto" unmountOnExit>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 2,fontStyle:'italic' }}>
                  {details}
                </Typography>
              </Collapse>
            )}

            {/* Tags */}
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  color={techColors[tag] || "default"}
                  size="small"
                  sx={{
                    bgcolor: darkMode ? "#00335c79" : "#ad760070",
                    color: "#fff",
                  }}
                />
              ))}
            </Stack>
          </CardContent>

          {/* Buttons aligned horizontally at bottom */}
          <Box sx={{ px: 2, pb: 2 }}>
            <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
              {details && (
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<ExpandMoreIcon />}
                  onClick={() => setShowDetails((prev) => !prev)}
                  sx={{ textTransform: "none", borderRadius: 16, fontWeight: 600 }}
                >
                  {showDetails ? "Hide Details" : "View Details"}
                </Button>
              )}

              {codeLink && (
                <Button
                  variant="contained"
                  
                  startIcon={<GitHubIcon />}
                  href={codeLink}
                  target="_blank"
                  sx={{  fontWeight: 600, textTransform: "none" , backgroundColor:"#0095c2a8", borderRadius:'9999px',":hover":{backgroundColor:"#003d4ee1", opacity:0.9}}}
                >
                  Code
                </Button>
              )}

              {liveDemoLink && (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<LaunchIcon />}
                  href={liveDemoLink}
                  target="_blank"
                  sx={{  fontWeight: 300, textTransform: "none", backgroundColor:"#00607ab8", borderRadius:'9999px', ":hover":{backgroundColor:"#003d4ee1", opacity:0.9} }}
                >
                  Live Demo
                </Button>
              )}
            </Stack>
          </Box>
        </Card>
        ):( <Card sx={cardStyles}>
      {/* Image with Overlay */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          "&:hover img": {
            transform: "scale(1.08)",
          },
          "&:hover .overlay": {
            opacity: 1,
            visibility: "visible",
          },
        }}
      >
        {image && (
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              height: 180,
              width: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease-in-out",
            }}
          />
        )}

        {/* Overlay Icons */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 6,
            right: 6,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "start",
            justifyContent: "flex-end",
            gap: 2,
            opacity: 0,
            visibility: "hidden",
            transition: "all 0.3s ease-in-out",
          }}
        >
          {codeLink && (
            <IconButton
              href={codeLink}
              target="_blank"
              sx={{
                bgcolor: "white",
                "&:hover": { bgcolor: "#ddd" },
              }}
            >
              <GitHubIcon />
            </IconButton>
          )}
          {liveDemoLink && (
            <IconButton
              href={liveDemoLink}
              target="_blank"
              sx={{
                bgcolor: "white",
                "&:hover": { bgcolor: "#ddd" },
              }}
            >
              <LaunchIcon />
            </IconButton>
          )}
        </Box>
      </Box>

      {/* Card Content */}
      <CardContent sx={{ color: darkMode ? "#86f1ffff" : "#533d00c5", flexGrow: 1 }}>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
          {description}
        </Typography>

        {/* Smoothly collapsed details */}
        {details && (
          <Collapse in={showDetails} timeout="auto" unmountOnExit>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
              {details}
            </Typography>
          </Collapse>
        )}

        {/* Tags */}
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              color={techColors[tag] || "default"}
              size="small"
              sx={{
                bgcolor: darkMode ? "#00335c0e" : "#ad76004b",
                color: "#fff",
              }}
            />
          ))}
        </Stack>
      </CardContent>

      {/* Buttons aligned horizontally at bottom */}
      <Box sx={{ px: 2, pb: 2 }}>
        <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
          {details && (
            <Button
              variant="contained"
              color="primary"
              startIcon={<ExpandMoreIcon />}
              onClick={() => setShowDetails((prev) => !prev)}
              sx={{ borderRadius: 16, fontWeight: 300 }}
            >
              {showDetails ? "Hide Details" : "View Details"}
            </Button>
          )}

          {codeLink && (
            <Button
              variant="contained"
              color="secondary"
              startIcon={<GitHubIcon />}
              href={codeLink}
              target="_blank"
              sx={{ borderRadius: 2, fontWeight: 300,  }}
            >
              Code 
            </Button>
          )}

          {liveDemoLink && (
            <Button
              variant="contained"
              color="primary"
              startIcon={<LaunchIcon />}
              href={liveDemoLink}
              target="_blank"
              sx={{ borderRadius: 2, fontWeight: 300, textTransform: "none" }}
            >
              Live Demo
            </Button>
          )}
        </Stack>
      </Box>
    </Card>)
  );
}
