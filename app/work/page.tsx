"use client";


import React from 'react';
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems2 } from "@/data";

import Footer from '@/components/Footer';
import Navbar from '@/components/ui/Navbar';
import AllWork from '@/components/AllWork';


const WorkPage = () => {

    return (
        <main className={`bg-[#FBF6F4] min-h-screen`}>
            <Navbar/>
            <FloatingNav navItems={navItems2} />
            <AllWork/>
            <Footer/>
        </main>
    );
};
export default WorkPage;