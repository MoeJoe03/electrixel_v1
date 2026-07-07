import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import ScrollingText from "@/components/ScrollingText";
import Services from "@/components/Services";
import OurProcessSection from "@/components/OurProcessSection";
import FAQ from "@/components/FAQ";
import CalendlySection from "@/components/CalendlySection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <ParallaxSection offset={-20}>
        <ScrollingText />
      </ParallaxSection>
      <ParallaxSection offset={30}>
        <ValueProps />
      </ParallaxSection>
      <ParallaxSection offset={40}>
        <Services />
      </ParallaxSection>
      <FeaturedProjects />
      <OurProcessSection />
      <FAQ />
      <CalendlySection />
    </div>
  );
}
