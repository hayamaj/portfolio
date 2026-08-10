"use client";

import Link from "next/link";
import { useSpotlightHover } from "./HoverSpotlight";

const BlogTeaser = () => {
  const spotlight = useSpotlightHover();

  return (
    <section id="blog" className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between">
        <h2 className="text-base font-medium text-black">Blog</h2>
        <Link href="/blog" className="text-sm font-light text-neutral-400 hover:text-black">
          see all &rarr;
        </Link>
      </div>
      <Link
        href="/blog/summer"
        className="spotlight-row group -mx-3 flex flex-col gap-1 rounded-md px-3 py-2 transition-colors hover:bg-white"
        {...spotlight}
      >
        <span className="text-base font-medium text-black group-hover:underline">Summer 2024</span>
        <span className="text-base font-light text-neutral-500">A post-grad midlife crisis?</span>
      </Link>
    </section>
  );
};

export default BlogTeaser;
