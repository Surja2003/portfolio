import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navLinks, personal } from "../../data/content";
import { Github, Linkedin, Mail } from "lucide-react";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[rgba(250,250,248,0.82)] backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-[8px] bg-[#141412] flex items-center justify-center">
              <span
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                className="text-[#FAFAF8] text-sm tracking-tight"
              >
                ND
              </span>
            </div>
            <span
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
              className="text-[#141412] text-base hidden sm:block"
            >
              Nespendra Das
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeSection === link.href.slice(1)
                    ? "bg-[rgba(184,98,44,0.1)] text-[#B8622C]"
                    : "text-[#57564F] hover:text-[#141412] hover:bg-[rgba(0,0,0,0.04)]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Available badge */}
            <motion.div
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50"
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-emerald-700 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                Available for work
              </span>
            </motion.div>

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-[rgba(0,0,0,0.04)] transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-5 h-[1.5px] bg-[#141412] origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-[1.5px] bg-[#141412]"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-5 h-[1.5px] bg-[#141412] origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile slide-out menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-[rgba(20,20,18,0.4)] backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[rgba(250,250,248,0.95)] backdrop-blur-2xl border-l border-[rgba(255,255,255,0.6)] shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-[rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-[6px] bg-[#141412] flex items-center justify-center">
                    <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }} className="text-[#FAFAF8] text-xs">
                      ND
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[rgba(0,0,0,0.06)] transition-colors text-[#57564F]"
                >
                  ✕
                </button>
              </div>

              <nav className="flex-1 p-6 overflow-y-auto">
                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ x: 40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-colors text-lg ${
                          activeSection === link.href.slice(1)
                            ? "bg-[rgba(184,98,44,0.08)] text-[#B8622C]"
                            : "text-[#141412] hover:bg-[rgba(0,0,0,0.04)]"
                        }`}
                        style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
                      >
                        {link.label}
                        {activeSection === link.href.slice(1) && (
                          <span className="ml-2 text-sm text-[#B8622C]">←</span>
                        )}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </nav>

              <div className="p-6 border-t border-[rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-4">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:border-[#B8622C] hover:text-[#B8622C] transition-colors text-[#57564F]"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:border-[#B8622C] hover:text-[#B8622C] transition-colors text-[#57564F]"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={`mailto:${personal.email}`}
                    className="w-10 h-10 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:border-[#B8622C] hover:text-[#B8622C] transition-colors text-[#57564F]"
                  >
                    <Mail size={16} />
                  </a>
                </div>
                <p className="text-xs text-[#57564F]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {personal.email}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
