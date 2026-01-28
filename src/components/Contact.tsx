import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const to = 'dasnespendra@gmail.com';
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Interested in collaboration or have a project in mind? Let's connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl mb-8">Let's talk about AI</h3>
            
            <div className="space-y-6 mb-8">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Email</div>
                  <div className="text-lg">dasnespendra@gmail.com</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Location</div>
                  <div className="text-lg">India</div>
                </div>
              </motion.div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h4 className="text-xl mb-4">Open to opportunities</h4>
              <p className="text-gray-400 mb-4">
                Open to internships and entry-level positions in Data Analytics, Web Development, and AI/DS.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Data Analytics', 'Web Development', 'AI/DS', 'Entry-level Roles'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-sm text-gray-400 mb-3">Social</div>
                <div className="flex items-center gap-4">
                  {[
                    {
                      label: 'GitHub',
                      href: 'https://github.com/Surja2003',
                      Icon: Github,
                    },
                    {
                      label: 'LinkedIn',
                      href: 'https://www.linkedin.com/in/nespendra-das-939577338',
                      Icon: Linkedin,
                    },
                  ].map(({ label, href, Icon }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-gray-200 hover:text-white transition"
                    >
                      <Icon size={18} />
                      <span className="text-sm">{label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-400">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 bg-white/5 border-white/10 backdrop-blur-sm rounded-xl focus-visible:border-purple-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-400">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 bg-white/5 border-white/10 backdrop-blur-sm rounded-xl focus-visible:border-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-400">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-white/5 border-white/10 backdrop-blur-sm rounded-xl focus-visible:border-purple-500"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)',
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(168, 85, 247, 0.3)',
                    '0 10px 40px rgba(168, 85, 247, 0.5)',
                    '0 10px 30px rgba(168, 85, 247, 0.3)',
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-medium shadow-lg relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Ripple effect on click */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  initial={{ scale: 0, opacity: 0.5 }}
                  whileTap={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, transparent 70%)",
                  }}
                />
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Send size={20} />
                  </motion.div>
                  Send Message
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}