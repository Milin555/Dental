import { motion } from "framer-motion";
import { Phone, AlertTriangle } from "lucide-react";

export default function EmergencyCare() {
  return (
    <section className="py-14 relative bg-destructive/5 border-y border-destructive/20 overflow-hidden">
      {/* ECG Line Animation */}
      <div className="absolute top-0 left-0 w-full h-10 opacity-30">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
          <polyline 
            points="0,50 200,50 220,20 240,80 260,50 1000,50" 
            fill="none" 
            stroke="#ef4444" 
            strokeWidth="2" 
            className="animate-[dash_3s_linear_infinite]"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-destructive/30 bg-destructive/10 text-destructive text-sm font-bold mb-8">
            <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            Available Now 24/7
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">Emergency<br/>Dental Care</h2>
          
          <ul className="space-y-4 mb-10">
            {["Severe Toothache", "Broken/Chipped Tooth", "Lost Crown", "Dental Abscess", "Knocked-Out Tooth"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/80">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                {item}
              </li>
            ))}
          </ul>

          <a href="tel:+919999999999" className="inline-flex items-center gap-3 bg-destructive hover:bg-destructive/90 text-white px-8 py-5 rounded-full font-bold text-xl shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all hover:scale-105">
            <Phone className="w-6 h-6" /> +91 99999 99999
          </a>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-destructive/20 relative">
          <div className="absolute -top-4 -right-4 bg-destructive text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-6">
            Average Response: 15 mins
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Quick Booking</h3>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Full Name" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-destructive transition-colors" />
            <input type="tel" placeholder="Phone Number" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-destructive transition-colors" />
            <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground/80 focus:outline-none focus:border-destructive transition-colors appearance-none">
              <option>Select Emergency Type</option>
              <option>Severe Pain</option>
              <option>Broken Tooth</option>
              <option>Other</option>
            </select>
            <button className="w-full bg-destructive text-white font-bold py-4 rounded-xl hover:bg-destructive/90 transition-colors shadow-md">
              Request Immediate Help
            </button>
          </form>
        </div>
      </div>
      <style>{`
        @keyframes dash { to { stroke-dashoffset: 0; } }
      `}</style>
    </section>
  );
}