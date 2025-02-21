"use client";

import React, { FC, useEffect, useMemo, useState } from "react";
import Action from "../../components/blogs/action";
import PostList from "../../components/blogs/posts";
import { CommunityEnum } from "@/app/enum";
import { PostResponse } from "@/app/types";
import EmptyState from "../empty";
import EditDialog from "../dialog/action-dialog";
import CreateDialog from "../dialog/action-dialog";
import DeleteDialog from "../dialog/delete-dialog";

interface IProps {
  currentEditPost?: PostResponse;
  currentDeleteId?: string;
  openCreateDialog: boolean;
  setCurrentEditPost?: (post?: PostResponse) => void;
  setCurrentDeleteId?: (id?: string) => void;
  setOpenCreateDialog: (trigger: boolean) => void;
  isEditable?: boolean;
  postList: PostResponse[];
  methods: any;
  loading: boolean;
  onCreate: (data: { title: string; description: string }) => void;
  onEdit?: (data: { title: string; description: string }) => void;
  onDelete?: () => void;
}

const ActionAndPostList: FC<IProps> = ({
  currentEditPost,
  currentDeleteId,
  openCreateDialog,
  postList,
  isEditable,
  loading,
  methods,
  onCreate,
  onEdit,
  onDelete,
  setOpenCreateDialog,
  setCurrentEditPost,
  setCurrentDeleteId,
}) => {
  const [communitySelectedFilter, setCommunitySelectedFilter] = useState<
    CommunityEnum[]
  >([]);
  const [communitySelectedDialog, setCommunitySelectedDialog] = useState<
    CommunityEnum[]
  >([]);
  const [titleFiltered, setTitleFiltered] = useState<string>("");

  const filterTwoAlphabet = titleFiltered.length >= 2 ? titleFiltered : "";

  const postListFiltered = useMemo(
    () =>
      postList.filter((post) => {
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
    methods.setValue("community", communitySelectedDialog);
  }, [communitySelectedDialog, methods, currentEditPost]);

  useEffect(() => {
    if (currentEditPost)
      setCommunitySelectedDialog([currentEditPost.community]);
  }, [currentEditPost]);

  return (
    <div className="w-[798px]">
      <Action
        communitySelected={communitySelectedFilter}
        loading={loading}
        setOpenCreateDialog={setOpenCreateDialog}
        setCommunitySelected={setCommunitySelectedFilter}
        setTitleFiltered={setTitleFiltered}
      />
      {postListFiltered.length ? (
        <PostList
          posts={postListFiltered}
          titleFiltered={filterTwoAlphabet}
          isEditable={isEditable}
          setCurrentDeleteId={setCurrentDeleteId}
          setCurrentEditPost={setCurrentEditPost}
        />
      ) : (
        <EmptyState />
      )}
      <CreateDialog
        communitySelected={communitySelectedDialog}
        open={!!openCreateDialog}
        onClose={setOpenCreateDialog.bind(null, false)}
        onSubmit={onCreate}
        methods={methods}
        setCommunitySelected={setCommunitySelectedDialog}
        dialogTitle={"Create Post"}
      />
      <EditDialog
        currentPost={currentEditPost}
        communitySelected={communitySelectedDialog}
        open={!!currentEditPost}
        onClose={setCurrentEditPost?.bind(null, undefined)}
        onSubmit={onEdit}
        methods={methods}
        setCommunitySelected={setCommunitySelectedDialog}
        dialogTitle={"Edit Post"}
      />
      <DeleteDialog
        id={currentDeleteId}
        setOpen={setCurrentDeleteId?.bind(null, undefined)}
        onDelete={onDelete}
      />
    </div>
  );
};

export default ActionAndPostList;
