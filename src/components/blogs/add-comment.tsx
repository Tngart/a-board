"use client";
import Input from "@/components/input";
import { Box, Button } from "@mui/material";
import { FC, useState } from "react";

interface AddCommentProps {
  methods: any;
  onSubmit: (data: { commentMessage: string }) => void;
  loading: boolean;
}
const AddComment: FC<AddCommentProps> = ({ methods, loading, onSubmit }) => {
  const [visibleAddComment, setVisibleAddComment] = useState<boolean>(false);
  const { control, handleSubmit, watch } = methods;

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) handleSubmit(onSubmit)();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Box className="mx-[16px]">
        {visibleAddComment ? (
          <>
            <Input
              id="add-comment"
              placeholder="What's on your mind..."
              control={control}
              name={"commentMessage"}
              multiline
              rows={4}
              fullWidth
            />
            <div className="flex justify-end gap-[8px] my-[10px]">
              <Button
                loading={loading}
                variant="outlined"
                onClick={setVisibleAddComment.bind(this, false)}
              >
                Cancel
              </Button>
              <Button
                loading={loading}
                variant="contained"
                color="success"
                type="submit"
                disabled={!watch("commentMessage")}
              >
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
    </form>
  );
};

export default AddComment;
