"use client";
import * as PostServices from "@/services/posts";
import { PostResponse } from "@/app/types";
import React, { useCallback, useEffect, useState } from "react";
import Alert from "@/components/alert";
import { handleError } from "@/providers/service";
import PostDetail from "./post-detail";

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

  return <PostDetail post={post} />;
};

export default PostDetailPage;
