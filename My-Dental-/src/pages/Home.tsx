import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PracticeIntro from "@/components/PracticeIntro";
import ClinicHighlights from "@/components/ClinicHighlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import SmileTransformation from "@/components/SmileTransformation";
import PatientStories from "@/components/PatientStories";
import Specialists from "@/components/Specialists";
import ClinicPromises from "@/components/ClinicPromises";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Simple reveal animation for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PracticeIntro />
      <ClinicHighlights />
      <WhyChooseUs />
      <SmileTransformation />
      <PatientStories />
      <Specialists />
      <ClinicPromises />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}