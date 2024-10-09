import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "NextUI with MikroORM",
  description: "This next.js app uses NextUI and MikroORM with postgres.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`antialiased`}>{children}</body>
      </Providers>
    </html>
  );
}
