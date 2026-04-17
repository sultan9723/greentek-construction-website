import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustStats from "@/components/sections/TrustStats";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <TrustStats />
        <AboutPreview />
        <ServicesGrid />
        <WhyChooseUs />
      </main>

      <Footer />
    </>
  );
}