import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          {siteConfig.name}
        </Link>

        <nav className="hidden gap-6 md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-green-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
