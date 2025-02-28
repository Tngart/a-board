"use client";
import {
  Box,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";
import { RiHome6Line } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import { ChevronRight } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";
import { FC, useMemo } from "react";
import { useUserStore } from "@/store/users";

interface DrawerProps {
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
  setIsClosing: (value: boolean) => void;
}

const DrawerComponent: FC<DrawerProps> = ({
  mobileOpen,
  setIsClosing,
  setMobileOpen,
}) => {
  const { me } = useUserStore();
  const drawerWidth = 275;
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const listMenu = useMemo(
    () => [
      {
        name: "Home",
        path: "/homepage",
        icon: <RiHome6Line />,
      },
      {
        name: "Our blog",
        path: "/homepage/our-blog",
        icon: <IoCreateOutline />,
        hidden: !me,
      },
    ],
    [me]
  );

  const drawer = (
    <>
      <DrawerHeader>
        <IconButton
          sx={{ color: theme.palette.primary.contrastText }}
          onClick={handleDrawerClose}
        >
          <ChevronRight />
        </IconButton>
      </DrawerHeader>
      <List sx={{ paddingTop: "2px" }}>
        {listMenu
          .filter((item) => !item.hidden)
          .map((menu) => {
            const isActive = pathname === menu.path;
            return (
              <ListItem key={menu.name}>
                <ListItemButton onClick={() => router.push(menu.path)}>
                  <ListItemIcon sx={{ fontSize: isActive ? "22px" : "18px" }}>
                    {menu.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={menu.name}
                    slotProps={{
                      primary: {
                        fontWeight: isActive ? "bold" : "normal",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </>
  );
  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth } }}>
      <MuiDrawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        {drawer}
      </MuiDrawer>
      <MuiDrawer
        variant="permanent"
        sx={{ display: { xs: "none", sm: "block", paddingTop: "20px" } }}
        open
      >
        {drawer}
      </MuiDrawer>
    </Box>
  );
};

export default DrawerComponent;
