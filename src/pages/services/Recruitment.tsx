import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart3, Clock } from "lucide-react";
import ServicePageLayout from "../../components/layout/ServicePageLayout";

const ICON_ACCENTS = [
  { bg: "bg-brand-orange/10", text: "text-brand-orange" },
  { bg: "bg-brand-green/10",  text: "text-brand-green"  },
  { bg: "bg-brand-navy/10",   text: "text-brand-navy"   },
  { bg: "bg-brand-blue/10",   text: "text-brand-blue"   },
];

const PILLARS = [
  { icon: <TrendingUp size={20} />, title: "End-to-End Hiring",        desc: "Full-cycle recruitment from sourcing to onboarding, managed by domain specialists." },
  { icon: <Users size={20} />,      title: "Pre-Vetted Talent",        desc: "Access a deep network of screened candidates ready to hit the ground running." },
  { icon: <BarChart3 size={20} />,  title: "Hiring Analytics",         desc: "Live dashboards to track performance and hiring velocity across all open roles." },
  { icon: <Clock size={20} />,      title: "40% Faster Time-to-Hire",  desc: "Our proven process cuts hiring cycles without cutting corners on quality." },
];

export default function Recruitment() {
  return (
    <ServicePageLayout
      eyebrow="RECRUITMENT SOLUTIONS"
      title="The right talent, at the right time"
      subtitle="Full-cycle recruitment services with deep domain expertise and a pre-vetted talent network — built for scale."
    >
      <section className="py-24 px-6 bg-bp-bg border-t border-[#141619]/8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.2em] font-semibold text-bp-muted uppercase mb-4">How we work</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-navy mb-4">
              Hiring is hard. We make it simple.
            </h2>
            <p className="text-bp-muted text-lg leading-relaxed">
              From executive search to volume hiring, our engine scales to meet every need — across industries, geographies, and roles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PILLARS.map((p, i) => {
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
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-brand-navy mb-2">{p.title}</h3>
                    <p className="text-bp-muted text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial closing statement */}
      <section className="py-24 px-6 bg-bp-surface border-t border-[#141619]/8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-10 h-0.5 bg-brand-orange mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-navy mb-6">
            120,000+ careers advanced. Counting.
          </h2>
          <p className="text-bp-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Our pre-vetted talent network and domain-specialist recruiters have delivered results across India, North America, and the Middle East.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
