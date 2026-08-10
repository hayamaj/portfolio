"use client";

import Link from "next/link";
import HoverPreview from "./HoverPreview";

const recs = [
  { place: "Le French Diner", rating: "10.0", area: "Lower East Side", url: "https://www.instagram.com/lefrenchdiner" },
  { place: "U Omakase", rating: "10.0", area: "Greenpoint", url: "https://www.u-bk.com" },
  { place: "Maison Premiere", rating: "9.9", area: "Williamsburg", url: "https://maisonpremiere.com" },
  { place: "Sailor", rating: "9.9", area: "Fort Greene", url: "https://www.sailor.nyc" },
  { place: "I Cavallini", rating: "9.9", area: "Williamsburg", url: "https://www.icavallinibk.com" },
  { place: "Le Crocodile", rating: "9.8", area: "Williamsburg", url: "https://www.lecrocodile.com" },
];

const FoodRecs = () => {
  return (
    <section id="food" className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-base font-medium text-black">NYC Food Recs</h2>
        <Link
          href="https://beliapp.co/app/hayamaj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-light text-neutral-400 hover:text-black"
        >
          Beli &rarr;
        </Link>
      </div>
      <ul className="flex flex-col gap-1">
        {recs.map((r) => (
          <li key={r.place}>
            <HoverPreview href={r.url}>
              <span className="flex items-center gap-2 text-base font-normal text-black">
                <span>{r.place}</span>
                <span className="text-neutral-300">&middot;</span>
                <span>{r.rating}</span>
              </span>
            </HoverPreview>
            <p className="mt-0.5 text-sm text-neutral-400">{r.area}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FoodRecs;
