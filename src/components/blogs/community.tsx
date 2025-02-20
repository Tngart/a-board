import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Check, KeyboardArrowDown } from "@mui/icons-material";
import { Backdrop, Button, ButtonProps, Typography } from "@mui/material";
import { useState } from "react";
import { EnumToOptions } from "@/app/helpers";
import { CommunityEnum } from "@/app/enum";

interface CommunityProps {
  communityFiltered: CommunityEnum[];
  variantButton: ButtonProps["variant"];
  textButton: string;
  setCommunityFiltered: (filtered: CommunityEnum[]) => void;
}

const Community: React.FC<CommunityProps> = ({
  variantButton,
  textButton,
  communityFiltered,
  setCommunityFiltered,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelectCommunity = (selected: CommunityEnum) => {
    if (communityFiltered.includes(selected)) {
      setCommunityFiltered(
        communityFiltered.filter((item) => item !== selected)
      );
      return;
    }

    setCommunityFiltered([...communityFiltered, selected]);
  };

  return (
    <div style={{ position: "relative" }}>
      <Button
        disableRipple
        variant={variantButton}
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
      >
        {textButton}
      </Button>
      <Backdrop open={open} onClick={handleClose} />
      <Menu
        id="community-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              width: { xs: "200px", sm: "320px" },
              position: "relative",
              zIndex: (theme) => theme.zIndex.appBar + 2,
            },
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {EnumToOptions(CommunityEnum).map((option) => (
          <MenuItem
            key={option.value}
            selected={communityFiltered.includes(option.value)}
            onClick={handleSelectCommunity.bind(this, option.value)}
          >
            <div className="flex justify-between w-full">
              <Typography>{option.label}</Typography>
              {communityFiltered.includes(option.value) && (
                <Check sx={{ fontSize: 20 }} />
              )}
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Community;
