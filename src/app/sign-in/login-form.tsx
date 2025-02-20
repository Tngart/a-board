import "./index.css";
import Header from "@/components/header";
import Input from "@/components/input";
import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface IProps {
  flow: "login" | "register";
  loading?: boolean;
  onSubmit?: ({ username }: { username: string }) => void;
  setFlow: (value: "login" | "register") => void;
}

const LoginForm: FC<IProps> = ({ loading, flow, setFlow, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<{ username: string }>({
    mode: "all",
    defaultValues: { username: "" },
  });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) handleSubmit(onSubmit)();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Grid
        container
        className="form-container"
        direction={{ xs: "column-reverse", md: "row" }}
      >
        <Grid className="form-grid" size={{ xs: 12, md: 7 }}>
          <Stack spacing={2}>
            <div className="mb-6">
              <Header heading={flow === "login" ? "Sign in" : "Register"} />
            </div>
            <Input
              control={control}
              name={"username"}
              placeholder="Username"
              sx={{ background: "white", borderRadius: "8px" }}
            />
            <Button
              variant="contained"
              disabled={!isValid}
              loading={loading}
              type="submit"
              color="success"
            >
              Sign in
            </Button>
            <div className="text-link-container">
              {flow === "login" ? (
                <Typography variant="body2" className="text-white">
                  Do not have an account?{" "}
                  <a
                    className="link-action"
                    onClick={() => setFlow("register")}
                  >
                    Register
                  </a>
                </Typography>
              ) : (
                <Typography variant="body2" className="text-white">
                  Already have an account?{" "}
                  <a className="link-action" onClick={() => setFlow("login")}>
                    Sign in
                  </a>
                </Typography>
              )}
            </div>
          </Stack>
        </Grid>

        <Grid className="side-grid" size={{ xs: 12, md: 5 }}>
          <Image
            src="/icon.svg"
            alt="logo"
            width={200}
            height={230}
            className="logo-image"
          />
          <Typography className="sign-in-typography-brand ">a Board</Typography>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
