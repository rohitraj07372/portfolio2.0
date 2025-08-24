// src/components/Youtube/styles.js
export const palette = {
  dark: {
    background: "#121212",
    title: "#fff",
    channel: "#bbb",
    date: "#999",
    sidebarBg: "#181818",
    hover: "#2c2c2c"
  },
  light: {
    background: "#fafafa",
    title: "#212121",
    channel: "#555",
    date: "#999",
    sidebarBg: "#fff",
    hover: "#f1f1f1"
  },
};

export const containerStyles = (colors) => ({
  bgcolor: colors.background,
  minHeight: "100%",
  transition: "background-color 0.3s ease",
    
 
});

export const videoInfoStyles = (colors) => ({
  mt: 2,
  color: colors.title,
});

export const channelStyles = (colors) => ({
  color: colors.channel,
});

export const dateStyles = (colors) => ({
  color: colors.date,
  mt: 1,
});
