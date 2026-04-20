import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import CorePillars from "@/components/sections/CorePillars";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AccreditationsSection from "@/components/sections/AccreditationsSection";
import BrandsSection from "@/components/sections/BrandsSection";
import ProjectsGallerySection from "@/components/sections/ProjectsGallerySection";
import FAQSection from "@/components/sections/FAQSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1">
        <HeroSection />
        <AccreditationsSection />
        <AboutPreview />
        <CorePillars />
        <WhyChooseUs />
        <BrandsSection />
        <ProjectsGallerySection />
        <FAQSection />
        <ContactCTASection />
      </div>

      <Footer />
    </div>
  );
}