"use client";

import { FaLocationArrow } from "react-icons/fa6";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { forwardRef } from 'react';
import Link from 'next/link';

const AllProjects = () => {
  return (
    <div className="flex items-center justify-center my-16">
        <div className="my-16 flex flex-col items-left font-light justify-center w-screen max-w-2xl mx-12" id="projects">

            {/*job 1*/}
            <div className="my-4 ">
                <div className="flex flex-row">
                    
                <h1 className="font-semibold">Dibs!</h1>
                    </div>
                <h1 className="font-light opacity-50">React Native, Typescript, Expo</h1>
                <p>A digital thrift store solution to campus waste management.</p>
                <div>
                <div className="justify-between max-w-2xl my-6 text-black list-disc opacity-70">
                <li className="font-light"><span className="font-medium">288 hours</span> on development.</li>
                <li className="font-light"><span className="font-medium">127 interviews</span> conducted.</li>
                <li className="font-light"><span className="font-medium">13 &nbsp; beta users</span> tested.</li>
                </div>
                </div>


                {/*
                <div className="z-50 relative bg-black w-40 h-40 rounded-full overflow-visible">
                    <Image
                        src="/dibslogo.png"
                        alt="Profile Picture"
                        layout="fill"
                        objectFit="cover"
                        className="max-w-fit overflow-visible"
                    />
                    </div>
*/}
               

                <div className="pt-8">
                        <h2 className="font-medium text-left">A quick look</h2>
                        <div className="mt-0">
                            <Image
                                src="/dibs2.png"
                                width={1000}
                                height={1000}
                                alt="Dibs Version 2"
                            />
                        </div>
                        <p className="mt-4 text-left text-xs sm:text-sm">
                            My Role: <strong className="">Product Lead/Manager</strong>
                        </p>
                        <p className="mt-0 text-left text-xs sm:text-sm">
                            Tech Stack: <strong className="">React Native, Expo, TypeScript, Firebase & Google Auth</strong>
                        </p>
                        <p className="mt-4 text-left max-w-5xl text-xs sm:text-sm mt-12">
                        Click here to watch a <Link href="/product/dibs/demo" className="text-xs sm:text-sm underline decoration-1 underline-offset-2 opacity-30 hover:opacity-100 font-bold">demo</Link> of the app.
                    </p>
                    </div>

                    <div className="my-16">
                    <h2 className="font-medium text-left">My role</h2>
                    <p className="text-left text-justify pt-4 font-light">
                    I worked on dibs from 2022 - 2024, leading the project from inception to a successful launch over the course of those two years. 
                    I built the team from scratch and balanced multiple roles throughout the project, including Lead Developer, Product Manager, & Operator. 
                    Overall, I led the team through <strong className="font-bold">15+</strong> product cycles. 
                    This journey encompassed conducting user research, crafting user stories, designing wireframes on Figma, 
                    overseeing development, conducting usability testing, and managing cross-functional teams using tools like Trello. I ensured the product vision remained intact throughout the whole process.
                    </p>

                </div>

                

                <div className=" my-16">
                <h2 className="font-medium text-left">Product Evolution</h2>
                    <h2 className="mt-4 text-sm font-normal text-left lowercase">V1 &#8212;  (MVP)</h2>
                    <div className="">
                        <Image
                            src="/dibs-old.png"
                            width={1000}
                            height={1000}
                            alt="Dibs MVP"
                        />
                    </div>
                    <p className="mt-4 text-sm text-left font-normal">
                            My Role: <strong className="font-light">Innovator/Lead Developer</strong>
                        </p>
                        <p className="mt-0 text-sm text-left font-normal">
                            Tech Stack: <strong className="font-light">React, firebase, GoogleMaps API, & TailwindCSS</strong>
                        </p>

                </div>

                <div className="">
                <h2 className="mt-4 text-sm font-normal text-left lowercase">V2 &#8212; </h2>
                        <div className="">
                            <Image
                                src="/dibs2.png"
                                width={1100}
                                height={1100}
                                alt="Dibs Version 2"
                            />
                        </div>
                        <p className="mt-4 text-sm text-left font-normal">
                            My Role: <strong className="font-light">Product Lead/Manager</strong>
                        </p>
                        <p className="mt-0 text-sm text-left font-normal">
                            Tech Stack: <strong className="font-light">React Native, Expo, TypeScript, Firebase & Google Auth</strong>
                        </p>
                        

                    <div className="mt-12 text-left items-justify">
                    <h2 className="my-2 font-medium">I:</h2>
                        <ul className="ml-4 list-none space-y-1">
                            <li className="list-disc font-light"><strong className="font-medium">Expanded</strong> the dev team.</li>
                            <li className="list-disc font-light"><strong className="font-medium">Migrated</strong> from web to mobile.</li>
                            <li className="list-disc font-light"><strong className="font-medium">Performed</strong> an overhaul of app&apos;s UI/UX.</li>
                            <li className="list-disc font-light"><strong className="font-medium">Explored</strong> more efficient solutions based on user feedback.</li>
                        </ul>
                    </div>


                </div>

            </div>
            

        </div>




    </div>

     );
    };
    
    
    export default AllProjects;