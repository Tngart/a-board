import { CommunityEnum } from "../app/enum";
import { ResponseDefault } from "./default";
import { UserInfo } from "./users";

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

export interface PatchCommentMessageRequest {
  commentMessage: string;
}

export interface PostDataResponse {
  _id: string;
  comments: Comments[];
  community: CommunityEnum;
  description: string;
  title: string;
  userInfo: UserInfo;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
}

export interface PostListResponse extends ResponseDefault {
  data: PostDataResponse[];
}

export interface PostDetailResponse extends ResponseDefault {
  data: PostDataResponse;
}

export type CreatePostServiceType = (
  data: PostPostRequest
) => AxiosPromise<PostDetailResponse>;
export type FetchPostListServiceType = () => AxiosPromise<PostListResponse>;
export type FetchPostDetailServiceType = (
  id: string
) => AxiosPromise<PostDetailResponse>;
export type UpdatePostServiceType = (
  id: string,
  data: PostPostRequest
) => AxiosPromise<PostDetailResponse>;
export type UpdateCommentMessageServiceType = (
  id: string,
  data: PatchCommentMessageRequest
) => AxiosPromise<PostDetailResponse>;
export type DeletePostServiceType = (
  id: string
) => AxiosPromise<ResponseDefault>;
