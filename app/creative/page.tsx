"use client";


import React, { forwardRef, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems2 } from "@/data";

import Footer from '@/components/Footer';
import Art from '@/components/Art';
import ImageGrid from '@/components/ui/ImageGrid';


const Creative = () => {

    return (
        <main className={`font-mono flex min-h-screen flex-col items-center justify-between`}>
            <FloatingNav navItems={navItems2} />
            <ImageGrid />
        </main>
    );
};

export default Creative;