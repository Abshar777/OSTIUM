import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/header";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import { HeroUIProvider } from "@heroui/react";
import Provider from "@/components/layout/provider";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/lib/authConfig";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("authConfig: 🟢", process.env.NEXTAUTH_URL);

  let session = null;
  try {
    session = await getServerSession(authConfig);
    console.log("session: 🟢", session);
  } catch (error) {
    // console.error("Error getting server session:", error);
    // Continue with null session
  }

  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} dark antialiased`}
      >
        <Toaster />
        <NextTopLoader color="#F54A00" shadow="0 0 10px #F54A00" showSpinner={false} />
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}
