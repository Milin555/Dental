import { motion } from "framer-motion";
import { MessageSquare, Scan, FileCode, CheckCircle, HeartHandshake } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  delay?: number;
}

function ProcessStep({ number, title, desc, icon, delay = 0 }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="relative pl-12 pb-12 last:pb-0 group"
    >
      {/* Connector Line */}
      <div className="absolute left-6 top-12 bottom-0 w-px bg-border/60 group-last:hidden" />
      
      {/* Icon Circle */}
      <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shadow-sm z-10">
        {icon}
      </div>

      <div className="pt-1">
        <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1 block">Step {number}</span>
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function TreatmentProcess() {
  const steps = [
    {
      number: "01",
      title: "Consultation & Assessment",
      desc: "Discuss your goals and concerns in an introductory meeting. We perform a complete initial examination to understand your clinical needs.",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      number: "02",
      title: "3D Digital Diagnosis",
      desc: "Using high-definition digital impressions and low-radiation diagnostics, we capture a detailed 3D mapping of your facial and oral structure.",
      icon: <Scan className="w-5 h-5" />
    },
    {
      number: "03",
      title: "Custom Treatment Planning",
      desc: "We utilize advanced AI to design your smile and simulate the treatment path, giving you a digital preview of your final results before we begin.",
      icon: <FileCode className="w-5 h-5" />
    },
    {
      number: "04",
      title: "Precision Procedure",
      desc: "Our specialists execute the treatment plan using painless laser and computer-guided instrumentation to maximize comfort and outcome quality.",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      number: "05",
      title: "Personalized Follow-up",
      desc: "Receive customized maintenance guidelines and schedule quick support sessions to ensure your smile remains bright, healthy, and long-lasting.",
      icon: <HeartHandshake className="w-5 h-5" />
    }
  ];

  return (
    <section id="process" className="py-20 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Heading */}
          <div className="lg:sticky lg:top-24 h-fit">
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">The Journey</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Our Treatment Process</h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              We guide you step-by-step from initial scan to your final radiant smile, ensuring total clarity and zero discomfort throughout.
            </p>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-2">
            {steps.map((step, i) => (
              <ProcessStep 
                key={i} 
                number={step.number} 
                title={step.title} 
                desc={step.desc} 
                icon={step.icon}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
