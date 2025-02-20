"use client";

import * as PostServices from "@/services/posts";
import CommentList from "@/components/blogs/comments";
import PostItem from "@/components/blogs/post-item";
import AddComment from "@/components/blogs/add-comment";
import BackButton from "@/components/back-button";
import { PostResponse } from "@/app/types";
import { FC } from "react";
import { useForm } from "react-hook-form";
import Alert from "@/components/alert";
import { handleError } from "@/providers/service";

interface PostDetailProps {
  post?: PostResponse;
}
const PostDetail: FC<PostDetailProps> = ({ post }) => {
  const methods = useForm<{ commentMessage: string }>({
    mode: "all",
    defaultValues: { commentMessage: "" },
  });

  const onSubmit = async (data: { commentMessage: string }) => {
    if (!post) return;
    try {
      await PostServices.PatchMessage(post?._id, {
        message: data.commentMessage,
      });
      methods.reset();
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    }
  };
  return (
    <>
      <BackButton />
      <PostItem post={post} isPostDetail />
      <AddComment methods={methods} onSubmit={onSubmit} />
      <CommentList comments={post?.comments} />
    </>
  );
};

export default PostDetail;
