import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DigitalLab() {
  const [metrics, setMetrics] = useState({ treatments: 0, rate: 0, plans: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        treatments: Math.min(prev.treatments + 1, 47),
        rate: Math.min(prev.rate + 0.5, 99.2),
        plans: Math.min(prev.plans + 5, 312)
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-14 relative overflow-hidden bg-background">
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-primary/20 border-dashed animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/30 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">The Digital<br/><span className="text-primary">Dental Lab</span></h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Every smile is engineered with micron-level precision using our proprietary AI algorithms and CAD/CAM robotic milling.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-2xl border-l-2 border-l-primary">
                <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Treatments Today</div>
                <div className="text-4xl font-mono font-bold text-foreground">{metrics.treatments}</div>
              </div>
              <div className="glass-panel p-6 rounded-2xl border-l-2 border-l-primary">
                <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Success Rate</div>
                <div className="text-4xl font-mono font-bold text-foreground">{metrics.rate.toFixed(1)}%</div>
              </div>
              <div className="glass-panel p-6 rounded-2xl col-span-2 border-l-2 border-l-primary">
                <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Digital Plans Generated</div>
                <div className="text-4xl font-mono font-bold text-foreground">{metrics.plans}</div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] flex items-center justify-center">
            {/* Center Gauge */}
            <div className="relative w-64 h-64">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="128" cy="128" r="120" stroke="rgba(10,116,128,0.1)" strokeWidth="4" fill="none" />
                <motion.circle 
                  cx="128" cy="128" r="120" 
                  stroke="var(--color-primary)" 
                  strokeWidth="4" 
                  fill="none" 
                  strokeDasharray="753"
                  initial={{ strokeDashoffset: 753 }}
                  whileInView={{ strokeDashoffset: 753 * (1 - 0.997) }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-sm text-primary uppercase tracking-widest mb-1">Precision</div>
                <div className="text-4xl font-mono font-bold text-foreground">99.7%</div>
              </div>
            </div>

            {/* Orbiting Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-10 left-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(10,116,128,0.6)] -translate-x-1/2" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}