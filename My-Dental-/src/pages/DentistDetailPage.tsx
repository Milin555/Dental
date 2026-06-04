import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Award, BookOpen, GraduationCap, Sparkles, Phone, ArrowUpRight, Calendar } from "lucide-react";

export default function DentistDetailPage() {
  const { slug } = useParams();

  const dentistsData: Record<string, any> = {
    "dr-vishal": {
      name: "Dr. Vishal",
      role: "Founder & Lead Dentist",
      experience: "15 Years",
      education: "MDS, Conservative Dentistry & Endodontics",
      expertise: "Pain-free root canals, guided implant placement, cosmetic restorations",
      bio: "Dr. Vishal is the founder and lead dentist at Dental Clinic. Specializing in advanced restorative therapy and dental implants, she has built a reputation in Vadodara for performing comfortable, pain-free treatments using the latest rotary tools and digital imaging. She focuses on saving natural tooth structures and restoring full dental function with state-of-the-art implants.",
      certifications: [
        "MDS – Conservative Dentistry & Endodontics",
        "BDS – Gujarat University",
        "Certified Implantologist – ICOI (USA)",
        "Member – Indian Endodontic Society (IES)"
      ],
      image: "/images/dr_michael_reynolds.png"
    },
    "aditi": {
      name: "Dr. Aditi",
      role: "Co-Founder | Pediatric Dentist (Pedodontist)",
      experience: "17 Years",
      education: "MDS, Pediatric & Preventive Dentistry",
      expertise: "Gentle kid dentistry, preventive care, pediatric root canals, early-age bite corrections",
      bio: "Dr. Aditi is the co-founder and lead pediatric dentist at Dental Clinic. With over 17 years of experience, she provides compassionate, anxiety-free care to young patients. She specializes in preventive sealants, pediatric root canals (pulpectomies), crowns, and kid-friendly orthodontic assessments, ensuring a positive clinical experience.",
      certifications: [
        "MDS – Pediatric & Preventive Dentistry",
        "BDS – Gujarat University",
        "Ex-Professor – Department of Pedodontics",
        "Member – Indian Society of Pedodontics and Preventive Dentistry (ISPPD)"
      ],
      image: "/images/dr_emily_carter.png"
    },
    "priyanka": {
      name: "Dr. Priyanka",
      role: "Oral Surgeon",
      experience: "22 Years",
      education: "DDS, University of Pennsylvania",
      expertise: "Implant placement, full-mouth reconstruction, treatment planning",
      bio: "Dr. Priyanka is an expert oral surgeon. She specializes in complex surgical procedures including full-mouth rehabilitation, immediate load implants, and reconstructive surgery, coordinating closely with our endodontist and pediatric leads.",
      certifications: [
        "DDS – University of Pennsylvania School of Dental Medicine",
        "Diplomate – International Congress of Oral Implantologists (ICOI)",
        "Fellow – Academy of General Dentistry (FAGD)",
        "Member – American Academy of Implant Dentistry (AAID)"
      ],
      image: "/images/dr_tracy_willow.png"
    },
    "aaron-hayes": {
      name: "Dr. Aaron Hayes",
      role: "Periodontist",
      experience: "14 Years",
      education: "DDS, University of Washington",
      expertise: "Gum grafting, soft tissue management, peri-implantitis treatment",
      bio: "Dr. Aaron Hayes ensures every implant has a healthy foundation, specializing in gum restoration and tissue health. He works closely with surgical and prosthetic leads to manage emergence profiles, treat peri-implant conditions, and rebuild lost supportive tissue.",
      certifications: [
        "DDS – University of Washington School of Dentistry",
        "Residency – Periodontics, Boston University",
        "Board Certified – American Board of Periodontology"
      ],
      image: "/images/dr_aaron_hayes.png"
    },
    "james-mitchell": {
      name: "Dr. James Mitchell",
      role: "Oral & Maxillofacial Surgeon",
      experience: "15 Years",
      education: "DDS, University of Michigan – MD, Johns Hopkins",
      expertise: "Bone grafting, sinus lifts, jaw reconstruction, extractions",
      bio: "Dr. James Mitchell manages the surgical foundation behind complex implant cases, performing bone grafting, sinus lifts, and facial reconstructions to make complex tooth replacement possible.",
      certifications: [
        "DDS – University of Michigan School of Dentistry",
        "MD – Johns Hopkins School of Medicine",
        "Board Certified – American Board of Oral and Maxillofacial Surgery (ABOMS)",
        "Fellow – American Association of Oral and Maxillofacial Surgeons (AAOMS)"
      ],
      image: "/images/dr_james_mitchell.png"
    },
    "lauren-parker": {
      name: "Dr. Lauren Parker",
      role: "Orthodontist",
      experience: "10 Years",
      education: "DDS, Columbia University",
      expertise: "Clear aligner therapy, pre-prosthetic orthodontics, bite correction",
      bio: "Dr. Lauren Parker handles alignment and bite corrections, ensuring teeth are in optimal positions before restorative work begins. Her aligner and orthodontic planning integrates with the surgical teams to achieve precise cosmetic and functional results.",
      certifications: [
        "DDS – Columbia University College of Dental Medicine",
        "Residency – Orthodontics, Columbia University",
        "Board Certified – American Board of Orthodontics"
      ],
      image: "/images/dr_lauren_parker.png"
    }
  };

  const dentist = slug ? dentistsData[slug] : null;

  if (!dentist) {
    return (
      <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-foreground">Specialist Not Found</h2>
        <Link href="/dentists" className="mt-4 text-primary underline">Back to Specialists</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-16 bg-white border-b border-border/40">
        <div className="container mx-auto max-w-5xl">
          <Link href="/dentists" className="inline-flex items-center gap-1 text-sm font-bold text-foreground/50 hover:text-primary transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>All Specialists</span>
          </Link>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-none mb-3">
                {dentist.name}
              </h1>
              <p className="text-base md:text-lg text-primary leading-none font-bold">
                {dentist.role}
              </p>
            </div>
            
            <Link 
              href="/contact" 
              className="flex items-center gap-2 pl-6 pr-3 py-3 rounded-full bg-primary text-white text-[14px] font-bold hover:bg-primary/95 transition-all shadow-md group hover-magnetic cursor-pointer"
            >
              <span>Book Consultation</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                <Calendar className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Profile Details */}
      <section className="py-16 px-6 md:px-12 lg:px-16 flex-grow bg-[#fbfbf9]">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Headshot and Stats */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-white border border-border/80 shadow-sm">
              <img 
                src={dentist.image} 
                alt={dentist.name} 
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="bg-white p-6 rounded-[2rem] border border-border/80 shadow-sm flex flex-col gap-4">
              <h3 className="text-sm font-black text-foreground uppercase tracking-wider border-b border-border/50 pb-2">
                Credentials
              </h3>

              {/* Experience */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-foreground/40 uppercase tracking-wider">Experience</div>
                  <div className="text-sm font-extrabold text-foreground">{dentist.experience}</div>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-foreground/40 uppercase tracking-wider">Education</div>
                  <div className="text-sm font-extrabold text-foreground">{dentist.education}</div>
                </div>
              </div>

              {/* Expertise */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Sparkles className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-foreground/40 uppercase tracking-wider">Expertise</div>
                  <div className="text-sm font-extrabold text-foreground">{dentist.expertise}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio and Certifications */}
          <div className="lg:col-span-8 bg-white p-8 md:p-10 rounded-[2rem] border border-border/80 shadow-sm flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold text-foreground tracking-tight border-b border-border/50 pb-4">
              Professional Biography
            </h2>
            <p className="text-foreground/75 text-sm md:text-base font-semibold leading-relaxed">
              {dentist.bio}
            </p>

            <h3 className="text-lg font-extrabold text-foreground tracking-tight mt-4 mb-2">
              Board Certifications & Memberships
            </h3>
            <ul className="flex flex-col gap-3">
              {dentist.certifications.map((cert: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs md:text-sm font-bold text-foreground/75">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{cert}</span>
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
