"use client";
import Input from "@/components/input";
import { usePostStore } from "@/store/posts";
import { Box, Button } from "@mui/material";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

interface AddCommentProps {
  postId: string;
}
const AddComment: FC<AddCommentProps> = ({ postId }) => {
  const { postLoading, UpdateMessageInPost } = usePostStore();

  const [visibleAddComment, setVisibleAddComment] = useState<boolean>(false);

  const { control, handleSubmit, watch, reset } = useForm<{
    commentMessage: string;
  }>({
    mode: "all",
    defaultValues: { commentMessage: "" },
  });

  const handleAddComment = async (data: { commentMessage: string }) => {
    const response = await UpdateMessageInPost(postId, {
      commentMessage: data.commentMessage,
    });
    if (response?.done) setVisibleAddComment(false);
    reset();
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(handleAddComment)();
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
                loading={postLoading}
                variant="outlined"
                onClick={setVisibleAddComment.bind(this, false)}
              >
                Cancel
              </Button>
              <Button
                loading={postLoading}
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
