"use client";

import { LocalStorage } from "./local-storage";

export const endpoint = (path: string) =>
  `${process.env.NEXT_PUBLIC_API_URL}${path}`;

export const headers = (
  headers?: { [key: string]: string },
  auth: boolean = true
) => {
  const option: { [key: string]: string } = {};

  if (auth) {
    option["Authorization"] = `Bearer ${LocalStorage.accessToken}`;
  }

  return {
    headers: {
      ...option,
      ...headers,
    },
  };
};
export const handleError = (error: any) => {
  return error?.response?.data.message;
};
