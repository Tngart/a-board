"use client";

import * as PostServices from "@/services/posts";
import ActionAndPostList from "@/components/blogs";
import Alert from "@/components/alert";
import { PostResponse } from "../types";
import { useEffect, useState } from "react";
import { handleError } from "@/providers/service";

const HomePage = () => {
  const [postList, setPostList] = useState<PostResponse[]>([]);
  const FetchPostList = async () => {
    try {
      const { data } = await PostServices.FetchPostList();
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
    FetchPostList();
  }, []);

  return <ActionAndPostList postList={postList} />;
};

export default HomePage;
