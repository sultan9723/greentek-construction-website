import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import FloatingActions from "@/components/ui/FloatingActions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "construction",
    "renewable energy",
    "solar PV installation",
    "air source heat pump",
    "ASHP",
    "boiler upgrade",
    "central heating",
    "loft insulation",
    "external wall insulation",
    "property refurbishment",
    "house refurbishment",
    "kitchen refurbishment",
    "bathroom refurbishment",
    "building extension",
    "home renovation",
    "West Midlands",
    "Wolverhampton",
    "Wales",
    "construction contractor",
    "energy solutions",
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#15803d", // green-700
  icons: {
    icon: "/images/magnific_3003063144.png",
    apple: "/images/magnific_3003063144.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased selection:bg-green-100 selection:text-green-900`}>
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          {children}
          <FloatingActions />
        </div>
      </body>
    </html>
  );
}