import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pinch Draw",
  description: "Draw in the air with hand tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}