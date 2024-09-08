import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANDL AI",
  description: "Responsible and Explainable AI for Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/andl_white_color_black_bg_logo_only.svg" type="image/svg+xml" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
