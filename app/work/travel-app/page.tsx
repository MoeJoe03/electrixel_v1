import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import CalendlySection from "@/components/CalendlySection";

export default function TravelAppPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 lg:pt-40">
        <div className="w-full px-4 md:px-12 lg:px-16 mx-auto">
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="text-left">
              <h1 className="text-[44px] font-bold text-white mb-6 tracking-tight">Travel App</h1>
              <p className="text-[#f1f1f1] text-[18px] sm:text-[24px] md:text-[40px] lg:text-[64px] leading-[1.3] lg:leading-[1.1]">
                Curating wonder, <br /> a seamless journey for modern explorers.
              </p>
            </div>
            <div className="md:mt-6 flex justify-end w-full md:w-auto">
              <span className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white font-medium text-sm sm:text-base whitespace-nowrap">
                App Development
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-[95%] mx-auto h-[55vh] md:h-[80vh] lg:h-[95vh] rounded-[27px] overflow-hidden mb-16 md:mb-24 bg-white/5">
          <Image
            src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/saiiiw/image_!.jpeg"
            alt="Travel App Hero"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="px-4 sm:px-6 md:px-12 lg:px-24 max-w-[100rem] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16 md:mb-24">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">About the Project</h2>
              <div className="space-y-6 text-[#f1f1f1] text-lg leading-relaxed">
                <p>
                  The Travel App was conceived to address the common pain points travelers face when organizing multi-destination trips. The goal was to consolidate flights, accommodations, and itinerary planning into a single, intuitive interface.
                </p>
                <p>
                  Our team focused heavily on user research to identify the most critical features for frequent travelers. This led to a design that prioritizes fast access to booking details, offline maps, and real-time flight updates.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-slate-400 text-sm font-medium mb-1">Client</dt>
                    <dd className="text-white text-lg">Wanderlust Inc.</dd>
                  </div>
                  <div>
                    <dt className="text-slate-400 text-sm font-medium mb-1">Services</dt>
                    <dd className="text-white text-lg">UX/UI Design, Mobile App Development</dd>
                  </div>
                  <div>
                    <dt className="text-slate-400 text-sm font-medium mb-1">Year</dt>
                    <dd className="text-white text-lg">2023</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:gap-y-8">
          <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-[2rem] md:rounded-[27px] overflow-hidden bg-white/5">
            <Image
              src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/saiiiw/image_2.jpeg"
              alt="Travel App Showcase 1"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-[2rem] md:rounded-[27px] overflow-hidden bg-white/5">
            <Image
              src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/saiiiw/image_3.jpeg"
              alt="Travel App Showcase 2"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        <div className="w-[95%] mx-auto relative h-[55vh] md:h-[80vh] lg:h-[95vh] rounded-[2rem] md:rounded-[27px] overflow-hidden mb-24 bg-white/5">
          <Image
            src="https://qnelsjzfuynqotkwojxv.supabase.co/storage/v1/object/public/Electrixel/our%20work/saiiiw/image_4.jpeg"
            alt="Travel App Showcase 3"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </main>

      <CalendlySection />
      <Footer />
    </div>
  );
}
