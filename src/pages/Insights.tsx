import { motion } from "framer-motion";
import { Zap, FileEdit, Bell, Eye, Users, BookOpen, Briefcase, ArrowRight } from "lucide-react";
import ServicePageLayout from "../components/layout/ServicePageLayout";

const FEATURES = [
  {
    icon: <Zap size={22} />,
    tag: "Auto Apply",
    title: "Apply to dozens of roles in seconds",
    desc: "One Step Beyond's Auto Apply lets candidates send applications to multiple matching jobs instantly — no repetitive form-filling, no wasted time. The system matches your profile to open roles and fires applications on your behalf, putting you ahead of the queue.",
    accent: "bg-brand-orange/10 text-brand-orange border-brand-orange/20",
    iconBg: "bg-brand-orange/10 text-brand-orange",
  },
  {
    icon: <FileEdit size={22} />,
    tag: "Auto Resume Editor",
    title: "A resume that adapts to every job",
    desc: "Our AI-powered Resume Editor reads the job description and automatically rewrites your resume to highlight the skills and experience that matter most for that role. Every application goes out optimised — so recruiters see exactly what they're looking for.",
    accent: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
    iconBg: "bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: <Bell size={22} />,
    tag: "Smart Job Alerts",
    title: "Never miss the right opportunity",
    desc: "Set your preferences once — role, location, salary, industry — and our alert engine monitors thousands of new listings daily. The moment a matching role appears, you're notified. React fast, apply first.",
    accent: "bg-brand-green/10 text-brand-green border-brand-green/20",
    iconBg: "bg-brand-green/10 text-brand-green",
  },
  {
    icon: <Eye size={22} />,
    tag: "Profile Visibility Boost",
    title: "Get seen by the right recruiters",
    desc: "Your profile doesn't sit idle on our platform. Visibility Boost surfaces you to active recruiters searching for your skill set, increasing your chances of being headhunted — not just found by accident.",
    accent: "bg-purple-500/10 text-purple-600 border-purple-200",
    iconBg: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: <Users size={22} />,
    tag: "Recruiter Connections",
    title: "Direct access to decision makers",
    desc: "Skip the black hole. One Step Beyond connects candidates directly with verified recruiters and hiring managers from top companies. Real conversations, faster decisions, better outcomes for both sides.",
    accent: "bg-brand-navy/10 text-brand-navy border-brand-navy/20",
    iconBg: "bg-brand-navy/10 text-brand-navy",
  },
];

const PILLARS = [
  {
    icon: <BookOpen size={20} />,
    title: "Training & Upskilling",
    body: "Our partner training institutes prepare candidates in the most in-demand technologies and disciplines — from data science and cloud to finance and operations. Job-ready skills, practical projects, and certifications that employers recognise.",
    stat: "40+",
    statLabel: "Active Training Programmes",
    accent: "text-brand-orange",
    border: "border-brand-orange/30",
  },
  {
    icon: <Briefcase size={20} />,
    title: "Rapid Recruitment",
    body: "We help companies close open positions faster by connecting them to a pre-screened, skills-verified talent pool. Less time sourcing, more time building. Whether you need one specialist or fifty, we deliver — at pace.",
    stat: "72hr",
    statLabel: "Average Time-to-Shortlist",
    accent: "text-brand-green",
    border: "border-brand-green/30",
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

export default function Insights() {
  return (
    <ServicePageLayout
      eyebrow="INSIGHTS"
      title="The future of finding work"
      subtitle="How modern job portals, AI-driven tools, and specialist training are reshaping the way candidates find opportunities and companies build teams."
    >

      {/* ── INTRO PULL QUOTE ───────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white border-t border-[#141619]/8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-10 h-0.5 bg-brand-orange mx-auto mb-10" />
          <p className="text-2xl md:text-3xl font-black tracking-tight text-brand-navy leading-snug">
            "A modern job portal isn't just a listing board — it's an intelligent career engine that works for you around the clock."
          </p>
          <p className="mt-6 text-bp-muted text-base leading-relaxed max-w-xl mx-auto">
            Platforms like LinkedIn and Naukri laid the groundwork. One Step Beyond builds on what works and fixes what doesn't — putting smarter tools directly in candidates' hands.
          </p>
        </div>
      </section>

      {/* ── FEATURE CARDS ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-bp-bg border-t border-[#141619]/8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-10 h-0.5 bg-brand-orange mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-navy mb-4">
              Platform features that change the game
            </h2>
            <p className="text-bp-muted text-lg max-w-xl mx-auto">
              Every feature is built around one goal: reducing the friction between a great candidate and the right opportunity.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.tag}
                custom={i}
                variants={FADE}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="bg-white border border-[#141619]/8 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 hover:shadow-xl hover:border-[#141619]/15 transition-all duration-300"
              >
                {/* Left: icon + tag */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 shrink-0">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${f.iconBg}`}>
                    {f.icon}
                  </div>
                  <span className={`text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full border ${f.accent}`}>
                    {f.tag}
                  </span>
                </div>

                {/* Right: content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-black tracking-tight text-brand-navy mb-3">
                    {f.title}
                  </h3>
                  <p className="text-bp-muted leading-relaxed text-base">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO PILLARS ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-bp-surface border-t border-[#141619]/8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-10 h-0.5 bg-brand-orange mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-navy mb-4">
              Beyond the portal
            </h2>
            <p className="text-bp-muted text-lg max-w-xl mx-auto">
              Finding the job is only half the equation. We invest in the skills that get you there — and the hiring processes that make it happen faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={FADE}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className={`bg-white rounded-3xl p-10 border-t-4 ${p.border} shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${p.accent} bg-[#141619]/5`}>
                    {p.icon}
                  </div>
                  <h3 className="text-xl font-black text-brand-navy">{p.title}</h3>
                </div>
                <p className="text-bp-muted leading-relaxed mb-8">{p.body}</p>
                <div className="pt-6 border-t border-[#141619]/8">
                  <div className={`text-4xl font-black tracking-tighter ${p.accent}`}>{p.stat}</div>
                  <div className="text-sm text-bp-muted mt-1">{p.statLabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING STATEMENT ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-brand-navy">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-10 h-0.5 bg-brand-orange mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6">
            One platform.<br />Three pillars.<br />Infinite possibilities.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Job Portal. Recruitment. Training. When all three work together, candidates grow faster, companies hire smarter, and the whole ecosystem wins.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#d06515] hover:scale-[1.03] active:scale-[0.98] transition-all shadow-md"
          >
            Talk to us <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>

    </ServicePageLayout>
  );
}
