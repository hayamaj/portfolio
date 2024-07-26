"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import React, { forwardRef } from 'react';

const RecentProjects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="pb-8 mt-48" id="projects">
    <div className="flex flex-col sm:flex-row justify-center items-center">
      <h1 className="flex-1 flex text-black text-xl font-light uppercase justify-center text-center">
        software projects
      </h1>
      <div className="flex-1 flex flex-wrap items-center justify-center p-4 gap-8 mt-10">
        {projects.map((projects) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={projects.id}
          >
            <a href={projects.link}>
            <PinContainer
              title={projects.title}
              href={projects.link}
            >
              <div className="relative shadow-md flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-none"
                  style={{ backgroundColor: "#000000" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={projects.img}
                  alt="cover"
                  className="z-10 absolute object-cover w-full h-full"
                />
              </div>

              

              <p
                className="lg:text-sm lg:font-light font-light text-sm line-clamp-2"
                style={{
                  color: "#333333",
                  margin: "1vh 0",
                }}
              >
                {projects.des}
              </p>

              <div className="flex mt-4 mb-3">
                <div className="flex items-right">
                  {projects.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-6 h-6 flex justify-right items-right"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

              </div>
            </PinContainer>
            </a>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
});

// Adding the display name
RecentProjects.displayName = 'RecentProjects';

export default RecentProjects;
