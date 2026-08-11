"use client";

import Link from "next/link";
import { useSpotlight } from "./HoverSpotlight";

const resources = [
  {
    title: "Taste Is the New Bottleneck",
    domain: "designative.info",
    url: "https://www.designative.info/2026/02/01/taste-is-the-new-bottleneck-design-strategy-and-judgment-in-the-age-of-agents-and-vibe-coding/",
  },
  {
    title: "The AI Daily Brief",
    domain: "open.spotify.com",
    url: "https://open.spotify.com/show/7gKwwMLFLc6RmjmRpbMtEO",
  },
  {
    title: "The Design of Everyday Things",
    domain: "mitpress.mit.edu",
    url: "https://mitpress.mit.edu/9780262640374/the-design-of-everyday-things/",
  },
  {
    title: "Developing Taste",
    domain: "emilkowal.ski",
    url: "https://emilkowal.ski/ui/developing-taste",
  },
  {
    title: "Taste for Makers",
    domain: "paulgraham.com",
    url: "https://www.paulgraham.com/taste.html",
  },
];

const ResourceRow = ({ title, domain, url }: { title: string; domain: string; url: string }) => {
  const { isActive, onMouseEnter, onMouseLeave, onClick } = useSpotlight(url);

  return (
    <li>
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={`spotlight-row group -mx-3 flex flex-col gap-0.5 rounded-md px-3 py-2 transition-colors ${
          isActive ? "z-30 bg-white shadow-md" : "z-10 hover:bg-white"
        }`}
      >
        <span className={`text-base font-normal text-black ${isActive ? "underline" : "group-hover:underline"}`}>
          {title}
        </span>
        <span className="text-sm font-light text-neutral-400">{domain}</span>
      </Link>
    </li>
  );
};

const Resources = () => {
  return (
    <section id="resources" className="flex flex-col gap-3">
      <h2 className="text-base font-medium text-black">Resources that shaped how I think</h2>
      <ul className="flex flex-col gap-1">
        {resources.map((r) => (
          <ResourceRow key={r.url} title={r.title} domain={r.domain} url={r.url} />
        ))}
      </ul>
    </section>
  );
};

export default Resources;
