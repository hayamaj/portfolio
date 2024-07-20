"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { contentData } from "@/data";
import { PinContainer } from "./ui/Pin";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const AboutMe = () => {
  return (
    <div className="py-8 mb-24 " id="projects">
      <h1 className="heading text-black">About{" "}
        <span className="text-metallic">me.</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
      <StickyScroll content={contentData} />
      </div>
    </div>
  );
};

export default AboutMe;
