"use client";

import * as PostServices from "@/services/posts";
import Alert from "@/components/alert";
import { handleError } from "@/providers/service";
import CommentList from "@/components/blogs/comments";
import PostItem from "@/components/blogs/post-item";
import AddComment from "@/components/blogs/add-comment";
import BackButton from "@/components/back-button";
import { PostResponse } from "@/app/types";
import { FC, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface PostDetailProps {
  postId: string;
}
const PostDetail: FC<PostDetailProps> = ({ postId }) => {
  const [post, setPost] = useState<PostResponse>();
  const [loading, setLoading] = useState(false);
  const methods = useForm<{ commentMessage: string }>({
    mode: "all",
    defaultValues: { commentMessage: "" },
  });

  const FetchPost = useCallback(async () => {
    try {
      const { data } = await PostServices.FetchPost(postId);
      if (data.data) {
        setPost(data.data);
      }
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    }
  }, [postId]);

  const onSubmit = async (data: { commentMessage: string }) => {
    if (!post) return;
    setLoading(true);
    try {
      await PostServices.PatchMessage(postId, {
        commentMessage: data.commentMessage,
      });
      FetchPost();
      Alert({
        title: "Success",
        text: "Comment updated successfully",
        icon: "success",
      });
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    } finally {
      setLoading(false);
      methods.reset();
    }
  };

  useEffect(() => {
    FetchPost();
  }, [FetchPost]);

  return (
    <>
      <BackButton />
      <PostItem post={post} isPostDetail />
      <AddComment methods={methods} onSubmit={onSubmit} loading={loading} />
      <CommentList comments={post?.comments} />
    </>
  );
};

export default PostDetail;
