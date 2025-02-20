"use client";

import * as PostServices from "@/services/posts";
import ActionAndPostList from "@/components/blogs";
import Alert from "@/components/alert";
import { handleError } from "@/providers/service";
import { PostResponse } from "@/app/types";
import { useEffect, useState } from "react";

const OurBlogPage = () => {
  const [postList, setPostList] = useState<PostResponse[]>([]);
  const FetchMyPostList = async () => {
    try {
      const { data } = await PostServices.FetchMyPostList();
      if (data.data) {
        setPostList(data.data);
      }
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    }
  };

  useEffect(() => {
    FetchMyPostList();
  }, []);

  return <ActionAndPostList isEditable postList={postList} />;
};

export default OurBlogPage;
