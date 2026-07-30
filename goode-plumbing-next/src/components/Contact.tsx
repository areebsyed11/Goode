"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const services = [
  "Drain Cleaning",
  "Water Heater Repair",
  "Water Heater Installation",
  "Leak Repair",
  "Sewer Service",
  "Emergency Plumbing",
  "Commercial Plumbing",
  "Other",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="section-shell py-24 sm:py-32 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="inline-flex items-center rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm font-semibold text-brand-200 mb-5 backdrop-blur">
            Contact
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Request a free quote or call right now.
          </h2>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            Use the form for general requests, or call directly for faster help with active leaks, clogs, or backups.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="dark-card rounded-[1.8rem] p-7 sm:p-9"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 mb-5">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">Request Received!</h3>
                <p className="text-slate-400 max-w-sm">
                  Thanks! We&apos;ll follow up shortly. For urgent issues, don&apos;t wait — call us directly at (559) 451-1887.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-2xl bg-white/8 border border-white/12 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Phone Number *</label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-2xl bg-white/8 border border-white/12 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all text-sm"
                      placeholder="(559) 555-0100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-2xl bg-white/8 border border-white/12 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Service Needed</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded-2xl bg-white/8 border border-white/12 px-4 py-3.5 text-white outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all text-sm"
                    >
                      <option value="" className="bg-brand-950">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-brand-950">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-2xl bg-white/8 border border-white/12 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/20 transition-all text-sm resize-none"
                    placeholder="Describe the plumbing issue or project. Mention if it's urgent."
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2.5 rounded-full bg-[#f97316] hover:bg-[#ea6c0a] px-7 py-4 text-sm font-bold text-white transition-all shadow-lg shadow-[#f97316]/25 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Request
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-400">
                    For emergencies, call directly at{" "}
                    <a href="tel:+15594511887" className="text-brand-400 hover:text-brand-300 font-semibold">
                      (559) 451-1887
                    </a>
                  </p>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact details */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="rounded-[1.8rem] bg-gradient-to-br from-brand-800 to-brand-900 border border-brand-700/50 p-7 text-white space-y-6 glow-blue">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <Phone className="h-5 w-5 text-brand-300" />
                  <div className="text-xs uppercase tracking-widest text-brand-300 font-bold">Phone</div>
                </div>
                <a href="tel:+15594511887" className="font-display text-3xl font-bold text-white hover:text-brand-200 transition-colors">
                  (559) 451-1887
                </a>
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <Mail className="h-4 w-4 text-brand-300" />
                  <div className="text-xs uppercase tracking-widest text-brand-300 font-bold">Email</div>
                </div>
                <a href="mailto:info@goodeplumbing.com" className="font-semibold text-white hover:text-brand-200 transition-colors break-all">
                  info@goodeplumbing.com
                </a>
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <MapPin className="h-4 w-4 text-brand-300" />
                  <div className="text-xs uppercase tracking-widest text-brand-300 font-bold">Address</div>
                </div>
                <div className="font-semibold text-white">1044 San Jose Ave Ste 102</div>
                <div className="text-brand-200">Clovis, CA 93612</div>
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <Clock className="h-4 w-4 text-brand-300" />
                  <div className="text-xs uppercase tracking-widest text-brand-300 font-bold">Hours</div>
                </div>
                <div className="text-brand-100 text-sm leading-relaxed">
                  Monday – Friday: 7:00 AM – 7:00 PM<br />
                  Saturday: 7:00 AM – 2:00 PM<br />
                  Sunday: On-call
                </div>
              </div>
            </div>
            <div className="rounded-[1.8rem] bg-white/5 border border-white/10 p-6">
              <div className="font-bold text-white mb-2">Emergency? Call First.</div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                If you have an active leak, backup, or flooding — don&apos;t fill out a form. Call immediately and we&apos;ll prioritize your situation.
              </p>
              <a
                href="tel:+15594511887"
                className="flex items-center justify-center gap-2 w-full rounded-full bg-[#f97316] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#ea6c0a] transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Emergency Line
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
