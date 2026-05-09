"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  id: string;
  kicker: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, kicker, title, children, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`relative mx-auto max-w-6xl px-6 py-24 md:py-32 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[color:var(--color-accent)]">
          <span className="inline-block h-px w-8 bg-[color:var(--color-accent)]/50" />
          {kicker}
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  );
}
