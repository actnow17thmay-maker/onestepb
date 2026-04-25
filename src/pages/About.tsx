import { motion } from "framer-motion";
import { Globe, Users, TrendingUp, ShieldCheck } from "lucide-react";
import ServicePageLayout from "../components/layout/ServicePageLayout";

const STATS = [
  { value: "120K+", label: "Candidates Placed",        accent: "text-brand-orange" },
  { value: "95%",   label: "Client Satisfaction",      accent: "text-brand-green"  },
  { value: "3",     label: "Global Offices",           accent: "text-brand-blue"   },
  { value: "$50K",  label: "Avg. Transaction Value",   accent: "text-brand-navy"   },
];

const ICON_ACCENTS = [
  { bg: "bg-brand-navy/10",   text: "text-brand-navy"   },
  { bg: "bg-brand-orange/10", text: "text-brand-orange" },
  { bg: "bg-brand-green/10",  text: "text-brand-green"  },
  { bg: "bg-brand-blue/10",   text: "text-brand-blue"   },
];

const VALUES = [
  { icon: <ShieldCheck size={20} />, title: "Integrity First",        desc: "We build relationships on trust — with clients, candidates, and partners." },
  { icon: <TrendingUp size={20} />,  title: "Relentless Improvement", desc: "We obsess over outcomes and constantly raise the bar for what great looks like." },
  { icon: <Users size={20} />,       title: "People at the Centre",   desc: "Every placement, every programme, every product — designed around real human impact." },
  { icon: <Globe size={20} />,       title: "Global Mindset",         desc: "Hyderabad-rooted, globally connected — we think beyond borders." },
];

export default function About() {
  return (
    <ServicePageLayout
      eyebrow="WHO WE ARE"
      title="One Step Beyond, every time"
      subtitle="We are a next-generation talent engine — combining technology, expertise, and human insight to power the careers and companies of tomorrow."
    >
      {/* Stats row */}
      <section className="py-20 px-6 bg-bp-surface border-t border-[#141619]/8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-black tracking-tighter mb-2 ${s.accent}`}>
                {s.value}
              </div>
              <div className="text-sm text-bp-muted font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-bp-bg border-t border-[#141619]/8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="w-10 h-0.5 bg-brand-orange mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-navy mb-6">
            Our mission
          </h2>
          <p className="text-bp-muted text-lg md:text-xl leading-relaxed">
            To build the technology, services, and talent ecosystems that power the next generation of careers — making opportunity accessible, hiring intelligent, and growth sustainable.
          </p>
        </div>

        {/* Values grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {VALUES.map((v, i) => {
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
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-brand-navy mb-2">{v.title}</h3>
                  <p className="text-bp-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 px-6 bg-bp-surface border-t border-[#141619]/8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-10 h-0.5 bg-brand-blue mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-navy mb-4">
            Globally present. Locally expert.
          </h2>
          <p className="text-bp-muted text-lg mb-10">
            Headquartered in Hyderabad with operations across North America and the Middle East.
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
