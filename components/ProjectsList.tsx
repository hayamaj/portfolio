"use client";

import { FaLocationArrow } from "react-icons/fa6";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { forwardRef } from 'react';
import Link from 'next/link';

const ProjectsList = () => {
  return (
    <div className="flex items-center justify-center my-16">
     <a href="/projects/dibs" className="block">   
    <div className="mx-auto max-w-lg hover:bg-neutral-400 flex flex-col max-w-lg justify-center items-left gap-2 my-24">

    {/* Job 1 */}
    <div>
        <div className="flex flex-row gap-4">
        <h1 className="font-medium text-sm">Dibs!</h1>
        <p className="font-light opacity-80 text-sm">React Native, Typescript, Expo</p>
        </div>
        <p className="font-light opacity-50 text-xs">A digital thrift store solution to campus waste management.</p>
    </div>
    <hr></hr>

    </div>
    </a>


    </div>

     );
    };
    
    
    export default ProjectsList;