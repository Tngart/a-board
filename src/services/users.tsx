"use client";

import {
  GetMeResponseServiceType,
  SignInResponseServiceType,
  SignUpResponseServiceType,
} from "@/types/users";
import { endpoint, headers } from "@/providers/service";
import axios from "axios";

export const Login: SignInResponseServiceType = (data) => {
  const response = axios({
    url: endpoint("/users/sign-in"),
    method: "POST",
    data,
  });
  return response;
};

export const Register: SignUpResponseServiceType = (data) => {
  const response = axios({
    url: endpoint("/users/register"),
    method: "POST",
    data,
  });
  return response;
};

export const GetMe: GetMeResponseServiceType = () => {
  const response = axios({
    url: endpoint("/users/me"),
    method: "GET",
    ...headers(),
  });
  return response;
};
