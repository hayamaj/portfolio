import React from 'react';
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
            <div className="max-w-[100vw] md:max-w-4xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h1 className="text-center text-4xl md:text-6xl lg:text-7xl my-4 uppercase" >Haya AlMajali</h1>
                <h2 className="tracking-widest text-sm text-center font-normal max-w-80 font-mono my-4">( hey-ya, like <Link href="https://open.spotify.com/track/2PpruBYCo4H7WOBJ7Q2EwM" className="underline text-neutral-400 hover:text-neutral-200">the song.</Link> )</h2>

                <div className="flex flex-col my-4 mb-12">
                <p 
                className="mx-4 whitespace-nowrap text-center font-light tracking-widest md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl mt-4 hover:underline cursor-pointer"
                onClick={handleScrollToProjects}
              >
                [Software Developer]
              </p>
              <p 
                className="mx-4 whitespace-nowrap text-center font-light tracking-widest md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl mt-4 hover:underline cursor-pointer"
                onClick={handleScrollToCreative}
              >
                [Creative]
              </p>          <Link href="https://www.linkedin.com/in/hayamaj" className="mx-4 whitespace-nowrap text-center font-light tracking-widest md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl mt-4 hover:underline">
          [Serial Networker]
          </Link>
          <Link href="https://strava.app.link/k7YN4933uLb" className=" mx-4 whitespace-nowrap text-center font-light tracking-widest md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl mt-4 hover:underline">
          [Runner]
          </Link>
          <Link href="https://www.instagram.com/yogurtlover52/?locale=fr_CA" className=" mx-4 whitespace-nowrap text-center font-light tracking-widest md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl mt-4 hover:underline">
          [Professional Café Hopper]
          </Link>
      

          </div>
                {/*
                <p className="lowercase text-center font-medium tracking-widest md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl text-white mt-4">Hi, I&apos;m Haya <span className="text-white font-light">(hey-ya)</span>, a full-stack creative product developer based in <span className="text-white font-medium">New York</span>.</p>
                {/*<a href="#about"><MagicButton title="about" icon={<FaLocationArrow />} position= "right" />
                </a>*/}
                <div className="flex items-center justify-center mt-7 mb-3 space-x-4">
            <Link href="mailto:hayamaj@bu.edu" className="text-black">
              <FaEnvelope size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/hayamaj" className="text-black">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://github.com/hayamaj" className="text-black">
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