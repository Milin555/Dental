import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background border-t border-border/40">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Contact Info */}
          <div>
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">Visit Our Clinic</h2>
            
            <div className="space-y-6">
              {/* Address */}
              <a 
                href="https://maps.google.com/?q=My+Dental+Clinic+Mumbai+Mumbai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex gap-4 group hover:bg-muted/50 p-2 rounded-2xl transition-all block text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-sm border border-primary/10 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Our Location</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Shop No:110, Glamor Complex, Mumbai Rd,<br />
                    near Vaibhav Apartment, Mumbai,<br />
                    Athwa, Mumbai, Gujarat 395006
                  </p>
                </div>
              </a>

              {/* Phone & Email */}
              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                <a 
                  href="tel:+919999999999" 
                  className="flex gap-4 group hover:bg-muted/50 p-2 rounded-2xl transition-all block text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-sm border border-primary/10 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Call Us</h4>
                    <p className="text-muted-foreground text-sm font-semibold">+91 99999 99999</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@dentalclinic.com" 
                  className="flex gap-4 group hover:bg-muted/50 p-2 rounded-2xl transition-all block text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-sm border border-primary/10 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Email Us</h4>
                    <p className="text-muted-foreground text-sm font-semibold">info@dentalclinic.com</p>
                  </div>
                </a>
              </div>

              {/* Hours */}
              <div className="flex gap-4 pt-2 p-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-sm border border-primary/10">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground mb-1">Working Hours</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Monday - Saturday: <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span><br />
                    Sunday: <span className="text-foreground font-medium">Closed</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-2xl bg-muted/30 border border-border/60 flex gap-4 items-center max-w-md">
              <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our clinic adheres strictly to premium sterilization protocols and international medical standards for your safety.
              </p>
            </div>
          </div>

          {/* Right: Real Google Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] rounded-3xl overflow-hidden border border-border shadow-md relative bg-muted"
          >
            <iframe 
              title="Dental Clinic Location"
              src="https://maps.google.com/maps?q=My%20Dental%20Clinic%20Mumbai%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-none"
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
