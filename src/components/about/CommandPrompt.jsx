import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const githubLink = import.meta.env.VITE_GITHUB 
const linkedinLink = import.meta.env.VITE_LINKEDIN;
const commands = {
  help: `Available commands:
  - about: Info about me
  - github: Show my GitHub link
  - linkedin: Show my LinkedIn link (text only)
  - email: Contact me
  - projects: View key MERN projects on GitHub
  - clear: Clear the terminal`,
 about: (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="User"
        width={32}
        height={32}
        style={{ borderRadius: 8, background: "#fff" }}
      />
      <Typography
        component="span"
        sx={{
          fontWeight: "bold",
          color: "#00FFD0",
          fontSize: "0.875rem",
        }}
      >
        Rohit Kumar · Software Engineer
      </Typography>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 3 }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
        alt="Graduation cap"
        width={20}
        height={20}
      />
      <Typography component="span" sx={{ color: "#FFD700", fontSize: "0.875rem" }}>
        B.Tech in Computer Science, Chandigarh University
      </Typography>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 3 }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
        alt="Map Marker"
        width={20}
        height={20}
      />
      <Typography component="span" sx={{ color: "#00BFFF", fontSize: "0.875rem" }}>
        <span role="img" aria-label="Location">📍</span> Bihar, Muzaffarpur
      </Typography>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1, ml: 3 }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1821/1821054.png"
        alt="Code"
        width={24}
        height={24}
      />
      <Typography
        component="span"
        sx={{ color: "#FFD700", fontSize: "0.875rem" }}
      >
        I craft <span style={{ color: "#00FF00", fontWeight: "bold" }}>immersive full-stack experiences</span> with React, Node.js, and MongoDB.
      </Typography>
    </Box>
    <Box sx={{ display: "flex", alignItems: "start", gap: 1, mt: 1, ml: 3 }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2721/2721090.png"
        alt="Hobbies"
        width={20}
        height={20}
      />
      <Box>
        <Typography component="span" sx={{ color: "#00BFFF", fontWeight: "bold", fontSize: "0.875rem" }}>
          Hobbies:
        </Typography>
        <ul style={{ color: "#FFD700", margin: "2px 0 0 18px", fontSize: "0.85rem", padding: 0 }}>
          <li>
            🎨 <span style={{ color: "#00FFB2" }}>Graphic Designing</span> — turning ideas into vibrant visual stories.
          </li>
          <li>
            🚀 <span style={{ color: "#1EC9FF" }}>Exploring New Tech</span> — always searching for the next "aha" moment.
          </li>
          <li>
            🗺️ <span style={{ color: "#FFD700" }}>Mapping Pixels</span> — bringing concepts to life, one creative map at a time.
          </li>
        </ul>
      </Box>
    </Box>
    <Typography
      component="p"
      sx={{
        mt: 2,
        fontSize: "0.85rem",
        color: "#FFF",
        background: "rgba(0,255,0,0.07)",
        p: 1,
        borderRadius: 1,
      }}
    >
      If you’re looking for someone who combines <span style={{ color: "#FFD700", fontWeight: "bold" }}>technical mastery</span> with a passion for design and continuous
      exploration, <span style={{ color: "#00FF00" }}>let’s connect!</span>
    </Typography>
  </Box>
),

  projects: `- ProjectA: https://github.com/yourprofile/projectA
- ProjectB: https://github.com/yourprofile/projectB`,
  github: (
    <span>
      <IconButton
        href= {githubLink}
        target="_blank"
        rel="noopener noreferrer"
        size="small"
        sx={{ p: 0, verticalAlign: "middle" }}
      >
        <GitHubIcon sx={{ color: "#00FF00", fontSize: 20 }} />
      </IconButton>
      <Typography
        variant="body2"
        component="span"
        sx={{ color: "#00FF00", ml: 1, fontSize: "0.775rem", verticalAlign: "middle" }}
      >
        Rohit Kumar
      </Typography>
    </span>
  ),
  linkedin: (
   <span>
      <IconButton
        href= {linkedinLink}
        target="_blank"
        rel="noopener noreferrer"
        size="small"
        sx={{ p: 0, verticalAlign: "middle" }}
      >
        <LinkedInIcon sx={{ color: "#0088ffff", fontSize: 20 }} />
      </IconButton>
      <Typography
        variant="body2"
        component="span"
        sx={{ color: "#0088ffff", ml: 1, fontSize: "0.775rem", verticalAlign: "middle" }}
      >
        Rohit Kumar
      </Typography>
    </span>
  ),
  email: (
    <span>
      <IconButton href="mailto:youremail@example.com" size="small" sx={{ p: 0, verticalAlign: "middle" }}>
        <EmailIcon sx={{ color: "#FFD700", fontSize: 20 }} />
      </IconButton>
      <Typography
        variant="body2"
        component="span"
        sx={{ color: "#FFD700", ml: 1, fontSize: "0.775rem", verticalAlign: "middle", fontWeight: "bold" }}
      >
        rohit.kumar053803@gmail.com
      </Typography>
    </span>
  ),
};

// A utility component to colorize output text based on type
const ColoredText = ({ text, color = "white" }) => (
  <Typography
    sx={{
      fontSize: "0.775rem",
      whiteSpace: "pre-wrap",
      fontFamily: "monospace",
      userSelect: "text",
      color,
    }}
  >
    {text}
  </Typography>
);

const AnimatedText = ({ text, color = "white" }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let idx = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed((current) => current + text[idx]);
      idx++;
      if (idx === text.length) clearInterval(interval);
    }, 10);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <Typography
      sx={{ fontSize: "0.775rem", whiteSpace: "pre-wrap", fontFamily: "monospace", userSelect: "text", color }}
    >
      {displayed}
    </Typography>
  );
};

const Terminal = ({ darkMode }) => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  const handleCommand = (cmd) => {
    if (!cmd) return;
    if (cmd.toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }
    const key = cmd.toLowerCase();
    let output = commands[key];
    let color = "white";

    if (!output) {
      output = "Unknown command. Type 'help' for a list of available commands.";
      color = "#FF5555"; // red for errors
    } else {
      // Define colors based on command type
      switch (key) {
        case "help":
          color = "#FFD700"; // yellow
          break;
        case "linkedin":
          color = "#1E90FF"; // blue
          break;
        case "github":
        case "projects":
          color = "#00FF00"; // green
          break;
        case "email":
          color = "#FFD700"; // yellowish
          break;
        default:
          color = "white";
          break;
      }
    }

    setHistory((prev) => [...prev, { cmd, output, color }]);
    setInput("");
  };

  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <Box
      sx={{
        bgcolor: darkMode
          ? "rgba(20, 20, 20, 0.4)"  
          : "rgba(21, 21, 21, 1)", // Light glass bg fallback (if needed)
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)", // Safari support
        borderRadius: 3,
        border: darkMode
          ? "1px solid rgba(0, 255, 0, 0.2)"
          : "1px solid rgba(0, 0, 0, 1)",
        
        color: "#00FF00", // default green text for terminal vibe
        fontFamily: "monospace",
        boxSizing: "border-box",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        fontSize: "0.775rem",
        height: "100%", 
        
      }}
    >
      <Typography sx={{ mb: 1, userSelect: "none", fontsize:"775rem",  color: "#FFD700" /* golden for instructions */ }}>
        Type 'help' to know more
      </Typography>

      <Box
        ref={scrollRef}
        sx={{
          height: "70%",
          overflowY: "auto",
          mb: 1,
          borderRadius: 1,
          p: 2,
          // backgroundColor: darkMode ? "rgba(0, 0, 0, 0.25)" : "rgba(39, 39, 39, 1)",
          // border: "1px solid rgba(0, 255, 0, 0.3)",
          whiteSpace: "pre-wrap",
          userSelect: "text",
          fontSize:' 0.775rem',
        }}
      >
        {history.length === 0 && (
          <Typography sx={{ color: "#00FF00", fontStyle: "italic" }}>
            Terminal is empty. Type a command.
          </Typography>
        )}
        {history.map((item, idx) => (
          <Box key={idx} sx={{ mb: .5 }}>
            <Typography sx={{ color: "#00FF00", mb: 0.3, fontSize: "0.775rem" }}>
              user@rohit&gt; {item.cmd}
            </Typography>
            <Box sx={{ ml: 2 }}>
              {typeof item.output === "string" ? (
                <AnimatedText text={item.output} color={item.color || "white"} />
              ) : (
                 
                <Box sx={{ color: item.color || "#00FF00" }}>{item.output}</Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pt: 1,
          borderTop: "1px solid rgba(0, 255, 0, 0.3)",
         
        }}
      >
        <Typography sx={{ color: "#00FF00", fontsixe: "0.775rem", fontFamily: "monospace" }}>
        user@rohit&gt;
        </Typography>
        <TextField
          variant="standard"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleCommand(input)}
          InputProps={{
            disableUnderline: true,
            sx: {
              color: "#00FF00",
              ml: 1,
              fontFamily: "monospace",
              fontSize: "0.775rem",
              flex: 1,
            },
            inputRef: inputRef,
            endAdornment: (
              <Typography
                sx={{
                  color: "#00FF00",
                  ml: 0.5,
                  userSelect: "none",
                }}
              >
               
              </Typography>
            ),
            autoComplete: "off",
          }}
          spellCheck={false}
          autoFocus
        />
      </Box>
    </Box>
  );
};

export default Terminal;
