import {
  PatchCommentMessageRequest,
  PostDataResponse,
  PostPostRequest,
} from "@/types/posts";
import { PostState } from "./states";

export interface PostStore extends PostState {
  CreatePost: (data: PostPostRequest, isOurPost?: boolean) => Promise<void>;
  DeletePost: (id: string) => Promise<void>;
  FetchPostList: () => Promise<void>;
  FetchMyPostList: () => Promise<void>;
  FetchPostById: (id: string) => Promise<void>;
  SetOpenCreateDialog: (trigger: boolean) => void;
  SetOpenUpdateDialog: (post?: PostDataResponse) => void;
  SetOpenDeleteDialog: (id?: string) => void;
  UpdatePost: (id: string, data: PostPostRequest) => Promise<void>;
  UpdateMessageInPost: (
    id: string,
    data: PatchCommentMessageRequest
  ) => Promise<{ done: boolean }>;
}
