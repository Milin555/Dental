import { motion } from "framer-motion";
import { ShieldCheck, Heart, Eye, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function PracticeIntro() {
  const doctors = [
    "/images/dr_michael_reynolds.png",
    "/images/dr_emily_carter.png",
    "/images/dr_tracy_willow.png"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Top Grid: Avatars & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column: Avatars & Experience */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <div className="flex -space-x-3">
              {doctors.map((url, i) => (
                <img 
                  key={i}
                  src={url} 
                  alt="Doctor" 
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
              ))}
            </div>
            
            <div className="mt-2">
              <span className="text-4xl md:text-5xl font-extrabold text-foreground block tracking-tight">
                30+
              </span>
              <span className="text-xs uppercase tracking-wider font-extrabold text-foreground/50">
                Years of experience
              </span>
            </div>
          </div>

          {/* Right Column: Heading Description */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.2] text-foreground tracking-tight max-w-[800px]">
              <span className="text-primary">Dental Clinic is a restorative dental practice</span> built around implants, prosthetics, and full smile reconstruction for cases that demand specialization and surgical precision.
            </h2>
          </div>

        </div>

        {/* Bottom Grid: About Us Button & Three Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-8 border-t border-border/60">
          
          {/* About Us Button */}
          <div className="lg:col-span-4">
            <Link 
              href="/our-clinic"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-foreground/15 text-foreground text-[15px] font-bold hover:bg-muted/50 transition-all hover-magnetic"
            >
              <span>About Us</span>
              <ArrowUpRight className="w-4 h-4 text-foreground/75" />
            </Link>
          </div>

          {/* Three Feature Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-[17px] font-extrabold text-foreground tracking-tight">
                Specialist-led precision
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                Planned and performed by dedicated experts in implantology, surgery, and prosthetics.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-extrabold text-foreground tracking-tight">
                Unhurried consultations
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                Your case is studied thoroughly before any treatment is recommended.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-extrabold text-foreground tracking-tight">
                Full transparency
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                Clear pricing, honest timelines, and no surprises from first scan to final restoration.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
