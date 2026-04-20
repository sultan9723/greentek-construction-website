"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return { ref, visible };
}

const accreditations = [
  { name: "CHAS", src: "/images/accreditations/chas.png" },
  { name: "Gas Safe Register", src: "/images/accreditations/gas-safe.png" },
  { name: "HIES", src: "/images/accreditations/hies.png" },
  { name: "Quality Mark", src: "/images/accreditations/qualitymark.png" },
  { name: "SWIGA", src: "/images/accreditations/swiga.png" },
  { name: "TrustMark", src: "/images/accreditations/trustmark.png" },
  { name: "Amtivo", src: "/images/accreditations/amtivo-logo-new.png" },
  { name: "BAB", src: "/images/accreditations/post-fallback-bab-img.png" },
];

export default function AccreditationsSection() {
  const introFade = useFadeIn(0);

  return (
    <section className="bg-white py-20 md:py-28 lg:py-36" aria-labelledby="accreditations-heading">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading Block */}
        <div 
          ref={introFade.ref}
          className={`text-center max-w-4xl mx-auto mb-20 md:mb-28 transition-all duration-700 ease-out ${
            introFade.visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600 mb-6">
            Verified Excellence
          </p>
          <h2 id="accreditations-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.05]">
            Fully Accredited <br />& <span className="text-green-600">Certified.</span>
          </h2>
          <div className="w-16 h-1.5 bg-green-600 rounded-full mt-10 mx-auto" />
        </div>
      </div>

      {/* ── Dual Row Marquee Strip ── */}
      <div
        className="relative border-y border-zinc-100 overflow-hidden py-6 space-y-6"
        role="marquee"
        aria-label="Accreditation logos"
      >
        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        {/* Row 1: Forward Track */}
        <div
          className="flex items-center gap-8 group-hover:[animation-play-state:paused]"
          style={{
            animation: "marquee-single 30s linear infinite",
            width: "max-content",
            willChange: "transform",
          }}
        >
          {[...accreditations.slice(0, 4), ...accreditations.slice(0, 4), ...accreditations.slice(0, 4), ...accreditations.slice(0, 4)].map((logo, idx) => (
            <div
              key={`${logo.name}-row1-${idx}`}
              className="relative w-36 h-20 shrink-0 bg-white border border-zinc-100 rounded-2xl p-4 transition-all duration-500 hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-1 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Backward Track */}
        <div
          className="flex items-center gap-8 group-hover:[animation-play-state:paused]"
          style={{
            animation: "marquee-reverse 35s linear infinite",
            width: "max-content",
            willChange: "transform",
          }}
        >
          {[...accreditations.slice(4), ...accreditations.slice(4), ...accreditations.slice(4), ...accreditations.slice(4)].map((logo, idx) => (
            <div
              key={`${logo.name}-row2-${idx}`}
              className="relative w-36 h-20 shrink-0 bg-white border border-zinc-100 rounded-2xl p-4 transition-all duration-500 hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-1 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee keyframes */}
      <style>{`
        @keyframes marquee-single {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-25%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
