import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-white">
        {/* Header - Centered */}
        <section className="bg-zinc-50 py-24 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter">
              Our Professional <span className="text-green-700">Services</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-medium">
              From high-end commercial construction to advanced renewable energy systems, 
              we provide comprehensive solutions tailored to your requirements.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-1.5 w-16 bg-green-600 rounded-full" />
            </div>
          </div>
        </section>

        {/* Services Grid - 2 per row */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {siteConfig.services.map((service, index) => (
                <div 
                  key={index} 
                  className="group relative p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
                >
                  {/* Hover Accent */}
                  <div className="absolute top-0 left-0 w-2 h-0 bg-green-600 group-hover:h-full transition-all duration-500" />
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-green-700 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-green-900/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      {/* Dynamic Icons based on index */}
                      {index === 0 && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                      {index === 1 && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
                      {index === 2 && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>}
                      {index === 3 && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                      {index >= 4 && <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    
                    <h3 className="text-2xl font-black text-zinc-900 mb-4 group-hover:text-green-700 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-zinc-600 leading-relaxed mb-8 font-medium">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <span className="inline-flex items-center text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-green-600 transition-colors">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                        Expert Delivery
                      </span>
                      <span className="inline-flex items-center text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-green-600 transition-colors">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                        Quality Assured
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/10 blur-[100px] rounded-full" />
          <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Need a Custom Solution?</h2>
            <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg font-medium">
              Our team of experts is ready to help you with your next project, whether it's a large-scale commercial retrofit or a domestic energy upgrade.
            </p>
            <div className="mt-12">
              <a href="/contact" className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-green-700 text-white font-black text-sm uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl shadow-green-900/20">
                Start My Project
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
