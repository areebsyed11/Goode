"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Call or Request a Quote",
    desc: "Reach us by phone or fill out our contact form. We respond quickly — usually within minutes for emergencies.",
    color: "bg-brand-500",
  },
  {
    num: "2",
    title: "Free Diagnosis",
    desc: "We arrive on-time, diagnose the issue thoroughly, and explain what we find in plain language — no jargon.",
    color: "bg-[#f97316]",
  },
  {
    num: "3",
    title: "Upfront Quote",
    desc: "You get a clear, written estimate before any work starts. No hidden fees, no surprises at the end.",
    color: "bg-green-500",
  },
  {
    num: "4",
    title: "Clean, Durable Fix",
    desc: "We complete the repair or installation with care, clean up afterward, and confirm you're fully satisfied.",
    color: "bg-purple-500",
  },
];

export default function ProcessTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-shell py-24 sm:py-32 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm font-semibold text-brand-200 mb-5 backdrop-blur">
            Our Process
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Simple from first call to final fix.
          </h2>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            We make plumbing service stress-free with a clear, consistent process every time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-500 via-[#f97316] to-purple-500 hidden sm:block lg:hidden" />
          <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-500 via-[#f97316] to-purple-500 hidden lg:block -translate-x-1/2" />

          <div className="grid gap-8 sm:gap-0 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative sm:flex sm:gap-6 lg:flex-col lg:gap-0 lg:items-center lg:text-center"
              >
                <div className={`flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full ${step.color} text-white font-display text-xl font-bold shadow-lg z-10 relative`}>
                  {step.num}
                </div>
                <div className="mt-4 sm:mt-0 lg:mt-6 sm:pt-1 lg:pt-0 lg:px-4">
                  <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
