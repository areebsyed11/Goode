"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, Star, Clock, CheckCircle } from "lucide-react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setDisplayed(value); clearInterval(timer); }
      else setDisplayed(Math.floor(start));
    }, 25);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{displayed.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 12, suffix: "+", label: "Years in Business", icon: Shield },
  { value: 2400, suffix: "+", label: "Jobs Completed", icon: CheckCircle },
  { value: 127, suffix: "", label: "5-Star Reviews", icon: Star },
  { value: 60, suffix: " min", label: "Avg Response Time", icon: Clock },
];

const trustItems = [
  "Licensed Lic. #941110",
  "Fully Insured",
  "Free Estimates",
  "5-Star Rated",
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-slate-950 overflow-hidden" id="top">
      {/* BG decorations */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-600/18 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f97316]/12 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="relative flex-1 flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 rounded-full glass-dark border border-white/15 px-4 py-2 mb-7"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                <span className="text-sm font-semibold text-slate-200">Emergency service available now</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] max-w-3xl"
              >
                Premium plumbing service for homeowners who expect speed, clarity, and clean work.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl"
              >
                Drain cleaning, water heaters, leak repair, sewer service, and emergency plumbing across Clovis and the Central Valley.
                Clear pricing. Responsive communication. Work that looks as good as it performs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="tel:+15594511887"
                  className="group flex items-center justify-center gap-2.5 rounded-full bg-[#f97316] hover:bg-[#ea6c0a] px-7 py-4 text-base font-bold text-white transition-all duration-200 shadow-xl shadow-[#f97316]/25 hover:shadow-[#f97316]/50 hover:-translate-y-1"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: (559) 451-1887
                </a>
                <button
                  onClick={() => scrollTo("contact")}
                  className="group flex items-center justify-center gap-2.5 rounded-full dark-card border border-white/10 px-7 py-4 text-base font-bold text-white transition-all duration-200 hover:-translate-y-1"
                >
                  Request Free Quote
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
              >
                {trustItems.map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="font-medium text-slate-300">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="relative"
            >
              <div className="dark-card rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 p-6 border border-white/10 glow-blue">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-brand-300 mb-2">Goode Plumbing</div>
                      <div className="font-display text-2xl font-bold text-white">A premium service experience.</div>
                    </div>
                    <div className="flex-shrink-0 rounded-xl bg-[#f97316]/20 border border-[#f97316]/30 px-3 py-2 text-center">
                      <div className="text-xs font-bold text-[#f97316]">24/7</div>
                      <div className="text-xs text-[#f97316]/80">Emergency</div>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      { label: "Drain Cleaning", sub: "Clear blockages fast" },
                      { label: "Water Heaters", sub: "Repair or replace" },
                      { label: "Leak Repair", sub: "Stop damage now" },
                      { label: "Sewer Service", sub: "Full restoration" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl bg-white/8 border border-white/8 p-3.5">
                        <div className="text-sm font-bold text-white">{s.label}</div>
                        <div className="mt-0.5 text-xs text-brand-200">{s.sub}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between rounded-xl bg-white p-4">
                    <div>
                      <div className="text-xs font-semibold text-slate-500">Call us now</div>
                      <div className="font-display text-xl font-bold text-slate-900">(559) 451-1887</div>
                    </div>
                    <a href="tel:+15594511887" className="rounded-full bg-[#f97316] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#ea6c0a] transition-colors shadow-lg">
                      Tap to call
                    </a>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/5 border border-white/8 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-1.5">Hours</div>
                    <div className="text-sm font-semibold text-white">Mon–Fri 7am–7pm</div>
                    <div className="text-sm text-slate-400">Sat 7am–2pm</div>
                    <div className="text-sm text-slate-400">Sun on-call</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 border border-white/8 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-1.5">License</div>
                    <div className="text-sm font-bold text-white">Lic. #941110</div>
                    <div className="mt-2 text-xs text-slate-400">Licensed, certified & fully insured</div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 hidden lg:flex items-center gap-2 rounded-full bg-green-500 text-white px-4 py-2 text-sm font-bold shadow-xl shadow-green-500/30"
              >
                <span className="h-2 w-2 rounded-full bg-white" />
                Available Now
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10 bg-brand-900/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="text-center lg:px-8"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-sm font-medium text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
