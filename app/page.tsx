"use client";

import About from "@/components/About";
import AboutMe from "@/components/AboutMe";
import Art from "@/components/Art";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VantaBackground from "@/components/VantaBackground";


gsap.registerPlugin(useGSAP,ScrollTrigger);

const Home = () => {
  return (
    <main className="font-mono relative flex justify-center items-center flex-col overflow-hidden mx-auto min-h-screen w-full">
      <VantaBackground />
      <div className=" w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
