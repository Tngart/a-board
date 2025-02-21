"use client";

import ActionAndPostList from "@/components/blogs";
import { useEffect } from "react";
import { usePostStore } from "@/store/posts";

const HomePage = () => {
  const { FetchPostList, postList } = usePostStore();

  useEffect(() => {
    FetchPostList();
  }, [FetchPostList]);

  return <ActionAndPostList postList={postList} />;
};

export default HomePage;
