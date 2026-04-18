import { siteConfig } from "@/data/site";

export default function TrustStats() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-green-600 md:text-5xl">
                {stat.value}
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
