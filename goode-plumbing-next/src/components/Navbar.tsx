"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#projects", label: "Projects" },
  { href: "#before-after", label: "Before & After" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 group" aria-label="Goode Plumbing home">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-[#f97316] shadow-lg shadow-brand-500/30 group-hover:shadow-[#f97316]/30 transition-all duration-300">
                <Droplets className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-display text-lg font-bold text-white leading-tight">Goode Plumbing</div>
                <div className="text-[10px] font-medium text-brand-300 tracking-widest uppercase leading-none">Clovis, CA</div>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="nav-underline text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+15594511887"
                className="flex items-center gap-2 rounded-full bg-[#f97316] hover:bg-[#ea6c0a] px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 shadow-lg shadow-[#f97316]/20 hover:shadow-[#f97316]/40 hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                (559) 451-1887
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white hover:bg-white/5 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-slate-950 border-l border-white/10 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="font-display text-lg font-bold text-white">Goode Plumbing</div>
                  <button onClick={() => setIsOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <nav className="flex flex-col gap-1 flex-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className="text-left px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
                <div className="space-y-3 mt-auto">
                  <a href="tel:+15594511887" className="flex items-center justify-center gap-2 w-full rounded-full bg-[#f97316] px-5 py-3.5 text-sm font-bold text-white shadow-lg">
                    <Phone className="h-4 w-4" />
                    Call (559) 451-1887
                  </a>
                  <a href="https://wa.me/15594511887" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full rounded-full bg-green-500 px-5 py-3.5 text-sm font-bold text-white">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
