import * as UserService from "@/services/users";
import { create } from "zustand";
import { UserState } from "./types/states";
import { UserStore } from "./types/initializing";
import Alert from "@/components/alert";
import { handleError } from "@/providers/service";
import { LocalStorage } from "@/providers/local-storage";

const state: UserState = {
  userLoading: false,
};

export const useUserStore = create<UserStore & UserState>((set, get) => ({
  ...state,
  async Me() {
    set({ userLoading: true });
    try {
      const { data } = await UserService.GetMe();
      if (data.success) {
        LocalStorage.setUsername(data.data.username);
        set({ me: data.data });
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ userLoading: false });
    }
  },
  async SignIn(username) {
    set({ userLoading: true });
    try {
      const { data } = await UserService.Login({ username });
      if (data.success) {
        LocalStorage.setAccessToken(data.data.accessToken);
        get().Me();
        Alert({
          title: "Success",
          text: "Login successfully",
          icon: "success",
        });
        return { success: data.success };
      }
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    } finally {
      set({ userLoading: false });
    }
  },
  async SignUp(username) {
    set({ userLoading: true });
    try {
      const { data } = await UserService.Register({ username });
      if (data.success) {
        Alert({
          title: "Success",
          text: "Register successfully",
          icon: "success",
        });
        return { success: data.success };
      }
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    } finally {
      set({ userLoading: false });
    }
  },
  SignOut() {
    LocalStorage.setAccessToken();
    LocalStorage.setUsername();
    set({ me: undefined });
  },
}));
