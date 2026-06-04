import { motion } from "framer-motion";

export default function TreatmentUniverse() {
  const orbits = [
    { label: "Dental Implants", radius: "120px", duration: "15s", delay: "0s" },
    { label: "Root Canal", radius: "120px", duration: "15s", delay: "-5s" },
    { label: "Orthodontics", radius: "120px", duration: "15s", delay: "-10s" },
    { label: "Kids Dentistry", radius: "220px", duration: "25s", delay: "0s" },
    { label: "Gum Treatment", radius: "220px", duration: "25s", delay: "-5s" },
    { label: "Wisdom Tooth", radius: "220px", duration: "25s", delay: "-10s" },
    { label: "Cosmetic", radius: "220px", duration: "25s", delay: "-15s" },
    { label: "Whitening", radius: "220px", duration: "25s", delay: "-20s" },
    { label: "Makeover", radius: "320px", duration: "40s", delay: "0s" },
    { label: "Invisalign", radius: "320px", duration: "40s", delay: "-20s" },
  ];

  return (
    <section className="py-14 relative overflow-hidden bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center mb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Complete Dental Care</h2>
      </div>

      <div className="relative h-[800px] flex items-center justify-center scale-75 md:scale-100">
        {/* Center */}
        <div className="absolute w-40 h-40 bg-primary/10 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(10,116,128,0.2)] z-20 backdrop-blur-md border border-primary/30">
          <span className="text-foreground font-bold text-center leading-tight">Treatment<br/>Universe</span>
        </div>

        {/* Orbit Rings */}
        <div className="absolute w-[240px] h-[240px] rounded-full border border-border pointer-events-none" />
        <div className="absolute w-[440px] h-[440px] rounded-full border border-border pointer-events-none" />
        <div className="absolute w-[640px] h-[640px] rounded-full border border-border pointer-events-none" />

        {/* Orbiting Items */}
        {orbits.map((item, i) => (
          <div 
            key={i}
            className="absolute top-1/2 left-1/2 w-0 h-0"
          >
            <div 
              className="absolute pointer-events-auto group cursor-pointer"
              style={{
                animation: `spin ${item.duration} linear infinite ${item.delay}`,
                transformOrigin: '0 0'
              }}
            >
              <div 
                className="absolute flex items-center gap-2 -translate-y-1/2 transition-transform hover:scale-110"
                style={{ 
                  left: item.radius,
                  animation: `spin-reverse ${item.duration} linear infinite ${item.delay}`
                }}
              >
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(10,116,128,0.5)] group-hover:scale-150 transition-transform" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary whitespace-nowrap bg-card/85 px-2 py-1 rounded backdrop-blur-sm border border-border shadow-sm">
                  {item.label}
                </span>
              </div>
            </div>
          </div>
        ))}

        <style>{`
          @keyframes spin { 100% { transform: rotate(360deg); } }
          @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
        `}</style>
      </div>
    </section>
  );
}