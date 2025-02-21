import { AxiosPromise } from "axios";
import { ResponseDefault } from "./default";

export interface UserInfo {
  _id: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

export interface SignInRequest {
  username: string;
}
export interface SignUpRequest {
  username: string;
}

export interface GetMeResponse extends ResponseDefault {
  data: UserInfo;
}

export interface SignInResponse extends ResponseDefault {
  data: { accessToken: string };
}

export interface SignUpResponse extends ResponseDefault {
  data: UserInfo;
}

export type GetMeResponseServiceType = () => AxiosPromise<GetMeResponse>;
export type SignInResponseServiceType = (
  data: SignInRequest
) => AxiosPromise<SignInResponse>;
export type SignUpResponseServiceType = (
  username: SignUpRequest
) => AxiosPromise<SignUpResponse>;
