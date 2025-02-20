"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const Main = () => {
  const router = useRouter();
  return (
    <>
      <Button variant="contained" onClick={() => router.push("/sign-in")}>
        Sign in
      </Button>
      <Button variant="contained" onClick={() => router.push("/homepage")}>
        Homepage
      </Button>
      <Button
        variant="contained"
        onClick={() => router.push("/homepage/our-blog")}
      >
        Our blog
      </Button>
      <Button
        variant="contained"
        onClick={() => router.push("/homepage/post-details")}
      >
        Post details
      </Button>
    </>
  );
};

export default Main;
