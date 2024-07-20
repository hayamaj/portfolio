
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems2 } from "@/data";

import { FaLinkedin, FaGithub, FaEnvelope, FaLocationArrow, FaArrowDown } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextGenerateEffect2 } from '@/components/ui/TextGenerateEffect2';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';

import Footer from '@/components/Footer';

const Test = () => {
    return (
        <div className="pb-20 pt-36 bg-[#FAF9F6]">
            {/*}
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="purple" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vh]" fill="pink" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="purple" />
            </div>
    */}

      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center
         " />
        

        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-right justify-end">
                <h2 className="uppercase tracking-widest text-xs text-right font-light max-w-80 text-black">CODE. PRODUCT. DESIGN.</h2>
                <TextGenerateEffect className="text-right text-3xl md:text-6xl lg:text-4xl" words={'HAYA (HEY-YA), LIKE THE SONG.'} />
                {/*<a href="#about"><MagicButton title="about" icon={<FaLocationArrow />} position= "right" />
                </a>*/}
                
            </div>
        </div>
        </div>
        );
    }
    
export default Test