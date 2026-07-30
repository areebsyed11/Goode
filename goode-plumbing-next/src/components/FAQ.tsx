"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do you offer emergency plumbing service?",
    a: "Yes. We prioritize emergency calls and respond as quickly as possible. For active leaks, burst pipes, or sewage backups, call (559) 451-1887 and we'll dispatch help right away.",
  },
  {
    q: "How much does a plumbing service call cost?",
    a: "We provide free estimates before any work begins. The cost depends on the issue and complexity, but we always give you a clear, written quote upfront — no surprise charges.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. Goode Plumbing is fully licensed (Lic. #941110) and carries full liability insurance, giving you complete peace of mind on every job.",
  },
  {
    q: "What areas do you serve?",
    a: "Our primary service area is Clovis, CA, and we also serve Fresno, Madera, Sanger, Selma, and surrounding Central Valley communities. Call to confirm coverage for your area.",
  },
  {
    q: "Can you repair or replace my water heater?",
    a: "Yes — both tank and tankless water heaters. We'll diagnose the issue, recommend the most cost-effective solution, and complete the repair or installation the same day when possible.",
  },
  {
    q: "How soon can someone come out?",
    a: "For non-emergency jobs we typically schedule within 1–2 business days. For emergencies we respond as quickly as possible, often the same day.",
  },
  {
    q: "Do you offer warranties on your work?",
    a: "Yes. We stand behind our workmanship. If an issue related to our work recurs, we'll come back and make it right at no additional cost to you.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border-b border-slate-200 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">{q}</span>
        <ChevronDown
          className={`h-5 w-5 text-slate-500 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-brand-600" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <p className="pb-5 text-slate-600 leading-relaxed">{a}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-shell py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full bg-brand-50 border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-800 mb-5">
              FAQ
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight">
              Common questions answered.
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Can&apos;t find your answer here? Call us directly and we&apos;ll help right away.
            </p>
            <a
              href="tel:+15594511887"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-900 hover:bg-brand-800 px-6 py-3.5 text-sm font-bold text-white transition-colors"
            >
              Call (559) 451-1887
            </a>
          </motion.div>

          <div className="surface-card rounded-[1.8rem] px-7 py-2 shadow-lg">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
