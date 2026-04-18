import { siteConfig } from "@/data/site";

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-green-600">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            What Sets Us Apart
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
            We distinguish ourselves through commitment to excellence and
            customer satisfaction on every project.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.whyChooseUs.map((point, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white p-8 shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                {idx + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
