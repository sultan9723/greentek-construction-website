"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

export default function BrandsSection() {
  const introFade = useFadeIn(0);
  
  // Use first 10 brands for the homepage
  const homepageBrands = siteConfig.brands.slice(0, 10);
  const row1 = homepageBrands.slice(0, 5);
  const row2 = homepageBrands.slice(5, 10);

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 overflow-hidden" aria-labelledby="brands-heading">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading Block */}
        <div 
          ref={introFade.ref}
          className={`text-center max-w-4xl mx-auto mb-16 md:mb-20 transition-all duration-700 ease-out ${
            introFade.visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600 mb-6">
            Our Network
          </p>
          <h2 id="brands-heading" className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.05]">
            Trusted by <br /><span className="text-green-600">Industry Leaders.</span>
          </h2>
          <div className="w-16 h-1.5 bg-green-600 rounded-full mt-10 mx-auto" />
          <p className="mt-10 text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto font-medium">
            Strategic partnerships with leading global manufacturers to deliver high-performance hardware.
          </p>
        </div>
      </div>

      {/* ── Two Row Marquee ── */}
      <div className="space-y-6">
        {/* Row 1 */}
        <div
          className="relative overflow-hidden group py-4"
          role="marquee"
          aria-label="Brand partner logos row 1"
        >
          <div
            className="flex items-center gap-8 group-hover:[animation-play-state:paused]"
            style={{
              animation: "marquee-brands 30s linear infinite",
              width: "max-content",
              willChange: "transform",
            }}
          >
            {[...row1, ...row1, ...row1, ...row1].map((logo, idx) => (
              <div
                key={`${logo.name}-r1-${idx}`}
                className="relative w-40 h-24 shrink-0 bg-white border border-zinc-100 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-1 flex items-center justify-center"
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

        {/* Row 2 */}
        <div
          className="relative overflow-hidden group py-4"
          role="marquee"
          aria-label="Brand partner logos row 2"
        >
          <div
            className="flex items-center gap-8 group-hover:[animation-play-state:paused]"
            style={{
              animation: "marquee-brands 35s linear infinite reverse",
              width: "max-content",
              willChange: "transform",
            }}
          >
            {[...row2, ...row2, ...row2, ...row2].map((logo, idx) => (
              <div
                key={`${logo.name}-r2-${idx}`}
                className="relative w-40 h-24 shrink-0 bg-white border border-zinc-100 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-1 flex items-center justify-center"
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
      </div>

      <style>{`
        @keyframes marquee-brands {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

