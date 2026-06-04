import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
  ];

  return (
    <section id="home" className="pt-24 px-4 md:px-8 pb-10">
      <div 
        className="relative w-full h-[550px] md:h-[650px] lg:h-[700px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-cover bg-center shadow-lg border border-black/5"
        style={{
          backgroundImage: `url('/images/dentix_hero_bg.png')`,
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />
        
        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 lg:p-16 z-10">
          
          {/* Top content spacer */}
          <div />

          {/* Middle Content */}
          <div className="max-w-[650px] flex flex-col items-start gap-6 mt-10 md:mt-20">
            <h1 className="text-white text-4xl md:text-6xl lg:text-[70px] font-extrabold leading-[1.05] tracking-tight">
              Premium Implant<br />Dentistry Clinic
            </h1>
            
            <p className="text-white/90 text-sm md:text-base lg:text-lg max-w-[480px] leading-relaxed font-medium">
              From subtle enhancements to full reconstructions, we specialize in restoring healthy smiles with care that fits you.
            </p>
            
            <Link 
              href="/contact"
              className="flex items-center gap-1 px-7 py-3.5 rounded-full bg-primary text-white text-[15px] font-bold hover:bg-primary/95 transition-all shadow-md group hover-magnetic"
            >
              <span>Book Online</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Bottom Social Proof Badge */}
          <div className="flex items-center gap-3 bg-black/20 backdrop-blur-md px-4 py-2.5 rounded-2xl w-fit border border-white/10 mt-6">
            <div className="flex -space-x-2">
              {avatars.map((url, i) => (
                <img 
                  key={i}
                  src={url} 
                  alt="Patient" 
                  className="w-8 h-8 rounded-full object-cover border-2 border-white/20"
                />
              ))}
            </div>
            <div className="flex flex-col text-white">
              <div className="flex items-center gap-1.5 text-xs md:text-sm font-extrabold leading-none">
                <span>4.8</span>
                <span className="text-yellow-400 font-sans">★★★★★</span>
              </div>
              <span className="text-[10px] md:text-xs text-white/80 font-medium">
                146 reviews on Google
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
