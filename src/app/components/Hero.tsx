import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { personal, stats } from "../../data/content";
import { ArrowDown, Download, ChevronRight } from "lucide-react";

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        let start = 0;
        const duration = 1200;
        const step = () => {
          start += 16;
          setCount(Math.min(Math.round((start / duration) * value), value));
          if (start < duration) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, started]);

  return (
    <div ref={ref} className="text-center px-4 py-3">
      <div
        className="text-2xl text-[#B8622C]"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
      >
        {count}{suffix}
      </div>
      <div
        className="text-xs text-[#57564F] mt-0.5 whitespace-nowrap"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {label}
      </div>
    </div>
  );
}

function MagneticButton({ children, className, onClick, href }: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}) {
  const btnRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({ x: (e.clientX - cx) * 0.2, y: (e.clientY - cy) * 0.2 });
  };
  const onLeave = () => setPos({ x: 0, y: 0 });

  const props = {
    ref: btnRef as any,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    onClick,
    className,
  };

  return (
    <motion.button
      {...props}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.button>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const headlineWords = personal.tagline.split(" ");

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
  };
  const word = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#FAFAF8" }}
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] max-w-3xl max-h-3xl rounded-full opacity-[0.18]"
          style={{
            background: "radial-gradient(circle, #D97B3F 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-15%] w-[60vw] h-[60vw] max-w-2xl max-h-2xl rounded-full opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, #1F4D3C 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.7)] backdrop-blur-xl border border-[rgba(255,255,255,0.6)] shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
        >
          <span className="text-base">🎯</span>
          <span
            className="text-sm text-[#57564F]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Currently: {personal.currentFocus}
          </span>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-6"
          style={{ maxWidth: "900px" }}
        >
          <h1
            className="leading-[1.05] text-[#141412]"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 7vw, 5.2rem)",
            }}
          >
            {headlineWords.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                <motion.span variants={word} className="inline-block">
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-10 text-[#57564F] max-w-2xl"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            lineHeight: 1.65,
          }}
        >
          {personal.subHeadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-14"
        >
          <MagneticButton
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#B8622C] text-white transition-all hover:bg-[#A0541F] shadow-[0_4px_20px_rgba(184,98,44,0.35)]"
          >
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>View My Work</span>
            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </MagneticButton>

          <a
            href={personal.resume}
            download
            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-[rgba(0,0,0,0.15)] bg-[rgba(255,255,255,0.55)] backdrop-blur-xl text-[#141412] hover:border-[#B8622C] hover:text-[#B8622C] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            <Download size={15} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="inline-flex items-center divide-x divide-[rgba(0,0,0,0.08)] rounded-2xl bg-[rgba(255,255,255,0.65)] backdrop-blur-xl border border-[rgba(255,255,255,0.6)] shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
        >
          {stats.map((s) => (
            <AnimatedStat key={s.label} {...s} />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span
          className="text-xs text-[#57564F] uppercase tracking-widest"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-[#57564F]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
