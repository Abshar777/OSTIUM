"use client";

import React, { useState, useEffect, useRef } from "react";

interface TypewriterProps {
  words: string[];
  loop?: number | boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

export const useTypewriter = ({
  words = [""],
  loop = 1,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
}: TypewriterProps) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const loopCountRef = useRef(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          if (wordIndex === words.length - 1) {
            loopCountRef.current += 1;
            if (loop !== true && loopCountRef.current === loop) {
              setIsEnd(true);
              return;
            }
          }
        }
      }, deleteSpeed);
    } else {
      if (isEnd) return;
      
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, delaySpeed);
        }
      }, typeSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, loop, typeSpeed, deleteSpeed, delaySpeed, isEnd]);

  return [text, isDeleting];
};

export const Cursor = ({ cursorColor = "currentColor" }: { cursorColor?: string }) => {
  return (
    <span 
      className="inline-block animate-blink ml-1" 
      style={{ color: cursorColor }}
    >
      |
    </span>
  );
};