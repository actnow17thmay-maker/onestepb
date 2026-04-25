import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Link } from "react-router-dom";
import {
  PieChart,
  BarChart3,
  Database,
  Users,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Globe,
  TrendingUp,
  Mail,
  Phone,
  ArrowRight,
  Search,
  Building2,
  HeartPulse,
  Code2,
  DollarSign,
  Lightbulb,
  Target,
  Handshake,
  Rocket,
} from "lucide-react";
import CountUp from "../components/ui/CountUp";

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── DATA ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    number: "01",
    eyebrow: "Connect",
    title: "Job Portal",
    desc: "AI-powered matching engine that connects top talent with the right opportunities at scale.",
    link: "/services/job-portal",
    icon: <Briefcase size={40} strokeWidth={1.5} />,
    bg: "bg-brand-navy",
    textClass: "text-white",
    descClass: "text-white/60",
    accentClass: "text-brand-blue",
    btnClass: "bg-brand-orange text-white hover:bg-[#d06515]",
    dotClass: "bg-white/30",
    activeDotClass: "bg-white",
  },
  {
    number: "02",
    eyebrow: "Scale",
    title: "Recruitment",
    desc: "Full-cycle recruitment services with deep domain expertise and a pre-vetted talent network.",
    link: "/services/recruitment",
    icon: <Users size={40} strokeWidth={1.5} />,
    bg: "bg-[#FDF5EE]",
    textClass: "text-brand-navy",
    descClass: "text-bp-muted",
    accentClass: "text-brand-orange",
    btnClass: "border-2 border-brand-orange text-brand-orange hover:bg-brand-navy hover:text-white hover:border-brand-navy",
    dotClass: "bg-brand-navy/20",
    activeDotClass: "bg-brand-navy",
  },
  {
    number: "03",
    eyebrow: "Grow",
    title: "Training",
    desc: "Industry-aligned programs that accelerate careers and bridge the education-employment gap.",
    link: "/services/training",
    icon: <GraduationCap size={40} strokeWidth={1.5} />,
    bg: "bg-[#F2F8EC]",
    textClass: "text-brand-navy",
    descClass: "text-bp-muted",
    accentClass: "text-brand-green",
    btnClass: "border-2 border-brand-green text-brand-green hover:bg-brand-navy hover:text-white hover:border-brand-navy",
    dotClass: "bg-brand-navy/20",
    activeDotClass: "bg-brand-navy",
  },
  {
    number: "04",
    eyebrow: "Expand",
    title: "Industries",
    desc: "Sector expertise across finance, technology, healthcare, manufacturing, and beyond.",
    link: "/services/industries",
    icon: <Building2 size={40} strokeWidth={1.5} />,
    bg: "bg-[#EEF4FB]",
    textClass: "text-brand-navy",
    descClass: "text-bp-muted",
    accentClass: "text-brand-blue",
    btnClass: "border-2 border-brand-blue text-brand-blue hover:bg-brand-navy hover:text-white hover:border-brand-navy",
    dotClass: "bg-brand-navy/20",
    activeDotClass: "bg-brand-navy",
  },
];

const STATS = [
  { value: 40, suffix: "%", label: "Faster hiring time" },
  { value: 10, suffix: "K+", label: "Active candidates" },
  { value: 200, suffix: "+", label: "Partner companies" },
  { value: 15, suffix: "+", label: "Industries served" },
];

const STEPS = [
  {
    title: "Discover",
    desc: "We audit your talent needs, culture, and growth targets to build a precise hiring blueprint.",
    icon: <Lightbulb size={20} />,
  },
  {
    title: "Match",
    desc: "Our AI engine surfaces the highest-signal candidates from a network of 10,000+ vetted professionals.",
    icon: <Target size={20} />,
  },
  {
    title: "Engage",
    desc: "End-to-end candidate management — interviews, assessments, and offer negotiation handled for you.",
    icon: <Handshake size={20} />,
  },
  {
    title: "Grow",
    desc: "Onboarding support, 90-day check-ins, and training programs to ensure every hire succeeds.",
    icon: <Rocket size={20} />,
  },
];

const JOB_CATEGORIES = [
  { label: "Technology", icon: <Code2 size={10} />, color: "bg-brand-blue/10 text-brand-blue border-brand-blue/20" },
  { label: "Finance", icon: <DollarSign size={10} />, color: "bg-brand-orange/10 text-brand-orange border-brand-orange/20" },
  { label: "Healthcare", icon: <HeartPulse size={10} />, color: "bg-brand-green/10 text-brand-green border-brand-green/20" },
  { label: "Operations", icon: <Building2 size={10} />, color: "bg-brand-navy/10 text-brand-navy border-brand-navy/20" },
];

const SAMPLE_JOBS = [
  { title: "Senior Data Analyst", company: "Quantum Partners", location: "Hyderabad", tag: "Full-time", salary: "₹18–24 LPA" },
  { title: "Product Manager", company: "Nexus Capital", location: "Bangalore", tag: "Remote", salary: "₹22–30 LPA" },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Home() {
  const prefersReduced = useReducedMotion();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const isSimpleMode = !!prefersReduced || isMobile;

  // ── Refs ─────────────────────────────────────────────────────────────────
  const containerRef = useRef<HTMLDivElement>(null);
  const servicesOuterRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // ── Hero scroll ───────────────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const containerRotateX = useTransform(scrollYProgress, [0, 0.4, 0.8], [50, 20, 0]);
  const lidRotateX = useTransform(scrollYProgress, [0, 0.4, 0.8], [-170, -60, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.6, 1], ["10vh", "5vh", "0vh"]);
  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [0.6, 0.9, 1.05]);
  const outerOpacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);
  const baseOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);
  const baseY = useTransform(scrollYProgress, [0.7, 1], ["0px", "200px"]);
  const dashboardOpacity = useTransform(scrollYProgress, [0.7, 0.85], [1, 0]);
  const screenContentOpacity = useTransform(scrollYProgress, [0.82, 0.95], [0, 1]);

  // ── Services scroll ───────────────────────────────────────────────────────
  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesOuterRef,
    offset: ["start start", "end end"],
  });
  const servicesX = useTransform(servicesProgress, [0, 1], ["0%", "-75%"]);

  // ── Timeline scroll ───────────────────────────────────────────────────────
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });
  const step1Opacity = useTransform(timelineProgress, [0, 0.15], [0.3, 1]);
  const step2Opacity = useTransform(timelineProgress, [0.25, 0.4], [0.3, 1]);
  const step3Opacity = useTransform(timelineProgress, [0.5, 0.65], [0.3, 1]);
  const step4Opacity = useTransform(timelineProgress, [0.75, 0.9], [0.3, 1]);
  const stepOpacities = [step1Opacity, step2Opacity, step3Opacity, step4Opacity];

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="bg-bp-bg text-bp-text selection:bg-brand-orange selection:text-white font-sans">
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-30 z-0" />

      {/* ══════════════════════════════════════════════════════════════════
          §1  HERO — LAPTOP HINGE
          ══════════════════════════════════════════════════════════════════ */}
      <div ref={containerRef} className="h-[350vh] relative z-10">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center perspective-[2500px]">

          {/* Hero text */}
          <motion.div
            className="absolute top-[12vh] md:top-[14vh] left-0 w-full text-center z-0 flex flex-col items-center px-4"
            style={{ opacity: outerOpacity }}
          >
            <div className="flex flex-col items-center gap-2 mb-5">
              <div className="w-8 h-0.5 bg-brand-orange" />
              <span className="text-[10px] tracking-[0.25em] font-semibold text-brand-navy uppercase mt-1">
                One Step Beyond
              </span>
            </div>
            <h1 className="text-[clamp(2.4rem,5.5vw,4.8rem)] font-black tracking-tighter mb-4 max-w-3xl leading-[1.05] text-brand-navy">
              Business.<br />Strategy. Growth.
            </h1>
            <p className="text-bp-muted max-w-md mx-auto text-base md:text-lg leading-relaxed">
              The talent engine powering the next generation of careers and organisations.
            </p>
          </motion.div>

          {/* Laptop assembly */}
          <motion.div
            className="relative w-[95vw] md:w-[75vw] lg:w-[65vw] flex flex-col items-center z-10 perspective-[2000px]"
            style={{ y: translateY, scale }}
          >
            <motion.div
              className="relative w-full aspect-[16/10]"
              style={{ rotateX: containerRotateX, transformStyle: "preserve-3d" }}
            >
              {/* ── LID ─── */}
              <motion.div
                className="absolute inset-0 w-full h-full rounded-t-3xl"
                style={{
                  rotateX: lidRotateX,
                  transformOrigin: "bottom center",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* SCREEN FACE */}
                <div
                  className="absolute inset-0 bg-bp-surface rounded-t-3xl overflow-hidden flex flex-col border-[12px] border-[#141619]"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* Chrome bar */}
                  <div className="flex justify-between items-center px-4 py-2.5 border-b border-[#141619]/10 bg-[#F8F9FA] shrink-0">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="text-[10px] text-bp-muted font-mono bg-[#141619]/5 px-2.5 py-1 rounded-md">
                      jobs.onestepb.com
                    </div>
                    <div className="w-16" />
                  </div>

                  {/* Content area — two layers cross-fade */}
                  <div className="flex-1 relative overflow-hidden">

                    {/* Dashboard (fades out) */}
                    <motion.div
                      className="absolute inset-0 grid grid-cols-3 gap-3 p-4"
                      style={{ opacity: dashboardOpacity }}
                    >
                      <div className="bg-[#141619]/5 border border-[#141619]/10 rounded-xl p-4 flex flex-col justify-between">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center"><PieChart size={16} /></div>
                        <div>
                          <div className="text-2xl font-bold">95%</div>
                          <div className="text-[10px] text-bp-muted">Client Satisfaction</div>
                        </div>
                      </div>
                      <div className="bg-[#141619]/5 border border-[#141619]/10 rounded-xl p-4 flex flex-col justify-between">
                        <div className="w-8 h-8 rounded-lg bg-brand-green/20 text-brand-green flex items-center justify-center"><Database size={16} /></div>
                        <div>
                          <div className="text-2xl font-bold text-brand-green">120K+</div>
                          <div className="text-[10px] text-bp-muted">Candidates Placed</div>
                        </div>
                      </div>
                      <div className="bg-[#141619]/5 border border-[#141619]/10 rounded-xl p-4 flex flex-col justify-between">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center"><BarChart3 size={16} /></div>
                        <div>
                          <div className="text-2xl font-bold">$50K</div>
                          <div className="text-[10px] text-bp-muted">Avg Transaction</div>
                        </div>
                      </div>
                      <div className="col-span-3 bg-gradient-to-r from-bp-secondary to-brand-navy rounded-xl p-5 flex items-center gap-6 relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-40 h-40 bg-brand-orange/20 blur-[60px] rounded-full pointer-events-none" />
                        <div className="flex-1 text-white relative z-10">
                          <h3 className="text-sm font-bold mb-1">Three Pillars. One Platform.</h3>
                          <p className="text-white/60 text-xs">AI-powered matching, recruitment, and training at scale.</p>
                        </div>
                        <div className="w-14 h-14 rounded-full border-2 border-brand-orange/50 border-t-brand-orange animate-spin flex items-center justify-center relative z-10 shrink-0">
                          <ShieldCheck size={18} className="text-brand-orange" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Job portal mockup (fades in) */}
                    <motion.div
                      className="absolute inset-0 flex flex-col p-5 bg-[#F8F9FA]"
                      style={{ opacity: screenContentOpacity }}
                    >
                      <div className="mb-3">
                        <div className="flex items-center gap-1.5 mb-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                          <span className="text-[8px] font-bold tracking-widest uppercase text-brand-navy/40">
                            One Step Beyond · Job Portal
                          </span>
                        </div>
                        <h2 className="text-base md:text-xl font-black text-brand-navy leading-tight">
                          Find the right job.<br />Right now.
                        </h2>
                      </div>

                      {/* Search bar */}
                      <div className="flex items-center gap-2 bg-white border border-[#141619]/10 rounded-lg px-3 py-2 shadow-sm mb-3">
                        <Search size={12} className="text-bp-muted shrink-0" />
                        <span className="text-[10px] text-bp-muted flex-1">Search roles, companies, skills…</span>
                        <div className="bg-brand-orange text-white text-[8px] font-bold px-2 py-1 rounded-md shrink-0">Search</div>
                      </div>

                      {/* Categories */}
                      <p className="text-[8px] font-bold uppercase tracking-widest text-bp-muted mb-1.5">Popular Categories</p>
                      <div className="flex gap-1.5 flex-wrap mb-3">
                        {JOB_CATEGORIES.map(cat => (
                          <div key={cat.label} className={`flex items-center gap-1 text-[8px] font-semibold px-2 py-0.5 rounded-full border ${cat.color}`}>
                            {cat.icon} {cat.label}
                          </div>
                        ))}
                      </div>

                      {/* Job cards */}
                      <div className="flex-1 space-y-2 overflow-hidden">
                        {SAMPLE_JOBS.map(job => (
                          <div key={job.title} className="bg-white border border-[#141619]/8 rounded-lg p-3 flex justify-between items-center shadow-sm">
                            <div>
                              <p className="text-[10px] font-bold text-brand-navy">{job.title}</p>
                              <p className="text-[8px] text-bp-muted">{job.company} · {job.location}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-[9px] font-bold text-brand-orange">{job.salary}</p>
                              <span className="text-[7px] bg-brand-green/10 text-brand-green px-1.5 py-0.5 rounded-full font-semibold">{job.tag}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                  </div>
                </div>

                {/* LID BACK (logo) */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-bp-surface to-bp-bg rounded-t-3xl border border-[#141619]/15 flex items-center justify-center"
                  style={{ transform: "rotateX(180deg)", backfaceVisibility: "hidden" }}
                >
                  <div className="opacity-20 flex items-center justify-center w-full h-full">
                    <img src="/logo.png" alt="One Step B" className="h-48 md:h-64 object-contain scale-[1.5]" />
                  </div>
                </div>
              </motion.div>

              {/* ── KEYBOARD BASE ─── */}
              <motion.div
                className="absolute top-full left-0 w-full aspect-[16/7] origin-top"
                style={{ opacity: baseOpacity, y: baseY, transformStyle: "preserve-3d" }}
              >
                <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] rounded-b-3xl border border-[#141619]/15 shadow-[0_40px_100px_rgba(0,0,0,0.3)] flex flex-col items-center p-6">
                  <div className="w-[60%] h-4 bg-[#141619] rounded-b-md mb-5 shadow-inner border-b border-white/10" />
                  <div className="w-[85%] flex-1 bg-[#141619] rounded-lg border border-black flex flex-wrap p-2 shadow-[inset_0_5px_20px_rgba(0,0,0,0.5)]">
                    <div className="w-full h-full bg-[radial-gradient(#374151_2px,transparent_2px)] [background-size:24px_24px] opacity-80" />
                  </div>
                  <div className="w-[30%] h-24 bg-[#d1d5db] rounded-md mt-5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] border border-[#9ca3af]/30 mb-3" />
                </div>
                <div
                  className="absolute top-full left-0 w-full h-3 bg-bp-bg rounded-b-3xl origin-top"
                  style={{ transform: "rotateX(-90deg)" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── SECTIONS BELOW HERO ──────────────────────────────────────────── */}
      <div className="relative z-20 bg-bp-bg">

        {/* ══════════════════════════════════════════════════════════════════
            §2  MISSION REVEAL
            ══════════════════════════════════════════════════════════════════ */}
        <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-bp-bg">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.25em] font-semibold text-bp-muted uppercase mb-10">
              Our Mission
            </p>
            {/* Word-by-word reveal */}
            <div
              className="text-[clamp(1.9rem,4.5vw,3.6rem)] font-black tracking-tight text-brand-navy leading-[1.2]"
              aria-label="We connect talent with opportunity. At every stage of growth."
            >
              {[
                "We", "connect", "talent", "with",
                "opportunity.", "At", "every", "stage", "of", "growth.",
              ].map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.22em]"
                  initial={{ opacity: 0, y: prefersReduced ? 0 : 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            §3  SERVICES
            ══════════════════════════════════════════════════════════════════ */}
        {isSimpleMode ? (
          /* ── MOBILE / REDUCED MOTION: vertical stack ── */
          <section className="py-20 px-6 bg-bp-surface border-t border-[#141619]/10">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <div className="w-8 h-0.5 bg-brand-orange mb-5" />
                <p className="text-[10px] tracking-[0.25em] font-semibold text-bp-muted uppercase mb-3">What We Do</p>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-brand-navy">
                  Everything you need.<br />Under one roof.
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SERVICES.map((svc, i) => (
                  <motion.div
                    key={svc.title}
                    className={`${svc.bg} rounded-3xl p-8 border border-black/5`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.08 }}
                  >
                    <div className={`${svc.accentClass} mb-5`}>{svc.icon}</div>
                    <p className={`text-[10px] tracking-[0.2em] font-bold uppercase mb-2 ${svc.accentClass}`}>{svc.eyebrow}</p>
                    <h3 className={`text-2xl font-black tracking-tight mb-3 ${svc.textClass}`}>{svc.title}</h3>
                    <p className={`text-sm leading-relaxed mb-7 ${svc.descClass}`}>{svc.desc}</p>
                    <Link
                      to={svc.link}
                      className={`inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all ${svc.btnClass}`}
                    >
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          /* ── DESKTOP: horizontal pinned scroll ── */
          <div ref={servicesOuterRef} className="relative h-[400vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
              <motion.div
                className="flex h-full"
                style={{ x: servicesX }}
              >
                {SERVICES.map((svc, cardIdx) => (
                  <div
                    key={svc.title}
                    className={`relative w-screen h-full shrink-0 flex items-center ${svc.bg}`}
                  >
                    <div className="max-w-xl mx-auto px-12 md:px-20 lg:px-24">
                      {/* Giant number watermark */}
                      <span className={`block text-[9rem] font-black leading-none opacity-[0.07] mb-3 ${svc.textClass}`}>
                        {svc.number}
                      </span>

                      <div className={`mb-6 ${svc.accentClass}`}>{svc.icon}</div>

                      <p className={`text-[10px] tracking-[0.25em] font-bold uppercase mb-3 ${svc.accentClass}`}>
                        {svc.eyebrow}
                      </p>
                      <h2 className={`text-[clamp(3rem,5.5vw,5rem)] font-black tracking-tighter leading-none mb-6 ${svc.textClass}`}>
                        {svc.title}
                      </h2>
                      <p className={`text-lg leading-relaxed mb-10 max-w-md ${svc.descClass}`}>
                        {svc.desc}
                      </p>
                      <Link
                        to={svc.link}
                        className={`inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${svc.btnClass}`}
                      >
                        Learn more <ArrowRight size={16} />
                      </Link>
                    </div>

                    {/* Progress dots */}
                    <div className="absolute bottom-12 left-12 md:left-20 lg:left-24 flex gap-2 items-center">
                      {SERVICES.map((_, j) => (
                        <div
                          key={j}
                          className={`h-0.5 rounded-full transition-all duration-300 ${
                            j === cardIdx
                              ? `w-8 ${svc.activeDotClass}`
                              : `w-3 ${svc.dotClass}`
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            §4  STATS COUNT-UP
            ══════════════════════════════════════════════════════════════════ */}
        <section className="py-32 px-6 bg-bp-bg border-t border-[#141619]/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <div className="w-8 h-0.5 bg-brand-orange mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-brand-navy">
                Results that speak<br />for themselves.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.08 }}
                >
                  <div className="text-[clamp(3rem,6vw,5rem)] font-black text-brand-navy leading-none mb-3 tabular-nums">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-bp-muted font-medium leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            §5  PROCESS TIMELINE
            ══════════════════════════════════════════════════════════════════ */}
        <section
          ref={timelineRef}
          className="py-32 px-6 bg-bp-surface border-t border-[#141619]/10 relative overflow-hidden"
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-20">
              <div className="w-8 h-0.5 bg-brand-orange mb-5" />
              <p className="text-[10px] tracking-[0.25em] font-semibold text-bp-muted uppercase mb-3">Our Process</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-brand-navy">
                How we work.
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line track + animated fill */}
              <div className="absolute left-[15px] top-2 bottom-2 w-0.5">
                <div className="absolute inset-0 bg-brand-navy/10 rounded-full" />
                <motion.div
                  className="absolute inset-x-0 top-0 bg-brand-navy rounded-full origin-top"
                  style={{
                    scaleY: prefersReduced ? 1 : timelineProgress,
                    height: "100%",
                  }}
                />
              </div>

              {/* Steps */}
              <div className="space-y-16 pl-16">
                {STEPS.map((step, i) => (
                  <motion.div
                    key={step.title}
                    className="relative"
                    style={{ opacity: prefersReduced ? 1 : stepOpacities[i] }}
                  >
                    {/* Orange badge on the line */}
                    <div className="absolute -left-16 top-1 w-8 h-8 rounded-full bg-brand-orange text-white text-xs font-black flex items-center justify-center shadow-md shrink-0">
                      {i + 1}
                    </div>

                    <div className="flex items-start gap-3 mb-2">
                      <div className="text-brand-orange mt-0.5 shrink-0">{step.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight text-brand-navy leading-none">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-bp-muted leading-relaxed max-w-lg pl-8">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            PRESERVED §  INVESTORS
            ══════════════════════════════════════════════════════════════════ */}
        <section
          id="investors"
          className="py-20 md:py-32 px-6 bg-bp-bg border-t border-[#141619]/10 relative overflow-hidden flex flex-col items-center justify-center scroll-mt-20"
        >
          <div className="text-center max-w-3xl mb-12 md:mb-20 relative z-10 mx-auto">
            <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4">Our Backers</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-bp-text tracking-tighter leading-tight">
              Backed by visionary investors and global industry leaders.
            </h3>
          </div>

          <div className="max-w-6xl w-full mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="group relative h-32 bg-[#141619]/5 hover:bg-white rounded-2xl border border-[#141619]/10 hover:border-[#141619]/30 transition-all duration-500 flex items-center justify-center hover:shadow-xl cursor-pointer overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="font-black text-2xl tracking-tighter text-[#141619]">Quantum</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#141619]/50">Partners</span>
                </div>
              </div>
              <div className="group relative h-32 bg-[#141619]/5 hover:bg-white rounded-2xl border border-[#141619]/10 hover:border-[#141619]/30 transition-all duration-500 flex items-center justify-center hover:shadow-xl cursor-pointer overflow-hidden">
                <div className="flex items-center gap-2 text-[#141619]">
                  <Globe size={28} strokeWidth={1.5} className="opacity-80" />
                  <span className="font-bold text-xl tracking-tight">Nexus Capital</span>
                </div>
              </div>
              <div className="group relative h-32 bg-[#141619]/5 hover:bg-white rounded-2xl border border-[#141619]/10 hover:border-[#141619]/30 transition-all duration-500 flex items-center justify-center hover:shadow-xl cursor-pointer overflow-hidden">
                <div className="flex items-center gap-2 text-[#141619]">
                  <ShieldCheck size={28} strokeWidth={1.5} className="opacity-80" />
                  <span className="font-bold text-xl tracking-tight">Vertex Ventures</span>
                </div>
              </div>
              <div className="group relative h-32 bg-[#141619]/5 hover:bg-white rounded-2xl border border-[#141619]/10 hover:border-[#141619]/30 transition-all duration-500 flex items-center justify-center hover:shadow-xl cursor-pointer overflow-hidden">
                <div className="flex flex-col items-center justify-center text-[#141619]">
                  <span className="font-black text-2xl tracking-widest uppercase">Pinnacle</span>
                  <span className="text-[9px] font-bold tracking-[0.3em] opacity-50">Holdings Group</span>
                </div>
              </div>
              <div className="group relative h-32 bg-[#141619]/5 hover:bg-white rounded-2xl border border-[#141619]/10 hover:border-[#141619]/30 transition-all duration-500 flex items-center justify-center hover:shadow-xl cursor-pointer overflow-hidden">
                <div className="flex items-center gap-2 text-[#141619]">
                  <TrendingUp size={28} strokeWidth={1.5} className="opacity-80" />
                  <span className="font-bold text-xl tracking-tight">Horizon Tech</span>
                </div>
              </div>
              <div className="group relative h-32 bg-[#141619]/5 hover:bg-white rounded-2xl border border-[#141619]/10 hover:border-[#141619]/30 transition-all duration-500 flex items-center justify-center hover:shadow-xl cursor-pointer overflow-hidden">
                <div className="flex items-center gap-2 text-[#141619]">
                  <Database size={28} strokeWidth={1.5} className="opacity-80" />
                  <span className="font-bold text-xl tracking-tight">DataCore</span>
                </div>
              </div>
              <div className="col-span-2 md:col-span-2 lg:col-span-2 group relative h-32 bg-[#141619] text-white hover:bg-brand-orange rounded-2xl border border-[#141619]/10 transition-all duration-500 flex items-center justify-center hover:shadow-[0_20px_50px_rgba(232,119,34,0.3)] cursor-pointer overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="text-sm text-white/70 font-medium mb-1">Lead Investor</span>
                  <span className="font-black text-3xl tracking-tighter text-white">Aparna</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Constructions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            PRESERVED §  GLOBAL PRESENCE & CONTACT
            ══════════════════════════════════════════════════════════════════ */}
        <section
          id="contact"
          className="py-20 md:py-32 px-6 bg-bp-surface border-t border-[#141619]/10 relative overflow-hidden scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-8">
              <div>
                <h2 className="text-6xl md:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-brand-orange to-bp-text leading-none tracking-tighter">
                  Global
                </h2>
                <p className="text-2xl md:text-3xl font-bold mt-2">Presence & Contact</p>
              </div>
              <p className="text-bp-muted max-w-sm text-lg">
                We operate across borders, providing world-class talent and training solutions worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Locations */}
              <div className="col-span-1 lg:col-span-8 bg-[#141619]/5 rounded-3xl p-8 md:p-12 border border-[#141619]/15 hover:border-brand-orange/50 transition-colors group relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#141619_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="relative z-10 mb-12">
                  <h3 className="text-2xl font-bold mb-4">Our Offices</h3>
                  <p className="text-bp-muted max-w-md">Strategically located to serve the fastest-growing markets and the most demanding financial hubs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  <div className="bg-white rounded-2xl p-6 border border-[#141619]/10 shadow-sm hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-brand-green animate-pulse" />
                      <h4 className="font-bold text-xl">India</h4>
                    </div>
                    <p className="text-sm text-bp-muted font-medium mb-1">Hyderabad HQ</p>
                    <p className="text-xs text-bp-muted/70">Talent Engine & Core Ops</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-[#141619]/10 shadow-sm hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <h4 className="font-bold text-xl">USA</h4>
                    </div>
                    <p className="text-sm text-bp-muted font-medium mb-1">North America</p>
                    <p className="text-xs text-bp-muted/70">Client Relations & Strategy</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-[#141619]/10 shadow-sm hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <h4 className="font-bold text-xl">Dubai</h4>
                    </div>
                    <p className="text-sm text-bp-muted font-medium mb-1">Middle East</p>
                    <p className="text-xs text-bp-muted/70">Expansion & Partnerships</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="col-span-1 lg:col-span-4 bg-[#141619] text-white rounded-3xl p-8 md:p-12 border border-[#141619]/15 shadow-2xl flex flex-col justify-between group">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange/20 flex items-center justify-center text-brand-orange mb-8">
                    <Mail size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-black mb-4 tracking-tight">Let's Talk</h3>
                  <p className="text-white/60 mb-8">Ready to scale your talent engine? Reach out to our team directly.</p>
                  <div className="space-y-6">
                    <a href="mailto:hr@onestepb.com" className="flex items-center gap-4 group/link">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-brand-orange group-hover/link:text-white transition-colors">
                        <Mail size={16} />
                      </div>
                      <span className="font-medium text-lg hover:text-brand-orange transition-colors">hr@onestepb.com</span>
                    </a>
                    <a href="tel:+919100585144" className="flex items-center gap-4 group/link">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-brand-orange group-hover/link:text-white transition-colors">
                        <Phone size={16} />
                      </div>
                      <span className="font-medium text-lg hover:text-brand-orange transition-colors">+91 91005 85144</span>
                    </a>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/company/onestepb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 w-full py-4 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-xl font-bold flex justify-center items-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                >
                  <ArrowRight size={20} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            §6  CLOSING CTA — Stripe-style lift
            The App.tsx <Footer> sits immediately after <Home> in the DOM
            and naturally scrolls over this sticky navy section.
            ══════════════════════════════════════════════════════════════════ */}
        <div className="h-[200vh] relative">
          <div className="sticky top-0 h-screen z-0 bg-brand-navy flex flex-col items-center justify-center px-6 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-orange/8 blur-[140px] rounded-full" />
            </div>

            <motion.div
              className="relative z-10 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
            >
              <div className="flex flex-col items-center gap-2 mb-8">
                <div className="w-8 h-0.5 bg-brand-orange" />
                <span className="text-[10px] tracking-[0.25em] font-semibold text-white/40 uppercase mt-2">
                  Take the first step
                </span>
              </div>
              <h2 className="text-[clamp(2.4rem,5.5vw,4.8rem)] font-black tracking-tighter text-white leading-[1.05] mb-6">
                Ready to take<br />
                <span className="text-brand-orange">One Step Beyond?</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                Talk to our team today and discover how we can accelerate your talent strategy, your growth, and your people.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-brand-orange text-white px-10 py-5 rounded-full font-bold text-base hover:bg-[#d06515] hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(232,119,34,0.35)]"
              >
                Get in touch <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
