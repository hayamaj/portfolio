"use client";


import React, { forwardRef, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems2 } from "@/data";

import Footer from '@/components/Footer';
import Navbar from '@/components/ui/Navbar';
import { AiFillWarning } from 'react-icons/ai';
import AllWork from '@/components/AllWork';


const Work = () => {

    return (
        <main className={`bg-[#FBF6F4] min-h-screen`}>
            <Navbar/>
            <FloatingNav navItems={navItems2} />
            <AllWork/>
        </main>
    );
};

export default Work;