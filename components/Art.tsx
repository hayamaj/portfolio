"use client";

import React from 'react';
import { images } from "@/data";
import { useLenis } from '@/libs/lenis';


const Art = () => {
  function handleClick(id: number): void {
    throw new Error('Function not implemented.');
  }

  return (

    <div className="flex items-center justify-center">
    <div className="mb-16 flex flex-col items-left justify-center w-screen max-w-2xl mx-12" id="work">
    <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl">Art</h1>
          <a href="/creative" className="font-medium cursor-pointer ml-auto">See all artwork</a>
        </div>
          <div className="my-4 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {images.slice(0,3).map((image) => (
    <div key={image.id} id={`work-${image.id}`} className="cursor-pointer">
      <div className="relative" onClick={() => handleClick(image.id)}>
        <div className="thumbnail relative">
          <img
            src={image.src}
            alt={image.title}
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="title mb-4">
          <h3 className="m-2 opacity-70 italic text-xs whitespace-nowrap overflow-hidden font-light bg-[#FBF6F4]">
            <span>{image.title}</span>
          </h3>
        </div>
      </div>
    </div>
  ))}
  </div>
        </div>
      </div>
    </div>
  );
};



export default Art;
