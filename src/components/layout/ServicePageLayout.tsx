import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

interface ServicePageLayoutProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function ServicePageLayout({
  eyebrow,
  title,
  subtitle,
  children,
}: ServicePageLayoutProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <div className="bg-bp-bg text-bp-text font-sans selection:bg-brand-navy selection:text-white">
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-30 z-0" />

      {/* ── HERO ─────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 pt-28 pb-24 z-10"
      >
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Editorial eyebrow — rule + text */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="w-10 h-0.5 bg-brand-orange" />
            <span className="text-xs tracking-[0.2em] font-semibold text-bp-muted uppercase">
              {eyebrow}
            </span>
          </div>

          <h1
            className="font-black tracking-tighter leading-[1.05] mb-6 text-brand-navy"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
          >
            {title}
          </h1>

          <p className="text-bp-muted text-lg md:text-xl leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-bp-muted/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={24} strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* ── CONTENT SLOT ─────────────────────────── */}
      <div className="relative z-10">{children}</div>

      {/* ── BOTTOM CTA BAND ──────────────────────── */}
      <section className="relative z-10 bg-bp-surface border-y border-[#141619]/10 py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-10 h-0.5 bg-brand-orange mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-brand-navy mb-5">
            Ready to get started?
          </h2>
          <p className="text-bp-muted text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Talk to our team and find out how One Step Beyond can work for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#d06515] hover:scale-[1.03] active:scale-[0.98] transition-all shadow-md"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
