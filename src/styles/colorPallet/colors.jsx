 

export const colorPalette = {
  // Primary colors - Used for main components, call-to-action (CTA) buttons, and important highlights.
  primary: {
    main: '#FFE24F',      // Main blue
    dark: '#357ABD',      // Darker, for hover or active states
    light: '#E9F2FC',     // Lighter, for backgrounds or related areas
  },

  // Secondary colors - Used to complement the primary color, for less important components.
  secondary: {
    main: '#F5A623',      // Amber/Orange
    dark: '#D48E1F',      // Darker
    light: '#FEF6E9',     // Lighter
  },

  // Text colors
  text: {
    heading: '#212121',     // Dark black for main headings
    body: '#424242',        // Dark gray for regular body text
    subtle: '#757575',      // Light gray for secondary text, descriptions, placeholders
    onDark: '#FFFFFF',      // White for text on dark backgrounds (e.g., on a primary color button)
    link: '#4A90E2',        // Color for links, often the primary color
  },

  // Background colors
  background: {
    main: '#F7F9FA',        // Main background color for the entire page (very light)
    secondary: '#FFFFFF',   // Background for components like cards, modals, navbars
    selection: '#E9F2FC',   // Background when an item is selected or active (matches light primary)
  },
  
  // Status colors - Used for notifications, alerts
  status: {
    success: '#2E7D32',     // Green for success messages
    backgroundSuccess: '#E8F5E9',

    warning: '#FFC107',     // Yellow for warnings
    backgroundWarning: '#FFFDE7',

    error: '#D32F2F',       // Red for error messages
    backgroundError: '#FFEBEE',

    info: '#0288D1',        // Blue for informational messages
    backgroundInfo: '#E1F5FE',
  },

  // User Interface (UI) colors
  ui: {
    border: '#E0E0E0',      // Color for borders, dividers
    icon: '#616161',        // Color for icons
    disabled: '#BDBDBD',    // Color for disabled components (text, icons)
    backgroundDisabled: '#EEEEEE', // Background for disabled components
  }
};
