import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function WhyChooseUs() {
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
    <section id="services" className="py-20 bg-white px-6 md:px-12 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading and Rating (Sticky) */}
        <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-32 h-fit mb-8 lg:mb-0">
          {/* Rating Badge */}
          <div className="flex items-center gap-1.5 text-primary mb-5">
            <span className="text-primary font-sans text-sm tracking-wide">★★★★★</span>
            <span className="text-xs md:text-sm font-extrabold text-foreground/80">
              4.8 (146 Reviews)
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-8">
            Expert Dental<br />Treatments
          </h2>

          {/* Button */}
          <Link 
            href="/services"
            className="flex items-center gap-1 px-6 py-3 rounded-full bg-primary text-white text-[15px] font-bold hover:bg-primary/95 transition-all shadow-md group hover-magnetic"
          >
            <span>All Services</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Right Column: List of Treatment Cards (Stacking on Scroll) */}
        <div className="lg:col-span-8 flex flex-col gap-6 relative pb-20">
          {treatments.map((treatment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="sticky bg-white border border-border/80 rounded-[1.8rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-primary/40 hover:shadow-[0_15px_30px_rgba(93,122,34,0.06)] transition-all duration-300 group cursor-pointer overflow-hidden"
              style={{
                top: `${90 + i * 36}px`,
                zIndex: i + 1,
              }}
            >
              <Link href={`/services/${treatment.slug}`} className="flex items-start gap-5 p-6 md:p-8 w-full h-full">
                {/* Icon Container */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {treatment.icon}
                </div>

                {/* Text Info */}
                <div className="flex flex-col gap-1.5 mt-1 text-left">
                  <h3 className="text-lg md:text-xl font-extrabold text-foreground tracking-tight">
                    {treatment.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-semibold">
                    {treatment.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
