import { motion } from "framer-motion";
import { Scan, Activity, Target, Zap, Waves } from "lucide-react";

export default function Technology() {
  const tech = [
    {
      title: "3D Dental Scanner",
      desc: "Millimeter-perfect digital impressions.",
      icon: <Scan className="w-6 h-6" />,
      colSpan: "lg:col-span-2",
      delay: 0.1
    },
    {
      title: "Digital X-Ray",
      desc: "High-def imaging, 90% less radiation.",
      icon: <Activity className="w-6 h-6" />,
      colSpan: "lg:col-span-1",
      delay: 0.2
    },
    {
      title: "Laser Dentistry",
      desc: "Painless, drill-free procedures.",
      icon: <Zap className="w-6 h-6" />,
      colSpan: "lg:col-span-1",
      delay: 0.3
    },
    {
      title: "AI Diagnostics",
      desc: "Predictive issue detection.",
      icon: <Target className="w-6 h-6" />,
      colSpan: "lg:col-span-1",
      delay: 0.4
    },
    {
      title: "Invisible Aligners",
      desc: "Smart-tracking morphing technology.",
      icon: <Waves className="w-6 h-6" />,
      colSpan: "lg:col-span-1",
      delay: 0.5
    }
  ];

  return (
    <section id="technology" className="py-14 relative bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">Innovation</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">Technology That Defines Tomorrow</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tech.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className={`glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors ${item.colSpan}`}
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] group-hover:bg-primary/20 transition-colors" />
              
              <div className="w-14 h-14 rounded-2xl bg-muted border border-border flex items-center justify-center text-primary mb-6 relative z-10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3 relative z-10">{item.title}</h3>
              <p className="text-muted-foreground relative z-10">{item.desc}</p>

              {/* Decorative Tech lines */}
              <div className="absolute bottom-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <path d="M10 90 L40 60 L60 80 L90 10" stroke="currentColor" strokeWidth="2" className="text-primary"/>
                  <circle cx="90" cy="10" r="4" fill="currentColor" className="text-primary"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}