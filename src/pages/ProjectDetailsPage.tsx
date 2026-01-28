import { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { getProjectBySlug } from "../data/projects";

export function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = useMemo(() => (slug ? getProjectBySlug(slug) : undefined), [slug]);

  useEffect(() => {
    if (!project) return;
    const prev = document.title;
    document.title = `${project.title} — Nespendra Das`;
    return () => {
      document.title = prev;
    };
  }, [project]);

  if (!project) {
    return (
      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
            <h1 className="text-3xl mb-3">Project not found</h1>
            <p className="text-gray-400 mb-6">
              The project page you’re looking for doesn’t exist.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate(-1)}
                className="px-5 py-3 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 transition"
              >
                Go Back
              </button>
              <Link
                to="/"
                className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 font-medium hover:opacity-95 transition"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative z-10 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <ArrowLeft size={18} />
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-gray-200 hover:text-white hover:bg-white/15 transition"
            >
              <Github size={18} />
              <span>Repository</span>
            </a>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 font-medium hover:opacity-95 transition"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            ) : null}
          </div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-60" />
          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                <project.Icon size={28} />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <p className="text-lg text-gray-300">{project.subtitle}</p>
              </div>
            </div>

            <p className="text-gray-200/90 mt-6 text-lg leading-relaxed">
              {project.longDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <span
                  key={h}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-gray-200"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-3xl bg-white/5 border border-white/10 p-8"
          >
            <h2 className="text-2xl mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-purple-500/25 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Note: Tech stack is summarized—see the repository README for exact details.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-white/5 border border-white/10 p-8"
          >
            <h2 className="text-2xl mb-4">Key Features</h2>
            <ul className="space-y-2 text-gray-200">
              {project.features.map((f) => (
                <li key={f} className="leading-relaxed">
                  <span className="text-purple-300/80">•</span> {f}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-3xl bg-white/5 border border-white/10 p-8 mt-10"
        >
          <h2 className="text-2xl mb-4">Links</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-gray-200 hover:text-white hover:bg-white/15 transition"
            >
              <Github size={18} />
              <span>GitHub Repository</span>
            </a>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-gray-200 hover:text-white hover:bg-white/15 transition"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            ) : null}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
