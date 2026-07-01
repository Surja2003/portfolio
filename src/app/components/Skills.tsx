import { motion } from "motion/react";
import { skills } from "../../data/content";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const chipVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, type: "spring", stiffness: 300, damping: 20 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
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

export function Skills() {
  return (
    <section id="skills" className="py-28" style={{ background: "#FAFAF8" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Skills</SectionLabel>
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
            Tools of the trade
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              <motion.h3
                variants={fadeUp}
                className="mb-4 text-sm uppercase tracking-widest text-[#57564F]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {category}
              </motion.h3>
              <div className="flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={chipVariant}
                    whileHover={{ y: -2, scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[rgba(255,255,255,0.65)] backdrop-blur-xl border border-[rgba(255,255,255,0.6)] shadow-[0_2px_8px_rgba(0,0,0,0.04)] cursor-default"
                  >
                    <span className="text-base leading-none">{skill.icon}</span>
                    <span
                      className="text-sm text-[#141412]"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
