import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLinkedin, FaGithub, FaEnvelope, FaLocationArrow, FaArrowDown } from "react-icons/fa6";
import Link from 'next/link';
import VantaBackground from './VantaBackground';
import { ReactLenis, useLenis } from '@/libs/lenis';



const Hero = ({ projectsRef, creativeRef }: { projectsRef: React.RefObject<HTMLDivElement>, creativeRef: React.RefObject<HTMLDivElement> }) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    console.log('scroll position:', scroll);
  });
  const handleScrollToProjects = () => {
    if (lenis && projectsRef.current) {
      console.log('Scrolling to projects:', projectsRef.current);
      lenis.scrollTo(projectsRef.current);
    } else {
      console.log('Lenis or projectsRef not available');
    }
  };
  const handleScrollToCreative = () => {
    if (lenis && creativeRef.current) {
      console.log('Scrolling to creative:', creativeRef.current);
      lenis.scrollTo(creativeRef.current);
    } else {
      console.log('Lenis or creativeRef not available');
    }
  };
    return (
      <ReactLenis root>
        <div className="pb-20 pt-24">
        
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center
         " />
         
        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs text-center font-medium max-w-80 text-white">HEY-YA, LIKE THE SONG.</h2>
                <TextGenerateEffect className="text-center text-3xl md:text-6xl lg:text-6xl" words={'HAYA ALMAJALI'} />
                <div className="flex flex-col my-8 monument-med">
                <p 
                className="mx-4 whitespace-nowrap lowercase text-center font-light drop-shadow-lg tracking-widest md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl text-white mt-4 hover:underline cursor-pointer"
                onClick={handleScrollToProjects}
              >
                Software Developer
              </p>
              <p 
                className="mx-4 whitespace-nowrap lowercase text-center font-light drop-shadow-lg tracking-widest md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl text-white mt-4 hover:underline cursor-pointer"
                onClick={handleScrollToCreative}
              >
                Creative
              </p>          <Link href="https://www.linkedin.com/in/hayamaj" className="lowercase mx-4 whitespace-nowrap text-center font-light drop-shadow-lg tracking-widest md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl text-white mt-4 hover:underline">
          Serial Networker
          </Link>
          <Link href="https://strava.app.link/k7YN4933uLb" className=" mx-4 whitespace-nowrap  lowercase text-center font-light drop-shadow-lg tracking-widest md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl text-white mt-4 hover:underline">
          Runner
          </Link>
          <Link href="https://www.instagram.com/yogurtlover52/?locale=fr_CA" className=" mx-4 whitespace-nowrap  lowercase text-center font-light drop-shadow-lg tracking-widest md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl text-white mt-4 hover:underline">
          Professional Café Hopper
          </Link>
      

          </div>
                {/*
                <p className="lowercase text-center font-medium tracking-widest md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl text-white mt-4">Hi, I&apos;m Haya <span className="text-white font-light">(hey-ya)</span>, a full-stack creative product developer based in <span className="text-white font-medium">New York</span>.</p>
                {/*<a href="#about"><MagicButton title="about" icon={<FaLocationArrow />} position= "right" />
                </a>*/}
                <div className="flex items-center justify-center mt-7 mb-3 space-x-4">
            <Link href="mailto:hayamaj@bu.edu" className="text-white">
              <FaEnvelope size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/hayamaj" className="text-white">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://github.com/hayamaj" className="text-white">
              <FaGithub size={24} />
            </Link>
          </div>
            </div>
        </div>
        </div>
        </ReactLenis>
        );
    }
    
export default Hero