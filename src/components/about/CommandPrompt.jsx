import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

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
      <IconButton href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <GitHubIcon sx={{ color: "#00FF00", fontSize: 28 }} />
      </IconButton>
      <Typography variant="body2" component="span" sx={{ color: '#00FF00', ml: 1, fontSize: '0.875rem' }}>
        /yourprofile
      </Typography>
    </span>
  ),
  linkedin: (
    <Typography variant="body2" component="span" sx={{ color: '#00BFFF', ml: 1, fontSize: '0.875rem' }}>
      /in/yourprofile
    </Typography>
  ),
  email: (
    <span>
      <IconButton href="mailto:youremail@example.com">
        <EmailIcon sx={{ color: "#FFDD57", fontSize: 24 }} />
      </IconButton>
      <Typography variant="body2" component="span" sx={{ color: '#FFDD57', ml: 1, fontSize: '0.875rem' }}>
        youremail@example.com
      </Typography>
    </span>
  ),
};

const AnimatedText = ({ text }) => {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let idx = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      setDisplayed((current) => current + text[idx]);
      idx++;
      if (idx === text.length) clearInterval(interval);
    }, 10); // Now 10ms per character
    return () => clearInterval(interval);
  }, [text]);
  return (
    <Typography sx={{ fontSize: '0.875rem', whiteSpace: 'pre-wrap', color: '#FFF' }}>
      {displayed}
    </Typography>
  );
};


const Terminal = ({ darkMode }) => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleCommand = (cmd) => {
    if (!cmd) return;
    if (cmd.toLowerCase() === "clear") {
      setHistory([]);
      setInput('');
      return;
    }
    const output = commands[cmd.toLowerCase()] ||
      "Unknown command. Type 'help' for a list of available commands.";
    setHistory((prev) => [...prev, { cmd, output }]);
    setInput('');
  };

  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  return (
    <Box
      sx={{
      
        bgcolor: darkMode ? '#000' : '#222',
        color: '#FFF',
        fontFamily: 'Georgia, serif',
        p: 1,
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 1,
        boxSizing: 'border-box',
        fontSize: '0.875rem',
      }}
    >
      <Typography variant="h5" sx={{ mb: 1, color: "#00FF00", fontFamily: 'Georgia, serif',  }}>
        Welcome
      </Typography>
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        {history.map((item, idx) => (
          <Box key={idx} sx={{ mb: 1 }}>
            <Typography sx={{ color: "#00FF00", fontFamily: 'Georgia, serif', fontSize: '0.9rem' }}>
              C:/rohit/administrator&gt; {item.cmd}
            </Typography>
            <Box sx={{ ml: 2 }}>
              {typeof item.output === 'string' ? <AnimatedText text={item.output} /> : item.output}
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 1,
          pt: 1,
          borderTop: '1px solid #00FF00',
          minHeight: 40,
        }}
      >
        <Typography sx={{ color: '#00FF00', fontFamily: 'Georgia, serif' }}>
          C:/rohit/administrator&gt;
        </Typography>
        <TextField
          variant="standard"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCommand(input)}
          InputProps={{
            disableUnderline: true,
            sx: {
              color: '#FFF',
              ml: 1,
              fontFamily: 'Georgia, serif',
              fontSize: '0.875rem',
              flex: 1,
            },
            inputRef: inputRef,
            endAdornment: (
              <Typography sx={{ color: '#00FF00', fontFamily: 'Georgia, serif', ml: 0.5, userSelect: 'none' }}>
                {showCursor ? '|' : ' '}
              </Typography>
            ),
          }}
          autoFocus
          
        />
      </Box>
    </Box>
  );
};

export default Terminal;
