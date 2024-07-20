import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLinkedin, FaGithub, FaEnvelope, FaLocationArrow } from "react-icons/fa6";

const Hero2 = () => {
    return (
        <div className="pb-20 pt-36 bg-[#FFBD89]">
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
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <TextGenerateEffect className="text-center text-[40px] md:text-6xl lg:text-5xl" words={'HAYA ( hey-ya! )'} />
                <h2 className="uppercase tracking-widest text-xs text-center max-w-80 text-[#3A0B44]">LIKE THE SONG.</h2>

            </div>
        </div>
        </div>
        );
    }
    
export default Hero2