import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
  image: string;
  quote: string;
  author: string;
  isMissingTooth?: boolean;
}

function CaseStudyCard({ image, quote, author, isMissingTooth }: CaseStudyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col gap-5">
      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative aspect-square rounded-[2rem] overflow-hidden cursor-ew-resize border border-black/5 select-none bg-muted shadow-sm"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* After Image (Full Color - Bottom layer) */}
        <img
          src={image}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <span className="absolute top-4 right-4 bg-black/30 text-[11px] font-black text-white px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm z-10">
          After
        </span>

        {/* Before Image (Grayscale - Top clipped layer) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={image}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover grayscale pointer-events-none"
          />

          {/* Custom missing tooth overlay for Walter! */}
          {isMissingTooth && (
            <div
              className="absolute bg-[#1a1210] pointer-events-none rounded-sm"
              style={{
                // Positioned on Walter's front tooth
                left: '52.5%',
                top: '58.5%',
                width: '3.5%',
                height: '4.5%',
                transform: 'translate(-50%, -50%) rotate(4deg)',
                opacity: sliderPosition > 52.5 ? 1 : 0
              }}
            />
          )}

          <span className="absolute top-4 left-4 bg-black/30 text-[11px] font-black text-white px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm z-10">
            Before
          </span>
        </div>

        {/* Vertical line slider handle */}
        <div
          className="absolute top-0 bottom-0 w-[1.5px] bg-white z-20"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Handle circle button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
          </div>
        </div>
      </div>

      {/* Quote and Author Text */}
      <div className="flex flex-col gap-2.5 px-2">
        <p className="text-sm md:text-base font-semibold text-foreground/80 leading-relaxed min-h-[72px]">
          "{quote}"
        </p>
        <span className="text-xs md:text-sm font-black text-foreground/50">
          — {author}
        </span>
      </div>
    </div>
  );
}

export default function SmileTransformation() {
  const caseStudies = [
    {
      image: "/images/roberto_case_study.png",
      quote: "They spent an hour on my consultation, showed me a digital preview, and let me decide on my own time. No pressure, just great results.",
      author: "Roberto, 36"
    },
    {
      image: "/images/sara_case_study.png",
      quote: "I'd been putting off implants for years because I didn't trust the clinics I'd visited. Dental Clinic walked me through every scan, every step, and every cost before anything started.",
      author: "Sara, 57"
    },
    {
      image: "/images/walter_case_study.png",
      quote: "I'd lost my front tooth in an accident and spent two years barely smiling. The implant looks so natural that even my wife forgets which tooth it is.",
      author: "Walter, 52",
      isMissingTooth: true
    }
  ];

  return (
    <section id="transformation" className="py-20 bg-white px-6 md:px-12 lg:px-16">
      <div className="container mx-auto">

        {/* Title */}
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 text-[12px] font-bold text-foreground/70">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Case Studies</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Your Smile is Worth a 1000 Words
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <CaseStudyCard
                image={study.image}
                quote={study.quote}
                author={study.author}
                isMissingTooth={study.isMissingTooth}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}