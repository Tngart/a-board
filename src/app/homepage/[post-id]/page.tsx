"use client";
import { CommunityEnum } from "@/app/enum";
import { MessageProps } from "@/app/types";
import CommentList from "@/components/blogs/comments";
import PostItem from "@/components/blogs/post-item";
import Input from "@/components/input";
import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Fab } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const PostDetailPage = () => {
  const router = useRouter();
  const [visibleAddComment, setVisibleAddComment] = useState<boolean>(false);
  const mockPost: MessageProps = {
    _id: "12345",
    community: CommunityEnum.Food,
    userInfo: {
      _id: "12345",
      username: "JohnDoe",
    },
    topic: "Delicious Pasta Recipe",
    description:
      "Learn how to make a delicious and quick pasta recipe. It's perfect for dinner!",
    updatedAt: "2025-02-15T11:00:00Z",
    comments: [
      {
        username: "JaneSmith",
        message: "This looks amazing! Can't wait to try it.",
        updatedAt: "2025-02-19T10:30:00Z",
      },
      {
        username: "MarkLee",
        message:
          "I made this last night, and it was delicious! Thanks for the recipe.",
        updatedAt: "2024-02-20T11:00:00Z",
      },
      {
        username: "MarkLee",
        message:
          "I made this last night, and it was delicious! Thanks for the recipe.",
        updatedAt: "2025-02-15T11:00:00Z",
      },
    ],
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ fontSize: "44px", marginBottom: "20px", margin: "16px" }}
        onClick={router.back}
      >
        <ArrowBack sx={{ fontSize: "18px" }} />
      </Fab>
      <PostItem post={mockPost} isPostDetail />
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
              <Button variant="contained">Post</Button>
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
      <CommentList comments={mockPost.comments} />
    </>
  );
};

export default PostDetailPage;
