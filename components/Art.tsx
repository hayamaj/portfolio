"use client";

import React from "react";
import { images } from "@/data";
import { ParallaxScroll } from "./ui/parallax-scroll";

const Art = () => {
    // Extract the image URLs from the images array
  const imageUrls = images.map((image) => image.src);
    return (
      <div className="py-48 mt-0 bg-[#FAF9F6]" id="creative">
        <h1 className="heading text-[#E9C6DD] mb-36 ">CREATIVE WORK {" "}</h1>
        <div className="mt-4 overflow-hidden mb-8 sm:max-h-screen sm:max-w-screen w-screen h-[800px]"> {/* Wrap video in a rounded container */}
        <video autoPlay loop playsInline muted className="object-cover w-screen h-full">
          <source src="/drawingvid.mov" />
        </video>
      </div> 
      <div>    
        <ParallaxScroll images={imageUrls} className="mt-0" />
        </div> 
      </div>
    );
  };
  
  export default Art;
