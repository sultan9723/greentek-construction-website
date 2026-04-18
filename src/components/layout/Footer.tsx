import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{siteConfig.name}</h3>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2">
            {siteConfig.navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-600 transition hover:text-green-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Contact
          </h4>
          <div className="mt-3 space-y-2 text-sm text-gray-600">
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.location}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-6 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
