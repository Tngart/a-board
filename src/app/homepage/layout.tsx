import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

const AppBar = dynamic(() => import("@/components/app-bar"));

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <AppBar />
        <Box className="pt-14 sm:pt-0 flex justify-center sm:items-center sm:min-h-dvh">
          {children}
        </Box>
      </body>
    </html>
  );
}
