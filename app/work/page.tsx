"use client";


import React from 'react';
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

import Footer from '@/components/Footer';
import Navbar from '@/components/ui/Navbar';
import AllWork from '@/components/AllWork';


const WorkPage = () => {

    return (
        <main className={`bg-[#FBF6F4] relative overflow-hidden min-h-screen`}>
            <div className="background-noise"></div>
            <Navbar/>
            <FloatingNav navItems={navItems} />
            <AllWork/>
            <Footer/>
        </main>
    );
};
export default WorkPage;