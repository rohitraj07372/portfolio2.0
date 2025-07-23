// CommandPrompt.js
import React, { useState, useRef, useEffect } from "react";
import { getCommandPromptStyles } from "../../styles/aboutPage/aboutPageStyle";

const COMMANDS = {
  help: "Available commands: help, about, linkedin, github, projects, email, phone, clear",
  about: "MERN Stack Developer passionate about modern UIs.",
  linkedin: "https://linkedin.com/in/your-linkedin-profile",
  github: "https://github.com/your-github-profile",
  projects: "Project1: ...\nProject2: ...",
  email: "your.email@example.com",
  phone: "+123 456 7890",
};

export default function CommandPrompt({ darkMode, colorPallet }) {
  const styles = getCommandPromptStyles(darkMode, colorPallet);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const cmd = input.trim();
    if (cmd.toLowerCase() === "clear") {
      setHistory([]);
    } else {
      const response = COMMANDS[cmd.toLowerCase()] || `Unknown command: ${cmd}`;
      setHistory((prev) => [...prev, { cmd, response }]);
    }
    setInput("");
  };

  return (
    <div style={styles.terminal}>
      {history.map(({ cmd, response }, i) => (
        <div key={i}>
          <span style={styles.prompt}>$ {cmd}</span>
          <pre style={styles.response}>{response}</pre>
        </div>
      ))}

      <form onSubmit={handleSubmit} style={styles.terminalInputForm}>
        <span style={styles.prompt}>$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.terminalInput}
          spellCheck={false}
          autoComplete="off"
          aria-label="terminal command input"
        />
        <span style={styles.blinkCursor}>|</span>
      </form>
    </div>
  );
}
