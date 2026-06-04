import { motion } from "framer-motion";

export default function PatientStories() {
  const tags = ["Dental Implants", "Crowns", "Whitening"];

  return (
    <section id="stories" className="pb-16 bg-white px-6 md:px-12 lg:px-16">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-primary rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center shadow-xl border border-black/5"
        >
          {/* Left Column: Patient Image */}
          <div className="lg:col-span-5 relative w-full h-[320px] md:h-[420px] lg:h-[450px] rounded-[1.5rem] overflow-hidden shadow-md">
            <img 
              src="/images/sara_patient_testimonial.png" 
              alt="Sara - Patient" 
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay Badge */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full whitespace-nowrap">
              <span className="text-[10px] md:text-xs font-black tracking-widest text-white uppercase flex items-center gap-1.5">
                ✦ 2026 Top Implant Clinic ✦
              </span>
            </div>
          </div>

          {/* Right Column: Quotes & Info */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-white">
            {/* Stars */}
            <div className="text-yellow-400 text-[18px] md:text-[22px] tracking-wide font-sans">
              ★★★★★
            </div>

            {/* Main Testimonial Text */}
            <h3 className="text-2xl md:text-3xl lg:text-[34px] font-extrabold leading-[1.2] tracking-tight text-white max-w-[620px]">
              "Super clean clinic and a very friendly staff. The dentist took time to listen, offered options, and made sure I was comfortable the whole visit."
            </h3>

            {/* Secondary Testimonial Text */}
            <div className="flex flex-col gap-2 max-w-[550px] border-t border-white/10 pt-6">
              <p className="text-sm md:text-base font-semibold text-white/80 leading-relaxed">
                "They didn't rush anything. Every option was explained clearly, and the results speak for themselves."
              </p>
              <span className="text-xs md:text-sm font-black text-white/90">
                — Sara, 57
              </span>
            </div>

            {/* Bottom Treatment Pills */}
            <div className="flex flex-wrap gap-2.5 mt-2">
              {tags.map((tag, i) => (
                <span 
                  key={i}
                  className="px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-[11px] md:text-xs font-bold text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}