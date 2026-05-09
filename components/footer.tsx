import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-white/45 md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Crafted with Next.js,
          Tailwind &amp; motion.
        </p>
        <p className="tracking-wider uppercase">
          Design &amp; build — Nithya
        </p>
      </div>
    </footer>
  );
}
