"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      kicker="Experience"
      title={
        <>
          Real impact at{" "}
          <span className="text-gradient">real scale.</span>
        </>
      }
    >
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/40 via-violet-400/20 to-transparent md:block"
        />
        {experience.map((job, idx) => (
          <motion.article
            key={`${job.company}-${job.period}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative mb-6 rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:ml-14 md:p-8"
          >
            <span
              aria-hidden
              className="absolute left-[-52px] top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[color:var(--color-ink-2)] text-[color:var(--color-accent)] md:flex"
            >
              <Briefcase size={16} />
            </span>

            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white md:text-2xl">
                  {job.role} ·{" "}
                  <span className="text-gradient">{job.company}</span>
                </h3>
                <p className="mt-1 text-sm text-white/60">{job.location}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                {job.period}
              </span>
            </div>

            <ul className="mt-5 space-y-3">
              {job.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 text-sm leading-relaxed text-white/75"
                >
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
