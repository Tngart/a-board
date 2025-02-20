"use client";

import { endpoint, headers } from "@/providers/service";
import axios from "axios";

export const Login = (username: string) => {
  const data = { username };
  const response = axios({
    url: endpoint("/users/sign-in"),
    method: "POST",
    data,
  });
  return response;
};

export const Register = async (username: string) => {
  const data = { username };
  const response = await axios({
    url: endpoint("/users/register"),
    method: "POST",
    data,
  });
  return response;
};

export const GetMe = async () => {
  const response = await axios({
    url: endpoint("/users/me"),
    method: "GET",
    ...headers(),
  });
  return response;
};
