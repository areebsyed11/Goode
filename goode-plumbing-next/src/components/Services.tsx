"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    emoji: "01",
    title: "Drain Cleaning",
    desc: "Fast, clean clearing for kitchen, bath, and main line clogs that keeps damage and downtime small.",
    highlight: true,
  },
  {
    emoji: "02",
    title: "Water Heaters",
    desc: "Repair or replace tank and tankless systems with honest recommendations and minimal disruption.",
    highlight: false,
  },
  {
    emoji: "03",
    title: "Leak Repair",
    desc: "Detect the source, stop water loss, and protect walls, floors, and ceilings before costs compound.",
    highlight: false,
  },
  {
    emoji: "04",
    title: "Sewer Service",
    desc: "Camera inspection, hydro-jetting, and line repair that restores dependable flow without guesswork.",
    highlight: false,
  },
  {
    emoji: "05",
    title: "Emergency Plumbing",
    desc: "Urgent leak or backup? We prioritize emergencies to keep the disruption as small as possible.",
    highlight: false,
  },
  {
    emoji: "06",
    title: "Commercial Plumbing",
    desc: "Reliable service for local shops, offices, and properties with scheduling designed around your operation.",
    highlight: true,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`group rounded-[1.8rem] p-7 transition-all duration-300 card-hover ${
        service.highlight
          ? "bg-gradient-to-br from-brand-800 to-slate-900 border border-brand-500/40 shadow-xl shadow-brand-900/30"
          : "bg-slate-50 border border-slate-200 hover:bg-white hover:border-brand-200"
      }`}
    >
      <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-black ${service.highlight ? "bg-white/10 text-white" : "bg-brand-900 text-white"}`}>
        {service.emoji}
      </div>
      <h3 className={`font-display text-xl font-bold mb-3 ${service.highlight ? "text-white" : "text-slate-950"}`}>{service.title}</h3>
      <p className={`text-sm leading-relaxed ${service.highlight ? "text-brand-100" : "text-slate-600"}`}>
        {service.desc}
      </p>
      {service.highlight && (
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-6 text-sm font-bold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white/70 transition-all"
        >
          Talk to us about your project →
        </button>
      )}
    </motion.article>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-shell py-24 sm:py-32 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="inline-flex items-center rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm font-semibold text-brand-200 mb-5 backdrop-blur">
            Services
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            The plumbing help Clovis customers need most.
          </h2>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            From a slow drain to a water heater that stops keeping up, Goode Plumbing gives you a practical answer,
            honest pricing, and a clean finish every time.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-[1.8rem] bg-gradient-to-r from-[#f97316]/15 to-brand-800/30 border border-[#f97316]/20 p-7"
        >
          <div>
            <p className="font-display text-xl font-bold text-white">Need help right now?</p>
            <p className="mt-1 text-slate-300">Call for a free estimate and same-day service when available.</p>
          </div>
          <a
            href="tel:+15594511887"
            className="flex-shrink-0 rounded-full bg-[#f97316] hover:bg-[#ea6c0a] px-7 py-3.5 text-sm font-bold text-white transition-all shadow-lg shadow-[#f97316]/25 hover:-translate-y-0.5"
          >
            Call (559) 451-1887
          </a>
        </motion.div>
      </div>
    </section>
  );
}
