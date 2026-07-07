import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkGrid from "@/components/WorkGrid";
import CalendlySection from "@/components/CalendlySection";

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-24 lg:pt-32 flex-grow">
        <WorkGrid />
      </div>
      <CalendlySection />
      <Footer />
    </div>
  );
}
