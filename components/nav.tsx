"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Impact" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 md:px-6 ${
          scrolled
            ? "glass shadow-[0_10px_40px_-20px_rgba(124,245,255,0.25)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#home" className="group flex items-center gap-2">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-violet-400 text-[11px] font-bold text-[color:var(--color-ink)]">
            NP
          </span>
          <span className="hidden text-sm font-medium text-white/80 sm:block">
            Nithya
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 px-4 py-2 text-sm font-semibold text-[color:var(--color-ink)] transition hover:brightness-110 md:inline-block"
        >
          Let's talk
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="absolute inset-x-4 top-20 rounded-2xl border border-white/10 bg-[color:var(--color-ink-2)]/95 p-3 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-gradient-to-r from-cyan-300 to-violet-400 px-4 py-3 text-center text-sm font-semibold text-[color:var(--color-ink)]"
              >
                Let's talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
