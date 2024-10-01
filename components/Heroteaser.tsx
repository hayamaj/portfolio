import React from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLinkedin, FaGithub, FaEnvelope, FaLocationArrow, FaArrowDown } from "react-icons/fa6";
import Link from 'next/link';
import VantaBackground from './VantaBackground';
import { FaSpotify } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";



const HeroTeaser = () => {
    return (
      
        <div className="m-24">
            
        <div className="flex justify-center relative mt-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <TextGenerateEffect className="text-center text-3xl md:text-6xl lg:text-6xl" words={'HAYA, LIKE THE SONG.'} />
                
                <div className="flex flex-col my-4">
              <p className="font-light italic my-2 text-stone-400">A people person, on a mission.</p>

              </div>


                <div className="flex flex-row">
                <div className="flex items-left justify-left space-x-4">
            <Link href="mailto:hayamaj@bu.edu" className="text-black">
              <FaEnvelope size={18} />
            </Link>
            <Link href="https://www.linkedin.com/in/hayamaj" className="text-black">
              <FaLinkedin size={18} />
            </Link>
            <Link href="https://github.com/hayamaj" className="text-black">
              <FaGithub size={18} />
            </Link>
            <Link href="https://open.spotify.com/user/31544kpezgqth4zrr45pj3rzociq?si=6a1dba29a02a48cb" className="text-black">
            <FaSpotify size={18} />
            </Link>
            <Link href="/AlMajali-Resume.pdf" download="AlMajali-Resume.pdf" className="text-black">
            <IoIosDocument size={18} />
            </Link>

          </div>
            
            </div>

            {/*end */}

            <div className="flex flex-row justify-end items-center mt-16">
      <nav className="flex space-x-8 text-stone-900">
      <a href="/about" className="text-md font-light hover:text-stone-300">ABOUT</a>
        <a href="/projects" className="text-md font-light hover:text-stone-300">PROJECTS</a>
        <a href="/blog" className="text-md font-light hover:text-stone-300">BLOG</a>
        {/*<a href="/creative" className="text-lg font-medium hover:text-gray-700">art</a>*/}
      </nav>
    </div>



            </div>
        </div>
        </div>
        );
    }
    
export default HeroTeaser