import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, Trophy } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Experience() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const timeline = [
    {
      Icon: GraduationCap,
      title: "B.Tech CSE (AI & Data Science)",
      org: "Sikkim Manipal Institute of Technology",
      time: "2024 — Present",
      details: [
        "Focused on AI/DS, data analytics, and web development",
        "Coursework: DSA, DBMS, OS, NLP, Computer Vision",
      ],
    },
  ];

  const achievements = [
    {
      Icon: Trophy,
      title: "Projects on GitHub",
      description: "Regularly building and publishing projects across AI/DS, analytics, and web development",
    },
    {
      Icon: Award,
      title: "Learning & Growth",
      description: "Continuously improving through hands-on builds, practice, and coursework",
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A snapshot of my academic journey, hands-on projects, and milestones.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Timeline */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
            className="relative"
          >
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/40 via-gray-700/40 to-blue-500/40" />

            {timeline.map((row) => (
              <motion.div
                key={`${row.title}-${row.time}`}
                variants={itemVariants}
                className="relative pl-16 pb-8"
              >
                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <row.Icon className="text-white" size={18} />
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-2xl">{row.title}</h3>
                      <p className="text-gray-400">{row.org}</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                      {row.time}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    {row.details.map((d) => (
                      <li key={d} className="leading-relaxed">
                        <span className="text-purple-300/80">•</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements cards */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
            className="grid gap-6"
          >
            {achievements.map((a) => (
              <motion.div
                key={a.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-7 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <a.Icon size={18} />
                    </div>
                    <h3 className="text-2xl">{a.title}</h3>
                  </div>
                  <p className="text-gray-400">{a.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7"
            >
              <p className="text-gray-300">
                Want the full story? Reach out—I'm open to internships and entry-level positions.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 font-medium hover:opacity-95 transition"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="px-5 py-3 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm hover:bg-white/15 transition"
                >
                  View Projects
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
