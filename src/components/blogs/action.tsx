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
import ActionDialog from "../dialog/action-dialog";

interface IProps {
  communitySelected: CommunityEnum[];
  topicFiltered?: string;
  setCommunitySelected: (filtered: CommunityEnum[]) => void;
  setTopicFiltered: (filtered: string) => void;
}

const Action: FC<IProps> = ({
  communitySelected,
  setCommunitySelected,
  setTopicFiltered,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const filterText = event.target.value;
    setTopicFiltered(filterText);
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
            communitySelected={communitySelected}
            setCommunitySelected={setCommunitySelected}
            menuWidth={{ xs: 200, md: 300 }}
          />
          <Button
            variant="contained"
            color="success"
            endIcon={<Add />}
            onClick={() => setOpenDialog(true)}
          >
            Create
          </Button>
        </div>
      )}
      <ActionDialog
        open={openDialog}
        setOpen={setOpenDialog}
        title={"Create Post"}
      />
    </div>
  );
};

export default Action;
