import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abraham Gebrekidan",
  description: "My personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased light">
      <body
        className={`${inter.className} flex h-full bg-zinc-50 dark:bg-black`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
