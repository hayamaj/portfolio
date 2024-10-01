import React from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLinkedin, FaGithub, FaEnvelope, FaLocationArrow, FaArrowDown } from "react-icons/fa6";
import Link from 'next/link';
import VantaBackground from './VantaBackground';
import { ReactLenis, useLenis } from '@/libs/lenis';
import { MdDirectionsRun } from "react-icons/md";
import { FaSpotify } from "react-icons/fa";



const Hero = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    console.log('scroll position:', scroll);
  });

    return (
        <div className="pt-12">
        
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center
         " />
         
        <div className="flex justify-center relative my-4 z-10">
            <div className="flex flex-col items-left justify-center w-screen max-w-2xl m-12">
      
                <h1 className="text-left text-2xl md:text-2xl lg:text-2xl uppercase" >Haya AlMajali</h1>
                <h2 className="text-xs text-left font-light font-mono italic max-w-80">(hey-ya, like <Link href="https://open.spotify.com/track/2PpruBYCo4H7WOBJ7Q2EwM" className="underline text-neutral-400 hover:text-neutral-200">the song.</Link>)</h2>

              <div className="flex flex-col my-4 mb-8">
              <p className="font-light italic my-2 text-neutral-600">I am a software developer, creative, AI enthusiast, serial networker, runner & professional café hopper.</p>

              </div>

              

{/*

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
          */}
                {/*
                <p className="lowercase text-center font-medium tracking-widest md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl text-white mt-4">Hi, I&apos;m Haya <span className="text-white font-light">(hey-ya)</span>, a full-stack creative product developer based in <span className="text-white font-medium">New York</span>.</p>
                {/*<a href="#about"><MagicButton title="about" icon={<FaLocationArrow />} position= "right" />
                </a>*/}
                <div className="flex flex-row">
                <div className="ml-2 -mt-2 flex items-left justify-left mb-3 space-x-4">
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

          </div>
          <div className="-mt-[10px] mx-4">
              <MagicButton title="resume" icon={<FaLocationArrow />} position="right" />
            </div>
            
            </div>
          </div>
            </div>
        </div>
        );
    }
    
export default Hero