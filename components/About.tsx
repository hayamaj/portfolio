"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { cn } from "@/utils/cn";
import MagicButton from "./ui/MagicButton";

const About = () => {
  return (
    <div className=" py-48 mt-48" id="about">
      <h1 className="text-red-400 heading lowercase">
        ABOUT ME
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-4">
      <div className="flex flex-col items-center justify-center p-4 gap-16 mt-4">
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 rounded-full overflow-hidden mb-10">
            <Image
              src="/profile.JPG" // Replace with your profile picture path
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/*
          <h1 className="font-semibold lg:text-2xl md:text-xl text-base text-neutral-900 p-2 mb-2 underline">
            HAYA ALMAJALI
          </h1>
  */}
          <p className="lg:text-lg lowercase lg:font-light font-light text-sm text-justify max-w-lg text-neutral-950 p-4 mb-8">
          I&apos;m Haya AlMajali, and I just graduated from Boston University <span className="font-medium">(woohoo!)</span>. I&apos;m a software developer based in New York, specializing in JavaScript, TypeScript, React, Next.js. I&apos;m a quick learner with a creative eye and a passion for merging Tech, Product & Design.
          </p>
          <div><MagicButton title="about" icon={<FaLocationArrow />} position= "right" />
                </div>
        </div>
      </div>
          </div>
      </div>
  );
};

export default About;