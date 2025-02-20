"use client";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import LoginForm from "./login-form";

const SignIn = () => {
  const router = useRouter();
  const [flow, setFlow] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState<boolean>();

  const onSubmit = useCallback(
    async ({ username }: { username: string }) => {
      setLoading(true);
      console.log("onSubmit", username);
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      router.replace("/homepage");
    },
    [router]
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
