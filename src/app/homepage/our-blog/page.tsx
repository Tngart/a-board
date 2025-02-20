import React from "react";
import Action from "../action";
import Blogs from "../blogs";
import { MessageProps } from "@/app/types";

const OurBlogPage = () => {
  const messages: MessageProps[] = [
    {
      avatarSrc: "/static/images/avatar/1.jpg",
      avatarAlt: "Remy Sharp",
      primaryText: "Brunch this weekend?",
      secondaryText: "I'll be in your neighborhood doing errands this…",
      secondaryUser: "Ali Connors",
      type: "History",
      username: "Remy Sharp",
    },
    {
      avatarSrc: "/static/images/avatar/2.jpg",
      avatarAlt: "Travis Howard",
      primaryText: "Summer BBQ",
      secondaryText: "Wish I could come, but I'm out of town this…",
      secondaryUser: "to Scott, Alex, Jennifer",
      type: "Exercise",
      username: "Travis Howard",
    },
    {
      avatarSrc: "/static/images/avatar/3.jpg",
      avatarAlt: "Cindy Baker",
      primaryText: "Oui Oui",
      secondaryText: "Do you have Paris recommendations? Have you ever…",
      type: "Food",
      secondaryUser: "Sandra Adams",
      username: "Cindy Baker",
    },
    {
      avatarSrc: "/static/images/avatar/2.jpg",
      avatarAlt: "Remy Sharp",
      primaryText: "Summer BBQ",
      secondaryText: "Wish I could come, but I'm out of town this…",
      secondaryUser: "to Scott, Alex, Jennifer",
      type: "Exercise",
      username: "Remy Sharp",
    },
  ];

  const filterMessages = messages.filter(
    (message) => message.username === "Remy Sharp"
  );

  return (
    <div className="w-[798px]">
      <Action />
      <Blogs posts={filterMessages} />
    </div>
  );
};

export default OurBlogPage;
