import { motion } from "motion/react";
import { services, personal } from "../../data/content";
import { MessageCircle } from "lucide-react";

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

export function Services() {
  return (
    <section id="services" className="py-28" style={{ background: "#F7F6F3" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Services</SectionLabel>
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
            className="mb-4"
          >
            What I build for you
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[#57564F] max-w-xl"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.65, fontSize: "0.97rem" }}
          >
            Whether you need a polished business presence, a custom application, or data-driven dashboards —
            I deliver production-quality work, on time.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl p-7 flex flex-col border backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] bg-[rgba(255,255,255,0.65)] border-[rgba(255,255,255,0.6)]"
            >
              <div className="text-3xl mb-5">{service.icon}</div>
              <h3
                className="mb-3 text-[#141412]"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "1.2rem" }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm flex-1 mb-6 text-[#57564F]"
                style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.65 }}
              >
                {service.description}
              </p>

              <ul className="space-y-2 mb-7">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#B8622C]" />
                    <span
                      className="text-xs text-[#57564F]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div
                  className="text-sm mb-4 text-[#B8622C]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  {service.pricing}
                </div>
                <a
                  href={personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition-all border border-[rgba(0,0,0,0.12)] text-[#141412] hover:border-[#B8622C] hover:text-[#B8622C]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  <MessageCircle size={14} />
                  {service.cta}
                </a>
              </div>
            </motion.div>
          ))}

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] text-white hover:bg-[#22c55e] transition-colors shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            <MessageCircle size={16} />
            WhatsApp me directly
          </a>
        </motion.div>
      </div>
    </section>
  );
}
