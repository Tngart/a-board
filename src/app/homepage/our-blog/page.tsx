"use client";

import ActionAndPostList from "@/components/blogs";
import { useEffect } from "react";
import { usePostStore } from "@/store/posts";

const OurBlogPage = () => {
  const { FetchMyPostList, myPostList } = usePostStore();

  useEffect(() => {
    FetchMyPostList();
  }, [FetchMyPostList]);

  return <ActionAndPostList isEditable postList={myPostList} />;
};

export default OurBlogPage;
