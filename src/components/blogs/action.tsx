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
  communityFiltered: CommunityEnum[];
  topicFiltered?: string;
  setCommunityFiltered: (filtered: CommunityEnum[]) => void;
  setTopicFiltered: (filtered: string) => void;
}

const Action: FC<IProps> = ({
  communityFiltered,
  setCommunityFiltered,
  setTopicFiltered,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [visibleSearch, setVisibleSearch] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const filterText = event.target.value;
    setTopicFiltered(filterText);
  };

  return (
    <div className="flex justify-between gap-[10px] p-[16px]">
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
            id="search-topic"
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
            variantButton="text"
            textButton="Community"
            communityFiltered={communityFiltered}
            setCommunityFiltered={setCommunityFiltered}
          />
          <Button variant="contained" endIcon={<Add />}>
            Create
          </Button>
        </div>
      )}
    </div>
  );
};

export default Action;
