import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Globe, Users, Zap, ArrowRight, Mail } from "lucide-react";
import ServicePageLayout from "../components/layout/ServicePageLayout";

const HIGHLIGHTS = [
  {
    icon: <TrendingUp size={20} />,
    title: "High-growth sector",
    desc: "The recruitment and talent technology market is expanding rapidly across India and emerging markets. One Step Beyond sits at the intersection of job portal, recruitment, and training — a uniquely integrated position.",
    iconBg: "bg-brand-orange/10 text-brand-orange",
  },
  {
    icon: <Globe size={20} />,
    title: "Scalable platform model",
    desc: "Our Job Portal, Recruitment engine, and Training network are built to scale. Revenue streams across SaaS subscriptions, placement fees, and training enrolments create a diversified, resilient business.",
    iconBg: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: <Users size={20} />,
    title: "Large addressable market",
    desc: "India alone adds millions of job seekers to the market every year. Combined with corporate demand for pre-screened talent and upskilling, the addressable market is enormous and underpenetrated by integrated solutions.",
    iconBg: "bg-brand-green/10 text-brand-green",
  },
  {
    icon: <Zap size={20} />,
    title: "Technology-led efficiency",
    desc: "Features like Auto Apply, AI Resume Editor, and smart matching reduce cost-per-hire for companies and time-to-placement for candidates — creating compounding value as the platform scales.",
    iconBg: "bg-brand-navy/10 text-brand-navy",
  },
];

const FADE = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08 },
  }),
};

export default function Investors() {
  return (
    <ServicePageLayout
      eyebrow="INVESTOR RELATIONS"
      title="Investing in the future of talent"
      subtitle="One Step Beyond is building the talent infrastructure for the next generation of careers and companies. We are open to conversations with aligned investors and strategic partners."
    >

      {/* ── WHY INVEST ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white border-t border-[#141619]/8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-10 h-0.5 bg-brand-orange mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-navy mb-4">
              The opportunity
            </h2>
            <p className="text-bp-muted text-lg max-w-xl mx-auto">
              Three integrated pillars. One platform. A market that's only getting bigger.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.title}
                custom={i}
                variants={FADE}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="bg-bp-surface rounded-3xl p-8 border border-[#141619]/8 hover:shadow-lg hover:border-[#141619]/15 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 ${h.iconBg}`}>
                  {h.icon}
                </div>
                <h3 className="text-lg font-black text-brand-navy mb-2">{h.title}</h3>
                <p className="text-bp-muted leading-relaxed text-sm">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-brand-navy border-t border-[#141619]/8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "120K+", label: "Candidates Placed", accent: "text-brand-orange" },
            { value: "95%",   label: "Client Satisfaction", accent: "text-brand-green" },
            { value: "40+",   label: "Training Programmes", accent: "text-white" },
            { value: "72hr",  label: "Avg Time-to-Shortlist", accent: "text-brand-orange" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={FADE}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-black tracking-tighter mb-2 ${s.accent}`}>
                {s.value}
              </div>
              <div className="text-white/50 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-bp-bg border-t border-[#141619]/8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-10 h-0.5 bg-brand-orange mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-navy mb-4">
            Get in touch
          </h2>
          <p className="text-bp-muted text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            If you're an investor or strategic partner interested in learning more about One Step Beyond, we'd love to connect. Reach out and our team will respond within one business day.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#d06515] hover:scale-[1.03] active:scale-[0.98] transition-all shadow-md"
          >
            <Mail size={18} /> Contact our team <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </ServicePageLayout>
  );
}
