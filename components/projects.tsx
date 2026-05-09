"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Section } from "./section";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section
      id="projects"
      kicker="Selected work"
      title={
        <>
          Products I've built{" "}
          <span className="text-gradient">end-to-end.</span>
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-7 transition hover:-translate-y-1 hover:border-white/20"
          >
            <div
              aria-hidden
              className={`absolute -top-24 right-[-20%] h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 transition group-hover:opacity-90`}
            />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                  {p.tagline}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                  {p.name}
                </h3>
              </div>
              <a
                href={p.live ?? p.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.name}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition group-hover:rotate-45 group-hover:text-white"
              >
                <ArrowUpRight size={16} />
              </a>
            </div>

            <p className="relative mt-4 text-sm leading-relaxed text-white/70">
              {p.description}
            </p>

            <ul className="relative mt-5 space-y-2">
              {p.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-2 text-sm text-white/70"
                >
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-wider text-white/70"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="relative mt-6 flex flex-wrap gap-2">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[color:var(--color-ink)] transition hover:brightness-110"
                >
                  <ExternalLink size={14} /> Live demo
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 transition hover:bg-white/10"
                >
                  <Github size={14} /> Source
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
