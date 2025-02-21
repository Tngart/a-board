import { CommunityEnum } from "./enum";

export interface PostResponse {
  _id: string;
  comments: Comments[];
  community: CommunityEnum;
  description: string;
  title: string;
  userInfo: UserInfo;
  updatedAt: string;
}

export interface ListData {
  label: Record[string];
  value: Record[string];
}

export interface Comments {
  message: string;
  updatedBy: string;
  updatedAt: string;
}

export interface PostPostRequest {
  community: CommunityEnum;
  description: string;
  title: string;
}

export interface PatchPostRequest {
  community?: CommunityEnum;
  description?: string;
  title?: string;
}

export interface UserInfo {
  _id: string;
  username: string;
}

export interface PatchCommentMessageRequest {
  commentMessage: string;
}
