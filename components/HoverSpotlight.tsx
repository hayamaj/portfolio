"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type SetActiveId = (id: string | null | ((prev: string | null) => string | null)) => void;

const SpotlightContext = createContext<{
  activeId: string | null;
  setActiveId: SetActiveId;
} | null>(null);

export const HoverSpotlightProvider = ({ children }: { children: ReactNode }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const reset = () => setActiveId(null);
    window.addEventListener("pageshow", reset);
    document.addEventListener("visibilitychange", reset);
    return () => {
      window.removeEventListener("pageshow", reset);
      document.removeEventListener("visibilitychange", reset);
    };
  }, []);

  return (
    <SpotlightContext.Provider value={{ activeId, setActiveId }}>{children}</SpotlightContext.Provider>
  );
};

const canHover = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export const useSpotlight = (id: string) => {
  const ctx = useContext(SpotlightContext);
  if (!ctx) throw new Error("useSpotlight must be used within HoverSpotlightProvider");
  const { activeId, setActiveId } = ctx;

  return {
    isActive: activeId === id,
    onMouseEnter: () => canHover() && setActiveId(id),
    onMouseLeave: () => canHover() && setActiveId((prev) => (prev === id ? null : prev)),
    onClick: () => {
      if (!canHover()) setActiveId((prev) => (prev === id ? null : id));
    },
  };
};

export const SpotlightOverlay = () => {
  const ctx = useContext(SpotlightContext);
  if (!ctx) throw new Error("SpotlightOverlay must be used within HoverSpotlightProvider");
  const active = ctx.activeId !== null;

  return (
    <div
      onClick={() => ctx.setActiveId(null)}
      className={`fixed inset-0 z-20 bg-white/70 backdrop-blur-sm transition-opacity duration-300 ${
        active ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    />
  );
};
