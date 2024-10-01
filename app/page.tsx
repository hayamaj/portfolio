"use client";

import Art from "@/components/Art";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { ReactLenis, useLenis } from '@/libs/lenis';
import { useRef } from 'react';
import Navbar from "@/components/ui/Navbar";
import Heroteaser from "@/components/Heroteaser";


const Home = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const creativeRef = useRef<HTMLDivElement>(null);
  const WorkRef = useRef<HTMLDivElement>(null);

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    console.log('scroll position:', scroll);
  });
  return (
      <div className="relative min-h-screen w-full overflow-hidden">
      <div className="background-noise"></div>
        <main className="z-2 relative flex justify-center items-center flex-col overflow-hidden mx-auto min-h-screen w-full">

           {/* <Navbar/> */}
            <Heroteaser />
            {/*<FloatingNav navItems={navItems} />*/}

            {/*
            <Work />
            <RecentProjects />
            */}
            <Footer />
        </main>
      </div>
  );
};

export default Home;
