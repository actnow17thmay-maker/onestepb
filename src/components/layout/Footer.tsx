import { Globe, MessageCircle } from "lucide-react";

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://www.linkedin.com/company/onestepb/";
const WHATSAPP_URL = "https://wa.me/919100585144";

export default function Footer() {
  return (
    <footer className="bg-bp-surface border-t border-[#141619]/15 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          <div className="md:col-span-4">
            <div className="mb-12 h-16 overflow-visible">
              <img src="/logo.png" alt="One Step B" className="h-28 md:h-36 object-contain scale-[1.2] origin-left" />
            </div>
            <p className="text-bp-muted text-sm leading-relaxed mb-6 max-w-xs">
              Next-generation talent acquisition and training-all under one unified mission.
            </p>
            <div className="space-y-2">
              <a href="mailto:hr@onestepb.com" className="text-sm text-bp-text hover:text-bp-lime transition-colors block font-medium">hr@onestepb.com</a>
              <a href="tel:+919100585144" className="text-sm text-bp-text hover:text-bp-lime transition-colors block font-medium">+91 91005 85144</a>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-bp-text font-bold mb-6">Products</h4>
            <ul className="space-y-3">
              <li><Link to="/services/job-portal" className="text-sm text-bp-muted hover:text-bp-lime transition-colors">Job Portal</Link></li>
              <li><Link to="/services/recruitment" className="text-sm text-bp-muted hover:text-bp-lime transition-colors">Recruitment</Link></li>
              <li><Link to="/services/training" className="text-sm text-bp-muted hover:text-bp-lime transition-colors">Training</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-bp-text font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-bp-muted hover:text-bp-lime transition-colors">About Us</Link></li>
              <li><a href="#" className="text-sm text-bp-muted hover:text-bp-lime transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-bp-muted hover:text-bp-lime transition-colors">Insights</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-bp-text font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-bp-muted hover:text-bp-lime transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-bp-muted hover:text-bp-lime transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#141619]/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-bp-muted text-sm">© 2026 OneStepB. All rights reserved.</p>
          <div className="flex gap-4 items-center">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-[#141619]/5 flex items-center justify-center text-bp-muted hover:text-[#0A66C2] transition-colors"
            >
              <LinkedInIcon size={14} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-full bg-[#141619]/5 flex items-center justify-center text-bp-muted hover:text-[#25D366] transition-colors"
            >
              <MessageCircle size={14} />
            </a>
            <div className="w-8 h-8 rounded-full bg-[#141619]/5 flex items-center justify-center text-bp-muted hover:text-bp-text transition-colors cursor-pointer">
              <Globe size={14} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
