import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Professional Construction Solutions
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
                Building trusted spaces with quality, reliability, and modern standards.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                GreenTek Construction delivers professional building and construction
                services designed to present your business with credibility, trust,
                and a strong modern image.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/projects"
                  className="rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
                >
                  View Projects
                </a>
                <a
                  href="/contact"
                  className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-green-700 hover:text-green-700"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Homepage Structure
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                "About / Who We Are",
                "Services",
                "Accreditations",
                "Brands & Gallery",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    This section will be completed in the next iteration with real
                    client content and assets.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}