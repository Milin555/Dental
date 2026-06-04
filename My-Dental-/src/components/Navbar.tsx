import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "py-3 bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.04)] border-b border-border/50" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M12 3C10.5 5 10.5 8 12 10C13.5 8 13.5 5 12 3Z" fill="currentColor" />
              <path d="M12 21C13.5 19 13.5 16 12 14C10.5 16 10.5 19 12 21Z" fill="currentColor" />
              <path d="M3 12C5 13.5 8 13.5 10 12C8 10.5 5 10.5 3 12Z" fill="currentColor" />
              <path d="M21 12C19 10.5 16.5 10.5 14 12C16.5 13.5 19 13.5 21 12Z" fill="currentColor" />
              <circle cx="12" cy="12" r="1.5" fill="white" />
            </svg>
          </div>
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-foreground">
            Dental Clinic
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-foreground/80">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/our-clinic" className="hover:text-primary transition-colors">Our Clinic</Link>
          <Link href="/dentists" className="hover:text-primary transition-colors">Dentists</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">News</Link>
        </div>

        {/* Action Group */}
        <div className="flex items-center gap-3">
          {/* Book Online Button */}
          <Link 
            href="/contact"
            className="hidden sm:flex items-center gap-2 pl-6 pr-2.5 py-1.5 rounded-full bg-primary text-white text-[14px] font-bold hover:bg-primary/95 transition-all shadow-[0_4px_14px_rgba(93,122,34,0.15)] group hover-magnetic"
          >
            <span>Book Online</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
              <Calendar className="w-4 h-4" />
            </span>
          </Link>

          {/* Hamburger trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl border border-border/60 text-foreground hover:text-primary hover:border-primary/30 transition-all cursor-pointer bg-white/50 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg overflow-hidden flex flex-col px-6 py-8 gap-6 z-40"
            >
              <div className="flex flex-col gap-4 text-base font-bold text-foreground/80">
                <Link href="/" className="hover:text-primary transition-colors py-1.5 border-b border-border/40">Home</Link>
                <Link href="/services" className="hover:text-primary transition-colors py-1.5 border-b border-border/40">Services</Link>
                <Link href="/our-clinic" className="hover:text-primary transition-colors py-1.5 border-b border-border/40">Our Clinic</Link>
                <Link href="/dentists" className="hover:text-primary transition-colors py-1.5 border-b border-border/40">Dentists</Link>
                <Link href="/blog" className="hover:text-primary transition-colors py-1.5">News</Link>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-white text-[15px] font-extrabold hover:bg-primary/95 transition-all shadow-[0_4px_14px_rgba(93,122,34,0.15)] group w-full text-center"
              >
                <span>Book Online</span>
                <Calendar className="w-4.5 h-4.5" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
