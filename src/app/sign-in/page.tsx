"use client";

import { useCallback, useState } from "react";
import LoginForm from "./login-form";
import { useUserStore } from "@/store/users";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const { userLoading, SignIn, SignUp } = useUserStore();
  const [flow, setFlow] = useState<"login" | "register">("login");

  const onSubmit = useCallback(
    async ({ username }: { username: string }) => {
      if (flow === "register") {
        const response = await SignUp(username);
        if (response?.success) setFlow("login");
      } else {
        const response = await SignIn(username);
        if (response?.success) router.replace("/homepage");
      }
    },
    [SignIn, SignUp, flow, router]
  );

  return (
    <LoginForm
      loading={userLoading}
      onSubmit={onSubmit}
      setFlow={setFlow}
      flow={flow}
    />
  );
};

export default SignIn;
