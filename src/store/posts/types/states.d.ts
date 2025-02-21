import { PostDataResponse } from "@/types/posts";

export interface PostState {
  postList?: PostDataResponse[];
  myPostList?: PostDataResponse[];
  currentPost?: PostDataResponse;
  postLoading: boolean;
  openCreateDialog: boolean;
  currentEditPost?: PostDataResponse;
  currentDeleteId?: string;
}
