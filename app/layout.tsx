import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./styles/globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeLand",
  description: "Home Land A real estate Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
