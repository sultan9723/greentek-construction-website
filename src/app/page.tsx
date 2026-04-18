import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustStats from "@/components/sections/TrustStats";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AccreditationsSection from "@/components/sections/AccreditationsSection";
import BrandsSection from "@/components/sections/BrandsSection";
import ProjectsGallerySection from "@/components/sections/ProjectsGallerySection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1">
        <HeroSection />
        <TrustStats />
        <AboutPreview />
        <ServicesGrid />
        <WhyChooseUs />
        <AccreditationsSection />
        <BrandsSection />
        <ProjectsGallerySection />
        <ContactCTASection />
      </div>

      <Footer />
    </div>
  );
}