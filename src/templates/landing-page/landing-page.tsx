import AboutSection from "./sections/about-section/about-section";
import HeroSection from "./sections/hero-section/hero-section";

export default function LandingPage() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <AboutSection />
      <div>Hero</div>
      <div>Hero</div>
      <div>Hero</div>
    </article>
  );
}
