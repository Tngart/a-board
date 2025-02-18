"use client";
import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";

import AppBarComponent from "./app-bar";
import DrawerComponent from "./drawer";

const AppBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  return (
    <Box className="flex">
      <CssBaseline />
      <AppBarComponent
        isClosing={isClosing}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <DrawerComponent
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        setIsClosing={setIsClosing}
      />
    </Box>
  );
};

export default AppBar;
