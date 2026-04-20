import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-white">
        {/* Projects Header - Centered */}
        <section className="py-24 border-b border-zinc-100 bg-zinc-50/30">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter">
              Our <span className="text-green-700">Project Gallery</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Explore our track record of excellence across the UK, featuring high-impact renewable energy installations 
              and premium construction projects.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-1.5 w-16 bg-green-600 rounded-full" />
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {siteConfig.projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-100 aspect-[4/5] hover:cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700"
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Subtle Category Label - Always Visible */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-zinc-900 text-[9px] font-black uppercase tracking-widest border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Overlay - Visible on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white text-2xl font-black leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-zinc-50 border-t border-zinc-100">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-zinc-900">Have a Project in Mind?</h2>
            <p className="mt-6 text-lg text-zinc-600">
              Join our list of satisfied clients. Let's discuss how GreenTek can bring your vision to life with quality and efficiency.
            </p>
            <div className="mt-10">
              <a href="/contact" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-zinc-900 text-white font-bold hover:bg-green-700 transition-all">
                Start a Conversation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
