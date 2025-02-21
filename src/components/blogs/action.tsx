"use client";

import { Add, Search } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React, { ChangeEvent, FC, useState } from "react";
import Community from "./community";
import { useMediaQuery, useTheme } from "@mui/material";
import { CommunityEnum } from "../../app/enum";

interface IProps {
  communitySelected: CommunityEnum[];
  titleFiltered?: string;
  loading: boolean;
  setCommunitySelected: (filtered: CommunityEnum[]) => void;
  setTitleFiltered: (filtered: string) => void;
  setOpenCreateDialog: (trigger: boolean) => void;
}

const Action: FC<IProps> = ({
  communitySelected,
  loading,
  setCommunitySelected,
  setTitleFiltered,
  setOpenCreateDialog,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [visibleSearch, setVisibleSearch] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const filterText = event.target.value;
    setTitleFiltered(filterText);
  };

  return (
    <div className="flex justify-between gap-[10px] p-[16px] mt-8">
      {!visibleSearch && isMobile ? (
        <div className="ml-1.5">
          <IconButton
            aria-label="search"
            onClick={() => {
              setVisibleSearch(true);
            }}
          >
            <Search />
          </IconButton>
        </div>
      ) : (
        <FormControl variant="standard" fullWidth>
          <OutlinedInput
            disabled={loading}
            id="search-title"
            placeholder="Search"
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <Search onClick={() => isMobile && setVisibleSearch(false)} />
              </InputAdornment>
            }
          />
        </FormControl>
      )}
      {!(visibleSearch && isMobile) && (
        <div className="flex gap-[10px]">
          <Community
            communitySelected={communitySelected}
            isMultiple
            menuWidth={{ xs: 200, md: 300 }}
            menuPosition="left"
            variantButton="text"
            textButton={
              communitySelected.length ? communitySelected[0] : "Community"
            }
            setCommunitySelected={setCommunitySelected}
          />
          <Button
            loading={loading}
            variant="contained"
            color="success"
            endIcon={<Add />}
            onClick={() => setOpenCreateDialog(true)}
          >
            Create
          </Button>
        </div>
      )}
    </div>
  );
};

export default Action;
