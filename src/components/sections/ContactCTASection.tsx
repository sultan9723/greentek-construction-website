import Link from "next/link";

export default function ContactCTASection() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-36 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content & Actions */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tight leading-[1.05] text-center lg:text-left">
              Ready to Discuss <br />
              <span className="text-green-600">Your Project?</span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-zinc-600 leading-relaxed max-w-xl text-center lg:text-left font-medium">
              GreenTek provides professional support for large-scale construction, retrofit, and renewable energy projects. 
              Our director-led approach ensures precision engineering and agile delivery for high-performance assets.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-5 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-green-600 text-white text-xs font-bold hover:bg-green-700 transition-all shadow-xl shadow-green-900/20"
              >
                Request a Consultation
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs font-bold hover:bg-zinc-100 transition-all"
              >
                View Our Services
              </Link>
            </div>
          </div>

          {/* Right: Compact Contact Card */}
          <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-zinc-50 py-12 px-8 md:py-16 md:px-12 rounded-[3rem] border border-zinc-100 shadow-2xl shadow-zinc-200/50">
              <h3 className="text-xl font-black text-zinc-900 mb-10 tracking-tight">Direct Contact</h3>
              
              <div className="space-y-8">
                <a href="mailto:info@greentekenergy.co.uk" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Email Address</p>
                    <p className="text-zinc-900 font-bold text-lg group-hover:text-green-600 transition-colors">info@greentekenergy.co.uk</p>
                  </div>
                </a>

                <a href="tel:03335334567" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Phone Number</p>
                    <p className="text-zinc-900 font-bold text-lg group-hover:text-green-600 transition-colors">0333 533 4567</p>
                  </div>
                </a>
              </div>

              <div className="mt-12 pt-10 border-t border-zinc-200">
                <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em] leading-relaxed">
                  Company No: 13013349 <br />
                  Registered in England & Wales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
