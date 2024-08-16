"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import React, { forwardRef } from 'react';

const Work = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="flex items-center justify-center">
  <div ref={ref} className="mb-16 flex flex-col items-left justify-center w-screen max-w-2xl mx-12" id="work">
  <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl">Work</h1>
          <a href="/work" className="font-medium cursor-pointer ml-auto">See all work</a>
        </div>
        <div className="my-4">
        <h1 className="font-semibold">Yuva AI</h1>
        <h1 className="font-light opacity-50">Computer Vision AI Data Engineer</h1>
        <h1 className="font-light opacity-50">May 2024-August 2024</h1>
        </div>


        </div>




    </div>

     );
    });
    
    // Adding the display name
    Work.displayName = 'WorkRef';
    
    export default Work;