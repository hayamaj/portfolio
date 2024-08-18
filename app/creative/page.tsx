"use client";


import React, { forwardRef, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

import Footer from '@/components/Footer';
import Art from '@/components/Art';
import ImageGrid from '@/components/ui/ImageGrid';
import Navbar from '@/components/ui/Navbar';


const CreativePage = () => {

    return (
        <main className={`bg-[#FBF6F4] relative overflow-hidden min-h-screen flex-col items-center justify-between`}>
              <div className="background-noise"></div>
            <Navbar/>
            <FloatingNav navItems={navItems} />
            <ImageGrid />
            <Footer/>
        </main>
    );
};
export default CreativePage;
