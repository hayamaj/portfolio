"use client";

import { FaLinkedin, FaGithub, FaEnvelope, FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { cn } from "@/utils/cn";
import MagicButton from "./ui/MagicButton";
import AllWork from "./AllWork";

const About = () => {
  return (
    <div className="my-8" id="about">
      <div className="flex flex-col items-center justify-center p-4 gap-16 mt-4">
  <div className="flex flex-col md:flex-col items-center justify-center p-4 gap-8 mt-4">
    <div className="z-20 relative w-36 h-36 rounded-full overflow-hidden mb-4 md:mb-0">
      <Image
        src="/profile.JPG" // Replace with your profile picture path
        alt="Profile Picture"
        layout="fill"
        objectFit="cover"
      />
    </div>

    <p className="lg:text-md lg:font-light font-light font-sans text-sm text-justify max-w-lg text-black opacity-70 pt-4">
      I&apos;m <span className="font-medium opacity-100 text-black">Haya AlMajali</span> &mdash; Aspiring Product Leader/Strategist, Engineer, AI Enthusiast, People Person, Creative. I recently graduated from Boston University with a BA in Computer Science.
    </p>
    <p className="-mt-4 lg:text-md lg:font-light font-light font-sans text-sm text-justify max-w-lg text-black opacity-70">
    I always wondered how I could make an impact on the world, and I studied CS because I recognized technology as a powerful tool that could be used to solve complex problems across every industry. I feel the same way about AI, which is what drove my interest to explore that community and the innovative work happening in that space.
        </p>
        <p className="-mt-4 lg:text-md lg:font-light font-light font-sans text-sm text-justify max-w-lg text-black opacity-70">
        Beyond the technical, I&apos;m a people person! I love working with people, specifically in the context of digging into problems and communicating them cross-functionally. At BU, I had the unique opportunity to lead several teams in developing my own products. It was there that I realized my unique strength in bridging the gap between people from diverse backgrounds and ensuring that we all work towards a common goal.         </p>

  </div>
  

</div>
<div className="mx-auto max-w-lg flex flex-col max-w-lg justify-center items-left gap-2 mt-4 p-4">
<h1 className="font-semibold text-justify justify-start mb-8">Professional Work Experience:</h1>

  {/* Job 1 */}
  <div>
    <div className="flex flex-row gap-4">
    <h1 className="font-medium text-sm">Yuva AI</h1>
    <p className="font-light opacity-80 text-sm">Computer Vision AI Data Engineer</p>
    </div>
    <p className="font-light opacity-50 text-xs">(May 2024 - August 2024)</p>
  </div>
  <hr></hr>

  {/* Job 2 */}
  <div>
  <div className="flex flex-row gap-4">
    <h1 className="font-medium text-sm">Dakota Systems</h1>
    <p className="font-light opacity-80 text-sm">AI Integration and Solutions Engineer</p>
    </div>
    <p className="font-light opacity-50 text-xs">(May 2023 - Nov 2023)</p>
  </div>
  <hr></hr>
  {/* Job 3 */}
  <div>
  <div className="flex flex-row gap-4">
    <h1 className="font-medium text-sm">BU Spark!</h1>
    <p className="font-light opacity-80 text-sm">Product Manager/Developer</p>
    </div>
    <p className="font-light opacity-50 text-xs">(May 2023 - August 2024)</p>
  </div>
  <hr></hr>
  {/* Job 4 */}
  <div>
  <div className="flex flex-row gap-4">
    <h1 className="font-medium text-sm">ZenHR</h1>
    <p className="font-light opacity-80 text-sm">Software Developer</p>
    </div>
    <p className="font-light opacity-50 text-xs">(July 2022 - Sept 2022)</p>
  </div>
  <hr></hr>
</div>


          

      </div>
      
  );
};

export default About;