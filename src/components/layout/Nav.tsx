import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

function WhatsAppIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}
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

  // Works for every internal link:
  // - If already on that page → scroll to top, don't re-navigate
  // - Otherwise → let React Router navigate normally
  // - Always closes mobile menu
  const nav = (to: string) => (e: React.MouseEvent) => {
    if (pathname === to) {
      e.preventDefault();
      scrollToTop();
    }
    close();
  };

  // Shared class for dropdown items
  const dropItem = "px-4 py-2 hover:bg-[#141619]/5 rounded-lg transition-colors text-bp-text";
  // Shared class for mobile nav items
  const mobileItem = "py-3.5 text-lg font-semibold text-brand-navy border-b border-[#141619]/8";
  const mobileSubItem = "py-3 text-base font-medium text-brand-navy border-b border-[#141619]/8 flex items-center justify-between";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 px-5 md:px-6 flex justify-between items-center z-50 bg-bp-bg/90 backdrop-blur-md border-b border-[#141619]/5 h-[64px]">

        {/* Logo */}
        <Link to="/" onClick={nav("/")}>
          <img src="/logo.png" alt="One Step B" className="h-24 md:h-28 object-contain scale-[1.2] origin-left" />
        </Link>

        {/* ── Desktop links ────────────────────────────────────────── */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-bp-muted items-center">

          <Link to="/" onClick={nav("/")} className="hover:text-bp-text transition-colors">Home</Link>
          <Link to="/about" onClick={nav("/about")} className="hover:text-bp-text transition-colors">About</Link>

          {/* What we do dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-bp-text transition-colors py-4 -my-4">
              What we do <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-[calc(100%+0.5rem)] left-0 w-48 bg-bp-surface border border-[#141619]/10 rounded-xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 flex flex-col p-2 z-50">
              <Link to="/services/job-portal"   onClick={nav("/services/job-portal")}   className={dropItem}>Job Portal</Link>
              <Link to="/services/recruitment"  onClick={nav("/services/recruitment")}  className={dropItem}>Recruitment</Link>
              <Link to="/services/training"     onClick={nav("/services/training")}     className={dropItem}>Training</Link>
              <Link to="/services/industries"   onClick={nav("/services/industries")}   className={dropItem}>Industries</Link>
            </div>
          </div>

          {/* Company dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-bp-text transition-colors py-4 -my-4">
              Company <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-[calc(100%+0.5rem)] left-0 w-48 bg-bp-surface border border-[#141619]/10 rounded-xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 flex flex-col p-2 z-50">
              <Link to="/careers"   onClick={nav("/careers")}   className={dropItem}>Careers</Link>
              <Link to="/insights"  onClick={nav("/insights")}  className={dropItem}>Insights</Link>
              <Link to="/investors" onClick={nav("/investors")} className={dropItem}>Investors</Link>
              <Link to="/contact"   onClick={nav("/contact")}   className={dropItem}>Contact</Link>
            </div>
          </div>
        </div>

        {/* ── Desktop right actions ────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-4">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-bp-muted hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
            <LinkedInIcon size={20} />
          </a>
          <Link to="/contact" onClick={nav("/contact")} className="bg-brand-orange text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#d06515] transition-all">
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

      {/* ── Mobile menu overlay ───────────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[64px] z-40 bg-white flex flex-col overflow-y-auto md:hidden">
          <div className="flex flex-col px-6 pt-6 pb-10 gap-1">

            <p className="text-[10px] tracking-[0.2em] font-bold text-bp-muted uppercase mb-3">Navigate</p>
            <Link to="/"          onClick={nav("/")}          className={mobileItem}>Home</Link>
            <Link to="/about"     onClick={nav("/about")}     className={mobileItem}>About</Link>
            <Link to="/careers"   onClick={nav("/careers")}   className={mobileItem}>Careers</Link>
            <Link to="/insights"  onClick={nav("/insights")}  className={mobileItem}>Insights</Link>
            <Link to="/investors" onClick={nav("/investors")} className={mobileItem}>Investors</Link>
            <Link to="/contact"   onClick={nav("/contact")}   className={mobileItem}>Contact</Link>

            <p className="text-[10px] tracking-[0.2em] font-bold text-bp-muted uppercase mt-6 mb-3">What We Do</p>
            <Link to="/services/job-portal"  onClick={nav("/services/job-portal")}  className={mobileSubItem}>Job Portal   <ChevronDown size={14} className="-rotate-90 opacity-40" /></Link>
            <Link to="/services/recruitment" onClick={nav("/services/recruitment")} className={mobileSubItem}>Recruitment  <ChevronDown size={14} className="-rotate-90 opacity-40" /></Link>
            <Link to="/services/training"    onClick={nav("/services/training")}    className={mobileSubItem}>Training     <ChevronDown size={14} className="-rotate-90 opacity-40" /></Link>
            <Link to="/services/industries"  onClick={nav("/services/industries")}  className={mobileSubItem}>Industries   <ChevronDown size={14} className="-rotate-90 opacity-40" /></Link>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={nav("/contact")}
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
          <WhatsAppIcon size={26} />
        </a>
      )}
    </>
  );
}
