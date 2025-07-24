import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const commands = {
  help: `Available commands:
  - about: Info about me
  - github: Show my GitHub link
  - linkedin: Show my LinkedIn link (text only)
  - email: Contact me
  - projects: View key MERN projects on GitHub
  - clear: Clear the terminal`,
  about: `MERN stack developer. Expert in React, Node.js, MongoDB, Express. Passionate about building full-stack web apps.`,
  projects: `- ProjectA: https://github.com/yourprofile/projectA
- ProjectB: https://github.com/yourprofile/projectB`,
  github: (
    <span>
      <IconButton
        href="https://github.com/yourprofile"
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
        /yourprofile
      </Typography>
    </span>
  ),
  linkedin: (
    <Typography
      variant="body2"
      component="span"
      sx={{ color: "#1E90FF", ml: 1, fontSize: "0.775rem", fontWeight: "bold" }}
    >
      /in/yourprofile
    </Typography>
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
        youremail@example.com
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
      <Typography sx={{ mb: 1, userSelect: "none", color: "#FFD700" /* golden for instructions */ }}>
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
          <Box key={idx} sx={{ mb: 1 }}>
            <Typography sx={{ color: "#00FF00", mb: 0.3 }}>
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
        <Typography sx={{ color: "#00FF00" }}>
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
