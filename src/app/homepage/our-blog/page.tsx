import React from "react";
import { MessageProps } from "@/app/types";
import ActionAndPostList from "@/components/blogs";
import { CommunityEnum } from "@/app/enum";

const OurBlogPage = () => {
  const messages: MessageProps[] = [
    {
      _id: "12345",
      avatarSrc: "/static/images/avatar/1.jpg",
      avatarAlt: "Remy Sharp",
      primaryText: "Brunch this weekend?",
      secondaryText: "I'll be in your neighborhood doing errands this…",
      secondaryUser: "Ali Connors",
      type: CommunityEnum.History,
      username: "Remy Sharp",
    },
    {
      _id: "12345",
      avatarSrc: "/static/images/avatar/2.jpg",
      avatarAlt: "Travis Howard",
      primaryText: "Summer BBQ",
      secondaryText: "Wish I could come, but I'm out of town this…",
      secondaryUser: "to Scott, Alex, Jennifer",
      type: CommunityEnum.Exercise,
      username: "Travis Howard",
    },
    {
      _id: "12345",
      avatarSrc: "/static/images/avatar/3.jpg",
      avatarAlt: "Cindy Baker",
      primaryText: "Oui Oui",
      secondaryText: "Do you have Paris recommendations? Have you ever…",
      type: CommunityEnum.Food,
      secondaryUser: "Sandra Adams",
      username: "Cindy Baker",
    },
    {
      _id: "12345",
      avatarSrc: "/static/images/avatar/2.jpg",
      avatarAlt: "Remy Sharp",
      primaryText: "Summer BBQ",
      secondaryText: "Wish I could come, but I'm out of town this…",
      secondaryUser: "to Scott, Alex, Jennifer",
      type: CommunityEnum.Food,
      username: "Remy Sharp",
    },
  ];

  const filterMessages = messages.filter(
    (message) => message.username === "Remy Sharp"
  );

  return <ActionAndPostList postList={filterMessages} />;
};

export default OurBlogPage;
