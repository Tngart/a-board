"use client";

import * as PostServices from "@/services/posts";
import ActionAndPostList from "@/components/blogs";
import Alert from "@/components/alert";
import { handleError } from "@/providers/service";
import { PostResponse } from "@/app/types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CommunityEnum } from "../enum";

const HomePage = () => {
  const [postList, setPostList] = useState<PostResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [openCreateDialog, setOpenCreateDialog] = useState<boolean>(false);

  const methods = useForm<{
    title: string;
    description: string;
    community: CommunityEnum[];
  }>({
    mode: "all",
  });

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

  const onSubmit = async (data: { title: string; description: string }) => {
    setLoading(true);
    try {
      const response = await PostServices.PostPost({
        title: data.title,
        description: data.description,
        community: methods.getValues("community")[0],
      });
      if (response.data.success) {
        Alert({
          title: "Success",
          text: "Post created successfully",
          icon: "success",
        });
      }
      FetchPostList();
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    } finally {
      methods.reset();
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchPostList();
  }, []);

  return (
    <ActionAndPostList
      postList={postList}
      methods={methods}
      onCreate={onSubmit}
      loading={loading}
      openCreateDialog={openCreateDialog}
      setOpenCreateDialog={setOpenCreateDialog}
    />
  );
};

export default HomePage;
