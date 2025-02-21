export interface UserStore {
  Me: () => Promise<void>;
  SignIn: (username: string) => Promise<{ success: boolean } | void>;
  SignUp: (username: string) => Promise<{ success: boolean } | void>;
  SignOut: () => void;
}
