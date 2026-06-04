import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

function StatItem({ value, suffix, label, delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalDuration = 2000; // 2 seconds
    const incrementTime = Math.max(Math.floor(totalDuration / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalDuration / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="text-center p-6 md:p-8 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="text-4xl md:text-6xl font-display font-extrabold text-primary mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs md:text-sm font-semibold tracking-wider text-muted-foreground uppercase">
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-12 bg-background relative z-10 border-b border-border/40">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatItem value={10000} suffix="+" label="Happy Patients" delay={0.1} />
          <StatItem value={15} suffix="+" label="Years Experience" delay={0.2} />
          <StatItem value={5000} suffix="+" label="Successful Treatments" delay={0.3} />
        </div>
      </div>
    </section>
  );
}
