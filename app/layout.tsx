import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/layout/Header";
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
  title: "Lexmates Website",
  description: "Lexmates Website",
  metadataBase: new URL("https://mccullochlawpa-website.vercel.app"),
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
        
      </body>
    </html>
  );
}
