"use client";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter();

const theme = createTheme({
  cssVariables: true,
  palette: {
    background: {
      default: "rgba(187, 194, 192, 1)",
      paper: "rgba(255, 255, 255, 1)",
    },
    primary: {
      main: "rgba(36, 56, 49, 1)",
      contrastText: "rgba(255, 255, 255, 1)",
    },
    secondary: {
      main: "rgba(43, 95, 68, 1)",
      contrastText: "rgba(255, 255, 255, 1)",
    },
    text: {
      primary: "rgba(0, 0, 0, 1)",
      secondary: "rgba(255, 255, 255, 1)",
    },
    success: {
      main: "rgba(73, 165, 105, 1)",
    },
    action: {
      disabledBackground: "rgba(147, 148, 148, 1)",
      disabled: "rgba(187, 194, 192, 1)",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          position: "fixed",
          color: theme.palette.primary.contrastText,
          background: theme.palette.primary.main,
          boxShadow: "none",
          backdropFilter: "blur(20px)",
          borderRadius: "0",
          "&:focus": {
            outline: "none",
          },
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          zIndex: theme.zIndex.appBar + 1,
          "@media (min-width: 600px)": {
            zIndex: theme.zIndex.appBar - 1,
          },
          width: 275,
        }),
        paperAnchorRight: ({ theme }) => ({
          borderTopLeftRadius: "12px",
          borderBottomLeftRadius: "12px",
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          height: "100%",
        }),
        paperAnchorLeft: ({ theme }) => ({
          border: "none",
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
        }),
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          justifyContent: "center",
          fontSize: "18px",
          color: theme.palette.text.secondary,
          "@media (min-width: 600px)": {
            color: theme.palette.text.primary,
          },
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        text: {
          color: "rgba(0,0,0, 1)",
          ":hover": {
            background: "transparent",
          },
        },
        outlined: {
          background: "rgba(255, 255, 255, 1)",
          borderColor: "rgba(73, 165, 105, 1)",
          color: "rgba(73, 165, 105, 1)",
        },
        root: {
          borderRadius: "8px",
          lineHeight: "1.875rem",
          minWidth: "105px",
          height: "40px",
          textTransform: "none",
        },
      },
    },
    MuiFab: {
      defaultProps: {
        disableRipple: true,
        size: "small",
      },
      styleOverrides: {
        primary: {
          background: "rgba(216, 233, 228, 1)",
          ":hover": {
            background: "rgba(216, 233, 228, 1)",
          },
          color: "rgba(36, 56, 49, 1)",
        },
        root: {
          fontSize: "44px",
          boxShadow: "none",
          ":active": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderColor: "rgba(216, 233, 228, 1)",
          borderRadius: "8px",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderColor: "rgba(216, 233, 228, 1)",
          borderRadius: "8px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        multiline: {
          borderRadius: "8px",
          height: "auto",
        },
        root: {
          borderRadius: "8px",
          height: "40px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(216, 233, 228, 1)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(216, 233, 228, 1)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(216, 233, 228, 1)",
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: ({ theme }) => ({
          zIndex: theme.zIndex.appBar + 2,
        }),
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "12px",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: "24px 20px",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          padding: "0px 20px",
          gap: "4px",
          display: "flex",
          flexDirection: "column",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "20px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            background: "rgba(216, 233, 228, 1)",
          },
          "&.Mui-selected:hover": {
            background: "rgba(216, 233, 228, 1)",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderColor: "rgba(216, 233, 228, 1)",
          borderRadius: "8px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          border: "none",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        ":root": {
          "--primary-main": theme.palette.primary.main,
          "--primary-contrastText": theme.palette.primary.contrastText,
          "--secondary-main": theme.palette.secondary.main,
          "--secondary-contrastText": theme.palette.secondary.contrastText,
          "--text-primary": theme.palette.text.primary,
          "--text-secondary": theme.palette.text.secondary,
        },
        "input:-webkit-autofill": {
          WebkitBoxShadow: `0 0 0 30px ${theme.vars.palette.background.default} inset !important`,
        },
        "input::-ms-clear, input::-ms-reveal": {
          display: "none",
        },
      }),
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h2: {
      fontWeight: 600,
      fontSize: "28px",
    },
    h3: {
      fontWeight: 600,
      fontSize: "28px",
    },
    h6: {
      fontWeight: 600,
      fontSize: "16px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "12px",
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "14px",
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "12px",
      color: "rgba(147, 148, 148, 1)",
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
