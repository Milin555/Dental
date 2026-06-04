import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock, Calendar } from "lucide-react";

export default function Footer() {
  const services = [
    "Dental Implants",
    "Dental Veneers",
    "Dental Prosthetics",
    "Dental Treatment",
    "Teeth Whitening",
    "Dental Hygiene"
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Clinic", href: "/our-clinic" },
    { label: "Dentists", href: "/dentists" },
    { label: "Dental News", href: "/blog" },
    { label: "Contact Us", href: "/contact" }
  ];

  return (
    <footer className="bg-[#12160d] text-white border-t border-[#232918]">
      
      {/* Inset Call to Action (CTA) Banner inside Footer */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 pt-16">
        <div className="bg-primary/95 text-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl border border-white/5 relative overflow-hidden">
          {/* Decorative subtle background glows */}
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-60 h-60 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-[600px] flex flex-col gap-3 relative z-10 text-center lg:text-left">
            <span className="text-[11px] font-black uppercase tracking-wider bg-white/10 px-3.5 py-1.5 rounded-full w-fit mx-auto lg:mx-0">
              Transform Your Smile
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight">
              Ready to meet your dental specialists?
            </h3>
            <p className="text-white/80 text-sm md:text-base font-semibold leading-relaxed mt-1">
              Book a consultation online today or give us a call. We look forward to welcoming you to our modern clinic.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0 relative z-10">
            <Link 
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 pl-6 pr-3 py-3.5 rounded-full bg-white text-[#5d7a22] text-[15px] font-bold hover:bg-[#f4f5f3] transition-all shadow-md group hover-magnetic"
            >
              <span>Book Online</span>
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-[#5d7a22] group-hover:scale-105 transition-transform">
                <Calendar className="w-4 h-4" />
              </span>
            </Link>
            <a 
              href="tel:+919999999999"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white text-[15px] font-bold hover:bg-white/10 transition-all hover:scale-[1.02]"
            >
              <Phone className="w-4.5 h-4.5" />
              <span>+91 99999 99999</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links Grid */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-8">
            <div>
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group mb-6">
                <div className="flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 3C10.5 5 10.5 8 12 10C13.5 8 13.5 5 12 3Z" fill="currentColor" />
                    <path d="M12 21C13.5 19 13.5 16 12 14C10.5 16 10.5 19 12 21Z" fill="currentColor" />
                    <path d="M3 12C5 13.5 8 13.5 10 12C8 10.5 5 10.5 3 12Z" fill="currentColor" />
                    <path d="M21 12C19 10.5 16.5 10.5 14 12C16.5 13.5 19 13.5 21 12Z" fill="currentColor" />
                    <circle cx="12" cy="12" r="1.5" fill="#5d7a22" />
                  </svg>
                </div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white">
                  Dental Clinic
                </span>
              </Link>
              
              <p className="text-[14px] text-white/60 leading-relaxed font-semibold max-w-[320px]">
                Precision. Transparency. Care. We bring dental surgery, implants, and aesthetic makeovers to a whole new standard of comfort.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#12160d] transition-all hover:scale-105"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#12160d] transition-all hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#12160d] transition-all hover:scale-105"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3">
            <span className="text-[11px] font-black uppercase tracking-wider text-white/40 mb-6 block">
              Services
            </span>
            <ul className="flex flex-col gap-3.5">
              {services.map((item, i) => (
                <li key={i}>
                  <Link href="/services" className="text-[15px] font-bold text-white/70 hover:text-white transition-colors whitespace-nowrap">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-white/40 mb-6 block">
              Quick Links
            </span>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-[15px] font-bold text-white/70 hover:text-white transition-colors whitespace-nowrap">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-white/40 mb-6 block">
              Contact Info
            </span>
            <ul className="flex flex-col gap-4">
              
              {/* Email */}
              <li className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/75 bg-white/5">
                  <Mail className="w-4 h-4 text-white/80" />
                </div>
                <a href="mailto:info@dentalclinic.com" className="text-[14px] md:text-[15px] font-bold text-white/70 hover:text-white transition-colors leading-snug whitespace-nowrap">
                  info@dentalclinic.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/75 bg-white/5">
                  <Phone className="w-4 h-4 text-white/80" />
                </div>
                <a href="tel:+919999999999" className="text-[14px] md:text-[15px] font-bold text-white/70 hover:text-white transition-colors leading-snug whitespace-nowrap">
                  +91 99999 99999
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/75 bg-white/5 mt-0.5 shrink-0">
                  <MapPin className="w-4 h-4 text-white/80" />
                </div>
                <a href="https://maps.google.com/?q=My+Dental+Clinic+Mumbai+Mumbai" target="_blank" rel="noopener noreferrer" className="text-[14px] md:text-[15px] font-bold text-white/70 hover:text-white transition-colors leading-relaxed">
                  123 Health Avenue, Andheri West, Mumbai, Maharashtra 400053
                </a>
              </li>

              {/* Hours */}
              <li className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/75 bg-white/5">
                  <Clock className="w-4 h-4 text-white/80" />
                </div>
                <span className="text-[14px] md:text-[15px] font-bold text-white/50 leading-snug whitespace-nowrap">
                  Mon. to Sat. 9:00 - 18:00
                </span>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#0b0e08] border-t border-[#1a1f14] py-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs md:text-[13px] font-bold text-white/30">
            © 2026 Dental Clinic. All rights reserved.
          </span>
          <span className="text-xs md:text-[13px] font-bold text-white/30 flex items-center gap-1.5 font-semibold">
            Designed by <a href="https://ponderdigital.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors underline">ponderdigital.com</a>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors underline">Privacy Policy</Link>
          </span>
        </div>
      </div>

    </footer>
  );
}
