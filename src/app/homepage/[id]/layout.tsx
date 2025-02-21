import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <Box
      className="bg-white w-full pt-[20px]"
      sx={{ paddingLeft: { sm: 0, md: "275px" } }}
    >
      <Box sx={{ paddingX: { sm: "16px", md: "150px" } }}>{children}</Box>
    </Box>
  );
}
