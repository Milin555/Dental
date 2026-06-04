import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Heart, FileText, CheckCircle, ArrowRight, UserCheck, Settings } from "lucide-react";
import { Link } from "wouter";

export default function ClinicPage() {
  const stats = [
    { value: "30+", label: "Combined years of specialist experience" },
    { value: "5,000+", label: "Dental implants placed and counting" },
    { value: "98.6%", label: "Long-term implant success rate" }
  ];

  const doctors = [
    {
      name: "Dr. Vishal",
      slug: "dr-vishal",
      role: "Founder & Lead Dentist",
      image: "/images/dr_michael_reynolds.png"
    },
    {
      name: "Dr. Aditi",
      slug: "aditi",
      role: "Co-Founder | Pediatric Dentist",
      image: "/images/dr_emily_carter.png"
    }
  ];

  const workflows = [
    {
      num: "01",
      tag: "GUARANTEED DIAGNOSTICS",
      title: "Diagnosis Before Decisions",
      description: "No treatment starts without a full picture. Every patient goes through 3D CBCT scans, intraoral imaging, and a clinical evaluation by the relevant specialists before anything is recommended. You'll understand your options and the reasoning behind each one before you commit.",
      bullets: [
        "Full 3D cone beam imaging on every case",
        "Multi-specialist review before any plan is presented",
        "Digital smile previews so you see the result upfront"
      ]
    },
    {
      num: "02",
      tag: "BEST EXPERTS IN THE REGION",
      title: "One Team in One Building",
      description: "Dedicated specialists led by the founder, Dr. Vishal, and her team working together. Complex dental work gets better outcomes when the entire team is in the same room, rather than scattered across referral slips and separate offices.",
      bullets: [
        "Surgical and prosthetic alignment chairside",
        "Immediate lab communication for custom shading",
        "Integrated care paths that save patient visits"
      ]
    },
    {
      num: "03",
      tag: "FULL TRANSPARENCY",
      title: "No Hidden Costs, No Surprises",
      description: "We present complete cost structures upfront before any procedure starts. You'll see the full picture, with clear explanations of options and phases. No hidden fees, no unexpected additions, and no awkward conversations later.",
      bullets: [
        "Detailed cost breakdowns on every treatment plan",
        "Phased payment options matched to your schedule",
        "No pressure, just honest diagnostic clarity"
      ]
    },
    {
      num: "04",
      tag: "PREMIUM DENTAL EQUIPMENT",
      title: "A Clinic Designed for Complex Work",
      description: "Equipped with state-of-the-art dental technology, from wireless intraoral scanners to guided surgery suites. Every tool is selected to improve diagnostic accuracy, patient comfort, and procedural predictability.",
      bullets: [
        "Low-radiation 3D CBCT diagnostics",
        "Micron-level wireless intraoral scanning",
        "Standardized medical-grade sterilization suites"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "They showed me the full cost upfront. No surprises, no awkward conversations later.",
      author: "Thomas",
      meta: "Full arch restoration"
    },
    {
      quote: "The whole team clearly talks to each other. I never had to repeat my situation twice.",
      author: "Sandra",
      meta: "Dental prosthetics"
    },
    {
      quote: "I put this off for six years. Wish I hadn't – the process was easier than I expected.",
      author: "David",
      meta: "Dental implants"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-16 bg-white border-b border-border/40">
        <div className="container mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 text-[12px] font-bold text-foreground/70 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Our Mission</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <h1 className="lg:col-span-6 text-4xl md:text-5xl lg:text-[60px] font-extrabold text-foreground tracking-tight leading-[1.05]">
              20 Years Of<br />Dental Excellence
            </h1>
            <p className="lg:col-span-6 text-base md:text-[20px] text-foreground/75 leading-relaxed font-semibold lg:pl-6">
              "What makes this practice different isn't one thing. It's six people. Six specialists who chose to work together instead of apart – because complex dental work gets better outcomes when the entire team is in the room, not scattered across referral slips."
            </p>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 bg-white px-6 md:px-12 lg:px-16 border-b border-border/40">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1 md:border-r border-border/40 last:border-r-0 p-4">
              <span className="text-4xl md:text-5xl font-black text-primary tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider font-extrabold text-foreground/50 leading-relaxed max-w-[240px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Asymmetric Imagery Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-16 bg-[#fbfbf9]">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 h-[300px] md:h-[420px] rounded-3xl overflow-hidden shadow-sm border border-black/5">
            <img src="/images/clinic-1.png" alt="Dental Clinic Reception" className="w-full h-full object-cover" />
          </div>
          <div className="h-[300px] md:h-[420px] rounded-3xl overflow-hidden shadow-sm border border-black/5">
            <img src="/images/clinic-2.png" alt="Implant Suite" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Meet The Hands That Transform Smiles */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-white border-y border-border/40">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-4 text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 text-[12px] font-bold text-foreground/70">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Our Team</span>
            </div>
            <h2 className="text-3xl md:text-[42px] font-extrabold text-foreground tracking-tight leading-none">
              Meet The Hands That Transform Smiles
            </h2>
          </div>

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
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#f4f5f3] border border-black/5 group shadow-sm w-full">
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-2 w-full">
                    <h3 className="text-[17px] font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-[13px] text-foreground/50 font-bold mt-0.5">
                      {doc.role}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link 
              href="/dentists" 
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-foreground/15 text-foreground text-[15px] font-bold hover:bg-muted/50 transition-all hover-magnetic"
            >
              <span>Meet All Specialists</span>
              <ArrowRight className="w-4 h-4 text-foreground/70" />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-[#fbfbf9]">
        <div className="container mx-auto max-w-6xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 text-[12px] font-bold text-foreground/70 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>How We Work</span>
              </div>
              <h2 className="text-3xl md:text-[42px] font-extrabold text-foreground tracking-tight leading-tight">
                What Sets<br />Us Apart
              </h2>
            </div>
            <p className="lg:col-span-8 text-foreground/60 text-sm md:text-base leading-relaxed font-semibold mt-2">
              Every reconstruction and surgical case involves careful planning. We standardise diagnostics and consultation workflows so our clinical experts have complete visibility over your treatment parameters.
            </p>
          </div>

          {/* workflows list grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflows.map((flow, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="bg-white p-8 rounded-[2rem] border border-border/80 shadow-sm flex flex-col gap-6"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[12px] font-black tracking-wider text-primary bg-primary/5 px-3 py-1.5 rounded-full">
                    {flow.tag}
                  </span>
                  <span className="text-3xl font-black text-foreground/15">
                    {flow.num}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">
                    {flow.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed font-semibold">
                    {flow.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 pt-4 border-t border-border/50 mt-auto">
                  {flow.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs md:text-sm font-bold text-foreground/75">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Patient Testimonials Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-white border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          
          <div className="flex flex-col items-center gap-4 text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 text-[12px] font-bold text-foreground/70">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-[42px] font-extrabold text-foreground tracking-tight leading-none">
              What Our Patients Say About Their Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, i) => (
              <div 
                key={i}
                className="bg-[#fbfbf9] p-8 rounded-3xl border border-border/60 flex flex-col justify-between gap-6"
              >
                <p className="text-foreground/80 text-sm md:text-base font-semibold italic leading-relaxed">
                  "{test.quote}"
                </p>
                <div>
                  <h4 className="text-sm font-black text-foreground tracking-tight">
                    {test.author}
                  </h4>
                  <p className="text-xs text-foreground/45 font-bold mt-0.5">
                    {test.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
