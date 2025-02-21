"use client";

import CommentList from "@/components/blogs/comments";
import PostItem from "@/components/blogs/post-item";
import AddComment from "@/components/blogs/add-comment";
import BackButton from "@/components/back-button";
import { FC, useEffect } from "react";
import { usePostStore } from "@/store/posts";

interface PostDetailProps {
  postId: string;
}
const PostDetail: FC<PostDetailProps> = ({ postId }) => {
  const { currentPost, FetchPostById } = usePostStore();

  useEffect(() => {
    FetchPostById(postId);
  }, [FetchPostById, postId]);

  return (
    <>
      <BackButton />
      <PostItem post={currentPost} isPostDetail />
      <AddComment postId={postId} />
      <CommentList comments={currentPost?.comments} />
    </>
  );
};

export default PostDetail;
