"use client";


import React, { forwardRef, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems2 } from "@/data";

import Footer from '@/components/Footer';
import Art from '@/components/Art';
import ImageGrid from '@/components/ui/ImageGrid';
import Navbar from '@/components/ui/Navbar';


const CreativePage = () => {

    return (
        <main className={`bg-[#FBF6F4] flex flex-col items-center min-h-screen overflow-visible`}>
            <Navbar/>
            <FloatingNav navItems={navItems2} />
            <ImageGrid />
            <Footer/>
        </main>
    );
};
export default CreativePage;
