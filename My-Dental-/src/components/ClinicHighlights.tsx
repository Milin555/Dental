import { Gift, ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function ClinicHighlights() {
  return (
    <section id="clinic" className="pb-20 bg-white px-6 md:px-12 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Card: Visit Our Clinic */}
        <a 
          href="https://maps.google.com/?q=My+Dental+Clinic+Mumbai+Mumbai"
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-[320px] md:h-[400px] rounded-3xl overflow-hidden bg-cover bg-center group border border-black/5 block"
          style={{
            backgroundImage: `url('/images/clinic-1.png')`,
          }}
        >
          {/* Subtle bottom-up shadow overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-end justify-between p-8 z-10">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                Visit Our Clinic
              </h3>
              <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed max-w-[280px]">
                123 Health Avenue, Andheri West, Mumbai, Maharashtra 400053
              </p>
            </div>
            
            {/* Map Pin button on bottom right */}
            <div 
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-all duration-300"
            >
              <MapPin className="w-5 h-5 fill-current" />
            </div>
          </div>
        </a>

        {/* Right Card: Free Consultation Promo */}
        <div className="h-[320px] md:h-[400px] rounded-3xl bg-primary p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden group shadow-lg border border-black/5">
          {/* Top Row: Gift Icon and Arrow */}
          <div className="flex justify-between items-start">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <Gift className="w-7 h-7 stroke-[1.5]" />
            </div>
            
            <Link 
              href="/contact"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all hover:scale-105"
            >
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Bottom Content: Promo Text */}
          <div className="max-w-[450px]">
            <h3 className="text-2xl md:text-[34px] font-extrabold leading-[1.1] tracking-tight mb-3">
              Your first consultation is free of charge
            </h3>
            <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed">
              Book a consultation today. We'd love to give you a reason to smile more :)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
