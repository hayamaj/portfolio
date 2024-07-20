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
import { TextGenerateEffect3 } from '@/components/ui/TextGenerate3';


gsap.registerPlugin(useGSAP,ScrollTrigger);

const Dibs = () => {

    return (
        <main className={`bg-[#FAF9F6] font-mono flex min-h-screen flex-col items-center justify-between`}>
            <FloatingNav navItems={navItems2} />
            <section className="max-w-screen-lg mx-auto px-2 py-20">
            <div className="flex justify-center relative my-20 mb-4 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-left -ml-8 justify-center">
                <div className="-my-10">
                <Image
                                src="/dibslogo.png"
                                width={600}
                                height={600}
                                alt="Dibs Version 2"
                            />
                </div>
                {/*<TextGenerateEffect3 className="text-center text-6xl md:text-6xl lg:text-8xl text-red-400" words={'DIBS!'} />*/}
                <p className="text-center -mt-4 font-bold lowercase md:tracking-wider text-sm md:text-lg lg:text-2xl text-center text-red-400">A Digital Thrift Store Solution to Campus Waste Management.</p>
                {/*<a href="#about"><MagicButton title="about" icon={<FaLocationArrow />} position= "right" />
                </a>*/}
            </div>
        </div>

        <div className="flex justify-left ml-4 relative my-20 mb-56 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-left justify-left">
                <TextGenerateEffect2 className="text-left md:text-xl lg:text-2xl" words={'288 hours on development.'} />
                <TextGenerateEffect2 className="text-left md:text-xl lg:text-2xl" words={'127 interviews conducted.'} />
                <TextGenerateEffect2 className="text-left md:text-xl lg:text-2xl" words={'13 beta-users tested'} />

            </div>
        </div>


                <div className="rounded-lg">

                <div className="px-8 py-8 lg:py-24">
                        <h2 className="text-xl text-red-400 font-bold text-left mb-1 lowercase">a quick look</h2>
                        <div className="mt-4">
                            <Image
                                src="/dibs2.png"
                                width={1000}
                                height={1000}
                                alt="Dibs Version 2"
                            />
                        </div>
                        <p className="mt-4 text-red-300 text-left text-xs sm:text-sm lowercase">
                            My Role: <strong className="text-red-400">Product Lead/Manager</strong>
                        </p>
                        <p className="mt-0 text-red-300 text-left lowercase text-xs sm:text-sm">
                            Tech Stack: <strong className="text-red-400">React Native, Expo, TypeScript, Firebase & Google Auth</strong>
                        </p>
                        <p className="mt-4 text-red-400 text-left max-w-5xl lowercase text-xs sm:text-sm mt-12">
                        Click here to watch a <Link href="/product/dibs/demo" className="text-xs sm:text-sm underline decoration-1 underline-offset-2 text-red-400 font-bold">demo</Link> of the app.
                    </p>
                    </div>

                    <div className="mt-24 px-4 py-8 lg:py-36">
                <h2 className="text-xl text-red-400 font-bold text-left mb-1 lowercase">my role</h2>
                    <p className="mt-4 text-[#333333] font-xs lg:font-sm text-left max-w-5xl lowercase">
                        I guided the project from its conceptualization to launch, orchestrating cross-functional teams through <strong className="font-bold">15+</strong> product cycles. This journey encompassed conducting user research, crafting user stories, designing wireframes on Figma, overseeing development, conducting usability testing, and managing cross-functional teams using tools like Trello.
                    </p>
                </div>

                <div className="mt-24 px-8">
                <h2 className="text-xl text-red-400 font-bold text-left mb-1 lowercase">product evolution</h2>
                    <h2 className="mt-4 text-sm font-bold text-red-400 text-left lowercase">V1 &#8212;  (MVP)</h2>
                    <div className="">
                        <Image
                            src="/dibs-old.png"
                            width={1000}
                            height={1000}
                            alt="Dibs MVP"
                        />
                    </div>
                    <p className="mt-4 text-red-300 text-left lowercase text-xs sm:text-sm">
                            My Role: <strong className="text-red-400">Innovator/Lead Developer</strong>
                        </p>
                        <p className="mt-0 text-red-300 text-left lowercase text-xs sm:text-sm">
                            Tech Stack: <strong className="text-red-400">React, firebase, GoogleMaps API, & TailwindCSS</strong>
                        </p>

                </div>

                <div className="mt-16 px-8">

                <div className="px-4">
                <h2 className="text-sm font-bold text-red-400 text-left lowercase">V2 &#8212; </h2>
                        <div className="">
                            <Image
                                src="/dibs2.png"
                                width={1100}
                                height={1100}
                                alt="Dibs Version 2"
                            />
                        </div>
                        <p className="mt-4 text-red-300 text-left lowercase text-xs sm:text-sm">
                            My Role: <strong className="text-red-400">Product Lead/Manager</strong>
                        </p>
                        <p className="mt-0 text-red-300 text-left lowercase text-xs sm:text-sm">
                            Tech Stack: <strong className="text-red-400">React Native, Expo, TypeScript, Firebase & Google Auth</strong>
                        </p>
                        
                    </div>
                    

                    <div className="mt-12 text-black text-left max-w-5xl lowercase items-justify">
                    <h2 className="mt-4 text-md font-medium text-black lowercase">we:</h2>
                        <ul className="ml-4 mt-4 text-md list-none space-y-2 lg:text-md text-md">
                            <li><strong className=" text-red-400 lowercase"> 1 Expanded</strong> dev team.</li>
                            <li><strong className=" text-red-400 lowercase"> 2 Migrated</strong> from web to mobile.</li>
                            <li><strong className="text-red-400 lowercase"> 3 Performed</strong> an overhaul of app&apos;s UI/UX.</li>
                            <li><strong className="text-red-400 lowercase"> 4 Explored</strong> more efficient solutions.</li>
                        </ul>
                    </div>

                    <div className="grid place-items-center my-4">
                    <FaArrowDown /> 
                    </div>

                </div>


                
{/*
                <div className="mt-16 px-4">
                    <h2 className="text-3xl font-bold text-red-400 text-left mb-1">problem statement</h2>
                    <p className="mt-4 text-[#333333] text-left font-medium max-w-5xl lowercase">
                        During move-out periods, our streets get cluttered with perfectly usable items discarded by students (mostly those living off-campus). It&apos;s not that these items are in bad shape, it&apos;s just easier for students to toss them than to find a new home for them. BU Students actually have a special name for this period &#8212; “Allston Christmas”. While some students do take advantage of this time & scour the streets of Allston for free furniture, it&apos;s not enough to address all the waste left out on the streets during this time. So, I wanted to find a solution that would equally benefit the students & protect our environment.
                    </p>
                </div>

                <div className="mt-16 px-4">
                    <h2 className="text-3xl font-bold text-red-400 text-left mb-1 lowercase">User Research Insights</h2>
                    <p className="mt-4 text-[#333333] text-left font-medium max-w-5xl lowercase">
                        There was no doubt that the cluttered streets of Boston posed an environmental issue. What we needed confirmation on was the second half of the issue &#8212; how the students were affected. So, we surveyed & interviewed about 50 BU students, focusing on their experience living on/off campus. Here are our preliminary findings:
                    </p>
                    {/*}
                    <div className="mt-4">
                        <Image
                            src="/userins.png"
                            width={1200}
                            height={1200}
                            alt="User Research Insights"
                        />
                    </div>

                </div>


                <div className="mt-16 px-4">
                    <h2 className="text-3xl font-bold text-red-400 text-left mb-1 lowercase">Competitive Analysis</h2>
                    <p className="mt-4 text-[#333333] text-left max-w-5xl lowercase">
                        Our main competitors, such as <strong className="text-red-400">craigslist</strong>, <strong className="text-red-400">facebook marketplace</strong> & <strong className="text-red-400">buynothing</strong> lack features tailored for university students. Facebook Marketplace & Craigslist&apos;s broad audience don&apos;t cater specifically to students&apos; needs, especially during move-in/move-out periods. Their interfaces fail to accommodate their fast-paced, mobile-centric lifestyles and they lack the sense of community needed to incentivize students to utilize this solution.
                    </p>
                </div>

                            */}
            
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Dibs;