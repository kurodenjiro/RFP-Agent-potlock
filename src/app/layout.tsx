import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";


const SpaceGrotesk = localFont({ src: '../font/SpaceGrotesk.ttf' })

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
