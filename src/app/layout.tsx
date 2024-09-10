import type { Metadata } from "next";
import "./globals.css";

import { Space_Grotesk } from 'next/font/google'

const SpaceGrotesk = Space_Grotesk({subsets: ['latin'],weight:"400"})

export const metadata: Metadata = {
  title: "AI GPF",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SpaceGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
