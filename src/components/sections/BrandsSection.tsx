export default function BrandsSection() {
  const brands = [
    { id: 1, name: "Brand A" },
    { id: 2, name: "Brand B" },
    { id: 3, name: "Brand C" },
    { id: 4, name: "Brand D" },
    { id: 5, name: "Brand E" },
    { id: 6, name: "Brand F" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white mb-3">
            Brands We Work With
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We partner with leading brands to deliver exceptional construction solutions.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-6 sm:p-8 bg-gray-50 dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <div className="flex items-center justify-center w-full h-16 text-center">
                <p className="text-sm font-medium text-gray-400 dark:text-gray-600">
                  {brand.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
