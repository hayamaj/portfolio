"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";
import VantaBackground from "./VantaBackground";

const RecentProjects = () => {
  return (
    <div className="pb-8 mt-48" id="projects">
      <h1 className="heading text-red-400 text-lg lowercase">RECENT PROJECTS {" "}
        {/*<span className="text-metallic">recent projects.</span>*/}
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
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
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
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

              <h1 className="font-bold lg:text-2xl md:text-xl text-base text-red-400 lowercase line-clamp-1">
                {projects.title}
              </h1>

              <p
                className="lg:text-sm lg:font-light font-light text-sm line-clamp-2"
                style={{
                  color: "#333333",
                  margin: "1vh 0",
                }}
              >
                {projects.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {projects.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <FaLocationArrow className="ms-3 mx-4 w-8 h-8" color="#f87171" />
                </div>
              </div>
            </PinContainer>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
