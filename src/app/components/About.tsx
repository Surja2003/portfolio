import { motion } from "motion/react";
import { personal, currentlyLearning, languages } from "../../data/content";
import { MapPin, BookOpen, GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
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

export function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: "#F7F6F3" }}>
      <div
        className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-xl opacity-[0.07] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #B8622C 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT — Bio + profile photo + education */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>About Me</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 5vw, 3.2rem)",
                  color: "#141412",
                  lineHeight: 1.1,
                }}
                className="mb-6"
              >
                Shipping real products <br />
                <em style={{ fontStyle: "italic", color: "#B8622C" }}>while building the future.</em>
              </motion.h2>

              {/* Profile photo + bio side-by-side on md+ */}
              <motion.div variants={fadeUp} className="flex gap-5 mb-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-[rgba(184,98,44,0.2)] shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
                    <img
                      src={personal.profilePhoto}
                      alt="Nespendra Das"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div>
                  <p
                    className="text-[#57564F] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7, fontSize: "0.97rem" }}
                  >
                    {personal.bio}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex items-center gap-2 mt-2 text-sm text-[#57564F]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <MapPin size={14} className="text-[#B8622C]" />
                {personal.location} · {personal.availability}
              </motion.div>

              {/* Education card */}
              <motion.div
                variants={fadeUp}
                className="mt-6 rounded-2xl bg-[rgba(255,255,255,0.6)] backdrop-blur-xl border border-[rgba(255,255,255,0.6)] shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap size={16} className="text-[#B8622C]" />
                  <span
                    className="text-sm text-[#141412]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                  >
                    Education
                  </span>
                </div>
                <p
                  className="text-sm text-[#141412]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  {personal.education.degree}
                </p>
                <p className="text-xs text-[#B8622C] mt-0.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                  {personal.education.institution}
                </p>
                <p className="text-xs text-[#57564F] mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {personal.education.period} · {personal.education.location}
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT — Currently Learning + Languages */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="rounded-2xl bg-[rgba(255,255,255,0.6)] backdrop-blur-xl border border-[rgba(255,255,255,0.6)] shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-6"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-5">
                <BookOpen size={16} className="text-[#B8622C]" />
                <span
                  className="text-sm text-[#141412]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  Currently Learning
                </span>
              </motion.div>
              <motion.div variants={stagger} className="space-y-2">
                {currentlyLearning.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[rgba(184,98,44,0.04)] border border-[rgba(184,98,44,0.08)]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B8622C] mt-1.5 flex-shrink-0" />
                    <span
                      className="text-sm text-[#57564F]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="rounded-2xl bg-[rgba(255,255,255,0.6)] backdrop-blur-xl border border-[rgba(255,255,255,0.6)] shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-6"
            >
              <motion.div variants={fadeUp} className="mb-5">
                <span
                  className="text-sm text-[#141412]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  Languages
                </span>
              </motion.div>
              <motion.div variants={stagger} className="space-y-4">
                {languages.map((lang) => (
                  <motion.div key={lang.name} variants={fadeUp} className="flex items-center justify-between">
                    <div>
                      <span
                        className="text-sm text-[#141412] block"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                      >
                        {lang.name}
                      </span>
                      <span
                        className="text-xs text-[#57564F]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {lang.level}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.07, type: "spring", stiffness: 400 }}
                          className={`h-1.5 rounded-full ${
                            i < lang.dots ? "bg-[#B8622C] w-5" : "bg-[rgba(0,0,0,0.08)] w-2"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
