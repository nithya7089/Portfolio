"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./section";
import { education } from "@/lib/data";

export function Education() {
  return (
    <Section
      id="education"
      kicker="Education"
      title={
        <>
          Where I{" "}
          <span className="text-gradient">learned the fundamentals.</span>
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        {education.map((e, i) => (
          <motion.article
            key={e.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-3xl p-6"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300/20 to-violet-400/20 text-[color:var(--color-accent)]">
              <GraduationCap size={16} />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-white">
              {e.school}
            </h3>
            <p className="mt-1 text-sm text-white/60">{e.degree}</p>
            <div className="mt-3 flex items-center justify-between text-xs text-white/55">
              <span>{e.period}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-medium text-white/80">
                {e.score}
              </span>
            </div>
            {e.note && (
              <p className="mt-3 text-xs leading-relaxed text-white/55">
                {e.note}
              </p>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
