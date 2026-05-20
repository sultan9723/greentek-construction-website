"use client";

import { useEffect, useRef, useState } from "react";

function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return { ref, visible };
}

const stats = [
  { value: "2020", label: "Established" },
  { value: "500+", label: "Projects Delivered" },
  { value: "Expertise", label: "Domestic & Commercial" },
  { value: "Nationwide", label: "SERVICE ACROSS THE UK" },
];

function CountUp({ target, suffix = "", visible }: { target: number; suffix?: string; visible: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);
  return <span>{count}{suffix}</span>;
}

function StatCard({ stat, delay }: { stat: typeof stats[0], delay: number }) {
  const fade = useFadeIn(delay);
  
  const numericValue = stat.value.match(/\d+/);
  const target = numericValue ? parseInt(numericValue[0]) : null;
  const suffix = stat.value.replace(/\d+/g, "");

  return (
    <div
      ref={fade.ref}
      className={`group relative bg-zinc-50 rounded-3xl p-5 md:p-8 border border-zinc-100 transition-all duration-700 hover:bg-white hover:border-green-500/20 hover:shadow-2xl hover:shadow-green-900/5 hover:-translate-y-1 ${
        fade.visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="relative z-10">
        <span className="text-3xl md:text-4xl font-black text-green-700 leading-none tracking-tighter block mb-3 group-hover:scale-105 transition-transform duration-500 origin-left">
          {target !== null ? (
            <CountUp target={target} suffix={suffix} visible={fade.visible} />
          ) : (
            stat.value
          )}
        </span>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-800 transition-colors">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

export default function AboutPreview() {
  const headerFade = useFadeIn(0);
  const journeyFade = useFadeIn(100);

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Centered heading block */}
        <div 
          ref={headerFade.ref}
          className={`text-center max-w-4xl mx-auto mb-16 md:mb-20 transition-all duration-700 ease-out ${
            headerFade.visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600 mb-6">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 md:text-5xl lg:text-7xl leading-[1.05]">
            Leading the Way in <br />
            <span className="text-green-700">Construction & Energy.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-zinc-500 leading-relaxed font-medium">
            Greentek specializes in air source heat pumps, solar PV installation, boiler upgrades, loft insulation, external wall insulation, and comprehensive property refurbishment services across West Midlands and Wales.
          </p>
        </div>

        {/* Our Journey Section */}
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 lg:items-center">
          {/* Left - Text */}
          <div
            ref={journeyFade.ref}
            className={`transition-all duration-700 ease-out ${
              journeyFade.visible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
            }`}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 leading-tight mb-8">
              Our Journey <br />Since 2020
            </h3>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                Established in 2020, Greentek has delivered 500+ projects under ECO3, ECO4, and LA Flex. 
                We bridge the gap between traditional construction and modern energy efficiency.
              </p>
              <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                Our approach is built on two core pillars: Energy Decarbonization and 
                turnkey Construction. We provide a unique, holistic service that meets 
                the highest regulatory standards.
              </p>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <StatCard stat={stats[0]} delay={200} />
            <StatCard stat={stats[1]} delay={300} />
            <StatCard stat={stats[2]} delay={400} />
            <StatCard stat={stats[3]} delay={500} />
          </div>
        </div>
      </div>
    </section>
  );
}
