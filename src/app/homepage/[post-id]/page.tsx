"use client";
import * as PostServices from "@/services/posts";
import { PostResponse } from "@/app/types";
import CommentList from "@/components/blogs/comments";
import PostItem from "@/components/blogs/post-item";
import React, { useCallback, useEffect, useState } from "react";
import Alert from "@/components/alert";
import { handleError } from "@/providers/service";
import AddComment from "@/components/blogs/add-comment";
import BackButton from "@/components/back-button";

const PostDetailPage = ({
  params: { postId },
}: {
  params: { postId: string };
}) => {
  const [post, setPost] = useState<PostResponse>();
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

  useEffect(() => {
    FetchPost();
  }, [FetchPost]);

  return (
    <>
      <BackButton />
      <PostItem post={post} isPostDetail />
      <AddComment />
      <CommentList comments={post?.comments} />
    </>
  );
};

export default PostDetailPage;
