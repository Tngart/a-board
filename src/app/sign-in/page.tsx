"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import LoginForm from "./login-form";
import * as UserService from "@/services/users";
import { LocalStorage } from "@/providers/local-storage";
import Alert from "@/components/alert";
import { handleError } from "@/providers/service";

const SignIn = () => {
  const router = useRouter();
  const [flow, setFlow] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = useCallback(
    async ({ username }: { username: string }) => {
      setLoading(true);
      try {
        const { data } =
          flow === "login"
            ? await UserService.Login(username)
            : await UserService.Register(username);

        if (flow === "login" && data.data.accessToken) {
          LocalStorage.setAccessToken(data.data.accessToken);
          const meResponse = await UserService.GetMe();
          if (meResponse.data.data) {
            LocalStorage.setUserId(meResponse.data.data._id);
            LocalStorage.setUsername(meResponse.data.data.username);
          }
          Alert({
            title: "Success",
            text: "Login successfully",
            icon: "success",
          });
          router.push("/homepage");
        }

        if (flow === "register" && data.success) {
          Alert({
            title: "Success",
            text: "Registered successfully",
            icon: "success",
          });
          setFlow("login");
        }
      } catch (error) {
        Alert({ title: "Error", text: handleError(error), icon: "error" });
      } finally {
        setLoading(false);
      }
    },
    [flow, router]
  );

  return (
    <LoginForm
      loading={loading}
      onSubmit={onSubmit}
      setFlow={setFlow}
      flow={flow}
    />
  );
};

export default SignIn;
