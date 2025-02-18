import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Check, KeyboardArrowDown } from "@mui/icons-material";
import { Backdrop, Button, ButtonProps, Typography } from "@mui/material";
import { useState } from "react";

const options = [
  "History",
  "Food",
  "Pets",
  "Health",
  "Fashion",
  "Exercise",
  "Others",
];

interface CommunityProps {
  variantButton: ButtonProps["variant"];
  textButton: string;
}

const Community: React.FC<CommunityProps> = ({ variantButton, textButton }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelectCommunity = (item: string) => {
    if (selectedList.includes(item)) {
      setSelectedList(selectedList.filter((i) => i !== item));
      return;
    }

    setSelectedList([...selectedList, item]);
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
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={selectedList.includes(option)}
            onClick={handleSelectCommunity.bind(this, option)}
          >
            <div className="flex justify-between w-full">
              <Typography>{option}</Typography>
              {selectedList.includes(option) && <Check />}
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Community;
