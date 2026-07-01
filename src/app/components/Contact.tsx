import React, { useState } from "react";
import { motion } from "motion/react";
import { personal } from "../../data/content";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
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

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Nespendra! 👋\n\nMy name is ${form.name}${form.email ? ` (${form.email})` : ""}.\n\n${form.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/917550914002?text=${encoded}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-28" style={{ background: "#F7F6F3" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Contact</SectionLabel>
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
          >
            Let's build something together
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-[#57564F] mb-10"
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7, fontSize: "0.97rem", maxWidth: "420px" }}
            >
              Have a project in mind, need a freelance developer, or just want to say hello? Fill in your details and hit
              Send — it'll open WhatsApp with your message pre-filled. I typically reply within a few hours.
            </motion.p>

            <motion.div variants={stagger} className="space-y-5 mb-10">
              {[
                { icon: <Mail size={16} />, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
                { icon: <Phone size={16} />, label: "Phone / WhatsApp", value: personal.phone, href: personal.whatsapp },
                { icon: <MapPin size={16} />, label: "Location", value: `${personal.location} · ${personal.availability}`, href: null },
              ].map((item) => (
                <motion.div key={item.label} variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(184,98,44,0.08)] flex items-center justify-center text-[#B8622C] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[#57564F] mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-[#141412] hover:text-[#B8622C] transition-colors"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#141412]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-3">
              {[
                { href: personal.github, icon: <Github size={18} />, label: "GitHub" },
                { href: personal.linkedin, icon: <Linkedin size={18} />, label: "LinkedIn" },
                { href: personal.whatsapp, icon: <MessageCircle size={18} />, label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center text-[#57564F] hover:border-[#B8622C] hover:text-[#B8622C] hover:bg-[rgba(184,98,44,0.04)] transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — WhatsApp-powered form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl bg-[rgba(255,255,255,0.65)] backdrop-blur-xl border border-[rgba(255,255,255,0.6)] shadow-[0_8px_40px_rgba(0,0,0,0.07)] p-7 md:p-9"
          >
            {/* WhatsApp badge */}
            <div className="flex items-center gap-2 mb-6 px-4 py-2.5 rounded-xl bg-[rgba(37,211,102,0.08)] border border-[rgba(37,211,102,0.2)]">
              <MessageCircle size={16} className="text-[#25D366]" />
              <span className="text-sm text-[#1a8a45]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                Messages go directly to WhatsApp
              </span>
            </div>

            <form onSubmit={handleSend} className="space-y-5">
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                { id: "email", label: "Email Address (optional)", type: "email", placeholder: "hello@example.com", required: false },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm text-[#141412] mb-1.5"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required !== false}
                    value={form[field.id as "name" | "email"]}
                    onChange={(e) => setForm((f) => ({ ...f, [field.id]: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(0,0,0,0.1)] bg-[rgba(255,255,255,0.5)] text-[#141412] placeholder-[#A0998F] focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[rgba(37,211,102,0.12)] transition-all text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-[#141412] mb-1.5"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project, idea, or question..."
                  required
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(0,0,0,0.1)] bg-[rgba(255,255,255,0.5)] text-[#141412] placeholder-[#A0998F] focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[rgba(37,211,102,0.12)] transition-all text-sm resize-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-[0_4px_20px_rgba(37,211,102,0.35)] flex items-center justify-center gap-2.5"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                <MessageCircle size={18} />
                Send via WhatsApp
                <Send size={14} />
              </motion.button>

              <p className="text-center text-xs text-[#A0998F]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Opens WhatsApp with your message pre-filled — no app required on desktop
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
