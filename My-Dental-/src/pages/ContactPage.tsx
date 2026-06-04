import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, MapPin, Mail, Clock, ArrowRight, ArrowLeft, CheckCircle2, Calendar, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

export default function ContactPage() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    dentist: "",
    comment: "",
    agree: false
  });

  const services = [
    { name: "Dental Implants", slug: "dental-implants", icon: "🦷" },
    { name: "Dental Veneers", slug: "dental-veneers", icon: "✨" },
    { name: "Dental Prosthetics", slug: "dental-prosthetics", icon: "💎" },
    { name: "Dental Treatment", slug: "dental-treatment", icon: "⚡" },
    { name: "Teeth Whitening", slug: "teeth-whitening", icon: "🌟" },
    { name: "Dental Hygiene", slug: "dental-hygiene", icon: "🧼" }
  ];

  const dentists = [
    { name: "Dr. Vishal", slug: "dr-vishal", role: "Founder & Lead Dentist", image: "/images/dr_michael_reynolds.png" },
    { name: "Dr. Aditi", slug: "aditi", role: "Co-Founder | Pediatric Dentist", image: "/images/dr_emily_carter.png" }
  ];

  const handleServiceSelect = (serviceName: string) => {
    setFormData({ ...formData, service: serviceName });
    setTimeout(() => setStep(2), 300); // Smooth auto-advance
  };

  const handleDentistSelect = (dentistName: string) => {
    setFormData({ ...formData, dentist: dentistName });
    setTimeout(() => setStep(3), 300); // Smooth auto-advance
  };

  const handleTimeSelect = (slotName: string) => {
    setFormData({ ...formData, time: slotName });
    setTimeout(() => setStep(4), 300); // Smooth auto-advance
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all contact details and choose preferred date/time.",
        variant: "destructive"
      });
      return;
    }
    if (!formData.agree) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the privacy policy to book your consultation.",
        variant: "destructive"
      });
      return;
    }

    setStep(5); // Advance to success step
    toast({
      title: "Appointment Requested!",
      description: "Our clinical team will contact you within 24 hours to confirm.",
      variant: "default"
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      dentist: "",
      comment: "",
      agree: false
    });
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      <Navbar />

      {/* Michelangelo Header Banner */}
      <section className="pt-32 pb-6 px-6 md:px-12 lg:px-16 bg-white border-b border-border/40">
        <div className="container mx-auto max-w-6xl">
          <div className="relative w-full h-[200px] md:h-[280px] rounded-[2.5rem] overflow-hidden border border-black/5 shadow-sm bg-white group">
            <img 
              src="/images/contact_hands_banner.png" 
              alt="Contact Hands Banner" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none" />
            <h1 className="absolute bottom-8 left-8 text-4xl md:text-5xl lg:text-[56px] font-extrabold text-foreground tracking-tight leading-none">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-16 flex-grow">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Form / Wizard */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] border border-border/80 p-8 md:p-10 shadow-sm flex flex-col justify-between min-h-[550px]">
            <div>
              {/* Wizard Title & Step Indicators */}
              <div className="flex items-center justify-between border-b border-border/50 pb-4 mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                    Book a Consultation
                  </h2>
                  <p className="text-xs text-foreground/50 font-bold mt-1">
                    {step === 1 && "Step 1: Choose a dental department/treatment"}
                    {step === 2 && "Step 2: Select your specialist doctor"}
                    {step === 3 && "Step 3: Choose consultation date & session slot"}
                    {step === 4 && "Step 4: Provide contact & scheduling parameters"}
                    {step === 5 && "Step 5: Request received!"}
                  </p>
                </div>
                {step < 5 && (
                  <span className="text-xs font-black text-primary bg-primary/5 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    Step {step} of 4
                  </span>
                )}
              </div>

              {/* Step Progress Line */}
              {step < 5 && (
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden mb-8">
                  <div 
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>
              )}

              {/* Dynamic Booking Slip Preview */}
              {step > 1 && step < 5 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-6 bg-[#fbfbf9] border border-dashed border-border/80 rounded-2xl relative overflow-hidden flex flex-col gap-4 shadow-sm"
                >
                  {/* Receipt styled cutouts */}
                  <div className="absolute top-1/2 -left-2.5 w-5 h-5 bg-white border-r border-border/40 rounded-full -translate-y-1/2" />
                  <div className="absolute top-1/2 -right-2.5 w-5 h-5 bg-white border-l border-border/40 rounded-full -translate-y-1/2" />

                  <div className="flex justify-between items-center border-b border-border/40 pb-2">
                    <span className="text-[10px] font-black text-primary uppercase tracking-wider">
                      Appointment Booking Slip
                    </span>
                    <span className="text-[9px] font-extrabold text-foreground/30 uppercase tracking-widest">
                      Dental Clinic
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold text-foreground/80 pl-2">
                    {formData.service && (
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[9px] text-foreground/45 uppercase tracking-wide">Department</span>
                        <span className="text-foreground truncate">{formData.service}</span>
                      </div>
                    )}
                    {formData.dentist && (
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[9px] text-foreground/45 uppercase tracking-wide">Specialist</span>
                        <span className="text-foreground truncate">{formData.dentist}</span>
                      </div>
                    )}
                    {(formData.date || formData.time) && (
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[9px] text-foreground/45 uppercase tracking-wide">Schedule</span>
                        <span className="text-foreground truncate">
                          {formData.date ? formData.date : ""} {formData.time ? `@ ${formData.time.split(" ")[0]}` : ""}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Wizard Step Views */}
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-6"
                  >
                    <h3 className="text-lg font-extrabold text-foreground tracking-tight flex items-center gap-2">
                      <div className="text-primary shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 3C10.5 5 10.5 8 12 10C13.5 8 13.5 5 12 3Z" fill="currentColor" />
                          <path d="M12 21C13.5 19 13.5 16 12 14C10.5 16 10.5 19 12 21Z" fill="currentColor" />
                          <path d="M3 12C5 13.5 8 13.5 10 12C8 10.5 5 10.5 3 12Z" fill="currentColor" />
                          <path d="M21 12C19 10.5 16.5 10.5 14 12C16.5 13.5 19 13.5 21 12Z" fill="currentColor" />
                          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                        </svg>
                      </div>
                      <span>Select Department / Service</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {services.map((service, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleServiceSelect(service.name)}
                          className={`p-6 rounded-2xl border text-left flex flex-col justify-center gap-1.5 transition-all duration-200 group ${
                            formData.service === service.name
                              ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary/30"
                              : "border-border/80 hover:border-primary/40 bg-[#fbfbf9]"
                          }`}
                        >
                          <span className="block text-base font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                            {service.name}
                          </span>
                          <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-wider">
                            Clinical Department
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="p-2 rounded-full border border-border/80 text-foreground/60 hover:text-primary hover:border-primary/30 hover:bg-[#fbfbf9] transition-all"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <h3 className="text-lg font-extrabold text-foreground tracking-tight flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" />
                        <span>Select Specialist Dentist</span>
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {dentists.map((doc, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleDentistSelect(doc.name)}
                          className={`p-4 rounded-2xl border text-left flex items-center gap-3.5 transition-all duration-200 group ${
                            formData.dentist === doc.name
                              ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary/30"
                              : "border-border/80 hover:border-primary/40 bg-[#fbfbf9]"
                          }`}
                        >
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-[#f4f5f3] border border-black/5 shrink-0">
                            <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top" />
                          </div>
                          <div>
                            <span className="block text-sm font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                              {doc.name}
                            </span>
                            <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-wider block">
                              {doc.role}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="p-2 rounded-full border border-border/80 text-foreground/60 hover:text-primary hover:border-primary/30 hover:bg-[#fbfbf9] transition-all"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <h3 className="text-lg font-extrabold text-foreground tracking-tight flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>Select Date & Time Session</span>
                      </h3>
                    </div>

                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-black text-foreground/50 uppercase tracking-wider">
                          1. Choose Consultation Date
                        </label>
                        <input 
                          type="date" 
                          required
                          value={formData.date}
                          onChange={e => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border/80 focus:border-primary/50 text-sm font-semibold outline-none bg-[#fbfbf9]"
                        />
                      </div>

                      {formData.date && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex flex-col gap-3"
                        >
                          <label className="text-[10px] font-black text-foreground/50 uppercase tracking-wider">
                            2. Select Preferred Session Slot (2 Hours)
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              "09:00 AM - 11:00 AM",
                              "11:00 AM - 01:00 PM",
                              "01:00 PM - 03:00 PM",
                              "03:00 PM - 05:00 PM",
                              "05:00 PM - 07:00 PM"
                            ].map((slot, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => handleTimeSelect(slot)}
                                className={`py-3 px-4 rounded-xl border text-center text-sm font-bold transition-all duration-200 ${
                                  formData.time === slot
                                    ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary/30 text-primary"
                                    : "border-border/80 hover:border-primary/40 bg-[#fbfbf9] text-foreground/80"
                                }`}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="p-2 rounded-full border border-border/80 text-foreground/60 hover:text-primary hover:border-primary/30 hover:bg-[#fbfbf9] transition-all"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <h3 className="text-lg font-extrabold text-foreground tracking-tight flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" />
                        <span>Enter Contact Details</span>
                      </h3>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-black text-foreground/50 uppercase tracking-wider">Your Name</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Jane Smith"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-border/80 focus:border-primary/50 text-sm font-semibold outline-none bg-[#fbfbf9]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] font-black text-foreground/50 uppercase tracking-wider">Email Address</label>
                          <input 
                            type="email" 
                            required
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-border/80 focus:border-primary/50 text-sm font-semibold outline-none bg-[#fbfbf9]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] font-black text-foreground/50 uppercase tracking-wider">Phone Number</label>
                          <input 
                            type="tel" 
                            required
                            placeholder="+12249220444"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-border/80 focus:border-primary/50 text-sm font-semibold outline-none bg-[#fbfbf9]"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-black text-foreground/50 uppercase tracking-wider">Comment / Symptoms</label>
                        <textarea 
                          placeholder="Leave any comments here..."
                          rows={3}
                          value={formData.comment}
                          onChange={e => setFormData({ ...formData, comment: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-border/80 focus:border-primary/50 text-sm font-semibold outline-none bg-[#fbfbf9] resize-none"
                        />
                      </div>

                      {/* Checkbox */}
                      <div className="flex items-start gap-2.5 mt-1">
                        <input 
                          type="checkbox" 
                          id="agree"
                          required
                          checked={formData.agree}
                          onChange={e => setFormData({ ...formData, agree: e.target.checked })}
                          className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20 mt-0.5 cursor-pointer"
                        />
                         <label htmlFor="agree" className="text-xs text-foreground/60 leading-relaxed font-semibold cursor-pointer">
                          I agree to the <a href="/privacy-policy" className="underline hover:text-primary transition-colors">Privacy Policy</a> and agree to be contacted by Dental Clinic
                        </label>
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-3.5 mt-2 rounded-xl bg-primary text-white font-extrabold text-[15px] hover:bg-primary/95 transition-all shadow-md cursor-pointer hover-magnetic text-center"
                      >
                        Request Consultation
                      </button>
                    </form>
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center justify-center text-center gap-6 py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-foreground tracking-tight">
                        Booking Request Received!
                      </h3>
                      <p className="text-sm text-foreground/50 font-bold mt-1.5 max-w-[400px] leading-relaxed mx-auto">
                        Our clinical coordinators are reviewing your profile and will contact you within 24 hours to confirm your scheduled slot.
                      </p>
                    </div>

                    {/* Booking Details Summary */}
                    <div className="w-full max-w-[440px] bg-[#fbfbf9] border border-border/80 rounded-2xl p-5 text-left flex flex-col gap-3.5">
                      <span className="text-[10px] font-black text-foreground/40 uppercase tracking-wider border-b border-border/40 pb-2">
                        Request Parameters
                      </span>
                      <div className="flex justify-between items-center text-sm font-bold">
                        <span className="text-foreground/45">Department:</span>
                        <span className="text-foreground">{formData.service}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-bold">
                        <span className="text-foreground/45">Specialist:</span>
                        <span className="text-foreground">{formData.dentist}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-bold">
                        <span className="text-foreground/45">Preferred Session slot:</span>
                        <span className="text-foreground">{formData.date} at {formData.time}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-xl border border-border text-foreground hover:bg-[#fbfbf9] text-sm font-extrabold transition-all"
                    >
                      Book Another Consultation
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Contact Info & Google Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Contact Info Card */}
            <div className="bg-white rounded-[2rem] border border-border/80 p-8 shadow-sm">
              <div className="mb-6">
                <h2 className="text-2xl font-extrabold text-foreground tracking-tight">
                  Contact Info
                </h2>
                <p className="text-xs text-foreground/50 font-bold mt-1">
                  Don't hesitate to reach out, we'll answer all questions.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                {/* Phone */}
                <a 
                  href="tel:+919999999999" 
                  className="flex items-center justify-between py-2 border-b border-border/40 group hover:bg-[#fbfbf9]/40 px-2 rounded-xl transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Phone className="w-4.5 h-4.5 fill-current" />
                    </div>
                    <div>
                      <div className="text-[11px] font-black text-foreground/40 uppercase tracking-wider">Phone number</div>
                      <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">+91 99999 99999</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    <span>Call</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </a>

                {/* Address */}
                <a 
                  href="https://maps.google.com/?q=My+Dental+Clinic+Mumbai+Mumbai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between py-2 border-b border-border/40 group hover:bg-[#fbfbf9]/40 px-2 rounded-xl transition-all"
                >
                  <div className="flex items-center gap-3 max-w-[70%]">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-black text-foreground/40 uppercase tracking-wider">Address</div>
                      <div className="text-xs md:text-sm font-bold text-foreground leading-tight group-hover:text-primary transition-colors">123 Health Avenue, Andheri West, Mumbai, Maharashtra 400053</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    <span>See Map</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </a>

                {/* Email */}
                <a 
                  href="mailto:info@dentalclinic.com" 
                  className="flex items-center justify-between py-2 border-b border-border/40 group hover:bg-[#fbfbf9]/40 px-2 rounded-xl transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-black text-foreground/40 uppercase tracking-wider">Email</div>
                      <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">info@dentalclinic.com</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    <span>Email</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </a>

                {/* Working Hours */}
                <div className="flex items-center gap-3 py-2 px-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-foreground/40 uppercase tracking-wider">Working Hours</div>
                    <div className="text-sm font-bold text-foreground">Mon. to Sat. 9:00AM - 6:00PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-[260px] rounded-[2rem] overflow-hidden border border-border/80 shadow-sm bg-white">
              <iframe 
                title="Dental Clinic Location"
                src="https://maps.google.com/maps?q=My%20Dental%20Clinic%20Mumbai%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-none"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
