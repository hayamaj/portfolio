"use client";


import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from "next/image";

const Navbar = () => {
  
  
  
  return (
    <div className="sticky top-5 z-50 w-full">
  <div className="flex flex-row justify-between items-center max-w-2xl mx-auto px-4">
    <div className="flex justify-start">
      <a href="/" className="h-24 w-24">
      <div className="z-40 relative w-40 h-40 -top-5 -ml-6 md:-ml-16">
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
    <div className="flex flex-row justify-end items-center py-4 mr-2">
      <nav className="flex space-x-8">
        <a href="/work" className="text-lg font-medium hover:text-gray-700">work</a>
        <a href="/projects" className="text-lg font-medium hover:text-gray-700">projects</a>
        {/*<a href="/creative" className="text-lg font-medium hover:text-gray-700">art</a>*/}
      </nav>
    </div>
  </div>
</div>

  
  );
};

export default Navbar;