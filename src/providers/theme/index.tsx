"use client";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter();

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "rgba(43, 95, 68, 1)" },
        success: { main: "rgba(73, 165, 105, 1)" },
        AppBar: { defaultBg: "rgba(36, 56, 49, 1)" },
      },
    },
    dark: {
      palette: {
        primary: { main: "rgba(43, 95, 68, 1)" },
        success: { main: "rgba(73, 165, 105, 1)" },
        AppBar: { defaultBg: "rgba(36, 56, 49, 1)" },
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: "rgba(255, 255, 255, 1)",
          background: theme.vars.palette.AppBar.defaultBg,
          boxShadow: "none",
          backdropFilter: "blur(20px)",
          borderRadius: "0",
          height: "60px",
        }),
      },
    },

    MuiCssBaseline: {
      defaultProps: {
        enableColorScheme: true,
      },
      styleOverrides: (theme) => ({
        "input:-webkit-autofill": {
          WebkitBoxShadow: `0 0 0 30px ${theme.vars.palette.background.default} inset !important`,
        },
        "input::-ms-clear, input::-ms-reveal": {
          display: "none",
        },
      }),
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          lineHeight: "1.875rem",
          textTransform: "none",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: { root: { borderRadius: "8px !important" } },
    },
    MuiInput: {
      styleOverrides: {
        root: { borderRadius: "8px !important" },
      },
    },
    MuiSelect: { styleOverrides: { root: { borderRadius: "8px" } } },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default function ThemeProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </MuiThemeProvider>
  );
}
