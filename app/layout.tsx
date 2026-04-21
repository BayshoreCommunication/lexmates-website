import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "./globals.css";
// import { DM_Mono } from 'next/font/google';
// import { Inter, Playfair_Display } from 'next/font/google';// Your global styles file

// // Specify the weights and subsets you need
// const dmMono = DM_Mono({
//   weight: ['400', '500'], // or ['400', '400-italic', '500', ...] as needed
//   subsets: ['latin'],
//   display: 'swap', // 'swap' ensures the fallback font is used until DM Mono loads
//   variable: '--font-dm-mono', // Define a CSS variable if you plan to use it with Tailwind CSS
// });

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   weight: ['400', '700'], // Specify the weights you need
//   display: 'swap', // Use swap for better performance
//   variable: '--font-playfair', // Define a CSS variable name
// });

export const metadata: Metadata = {
  title: "Lexmates - Professional Law Firm in Dhaka, Bangladesh",
  description:
    "Expert legal services in Dhaka. Lexmates provides top-notch representation in business law, family matters, criminal cases, and tax services.",
  metadataBase: new URL("https://www.lexmates.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },

  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
