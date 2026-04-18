export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-white">
      <div className="mx-auto max-w-7xl px-6 py-32 md:py-40 lg:py-48">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            Professional Construction Solutions
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
            Building trusted spaces with quality and precision.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            GreenTek Construction delivers professional building and construction
            services designed to present your business with credibility, trust,
            and a strong modern image.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              View Our Projects
            </a>
            <a
              href="/contact"
              className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    </section>
  );
}
