import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Specialists() {
  const doctors = [
    {
      name: "Dr. Vishal",
      slug: "dr-vishal",
      role: "Founder & Lead Dentist",
      image: "/images/dr_michael_reynolds.png",
      isActive: true
    },
    {
      name: "Dr. Aditi",
      slug: "aditi",
      role: "Co-Founder | Pediatric Dentist",
      image: "/images/dr_emily_carter.png",
      isActive: true
    },
    {
      name: "Dr. Priyanka",
      slug: "priyanka",
      role: "Oral Surgeon",
      image: "/images/dr_tracy_willow.png",
      isActive: true
    }
  ];

  return (
    <section id="specialists" className="py-20 bg-white px-6 md:px-12 lg:px-16">
      <div className="container mx-auto">
        
        {/* Badge & Title */}
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 text-[12px] font-bold text-foreground/70">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Our Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Meet Our Dental Experts
          </h2>
        </div>

        {/* Doctor Grid with Absolute Slider Arrow */}
        <div className="relative">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col gap-4"
              >
                <Link href={`/dentists/${doc.slug}`} className="flex flex-col gap-4 text-left w-full group">
                  {/* Image Card Container */}
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#f4f5f3] border border-black/5 group shadow-sm w-full">
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Subtle clover emblem overlay on bottom left */}
                    <div className="absolute bottom-5 left-5 opacity-40">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M12 3C10.5 5 10.5 8 12 10C13.5 8 13.5 5 12 3Z" fill="currentColor" />
                        <path d="M12 21C13.5 19 13.5 16 12 14C10.5 16 10.5 19 12 21Z" fill="currentColor" />
                        <path d="M3 12C5 13.5 8 13.5 10 12C8 10.5 5 10.5 3 12Z" fill="currentColor" />
                        <path d="M21 12C19 10.5 16.5 10.5 14 12C16.5 13.5 19 13.5 21 12Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  {/* Info & Action Button */}
                  <div className="flex items-center justify-between px-2 w-full">
                    <div>
                      <h3 className="text-[17px] font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-[13px] text-foreground/50 font-bold mt-0.5">
                        {doc.role}
                      </p>
                    </div>
                    
                    {/* Action Pill */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        doc.isActive 
                          ? "bg-primary/70 text-white group-hover:bg-primary" 
                          : "bg-white border border-border/80 text-foreground/80 group-hover:bg-primary group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight className="w-4.5 h-4.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Slider Arrow (right side of grid) */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-border flex items-center justify-center cursor-pointer text-foreground/45 hover:text-primary transition-all hidden xl:flex hover:scale-105 z-10">
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </div>

        </div>

        {/* Bottom Promise statement */}
        <div className="mt-16 flex flex-col items-center gap-6 text-center pt-8 border-t border-border/60">
          <p className="text-base md:text-[18px] text-foreground/85 font-semibold max-w-[680px] leading-relaxed">
            <span className="text-primary">Our promise:</span> You'll never feel rushed here. We explain options clearly, plan carefully, and deliver treatment with steady hands and modern tools.
          </p>
          
          <Link 
            href="/dentists"
            className="flex items-center gap-1 px-6 py-3 rounded-full bg-primary text-white text-[15px] font-bold hover:bg-primary/95 transition-all shadow-md group hover-magnetic"
          >
            <span>Our Specialists</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}