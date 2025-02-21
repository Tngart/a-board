"use client";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Community from "../blogs/community";
import { CommunityEnum } from "@/app/enum";
import Input from "../input";
import { Box, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { FC } from "react";
import { PostResponse } from "@/app/types";
import { SetToLabel } from "@/app/helpers";

interface IProps {
  communitySelected: CommunityEnum[];
  currentPost?: PostResponse;
  methods: any;
  open: boolean;
  onClose?: () => void;
  onSubmit?: (data: { title: string; description: string }) => void;
  dialogTitle: string;
  setCommunitySelected: (filtered: CommunityEnum[]) => void;
}
const ActionDialog: FC<IProps> = ({
  communitySelected,
  currentPost,
  dialogTitle,
  methods,
  open,
  onClose,
  onSubmit,
  setCommunitySelected,
}) => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    methods.handleSubmit(onSubmit)();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="action-post"
      fullWidth
    >
      <form onSubmit={handleOnSubmit}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 2,
            right: 2,
            color: "black",
            fontSize: "12px",
          }}
        >
          <Close />
        </IconButton>
        <DialogTitle id="action-post">{dialogTitle}</DialogTitle>
        <DialogContent>
          <Community
            communitySelected={communitySelected}
            variantButton="outlined"
            menuWidth={{ xs: 310, md: 310 }}
            menuPosition="right"
            setCommunitySelected={setCommunitySelected}
            textButton={
              communitySelected.length
                ? SetToLabel(communitySelected[0])
                : "Choose a community"
            }
          />
          <Input
            defaultValue={currentPost?.title}
            control={methods.control}
            name={"title"}
            placeholder="Title"
          />
          <Input
            control={methods.control}
            defaultValue={currentPost?.description}
            multiline
            name={"description"}
            placeholder="What's on your mind..."
            rows={9}
          />
        </DialogContent>
        <DialogActions>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="flex-end"
            gap={1}
            sx={{ width: "100%" }}
          >
            <Button
              onClick={onClose}
              variant="outlined"
              sx={{ width: { xs: "100%", md: "auto" } }}
            >
              Cancel
            </Button>
            <Button
              disabled={!communitySelected.length}
              variant="contained"
              color="success"
              autoFocus
              sx={{ width: { xs: "100%", md: "auto" } }}
              type="submit"
            >
              Post
            </Button>
          </Box>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ActionDialog;
