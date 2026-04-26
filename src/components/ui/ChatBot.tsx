import { useState, useEffect, useRef } from "react";
import { Bot, X, ChevronRight, RotateCcw } from "lucide-react";

// ─── Q&A DATA ───────────────────────────────────────────────────────────────
interface QA {
  q: string;
  a: string;
  follow?: string[]; // follow-up question labels to show after this answer
}

const ALL_QA: QA[] = [
  {
    q: "What is One Step Beyond?",
    a: "One Step Beyond is a next-generation talent engine based in Hyderabad. We connect the right people to the right opportunities through three pillars — Job Portal, Recruitment, and Training — powered by technology and human insight.",
    follow: ["What services do you offer?", "How do I contact you?"],
  },
  {
    q: "What services do you offer?",
    a: "We offer three core services:\n\n• Job Portal — with smart features like Auto Apply and AI Resume Editor\n• Recruitment — fast, pre-screened talent delivery for companies\n• Training — upskilling in in-demand tech and business domains",
    follow: ["How does Auto Apply work?", "Tell me about training", "How does recruitment work?"],
  },
  {
    q: "How does Auto Apply work?",
    a: "Auto Apply lets you send applications to multiple matching jobs in one click — no repetitive form-filling. Our system matches your profile to open roles and applies on your behalf, putting you ahead of the queue automatically.",
    follow: ["What is the Auto Resume Editor?", "How do I find a job?"],
  },
  {
    q: "What is the Auto Resume Editor?",
    a: "Our AI Resume Editor reads each job description and rewrites your resume to highlight the exact skills and experience that matter for that role. Every application goes out perfectly tailored — giving you a far better chance of getting noticed.",
    follow: ["How does Auto Apply work?", "What other features are there?"],
  },
  {
    q: "What other features are there?",
    a: "Our Job Portal also includes:\n\n• Smart Job Alerts — instant notifications when matching roles appear\n• Profile Visibility Boost — surfaces your profile to active recruiters\n• Recruiter Connections — direct access to hiring decision-makers",
    follow: ["How do I find a job?", "What services do you offer?"],
  },
  {
    q: "How do I find a job?",
    a: "Visit our Job Portal, build your profile, and let our smart matching engine do the work. You can set job alerts, enable Auto Apply, and get contacted by recruiters — all from one place. Reach out via our Contact page to get started.",
    follow: ["How does Auto Apply work?", "How do I contact you?"],
  },
  {
    q: "Tell me about training",
    a: "Our training programmes prepare candidates in the most in-demand fields — technology, data, finance, operations, and more. Courses are practical, project-based, and backed by certifications that employers recognise. We partner with top institutes to deliver job-ready skills.",
    follow: ["What industries do you cover?", "How do I contact you?"],
  },
  {
    q: "How does recruitment work?",
    a: "We help companies close open positions fast. Our team sources, screens, and delivers pre-verified candidates matched to your exact requirements. Average time-to-shortlist is 72 hours. Whether you need one specialist or an entire team, we deliver at pace.",
    follow: ["What industries do you cover?", "How do I contact you?"],
  },
  {
    q: "What industries do you cover?",
    a: "We work across a wide range of industries including Technology, Finance & Banking, Healthcare, Manufacturing, Retail, and Professional Services. Our recruiter network and talent pool spans multiple sectors across India.",
    follow: ["How does recruitment work?", "How do I contact you?"],
  },
  {
    q: "Are there jobs at One Step Beyond?",
    a: "Yes! We're hiring across Recruitment, Training, Product, Sales, and Operations. Check out our Careers page for open positions. Don't see the right role? Send us an open application — we'd love to hear from exceptional people.",
    follow: ["How do I contact you?", "What services do you offer?"],
  },
  {
    q: "How do I contact you?",
    a: "You can reach us through our Contact page, send us a WhatsApp message (button in the bottom-right corner), or connect with us on LinkedIn. Our team typically responds within one business day.",
    follow: ["What services do you offer?", "Are there jobs at One Step Beyond?"],
  },
];

// Starter questions shown when chat first opens
const STARTERS = [
  "What is One Step Beyond?",
  "What services do you offer?",
  "How does Auto Apply work?",
  "Are there jobs at One Step Beyond?",
  "How do I contact you?",
];

// ─── TYPES ──────────────────────────────────────────────────────────────────
interface Message {
  id: number;
  role: "user" | "bot";
  text: string;
}

let msgId = 0;
const newId = () => ++msgId;

// ─── COMPONENT ──────────────────────────────────────────────────────────────
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>(STARTERS);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Welcome message on first open
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          id: newId(),
          role: "bot",
          text: "Hi! 👋 I'm the One Step Beyond assistant. Tap a question below or ask me anything about our services.",
        },
      ]);
    }
  }, [open, messages.length]);

  const handleQuestion = (question: string) => {
    const qa = ALL_QA.find((item) => item.q === question);
    if (!qa) return;

    // Add user bubble
    setMessages((prev) => [...prev, { id: newId(), role: "user", text: question }]);
    setSuggestions([]);
    setTyping(true);

    // Simulate a short typing delay then show answer
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: newId(), role: "bot", text: qa.a }]);
      setSuggestions(qa.follow ?? STARTERS);
    }, 700);
  };

  const reset = () => {
    setMessages([]);
    setSuggestions(STARTERS);
    setTyping(false);
  };

  return (
    <>
      {/* ── CHAT PANEL ─────────────────────────────────────────────────── */}
      {open && (
        <div className="fixed bottom-[168px] right-4 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm flex flex-col rounded-3xl shadow-2xl border border-[#141619]/10 overflow-hidden bg-white"
          style={{ maxHeight: "min(520px, calc(100dvh - 120px))" }}>

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-brand-navy shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-tight">OSB Assistant</p>
                <p className="text-white/50 text-[10px]">One Step Beyond</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={reset}
                className="text-white/40 hover:text-white/80 transition-colors p-1"
                aria-label="Restart"
                title="Start over"
              >
                <RotateCcw size={14} />
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-white/40 hover:text-white/80 transition-colors p-1"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-[#F8F9FA]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[82%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-brand-navy text-white rounded-br-sm"
                      : "bg-white text-brand-navy border border-[#141619]/8 shadow-sm rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#141619]/8 shadow-sm rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-brand-navy/40 inline-block animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {suggestions.length > 0 && !typing && (
            <div className="px-4 py-3 border-t border-[#141619]/8 bg-white shrink-0 flex flex-col gap-2">
              <p className="text-[10px] text-bp-muted font-semibold uppercase tracking-widest mb-1">
                Suggested questions
              </p>
              {suggestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleQuestion(q)}
                  className="flex items-center justify-between text-left text-sm text-brand-navy font-medium px-3 py-2.5 rounded-xl bg-[#F8F9FA] hover:bg-brand-orange/10 hover:text-brand-orange border border-[#141619]/8 hover:border-brand-orange/30 transition-all duration-200 group"
                >
                  <span>{q}</span>
                  <ChevronRight size={13} className="shrink-0 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── TOGGLE BUTTON ──────────────────────────────────────────────── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-4 md:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform bg-brand-navy"
      >
        {open
          ? <X size={22} className="text-white" />
          : <Bot size={24} className="text-white" />}
      </button>
    </>
  );
}
