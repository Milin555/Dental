import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-border/80 last:border-b-0 py-5">
      <button 
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-2 text-foreground hover:text-primary transition-colors focus:outline-none"
      >
        <span className="text-base md:text-lg font-bold pr-4">{question}</span>
        <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground shrink-0 transition-colors">
          {isOpen ? <Minus className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground text-sm leading-relaxed pt-2 pb-4 pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are your dental treatments really pain-free?",
      answer: "We use state-of-the-art computerized sedation delivery (The Wand) and dental laser systems instead of traditional drills. This minimizes tissue damage and ensures comfortable, practically pain-free dental procedures."
    },
    {
      question: "What is digital smile designing, and how does it work?",
      answer: "Digital Smile Designing (DSD) is a treatment planning methodology that uses 3D facial photos and digital scans to analyze dental proportions. Before starting any treatment, we generate a high-def 3D mockup showing exactly how your teeth will look, allowing you to preview and co-design your final smile."
    },
    {
      question: "How long do porcelain veneers last?",
      answer: "Premium porcelain veneers typically last between 10 to 15 years, and in many cases even longer, if maintained with proper oral hygiene and regular clinical checkups."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we work with major healthcare and dental insurance providers. Our administrative team will help you verify your coverage and submit claims directly to maximize your benefits."
    },
    {
      question: "How do I schedule an emergency appointment?",
      answer: "For emergency care, please call our 24/7 hotline at +91 99999 99999. Emergency calls bypass standard queues and are immediately routed to our on-call specialists to receive priority scheduling."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background border-t border-border/40">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">Questions</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Frequently Asked Questions</h2>
        </div>

        <div className="glass-panel p-6 md:p-10 rounded-3xl border border-border">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i} 
              question={faq.question} 
              answer={faq.answer} 
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
