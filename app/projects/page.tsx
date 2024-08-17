"use client";


import React, { forwardRef, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems2 } from "@/data";

import Footer from '@/components/Footer';
import Navbar from '@/components/ui/Navbar';
import { AiFillWarning } from 'react-icons/ai';
import AllProjects from '@/components/AllProjects';


const ProjectsPage = () => {

    return (
        <main className={`bg-[#FBF6F4] relative min-h-screen overflow-hidden`}>
            <div className="background-noise"></div>
            <Navbar/>
            <FloatingNav navItems={navItems2} />
            <AllProjects/>
            <Footer/>
        </main>
    );
};
export default ProjectsPage;