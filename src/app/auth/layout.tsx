"use client";

import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { StockQuotes } from "@/components/global/stockQoutes";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  const images = ["/bg-2.png", "/bg-2.png", "/bg-2.png", "/bg-2.png"];

  return (
    <div className="grid gridAnim min-h-[98vh] overflow-hidden md:grid-cols-2 h-full">
      <div className="flex  justify-center items-center w-full h-full  gap-4 px-6 py-4 md:px-10">
        <div className="flex justify-center absolute top-5 left-10 gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <h1 className="text-xl text-primary font-mono">OSTIUM</h1>
          </a>
        </div>

        {children}
      </div>
      <div className="relative w-full h-full overflow-hidden md:flex items-start justify-center hidden p-2">
        <div className="w-full h-[97%] relative overflow-hidden bg-black rounded-md">
          <img
            src={images[0]}
            alt={`carousel-image-${0}`}
            className="object-cover opacity-75 transition-all duration-700"
          />
        </div>
        <div className="absolute flex flex-col-reverse p-4 w-full h-[95%]  pointer-events-none">
          <div className="w-full backdrop-blur-sm bg-black/30 rounded-md p-6 transition-all duration-300 hover:bg-black/40">
            <StockQuotes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
