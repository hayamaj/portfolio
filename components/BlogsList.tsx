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
      <div className="flex items-center justify-center my-16">
        <a href="/blog/summer" className="block">   
          <div className="mx-auto max-w-lg flex flex-col justify-center items-left gap-2 my-24">
            {/* Article 1 */}
            <div className="flex flex-row gap-4 hover:bg-neutral-400">
              <h1 className="font-medium text-sm">Summer 2024</h1>
              <p className="font-light opacity-80 text-sm">A Post-Grad Midlife Crisis?</p>
            </div>
            <p className="font-light opacity-50 text-xs"> </p>
            <hr />
          </div>
        </a>
      </div>
    );
  };
  
  export default BlogsList;
  