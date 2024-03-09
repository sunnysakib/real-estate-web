import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import "./styles/globals.css";
// 251D58
// 1F1632
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
      <body className={font.className}>
        <ClientOnly>
          <Navbar/>
        </ClientOnly>
        {children}
        </body>
    </html>
  );
}
