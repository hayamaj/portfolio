"use client";

import About from "@/components/About";
import Artwork from "@/components/Artwork";
import Footer from "@/components/Footer";
import FoodRecs from "@/components/FoodRecs";
import Hero from "@/components/Hero";
import { HoverSpotlightProvider, SpotlightOverlay } from "@/components/HoverSpotlight";
import Languages from "@/components/Languages";
import Resources from "@/components/Resources";
import TechStack from "@/components/TechStack";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white text-black">
      <HoverSpotlightProvider>
        <main className="relative z-[2] mx-auto flex w-full max-w-4xl flex-col gap-14 px-5 py-8 sm:px-8 md:px-10 md:py-16">
          <Hero />
          <About />
          <TechStack />
          <Languages />
          <Resources />
          <Artwork />
          <FoodRecs />
          <SpotlightOverlay />
        </main>
      </HoverSpotlightProvider>
      <Footer />
    </div>
  );
};

export default Home;
