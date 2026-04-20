import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl">
        
        {/* MOBILE FOOTER (md:hidden) */}
        <div className="md:hidden px-5 pt-12 pb-6 flex flex-col items-center text-center">
          {/* BLOCK 1 — Brand block */}
          <div className="flex flex-col items-center">
            <h2 className="text-white font-bold text-xl tracking-tight uppercase">GREENTEK ENERGY LTD</h2>
            <p className="text-gray-400 text-sm mt-1">High-performance building & renewable energy solutions.</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href={siteConfig.social.linkedin} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href={siteConfig.social.facebook} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href={siteConfig.social.instagram} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.15.26-2.914.557-.79.307-1.459.717-2.126 1.384-.667.667-1.077 1.335-1.384 2.126-.297.764-.5 1.637-.557 2.914-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.15.557 2.914.307.79.717 1.459 1.384 2.126.667.667 1.335 1.077 2.126 1.384.764.297 1.637.5 2.914.557 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.15-.26 2.914-.557.79-.307 1.459-.717 2.126-1.384.667-.667 1.077-1.335 1.384-2.126.297-.764.5-1.637.557-2.914.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.26-2.15-.557-2.914-.307-.79-.717-1.459-1.384-2.126-.667-.667-1.335-1.077-2.126-1.384-.764-.297-1.637-.5-2.914-.557-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c0 .796-.646 1.442-1.442 1.442-.797 0-1.442-.646-1.442-1.442 0-.797.645-1.442 1.442-1.442.796 0 1.442.645 1.442 1.442z"/></svg>
              </a>
              <a href={siteConfig.social.linkedin} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors duration-200" aria-label="LinkedIn">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* BLOCK 2 — Nav columns (condensed grid) */}
          <div className="mt-10 w-full">
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 max-w-sm mx-auto text-left">
              {siteConfig.navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-gray-400 text-sm py-1 hover:text-green-400 transition-colors">
                  {link.label}
                </Link>
              ))}
              <Link href="/services" className="text-gray-400 text-sm py-1 hover:text-green-400 transition-colors">Construction</Link>
              <Link href="/services" className="text-gray-400 text-sm py-1 hover:text-green-400 transition-colors">Renewables</Link>
              <Link href="/about" className="text-gray-400 text-sm py-1 hover:text-green-400 transition-colors">Our Team</Link>
              <Link href="/contact" className="text-gray-400 text-sm py-1 hover:text-green-400 transition-colors">Enquiries</Link>
            </div>
          </div>

          {/* BLOCK 3 — Contact strip */}
          <div className="mt-10 flex flex-col gap-4">
            <div className="flex items-center justify-center text-gray-400 text-sm">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              {siteConfig.phone}
            </div>
            <div className="flex items-center justify-center text-gray-400 text-sm">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              {siteConfig.email}
            </div>
            <div className="flex items-center justify-center text-gray-400 text-sm px-4">
              <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              {siteConfig.address.city}, {siteConfig.address.postcode}
            </div>
          </div>

          {/* BLOCK 5 — Bottom bar */}
          <div className="mt-12 flex flex-col items-center">
            <p className="text-gray-500 text-xs">© {currentYear} GreenTek Energy Ltd. All rights reserved.</p>
            <div className="flex gap-2 mt-2">
              <Link href="/privacy" className="text-green-500 text-xs">Privacy Policy</Link>
              <span className="text-gray-600 text-xs">·</span>
              <Link href="/terms" className="text-green-500 text-xs">Terms of Service</Link>
            </div>
          </div>
        </div>

        {/* DESKTOP FOOTER (md:block) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-6 py-10 md:py-12">
          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-40">
                <Image src="/images/greenteklogo.jpeg" alt={siteConfig.name} fill className="object-contain object-left" priority />
              </div>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              Agile multi-disciplinary construction and energy firm specializing in sustainable building solutions.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-zinc-400 hover:text-green-500 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <span className="block text-zinc-500 text-xs mb-0.5">Phone</span>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-green-500 transition-colors">{siteConfig.phone}</a>
              </li>
              <li>
                <span className="block text-zinc-500 text-xs mb-0.5">Email</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-green-500 transition-colors">{siteConfig.email}</a>
              </li>
              <li>
                <span className="block text-zinc-500 text-xs mb-0.5">Address</span>
                <address className="not-italic leading-relaxed">
                  {siteConfig.address.line1}<br />
                  {siteConfig.address.city}, {siteConfig.address.postcode}
                </address>
              </li>
            </ul>
          </div>

          {/* Column 4 — Legal / Company */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Company No: {siteConfig.companyNo}<br />
                Registered in England
              </p>
            </div>
            <div className="flex gap-5">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16.4a4.4 4.4 0 110-8.8 4.4 4.4 0 010 8.8zm6.487-11.59a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" clipRule="evenodd" /></svg>
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop-only Bottom border extension if needed or other elements */}
        <div className="hidden md:block mx-6 border-t border-zinc-900 pt-8 pb-12 text-center">
          <p className="text-xs text-zinc-500">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
