import React from "react";
import { Box, Typography, Avatar, Paper } from "@mui/material";
import profile from "../../assets/resume_profile.jpg"; // Change path if needed

const user = {
  name: "Rohit Kumar",
  role: "Software Engineer",
  phone: "+91 7372053803",
   
  email: "rohit.kumar053803@gmail.com",
  empId: "AC-2001",
  
  img: profile,
};

const swingAnim = `
@keyframes swingInfinite {
  0%   { transform: rotate(-4deg);}
  15%  { transform: rotate(-8deg);}
  30%  { transform: rotate(-4deg);}
  50%  { transform: rotate(4deg);}
  70%  { transform: rotate(8deg);}
  85%  { transform: rotate(4deg);}
  100% { transform: rotate(-4deg);}
}
`;

const IdCard = ({ darkMode }) => (
  <>
    <style>{swingAnim}</style>
    <Box
      sx={{
        height : "90%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 3,
        animation: `swingInfinite 3.3s cubic-bezier(.6,.4,.39,.89) infinite`,
        transformOrigin: "top center",
        position: "relative",
        
        boarderradius: "10px",
         
        overflow: "hidden",
       
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "60%",
          height: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "18px 18px 12px 12px",
          overflow: "visible",
          p: 0,
          position: "relative",
          boxShadow: "0 4px 30px 10px rgba(52,40,90,0.16)",
          // Exact gradient BG, like your sample
          background: darkMode
            ? "linear-gradient(135deg,#151531 7%,#2a316b 62%,#2693b3 96%)"
            : "linear-gradient(135deg,#f1f2fd 9%,#7a69e7 94%)",
          border: "1.3px solid rgba(255,255,255,0.25)",
        }}
      >
        {/* Photo left */}
        <Box
          sx={{
            width: "60%",
            height: "auto",
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pl: 3,
            pr: 1.2,
            zIndex: 2,
          }}
        >
          <Avatar
            src={user.img}
            alt={user.name}
            sx={{
              width: "90%",
              height: "90%",
              borderRadius: "15px",
              boxShadow: "0 2px 14px 0 rgba(40,50,90,0.17)",
              background: "#eee",
            }}
            variant="rounded"
          />
        </Box>
        {/* Details in glassy box */}
        <Box
          sx={{
            flex: 1,
            
            width: "70%",
            

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            pl: 1,
            pr: 3.3,
            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              color: "#40A4E4",
              fontWeight: 700,
              fontSize: ".96rem",
              letterSpacing: 1,
              mb: .2,
            }}
          >
            {user.organization}
          </Typography>
          {/* Frosted/glass panel right */}
          <Box
            sx={{
              background: darkMode
                ? "rgba(255,255,255,0.08)"
                : "rgba(255,255,255,0.53)",
              borderRadius: "10px",
              px: 2.1,
              pt: 0.8,
              pb: 1.6,
              minWidth: 200,
              mb: 0.2,
              boxShadow: "0 2px 10px rgba(90,120,180,0.08)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: darkMode
                ? "1px solid rgba(40,215,255,0.15)"
                : "1.3px solid #dbeafe59",
              display: "flex",
              flexDirection: "column",
              gap: 0.3,
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1.07rem",
                color: darkMode ? "#fff" : "#222d33",
                mb: "-1.2px",
              }}
              noWrap
            >
              {user.name}
            </Typography>
            <Typography
              sx={{
                color: "#5ed5fd",
                fontSize: "0.98rem",
                fontWeight: 500,
                mb: "2px",
              }}
            >
              {user.role}
            </Typography>
            <DetailRow label="Phone" value={user.phone} />
           
            <DetailRow label="Email" value={user.email} />
            
          </Box>
        </Box>
        {/* Gradient bar (boxes) at the bottom */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            bottom: -15, // hangs below!
            width: "100%",
            height: 26,
            display: "flex",
            px: 0.7,
            zIndex: 3,
            borderRadius: "0 0 13px 13px",
            overflow: "hidden",
            boxShadow: "0 2px 20px 0 rgba(30,60,120,.07)",
          }}
        >
          {[...Array(17)].map((_, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                borderRadius: i === 0
                  ? "0 0 0 11px" : i === 16
                  ? "0 0 11px 0" : 0,
                bgcolor: `linear-gradient(90deg, hsl(${255 + i*7},82%,${darkMode ? "54%" : "63%"}) 24%, hsl(${270 + i*7},90%,60%) 100%)`
              }}
            />
          ))}
        </Box>
      </Paper>
    </Box>
  </>
);

function DetailRow({ label, value }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", fontSize: "0.97em", mb: 0.2 }}>
      <Typography sx={{ minWidth: 48, color: "#4adbfb", fontWeight: 600, fontSize: "0.88em" }}>
        {label}
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          ml: 1.1,
          fontWeight: 400,
          letterSpacing: 0.14,
          fontSize: "0.93em",
          wordBreak: "break-all"
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export default IdCard;
