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

export default function ProjectsGallerySection() {
  const featuredProjects = siteConfig.projects.slice(0, 4);
  const sectionFade = useFadeIn(0);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={sectionFade.ref}
          className={`transition-all duration-1000 ease-out ${
            sectionFade.visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-700 mb-6">
              Proven Performance
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 md:text-5xl lg:text-7xl leading-[1.05]">
              Track Record of <br />
              <span className="text-green-700">Success.</span>
            </h2>
            <div className="mt-10">
              <a href="/projects" className="group inline-flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900">
                View All Projects
                <span className="w-14 h-14 rounded-full bg-zinc-900 text-white flex items-center justify-center group-hover:bg-green-700 transition-all duration-500 shadow-xl shadow-zinc-900/10 active:scale-90">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-100 aspect-[4/5] hover:cursor-pointer transition-all duration-700 shadow-sm hover:shadow-2xl active:scale-[0.98]"
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Subtle Category Label - Always Visible */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-zinc-900 text-[9px] font-black uppercase tracking-widest border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Title Overlay - Visible on Hover/Active */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="text-white text-xl font-black leading-tight translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

