"use client";

import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Check, KeyboardArrowDown } from "@mui/icons-material";
import {
  Backdrop,
  Button,
  ButtonProps,
  PopoverOrigin,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { EnumToOptions } from "@/app/helpers";
import { CommunityEnum } from "@/app/enum";

interface CommunityProps {
  communitySelected: CommunityEnum[];
  isMultiple?: boolean;
  menuPosition: "left" | "right";
  menuWidth: { xs: number; md: number };
  variantButton: ButtonProps["variant"];
  textButton: string;
  setCommunitySelected: (filtered: CommunityEnum[]) => void;
}

const Community: React.FC<CommunityProps> = ({
  communitySelected,
  isMultiple,
  menuPosition,
  menuWidth,
  textButton,
  variantButton,
  setCommunitySelected,
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
    if (!isMultiple) {
      setCommunitySelected([selected]);
      return;
    }
    if (communitySelected.includes(selected)) {
      setCommunitySelected(
        communitySelected.filter((item) => item !== selected)
      );
      return;
    }

    setCommunitySelected([...communitySelected, selected]);
  };
  const anchorOrigin: PopoverOrigin = {
    vertical: "bottom",
    horizontal: menuPosition === "right" ? "left" : "right",
  };

  const transformOrigin: PopoverOrigin = {
    vertical: "top",
    horizontal: menuPosition === "right" ? "left" : "right",
  };

  return (
    <div style={{ position: "relative" }}>
      <Button
        disableRipple
        variant={variantButton}
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
        sx={{ width: { xs: "100%", sm: "auto" } }}
      >
        {textButton}
      </Button>
      <Backdrop open={open} onClick={handleClose} />
      <Menu
        id="community-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          marginTop: "10px",
        }}
        slotProps={{
          paper: {
            sx: {
              width: { xs: menuWidth.xs, md: menuWidth.md },
              position: "relative",
              paddingY: 1,
            },
          },
        }}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        {EnumToOptions(CommunityEnum).map((option) => (
          <MenuItem
            key={option.value}
            selected={communitySelected.includes(option.value)}
            onClick={handleSelectCommunity.bind(this, option.value)}
          >
            <div className="flex justify-between w-full">
              <Typography>{option.label}</Typography>
              {communitySelected.includes(option.value) && (
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
