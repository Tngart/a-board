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
import { FC, useState } from "react";
import { PostResponse } from "@/app/types";
import { SetToLabel } from "@/app/helpers";

interface IProps {
  currentPost?: PostResponse;
  title: string;
  open: boolean;
  setOpen: (trigger: boolean) => void;
}
const ActionDialog: FC<IProps> = ({ currentPost, open, title, setOpen }) => {
  const [communitySelected, setCommunitySelected] = useState<CommunityEnum[]>(
    []
  );
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="action-post"
      fullWidth
    >
      <IconButton
        onClick={handleClose}
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
      <DialogTitle id="action-post">{title}</DialogTitle>
      <DialogContent>
        <Community
          communitySelected={communitySelected}
          setCommunitySelected={setCommunitySelected}
          textButton={
            SetToLabel(currentPost?.community) || "Choose a community"
          }
          variantButton="outlined"
          menuWidth={{ xs: 310, md: 310 }}
        />
        <Input placeholder="Title" />
        <Input placeholder="What's on your mind..." multiline rows={9} />
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
            onClick={handleClose}
            variant="outlined"
            sx={{ width: { xs: "100%", md: "auto" } }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
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
    </Dialog>
  );
};

export default ActionDialog;
