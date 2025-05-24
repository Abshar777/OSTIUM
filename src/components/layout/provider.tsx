"use client";
import { HeroUIProvider } from "@heroui/react";
import { SessionProvider } from "next-auth/react";
import React from "react";
import ReactQueryProvider from "./react-query";

const Provider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  return (
    <HeroUIProvider>
      <SessionProvider session={session}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </SessionProvider>
    </HeroUIProvider>
  );
};

export default Provider;
