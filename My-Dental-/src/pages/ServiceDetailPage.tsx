import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, IndianRupee, Heart, CheckCircle, ArrowLeft, Calendar } from "lucide-react";

export default function ServiceDetailPage() {
  const { slug } = useParams();

  const servicesData: Record<string, any> = {
    "dental-implants": {
      title: "Dental implants",
      description: "Single tooth implants, full-arch restoration, All-on-4, immediate-load implants, and implant-supported bridges.",
      time: "2–3 visits",
      price: "₹20,000 – ₹45,000",
      recovery: "Approx. 1 week",
      insurance: "Most major plans accepted",
      intro: "Dental implants are the closest thing to natural teeth. Designed to last for decades, they offer unmatched stability, comfort, and aesthetics. An implant replaces both the root and the visible part of the tooth, helping preserve your jawbone and prevent future dental issues.",
      bullets: [
        "Permanent solution for missing or severely damaged teeth",
        "Feels and functions like a natural tooth",
        "Helps maintain jawbone health and facial structure",
        "No adhesives or dietary restrictions",
        "High success rate and long-term reliability"
      ]
    },
    "dental-veneers": {
      title: "Dental veneers",
      description: "Porcelain veneers, composite veneers, smile makeovers, shade matching, and digital smile previews.",
      time: "2 visits",
      price: "₹8,500 per veneer",
      recovery: "1–2 days of mild sensitivity",
      insurance: "Most major plans accepted",
      intro: "Porcelain veneers are the fast-track to a flawless smile – delivering uniform shape, color, and alignment without months of braces or repeated whitening sessions. Each wafer-thin shell is custom-milled to your ideal proportions, then bonded to the front of the tooth with microscopic precision.",
      bullets: [
        "Uniform shape, color, and alignment",
        "Custom-milled porcelain shells",
        "Bonded with microscopic precision",
        "Natural-looking enamel finish",
        "Stain-resistant and highly durable"
      ]
    },
    "dental-prosthetics": {
      title: "Dental prosthetics",
      description: "Crowns, bridges, full and partial dentures, overdentures, and implant-supported prosthetics.",
      time: "1–3 visits",
      price: "₹6,000 – ₹25,000",
      recovery: "Same day to 1 week",
      insurance: "Most major plans accepted",
      intro: "Missing teeth affect far more than appearance – they can shift your bite, age your facial profile, and limit the foods you enjoy. Our custom-crafted prosthetics restore both function and confidence, whether you need a single crown, a multi-unit bridge, or a full-arch solution.",
      bullets: [
        "Crowns, bridges, and full dentures",
        "Digitally designed and milled to precision",
        "Restores biting strength and bite alignment",
        "Blends seamlessly with your natural smile",
        "Prevents jaw misalignment and shifting"
      ]
    },
    "dental-treatment": {
      title: "Dental treatment",
      description: "Fillings, root canals, extractions, decay removal, and emergency pain relief.",
      time: "Same-day visit",
      price: "₹1,200 – ₹5,500",
      recovery: "Immediate to 24 hours",
      insurance: "Most major plans accepted",
      intro: "Toothaches and decay can strike at any time – and waiting only makes things worse. Our general-treatment team offers same-day relief using the latest diagnostic tools and minimally invasive techniques. We focus on preserving as much natural tooth structure as possible.",
      bullets: [
        "Cavity fillings and decay removal",
        "Root canals and extractions",
        "Same-day emergency pain relief",
        "Preservation of natural tooth structure",
        "Bacteria-tight seals that last for years"
      ]
    },
    "teeth-whitening": {
      title: "Teeth whitening",
      description: "In-clinic bleaching, take-home whitening kits, shade guide matching, and maintenance touch-ups.",
      time: "1 visit (60–90 min)",
      price: "₹6,500 – ₹12,000",
      recovery: "24 h of mild sensitivity",
      insurance: "Most major plans accepted",
      intro: "Whether you have a wedding, photoshoot, or big presentation on the horizon, a brighter smile is the quickest way to elevate your look and self-confidence. Our system combines high-potency pH-balanced gel with an LED light that accelerates stain removal deep within the enamel.",
      bullets: [
        "pH-balanced, safe bleaching gel",
        "LED-accelerated stain removal",
        "Up to 6–8 shades lighter in one visit",
        "Long-lasting brightness with touch-ups",
        "No damage to natural tooth structure"
      ]
    },
    "dental-hygiene": {
      title: "Dental hygiene",
      description: "Professional cleanings, plaque and tartar removal, gum health checks, and preventive care plans.",
      time: "1 visit (45–60 min)",
      price: "₹1,500 – ₹3,500",
      recovery: "None (mild soreness <24 h)",
      insurance: "Most major plans accepted",
      intro: "A bright smile starts with healthy gums. Routine hygiene appointments do more than polish away coffee stains – they remove the bacterial biofilm that fuels gum disease, cavities, and even systemic conditions. Our hygienists combine state-of-the-art instrumentation with personalized coaching.",
      bullets: [
        "Deep plaque and tartar removal",
        "Biofilm cleaning and stain polishing",
        "Gum health monitoring and checkups",
        "Preventive care plans to avoid decay",
        "Leaves teeth feeling completely refreshed"
      ]
    }
  };

  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-foreground">Service Not Found</h2>
        <Link href="/services" className="mt-4 text-primary underline">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-16 bg-white border-b border-border/40">
        <div className="container mx-auto max-w-5xl">
          <Link href="/services" className="inline-flex items-center gap-1 text-sm font-bold text-foreground/50 hover:text-primary transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>All Services</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-none mb-4">
            {service.title}
          </h1>
          <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-semibold max-w-[650px]">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-16 flex-grow bg-[#fbfbf9]">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Stats Cards */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="bg-white p-6 rounded-[2rem] border border-border/80 shadow-sm flex flex-col gap-5">
              <h3 className="text-base font-black text-foreground uppercase tracking-wider border-b border-border/50 pb-3">
                Treatment Specs
              </h3>

              {/* Time */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-foreground/40 uppercase tracking-wider">Treatment time</div>
                  <div className="text-sm font-extrabold text-foreground">{service.time}</div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <IndianRupee className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-foreground/40 uppercase tracking-wider">Price range</div>
                  <div className="text-sm font-extrabold text-foreground">{service.price}</div>
                </div>
              </div>

              {/* Recovery */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Heart className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-foreground/40 uppercase tracking-wider">Recovery time</div>
                  <div className="text-sm font-extrabold text-foreground">{service.recovery}</div>
                </div>
              </div>

              {/* Insurance */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-foreground/40 uppercase tracking-wider">Insurance coverage</div>
                  <div className="text-sm font-extrabold text-foreground">{service.insurance}</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-2 py-4 rounded-[1.8rem] bg-primary text-white text-[15px] font-black hover:bg-primary/95 transition-all shadow-md group hover-magnetic cursor-pointer"
            >
              <span>Book Appointment</span>
              <Calendar className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: Detailed content */}
          <div className="lg:col-span-8 bg-white p-8 md:p-10 rounded-[2rem] border border-border/80 shadow-sm flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-foreground tracking-tight border-b border-border/50 pb-4">
              Overview & Clinical Benefits
            </h2>
            <p className="text-foreground/75 text-sm md:text-base font-semibold leading-relaxed">
              {service.intro}
            </p>

            <h3 className="text-lg font-extrabold text-foreground tracking-tight mt-4 mb-2">
              Key RESTORATION Benchmarks
            </h3>
            <ul className="flex flex-col gap-3.5">
              {service.bullets.map((bullet: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-bold text-foreground/75 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
