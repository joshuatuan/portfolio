import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Joshua's portfolio",
  description: "Joshua Miguel Tuan's portfolio",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} font-[450] text-stone-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
