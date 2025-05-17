import type { Metadata } from "next";
import { Geist, Geist_Mono,DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delta-OSTIUM",
  description: "Delta-OSTIUM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} dark antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
