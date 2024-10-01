"use client";


import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from "next/image";

const Navbar = () => {
  
  
  
  return (
    <div className="sticky z-50 w-full">
  <div className="flex flex-row justify-between max-w-2xl lg:min-w-screen px-4">
    <div className="relative lg:fixed flex flex-row justify-start items-center">
      <a href="/" className="h-24 w-24 -top-72">
      <div className="z-40 relative w-40 h-40 invisible md:visible">
      <Image
        src="/arr.svg" // Replace with your profile picture path
        alt="Profile Picture"
        layout="fill"
        objectFit="cover"
      />
      </div>
        {/*
        <DotLottieReact
          src="/animation.json"
          loop
          autoplay
          autoResizeCanvas
        />
        */}
      </a>
    </div>
    <div className="relative lg:fixed right-8 lg:top-0 lg:right-4 lg:m-8 flex flex-row justify-end items-center">
  <nav className="flex space-x-8 text-stone-900">
    <a href="/about" className="text-md font-light hover:text-stone-300">ABOUT</a>
    <a href="/projects" className="text-md font-light hover:text-stone-300">PROJECTS</a>
    <a href="/blog" className="text-md font-light hover:text-stone-300">BLOG</a>
    {/*<a href="/creative" className="text-lg font-medium hover:text-gray-700">art</a>*/}
  </nav>
</div>

  </div>
</div>

  
  );
};

export default Navbar;