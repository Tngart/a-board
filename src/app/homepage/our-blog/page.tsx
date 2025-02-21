"use client";

import * as PostServices from "@/services/posts";
import ActionAndPostList from "@/components/blogs";
import Alert from "@/components/alert";
import { handleError } from "@/providers/service";
import { PostResponse } from "@/app/types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CommunityEnum } from "@/app/enum";

const OurBlogPage = () => {
  const [postList, setPostList] = useState<PostResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [openCreateDialog, setOpenCreateDialog] = useState<boolean>(false);
  const [currentEditPost, setCurrentEditPost] = useState<PostResponse>();
  const [currentDeleteId, setCurrentDeleteId] = useState<string>();

  const methods = useForm<{
    title: string;
    description: string;
    community: CommunityEnum[];
  }>({
    mode: "all",
  });
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

  const onCreate = async (data: { title: string; description: string }) => {
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
      FetchMyPostList();
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    } finally {
      methods.reset();
      setLoading(false);
      setOpenCreateDialog(false);
    }
  };

  const onEdit = async (data: { title: string; description: string }) => {
    if (!currentEditPost) return;
    setLoading(true);
    try {
      const response = await PostServices.PatchPost(currentEditPost._id, {
        title: data.title,
        description: data.description,
        community: methods.getValues("community")[0],
      });
      if (response.data.success) {
        Alert({
          title: "Success",
          text: "Post updated successfully",
          icon: "success",
        });
      }
      FetchMyPostList();
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    } finally {
      methods.reset();
      setLoading(false);
      setCurrentEditPost(undefined);
    }
  };

  const onDelete = async () => {
    if (!currentDeleteId) return;
    setLoading(true);
    try {
      const response = await PostServices.DeletePost(currentDeleteId);
      if (response.status === 204) {
        Alert({
          title: "Success",
          text: "Post deleted successfully",
          icon: "success",
        });
      }
      FetchMyPostList();
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    } finally {
      methods.reset();
      setLoading(false);
      setCurrentDeleteId(undefined);
    }
  };

  useEffect(() => {
    FetchMyPostList();
  }, []);

  return (
    <ActionAndPostList
      isEditable
      postList={postList}
      methods={methods}
      loading={loading}
      onCreate={onCreate}
      onEdit={onEdit}
      onDelete={onDelete}
      currentDeleteId={currentDeleteId}
      setCurrentDeleteId={setCurrentDeleteId}
      currentEditPost={currentEditPost}
      setCurrentEditPost={setCurrentEditPost}
      openCreateDialog={openCreateDialog}
      setOpenCreateDialog={setOpenCreateDialog}
    />
  );
};

export default OurBlogPage;
