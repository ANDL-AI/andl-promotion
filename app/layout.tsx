import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

export const metadata: Metadata = {
  title: "ANDL AI | Your AI study companion",
  description: "At ANDL, we provide you with your personal AI study companion for end to end learning.",
  keywords: "ANDL AI, personalized AI, educational AI, university AI, AI for education",
  openGraph: {
    title: "ANDL AI | Your AI study companion",
    description: "At ANDL, we provide you with your personal AI study companion for end to end learning.",
    url: "https://www.andl.io",
    type: "website",
    locale: "en_US",
    siteName: "ANDL AI",
    images: [
      {
        url: "https://github.com/ANDL-AI/public-assets/blob/main/andl_logo.png?raw=true",
        alt: "ANDL AI Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANDL AI | Your AI study companion",
    description: "Learn how ANDL is transforming education with personalized AI study companions.",
    images: "https://github.com/ANDL-AI/public-assets/blob/main/andl_logo.png?raw=true",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <meta name="description" content="At ANDL, we provide you with your personal AI study companion for end to end learning." />
        <meta name="keywords" content="ANDL AI, personalized AI, educational AI, university AI, AI for education" />
        <meta name="author" content="ANDL AI Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="ANDL AI | Your AI study companion" />
        <meta property="og:description" content="At ANDL, we provide you with your personal AI study companion for end to end learning." />
        <meta property="og:url" content="https://www.andl.io" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://github.com/ANDL-AI/public-assets/blob/main/andl_logo.png?raw=true" />
        <meta property="og:site_name" content="ANDL AI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ANDL_AI" />
        <meta name="twitter:title" content="ANDL AI | Your AI study companion" />
        <meta name="twitter:description" content="Learn how ANDL is transforming education with personalized AI study companions." />
        <meta name="twitter:image" content="https://github.com/ANDL-AI/public-assets/blob/main/andl_logo.png?raw=true" />

        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ANDL AI",
            "url": "https://www.andl.io",
            "logo": "https://github.com/ANDL-AI/public-assets/blob/main/andl_logo.png?raw=true",
            "sameAs": [
              "https://twitter.com/ANDL_AI",
              "https://www.linkedin.com/company/andl-ai/"
            ]
          })}
        </script>

      </Head>
      <body className={`${poppins.variable} font-sans}`}>
        {children}
        {/* Add custom 404 error page as a fallback */}
      </body>
    </html>
  );
}
