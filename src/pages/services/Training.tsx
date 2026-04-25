import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Briefcase } from "lucide-react";
import ServicePageLayout from "../../components/layout/ServicePageLayout";

const ICON_ACCENTS = [
  { bg: "bg-brand-green/10",  text: "text-brand-green"  },
  { bg: "bg-brand-blue/10",   text: "text-brand-blue"   },
  { bg: "bg-brand-orange/10", text: "text-brand-orange" },
  { bg: "bg-brand-navy/10",   text: "text-brand-navy"   },
];

const PROGRAMS = [
  { icon: <GraduationCap size={20} />, title: "Industry-Aligned Curriculum", desc: "Programs designed in partnership with employers to match what the market actually needs." },
  { icon: <BookOpen size={20} />,      title: "Blended Learning",             desc: "Flexible online and in-person formats built for working professionals and fresh graduates alike." },
  { icon: <Award size={20} />,         title: "Certifications",               desc: "Earn credentials recognised by our employer network and industry at large." },
  { icon: <Briefcase size={20} />,     title: "Placement Support",            desc: "Dedicated career services that bridge the gap between training completion and employment." },
];

export default function Training() {
  return (
    <ServicePageLayout
      eyebrow="TRAINING & DEVELOPMENT"
      title="Skills that open doors"
      subtitle="Industry-aligned programs that accelerate careers and bridge the education-employment gap — for individuals and enterprises."
    >
      <section className="py-24 px-6 bg-bp-bg border-t border-[#141619]/8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.2em] font-semibold text-bp-muted uppercase mb-4">Our programmes</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-navy mb-4">
              Learn today. Lead tomorrow.
            </h2>
            <p className="text-bp-muted text-lg leading-relaxed">
              Designed with employers, delivered for careers — every programme is built around real-world outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PROGRAMS.map((p, i) => {
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

      <section className="py-24 px-6 bg-bp-surface border-t border-[#141619]/8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-10 h-0.5 bg-brand-green mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-navy mb-6">
            Bridging education and employment.
          </h2>
          <p className="text-bp-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Our training division works with corporates, educational institutions, and individuals to build the talent pipeline that tomorrow's economy demands.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
