"use client";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/navigation";
import { Typography } from "@mui/material";
import "@fontsource/castoro/400.css";

const AppBarComponent = () => {
  const router = useRouter();

  return (
    <MuiAppBar color="transparent" position="fixed">
      <Toolbar>
        <Box
          display="flex"
          onClick={() => router.push(`/`)}
          sx={{ cursor: "pointer", marginTop: -0.5 }}
        >
          <Typography
            style={{
              fontFamily: "Castoro",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            a Board
          </Typography>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

const AppBar = () => {
  return (
    <>
      <AppBarComponent />
    </>
  );
};

export default AppBar;
