"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


export const TextGenerateEffect3 = ({
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
              initial={{ opacity: 0, color: idx > 1 ? '#f87171' : '##f87171' }}
              animate={{ opacity: 1, color: idx > 1 ? '#008080' : '#f87171' }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              className={`dark:text-[#008080] ${idx > 1 ? 'text-[#f87171]' : 'text-[#f87171]'} opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };


  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
