import React from "react";
import { PostResponse } from "@/app/types";
import ActionAndPostList from "@/components/blogs";
import { CommunityEnum } from "@/app/enum";

const OurBlogPage = () => {
  const mockPosts: PostResponse[] = [
    {
      _id: "12345",
      community: CommunityEnum.Food,
      userInfo: {
        _id: "12345",
        username: "JohnDoe",
      },
      topic: "Delicious Pasta Recipe",
      description:
        "Learn how to make a delicious and quick pasta recipe. It's perfect for dinner!",
      updatedAt: "2025-02-15T11:00:00Z",
      comments: [
        {
          username: "JaneSmith",
          message: "This looks amazing! Can't wait to try it.",
          updatedAt: "2025-02-20T10:30:00Z",
        },
        {
          username: "MarkLee",
          message:
            "I made this last night, and it was delicious! Thanks for the recipe.",
          updatedAt: "2025-02-20T11:00:00Z",
        },
      ],
    },
    {
      _id: "12345",
      community: CommunityEnum.Health,

      userInfo: {
        _id: "23456",
        username: "HealthySam",
      },
      topic: "Morning Yoga Routine",
      description:
        "Check out this simple 10-minute yoga routine to start your day refreshed!",
      updatedAt: "2025-02-15T11:00:00Z",
      comments: [
        {
          username: "FitJane",
          message: "This routine really helped me feel energized. Thank you!",
          updatedAt: "2025-02-18T08:45:00Z",
        },
      ],
    },
    {
      _id: "12345",
      community: CommunityEnum.Pets,

      userInfo: {
        _id: "34567",
        username: "PetLover",
      },
      topic: "Tips for Training Your Puppy",
      description:
        "Learn the best practices for training your puppy and teaching basic commands.",
      updatedAt: "2025-02-15T11:00:00Z",
      comments: [
        {
          username: "DogMom",
          message:
            "These tips are fantastic! My puppy learned 'sit' in just a few days.",
          updatedAt: "2025-02-19T14:20:00Z",
        },
        {
          username: "PupTrainer",
          message: "Consistency is key when training puppies. Great post!",
          updatedAt: "2025-02-19T15:30:00Z",
        },
      ],
    },
    {
      _id: "12345",
      community: CommunityEnum.Food,

      userInfo: {
        _id: "45678",
        username: "FitMaster",
      },
      topic: "Top Winter Fashion Trends 2025",
      description:
        "Stay warm and stylish this winter with these top fashion trends.",
      updatedAt: "2025-02-17T11:00:00Z",
      comments: [
        {
          username: "MarathonMan",
          message:
            "Love these ideas! The layered look is definitely in this season.",
          updatedAt: "2025-02-12T13:50:00Z",
        },
      ],
    },
    {
      _id: "12345",
      community: CommunityEnum.Exercise,

      userInfo: {
        _id: "56789",
        username: "FitMaster",
      },
      topic: "How to Improve Your 5K Time",
      description:
        "Follow these tips to shave minutes off your 5K running time.",
      updatedAt: "2025-02-15T11:00:00Z",
      comments: [
        {
          username: "Runner123",
          message:
            "This is super helpful! I'm already seeing improvements in my runs.",
          updatedAt: "2025-02-16T09:00:00Z",
        },
        {
          username: "MarathonMan",
          message:
            "I added interval training like you suggested, and it made a huge difference!",
          updatedAt: "2025-02-16T10:30:00Z",
        },
      ],
    },
  ];

  const filterMessages = mockPosts.filter(
    (message) => message.userInfo.username === "FitMaster"
  );

  return <ActionAndPostList postList={filterMessages} />;
};

export default OurBlogPage;
