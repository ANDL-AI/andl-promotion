import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANDL AI | Responsible AI for Education",
  description: "At ANDL, we build responsible and explainable AI solutions for education. Revolutionize learning with AI designed for students and educators.",
  keywords: "ANDL AI, responsible AI, explainable AI, educational AI, university AI, AI for education",
  openGraph: {
    title: "ANDL AI | Responsible AI for Education",
    description: "At ANDL, we build responsible and explainable AI solutions tailored for the education sector.",
    url: "https://www.andl.io",
    type: "website",
    locale: "en_US",
    siteName: "ANDL AI",
    images: [
      {
        url: "https://github.com/ANDL-AI/public-assets/blob/main/andl_logo.png?raw=true", // Add a relevant image for OG sharing
        alt: "ANDL AI Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANDL AI | Responsible AI for Education",
    description: "Learn how ANDL is transforming education with responsible and explainable AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <meta name="description" content="At ANDL, we build responsible and explainable AI for education. Revolutionize learning with AI designed for students and educators." />
        <meta name="keywords" content="ANDL AI, responsible AI, explainable AI, educational AI, university AI, AI for education" />
        <meta name="author" content="ANDL AI Team" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="ANDL AI | Responsible AI for Education" />
        <meta property="og:description" content="At ANDL, we build responsible and explainable AI solutions tailored for the education sector." />
        <meta property="og:url" content="https://www.andl.io" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/andl-og-image.jpg" />
        <meta property="og:site_name" content="ANDL AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ANDL_AI" />
        <meta name="twitter:title" content="ANDL AI | Responsible AI for Education" />
        <meta name="twitter:description" content="Learn how ANDL is transforming education with responsible and explainable AI." />
        <meta name="twitter:image" content="/images/andl-twitter-card.jpg" />

      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
