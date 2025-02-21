"use client";

export const LocalStorage = {
  get accessToken() {
    return localStorage.getItem("access-token");
  },
  setAccessToken(value?: string) {
    if (value) {
      localStorage.setItem("access-token", value);
    } else {
      localStorage.removeItem("access-token");
    }
  },

  get username() {
    return localStorage.getItem("username");
  },
  setUsername(value?: string) {
    if (value) {
      localStorage.setItem("username", value);
    } else {
      localStorage.removeItem("username");
    }
  },
};
