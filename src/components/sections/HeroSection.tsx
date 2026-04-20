export default function HeroSection() {
  return (
    <section className="relative bg-zinc-900 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
            Bridging <span className="text-green-500">Construction</span> <br />
            with Renewable Energy.
          </h1>

          <p className="mt-8 text-base md:text-lg lg:text-xl leading-relaxed text-zinc-400 max-w-2xl mx-auto">
            GreenTek is an agile, multi-disciplinary firm delivering high-performance 
            building upgrades and low-carbon energy solutions across the UK.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="/services"
              className="rounded-xl bg-green-700 px-10 py-5 text-xs font-bold text-white transition hover:bg-green-600 shadow-xl shadow-green-900/40"
            >
              Our Solutions
            </a>
            <a
              href="/contact"
              className="rounded-xl border border-white/10 bg-white/5 px-10 py-5 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Consult an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
