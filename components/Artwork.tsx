"use client";

import { images } from "@/data";

const Artwork = () => {
  return (
    <section id="artwork" className="flex flex-col gap-4">
      <h2 className="text-base font-medium text-black">Creative</h2>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative h-56 shrink-0 overflow-hidden rounded-md bg-neutral-100 sm:h-72"
          >
            {image.type === "video" ? (
              <video
                src={image.src}
                className="h-full w-auto"
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image.src} alt={image.alt} className="h-full w-auto" />
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2.5 py-2 text-[11px] leading-tight text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {image.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artwork;
