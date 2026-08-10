"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useSpotlightHover } from "./HoverSpotlight";

const previewSrc = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

const HoverPreview = ({ href, children }: { href: string; children: ReactNode }) => {
  const spotlight = useSpotlightHover();

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="spotlight-row group/preview inline-flex items-center rounded-md transition-colors hover:bg-white"
      {...spotlight}
    >
      {children}
      <span
        className="pointer-events-none absolute left-full top-1/2 ml-4 hidden w-64 -translate-y-1/2 translate-x-2 overflow-hidden rounded-lg border border-neutral-200 bg-white opacity-0 shadow-xl transition-all duration-200 ease-out group-hover/preview:translate-x-0 group-hover/preview:opacity-100 lg:block"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={previewSrc(href)}
          alt=""
          loading="lazy"
          className="aspect-[16/10] w-full object-cover object-top"
        />
        <span className="block truncate border-t border-neutral-100 px-2.5 py-1.5 font-mono text-[10px] text-neutral-400">
          {href.replace(/^https?:\/\//, "")}
        </span>
      </span>
    </Link>
  );
};

export default HoverPreview;
