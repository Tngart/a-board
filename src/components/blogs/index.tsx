"use client";

import React, { FC, useEffect, useMemo, useState } from "react";
import Action from "../../components/blogs/action";
import PostList from "../../components/blogs/posts";
import { CommunityEnum } from "@/app/enum";
import { PostDataResponse } from "@/app/types/posts";
import EmptyState from "../empty";
import EditDialog from "../dialog/action-dialog";
import CreateDialog from "../dialog/action-dialog";
import DeleteDialog from "../dialog/delete-dialog";
import { useForm } from "react-hook-form";
import { usePostStore } from "@/store/posts";

interface IProps {
  isEditable?: boolean;
  postList?: PostDataResponse[];
}

const ActionAndPostList: FC<IProps> = ({ postList, isEditable }) => {
  const {
    currentEditPost,
    openCreateDialog,
    postLoading,
    CreatePost,
    SetOpenCreateDialog,
    SetOpenUpdateDialog,
    UpdatePost,
  } = usePostStore();
  const methods = useForm<{
    title: string;
    description: string;
    community: CommunityEnum[];
  }>({
    mode: "all",
    defaultValues: {
      title: currentEditPost?.title ?? "",
      description: currentEditPost?.description ?? "",
      community: [currentEditPost?.community],
    },
  });

  const [communitySelectedFilter, setCommunitySelectedFilter] = useState<
    CommunityEnum[]
  >([]);
  const [communitySelectedDialog, setCommunitySelectedDialog] = useState<
    CommunityEnum[]
  >([]);
  const [titleFiltered, setTitleFiltered] = useState<string>("");

  const handleCreate = (data: { title: string; description: string }) => {
    CreatePost(
      {
        title: data.title,
        description: data.description,
        community: communitySelectedDialog[0],
      },
      isEditable
    );
  };

  const handleUpdate = (data: { title: string; description: string }) => {
    if (!currentEditPost) return;
    UpdatePost(currentEditPost._id, {
      title: data.title,
      description: data.description,
      community: communitySelectedDialog[0],
    });
  };

  const filterTwoAlphabet = titleFiltered.length >= 2 ? titleFiltered : "";

  const postListFiltered = useMemo(
    () =>
      postList?.filter((post) => {
        const matchesCommunity =
          !communitySelectedFilter.length ||
          communitySelectedFilter.includes(post.community);
        const matchesTitle =
          !filterTwoAlphabet ||
          post.title.toLowerCase().includes(filterTwoAlphabet.toLowerCase());

        return matchesCommunity && matchesTitle;
      }),
    [communitySelectedFilter, filterTwoAlphabet, postList]
  );

  useEffect(() => {
    if (currentEditPost)
      setCommunitySelectedDialog([currentEditPost.community]);
  }, [currentEditPost]);

  return (
    <div className="w-[798px]">
      <Action
        communitySelected={communitySelectedFilter}
        loading={postLoading}
        setOpenCreateDialog={SetOpenCreateDialog}
        setCommunitySelected={setCommunitySelectedFilter}
        setTitleFiltered={setTitleFiltered}
      />
      {postListFiltered?.length ? (
        <PostList
          posts={postListFiltered}
          titleFiltered={filterTwoAlphabet}
          isEditable={isEditable}
        />
      ) : (
        <EmptyState />
      )}
      <CreateDialog
        communitySelected={communitySelectedDialog}
        open={!!openCreateDialog}
        onClose={SetOpenCreateDialog.bind(null, false)}
        onSubmit={handleCreate}
        methods={methods}
        setCommunitySelected={setCommunitySelectedDialog}
        dialogTitle={"Create Post"}
      />
      <EditDialog
        currentPost={currentEditPost}
        communitySelected={communitySelectedDialog}
        open={!!currentEditPost}
        onClose={SetOpenUpdateDialog.bind(null, undefined)}
        onSubmit={handleUpdate}
        methods={methods}
        setCommunitySelected={setCommunitySelectedDialog}
        dialogTitle={"Edit Post"}
      />
      <DeleteDialog />
    </div>
  );
};

export default ActionAndPostList;
