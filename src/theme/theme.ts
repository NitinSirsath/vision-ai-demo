import { createTheme } from "@mui/material/styles";

// Minimal color palette for light mode
const minimalColorsLight = {
  primary: "#333333", // Dark Gray
  secondary: "#757575", // Medium Gray
  text: "#212121", // Almost Black
  background: "#ffffff", // White
  surface: "#f9f9f9", // Very Light Gray
  error: "#e53935", // Soft Red
  success: "#43a047", // Soft Green
  neutral: "#9e9e9e", // Light Gray
};

// Minimal color palette for dark mode
const minimalColorsDark = {
  primary: "#ffffff", // White
  secondary: "#bdbdbd", // Light Gray
  text: "#e0e0e0", // Light Text
  background: "#121212", // Dark Background
  surface: "#1d1d1d", // Slightly Lighter Surface
  error: "#cf6679", // Soft Red for Dark Mode
  success: "#66bb6a", // Soft Green for Dark Mode
  neutral: "#757575", // Medium Gray
};

// Light mode theme (minimal and typographic focus)
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: minimalColorsLight.primary,
    },
    secondary: {
      main: minimalColorsLight.secondary,
    },
    text: {
      primary: minimalColorsLight.text,
    },
    background: {
      default: minimalColorsLight.background,
      paper: minimalColorsLight.surface,
    },
    error: {
      main: minimalColorsLight.error,
    },
    success: {
      main: minimalColorsLight.success,
    },
  },
  typography: {
    // fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif', // Clean and modern font
    // fontFamily: '"IBM Plex Mono", monospace',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.75rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Keep text as is (no uppercase)
          borderRadius: 5,
          fontWeight: "normal",
          padding: "8px 16px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "12px 0px",
          borderColor: minimalColorsLight.neutral, // Subtle border
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          margin: "20px 0px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: "12px 0px",
        },
      },
    },
  },
});

// Dark mode theme (minimal and typographic focus)
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: minimalColorsDark.primary,
    },
    secondary: {
      main: minimalColorsDark.secondary,
    },
    text: {
      primary: minimalColorsDark.text,
    },
    background: {
      default: minimalColorsDark.background,
      paper: minimalColorsDark.surface,
    },
    error: {
      main: minimalColorsDark.error,
    },
    success: {
      main: minimalColorsDark.success,
    },
  },
  typography: {
    // fontFamily: '"IBM Plex Mono", monospace', // Clean and modern font
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.75rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Keep text as is (no uppercase)
          borderRadius: 5,
          fontWeight: "normal",
          padding: "8px 16px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "12px 0px",
          borderColor: minimalColorsDark.neutral, // Subtle border
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          margin: "20px 0px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: "12px 0px",
        },
      },
    },
  },
});
