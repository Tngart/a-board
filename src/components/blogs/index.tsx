"use client";

import React, { FC, useMemo, useState } from "react";
import Action from "../../components/blogs/action";
import PostList from "../../components/blogs/posts";
import { CommunityEnum } from "@/app/enum";
import { MessageProps } from "@/app/types";
import EmptyState from "../empty";

interface IProps {
  postList: MessageProps[];
}

const ActionAndPostList: FC<IProps> = ({ postList }) => {
  const [communityFiltered, setCommunityFiltered] = useState<CommunityEnum[]>(
    []
  );
  const [topicFiltered, setTopicFiltered] = useState<string>("");

  const filterTwoAlphabet = topicFiltered.length >= 2 ? topicFiltered : "";

  const postListFiltered = useMemo(
    () =>
      postList.filter((post) => {
        const matchesCommunity =
          !communityFiltered.length ||
          communityFiltered.includes(post.community);
        const matchesTopic =
          !filterTwoAlphabet ||
          post.topic.toLowerCase().includes(filterTwoAlphabet.toLowerCase());

        return matchesCommunity && matchesTopic;
      }),
    [communityFiltered, filterTwoAlphabet, postList]
  );

  return (
    <div className="w-[798px]">
      <Action
        communityFiltered={communityFiltered}
        topicFiltered={filterTwoAlphabet}
        setCommunityFiltered={setCommunityFiltered}
        setTopicFiltered={setTopicFiltered}
      />
      {postListFiltered.length ? (
        <PostList posts={postListFiltered} topicFiltered={filterTwoAlphabet} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default ActionAndPostList;
