import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: 'AI / ML & NLP',
      skills: [
        { name: 'Scikit-learn', level: 90 },
        { name: 'NLP (Summarization)', level: 85 },
        { name: 'Model Evaluation', level: 85 },
        { name: 'Basic ML Pipelines', level: 88 },
      ],
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'C++', level: 75 },
      ],
    },
    {
      category: 'Data Analytics',
      skills: [
        { name: 'NumPy', level: 90 },
        { name: 'Pandas', level: 92 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Data Cleaning', level: 88 },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'React', level: 92 },
        { name: 'Vite', level: 88 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'APIs & REST', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-slate-100">
            Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tools and technologies I use in projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full relative"
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          animate={{
                            x: ["-100%", "200%"],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 1,
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                        
                        {/* Glowing end point */}
                        <motion.div
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg shadow-purple-500/50"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tools/technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl text-gray-400 mb-6">Also experienced with:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git',
              'Jupyter',
              'Firebase',
              'Seaborn',
              'Excel',
              'Power BI',
              'PostgreSQL',
              'MongoDB',
              'FastAPI',
              'Docker'
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}