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
  const [topicFiltered, setTopicFiltered] = useState<string>("");

  const filterTwoAlphabet = topicFiltered.length >= 2 ? topicFiltered : "";

  const postListFiltered = useMemo(
    () =>
      postList.filter((post) => {
        const matchesCommunity =
          !communitySelected.length ||
          communitySelected.includes(post.community);
        const matchesTopic =
          !filterTwoAlphabet ||
          post.topic.toLowerCase().includes(filterTwoAlphabet.toLowerCase());

        return matchesCommunity && matchesTopic;
      }),
    [communitySelected, filterTwoAlphabet, postList]
  );

  return (
    <div className="w-[798px]">
      <Action
        communitySelected={communitySelected}
        topicFiltered={filterTwoAlphabet}
        setCommunitySelected={setCommunitySelected}
        setTopicFiltered={setTopicFiltered}
      />
      {postListFiltered.length ? (
        <PostList
          posts={postListFiltered}
          topicFiltered={filterTwoAlphabet}
          isEditable={isEditable}
        />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default ActionAndPostList;
