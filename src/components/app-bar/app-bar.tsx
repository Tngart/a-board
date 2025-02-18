"use client";
import { useRouter } from "next/navigation";
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { FC } from "react";

interface AppBarProps {
  isClosing: boolean;
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
}
const AppBarComponent: FC<AppBarProps> = ({
  isClosing,
  mobileOpen,
  setMobileOpen,
}) => {
  const router = useRouter();
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <MuiAppBar>
      <Toolbar className="flex justify-between">
        <Link href="/">
          <Typography className="typography-brand">a Board</Typography>
        </Link>
        <div>
          <Button
            color="success"
            variant="contained"
            onClick={() => router.push("/sign-in")}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Sign in
          </Button>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBarComponent;
