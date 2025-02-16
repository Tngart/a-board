"use client";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "rgba(43, 95, 68, 1)" },
        success: { main: "rgba(73, 165, 105, 1)" },
      },
    },
    dark: {
      palette: {
        primary: { main: "rgba(43, 95, 68, 1)" },
        success: { main: "rgba(73, 165, 105, 1)" },
      },
    },
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
