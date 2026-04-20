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
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#15803d", // green-700
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased selection:bg-green-100 selection:text-green-900`}>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}