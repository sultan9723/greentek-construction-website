export default function AccreditationsSection() {
  const accreditations = [
    { id: 1, name: "ISO 9001", icon: "🏆" },
    { id: 2, name: "LEED Certified", icon: "🌱" },
    { id: 3, name: "Safety Gold", icon: "⭐" },
    { id: 4, name: "Industry Leaders", icon: "👑" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white mb-3">
            Trusted by Industry
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our certifications and accreditations demonstrate our commitment to excellence and quality standards.
          </p>
        </div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accreditations.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h3 className="text-lg font-semibold text-center text-black dark:text-white">
                {cert.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
