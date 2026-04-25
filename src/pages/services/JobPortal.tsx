import { motion } from "framer-motion";
import { Search, Building2, ShieldCheck, Rocket, Lock } from "lucide-react";
import ServicePageLayout from "../../components/layout/ServicePageLayout";

// Brand accent colors rotated across cards (orange, green, navy, blue, orange)
const ICON_ACCENTS = [
  { bg: "bg-brand-orange/10", text: "text-brand-orange" },
  { bg: "bg-brand-green/10",  text: "text-brand-green"  },
  { bg: "bg-brand-navy/10",   text: "text-brand-navy"   },
  { bg: "bg-brand-blue/10",   text: "text-brand-blue"   },
  { bg: "bg-brand-orange/10", text: "text-brand-orange" },
];

const FEATURES = [
  { icon: <Search size={20} />,      title: "For Job Seekers",   desc: "Discover relevant opportunities and grow your career." },
  { icon: <Building2 size={20} />,   title: "For Employers",     desc: "Find the right talent faster and build stronger teams." },
  { icon: <ShieldCheck size={20} />, title: "Smart Matching",    desc: "AI-powered matching to connect the right people with the right roles." },
  { icon: <Rocket size={20} />,      title: "Career Growth",     desc: "Resources and insights to help you learn, grow and succeed." },
  { icon: <Lock size={20} />,        title: "Trusted & Secure",  desc: "A safe and reliable platform for all your career needs." },
];

const TAGLINES = ["Better Opportunities.", "Stronger Connections.", "Brighter Futures."];

export default function JobPortal() {
  return (
    <ServicePageLayout
      eyebrow="WE ARE EXCITED TO ANNOUNCE"
      title="Building a better way to find & hire"
      subtitle="We are building a modern Job Portal that connects talent with opportunities and empowers careers."
    >
      {/* ── FEATURE GRID ─────────────────────────── */}
      <section className="py-24 px-6 bg-bp-bg border-t border-[#141619]/8">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.2em] font-semibold text-bp-muted uppercase mb-4">What we offer</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-navy mb-4">
              Everything you need, in one place.
            </h2>
            <p className="text-bp-muted text-lg leading-relaxed">
              Built for both sides of the hiring equation — job seekers and employers alike.
            </p>
          </div>

          {/* 3-col grid; 5th card centred in its own row on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => {
              const accent = ICON_ACCENTS[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`bg-bp-surface border border-[#141619]/8 rounded-2xl p-8 flex flex-col gap-5
                    hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 group
                    ${i === 4 ? "lg:col-start-2" : ""}`}
                >
                  <div className={`w-10 h-10 rounded-xl ${accent.bg} ${accent.text} flex items-center justify-center shrink-0`}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-brand-navy mb-2">{f.title}</h3>
                    <p className="text-bp-muted text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LAUNCHING SOON — editorial moment ───── */}
      <section className="py-32 px-6 bg-bp-surface border-t border-[#141619]/8">
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-xs tracking-[0.2em] font-semibold text-bp-muted uppercase mb-6">
            Launching Soon
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tighter text-brand-navy leading-[1.05] mb-8">
            One Step B. One Platform.{" "}
            <span className="text-brand-orange">Infinite Opportunities.</span>
          </h2>

          {/* Orange divider */}
          <div className="w-16 h-0.5 bg-brand-orange mx-auto mb-8" />

          <p className="text-bp-muted text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-16">
            Stay tuned as we take One Step B towards a better future for all.
          </p>

          {/* Tagline row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#141619]/10 border border-[#141619]/8 rounded-2xl overflow-hidden bg-bp-bg">
            {TAGLINES.map((tag) => (
              <span key={tag} className="flex-1 py-4 px-6 text-sm font-semibold tracking-widest text-bp-muted uppercase text-center w-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
