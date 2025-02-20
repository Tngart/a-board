"use client";

import React, { FC, useMemo, useState } from "react";
import Action from "../../components/blogs/action";
import PostList from "../../components/blogs/posts";
import { CommunityEnum } from "@/app/enum";
import { PostResponse } from "@/app/types";
import EmptyState from "../empty";

interface IProps {
  postList: PostResponse[];
  isEditable?: boolean;
}

const ActionAndPostList: FC<IProps> = ({ postList, isEditable }) => {
  const [communitySelected, setCommunitySelected] = useState<CommunityEnum[]>(
    []
  );
  const [titleFiltered, setTitleFiltered] = useState<string>("");

  const filterTwoAlphabet = titleFiltered.length >= 2 ? titleFiltered : "";

  const postListFiltered = useMemo(
    () =>
      postList.filter((post) => {
        const matchesCommunity =
          !communitySelected.length ||
          communitySelected.includes(post.community);
        const matchesTitle =
          !filterTwoAlphabet ||
          post.title.toLowerCase().includes(filterTwoAlphabet.toLowerCase());

        return matchesCommunity && matchesTitle;
      }),
    [communitySelected, filterTwoAlphabet, postList]
  );

  return (
    <div className="w-[798px]">
      <Action
        communitySelected={communitySelected}
        titleFiltered={filterTwoAlphabet}
        setCommunitySelected={setCommunitySelected}
        setTitleFiltered={setTitleFiltered}
      />
      {postListFiltered.length ? (
        <PostList
          posts={postListFiltered}
          titleFiltered={filterTwoAlphabet}
          isEditable={isEditable}
        />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default ActionAndPostList;
