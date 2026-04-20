"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CorePillars from "@/components/sections/CorePillars";
import Image from "next/image";
import { siteConfig } from "@/data/site";
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

function PartnerLogo({ brand, index }: { brand: any; index: number }) {
  const { ref, visible } = useFadeIn(index * 100);

  return (
    <div 
      ref={ref}
      className={`bg-white p-6 rounded-2xl border border-zinc-100 flex items-center justify-center hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="relative w-full h-16">
        <Image
          src={brand.src}
          alt={brand.name}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  const partnersHeaderFade = useFadeIn(0);
  const brands = siteConfig.brands;
  const row1 = brands.slice(0, Math.ceil(brands.length / 2));
  const row2 = brands.slice(Math.ceil(brands.length / 2));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-zinc-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-green-900/20 mix-blend-multiply" />
          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Leading the Way in <br />
              <span className="text-green-500">Construction & Energy</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              GreenTek is an agile, multi-disciplinary construction and energy firm, 
              dedicated to delivering high-performance solutions for a sustainable future.
            </p>
          </div>
        </section>

        {/* Story Section (About Us) */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Journey Since 2020</h2>
                <div className="space-y-4 text-lg text-zinc-600">
                  <p>
                    Established in 2020, GreenTek has rapidly grown into a powerhouse in the UK construction and energy sector. 
                    We have successfully delivered over 500 projects under major schemes including ECO3, ECO4, and LA Flex.
                  </p>
                  <p>
                    Our approach is built on two core pillars: Energy & Decarbonization and Commercial & Domestic Construction. 
                    By bridging the gap between traditional building practices and modern energy efficiency, 
                    we provide a unique, holistic service to our clients.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {siteConfig.stats.map((stat) => (
                  <div key={stat.label} className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                    <div className="text-4xl font-bold text-green-700">{stat.value}</div>
                    <div className="mt-2 text-sm font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Our Core Pillars Section */}
        <CorePillars />

        {/* Our Strategic Partners Section */}
        <section className="py-24 bg-zinc-50 border-y border-zinc-100 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6">
            <div 
              ref={partnersHeaderFade.ref}
              className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out ${
                partnersHeaderFade.visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600 mb-4">Our Network</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">Our Strategic Partners</h2>
              <div className="w-12 h-1 bg-green-600 rounded-full mx-auto mb-8" />
              <p className="text-lg text-zinc-600">
                We work with industry-leading manufacturers and suppliers to ensure the highest 
                quality standards for every project we undertake.
              </p>
            </div>
            
            {/* Row 1 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
              {row1.map((brand, idx) => (
                <PartnerLogo key={brand.name} brand={brand} index={idx} />
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
              {row2.map((brand, idx) => (
                <PartnerLogo key={brand.name} brand={brand} index={idx + row1.length} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

