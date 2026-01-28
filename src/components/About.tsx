import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, Database, Sparkles } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: '5+', label: 'GitHub Projects' },
    { value: '3+', label: 'Focus Areas' },
    { value: 'AI/DS', label: 'B.Tech Track' },
    { value: 'Web', label: 'Developer' },
  ];

  const highlights = [
    {
      Icon: Brain,
      title: 'AI & NLP',
      description: 'Building practical AI features with a focus on NLP and applied machine learning',
    },
    {
      Icon: Code,
      title: 'Full-Stack Development',
      description: 'Creating modern, responsive web apps and clean user experiences',
    },
    {
      Icon: Database,
      title: 'Data Analytics',
      description: 'Cleaning, analyzing, and visualizing data to extract insights and tell a story',
    },
    {
      Icon: Sparkles,
      title: 'Problem Solving',
      description: 'Turning real-world problems into structured, reliable solutions',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-slate-100">
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            I’m a Computer Science Engineering student specializing in Artificial Intelligence and Data Science, passionate about building intelligent systems that solve real-world problems. I enjoy transforming raw data into meaningful insights and developing AI-powered applications that improve efficiency and decision-making.
            <br />
            <br />
            My interests lie in machine learning, data analytics, and full-stack development, where I combine technical skills with creative problem-solving. I have hands-on experience with Python, SQL, React, and modern AI tools, and I continuously explore new technologies to stay ahead in the rapidly evolving tech landscape.
            <br />
            <br />
            My goal is to work on impactful AI-driven solutions that bridge the gap between data and innovation.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden group"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(168, 85, 247, 0)",
                    "0 0 20px rgba(168, 85, 247, 0.3)",
                    "0 0 0px rgba(168, 85, 247, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                  animate={isInView ? {
                    scale: [1, 1.1, 1],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden group"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0"
                whileHover={{ 
                  background: "linear-gradient(to bottom right, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1))"
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Ripple effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                >
                  <item.Icon size={24} />
                </motion.div>
                <h3 className="text-2xl mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}