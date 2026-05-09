"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";
import { Section } from "./section";
import { achievements, codingProfiles } from "@/lib/data";

export function Achievements() {
  return (
    <Section
      id="achievements"
      kicker="Impact"
      title={
        <>
          Competitive programming &{" "}
          <span className="text-gradient">recognitions.</span>
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="glass flex items-start gap-4 rounded-2xl p-5"
          >
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-200/20 to-pink-400/20 text-amber-200">
              <Trophy size={16} />
            </span>
            <p className="text-sm leading-relaxed text-white/80">{a}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">
          Find me on
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {codingProfiles.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group glass flex items-center justify-between rounded-2xl p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.05]"
            >
              <div>
                <p className="text-sm font-semibold text-white">{c.name}</p>
                <p className="text-xs text-white/55">@{c.handle}</p>
              </div>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition group-hover:rotate-45 group-hover:text-white">
                <ArrowUpRight size={14} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
