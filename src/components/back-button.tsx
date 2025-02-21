"use client";
import { ArrowBack } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ fontSize: "44px", marginBottom: "20px", margin: "16px" }}
        onClick={router.back}
      >
        <ArrowBack sx={{ fontSize: "18px" }} />
      </Fab>
    </>
  );
};

export default BackButton;
