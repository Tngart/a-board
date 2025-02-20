"use client";

import {
  PatchCommentMessageRequest,
  PatchPostRequest,
  PostPostRequest,
} from "@/app/types";
import { endpoint, headers } from "@/providers/service";
import axios from "axios";

export const FetchPostList = () => {
  const response = axios({
    url: endpoint("/posts"),
    method: "GET",
    ...headers(),
  });
  return response;
};

export const FetchMyPostList = () => {
  const response = axios({
    url: endpoint("/posts/my/post"),
    method: "GET",
    ...headers(),
  });
  return response;
};

export const FetchPost = (id: string) => {
  const response = axios({
    url: endpoint("/posts/:id"),
    method: "GET",
    params: { id },
    ...headers(),
  });
  return response;
};

export const PostPost = async (data: PostPostRequest) => {
  const response = await axios({
    url: endpoint("/users/me"),
    method: "POST",
    data,
    ...headers(),
  });
  return response;
};

export const PatchPost = async (id: string, data: PatchPostRequest) => {
  const response = await axios({
    url: endpoint("/posts/:id"),
    method: "PATCH",
    params: { id },
    data,
    ...headers(),
  });
  return response;
};

export const PatchMessage = async (
  id: string,
  data: PatchCommentMessageRequest
) => {
  const response = await axios({
    url: endpoint("/posts/:id/message"),
    method: "PATCH",
    params: { id },
    data,
    ...headers(),
  });
  return response;
};

export const DeletePost = async (id: string) => {
  const response = await axios({
    url: endpoint("/posts"),
    method: "DELETE",
    params: { id },
    ...headers(),
  });
  return response;
};
