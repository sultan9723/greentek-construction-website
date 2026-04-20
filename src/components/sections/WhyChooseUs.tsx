"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.5);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const features = [
  {
    title: "Proven Scalability",
    text: "With 500+ successful projects, our compliance and reporting meet the highest regulatory standards.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Agile Accountability",
    text: "Direct director-level oversight on every site. We are small enough to be personal, but experienced enough to be professional.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Brand Agnostic",
    text: "We select the best-in-class technology—fabric or hardware—based on specific client ROI requirements.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: "Full Lifecycle Support",
    text: "From initial consultancy and design to installation and long-term maintenance, we stay by your side.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingInView, setHeadingInView] = useState(false);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHeadingInView(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden" aria-labelledby="why-choose-heading">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, #ffffff 40%, #f0fdf4 100%)" }} />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading Block */}
        <div ref={headingRef} className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600 mb-6">
            The GreenTek Advantage
          </p>
          <h2 id="why-choose-heading" className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.05]">
            Why Choose Us
          </h2>
          <div className="flex justify-center mt-8">
            <div className={`h-1.5 bg-green-600 rounded-full transition-all duration-1000 ease-out ${headingInView ? "w-24" : "w-0"}`} />
          </div>
        </div>

        {/* Stat Bar - Restored Floating Pill Style */}
        <div className="flex justify-center mb-16 md:mb-20">
          <div className="flex flex-col sm:flex-row items-center justify-center bg-white rounded-[2.5rem] md:rounded-full shadow-2xl shadow-green-900/5 border border-zinc-100 w-full md:w-auto overflow-hidden sm:overflow-visible">
            <div className="flex flex-col items-center w-full sm:w-auto py-8 lg:py-10 px-6 md:px-10 lg:px-14 bg-white z-10">
              <span className="text-4xl md:text-5xl lg:text-6xl font-black text-green-600 leading-none tracking-tighter"><CountUp target={500} suffix="+" /></span>
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-3">Projects Delivered</span>
            </div>
            <div className="w-full h-px sm:w-px sm:h-16 bg-zinc-100" />
            <div className="flex flex-col items-center w-full sm:w-auto py-8 lg:py-10 px-6 md:px-10 lg:px-14 bg-white z-10">
              <span className="text-4xl md:text-5xl lg:text-6xl font-black text-green-600 leading-none tracking-tighter"><CountUp target={100} suffix="%" /></span>
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-3">Director-Led Sites</span>
            </div>
            <div className="w-full h-px sm:w-px sm:h-16 bg-zinc-100" />
            <div className="flex flex-col items-center w-full sm:w-auto py-8 lg:py-10 px-6 md:px-10 lg:px-14 bg-white z-10">
              <span className="text-4xl md:text-5xl lg:text-6xl font-black text-green-600 leading-none tracking-tighter"><CountUp target={3} suffix="x" /></span>
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-3">Average Client ROI</span>
            </div>
          </div>
        </div>

        {/* Elite Feature Cards - Maintained */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group relative bg-white border border-zinc-100 p-8 rounded-[2.5rem] transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(22,163,74,0.1)] hover:-translate-y-3"
            >
              {/* Animated Glow Backplate */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-50/0 group-hover:from-green-50/80 group-hover:to-transparent transition-all duration-500 rounded-[2.5rem]" />
              
              <div className="relative z-10">
                {/* Icon with Ring Effect */}
                <div className="relative w-14 h-14 mb-8">
                  <div className="absolute inset-0 bg-green-600 rounded-2xl rotate-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 opacity-10 group-hover:opacity-20" />
                  <div className="absolute inset-0 bg-green-600 rounded-2xl flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-500 shadow-xl shadow-green-900/20">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-950 tracking-tight mb-4 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                  {feature.text}
                </p>

                {/* Micro-interaction: Moving Arrow */}
                <div className="mt-8 flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  Discovery
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-green-600 rounded-b-full group-hover:w-1/3 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
