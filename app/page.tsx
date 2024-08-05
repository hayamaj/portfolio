"use client";

import About from "@/components/About";
import AboutMe from "@/components/AboutMe";
import Art from "@/components/Art";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import VantaBackground from "@/components/VantaBackground";
import { ReactLenis, useLenis } from '@/libs/lenis';
import { useRef } from 'react';
import Creative from "./creative/page";

const Home = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const creativeRef = useRef<HTMLDivElement>(null);

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    console.log('scroll position:', scroll);
  });
  return (
    <ReactLenis root>
    <main className="font-mono relative flex justify-center items-center flex-col overflow-hidden mx-auto min-h-screen w-full">
      {/*<VantaBackground />*/}
      <div className=" w-full">
        <FloatingNav navItems={navItems} />
        <Hero projectsRef={projectsRef} creativeRef={creativeRef} />
        <About />
        <RecentProjects ref={projectsRef} />
        <Art ref={creativeRef}/>
        <Footer />
      </div>
    </main>
    </ReactLenis>
  );
};

export default Home;
