"use client";

import React, { FC, useState } from "react";
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
  const [topicFiltered, setTopicFiltered] = useState<string>();

  const postListFiltered = communityFiltered.length
    ? postList.filter((post) => communityFiltered.includes(post.type))
    : postList;

  return (
    <div className="w-[798px]">
      <Action
        communityFiltered={communityFiltered}
        topicFiltered={topicFiltered}
        setCommunityFiltered={setCommunityFiltered}
        setTopicFiltered={setTopicFiltered}
      />
      {postListFiltered.length ? (
        <PostList posts={postListFiltered} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default ActionAndPostList;
