"use client";
import { useRouter } from "next/navigation";
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import UserInfoMenu from "../logout";
import { LocalStorage } from "@/providers/local-storage";
import { useUserStore } from "@/store/users";

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { me, Me } = useUserStore();

  const handleClickAvatar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  useEffect(() => {
    if (me) return;
    Me();
  }, [Me, me]);

  return (
    <MuiAppBar>
      <Toolbar className="flex justify-between">
        <Link href="/">
          <Typography className="typography-brand">a Board</Typography>
        </Link>
        <div className="flex items-center">
          {LocalStorage.username ? (
            <>
              <Button
                disableRipple
                endIcon={
                  <Avatar alt={LocalStorage.username} src="/avatar.svg" />
                }
                sx={{ color: "white" }}
                onClick={handleClickAvatar}
              >
                <Typography
                  className="pr-3"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  {LocalStorage.username}
                </Typography>
              </Button>
              <UserInfoMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
            </>
          ) : (
            <Button
              variant="contained"
              color="success"
              onClick={() => router.push("/sign-in")}
            >
              Sign in
            </Button>
          )}

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
