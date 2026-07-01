import { motion } from "motion/react";
import { experiences } from "../../data/content";
import { Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-5 h-[1px] bg-[#B8622C]" />
      <span
        className="text-xs text-[#B8622C] uppercase tracking-[0.2em]"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
      >
        {children}
      </span>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-28" style={{ background: "#FAFAF8" }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Experience</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#141412",
              lineHeight: 1.15,
            }}
          >
            Where I've applied my skills
          </motion.h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#B8622C] via-[rgba(184,98,44,0.2)] to-transparent hidden md:block" />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-8"
          >
            {experiences.map((exp, i) => (
              <motion.div key={exp.id} variants={fadeUp} className="relative md:pl-16">
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-[#B8622C] bg-[#FAFAF8] hidden md:flex items-center justify-center -translate-x-1/2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B8622C]" />
                </div>

                <div className="rounded-2xl bg-[rgba(255,255,255,0.6)] backdrop-blur-xl border border-[rgba(255,255,255,0.6)] shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3
                        style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "1.25rem", color: "#141412" }}
                      >
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="text-[#B8622C]"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.9rem" }}
                        >
                          {exp.company}
                        </span>
                        <span className="text-[#57564F] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                          · {exp.type}
                        </span>
                      </div>
                      <span
                        className="text-xs text-[#57564F] mt-1 block"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(184,98,44,0.08)] border border-[rgba(184,98,44,0.15)]">
                      <Star size={12} className="text-[#B8622C] fill-[#B8622C]" />
                      <span
                        className="text-xs text-[#B8622C]"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                      >
                        {exp.highlight}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((a, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.08, duration: 0.5 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1 h-1 rounded-full bg-[#B8622C] mt-2 flex-shrink-0" />
                        <span
                          className="text-sm text-[#57564F]"
                          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.65 }}
                        >
                          {a}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
