"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent p-8 md:p-14"
      >
        <div
          aria-hidden
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-300/25 to-violet-400/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-gradient-to-br from-pink-400/20 to-violet-400/20 blur-3xl"
        />

        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--color-accent)]">
              Contact
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Let's make something{" "}
              <span className="text-gradient">worth shipping.</span>
            </h2>
            <p className="mt-5 text-white/70">
              Internships, product collaborations, or a quick chat about
              engineering and analytics — I'm all ears.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href={`mailto:${profile.email}`}
              className="shine inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--color-ink)] transition hover:brightness-110"
            >
              <Mail size={16} /> {profile.email}
            </a>
            <div className="flex gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
