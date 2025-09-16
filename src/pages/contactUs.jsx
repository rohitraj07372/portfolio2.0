import React, { useState } from 'react';
import { Box, TextField, Button, Typography, CircularProgress, useMediaQuery, Snackbar, Alert as MuiAlert } from '@mui/material';
import { getContactPageStyles } from '../styles/contactPage/contactPageStyle';
import { useSendContactEmail } from '../services/contactUs/contactUsServices';
 
import { colorPalette } from '../styles/colorPallet/colors';
import Lottie from 'lottie-react';
import LightRays from '../components/LightRays/LightRays';
import contactUs from '../assets/contact/contactUs.json';  
import  astronaut from "../assets/contact/astronaut.json";

const ContactPage = ({ darkMode }) => {
  const styles = getContactPageStyles(darkMode);
  const isMobile = useMediaQuery('(max-width: 900px)');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  
  // Snackbar states
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const { mutate: sendEmail, isLoading } = useSendContactEmail();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_SERVICEID;
    const templateId = import.meta.env.VITE_TEMPLATEID;
    const userId = import.meta.env.VITE_PUBLICKEY;
    sendEmail(
      {
        serviceId,
        templateId,
        userId,
        params: {
          name: form.name,
          from_email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        }
      }, 
      {
        onSuccess: () => {
          setSnackbarMsg('Thank you! Your message has been sent.');
          setSnackbarSeverity('success');
          setSnackbarOpen(true);
          setForm({ name: '', email: '', message: '' });
        },
        onError: () => {
          setSnackbarMsg('Failed to send. Please try again.');
          setSnackbarSeverity('error');
          setSnackbarOpen(true);
        }
      }
    );
  };

  return (
    <Box sx={styles.root}>
      {/* Particles BG only in darkMode */}
      {darkMode && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            width: '100%',
            height: '100%',
          }}
        >
          <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
          {/* <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={150}
            particleSpread={8}
            speed={0.12}
            particleBaseSize={90}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          /> */}
        </Box>
      )}
      <Box
        sx={{
          ...styles.formContainer,
          width: '100%',
          maxWidth: 420,
          mx: 'auto',
          zIndex: 3,  
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: darkMode ? '#fff' : '#333' }}>
          Contact Us
        </Typography>
        <Typography sx={{ mb: 2, color: darkMode ? '#e7e7ff' : '#444' }}>
          I would love to connect with you.  
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            value={form.name}
            onChange={handleChange}
            required
            variant="outlined"
            sx={{ ...styles.glassTextField,  
    '& .MuiInputBase-input': {
      color: darkMode ? '#fff' : '#222',           
    },
    '& .MuiOutlinedInput-root': {
      
      borderRadius: 3,
    },
    '& .MuiInputLabel-root': {
      color: darkMode ? '#aaa' : '#222'           
    } }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={handleChange}
            required
            variant="outlined"
            sx={{ ...styles.glassTextField,  
    '& .MuiInputBase-input': {
      color: darkMode ? '#fff' : '#222',           
    },
    '& .MuiOutlinedInput-root': {
     
      borderRadius: 3,
    },
    '& .MuiInputLabel-root': {
      color: darkMode ? '#aaa' : '#222'           
    } }}
          />
                
       <TextField
  label="Message"
  name="message"
  fullWidth
  margin="normal"
  value={form.message}
  onChange={handleChange}
  required
  variant="outlined"
  multiline
  minRows={2}
  sx={{
    ...styles.glassTextField,  
    '& .MuiInputBase-input': {
      color: darkMode ? '#fff' : '#222',           
    },
    '& .MuiOutlinedInput-root': {
      boxShadow: 'rgb(0, 0, 0, 0.1)', 
      borderRadius: 3,
    },
    '& .MuiInputLabel-root': {
      color: darkMode ? '#aaa' : '#222'           
    }
  }}
/>

          <Button
            type="submit"
            size="large"
          
           
            fullWidth
            disabled={isLoading}
            sx={{ mt: 2, mb: 1, fontWeight: 600, borderRadius: 16, backgroundColor: darkMode ? 'rgba(255,255,255,0.18)' : colorPalette.primary.main, color:darkMode ? 'rgba(150, 148, 148, 0.88)': 'rgba(150, 53, 0, 0.88)',   boxShadow: 'inset 0 2px 2px rgba(0, 0, 0, 0.6)',  }}
            
            transition="background-color 0.3s, box-shadow 0.3s"
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
          </Button>
        </form>
        {/* SNACKBAR */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMsg}
          </MuiAlert>
        </Snackbar>
      </Box>
      <Box sx={{ ...styles.imageContainer, position: 'relative', zIndex: 1 }}>
      {!darkMode ?   <Lottie
          animationData={contactUs} 
          loop={true}
          style={{ width: '100%', height: '100%' }}
        /> :   <Lottie
          animationData={astronaut} 
          loop={true}
          style={{ width: '100%', height: '100%' }}
        /> }
      
      </Box>
    </Box>
  );
};

export default ContactPage;




