"use client";


import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems2 } from "@/data";

import { FaLinkedin, FaGithub, FaEnvelope, FaLocationArrow, FaArrowDown } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextGenerateEffect2 } from '@/components/ui/TextGenerateEffect2';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';

import Footer from '@/components/Footer';
import Art from '@/components/Art';


gsap.registerPlugin(useGSAP,ScrollTrigger);

const Creative = () => {

    return (
        <main className={`bg-[#FAF9F6] font-mono flex min-h-screen flex-col items-center justify-between`}>
            <FloatingNav navItems={navItems2} />
            <Art />

            <Footer />
        </main>
    );
};

export default Creative;