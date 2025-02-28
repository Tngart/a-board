import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

const AppBar = dynamic(() => import("@/components/app-bar"));

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AppBar />
      <Box className="pt-[44px] flex justify-center min-h-dvh">{children}</Box>
    </>
  );
}
