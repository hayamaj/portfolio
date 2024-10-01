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
import ProjectsList from '@/components/ProjectsList';


const ProjectsPage = () => {

    return (
        <main className={`bg-white relative min-h-screen overflow-hidden p-4`}>
            <div className="background-noise"></div>
            <Navbar/>
            <ProjectsList/>
            {/*<AllProjects/>*/}
            <Footer/>
        </main>
    );
};
export default ProjectsPage;