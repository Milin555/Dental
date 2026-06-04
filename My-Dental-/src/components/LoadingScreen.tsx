import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 3], opacity: [0, 1, 0] }}
            transition={{ duration: 2, ease: "easeOut", repeat: Infinity }}
            className="absolute w-64 h-64 border border-primary/50 rounded-full"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 3], opacity: [0, 1, 0] }}
            transition={{ duration: 2, ease: "easeOut", repeat: Infinity, delay: 0.5 }}
            className="absolute w-64 h-64 border border-primary/30 rounded-full"
          />
          
          <div className="relative z-10 flex overflow-hidden">
            {"MY DENTAL CLINIC".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className={`text-3xl md:text-5xl font-display font-bold tracking-widest text-primary ${char === " " ? "w-4 md:w-8" : ""}`}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
