export default function AboutPreview() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-green-600">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Decades of Excellence in Construction
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With over 25 years of proven expertise, GreenTek Construction has
              established itself as a trusted partner for commercial and
              residential projects across the region.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our commitment to quality, innovation, and customer satisfaction
              drives every project we undertake. We combine traditional
              craftsmanship with modern construction practices to deliver
              exceptional results.
            </p>
            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center text-sm font-semibold text-green-600 transition hover:text-green-700"
              >
                Learn more about our story
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-green-600 to-green-700 rounded-2xl h-80 md:h-96 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl font-bold opacity-20">25+</div>
              <p className="mt-4 text-lg font-semibold">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
