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

const faqItems = [
  {
    question: "What services does Greentek provide?",
    answer: "We provide comprehensive services including solar PV installation, air source heat pumps, boiler upgrades, new central heating systems, loft insulation, external wall insulation, property refurbishment, kitchen refurbishment, bathroom refurbishment, and building extensions."
  },
  {
    question: "Do you offer air source heat pump conversions and ASHP installation?",
    answer: "Yes. Greentek specializes in air source heat pump installation and conversions, helping homeowners transition to efficient, low-carbon heating solutions across West Midlands, Wolverhampton, and Wales."
  },
  {
    question: "What insulation solutions do you offer?",
    answer: "We provide loft insulation and external wall insulation services to improve energy efficiency, reduce utility costs, and meet building regulations for property refurbishment projects."
  },
  {
    question: "Are you accredited and compliant?",
    answer: "Yes, we maintain full compliance with industry standards. We are accredited by leading bodies such as TrustMark, HIES, and Gas Safe, ensuring quality and peace of mind for every solar installation, heat pump setup, and construction project."
  },
  {
    question: "How can I contact Greentek for solar, heat pump, or refurbishment projects?",
    answer: "You can reach us directly via phone at 0333 533 4567 or email info@greentekenergy.co.uk. Our team is ready to discuss your solar PV installation, boiler upgrade, property refurbishment, or building extension project and provide a formal quote."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionFade = useFadeIn(0);

  return (
    <section className="bg-white py-20 md:py-28 lg:py-36 overflow-hidden" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-6">
        <div 
          ref={sectionFade.ref}
          className={`transition-all duration-1000 ease-out ${
            sectionFade.visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Heading Block */}
          <div className="text-center mb-20 md:mb-28">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600 mb-6">
              Common Inquiries
            </p>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.05]">
              Frequently Asked <br /><span className="text-green-600">Questions.</span>
            </h2>
            <div className="w-16 h-1.5 bg-green-600 rounded-full mt-10 mx-auto" />
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="group border border-zinc-100 rounded-3xl overflow-hidden transition-all duration-300 hover:border-green-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-8 text-left transition-colors bg-zinc-50/50 hover:bg-white"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-black text-slate-950 pr-8 leading-tight">
                    {item.question}
                  </span>
                  <span className={`flex-shrink-0 w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center transition-all duration-500 shadow-sm ${openIndex === index ? 'bg-green-600 border-green-600 text-white rotate-180 shadow-green-500/20' : 'bg-white text-zinc-400'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 md:p-8 pt-0 text-gray-500 leading-relaxed text-base sm:text-lg border-t border-zinc-50 bg-white">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
