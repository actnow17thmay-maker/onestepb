import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, MessageCircle, Menu, X } from "lucide-react";
import { scrollToTop } from "./SmoothScroll";

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const LINKEDIN_URL = "https://www.linkedin.com/company/onestepb/";
const WHATSAPP_URL = "https://wa.me/919100585144";

export default function Nav() {
  const { pathname } = useLocation();
  const showWhatsApp = pathname !== "/contact";
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  // If already on the target path, just scroll to top instead of navigating
  const handleSamePageLink = (to: string) => (e: React.MouseEvent) => {
    if (pathname === to) {
      e.preventDefault();
      scrollToTop();
    }
    close();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 px-5 md:px-6 flex justify-between items-center z-50 bg-bp-bg/90 backdrop-blur-md border-b border-[#141619]/5 h-[64px]">
        {/* Logo */}
        <Link to="/" onClick={handleSamePageLink("/")}>
          <img src="/logo.png" alt="One Step B" className="h-24 md:h-28 object-contain scale-[1.2] origin-left" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-bp-muted items-center">
          <Link to="/" onClick={handleSamePageLink("/")} className="hover:text-bp-text transition-colors">Home</Link>
          <Link to="/about" className="hover:text-bp-text transition-colors">About</Link>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-bp-text transition-colors py-4 -my-4">
              What we do <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-[calc(100%+0.5rem)] left-0 w-48 bg-bp-surface border border-[#141619]/10 rounded-xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 flex flex-col p-2 z-50">
              <Link to="/services/job-portal" className="px-4 py-2 hover:bg-[#141619]/5 rounded-lg transition-colors text-bp-text">Job Portal</Link>
              <Link to="/services/recruitment" className="px-4 py-2 hover:bg-[#141619]/5 rounded-lg transition-colors text-bp-text">Recruitment</Link>
              <Link to="/services/training" className="px-4 py-2 hover:bg-[#141619]/5 rounded-lg transition-colors text-bp-text">Training</Link>
              <Link to="/services/industries" className="px-4 py-2 hover:bg-[#141619]/5 rounded-lg transition-colors text-bp-text">Industries</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-bp-text transition-colors py-4 -my-4">
              Company <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-[calc(100%+0.5rem)] left-0 w-48 bg-bp-surface border border-[#141619]/10 rounded-xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 flex flex-col p-2 z-50">
              <Link to="/careers" className="px-4 py-2 hover:bg-[#141619]/5 rounded-lg transition-colors text-bp-text">Careers</Link>
              <Link to="/insights" className="px-4 py-2 hover:bg-[#141619]/5 rounded-lg transition-colors text-bp-text">Insights</Link>
              <a href="#investors" className="px-4 py-2 hover:bg-[#141619]/5 rounded-lg transition-colors text-bp-text">Investors</a>
              <Link to="/contact" className="px-4 py-2 hover:bg-[#141619]/5 rounded-lg transition-colors text-bp-text">Contact</Link>
            </div>
          </div>
        </div>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-bp-muted hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
            <LinkedInIcon size={20} />
          </a>
          <Link to="/contact" className="bg-brand-orange text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#d06515] transition-all">
            Get Started
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-bp-text hover:bg-[#141619]/5 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[64px] z-40 bg-white flex flex-col overflow-y-auto md:hidden">
          <div className="flex flex-col px-6 pt-6 pb-10 gap-1">

            <p className="text-[10px] tracking-[0.2em] font-bold text-bp-muted uppercase mb-3">Navigate</p>
            <Link to="/" onClick={handleSamePageLink("/")} className="py-3.5 text-lg font-semibold text-brand-navy border-b border-[#141619]/8">Home</Link>
            <Link to="/about" onClick={close} className="py-3.5 text-lg font-semibold text-brand-navy border-b border-[#141619]/8">About</Link>
            <Link to="/careers" onClick={close} className="py-3.5 text-lg font-semibold text-brand-navy border-b border-[#141619]/8">Careers</Link>
            <Link to="/insights" onClick={close} className="py-3.5 text-lg font-semibold text-brand-navy border-b border-[#141619]/8">Insights</Link>
            <Link to="/contact" onClick={close} className="py-3.5 text-lg font-semibold text-brand-navy border-b border-[#141619]/8">Contact</Link>

            <p className="text-[10px] tracking-[0.2em] font-bold text-bp-muted uppercase mt-6 mb-3">What We Do</p>
            <Link to="/services/job-portal" onClick={close} className="py-3 text-base font-medium text-brand-navy border-b border-[#141619]/8 flex items-center justify-between">Job Portal <ChevronDown size={14} className="-rotate-90 opacity-40" /></Link>
            <Link to="/services/recruitment" onClick={close} className="py-3 text-base font-medium text-brand-navy border-b border-[#141619]/8 flex items-center justify-between">Recruitment <ChevronDown size={14} className="-rotate-90 opacity-40" /></Link>
            <Link to="/services/training" onClick={close} className="py-3 text-base font-medium text-brand-navy border-b border-[#141619]/8 flex items-center justify-between">Training <ChevronDown size={14} className="-rotate-90 opacity-40" /></Link>
            <Link to="/services/industries" onClick={close} className="py-3 text-base font-medium text-brand-navy border-b border-[#141619]/8 flex items-center justify-between">Industries <ChevronDown size={14} className="-rotate-90 opacity-40" /></Link>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={close}
                className="w-full py-4 bg-brand-orange text-white rounded-2xl font-bold text-center text-base hover:bg-[#d06515] transition-all"
              >
                Get Started
              </Link>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#141619]/5 text-brand-navy rounded-2xl font-bold text-center text-base flex items-center justify-center gap-2"
              >
                <LinkedInIcon size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp button — hidden on /contact */}
      {showWhatsApp && (
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-[88px] right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle size={26} className="text-white" fill="white" />
        </a>
      )}
    </>
  );
}
