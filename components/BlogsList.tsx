"use client";

import { FaLocationArrow } from "react-icons/fa6";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { forwardRef } from 'react';
import Link from 'next/link';

const BlogsList = () => {
    return (
      <div className="flex items-justify flex-col justify-between mt-16">
        <a href="/blog/summer" className="block">   
          <div className="mx-auto max-w-md flex flex-col justify-center items-left gap-2 mt-24">
            {/* Article 1 */}
            <div className="flex flex-row gap-4 hover:bg-neutral-400 mt-2">
              <h1 className="font-medium text-sm">Summer 2024</h1>
              <p className="font-light opacity-80 text-sm">A Post-Grad Midlife Crisis?</p>
            </div>
            <p className="font-light opacity-50 text-xs"> </p>
            <hr />
          </div>
        </a>
        <a href="/blog/creative" className="block">   
          <div className="mx-auto max-w-md flex flex-col justify-center items-left gap-2">
            {/* Article 2 */}
            <div className="flex flex-row gap-4 hover:bg-neutral-400 mt-2">
              <h1 className="font-medium text-sm">My Artwork</h1>
              <p className="font-light opacity-80 text-sm">2018-2024</p>
            </div>
            <p className="font-light opacity-50 text-xs"> </p>
            <hr />
          </div>
        </a>
      </div>
    );
  };
  
  export default BlogsList;
  