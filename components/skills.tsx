"use client";

import { Section } from "./section";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export function Skills() {
  const all = Object.entries(skills);
  const marqueeSet = all.flatMap(([, list]) => list);

  return (
    <Section
      id="skills"
      kicker="Toolbox"
      title={
        <>
          Tech I use to{" "}
          <span className="text-gradient">ship things.</span>
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {all.map(([group, items], i) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass rounded-2xl p-5"
          >
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/50">
              {group}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {items.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/85"
                >
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[color:var(--color-ink)] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[color:var(--color-ink)] to-transparent"
        />
        <div className="marquee flex w-max gap-10 pr-10">
          {[...marqueeSet, ...marqueeSet].map((t, idx) => (
            <span
              key={`${t}-${idx}`}
              className="text-lg font-medium tracking-tight text-white/40"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
