"use client";

import {
  CreatePostServiceType,
  DeletePostServiceType,
  FetchPostDetailServiceType,
  FetchPostListServiceType,
  PatchCommentMessageRequest,
  PatchPostRequest,
  PostPostRequest,
  UpdateCommentMessageServiceType,
  UpdatePostServiceType,
} from "@/app/types/posts";
import { endpoint, headers } from "@/providers/service";
import axios from "axios";

export const FetchPostList: FetchPostListServiceType = () => {
  const response = axios({
    url: endpoint("/posts"),
    method: "GET",
    ...headers(),
  });
  return response;
};

export const FetchMyPostList: FetchPostListServiceType = () => {
  const response = axios({
    url: endpoint("/posts/my/post"),
    method: "GET",
    ...headers(),
  });
  return response;
};

export const FetchPost: FetchPostDetailServiceType = (id: string) => {
  const response = axios({
    url: endpoint(`/posts/${id}`),
    method: "GET",
    ...headers(),
  });
  return response;
};

export const PostPost: CreatePostServiceType = (data: PostPostRequest) => {
  const response = axios({
    url: endpoint("/posts"),
    method: "POST",
    data,
    ...headers(),
  });
  return response;
};

export const PatchPost: UpdatePostServiceType = (
  id: string,
  data: PatchPostRequest
) => {
  const response = axios({
    url: endpoint(`/posts/${id}`),
    method: "PATCH",
    data,
    ...headers(),
  });
  return response;
};

export const PatchMessage: UpdateCommentMessageServiceType = async (
  id: string,
  data: PatchCommentMessageRequest
) => {
  const response = await axios({
    url: endpoint(`/posts/${id}/message`),
    method: "PATCH",
    data,
    ...headers(),
  });
  return response;
};

export const DeletePost: DeletePostServiceType = async (id: string) => {
  const response = await axios({
    url: endpoint(`/posts/${id}`),
    method: "DELETE",
    ...headers(),
  });
  return response;
};
