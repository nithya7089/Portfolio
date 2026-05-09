"use client";

import { Section } from "./section";
import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Zap } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Ship with intent",
    text: "I care about latency, UX, and correctness. Every feature has a reason and a measurable outcome.",
  },
  {
    icon: BrainCircuit,
    title: "Think in systems",
    text: "From data models to rate limits, I design full systems — not just the happy path.",
  },
  {
    icon: Sparkles,
    title: "Design matters",
    text: "Polished interfaces, motion, and typography compound into products that feel alive.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      kicker="About"
      title={
        <>
          Engineer at heart,{" "}
          <span className="text-gradient">analyst by craft.</span>
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:bg-white/[0.04]"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300/20 to-violet-400/20 text-[color:var(--color-accent)]">
              <p.icon size={18} />
            </div>
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              {p.text}
            </p>
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-gradient-to-br from-cyan-300/10 to-violet-400/10 opacity-0 blur-2xl transition group-hover:opacity-100"
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
