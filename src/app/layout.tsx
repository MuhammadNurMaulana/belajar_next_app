"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const disableNavbar = ["/about/profile/login", "/about/profile/register"];

const inter = Inter({ subsets: ["latin"] });
// export const metadata: Metadata = {
//   title: "Hello Maulana",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body className={inter.className}>
        {!disableNavbar.includes(pathname) && <Navbar />}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
