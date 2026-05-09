"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { profile, stats } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 md:pt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-[0.25]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full aurora" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start gap-8"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to software engineering roles
          </div>

          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
            Hi, I'm <span className="text-gradient">Nithya</span>. I build
            <br className="hidden md:block" /> products that are{" "}
            <span className="relative inline-block">
              <span className="text-gradient">fast</span>
              <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400" />
            </span>
            , thoughtful, and data-driven.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-white/70">
            {profile.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="shine group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--color-ink)] transition hover:brightness-110"
            >
              View my work
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              <Mail size={16} />
              {profile.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {profile.location}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Github size={14} /> GitHub
            </a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            aria-hidden
            className="absolute -inset-8 -z-10 rounded-[40px] bg-gradient-to-br from-cyan-300/25 via-violet-400/20 to-pink-400/25 blur-3xl"
          />

          <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-transparent p-2 glow-ring">
            <div className="relative overflow-hidden rounded-[26px]">
              <Image
                src="/Nithya.jpeg"
                alt="Nithya Paleti portrait"
                width={900}
                height={1100}
                priority
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/80 via-transparent to-transparent"
              />

              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
                <Sparkles size={12} className="text-[color:var(--color-accent)]" />
                Amazon · 2025
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                    Software Development Engineer Intern
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    Nithya Paleti
                  </p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white/80 backdrop-blur">
                  Chennai
                </span>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -left-6 -top-6 hidden rotate-[-6deg] rounded-2xl border border-white/10 bg-[color:var(--color-ink-2)]/80 px-3 py-2 text-xs text-white/80 backdrop-blur md:block">
            <span className="text-gradient font-semibold">LLM · Backend</span>{" "}
            improving Alexa flows
          </div>
          <div className="pointer-events-none absolute -bottom-5 -right-4 hidden rotate-[5deg] rounded-2xl border border-white/10 bg-[color:var(--color-ink-2)]/80 px-3 py-2 text-xs text-white/80 backdrop-blur md:block">
            <span className="text-gradient font-semibold">8.5 CGPA</span> ·
            IIIT Lucknow
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 gap-3 md:mt-24 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass relative overflow-hidden rounded-2xl p-5"
            >
              <div
                aria-hidden
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-300/30 to-violet-400/20 blur-2xl"
              />
              <div className="text-3xl font-semibold text-white md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
