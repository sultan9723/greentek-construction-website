import { siteConfig } from "@/data/site";

export default function ServicesGrid() {
  return (
    <section className="bg-zinc-50 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-700 mb-6">
              Our Expertise
            </p>
            <h2 className="text-4xl font-black tracking-tight text-zinc-900 md:text-5xl lg:text-6xl leading-[1.1]">
              High-Performance <br />
              <span className="text-green-700">Building Solutions.</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-lg md:text-xl max-w-sm leading-relaxed font-medium">
            Specialized services designed for durability, efficiency, and long-term value creation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.slice(0, 6).map((service, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-[2.5rem] border border-zinc-200 bg-white p-8 md:p-10 lg:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-green-900/5 hover:-translate-y-2"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all duration-500">
                  {idx === 0 && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>}
                  {idx === 1 && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                  {idx === 2 && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                  {idx === 3 && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                  {idx === 4 && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
                  {idx === 5 && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                </div>
                <h3 className="mt-8 text-2xl font-black text-zinc-900 tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-4 text-zinc-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Services Details</span>
                <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
