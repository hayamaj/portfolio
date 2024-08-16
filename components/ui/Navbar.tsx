"use client";


import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from "next/image";

const Navbar = () => {
  
  
  
  return (
    <div className="sticky top-5 z-50 w-full">
  <div className="flex flex-row justify-between items-center max-w-2xl mx-auto px-4">
    <div className="flex justify-start">
      <a href="/" className="h-24 w-24 ml-2">
      <div className="ml-4 md:ml-0 z-20 relative w-20 h-20 py-8 mt-4 rounded-full overflow-hidden">
      <Image
        src="/profile.JPG" // Replace with your profile picture path
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
    <div className="flex flex-row justify-end items-center py-4">
      <nav className="flex space-x-8">
        <a href="/work" className="text-lg font-medium hover:text-gray-700">work</a>
        <a href="/projects" className="text-lg font-medium hover:text-gray-700">projects</a>
        <a href="/creative" className="text-lg font-medium hover:text-gray-700">art</a>
      </nav>
    </div>
  </div>
</div>

  
  );
};

export default Navbar;