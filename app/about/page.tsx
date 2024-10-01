"use client";


import React, { forwardRef, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

import Footer from '@/components/Footer';
import Navbar from '@/components/ui/Navbar';
import { AiFillWarning } from 'react-icons/ai';
import AllProjects from '@/components/AllProjects';
import About from '@/components/About';


const ProjectsPage = () => {

    return (
        <main className={`bg-white relative min-h-screen overflow-hidden`}>
            <div className="background-noise"></div>
            <Navbar/>
            <About/>
            <Footer/>
        </main>
    );
};
export default ProjectsPage;