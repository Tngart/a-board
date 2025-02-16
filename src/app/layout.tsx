import Providers from "@/providers";
import type { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Data wow",
  description: "Data wow",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: ["/favicon.ico", "/favicon.svg"],
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
