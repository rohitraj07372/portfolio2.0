import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import YouTube from '@mui/icons-material/YouTube';
import Brightness4 from '@mui/icons-material/Brightness4';
import Brightness7 from '@mui/icons-material/Brightness7';
import { NavLink } from 'react-router-dom';
import { colorPalette } from '../styles/colorPallet/colors';
import { getNavbarStyles } from '../styles/navbarStyles';
import profile3 from '../assets/profile_3.jpg';

const Navbar = ({ menuItems, socialLinks, darkMode, toggleTheme }) => {
  // const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');
  const styles = getNavbarStyles(darkMode, colorPalette);

  // const toggleTheme = () => setDarkMode(!darkMode);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const iconColor = darkMode ? '#0078afff' : '#000';

  return (
    <>
      {/* Top Navbar */}
      <Box sx={{ ...styles.navBar }}>
        {/* Brand (Profile + Name) */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor:styles.activeItem, px:1, py: 0.5, borderRadius: '999px' }}>
          <Box sx={{ borderRadius: '50%', overflow: 'hidden', width: 35, height: 35 }}>
            <img src={profile3} alt="logo" style={styles.profileImg} />
          </Box>
          <Typography sx={styles.brandText}>Rohit Kumar</Typography>
        </Box>

        {/* Desktop Nav */}
        {!isMobile && (
          <Box component="ul" sx={styles.menu}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  style={({ isActive }) =>
                    isActive
                      ? { ...styles.menuItem, ...styles.activeItem }
                      : styles.menuItem
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </Box>
        )}

        {/* Desktop Icons */}
        {!isMobile && (
          <Box sx={styles.socialIcons}>
            <IconButton onClick={() => window.open(socialLinks.linkedin)}>
              <LinkedInIcon sx={{ color: iconColor,  }} />
            </IconButton>
            <IconButton onClick={() => window.open(socialLinks.github)}>
              <GitHub sx={{ color: iconColor }} />
            </IconButton>
            <IconButton onClick={() => window.open(socialLinks.youtube)}>
              <YouTube sx={{ color: iconColor }} />
            </IconButton>
            <IconButton onClick={toggleTheme}>
              {darkMode ? <Brightness7 sx={{ color: iconColor }} /> : <Brightness4 sx={{ color: iconColor }} />}
            </IconButton>
          </Box>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton onClick={toggleDrawer}>
            {drawerOpen ? <CloseIcon sx={{ color: iconColor }} /> : <MenuIcon sx={{ color: iconColor }} />}
          </IconButton>
        )}
      </Box>

      {/* Right Drawer (Mobile Only) */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 280,
            height: '100%',
            backgroundColor: darkMode ? '#1a1a1a' : colorPalette.primary.main,
            color: darkMode ? '#fff' : '#000',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Top - Name + Theme */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ borderRadius: '50%', overflow: 'hidden', width: 30, height: 30 }}>
                <img src={profile3} alt="logo" style={{ width: '100%', height: '100%' }} />
              </Box>
              <Typography fontWeight="bold" sx={{ color: darkMode ? '#0da3faff' : '#000' }}>
                Rohit Kumar
              </Typography>
            </Box>
            <IconButton onClick={toggleTheme}>
              {darkMode ? <Brightness7 sx={{ color: '#0060a0ff' }} /> : <Brightness4 sx={{ color: '#000' }} />}
            </IconButton>
          </Box>

          <Divider sx={{ borderColor: darkMode ? '#444' : '#fff' }} />

          {/* Menu Items */}
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ px: 2 }}>
                <NavLink
                  to={item.path}
                  onClick={toggleDrawer}
                  style={({ isActive }) =>
                    isActive
                      ? { ...styles.menuItem, ...styles.activeItem }
                      : styles.menuItem
                  }
                >
                  {item.label}
                </NavLink>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ borderColor: darkMode ? '#444' : '#fff', mt: 1 }} />

          {/* Social Icons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
            <IconButton onClick={() => window.open(socialLinks.linkedin)}>
              <LinkedInIcon sx={{ color: iconColor }} />
            </IconButton>
            <IconButton onClick={() => window.open(socialLinks.github)}>
              <GitHub sx={{ color: iconColor }} />
            </IconButton>
            <IconButton onClick={() => window.open(socialLinks.youtube)}>
              <YouTube sx={{ color: iconColor }} />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
