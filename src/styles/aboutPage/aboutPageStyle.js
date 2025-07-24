import { InitColorSchemeScript } from "@mui/material";
import { Post } from "ogl";

export const getAboutStyles = (darkMode) => ({
  root: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    height:'calc(100vh - 63px)',

    px: 4,
    background: darkMode
      ? `radial-gradient(ellipse 60% 30% at 70% 15%, rgba(0, 0, 0, 0.22) 0%, transparent 70%),
         radial-gradient(ellipse 50% 20% at 20% 70%, rgba(255, 102, 0, 0.16) 0%, transparent 80%),
         linear-gradient(135deg, #09090f 0%, #181829 60%, #1a130b 100%)`
      : "#fff8a6",
    overflow: "hidden",
    transition: "background 0.4s, color 0.4s",
  },
  terminalSection: {
    flex: 1,
    maxWidth: "650px",
    width: { xs: "90vw", md: "56vw" },
    mt: { xs: "250px", md: 0 },
    mx: "auto",
  },
});
// id card styles

export const getIdCardStyles = (darkMode) => ({
  hangWrapper: {
    position: "absolute",
    top: 64,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    zIndex: 10,
  },
  strap: {
    width: 10,
    height: 64,
    backgroundColor: "#232323",
    borderRadius: 6,
    marginBottom: -14,
    boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
  },
  cardSwing: {
    background: darkMode
      ? "linear-gradient(135deg, #667eea, #764ba2)"
      : "linear-gradient(135deg, #93a5cf, #e4efe9)",
    boxShadow: darkMode
      ? "0 10px 30px rgba(0,0,0,0.3)"
      : "0 10px 30px rgba(0,0,0,0.15)",
    borderRadius: 15,
    color: darkMode ? "#fff" : "#333",
    padding: "2rem 2.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    animation: "swing 2.7s ease-in-out infinite",
    transformOrigin: "top center",
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    border: "4px solid white",
    marginBottom: 14,
    objectFit: "cover",
  },
  name: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  role: { margin: "3px 0" },
  email: { margin: "3px 0" },
  phone: {
    margin: "3px 0",
    backgroundColor: "#1654a3",
    color: "white",
    borderRadius: 6,
    padding: "2px 14px",
    fontWeight: 600,
  },
});
// command prompt styles

export const getCommandPromptStyles = (darkMode) => ({
  terminal: {
    backgroundColor: darkMode ? "#181c1b" : "#f0f0f0",
    color: darkMode ? "#41ff41" : "#046f00",
    fontFamily: "'Fira Mono', Consolas, monospace",
    padding: "2rem",
    borderRadius: 9,
    minHeight: 320,
    maxWidth: 650,
    margin: "24px auto",
    boxShadow: darkMode
      ? "0 8px 32px rgba(0,0,0,0.16)"
      : "0 4px 24px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    userSelect: "none",
  },
  prompt: {
    fontWeight: "bold",
    marginRight: 10,
  },
  response: {
    marginLeft: 28,
    whiteSpace: "pre-wrap",
    marginBottom: 5,
  },
  terminalInputForm: {
    display: "flex",
    alignItems: "center",
    marginTop: 16,
  },
  terminalInput: {
    backgroundColor: "transparent",
    border: "none",
    color: darkMode ? "#41ff41" : "#046f00",
    fontFamily: "'Fira Mono', Consolas, monospace",
    fontSize: "1rem",
    width: "80%",
    outline: "none",
    userSelect: "text",
  },
  blinkCursor: {
    marginLeft: 2,
    animation: "blink 1s step-end infinite",
  },
});
