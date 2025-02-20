import { LocalStorage } from "@/providers/local-storage";
import { Logout } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FC } from "react";

interface UserInfoMenuProps {
  anchorEl: HTMLElement | null;
  setAnchorEl: (anchorEl: HTMLElement | null) => void;
}

const UserInfoMenu: FC<UserInfoMenuProps> = ({ anchorEl, setAnchorEl }) => {
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    LocalStorage.setAccessToken("");
    LocalStorage.setUserId("");
    LocalStorage.setUsername("");
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        id="user-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem
          sx={{ display: { xs: "block", md: "none", alignContent: "end" } }}
        >
          <Typography>User: {LocalStorage.username}</Typography>
        </MenuItem>
        <Divider sx={{ display: { xs: "block", md: "none" } }} />
        <MenuItem
          onClick={handleLogout}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Logout />
          <Typography>Logout</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserInfoMenu;
