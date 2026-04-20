"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{ label: string; href: string; type: string }[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search Logic
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    if (!query) {
      setSearchResults([]);
      return;
    }
    const results: { label: string; href: string; type: string }[] = [];

    // 1. Search Pages (Nav Links)
    siteConfig.navLinks.forEach(n => {
      if (n.label.toLowerCase().includes(query)) {
        results.push({ label: n.label, href: n.href, type: "Page" });
      }
    });

    // 2. Search Services (Title + Description)
    siteConfig.services.forEach(s => {
      if (s.title.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)) {
        results.push({ label: s.title, href: "/services", type: "Service" });
      }
    });

    // 3. Search Projects (Title + Category)
    siteConfig.projects.forEach(p => {
      if (p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)) {
        results.push({ label: p.title, href: "/projects", type: "Project" });
      }
    });

    // 4. Search Company Values / Why Choose Us
    siteConfig.whyChooseUs.forEach(v => {
      if (v.title.toLowerCase().includes(query) || v.description.toLowerCase().includes(query)) {
        results.push({ label: v.title, href: "/about", type: "Value" });
      }
    });

    // 5. Search Brands
    siteConfig.brands.forEach(b => {
      if (b.name.toLowerCase().includes(query)) {
        results.push({ label: b.name, href: "/about", type: "Partner" });
      }
    });

    // Remove duplicates based on label
    const uniqueResults = results.filter((v, i, a) => a.findIndex(t => (t.label === v.label)) === i);
    setSearchResults(uniqueResults.slice(0, 10));
  }, [searchQuery]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group z-50">
          <Image 
            src="/images/greenteklogo.jpeg" 
            alt="GreenTek" 
            width={180} 
            height={48} 
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 lg:flex items-center">
          {siteConfig.navLinks.map((link) => {
            const hasDropdown = link.label === "Services" || link.label === "Projects";
            
            return (
              <div 
                key={link.label}
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.2em] transition hover:text-green-700 ${
                    activeDropdown === link.label ? "text-green-700" : "text-zinc-500"
                  }`}
                >
                  {link.label}
                  {hasDropdown && (
                    <svg 
                      className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {hasDropdown && (
                  <div className={`absolute top-full left-0 w-64 pt-4 transition-all duration-300 transform ${
                    activeDropdown === link.label 
                      ? "opacity-100 translate-y-0 pointer-events-auto" 
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}>
                    <div className="bg-white rounded-2xl shadow-2xl shadow-zinc-900/10 border border-zinc-100 p-3 overflow-hidden">
                      {link.label === "Services" ? (
                        <div className="flex flex-col gap-1">
                          {siteConfig.services.map((service) => (
                            <Link
                              key={service.title}
                              href="/services"
                              className="px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group/item"
                            >
                              <span className="block text-xs font-bold text-zinc-900 group-hover/item:text-green-700 transition-colors">
                                {service.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col gap-1">
                          {siteConfig.projects.slice(0, 5).map((project) => (
                            <Link
                              key={project.id}
                              href="/projects"
                              className="px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group/item"
                            >
                              <span className="block text-xs font-bold text-zinc-900 group-hover/item:text-green-700 transition-colors">
                                {project.title}
                              </span>
                              <span className="block text-[9px] font-black uppercase tracking-widest text-zinc-400 mt-0.5">
                                {project.category}
                              </span>
                            </Link>
                          ))}
                          <div className="h-px bg-zinc-100 my-1 mx-2" />
                          <Link
                            href="/projects"
                            className="px-4 py-2 text-center text-[10px] font-black uppercase tracking-widest text-green-600 hover:text-green-700"
                          >
                            View All Projects
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Actions & Mobile Toggle */}
        <div className="flex items-center gap-4 md:gap-6 z-50">
          {/* Desktop Search Bar */}
          <div ref={searchRef} className="relative hidden lg:block">
            <div className={`flex items-center bg-zinc-50 border border-zinc-100 rounded-xl transition-all duration-500 ${isSearchOpen ? "w-64 px-4" : "w-11 justify-center"} h-11`}>
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-zinc-400 hover:text-green-600 transition-colors"
                aria-label="Toggle search"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, projects..."
                className={`bg-transparent border-none focus:ring-0 text-xs font-bold text-zinc-900 placeholder:text-zinc-300 w-full transition-opacity duration-300 ${isSearchOpen ? "opacity-100 ml-3" : "opacity-0 w-0 h-0"} outline-none`}
              />
            </div>

            {/* Desktop Search Results Dropdown */}
            {isSearchOpen && searchQuery.length >= 2 && (
              <div className="absolute top-full right-0 w-80 mt-4 bg-white rounded-2xl shadow-2xl shadow-zinc-900/10 border border-zinc-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="p-2">
                  {searchResults.length > 0 ? (
                    <div className="flex flex-col">
                      {searchResults.map((result, idx) => (
                        <Link
                          key={`${result.label}-${idx}`}
                          href={result.href}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group/result"
                        >
                          <div>
                            <span className="block text-xs font-bold text-zinc-900 group-hover/result:text-green-700 transition-colors">{result.label}</span>
                            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">{result.type}</span>
                          </div>
                          <svg className="w-3 h-3 text-zinc-300 group-hover/result:text-green-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-8 text-center">
                      <p className="text-xs font-bold text-zinc-400">No results found for "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Desktop CTA (Hidden on tiny screens to save space) */}
          <Link
            href="/contact"
            className="hidden sm:flex rounded-xl bg-green-700 px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-green-600 shadow-xl shadow-green-900/20"
          >
            Start Project
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 -mr-2 text-zinc-900 hover:text-green-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-6 overflow-y-auto">
          
          {/* Mobile Search */}
          <div className="mb-8">
            <div className="flex items-center bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3">
              <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-transparent border-none focus:ring-0 text-sm font-bold text-zinc-900 placeholder:text-zinc-400 w-full ml-3 outline-none"
              />
            </div>
            
            {/* Mobile Search Results */}
            {searchQuery.length >= 2 && searchResults.length > 0 && (
              <div className="mt-2 bg-zinc-50 rounded-xl border border-zinc-100 overflow-hidden">
                <div className="flex flex-col p-2">
                  {searchResults.map((result, idx) => (
                    <Link
                      key={`mob-${result.label}-${idx}`}
                      href={result.href}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setSearchQuery("");
                      }}
                      className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-zinc-100"
                    >
                      <div>
                        <span className="block text-sm font-bold text-zinc-900">{result.label}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{result.type}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-2 mb-10">
            {siteConfig.navLinks.map((link) => {
              const hasDropdown = link.label === "Services" || link.label === "Projects";
              const isDropdownOpen = activeMobileDropdown === link.label;

              return (
                <div key={link.label} className="border-b border-zinc-100 last:border-0 pb-2">
                  {hasDropdown ? (
                    <button
                      onClick={() => setActiveMobileDropdown(isDropdownOpen ? null : link.label)}
                      className="flex items-center justify-between w-full py-4 text-left"
                    >
                      <span className="text-xl font-black text-zinc-900">{link.label}</span>
                      <svg 
                        className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center w-full py-4 text-xl font-black text-zinc-900"
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Mobile Dropdown Content */}
                  {hasDropdown && isDropdownOpen && (
                    <div className="pl-4 pb-4 flex flex-col gap-4 border-l-2 border-green-100 ml-2 mt-2">
                      {link.label === "Services" ? (
                        siteConfig.services.map((service) => (
                          <Link
                            key={service.title}
                            href="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base font-bold text-zinc-600 hover:text-green-700"
                          >
                            {service.title}
                          </Link>
                        ))
                      ) : (
                        <>
                          {siteConfig.projects.slice(0, 5).map((project) => (
                            <Link
                              key={project.id}
                              href="/projects"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex flex-col gap-0.5"
                            >
                              <span className="text-base font-bold text-zinc-600 hover:text-green-700">
                                {project.title}
                              </span>
                              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                                {project.category}
                              </span>
                            </Link>
                          ))}
                          <Link
                            href="/projects"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-2 text-[11px] font-black uppercase tracking-widest text-green-600"
                          >
                            View All Projects →
                          </Link>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Bottom Actions */}
          <div className="mt-auto pt-6 border-t border-zinc-100 flex flex-col gap-4">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center rounded-xl bg-green-700 px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-green-600 shadow-xl shadow-green-900/20"
            >
              Start Project
            </Link>
            <a 
              href={`tel:${siteConfig.phone}`} 
              className="w-full text-center rounded-xl bg-zinc-50 border border-zinc-200 px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-zinc-900"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


