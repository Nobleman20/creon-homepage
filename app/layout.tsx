/* eslint-disable */

import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black  h-screen w-scree">
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
