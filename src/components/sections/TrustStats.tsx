import { siteConfig } from "@/data/site";

export default function TrustStats() {
  const stats = [
    { value: "2020", label: "Established" },
    { value: "500+", label: "Projects Delivered" },
    { value: "Expertise", label: "Domestic & Commercial" },
    { value: "Director", label: "Level Oversight" }
  ];

  return (
    <section className="bg-white py-12 md:py-16 border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 lg:gap-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left group">
              <div className="text-3xl sm:text-4xl font-black text-zinc-900 md:text-5xl lg:text-6xl tracking-tighter group-hover:text-green-700 transition-colors duration-500">
                {stat.value}
              </div>
              <p className="mt-4 text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-[0.2em] leading-tight group-hover:text-zinc-600 transition-colors duration-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
