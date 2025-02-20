import { CommunityEnum } from "./enum";

export interface MessageProps {
  _id: string;
  comments: Comments[];
  community: CommunityEnum;
  description: string;
  topic: string;
  userInfo: UserInfo;
  updatedAt: string;
}

export interface ListData {
  label: Record[string];
  value: Record[string];
}

export interface Comments {
  username: string;
  message: string;
  updatedAt: string;
}
