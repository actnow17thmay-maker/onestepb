import { Link, useLocation } from "react-router-dom";
import { ChevronDown, MessageCircle } from "lucide-react";

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const LINKEDIN_URL = "https://www.linkedin.com/company/onestepb/";
const WHATSAPP_URL = "https://wa.me/917330686621";

export default function Nav() {
  const { pathname } = useLocation();
  const showWhatsApp = pathname !== "/contact";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 p-4 px-6 flex justify-between items-center z-50 bg-bp-bg/85 backdrop-blur-md border-b border-[#141619]/5">
        <div className="font-bold text-xl flex items-center tracking-tight h-10 overflow-visible">
          <Link to="/">
            <img src="/logo.png" alt="One Step B" className="h-28 md:h-32 object-contain scale-[1.2] origin-left" />
          </Link>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-bp-muted items-center">
          <Link to="/" className="hover:text-bp-text transition-colors">Home</Link>
          <Link to="/about" className="hover:text-bp-text transition-colors">About</Link>

          {/* What we do dropdown */}
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

          {/* Company dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-bp-text transition-colors py-4 -my-4">
              Company <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-[calc(100%+0.5rem)] left-0 w-48 bg-bp-surface border border-[#141619]/10 rounded-xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 flex flex-col p-2 z-50">
              <a href="#" className="px-4 py-2 hover:bg-[#141619]/5 rounded-lg transition-colors text-bp-text">Careers</a>
              <a href="#" className="px-4 py-2 hover:bg-[#141619]/5 rounded-lg transition-colors text-bp-text">Insights</a>
              <a href="#investors" className="px-4 py-2 hover:bg-[#141619]/5 rounded-lg transition-colors text-bp-text">Investors</a>
              <Link to="/contact" className="px-4 py-2 hover:bg-[#141619]/5 rounded-lg transition-colors text-bp-text">Contact</Link>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-bp-muted hover:text-[#0A66C2] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </a>
          <button className="bg-bp-lime text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_0_15px_var(--color-bp-lime-glow)] hover:shadow-[0_0_25px_var(--color-bp-lime-glow)] transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Floating WhatsApp button — hidden on /contact */}
      {showWhatsApp && (
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle size={26} className="text-white" fill="white" />
        </a>
      )}
    </>
  );
}
