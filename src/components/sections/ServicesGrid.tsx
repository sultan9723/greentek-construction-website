import { siteConfig } from "@/data/site";

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-green-600">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Comprehensive Construction Solutions
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
            From concept to completion, we provide end-to-end construction
            services tailored to your needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((service, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl border border-gray-200 bg-white p-8 transition hover:border-green-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition">
                <span className="text-xl font-bold">
                  {String.fromCharCode(65 + idx)}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold text-green-600 opacity-0 group-hover:opacity-100 transition">
                Learn more
                <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
