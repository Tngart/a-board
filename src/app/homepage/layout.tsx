import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

const AppBar = dynamic(() => import("@/components/app-bar"));

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <body>
      <AppBar />
      <Box className="pt-[56px] flex justify-center min-h-dvh">{children}</Box>
    </body>
  );
}
