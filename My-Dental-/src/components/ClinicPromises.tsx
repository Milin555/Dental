import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

export default function ClinicPromises() {
  const promises = [
    {
      title: "Clear Plans, Clear Costs",
      description: "Clear recommendations, transparent pricing, and options you can choose with confidence.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "Gentle, Anxiety-Free Care",
      description: "Calm appointments, patient pacing, and comfort first techniques from start to finish.",
      icon: <HeartHandshake className="w-5 h-5" />
    },
    {
      title: "Premium Safe Materials",
      description: "Top tier ceramics and composites chosen for biocompatibility, comfort, and natural results.",
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  return (
    <section className="pb-20 bg-white px-6 md:px-12 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promises.map((promise, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-white border border-border/80 flex flex-col gap-6 hover:shadow-md hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                {promise.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-extrabold text-foreground tracking-tight">
                  {promise.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed font-semibold">
                  {promise.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
