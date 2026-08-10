"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const SpotlightContext = createContext<{
  active: boolean;
  setActive: (v: boolean) => void;
} | null>(null);

export const HoverSpotlightProvider = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState(false);

  return (
    <SpotlightContext.Provider value={{ active, setActive }}>{children}</SpotlightContext.Provider>
  );
};

export const useSpotlightHover = () => {
  const ctx = useContext(SpotlightContext);
  if (!ctx) throw new Error("useSpotlightHover must be used within HoverSpotlightProvider");
  const { setActive } = ctx;
  return {
    onMouseEnter: () => setActive(true),
    onMouseLeave: () => setActive(false),
  };
};

export const SpotlightOverlay = () => {
  const ctx = useContext(SpotlightContext);
  if (!ctx) throw new Error("SpotlightOverlay must be used within HoverSpotlightProvider");

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-20 bg-white/70 backdrop-blur-sm transition-opacity duration-300 ${
        ctx.active ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};
