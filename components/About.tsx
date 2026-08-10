"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HoverPreview from "./HoverPreview";
import Image from "next/image";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";
import { lora } from "@/app/fonts";

const EMAIL = "hayamaj02@gmail.com";

const experience = [
  {
    title: "Product Ops",
    company: "Unify",
    logo: "/logos/unify.png",
    url: "https://unifygtm.com",
    type: "Full-time",
    range: "Oct 2025 – Present",
    duration: "10m",
  },
  {
    title: "Strategic Projects Lead",
    company: "Scale AI",
    logo: "/logos/scale.svg",
    url: "https://scale.com",
    type: "Full-time",
    range: "Oct 2024 – Oct 2025",
    duration: "1y",
  },
  {
    title: "Computer Vision AI Data Engineer",
    company: "Yuva AI",
    logo: null,
    url: "https://yuva.ai",
    type: "Internship",
    range: "May 2024 – Aug 2024",
    duration: "3m",
  },
];

const About = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="about" className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-base font-medium text-black">Currently</h2>
        <p className="text-base leading-relaxed text-neutral-600">
          Somewhere between product, AI, and design. I like connecting the dots between how products are
          built and how people{" "}
          <motion.span
            className={`inline-block italic text-black ${lora.className}`}
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            experience
          </motion.span>{" "}
          them.
        </p>
        <button
          type="button"
          onClick={copyEmail}
          aria-label="Copy email address"
          className="flex w-fit items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-black"
        >
          {copied ? <IoCheckmarkOutline size={14} className="text-green-600" /> : <IoCopyOutline size={14} />}
          <span>{EMAIL}</span>
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-base font-medium text-black">Experience</h2>
        <ul className="flex flex-col gap-4">
          {experience.map((e) => (
            <li key={e.company}>
              <HoverPreview href={e.url}>
                <span className="flex items-center gap-2 text-base font-medium text-black">
                  <span>{e.title}</span>
                  <span className="text-neutral-300">&middot;</span>
                  {e.logo && (
                    <Image src={e.logo} alt="" aria-hidden width={16} height={16} className="opacity-80" />
                  )}
                  <span>{e.company}</span>
                </span>
              </HoverPreview>
              <p className="mt-0.5 text-sm text-neutral-400">
                {e.type} | {e.range} | {e.duration}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
