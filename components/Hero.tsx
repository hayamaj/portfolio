"use client";

import { useState } from "react";
import Image from "next/image";
import { IoVolumeMediumOutline, IoVolumeMuteOutline } from "react-icons/io5";

const Hero = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <header className="flex flex-col gap-5">
      <div className="flex items-center gap-6">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full sm:h-36 sm:w-36">
          <Image src="/profile.JPG" alt="Haya AlMajali" fill sizes="144px" className="object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-2xl font-medium tracking-tight text-black">Haya AlMajali</h1>
            <p className="text-sm italic text-neutral-400">
              (hey-ya, like <span className="underline decoration-1 underline-offset-2">the song</span>)
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "Hide player" : "Play the song"}
                className="ml-1.5 inline-block not-italic align-middle text-neutral-400 hover:text-neutral-700"
              >
                {playing ? <IoVolumeMediumOutline size={15} /> : <IoVolumeMuteOutline size={15} />}
              </button>
            </p>
          </div>
          {playing && (
            <iframe
              src="https://open.spotify.com/embed/track/2PpruBYCo4H7WOBJ7Q2EwM?utm_source=generator&autoplay=1"
              width="100%"
              height="80"
              style={{ maxWidth: 360, borderRadius: 8, border: "none" }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Hey Ya! on Spotify"
            />
          )}

          <p className="text-base leading-relaxed text-neutral-500">
            Product &middot; Human Data &middot; Evals &middot; Design Thinking
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
