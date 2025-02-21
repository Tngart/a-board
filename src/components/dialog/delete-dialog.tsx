import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { FC } from "react";

interface IProps {
  id?: string;
  setOpen?: (trigger?: boolean) => void;
  onDelete?: () => void;
}
const DeleteDialog: FC<IProps> = ({ id, setOpen, onDelete }) => {
  const handleClose = () => {
    setOpen?.(undefined);
  };

  return (
    <Dialog
      open={!!id}
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
            onClick={onDelete}
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
