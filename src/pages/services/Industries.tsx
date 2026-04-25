import { motion } from "framer-motion";
import { Globe, Building2, HeartPulse, Cpu } from "lucide-react";
import ServicePageLayout from "../../components/layout/ServicePageLayout";

const ICON_ACCENTS = [
  { bg: "bg-brand-blue/10",   text: "text-brand-blue"   },
  { bg: "bg-brand-orange/10", text: "text-brand-orange" },
  { bg: "bg-brand-green/10",  text: "text-brand-green"  },
  { bg: "bg-brand-navy/10",   text: "text-brand-navy"   },
];

const SECTORS = [
  { icon: <Cpu size={20} />,       title: "Technology",                 desc: "Engineering, product, data science, and cloud — we speak the language of tech hiring." },
  { icon: <Building2 size={20} />, title: "Real Estate & Construction", desc: "From project managers to site engineers, we support India's fastest-growing sector." },
  { icon: <HeartPulse size={20} />,title: "Healthcare & Life Sciences",  desc: "Clinical, pharma, and operations talent matched with precision and care." },
  { icon: <Globe size={20} />,     title: "Global Markets",              desc: "Serving clients across India, the US, and the Middle East with local insight and global reach." },
];

export default function Industries() {
  return (
    <ServicePageLayout
      eyebrow="INDUSTRIES WE SERVE"
      title="Deep expertise across sectors"
      subtitle="We go beyond generalist recruiting — our teams are specialists in the industries they serve, bringing context that generic agencies miss."
    >
      <section className="py-24 px-6 bg-bp-bg border-t border-[#141619]/8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.2em] font-semibold text-bp-muted uppercase mb-4">Our focus areas</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-navy mb-4">
              Your sector. Our specialty.
            </h2>
            <p className="text-bp-muted text-lg leading-relaxed">
              Industry coverage that grows with you — wherever your business takes you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SECTORS.map((s, i) => {
              const accent = ICON_ACCENTS[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-bp-surface border border-[#141619]/8 rounded-2xl p-8 flex flex-col gap-5 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl ${accent.bg} ${accent.text} flex items-center justify-center shrink-0`}>
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-brand-navy mb-2">{s.title}</h3>
                    <p className="text-bp-muted text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-bp-surface border-t border-[#141619]/8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-10 h-0.5 bg-brand-blue mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-navy mb-6">
            Globally present. Locally expert.
          </h2>
          <p className="text-bp-muted text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Hyderabad HQ. Offices in North America and Dubai. Industry coverage that grows with you — wherever your business takes you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["🇮🇳 Hyderabad, India", "🇺🇸 North America", "🇦🇪 Dubai, UAE"].map((loc) => (
              <span key={loc} className="px-5 py-2.5 bg-bp-bg border border-[#141619]/8 rounded-full text-sm font-medium text-brand-navy">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
