import { CommunityEnum } from "./enum";

export interface MessageProps {
  _id: string;
  avatarSrc: string;
  avatarAlt: string;
  primaryText: string;
  secondaryText: string;
  secondaryUser: string;
  type: CommunityEnum;
  username: string;
}

export interface ListData {
  label: Record[string];
  value: Record[string];
}
