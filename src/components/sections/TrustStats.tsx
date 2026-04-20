"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site";

function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return { ref, visible };
}

export default function TrustStats() {
  const stats = [
    { value: "2020", label: "Established" },
    { value: "500+", label: "Projects Delivered" },
    { value: "Expertise", label: "Domestic & Commercial" },
    { value: "Director", label: "Level Oversight" }
  ];

  const sectionFade = useFadeIn(0);

  return (
    <section className="bg-white py-12 md:py-16 border-b border-zinc-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div 
          ref={sectionFade.ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 lg:gap-24 transition-all duration-1000 ease-out ${
            sectionFade.visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left group active:scale-95 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl font-black text-zinc-900 md:text-5xl lg:text-6xl tracking-tighter group-hover:text-green-700 transition-colors duration-500">
                {stat.value}
              </div>
              <p className="mt-4 text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-[0.2em] leading-tight group-hover:text-zinc-600 transition-colors duration-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
