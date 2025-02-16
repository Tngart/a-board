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
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "stretch",
          background: "#243831",
        }}
        direction={{ xs: "column-reverse", md: "row" }}
      >
        <Grid
          size={{ xs: 12, md: 7 }}
          sx={{
            alignContent: "center",
            padding: { xs: "16px", md: "200px" },
            height: { xs: "55%", md: "auto" },
            gap: "32px",
          }}
        >
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
              className="h-10 w-full"
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

        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#285F44",
            borderTopLeftRadius: { xs: "0px", md: "36px" },
            borderBottomLeftRadius: { xs: "36px", md: "36px" },
            borderBottomRightRadius: { xs: "36px", md: "0px" },
            height: { xs: "45%", md: "auto" },
          }}
        >
          <Image
            src="/icon.svg"
            alt="logo"
            width={200}
            height={230}
            style={{
              width: "auto",
              height: "30%",
            }}
          />

          <Typography
            style={{
              fontFamily: "Castoro",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "28px",
              color: "white",
              marginTop: "16px",
            }}
          >
            a Board
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
