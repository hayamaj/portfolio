"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              initial={{ opacity: 0, color: idx > 1 ? '#fda4af' : '#000000' }}
              animate={{ opacity: 1, color: idx > 1 ? '#fda4af' : '#000000' }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              className={`dark:text-[#0D0628] uppercase ${
                word.toLowerCase() === "the song"
                  ? 'text-[#fda4af] underline decoration-1 underline-offset-2 cursor-pointer'
                  : idx > 1
                  ? 'text-[#FFFFFF] underline decoration-1 underline-offset-2 cursor-pointer'
                  : 'text-[#FFFFFF]'
              } opacity-0`}
              onClick={() => {
                if (idx > 1)
                  window.open("https://open.spotify.com/track/2PpruBYCo4H7WOBJ7Q2EwM", "_blank");
                
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };
  


  return (
    <div className={cn("font-medium", className)}>
      <div className="mt-4">
        <div className=" dark:text-white leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
