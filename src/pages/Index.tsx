
import { useEffect, useState } from "react";
import AboutSection from "@/components/AboutSection";
import AppointmentButton from "@/components/AppointmentButton";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScrollToTop from "@/components/ScrollToTop";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Loader from "@/components/Loader";

const Index = () => {
  // Loading animation state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate load time or wait for images/scripts
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {isLoading && <Loader />}
      <Header />
      <main style={isLoading ? { filter: "blur(2px)", pointerEvents: "none" } : undefined}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <AppointmentButton />
    </div>
  );
};

export default Index;
