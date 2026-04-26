import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, BookOpen, Globe, Zap, ArrowRight, MapPin, Clock } from "lucide-react";
import ServicePageLayout from "../components/layout/ServicePageLayout";

const OPEN_ROLES = [
  {
    title: "Recruitment Consultant",
    dept: "Recruitment",
    location: "Hyderabad, India",
    type: "Full-time",
    desc: "Source, screen, and place top talent across industries. You'll own full-cycle recruitment and build lasting client relationships.",
    accent: "text-brand-orange",
    bg: "bg-brand-orange/5 border-brand-orange/20",
  },
  {
    title: "Training Programme Lead",
    dept: "Training",
    location: "Hyderabad, India",
    type: "Full-time",
    desc: "Design and deliver in-demand training programmes in tech and business domains. Help candidates become truly job-ready.",
    accent: "text-brand-green",
    bg: "bg-brand-green/5 border-brand-green/20",
  },
  {
    title: "Job Portal Product Manager",
    dept: "Product",
    location: "Hyderabad, India · Remote",
    type: "Full-time",
    desc: "Own the roadmap for our Auto Apply and Resume Editor features. Bridge candidate needs with engineering delivery.",
    accent: "text-brand-blue",
    bg: "bg-brand-blue/5 border-brand-blue/20",
  },
  {
    title: "Business Development Executive",
    dept: "Sales",
    location: "Hyderabad, India",
    type: "Full-time",
    desc: "Identify and onboard new corporate clients. Pitch our recruitment and training solutions to HR leaders and business heads.",
    accent: "text-purple-600",
    bg: "bg-purple-50 border-purple-200",
  },
  {
    title: "Candidate Success Manager",
    dept: "Operations",
    location: "Hyderabad, India",
    type: "Full-time",
    desc: "Be the first point of contact for job seekers using our platform. Guide them through the portal, alert them to opportunities, and ensure great outcomes.",
    accent: "text-brand-navy",
    bg: "bg-brand-navy/5 border-brand-navy/20",
  },
];

const PERKS = [
  {
    icon: <Zap size={20} />,
    title: "High-velocity growth",
    desc: "We move fast. You'll own real responsibilities from day one and see the direct impact of your work.",
    iconBg: "bg-brand-orange/10 text-brand-orange",
  },
  {
    icon: <BookOpen size={20} />,
    title: "Learn continuously",
    desc: "Access to all One Step Beyond training programmes — tech, soft skills, and leadership — at no cost.",
    iconBg: "bg-brand-green/10 text-brand-green",
  },
  {
    icon: <Globe size={20} />,
    title: "Global exposure",
    desc: "Work with clients, candidates, and partners across India and internationally.",
    iconBg: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: <Briefcase size={20} />,
    title: "Meaningful work",
    desc: "Every placement, every training cohort, every hire — you're directly changing someone's career trajectory.",
    iconBg: "bg-brand-navy/10 text-brand-navy",
  },
];

const FADE = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07 },
  }),
};

export default function Careers() {
  return (
    <ServicePageLayout
      eyebrow="CAREERS"
      title="Build the future of talent with us"
      subtitle="We're a team obsessed with connecting the right people to the right opportunities. If that excites you, you belong here."
    >

      {/* ── WHY JOIN US ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white border-t border-[#141619]/8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-10 h-0.5 bg-brand-orange mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-navy mb-4">
              Why One Step Beyond?
            </h2>
            <p className="text-bp-muted text-lg max-w-xl mx-auto">
              We're not just a company — we're a platform, a training ground, and a launch pad. Here's what makes working here different.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {PERKS.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={FADE}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="bg-bp-surface rounded-3xl p-8 border border-[#141619]/8 hover:shadow-lg hover:border-[#141619]/15 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 ${p.iconBg}`}>
                  {p.icon}
                </div>
                <h3 className="text-lg font-black text-brand-navy mb-2">{p.title}</h3>
                <p className="text-bp-muted leading-relaxed text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-bp-bg border-t border-[#141619]/8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-10 h-0.5 bg-brand-orange mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-navy mb-4">
              Open positions
            </h2>
            <p className="text-bp-muted text-lg max-w-xl mx-auto">
              We're hiring across all functions. Find your fit and apply directly — we respond within 72 hours.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {OPEN_ROLES.map((role, i) => (
              <motion.div
                key={role.title}
                custom={i}
                variants={FADE}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className={`bg-white border rounded-2xl p-7 flex flex-col md:flex-row md:items-center gap-5 hover:shadow-xl transition-all duration-300 ${role.bg}`}
              >
                {/* Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-[10px] font-bold tracking-[0.18em] uppercase ${role.accent}`}>
                      {role.dept}
                    </span>
                    <span className="text-[#141619]/20">·</span>
                    <span className="flex items-center gap-1 text-[11px] text-bp-muted">
                      <MapPin size={10} /> {role.location}
                    </span>
                    <span className="text-[#141619]/20">·</span>
                    <span className="flex items-center gap-1 text-[11px] text-bp-muted">
                      <Clock size={10} /> {role.type}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-brand-navy mb-2">{role.title}</h3>
                  <p className="text-bp-muted text-sm leading-relaxed">{role.desc}</p>
                </div>

                {/* Apply button */}
                <Link
                  to="/contact"
                  className="shrink-0 inline-flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-brand-orange transition-all duration-300"
                >
                  Apply <ArrowRight size={15} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN APPLICATION BAND ──────────────────────────────────────── */}
      <section className="py-20 px-6 bg-bp-surface border-t border-[#141619]/8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-10 h-0.5 bg-brand-orange mx-auto mb-8" />
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-brand-navy mb-4">
            Don't see the right role?
          </h2>
          <p className="text-bp-muted text-base leading-relaxed mb-8 max-w-lg mx-auto">
            We're always open to exceptional people. Send us your profile and tell us what you'd like to build — we'll reach out when the right opportunity arises.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#d06515] hover:scale-[1.03] active:scale-[0.98] transition-all shadow-md"
          >
            Send open application <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </ServicePageLayout>
  );
}
