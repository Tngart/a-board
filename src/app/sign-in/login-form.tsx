import "./index.css";
import Header from "@/components/header";
import Input from "@/components/input";
import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface IProps {
  loading?: boolean;
  onSubmit?: ({ username }: { username: string }) => void;
  onUsernameChange?: (value: string) => void;
}

const LoginForm: FC<IProps> = ({ loading, onSubmit }) => {
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
              <Header heading={"Sign in"} />
            </div>
            <Input
              control={control}
              name={"username"}
              placeholder="Username"
              sx={{ background: "white", borderRadius: "8px" }}
            />
            <Button
              color="success"
              disableElevation
              disabled={!isValid}
              loading={loading}
              type="submit"
              variant="contained"
            >
              Sign in
            </Button>
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
