import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { navLinks, personal } from "../../data/content";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setProgress(Math.min(scrolled, 1));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const circumference = 2 * Math.PI * 14;

  return (
    <footer
      className="py-12 border-t border-[rgba(0,0,0,0.06)]"
      style={{ background: "#141412" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-[6px] bg-[#FAFAF8] flex items-center justify-center">
                <span
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "0.8rem", color: "#141412" }}
                >
                  ND
                </span>
              </div>
              <span
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, color: "#FAFAF8" }}
                className="text-sm"
              >
                Nespendra Das
              </span>
            </div>
            <p
              className="text-xs text-[rgba(250,250,248,0.45)] max-w-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Full-Stack Developer & Freelancer · Purba Bardhaman, India
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                className="text-xs text-[rgba(250,250,248,0.45)] hover:text-[rgba(250,250,248,0.85)] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-[rgba(255,255,255,0.06)]">
          <p
            className="text-xs text-[rgba(250,250,248,0.3)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Built by Nespendra Das © {new Date().getFullYear()} · All rights reserved
          </p>

          <div className="flex items-center gap-4">
            {[
              { href: personal.github, icon: <Github size={15} /> },
              { href: personal.linkedin, icon: <Linkedin size={15} /> },
              { href: `mailto:${personal.email}`, icon: <Mail size={15} /> },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(250,250,248,0.35)] hover:text-[rgba(250,250,248,0.8)] transition-colors"
              >
                {s.icon}
              </a>
            ))}

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative w-9 h-9 flex items-center justify-center"
              aria-label="Back to top"
            >
              <svg className="absolute inset-0 -rotate-90" width="36" height="36">
                <circle
                  cx="18" cy="18" r="14"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="18" cy="18" r="14"
                  fill="none"
                  stroke="#B8622C"
                  strokeWidth="1.5"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (1 - progress)}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 0.1s" }}
                />
              </svg>
              <ArrowUp size={13} className="text-[rgba(250,250,248,0.6)]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
