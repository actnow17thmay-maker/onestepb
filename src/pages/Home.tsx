import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { PieChart, BarChart3, Database, Users, ShieldCheck, Briefcase, GraduationCap, Globe, TrendingUp, Mail, Phone, ArrowRight } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // HERO SCROLL ANIMATION
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // HINGE OPENING LOGIC
  const containerRotateX = useTransform(scrollYProgress, [0, 0.4, 0.8], [50, 20, 0]);
  const lidRotateX = useTransform(scrollYProgress, [0, 0.4, 0.8], [-170, -60, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.6, 1], ["10vh", "5vh", "0vh"]);
  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [0.6, 0.9, 1.05]);
  const outerOpacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);
  const baseOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);
  const baseY = useTransform(scrollYProgress, [0.7, 1], ["0px", "200px"]);

  // FEATURE SYNC SCROLL (Section 3 mapping)
  const featuresRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: featureProgress } = useScroll({
    target: featuresRef,
    offset: ["start start", "end end"],
  });

  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    return featureProgress.onChange((latest) => {
      if (latest < 0.25) setActiveFeature(0);
      else if (latest < 0.5) setActiveFeature(1);
      else if (latest < 0.75) setActiveFeature(2);
      else setActiveFeature(3);
    });
  }, [featureProgress]);

  const OSB_FEATURES = [
    { title: "Job Portal", desc: "Our engine connects top talent with the right opportunities at scale, reducing hiring time by 40%.", icon: <Briefcase /> },
    { title: "Recruitment", desc: "Live dashboards and analytics to track performance and hiring velocity across all your open roles.", icon: <TrendingUp /> },
    { title: "Training", desc: "Full-cycle recruitment services with deep domain expertise and a pre-vetted talent network.", icon: <Users /> },
    { title: "Industries", desc: "Industry-aligned programs that accelerate careers and bridge the education-employment gap.", icon: <GraduationCap /> },
  ];

  const LOGOS = ["logoipsum", "LOGOIPSUM", "logoipsum", "LOGOIPSUM", "logoipsum"];

  return (
    <div className="bg-bp-bg text-bp-text selection:bg-bp-lime selection:text-white font-sans">

      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-30 z-0"></div>

      {/* =======================================
          SECTION 1: HERO & HINGED SCROLLING LAPTOP
          ======================================= */}
      <div ref={containerRef} className="h-[350vh] relative z-10">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center perspective-[2500px]">

          <motion.div
            className="absolute top-[12vh] md:top-[15vh] left-0 w-full text-center z-0 flex flex-col items-center px-4"
            style={{ opacity: outerOpacity }}
          >
            <div className="inline-block border border-[#141619]/15 bg-[#141619]/5 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-bp-lime mb-6 uppercase shadow-[0_0_20px_var(--color-bp-lime-glow)] mt-4 md:mt-0">
              Next Generation Talent Engine
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight mb-4 md:mb-6 max-w-4xl leading-[1.05]">
              One Step Beyond. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bp-lime to-bp-text">Hiring, Learning</span> & Opportunity.
            </h1>
            <p className="text-bp-muted max-w-xl mx-auto text-lg leading-relaxed">
              We build the technology, services, and talent engines that power the next generation of careers.
            </p>
          </motion.div>

          {/* LAPTOP ASSEMBLY MOVES UP AND SCALES TOGETHER */}
          <motion.div
            className="relative w-[95vw] md:w-[75vw] lg:w-[65vw] flex flex-col items-center z-10 perspective-[2000px]"
            style={{ y: translateY, scale }}
          >
            <motion.div
              className="relative w-full aspect-[16/10]"
              style={{ rotateX: containerRotateX, transformStyle: "preserve-3d" }}
            >
              {/* LAPTOP LID (HINGES FROM BOTTOM) */}
              <motion.div
                 className="absolute inset-0 w-full h-full rounded-t-3xl"
                 style={{
                    rotateX: lidRotateX,
                    transformOrigin: "bottom center",
                    transformStyle: "preserve-3d"
                 }}
              >
                 {/* FRONT FACE (SCREEN) */}
                 <div
                    className="absolute inset-0 bg-bp-surface rounded-t-3xl overflow-hidden flex flex-col p-4 md:p-8 border-[12px] border-[#141619]"
                    style={{ backfaceVisibility: "hidden" }}
                 >
                    <div className="flex justify-between items-center mb-8 border-b border-[#141619]/10 pb-4">
                        <div className="flex items-center gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-500"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                           <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                       <div className="text-xs text-bp-muted font-mono bg-[#141619]/5 px-3 py-1 rounded">OSB Dashboard v2.0</div>
                    </div>

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <div className="bg-[#141619]/5 border border-[#141619]/15 rounded-2xl p-6 flex flex-col justify-between">
                           <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4"><PieChart size={20} /></div>
                           <div><div className="text-4xl font-bold mb-2">95%</div><div className="text-sm text-bp-muted">Client Satisfaction Rate</div></div>
                        </div>
                        <div className="bg-[#141619]/5 border border-[#141619]/15 rounded-2xl p-6 flex flex-col justify-between">
                           <div className="w-10 h-10 rounded-lg bg-bp-lime/20 text-bp-lime flex items-center justify-center mb-4"><Database size={20} /></div>
                           <div><div className="text-4xl font-bold mb-2 text-bp-lime">120K+</div><div className="text-sm text-bp-muted">Candidates Placed Globally</div></div>
                        </div>
                        <div className="bg-[#141619]/5 border border-[#141619]/15 rounded-2xl p-6 flex flex-col justify-between">
                           <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4"><BarChart3 size={20} /></div>
                           <div><div className="text-4xl font-bold mb-2">$50K</div><div className="text-sm text-bp-muted">Average Transaction Value</div></div>
                        </div>

                        <div className="md:col-span-3 bg-gradient-to-r from-bp-secondary to-bp-surface border border-[#141619]/15 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center mt-2 relative overflow-hidden">
                           <div className="absolute right-0 top-0 w-64 h-64 bg-bp-lime/20 blur-[80px] rounded-full pointer-events-none"></div>
                           <div className="flex-1 space-y-4 relative z-10">
                              <h3 className="text-2xl font-bold">Three Pillars. One Platform.</h3>
                              <p className="text-bp-muted text-sm leading-relaxed max-w-lg">AI-powered job matching, full-cycle recruitment expertise, and industry-aligned training programs built for scale.</p>
                           </div>
                           <div className="w-32 h-32 rounded-full border-4 border-bp-lime/30 border-t-bp-lime animate-spin flex items-center justify-center relative z-10">
                              <div className="w-24 h-24 rounded-full bg-bp-lime/10 flex items-center justify-center animate-pulse">
                                 <ShieldCheck size={32} className="text-bp-lime" />
                              </div>
                           </div>
                        </div>
                    </div>
                 </div>

                 {/* BACK FACE (LAPTOP COVER) */}
                 <div
                    className="absolute inset-0 bg-gradient-to-b from-bp-surface to-bp-bg rounded-t-3xl border border-[#141619]/15 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] flex items-center justify-center"
                    style={{ transform: "rotateX(180deg)", backfaceVisibility: "hidden" }}
                 >
                     <div className="opacity-20 flex items-center justify-center w-full h-full">
                        <img src="/logo.png" alt="One Step B" className="h-48 md:h-64 object-contain scale-[1.5]" />
                     </div>
                 </div>
              </motion.div>

              {/* LAPTOP KEYBOARD BASE */}
              <motion.div
                 className="absolute top-full left-0 w-full aspect-[16/7] origin-top"
                 style={{ opacity: baseOpacity, y: baseY, transformStyle: "preserve-3d" }}
              >
                 <div className="w-full h-full bg-gradient-to-b from-[#e5e7eb] to-[#d1d5db] rounded-b-3xl border border-[#141619]/15 shadow-[0_40px_100px_rgba(0,0,0,0.3)] flex flex-col items-center p-6">
                    <div className="w-[60%] h-5 bg-[#141619] rounded-b-md mb-6 shadow-inner border-b border-white/10"></div>
                    <div className="w-[85%] flex-1 bg-[#141619] rounded-lg border border-black flex flex-wrap p-2 shadow-[inset_0_5px_20px_rgba(0,0,0,0.5)]">
                       <div className="w-full h-full bg-[radial-gradient(#374151_2px,transparent_2px)] [background-size:24px_24px] opacity-80"></div>
                    </div>
                    <div className="w-[30%] h-28 bg-[#d1d5db] rounded-md mt-6 shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] border border-[#9ca3af]/30 mb-4"></div>
                 </div>
                 <div className="absolute top-full left-0 w-full h-3 bg-bp-bg rounded-b-3xl origin-top" style={{ transform: "rotateX(-90deg)" }}></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Ensure subsequent sections are visible above background */}
      <div className="relative z-20 bg-bp-bg">

        {/* =======================================
            SECTION 2: LOGO CLOUD (Trust)
            ======================================= */}
        <section className="py-20 border-y border-[#141619]/10 bg-bp-surface">
          <p className="text-center text-sm font-bold tracking-widest text-bp-muted uppercase mb-10">Trusted By Industry Leaders</p>
          <div className="flex justify-center items-center gap-8 md:gap-20 flex-wrap opacity-50 max-w-6xl mx-auto px-6 w-full">
            {LOGOS.map((l, i) => (
              <div key={i} className="flex items-center gap-2 font-bold text-xl tracking-tighter grayscale hover:grayscale-0 transition-all duration-300">
                <Globe size={24} /> {l}
              </div>
            ))}
          </div>
        </section>

        {/* =======================================
            SECTION 3: SCROLL-SYNCED FEATURES
            ======================================= */}
        <section ref={featuresRef} className="relative h-[400vh] bg-bp-bg">
          <div className="sticky top-0 h-screen flex items-center px-6 md:px-12 max-w-7xl mx-auto py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">

              {/* Left Side: Navigation List */}
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-[-24px] top-0 bottom-0 w-[2px] bg-[#141619]/10 rounded-full hidden lg:block">
                  <motion.div
                    className="w-full bg-bp-lime rounded-full"
                    style={{ height: "25%", y: `${activeFeature * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>

                {OSB_FEATURES.map((feat, idx) => (
                  <div key={idx} className={`transition-all duration-500 cursor-pointer pb-6 ${activeFeature === idx ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className={`shrink-0 p-2 md:p-3 rounded-lg ${activeFeature === idx ? 'bg-bp-lime/20 text-bp-lime' : 'bg-[#141619]/5 text-bp-muted'}`}>
                        {feat.icon}
                      </div>
                      <div className="flex flex-col flex-1 pt-1">
                        <h3 className="text-xl md:text-3xl font-bold mb-2">{feat.title}</h3>
                        <AnimatePresence>
                          {activeFeature === idx && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="text-bp-muted text-base md:text-lg leading-relaxed pb-2 pr-4">
                                {feat.desc}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side: Dynamic Visual/Mockup */}
              <div className="hidden lg:flex justify-center relative">
                <div className="w-[500px] h-[500px] bg-gradient-to-tr from-bp-surface to-bp-bg rounded-[2rem] border border-[#141619]/15 shadow-2xl relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-bp-lime/20 blur-3xl rounded-full mix-blend-screen animate-pulse"></div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="relative z-10 w-full h-full flex flex-col p-8"
                    >
                      <div className="text-bp-lime mb-6 p-4 rounded-xl bg-bp-lime/10 inline-block w-max">
                        {OSB_FEATURES[activeFeature].icon}
                      </div>
                      <h4 className="text-3xl font-bold mb-4">{OSB_FEATURES[activeFeature].title}</h4>

                      <div className="w-full h-full bg-bp-bg rounded-xl border border-[#141619]/10 shadow-sm p-8 flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-bp-lime to-transparent"></div>
                      <div className="w-16 h-16 rounded-full bg-bp-lime/10 flex items-center justify-center text-bp-lime mb-6">
                        {OSB_FEATURES[activeFeature].icon}
                      </div>
                      <div className="space-y-4 w-full max-w-[200px] opacity-20">
                        <div className="w-full h-12 bg-[#141619]/5 rounded-lg"></div>
                        <div className="w-3/4 h-12 bg-[#141619]/5 rounded-lg"></div>
                        <div className="w-full h-32 bg-[#141619]/5 rounded-lg border border-[#141619]/15 mt-8 flex items-center justify-center">
                           <div className="w-8 h-8 rounded-full border-2 border-bp-lime border-t-transparent animate-spin"></div>
                        </div>
                      </div>
                      <div className="text-bp-muted text-sm font-mono tracking-widest mt-4">VISUALIZING DATA...</div>
                        </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================
            SECTION 4: INVESTORS
            ======================================= */}
        <section id="investors" className="py-20 md:py-32 px-6 bg-bp-surface border-t border-[#141619]/10 relative overflow-hidden flex flex-col items-center justify-center scroll-mt-20">

          <div className="text-center max-w-3xl mb-12 md:mb-20 relative z-10 mx-auto">
            <h2 className="text-bp-lime font-bold tracking-widest uppercase text-sm mb-4">Our Backers</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-bp-text tracking-tighter leading-tight">
              Backed by visionary investors and global industry leaders.
            </h3>
          </div>

          <div className="max-w-6xl w-full mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

              <div className="group relative h-32 bg-[#141619]/5 hover:bg-white rounded-2xl border border-[#141619]/10 hover:border-[#141619]/30 transition-all duration-500 flex items-center justify-center hover:shadow-xl cursor-pointer overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="font-black text-2xl tracking-tighter text-[#141619] transition-colors">Quantum</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#141619]/50 transition-colors">Partners</span>
                </div>
              </div>

              <div className="group relative h-32 bg-[#141619]/5 hover:bg-white rounded-2xl border border-[#141619]/10 hover:border-[#141619]/30 transition-all duration-500 flex items-center justify-center hover:shadow-xl cursor-pointer overflow-hidden">
                 <div className="flex items-center gap-2 text-[#141619] transition-colors">
                   <Globe size={28} strokeWidth={1.5} className="opacity-80" />
                   <span className="font-bold text-xl tracking-tight">Nexus Capital</span>
                 </div>
              </div>

              <div className="group relative h-32 bg-[#141619]/5 hover:bg-white rounded-2xl border border-[#141619]/10 hover:border-[#141619]/30 transition-all duration-500 flex items-center justify-center hover:shadow-xl cursor-pointer overflow-hidden">
                 <div className="flex items-center gap-2 text-[#141619] transition-colors">
                   <ShieldCheck size={28} strokeWidth={1.5} className="opacity-80" />
                   <span className="font-bold text-xl tracking-tight">Vertex Ventures</span>
                 </div>
              </div>

              <div className="group relative h-32 bg-[#141619]/5 hover:bg-white rounded-2xl border border-[#141619]/10 hover:border-[#141619]/30 transition-all duration-500 flex items-center justify-center hover:shadow-xl cursor-pointer overflow-hidden">
                 <div className="flex flex-col items-center justify-center text-[#141619] transition-colors">
                   <span className="font-black text-2xl tracking-widest uppercase">Pinnacle</span>
                   <span className="text-[9px] font-bold tracking-[0.3em] opacity-50">Holdings Group</span>
                 </div>
              </div>

              <div className="group relative h-32 bg-[#141619]/5 hover:bg-white rounded-2xl border border-[#141619]/10 hover:border-[#141619]/30 transition-all duration-500 flex items-center justify-center hover:shadow-xl cursor-pointer overflow-hidden">
                 <div className="flex items-center gap-2 text-[#141619] transition-colors">
                   <TrendingUp size={28} strokeWidth={1.5} className="opacity-80" />
                   <span className="font-bold text-xl tracking-tight">Horizon Tech</span>
                 </div>
              </div>

              <div className="group relative h-32 bg-[#141619]/5 hover:bg-white rounded-2xl border border-[#141619]/10 hover:border-[#141619]/30 transition-all duration-500 flex items-center justify-center hover:shadow-xl cursor-pointer overflow-hidden">
                 <div className="flex items-center gap-2 text-[#141619] transition-colors">
                   <Database size={28} strokeWidth={1.5} className="opacity-80" />
                   <span className="font-bold text-xl tracking-tight">DataCore</span>
                 </div>
              </div>

              <div className="col-span-2 md:col-span-2 lg:col-span-2 group relative h-32 bg-[#141619] text-white hover:bg-bp-lime rounded-2xl border border-[#141619]/10 transition-all duration-500 flex items-center justify-center hover:shadow-[0_20px_50px_rgba(10,33,192,0.3)] cursor-pointer overflow-hidden">
                 <div className="flex flex-col items-center justify-center text-center">
                   <span className="text-sm text-white/70 font-medium mb-1">Lead Investor</span>
                   <span className="font-black text-3xl tracking-tighter text-white">Aparna</span>
                   <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Constructions</span>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* =======================================
            SECTION 5: GLOBAL PRESENCE & CONTACT
            ======================================= */}
        <section id="contact" className="py-20 md:py-32 px-6 bg-bp-surface border-t border-[#141619]/10 relative overflow-hidden scroll-mt-20">
          <div className="max-w-6xl mx-auto relative z-10">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-8">
              <div>
                <h2 className="text-6xl md:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-bp-lime to-bp-text leading-none tracking-tighter">
                  Global
                </h2>
                <p className="text-2xl md:text-3xl font-bold mt-2">Presence & Contact</p>
              </div>
              <p className="text-bp-muted max-w-sm text-lg">We operate across borders, providing world-class talent and training solutions worldwide.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

               {/* Locations Card (Span 8) */}
               <div className="col-span-1 lg:col-span-8 bg-[#141619]/5 rounded-3xl p-8 md:p-12 border border-[#141619]/15 hover:border-bp-lime/50 transition-colors group relative overflow-hidden flex flex-col justify-between">
                 <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#141619_1px,transparent_1px)] [background-size:20px_20px]"></div>

                 <div className="relative z-10 mb-12">
                   <h3 className="text-2xl font-bold mb-4">Our Offices</h3>
                   <p className="text-bp-muted max-w-md">Strategically located to serve the fastest-growing markets and the most demanding financial hubs.</p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    <div className="bg-white rounded-2xl p-6 border border-[#141619]/10 shadow-sm hover:shadow-xl transition-all group/loc">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 rounded-full bg-bp-lime animate-pulse"></div>
                        <h4 className="font-bold text-xl">India</h4>
                      </div>
                      <p className="text-sm text-bp-muted font-medium mb-1">Hyderabad HQ</p>
                      <p className="text-xs text-bp-muted/70">Talent Engine & Core Ops</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-[#141619]/10 shadow-sm hover:shadow-xl transition-all group/loc">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 rounded-full bg-blue-500 group-hover/loc:animate-pulse"></div>
                        <h4 className="font-bold text-xl">USA</h4>
                      </div>
                      <p className="text-sm text-bp-muted font-medium mb-1">North America</p>
                      <p className="text-xs text-bp-muted/70">Client Relations & Strategy</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-[#141619]/10 shadow-sm hover:shadow-xl transition-all group/loc">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 rounded-full bg-amber-500 group-hover/loc:animate-pulse"></div>
                        <h4 className="font-bold text-xl">Dubai</h4>
                      </div>
                      <p className="text-sm text-bp-muted font-medium mb-1">Middle East</p>
                      <p className="text-xs text-bp-muted/70">Expansion & Partnerships</p>
                    </div>
                 </div>
               </div>

               {/* Contact Card (Span 4) */}
               <div className="col-span-1 lg:col-span-4 bg-[#141619] text-white rounded-3xl p-8 md:p-12 border border-[#141619]/15 shadow-2xl flex flex-col justify-between group">
                 <div>
                   <div className="w-16 h-16 rounded-2xl bg-bp-lime/20 flex items-center justify-center text-bp-lime mb-8">
                     <Mail size={32} strokeWidth={1.5} />
                   </div>
                   <h3 className="text-3xl font-black mb-4 tracking-tight">Let's Talk</h3>
                   <p className="text-white/60 mb-8">Ready to scale your talent engine? Reach out to our team directly.</p>

                   <div className="space-y-6">
                     <a href="mailto:hr@onestepb.com" className="flex items-center gap-4 group/link">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-bp-lime group-hover/link:text-[#141619] transition-colors">
                         <Mail size={16} />
                       </div>
                       <span className="font-medium text-lg hover:text-bp-lime transition-colors">hr@onestepb.com</span>
                     </a>
                     <a href="tel:+919100585144" className="flex items-center gap-4 group/link">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-bp-lime group-hover/link:text-[#141619] transition-colors">
                         <Phone size={16} />
                       </div>
                       <span className="font-medium text-lg hover:text-bp-lime transition-colors">+91 91005 85144</span>
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

      </div>
    </div>
  );
}
