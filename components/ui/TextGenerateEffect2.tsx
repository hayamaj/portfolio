"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";
import { useEffect, useRef } from "react";


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


export const TextGenerateEffect2 = ({
    words,
    className,
  }: {
    words: string;
    className?: string;
  }) => {
    const textRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (textRef.current) {
        const characters = textRef.current.querySelectorAll("span.char");
        gsap.fromTo(
          characters,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "bounce.out",
            stagger: 0.1,
          }
        );
      }
    }, [textRef]);
  
    const renderWords = () => {
      return (
        <div ref={textRef}>
          {words.split(" ").map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block">
              {word.split("").map((char, charIdx) => (
                <span
                  key={`${wordIdx}-${charIdx}`}
                  className={`char inline-block ${
                    wordIdx > 1 ? "text-[#f87171]" : "text-[#0D0628]"
                  }`}
                >
                  {char}
                </span>
              ))}
              <span className="char inline-block">&nbsp;</span>
            </span>
          ))}
        </div>
      );
    };
  
    return (
      <div className={cn("font-bold", className)}>
        <div className="mt-4">
          <div className="dark:text-white leading-snug tracking-wide">
            {renderWords()}
          </div>
        </div>
      </div>
    );
  };