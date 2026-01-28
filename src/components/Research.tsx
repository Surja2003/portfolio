import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const academicProjects = projects.filter((p) => p.academic);

  return (
    <section id="research" ref={ref} className="py-32 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Academic Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Coursework-driven builds and applied projects aligned with AI/DS, analytics, and real-world problem solving
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {academicProjects.map((p, index) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <p.Icon size={22} />
                  </div>
                  <h3 className="text-xl">{p.title}</h3>
                </div>

                <p className="text-gray-400 mb-5">{p.longDescription}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.highlights.map((h) => (
                    <span key={h} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {h}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    onClick={() => navigate(`/projects/${p.slug}`)}
                  >
                    <ExternalLink size={18} />
                    <span>Details</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
