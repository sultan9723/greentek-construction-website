"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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

function ContactMethod({ icon, title, value, index }: { icon: React.ReactNode; title: string; value: React.ReactNode; index: number }) {
  const { ref, visible } = useFadeIn(index * 100);
  
  return (
    <div 
      ref={ref}
      className={`flex gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 transition-all duration-700 hover:bg-white hover:shadow-lg hover:shadow-green-900/5 hover:-translate-y-1 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-green-700 shadow-sm border border-zinc-100">
        {icon}
      </div>
      <div>
        <h3 className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-0.5">{title}</h3>
        <div className="text-sm font-bold text-zinc-900 leading-tight">{value}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const headerFade = useFadeIn(0);
  const formFade = useFadeIn(200);
  const mapHeaderFade = useFadeIn(0);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Centered Hero Section */}
        <section className="relative pt-20 md:pt-24 pb-8 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
          <div 
            ref={headerFade.ref}
            className={`relative mx-auto max-w-7xl px-6 text-center transition-all duration-1000 ease-out ${
              headerFade.visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-green-600 mb-6">Let's Connect</p>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-950 tracking-tighter leading-none mb-8">
              Get in <span className="text-green-600">Touch.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Whether you have a question about our services or need a quote for a new project, 
              our team is ready to assist you.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-16 bg-green-600 rounded-full" />
            </div>
          </div>
        </section>

        {/* Contact Content Grid */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
              
              {/* Left Side: Contact Methods & Social */}
              <div className="lg:col-span-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  <ContactMethod 
                    index={0}
                    title="Phone"
                    value={<a href={`tel:${siteConfig.phone}`} className="hover:text-green-600 transition-colors">{siteConfig.phone}</a>}
                    icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                  />
                  <ContactMethod 
                    index={1}
                    title="Email"
                    value={<a href={`mailto:${siteConfig.email}`} className="hover:text-green-600 transition-colors">{siteConfig.email}</a>}
                    icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                  />
                  <ContactMethod 
                    index={2}
                    title="Registered Office"
                    value={
                      <div className="font-bold">
                        {siteConfig.address.line1}<br />
                        {siteConfig.address.city}, {siteConfig.address.postcode}
                      </div>
                    }
                    icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                  />
                </div>

                <div className="p-5 rounded-2xl border border-zinc-100 bg-zinc-50/30">
                  <h4 className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-3">Follow our progress</h4>
                  <div className="flex gap-2">
                    {[
                      { name: "Facebook", href: siteConfig.social.facebook, color: "hover:bg-[#1877F2]", icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
                      { name: "Instagram", href: siteConfig.social.instagram, color: "hover:bg-[#E4405F]", icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16.4a4.4 4.4 0 110-8.8 4.4 4.4 0 010 8.8zm6.487-11.59a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" },
                    ].map((social, i) => (
                      <a 
                        key={i} 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-9 h-9 rounded-xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 ${social.color} hover:text-white transition-all duration-300 hover:-translate-y-1`}
                      >
                        <span className="sr-only">{social.name}</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon} /></svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Redesigned Form */}
              <div 
                ref={formFade.ref}
                className={`lg:col-span-7 bg-white p-6 md:p-10 rounded-3xl border border-zinc-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] transition-all duration-1000 ease-out ${
                  formFade.visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
              >
                <div className="mb-6">
                  <h2 className="text-xl font-black text-zinc-950 tracking-tight mb-1">Send an Enquiry</h2>
                  <p className="text-zinc-500 text-[11px] font-medium">Expected response time: Within 24 hours</p>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="first_name" className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-2">First Name</label>
                      <input type="text" id="first_name" className="w-full px-5 py-3 rounded-xl bg-zinc-50 border border-transparent focus:bg-white focus:border-green-600 focus:ring-4 focus:ring-green-600/5 transition-all outline-none font-bold text-zinc-900 placeholder:text-zinc-300 text-xs" placeholder="John" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="last_name" className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-2">Last Name</label>
                      <input type="text" id="last_name" className="w-full px-5 py-3 rounded-xl bg-zinc-50 border border-transparent focus:bg-white focus:border-green-600 focus:ring-4 focus:ring-green-600/5 transition-all outline-none font-bold text-zinc-900 placeholder:text-zinc-300 text-xs" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-5 py-3 rounded-xl bg-zinc-50 border border-transparent focus:bg-white focus:border-green-600 focus:ring-4 focus:ring-green-600/5 transition-all outline-none font-bold text-zinc-900 placeholder:text-zinc-300 text-xs" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="service" className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-2">Service Required</label>
                    <div className="relative">
                      <select id="service" className="w-full px-5 py-3 rounded-xl bg-zinc-50 border border-transparent focus:bg-white focus:border-green-600 focus:ring-4 focus:ring-green-600/5 transition-all outline-none font-bold text-zinc-900 appearance-none cursor-pointer text-xs">
                        <option>Solar PV & Battery Storage</option>
                        <option>Air Source Heat Pumps</option>
                        <option>Insulation Solutions</option>
                        <option>Commercial Renovations</option>
                        <option>Domestic Extensions</option>
                        <option>Other Enquiry</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-400 ml-2">Project Brief</label>
                    <textarea id="message" rows={3} className="w-full px-5 py-3 rounded-xl bg-zinc-50 border border-transparent focus:bg-white focus:border-green-600 focus:ring-4 focus:ring-green-600/5 transition-all outline-none font-bold text-zinc-900 placeholder:text-zinc-300 resize-none text-xs" placeholder="Tell us about your requirements..."></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 rounded-xl bg-zinc-900 text-white font-black text-[9px] uppercase tracking-[0.3em] hover:bg-green-600 transition-all duration-500 shadow-xl shadow-zinc-900/10 hover:shadow-green-900/20 hover:-translate-y-1">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-20 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-6">
            <div 
              ref={mapHeaderFade.ref}
              className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 ease-out ${
                mapHeaderFade.visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600 mb-4">Our Location</p>
              <h2 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight">Visit Our Office</h2>
              <div className="w-12 h-1 bg-green-600 rounded-full mx-auto mt-5 mb-6" />
              <p className="text-base text-zinc-600 font-medium">
                Our central office is located in Coventry, allowing us to efficiently serve 
                clients across the Midlands and the rest of the UK.
              </p>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200/50 h-[450px] relative bg-white p-3">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.921387679808!2d-1.503799623326177!3d52.40810487203112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774b72459b6347%3A0x673418519e7a8df!2s2+Bewick+Croft%2C+Coventry+CV2+2PX%2C+UK!5e0!3m2!1sen!2sus!4v1713550000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-[1.5rem]"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
