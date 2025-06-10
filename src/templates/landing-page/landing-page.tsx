import AboutSection from "./sections/about-section/about-section";
import ContactSection from "./sections/contacts-section/contacts-section";
import HeroSection from "./sections/hero-section/hero-section";
import ServiceSection from "./sections/service-section/service-section";
import StatsSection from "./sections/stats-section/stats-section";

export default function LandingPage() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <StatsSection />
      <ContactSection />
    </article>
  );
}
