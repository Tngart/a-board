"use client";
import Input from "@/components/input";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const AddComment = () => {
  const [visibleAddComment, setVisibleAddComment] = useState<boolean>(false);

  return (
    <Box className="mx-[16px]">
      {visibleAddComment ? (
        <>
          <Input
            id="add-comment"
            placeholder="What's on your mind..."
            multiline
            rows={4}
            fullWidth
          />
          <div className="flex justify-end gap-[8px] my-[10px]">
            <Button
              variant="outlined"
              onClick={setVisibleAddComment.bind(this, false)}
            >
              Cancel
            </Button>
            <Button variant="contained" color="success">
              Post
            </Button>
          </div>
        </>
      ) : (
        <Button
          variant="outlined"
          onClick={setVisibleAddComment.bind(this, true)}
        >
          Add comment
        </Button>
      )}
    </Box>
  );
};

export default AddComment;
