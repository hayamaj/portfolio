"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import React, { forwardRef } from 'react';

const RecentProjects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="flex items-center justify-center">
    <div ref={ref} className="mb-16 flex flex-col items-left justify-center w-screen max-w-2xl mx-12" id="projects">
    <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl">Projects</h1>
          <a href="/projects" className="font-medium cursor-pointer ml-auto hover:text-gray-700">See all projects</a>
        </div>
      <div className="my-4">
      <h1 className="font-semibold">Dibs!</h1>
      <h1 className="font-light">Campus Waste-Sustainability App</h1>
      </div>





</div></div>


  );
});

// Adding the display name
RecentProjects.displayName = 'RecentProjects';

export default RecentProjects;
