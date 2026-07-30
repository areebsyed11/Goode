"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reviews = [
  {
    text: "They showed up quickly, found the leak fast, and explained everything before starting the repair. The work was clean and the price was fair. I'll definitely call them again.",
    name: "Marissa T.",
    role: "Clovis homeowner",
    rating: 5,
  },
  {
    text: "Our water heater failed on a Friday evening and they gave us a clear plan without pushing anything extra. Easy to talk to, very professional, and they were there within the hour.",
    name: "Derek M.",
    role: "Property manager, Clovis",
    rating: 5,
  },
  {
    text: "We had a nasty backup that was starting to affect our restaurant. They handled it with zero drama, cleared the line, and left everything much cleaner than we expected. Solid team.",
    name: "Tanya R.",
    role: "Local business owner",
    rating: 5,
  },
  {
    text: "Great service all around. Called in the morning, they were at my house by noon. The technician walked me through what was wrong and the fix was exactly what they quoted.",
    name: "James K.",
    role: "Fresno homeowner",
    rating: 5,
  },
  {
    text: "Used Goode Plumbing for a full bathroom remodel plumbing rough-in. They coordinated perfectly with our contractor. On time, on budget, and zero issues during inspection.",
    name: "Sandra L.",
    role: "Renovation client",
    rating: 5,
  },
  {
    text: "Honest, dependable, and reasonably priced. They fixed a slow sewer drain that two other companies couldn't figure out. Will be using them for all future plumbing needs.",
    name: "Mike C.",
    role: "Clovis homeowner",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-yellow-400">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reviews" className="section-shell py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center rounded-full bg-brand-50 border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-800 mb-5">
            Customer Reviews
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight max-w-xl">
              What Clovis customers say about us.
            </h2>
            <div className="flex-shrink-0 flex flex-col items-start sm:items-end">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-yellow-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="mt-1 font-display text-2xl font-bold text-slate-900">5.0 / 5.0</div>
              <div className="text-sm text-slate-500">127 verified reviews</div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-[1.8rem] bg-slate-50 border border-slate-100 p-7 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-brand-100/50 card-hover"
            >
              <StarRating count={review.rating} />
              <p className="mt-4 text-slate-700 leading-relaxed text-sm">&ldquo;{review.text}&rdquo;</p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900">{review.name}</div>
                <div className="text-sm text-slate-500">{review.role}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
