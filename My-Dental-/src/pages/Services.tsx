import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function ServicesPage() {
  const treatments = [
    {
      title: "Dental implants",
      slug: "dental-implants",
      description: "Single tooth implants, full-arch restoration, All-on-4, immediate-load implants, and implant-supported bridges.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-primary" fill="currentColor">
          <path d="M50 15 C 38 15, 32 25, 32 38 C 32 50, 42 55, 42 62 L 42 75 L 46 77 L 46 85 L 50 89 L 54 85 L 54 77 L 58 75 L 58 62 C 58 55, 68 50, 68 38 C 68 25, 62 15, 50 15 Z" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
          <path d="M42 66 L 58 66 M44 71 L 56 71 M46 76 L 54 76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Dental veneers",
      slug: "dental-veneers",
      description: "Porcelain veneers, composite veneers, smile makeovers, shade matching, and digital smile previews.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-primary" fill="currentColor">
          <path d="M30 25 C 30 15, 45 12, 50 18 C 55 12, 70 15, 70 25 C 70 45, 62 75, 50 85 C 38 75, 30 45, 30 25 Z" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
          <path d="M40 32 C 43 28, 47 28, 50 32 C 53 28, 57 28, 60 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Dental prosthetics",
      slug: "dental-prosthetics",
      description: "Crowns, bridges, full and partial dentures, overdentures, and implant-supported prosthetics.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-primary" fill="currentColor">
          <path d="M22 45 C 22 30, 36 28, 50 35 C 64 28, 78 30, 78 45 C 78 60, 68 78, 50 78 C 32 78, 22 60, 22 45 Z" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
          <path d="M30 46 C 36 44, 44 44, 50 48 C 56 44, 64 44, 70 46" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Dental treatment",
      slug: "dental-treatment",
      description: "Fillings, root canals, extractions, decay removal, and emergency pain relief.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-primary" fill="currentColor">
          <path d="M30 25 C 30 15, 45 15, 50 20 C 55 15, 70 15, 70 25 C 70 45, 62 82, 50 82 C 38 82, 30 45, 30 25 Z" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
          <path d="M44 45 H 56 M50 39 V 51" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Teeth whitening",
      slug: "teeth-whitening",
      description: "In-clinic bleaching, take-home whitening kits, shade guide matching, and maintenance touch-ups.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-primary" fill="currentColor">
          <path d="M30 25 C 30 15, 45 15, 50 20 C 55 15, 70 15, 70 25 C 70 45, 62 82, 50 82 C 38 82, 30 45, 30 25 Z" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
          <path d="M72 20 L 75 25 L 80 26 L 76 30 L 77 35 L 72 32 L 67 35 L 68 30 L 64 26 L 69 25 Z" fill="currentColor" className="text-yellow-500" />
        </svg>
      )
    },
    {
      title: "Dental hygiene",
      slug: "dental-hygiene",
      description: "Professional cleanings, plaque and tartar removal, gum health checks, and preventive care plans.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-primary" fill="currentColor">
          <path d="M30 25 C 30 15, 45 15, 50 20 C 55 15, 70 15, 70 25 C 70 45, 62 82, 50 82 C 38 82, 30 45, 30 25 Z" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
          <path d="M25 75 L 42 58 M40 54 L 46 60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M33 77 L 31 79" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-16 text-center bg-white border-b border-border/40">
        <div className="container mx-auto max-w-[800px] flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 text-[12px] font-bold text-foreground/70">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Services Overview</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-foreground tracking-tight leading-none">
            Our Dental Services
          </h1>
          
          <p className="text-sm md:text-base lg:text-lg text-foreground/60 leading-relaxed font-semibold max-w-[650px] mt-2">
            From dental implants and porcelain veneers to teeth whitening and periodontal care. Explore the full range of specialist treatments available at Dental Clinic.
          </p>
        </div>
      </section>

      {/* Grid of Treatment Cards */}
      <section className="py-20 px-6 md:px-12 lg:px-16 flex-grow">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-[2rem] bg-white border border-border/70 hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <Link href={`/services/${treatment.slug}`} className="p-8 flex flex-col justify-between gap-8 h-full w-full text-left">
                <div className="flex flex-col gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    {treatment.icon}
                  </div>
                  
                  {/* Text */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-extrabold text-foreground tracking-tight">
                      {treatment.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed font-semibold">
                      {treatment.description}
                    </p>
                  </div>
                </div>

                {/* Action Link */}
                <div className="flex items-center gap-1 text-[13px] font-black text-primary uppercase tracking-wider group-hover:text-primary/85 mt-2">
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
