import { m } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (!('matchMedia' in window)) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduceMotion(media.matches);

    // Safari fallback support
    if ('addEventListener' in media) {
      media.addEventListener('change', onChange);
    } else {
      (media as unknown as { addListener: (cb: () => void) => void }).addListener(onChange);
    }

    onChange();
    return () => {
      if ('removeEventListener' in media) {
        media.removeEventListener('change', onChange);
      } else {
        (media as unknown as { removeListener: (cb: () => void) => void }).removeListener(onChange);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="max-w-5xl mx-auto px-6 text-left relative z-10">
        <m.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-gray-400 tracking-wide">
            B.Tech CSE (AI&DS) • Data Analytics • Web Developer
          </p>

          <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight text-slate-100">
            Nespendra Das
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            I build practical projects at the intersection of data, AI, and the web — and I’m open to internships and entry-level roles.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center rounded-full bg-white text-slate-950 px-6 py-3 font-medium hover:bg-white/90 transition-colors"
            >
              View Projects
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-slate-100 hover:bg-white/10 transition-colors"
            >
              <Mail size={18} />
              Contact
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            {[
              { Icon: Github, href: 'https://github.com/Surja2003', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/nespendra-das-939577338', label: 'LinkedIn' },
              { Icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ Icon, href, label }, index) => (
              <m.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                initial={reduceMotion ? undefined : { opacity: 0 }}
                animate={reduceMotion ? undefined : { opacity: 1 }}
                transition={{ delay: 0.15 + index * 0.05 }}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </m.a>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}