import * as PostServices from "@/services/posts";
import { create } from "zustand";
import { PostState } from "./types/states";
import { PostStore } from "./types/initializing";
import Alert from "@/components/alert";
import { handleError } from "@/providers/service";

const state: PostState = {
  postLoading: false,
  openCreateDialog: false,
};

export const usePostStore = create<PostState & PostStore>((set, get) => ({
  ...state,
  async CreatePost(body, isOurPost) {
    set({ postLoading: true });
    try {
      const { data } = await PostServices.PostPost(body);
      if (data.success) {
        Alert({
          title: "Success",
          text: "Post created successfully",
          icon: "success",
        });
        if (isOurPost) {
          get().FetchMyPostList();
          return;
        }
        get().FetchPostList();
      }
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    } finally {
      set({ postLoading: false, openCreateDialog: false });
    }
  },
  async DeletePost(id) {
    set({ postLoading: true });
    try {
      const { status } = await PostServices.DeletePost(id);
      if (status === 204) {
        Alert({
          title: "Success",
          text: "Post deleted successfully",
          icon: "success",
        });
        get().FetchMyPostList();
      }
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    } finally {
      set({ postLoading: false, currentDeleteId: undefined });
    }
  },
  async FetchMyPostList() {
    set({ postLoading: true });
    try {
      const { data } = await PostServices.FetchMyPostList();
      if (data.success) {
        set({ myPostList: data.data });
      }
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    } finally {
      set({ postLoading: false });
    }
  },
  async FetchPostById(id) {
    set({ postLoading: true });
    try {
      const { data } = await PostServices.FetchPost(id);
      if (data.success) {
        set({ currentPost: data.data });
      }
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    } finally {
      set({ postLoading: false });
    }
  },
  async FetchPostList() {
    set({ postLoading: true });
    try {
      const { data } = await PostServices.FetchPostList();
      if (data.success) {
        set({ postList: data.data });
      }
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    } finally {
      set({ postLoading: false });
    }
  },
  async UpdateMessageInPost(id, body) {
    set({ postLoading: true });
    try {
      const { data } = await PostServices.PatchMessage(id, body);
      if (data.success) {
        Alert({
          title: "Success",
          text: "Message updated successfully",
          icon: "success",
        });
        get().FetchPostById(id);
      }
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    } finally {
      set({ postLoading: false });
      return { done: true };
    }
  },
  async UpdatePost(id, body) {
    set({ postLoading: true });
    try {
      const { data } = await PostServices.PatchPost(id, body);
      if (data.success) {
        Alert({
          title: "Success",
          text: "Post updated successfully",
          icon: "success",
        });
      }
      get().FetchMyPostList();
    } catch (error) {
      Alert({
        title: "Error",
        text: handleError(error),
        icon: "error",
      });
    } finally {
      set({ postLoading: false, currentEditPost: undefined });
    }
  },
  SetOpenCreateDialog(trigger) {
    set({ openCreateDialog: trigger });
  },
  SetOpenDeleteDialog(id) {
    set({ currentDeleteId: id });
  },
  SetOpenUpdateDialog(post) {
    set({ currentEditPost: post });
  },
}));
