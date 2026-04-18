export default function ProjectsGallerySection() {
  const projects = [
    { id: 1, title: "Modern Office Complex", category: "Commercial" },
    { id: 2, title: "Residential Community", category: "Residential" },
    { id: 3, title: "Industrial Facility", category: "Industrial" },
    { id: 4, title: "Retail Development", category: "Retail" },
    { id: 5, title: "Tech Campus", category: "Corporate" },
    { id: 6, title: "Mixed-Use Project", category: "Development" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of completed projects that showcase our expertise and craftsmanship.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-gray-200 dark:bg-zinc-800 aspect-square hover:cursor-pointer"
            >
              {/* Placeholder Image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-zinc-700 dark:to-zinc-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🏗️</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Project Image</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
            View All Projects
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
