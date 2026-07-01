import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects, type ProjectCategory } from "../../data/content";
import { ExternalLink, Github } from "lucide-react";

const categories: ProjectCategory[] = ["All", "Freelance", "Hackathon", "Personal"];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const gradients: Record<number, string> = {
  1: "from-amber-100 to-orange-50",
  2: "from-emerald-100 to-teal-50",
  3: "from-orange-100 to-amber-50",
  4: "from-teal-100 to-emerald-50",
  5: "from-amber-100 to-yellow-50",
  6: "from-slate-100 to-zinc-50",
  7: "from-red-100 to-orange-50",
  8: "from-blue-100 to-indigo-50",
  9: "from-violet-100 to-purple-50",
  10: "from-sky-100 to-blue-50",
  11: "from-emerald-100 to-green-50",
  12: "from-yellow-100 to-amber-50",
};

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariant}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.65)] backdrop-blur-xl border border-[rgba(255,255,255,0.6)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col"
    >
      <div
        className={`relative h-44 bg-gradient-to-br ${gradients[project.id] || "from-gray-100 to-gray-50"} overflow-hidden`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: "4rem",
              color: project.accent || "#B8622C",
              opacity: 0.15,
            }}
          >
            {project.title[0]}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span
            className="text-xs px-2.5 py-1 rounded-full border"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              borderColor: project.accent ? `${project.accent}30` : "#B8622C30",
              color: project.accent || "#B8622C",
              background: project.accent ? `${project.accent}10` : "#B8622C10",
            }}
          >
            {project.category}
          </span>
        </div>

        <motion.div
          animate={{ y: hovered ? 0 : "100%" }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-[rgba(20,20,18,0.85)] to-transparent"
        >
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-full bg-[rgba(255,255,255,0.15)] text-white border border-[rgba(255,255,255,0.2)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-[#141412] mb-2"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "1.05rem" }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm text-[#57564F] flex-1 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}
        >
          {project.description}
        </p>
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[rgba(0,0,0,0.05)]">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#B8622C] hover:underline"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              <ExternalLink size={12} />
              Live Site
            </a>
          )}
          {project.github && project.github !== project.url && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#57564F] hover:text-[#141412]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Github size={12} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

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

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28" style={{ background: "#F7F6F3" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-12"
        >
          <motion.div variants={cardVariant}>
            <SectionLabel>Projects</SectionLabel>
          </motion.div>
          <motion.h2
            variants={cardVariant}
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#141412",
              lineHeight: 1.15,
            }}
            className="mb-8"
          >
            Work I'm proud of
          </motion.h2>

          <motion.div variants={cardVariant} className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm transition-all ${
                  activeCategory === cat
                    ? "bg-[#B8622C] text-white shadow-[0_4px_12px_rgba(184,98,44,0.3)]"
                    : "bg-[rgba(255,255,255,0.6)] backdrop-blur-xl border border-[rgba(0,0,0,0.08)] text-[#57564F] hover:border-[#B8622C] hover:text-[#B8622C]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 opacity-60">
                    {projects.filter((p) => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={stagger}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
