import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { FC } from "react";

interface IProps {
  id: string;
  open: boolean;
  setOpen: (trigger: boolean) => void;
}
const DeleteDialog: FC<IProps> = ({ id, open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    console.log({ id });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="delete-post"
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle id="delete-post" className="col text-center">
        <p>Please confirm if you wish to</p>
        <p>delete this post</p>
      </DialogTitle>
      <DialogContent className="text-center">
        <p>Are you sure you want to delete the post?</p>
        <p> Once deleted, It cannot be recovered.</p>
      </DialogContent>
      <DialogActions className="mt-5">
        <Box
          display="flex"
          flexDirection={{ xs: "column-reverse", md: "row" }}
          gap={1}
          sx={{ width: "100%" }}
        >
          <Button
            fullWidth
            onClick={handleClose}
            variant="outlined"
            color="info"
            sx={{
              width: {
                color: "gray",
                borderColor: "gray",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            fullWidth
            onClick={handleDelete}
            variant="contained"
            color="error"
            autoFocus
          >
            Delete
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
