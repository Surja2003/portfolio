import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const projectCards = projects.map((p) => ({
    ...p,
    // Keep a visual gradient per project card (UI-only).
    gradient:
      p.slug === 'summarify-ai'
        ? 'from-purple-500 to-pink-500'
        : p.slug === 'investment-calculator'
          ? 'from-blue-500 to-cyan-500'
          : p.slug === 'temple-crowd-management'
            ? 'from-green-500 to-emerald-500'
            : p.slug === 'speedtest'
              ? 'from-orange-500 to-red-500'
              : 'from-indigo-500 to-purple-500',
    metrics: p.highlights,
    tags: p.techStack.slice(0, 3),
    githubUrl: p.repoUrl,
  }));

  return (
    <section id="projects" ref={ref} className="py-32 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-slate-100">
            Projects
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of my GitHub projects across AI/DS, data analytics, and web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCards.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <motion.div 
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/projects/${project.slug}`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') navigate(`/projects/${project.slug}`);
                }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full relative overflow-hidden transition-all duration-300 hover:border-white/20"
                whileHover={{
                  boxShadow: "0 20px 60px rgba(168, 85, 247, 0.3)",
                }}
              >
                {/* Gradient glow on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Animated particles on hover */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/50 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: [0, (Math.random() - 0.5) * 100],
                      y: [0, (Math.random() - 0.5) * 100],
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                  />
                ))}
                
                <div className="relative z-10">
                  {/* Preview */}
                  <div className="mb-6 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <div className={`aspect-video bg-gradient-to-br ${project.gradient} opacity-25`} />
                    <div className="-mt-12 px-4 pb-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/60 border border-white/10 backdrop-blur px-3 py-1 text-xs text-gray-200">
                        <project.Icon size={14} />
                        <span>Project</span>
                      </div>
                    </div>
                  </div>

                  {/* Gradient accent bar */}
                  <motion.div 
                    className={`h-1 w-20 bg-gradient-to-r ${project.gradient} rounded-full mb-6`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 80 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  />
                  
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <project.Icon size={22} className="text-white" />
                    </div>
                    <motion.h3
                      className="text-2xl transition-transform group-hover:scale-[1.02] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-blue-200 group-hover:bg-clip-text"
                    >
                      {project.title}
                    </motion.h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6">
                    {project.summary}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.map((metric, i) => (
                      <motion.span
                        key={metric}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + i * 0.05 + 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm"
                      >
                        {metric}
                      </motion.span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + i * 0.05 + 0.7 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/projects/${project.slug}`);
                      }}
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Info size={20} />
                      <span>Details</span>
                    </motion.button>
                    <motion.a
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </motion.a>
                    {project.demoUrl ? (
                      <motion.a
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                        <span>Demo</span>
                      </motion.a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}