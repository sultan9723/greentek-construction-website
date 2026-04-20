"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{ label: string; href: string; type: string }[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Toggle handlers
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) setIsMenuOpen(false);
  };

  // Close everything on path change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Handle scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Auto-focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  // Search Logic (reuse existing logic)
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    if (!query) {
      setSearchResults([]);
      return;
    }
    const results: { label: string; href: string; type: string }[] = [];

    siteConfig.navLinks.forEach(n => {
      if (n.label.toLowerCase().includes(query)) results.push({ label: n.label, href: n.href, type: "Page" });
    });
    siteConfig.services.forEach(s => {
      if (s.title.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)) results.push({ label: s.title, href: "/services", type: "Service" });
    });
    siteConfig.projects.forEach(p => {
      if (p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)) results.push({ label: p.title, href: "/projects", type: "Project" });
    });
    siteConfig.whyChooseUs.forEach(v => {
      if (v.title.toLowerCase().includes(query) || v.description.toLowerCase().includes(query)) results.push({ label: v.title, href: "/about", type: "Value" });
    });
    siteConfig.brands.forEach(b => {
      if (b.name.toLowerCase().includes(query)) results.push({ label: b.name, href: "/about", type: "Partner" });
    });

    const uniqueResults = results.filter((v, i, a) => a.findIndex(t => (t.label === v.label)) === i);
    setSearchResults(uniqueResults.slice(0, 10));
  }, [searchQuery]);

  // Handle Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <style>{`
        .backdrop-blur-custom {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .mobile-menu-transition {
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <header className="sticky top-0 z-[60] bg-white lg:bg-white/90 lg:backdrop-blur-md border-b border-zinc-100 shadow-md lg:shadow-none">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6 lg:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group z-[70]">
            <Image 
              src="/images/greenteklogo.jpeg" 
              alt="GreenTek" 
              width={180} 
              height={48} 
              className="h-9 md:h-10 lg:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
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

          {/* Right Actions (Search + CTA/Hamburger) */}
          <div className="flex items-center gap-2 lg:gap-6 z-[70]">
            {/* Desktop Search (Hidden on Mobile) */}
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

            {/* Mobile Search Icon */}
            <button 
              onClick={toggleSearch}
              className="lg:hidden p-2 text-zinc-600 hover:text-green-600 transition-colors"
              aria-label="Toggle search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:flex rounded-xl bg-green-700 px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-green-600 shadow-xl shadow-green-900/20"
            >
              Start Project
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="lg:hidden p-2 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className={`w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Dropdown */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${isSearchOpen ? "max-h-20 opacity-100 border-b border-zinc-100" : "max-h-0 opacity-0"}`}>
          <div className="px-4 py-3">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-3 border-none focus:ring-0 text-gray-900 placeholder:text-gray-500 text-lg bg-transparent"
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] lg:hidden mobile-menu-transition bg-black/85 backdrop-blur-custom ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsMenuOpen(false);
        }}
      >
        <div className="flex flex-col h-full bg-transparent w-full">
          {/* Overlay Header */}
          <div className="flex justify-between items-center px-6 pt-8 pb-6">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <div className="relative w-40 h-10">
                <Image 
                  src="/images/greenteklogo.jpeg" 
                  alt="GreenTek" 
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Overlay Nav Links */}
          <nav className="flex flex-col px-6 mt-4" role="navigation">
            {siteConfig.navLinks.map((link) => {
              const hasDropdown = link.label === "Services" || link.label === "Projects";
              const isDropdownOpen = openDropdown === link.label;
              const isActive = pathname === link.href;

              return (
                <div key={link.label} className="border-b border-white/10 last:border-0">
                  <div className="flex items-center justify-between py-4">
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-lg font-medium transition-colors ${isActive ? "text-green-400" : "text-white"}`}
                    >
                      {link.label.toUpperCase()}
                    </Link>
                    
                    {hasDropdown && (
                      <button
                        onClick={() => setOpenDropdown(isDropdownOpen ? null : link.label)}
                        className="p-2"
                        aria-expanded={isDropdownOpen}
                      >
                        <svg 
                          className={`w-5 h-5 text-white transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Dropdown Content */}
                  {hasDropdown && (
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isDropdownOpen ? "max-h-96 pb-4" : "max-h-0"
                      }`}
                    >
                      <div className="pl-4 border-l-2 border-green-500 ml-2 flex flex-col gap-3">
                        {link.label === "Services" ? (
                          siteConfig.services.map((service) => (
                            <Link
                              key={service.title}
                              href="/services"
                              onClick={() => setIsMenuOpen(false)}
                              className="text-base text-white/70 hover:text-white transition-colors"
                            >
                              {service.title}
                            </Link>
                          ))
                        ) : (
                          siteConfig.projects.slice(0, 5).map((project) => (
                            <Link
                              key={project.id}
                              href="/projects"
                              onClick={() => setIsMenuOpen(false)}
                              className="text-base text-white/70 hover:text-white transition-colors"
                            >
                              {project.title}
                            </Link>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Overlay Bottom CTA */}
          <div className="mt-auto px-6 pb-10">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full py-4 bg-green-600 text-white font-bold rounded-xl text-center text-base active:scale-95 transition"
            >
              START PROJECT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


