"use client";

import { motion } from "framer-motion";
import { ArrowRightLeft, Droplets, Gauge, Sparkles } from "lucide-react";

const contrasts = [
  {
    label: "Before",
    title: "Slow drains and repeat backups",
    points: ["Odor and standing water", "Unclear cause", "Stress and downtime"],
    tone: "from-rose-500/20 to-rose-500/5",
  },
  {
    label: "After",
    title: "Clean flow and a clear plan",
    points: ["Camera verification", "Targeted repair", "Reliable performance"],
    tone: "from-emerald-500/20 to-emerald-500/5",
  },
];

export default function ServiceArea() {
  return (
    <section id="before-after" className="section-shell py-24 sm:py-32 bg-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 rounded-[1.8rem] bg-slate-950 p-8 sm:p-12 text-white shadow-2xl lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm font-semibold text-brand-200 mb-5">
              <Sparkles className="h-4 w-4" />
              Before & After
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              A better before-and-after story for the homeowner.
            </h2>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-lg">
              The best plumbing work is easy to understand. Here is what changes when the issue is diagnosed correctly and fixed with care.
            </p>
            <a
              href="tel:+15594511887"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f97316] hover:bg-[#ea6c0a] px-7 py-4 text-base font-bold text-white transition-all shadow-lg hover:-translate-y-0.5"
            >
              Call for Fast Help
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {contrasts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`rounded-[1.4rem] border border-white/10 bg-gradient-to-br ${item.tone} p-5`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-300">{item.label}</div>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  {item.label === "Before" ? (
                    <Gauge className="h-6 w-6 text-rose-200" />
                  ) : (
                    <ArrowRightLeft className="h-6 w-6 text-emerald-200" />
                  )}
                </div>
                <ul className="mt-5 space-y-3 text-sm text-slate-100/90">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Droplets className="mt-0.5 h-4 w-4 text-brand-200 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
