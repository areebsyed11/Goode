"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { BarChart3, BadgeCheck, Droplets, MoveRight } from "lucide-react";

const projects = [
  {
    title: "Historic home repipe",
    category: "Whole-home upgrade",
    outcome: "Reduced leaks, improved pressure, cleaner finish",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Restaurant drain restoration",
    category: "Emergency response",
    outcome: "Back in service the same day with a hydro-jet solution",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tankless water heater install",
    category: "Efficiency upgrade",
    outcome: "Endless hot water with a cleaner utility room layout",
    image: "https://images.unsplash.com/photo-1581579185169-3d4a0d0d9c57?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-shell py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="surface-card rounded-[1.8rem] p-8 sm:p-10"
          >
            <div className="inline-flex items-center rounded-full bg-brand-50 border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-800 mb-5">
              Recent Projects
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
              Work that raises the standard for what a plumbing company feels like.
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              These are the kinds of jobs that build trust: visible craftsmanship, clean execution, and a finished result that makes
              the property easier to own.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Licensed Lic. #941110", "Fully insured", "Free estimates", "Clear communication"].map((tag) => (
                <span key={tag} className="rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-950 p-5 text-white">
                <BadgeCheck className="h-5 w-5 text-brand-300" />
                <p className="mt-4 text-sm text-slate-300">
                  The goal is simple: every customer should feel like they hired a premium operator, not a rushed contractor.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 border border-slate-200">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <BarChart3 className="h-4 w-4 text-brand-600" />
                  Conversion-driven service
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Each visit is designed to reduce friction, build trust, and make the next step obvious.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-2 overflow-hidden rounded-[1.8rem] bg-slate-950 p-0 text-white shadow-2xl shadow-slate-950/20"
            >
              <div className="grid sm:grid-cols-[1fr_0.95fr]">
                <div className="p-7 sm:p-8">
                  <div className="text-xs uppercase tracking-widest text-brand-300 mb-2">Featured project</div>
                  <div className="font-display text-2xl font-bold">Kitchen and bath repipe for a growing family home</div>
                  <p className="mt-3 text-brand-100 text-sm leading-relaxed">
                    The brief: better water pressure, fewer surprises behind the walls, and a cleaner finish that would hold up for years.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white/90">
                    <Droplets className="h-4 w-4 text-brand-300" />
                    The result was stronger flow, a cleaner utility zone, and a smoother inspection.
                  </div>
                </div>
                <div className="relative min-h-72">
                  <Image
                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80"
                    alt="Finished plumbing project in a premium home"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/15 to-transparent" />
                </div>
              </div>
            </motion.div>

            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="overflow-hidden rounded-[1.6rem] bg-white border border-slate-200 shadow-lg shadow-slate-200/60"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 30vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-slate-950">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.outcome}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-700">
                    View project <MoveRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
