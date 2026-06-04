import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function DentistsPage() {
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
    },
    {
      name: "Dr. Aaron Hayes",
      slug: "aaron-hayes",
      role: "Periodontist",
      image: "/images/dr_aaron_hayes.png",
      isActive: false
    },
    {
      name: "Dr. James Mitchell",
      slug: "james-mitchell",
      role: "Oral & Maxillofacial Surgeon",
      image: "/images/dr_james_mitchell.png",
      isActive: false
    },
    {
      name: "Dr. Lauren Parker",
      slug: "lauren-parker",
      role: "Orthodontist",
      image: "/images/dr_lauren_parker.png",
      isActive: false
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
            <span>Clinical Experts</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-foreground tracking-tight leading-none">
            Our Dental Specialists
          </h1>
          
          <p className="text-sm md:text-base lg:text-lg text-foreground/60 leading-relaxed font-semibold max-w-[650px] mt-2">
            Dedicated specialists led by Dr. Vishal. Meet the experts behind every Dental Clinic smile restoration.
          </p>
        </div>
      </section>

      {/* Roster Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-16 flex-grow bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="flex flex-col gap-4"
              >
                <Link href={`/dentists/${doc.slug}`} className="flex flex-col gap-4 text-left w-full group">
                  {/* Image Wrapper */}
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#f4f5f3] border border-black/5 group shadow-sm w-full">
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex items-center justify-between px-2 w-full">
                    <div>
                      <h3 className="text-[17px] font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-[13px] text-foreground/50 font-bold mt-0.5">
                        {doc.role}
                      </p>
                    </div>
                    
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        doc.isActive 
                          ? "bg-primary text-white group-hover:bg-primary/90" 
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

          {/* Guarantee statement banner */}
          <div className="mt-20 flex flex-col items-center gap-6 text-center pt-8 border-t border-border/60">
            <p className="text-base md:text-[18px] text-foreground/85 font-semibold max-w-[680px] leading-relaxed">
              <span className="text-primary">Our promise:</span> You'll never feel rushed here. We explain options clearly, plan carefully, and deliver treatment with steady hands and modern tools.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
