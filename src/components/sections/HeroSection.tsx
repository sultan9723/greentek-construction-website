"use client";

import { useEffect, useRef, useState } from "react";

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

export default function HeroSection() {
  const heroFade = useFadeIn(100);

  return (
    <section className="relative bg-zinc-900 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32 text-center">
        <div 
          ref={heroFade.ref}
          className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${
            heroFade.visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
            Bridging <span className="text-green-500">Construction</span> <br className="hidden md:block" />
            with Renewable Energy.
          </h1>

          <p className="mt-8 text-base md:text-lg lg:text-xl leading-relaxed text-zinc-400 max-w-2xl mx-auto">
            GreenTek is an agile, multi-disciplinary firm delivering high-performance 
            building upgrades and low-carbon energy solutions across the UK.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
            <a
              href="/services"
              className="w-full sm:w-auto rounded-xl bg-green-700 px-8 py-4 sm:px-10 sm:py-5 text-xs font-bold text-white transition hover:bg-green-600 shadow-xl shadow-green-900/40 active:scale-95"
            >
              Our Solutions
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 px-8 py-4 sm:px-10 sm:py-5 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-white/10 active:scale-95"
            >
              Consult an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
