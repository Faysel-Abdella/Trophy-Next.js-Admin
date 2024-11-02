import type { Metadata } from "next";
import "./globals.css";

import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "트로피 - NexaCode",
  description: "Created by Nexacode - 트로피",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
