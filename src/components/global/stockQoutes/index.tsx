"use client";

import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "./typeWriter";

// Stock trading quotes
const quotes = [
  {
    text: "The stock market is a device for transferring money from the impatient to the patient.",
    author: "Warren Buffett",
  },
  {
    text: "In investing, what is comfortable is rarely profitable.",
    author: "Robert Arnott",
  },
  {
    text: "The market is a pendulum that forever swings between unsustainable optimism and unjustified pessimism.",
    author: "Benjamin Graham",
  },
  {
    text: "The best investment you can make is an investment in yourself.",
    author: "Warren Buffett",
  },
  {
    text: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett",
  },
  {
    text: "The most important quality for an investor is temperament, not intellect.",
    author: "Warren Buffett",
  },
];

export function StockQuotes() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const currentQuote = quotes[quoteIndex];

  const [text] = useTypewriter({
    words: [currentQuote.text],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 25,
    delaySpeed: 3000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white/90 flex flex-col gap-3">
      <blockquote className="text-lg md:text-xl   min-h-24">
        &ldquo;
        {
          "The market is a pendulum that forever swings between unsustainable optimism and unjustified pessimism."
        }
        &rdquo;
        {/* <span className="text-primary typewriter-cursor">|</span> */}
      </blockquote>
      <cite className="text-sm md:text-base font-medium text-white/70 not-italic text-right">
        — {"Benjamin Graham"}
      </cite>
    </div>
  );
}
