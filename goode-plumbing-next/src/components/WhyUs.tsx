"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, DollarSign, MapPin, Award } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    num: "01",
    title: "Fast Response",
    desc: "We understand the difference between a nuisance and a water emergency. Urgent calls get prioritized so the right help arrives at the right time.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: DollarSign,
    num: "02",
    title: "Upfront Pricing",
    desc: "Clear estimates before we start. No surprise invoices. You always know what the fix will cost before any work begins.",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: MapPin,
    num: "03",
    title: "Local & Trusted",
    desc: "We know the Clovis area and bring a neighborly level of care to every visit. We are your neighbors, not a national franchise.",
    color: "text-brand-400",
    bg: "bg-brand-400/10",
  },
  {
    icon: Award,
    num: "04",
    title: "Work Done Right",
    desc: "Durable repairs, tidy job sites, and respectful service from the first call to the final walkthrough. We stand behind everything we do.",
    color: "text-[#f97316]",
    bg: "bg-[#f97316]/10",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="section-shell py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full bg-brand-50 border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-800 mb-5">
              Why Choose Us
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
              A local team built for speed, clarity, and clean results.
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Plumbing problems are stressful enough. Goode Plumbing keeps the process simple with prompt communication,
              straight answers, and work that looks as good as it performs.
            </p>
            <div className="mt-10 p-6 rounded-[1.8rem] bg-gradient-to-br from-brand-900 to-brand-700 text-white shadow-2xl shadow-brand-900/20">
              <div className="text-xs uppercase tracking-widest text-brand-300 mb-3">Our Promise</div>
              <p className="font-display text-xl font-bold leading-snug">
                If you&apos;re not satisfied with our work, we&apos;ll come back and make it right. No questions asked.
              </p>
              <a
                href="tel:+15594511887"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f97316] px-6 py-3 text-sm font-bold text-white hover:bg-[#ea6c0a] transition-colors shadow-lg"
              >
                Call to Discuss Your Project
              </a>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-[1.8rem] bg-white hover:bg-white border border-slate-200 hover:border-brand-200 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-brand-100/50 card-hover"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${r.bg}`}>
                      <Icon className={`h-6 w-6 ${r.color}`} />
                    </div>
                    <span className="font-display text-3xl font-black text-slate-200 group-hover:text-brand-200 transition-colors">
                      {r.num}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{r.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
