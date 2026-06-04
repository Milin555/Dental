import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar as CalendarIcon, Clock, User, Phone } from "lucide-react";

export default function BookAppointment() {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <section id="book" className="py-14 relative bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Book Your Consultation</h2>
          <p className="text-muted-foreground">Take the first step towards your perfect smile.</p>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
          {!success ? (
            <>
              {/* Progress */}
              <div className="flex items-center justify-between mb-12 relative">
                <div className="absolute left-0 right-0 h-1 bg-border top-1/2 -translate-y-1/2 z-0" />
                <div 
                  className="absolute left-0 h-1 bg-primary top-1/2 -translate-y-1/2 z-0 transition-all duration-500"
                  style={{ width: `${((step - 1) / 2) * 100}%` }}
                />
                
                {[1, 2, 3].map(i => (
                  <div 
                    key={i} 
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-500 ${
                      step >= i ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground border border-border'
                    }`}
                  >
                    {step > i ? <Check className="w-5 h-5" /> : i}
                  </div>
                ))}
              </div>

              <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); setStep(s => s + 1); }}>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      {['Cosmetic', 'Implants', 'Orthodontics', 'General Checkup'].map(service => (
                        <label key={service} className="cursor-pointer group">
                          <input type="radio" name="service" className="peer sr-only" required />
                          <div className="glass-panel p-6 rounded-xl border border-border peer-checked:border-primary peer-checked:bg-primary/5 transition-all text-center hover:bg-muted/50">
                            <span className="text-foreground font-medium group-hover:text-primary transition-colors">{service}</span>
                          </div>
                        </label>
                      ))}
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-4 bg-background p-4 rounded-xl border border-border">
                        <CalendarIcon className="text-primary" />
                        <input type="date" className="bg-transparent text-foreground outline-none w-full" required />
                      </div>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                        {['09:00 AM', '10:30 AM', '12:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'].map(time => (
                          <label key={time} className="cursor-pointer">
                            <input type="radio" name="time" className="peer sr-only" required />
                            <div className="py-3 text-center rounded-lg border border-border text-sm text-foreground peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground transition-all hover:border-primary/50">
                              {time}
                            </div>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <input type="text" placeholder="Full Name" required className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <input type="tel" placeholder="Phone Number" required className="w-full bg-background border border-border rounded-xl pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-12 flex justify-between">
                  {step > 1 ? (
                    <button type="button" onClick={() => setStep(s => s - 1)} className="px-8 py-4 text-foreground font-medium hover:text-primary transition-colors">
                      Back
                    </button>
                  ) : <div />}
                  <button type="submit" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-foreground hover:text-background transition-colors hover-magnetic flex items-center gap-2">
                    {step === 3 ? "Confirm Booking" : "Continue"}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(10,116,128,0.4)]">
                  <Check className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-3xl font-display font-bold text-foreground mb-2">Appointment Confirmed!</h3>
              <p className="text-muted-foreground">Our team will contact you shortly to confirm the details.</p>
              <button onClick={() => { setStep(1); setSuccess(false); }} className="mt-8 text-primary font-medium hover:text-foreground transition-colors border-b border-primary hover:border-foreground">
                Book another session
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}