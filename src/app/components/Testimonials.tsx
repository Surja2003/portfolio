// TODO: Replace placeholder testimonials with real client quotes once collected in writing
import { motion } from "motion/react";
import { testimonials } from "../../data/content";
import { Quote } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
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

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28" style={{ background: "#FAFAF8" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Testimonials</SectionLabel>
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
            className="mb-3"
          >
            What clients say
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sm text-[#57564F] italic"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Client quotes will appear here — collecting written testimonials from recent projects.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              className="rounded-2xl bg-[rgba(255,255,255,0.6)] backdrop-blur-xl border border-[rgba(255,255,255,0.6)] shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-7 flex flex-col"
            >
              <Quote size={24} className="text-[#B8622C] opacity-40 mb-5" />
              <p
                className="text-[#57564F] flex-1 mb-6 italic"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, lineHeight: 1.6, fontSize: "1rem" }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-[rgba(0,0,0,0.05)]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-200 to-orange-100 flex items-center justify-center">
                  <span
                    style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "0.85rem", color: "#B8622C" }}
                  >
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p
                    className="text-sm text-[#141412]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs text-[#57564F]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
