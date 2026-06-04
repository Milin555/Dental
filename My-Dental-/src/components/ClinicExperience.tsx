import { motion } from "framer-motion";

export default function ClinicExperience() {
  const rooms = [
    { title: "Reception & Lounge", desc: "Where luxury meets calm", img: "clinic-1.png" },
    { title: "Treatment Suite", desc: "Precision technology, zero anxiety", img: "clinic-2.png" },
    { title: "Digital Planning Room", desc: "Your smile, designed digitally", img: "clinic-3.png" }
  ];

  return (
    <section className="py-14 relative bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground text-center mb-16">Step Inside</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="rounded-3xl overflow-hidden group relative h-[400px] cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url('/images/${room.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-bold text-white mb-2">{room.title}</h3>
                <p className="text-primary opacity-0 group-hover:opacity-100 transition-opacity delay-100">{room.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}