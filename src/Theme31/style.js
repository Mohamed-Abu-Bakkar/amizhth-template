import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1054aa", // Rich blue - hsl(213 94% 38%)
      light: "#1976d2", // Primary light - hsl(213 100% 50%)
      dark: "#0d47a1",
    },
    secondary: {
      main: "#e65100", // Warm orange - hsl(20 91% 48%)
      light: "#ff9800", // Secondary light - hsl(20 100% 60%)
      dark: "#bf360c",
    },
    accent: {
      main: "#f57c00", // Gold accent - hsl(45 93% 47%)
      light: "#ffc107", // Accent light - hsl(45 100% 60%)
      dark: "#e65100",
    },
    background: {
      default: "#fafafa", // hsl(0 0% 98%)
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a", // hsl(222.2 84% 4.9%)
      secondary: "rgba(15, 23, 42, 0.7)",
    },
    grey: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      "@media (max-width:768px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "2.75rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          padding: "12px 24px",
          fontWeight: 600,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        contained: {
          background: "linear-gradient(45deg, #e65100, #f57c00)",
          color: "#ffffff",
          "&:hover": {
            background: "linear-gradient(45deg, #bf360c, #e65100)",
            transform: "translateY(-2px)",
            boxShadow: "0 8px 25px -8px rgba(230, 81, 0, 0.4)",
          },
        },
        outlined: {
          borderColor: "rgba(255,255,255,0.3)",
          color: "#ffffff",
          backdropFilter: "blur(10px)",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
            borderColor: "#ffffff",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          borderRadius: 16,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 10px 30px -10px rgba(16, 84, 170, 0.3)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
        outlined: {
          borderColor: "#1054aa",
          color: "#1054aa",
          "&:hover": {
            backgroundColor: "rgba(16, 84, 170, 0.1)",
          },
        },
      },
    },
  },
});
