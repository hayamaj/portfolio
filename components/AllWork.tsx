"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import React, { forwardRef } from 'react';

const AllWork = () => {
  return (
    <div className="flex items-center justify-center my-16">
        <div className="mb-16 flex flex-col items-left justify-center w-screen max-w-2xl mx-12" id="work">
            <div className="flex justify-between items-center">
                <h1 className="font-semibold text-xl">Work</h1>
            </div>
            {/*job 1*/}
            <div className="my-4">
                <h1 className="font-semibold">Yuva AI</h1>
                <h1 className="font-light opacity-50">Computer Vision AI Data Engineer</h1>
                <h1 className="font-light opacity-50">May 2024-August 2024</h1>
                <ul className="justify-between max-w-2xl m-2">
                <li className="font-light list-disc mt-6">Created novel datasets (b.box, segmentation, keypoint & depth) using physics-based simulation platform for Fortune 500 healthcare & media clients.</li>
                <li className="font-light list-disc">Reduced large-scale data processing pipeline speed by 15%. Saved over $10K in compute costs.</li>
                <li className="font-light list-disc">Increased synthetic data generation evaluation system accuracy by 20% for client projects.</li>
                </ul>
            </div>
            {/*job 2*/}
            <div className="my-4">
                <h1 className="font-semibold">Dakota Systems</h1>
                <h1 className="font-light opacity-50">AI Integration and Solutions Engineer</h1>
                <h1 className="font-light opacity-50">May 2023-Nov 2023</h1>
                <ul className="justify-between max-w-2xl m-2">
                <li className="font-light list-disc mt-6">Developed and optimized AI models for text generation and chatbot functionality by integrating OpenAI&apos;s GPT models (GPT-3,4) into Dakota&apos;s web platform. </li>
                <li className="font-light list-disc">Enhanced chatbot&apos;s accuracy by 20% with tailored datasets. Improved response relevance by 30% through prompt engineering techniques aligned with business objectives.</li>
                <li className="font-light list-disc">Utilized AI tools and libraries (NumPy, SciPy) to continuously monitor and optimize the chatbot&apos;s performance. </li>
                </ul>
            </div>
            {/*job 3*/}
            <div className="my-4">
                <h1 className="font-semibold">BU Spark!</h1>
                <h1 className="font-light opacity-50">Product Manager/Developer</h1>
                <h1 className="font-light opacity-50">May 2023-August 2024</h1>
                <ul className="justify-between max-w-2xl m-2">
                <li className="font-light list-disc mt-6">Orchestrated the development of a community-driven upcycling platform as Product Manager and Lead Developer. Facilitated weekly sprint planning and retrospectives, improving team productivity by 30%.</li>
                <li className="font-light list-disc">Led a cross-functional team through 40+ product cycles and 288 development hours, driving the project to successful completion. Managed competing priorities in a dynamic, demanding environment.</li>
                <li className="font-light list-disc">Collected and analyzed user data from 127 interviews and 13 beta tests. Implemented 6 key features based on feedback, resulting in a 40% increase in user satisfaction.</li>
                </ul>
            </div>
            {/*job 4*/}
            <div className="my-4">
                <h1 className="font-semibold">ZenHR</h1>
                <h1 className="font-light opacity-50">Software Developer</h1>
                <h1 className="font-light opacity-50">July 2022-Sept 2022</h1>
                <ul className="justify-between max-w-2xl m-2">
                <li className="font-light list-disc mt-6">Developed and optimized software components for zenhr.com&apos;s front and back-end using Ruby on Rails.</li>
                <li className="font-light list-disc">Collaborated with UI/UX sprint teams to implement 5 new features, reducing bounce rate by 20%.</li>
                <li className="font-light list-disc">Presented my code during weekly team meetings to ensure high-quality standards and alignment across different teams.                </li>
                </ul>
            </div>


        </div>




    </div>

     );
    };
    
    
    export default AllWork;