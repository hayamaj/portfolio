"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { cn } from "@/utils/cn";
import MagicButton from "./ui/MagicButton";

const About = () => {
  return (
    <div className=" py-48" id="about">
      <h1 className="text-black font-mono text-xl font-medium uppercase justify-center text-center">
        ABOUT ME
      </h1>
      <div className="flex flex-col items-center justify-center p-4 gap-16 mt-4">
  <div className="flex flex-col md:flex-row items-center justify-center p-4 gap-8 mt-4">
    <div className="z-20 relative w-40 h-40 rounded-full overflow-hidden mb-4 md:mb-0">
      <Image
        src="/profile.JPG" // Replace with your profile picture path
        alt="Profile Picture"
        layout="fill"
        objectFit="cover"
      />
    </div>

    <p className="lg:text-lg lg:font-light font-light font-mono text-sm text-justify max-w-lg text-neutral-950 p-4">
      Hi! I&apos;m Haya (hey-ya). <br/> <br/>
      <span className="font-semibold">what I do best:</span> bridge gaps between people across different worlds. <br/>
      <span className="font-semibold">what I want to do:</span> make people feel heard, loved, and connected. <br/>
    </p>
    
  </div>
  <div className="">
    <MagicButton title="Download My Resume" icon={<FaLocationArrow />} position="right" />
  </div>
</div>

      </div>
  );
};

export default About;