# Portfolio Website — Full Build Prompt for Nespendra Das

Paste this entire prompt into your AI coding tool (Claude Code, Cursor, v0, etc.) to generate the site.

---

## 1. PROJECT BRIEF

Build a premium, mobile-first personal portfolio website for **Nespendra Das** — a full-time freelance web/app developer currently transitioning toward Data Science & Data Engineering. The site must look like it was designed by a senior product designer at a top-tier studio: **not templated, not "AI-generated-looking," not a generic SaaS-landing-page clone.** Every section should feel custom, intentional, and specific to this person.

**Non-negotiable design mandate:** avoid the common AI-portfolio tells — no default purple-to-blue gradient hero, no centered-everything layout, no generic Inter-font-with-rounded-cards look, no floating 3D blob illustrations, no stock "glassmorphism card grid that looks like every other glassmorphism site." Instead, build something with a distinct point of view (see Section 4).

---

## 2. TECH STACK

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS (custom config, not default theme)
- **Animation:** Framer Motion (scroll-triggered reveals, page transitions, micro-interactions, layout animations)
- **Icons:** Lucide React
- **Fonts:** Google Fonts, self-hosted via `@fontsource` or preconnect (see typography section)
- **Deployment target:** Vercel
- **Forms:** Contact form using Formspree or a serverless function (mailto fallback if no backend)
- **No CMS** — content is hardcoded in a typed content config file (`src/data/content.ts`) so it's easy to update later

---

## 3. IDENTITY & CONTENT

**Name:** Nespendra Das
**Role framing:** Full-Stack Developer & Freelancer — actively building toward Data Science / Data Engineering
**Location:** Purba Bardhaman, West Bengal, India (mention "Available for remote work worldwide")

**Tagline (hero headline) — use this or a close variant:**
> "I build the products businesses run on today — and the data systems they'll run on tomorrow."

**Secondary sub-headline:**
> "Full-stack freelance developer shipping premium web & mobile products for clients across India and the UAE, while training as a Data Analyst & AI/ML Engineer."

**Short bio (About section, 3-4 sentences):**
Nespendra is a Computer Science undergraduate (AI & Data Science) at Sikkim Manipal Institute of Technology who runs a freelance development practice alongside his studies. He has shipped production websites and apps for restaurants, hotels, dealerships, and local businesses — and has completed data analytics internships at CodeAlpha and Cognifyz Technologies, cutting reporting time by 40% and building dashboards adopted company-wide. He's currently deepening his skills in SQL, Python, ML, and cloud data engineering (BigQuery, data lakehouses) while continuing to freelance full-time.

**Contact:**
- Email: dasnespendra@gmail.com
- Phone / WhatsApp: +91 7550914002
- GitHub: https://github.com/Surja2003/
- LinkedIn: https://www.linkedin.com/in/nespendra-das-939577338/
- Resume: link a downloadable PDF button — place the file at `/public/resume.pdf` in the project (user will supply the actual PDF)

---

## 4. VISUAL DIRECTION — "Light Minimal Glass, Premium"

This is the core aesthetic. Follow it precisely to avoid an AI-generic look.

**Palette:**
- Base: warm off-white `#FAFAF8` / `#F7F6F3` (not pure white — pure white feels sterile and AI-default)
- Glass surfaces: `rgba(255,255,255,0.55)` with `backdrop-blur-xl`, subtle 1px border `rgba(255,255,255,0.6)` and a soft outer shadow — not the overused thick-border glass look
- Ink/text: near-black `#141412` for headings, warm gray `#57564F` for body text (avoid pure `#000000`/`#666`)
- **One accent color only** — pick a deep, unusual accent instead of default blue/purple: recommend a **deep amber/copper (`#B8622C` → `#D97B3F`)** or **deep forest-emerald (`#1F4D3C`)**. Use it sparingly: CTA buttons, link underlines, active nav state, key stat numbers.
- Gradients: soft, large, low-opacity mesh gradients in the background (barely-there, blurred, off-canvas) — never a loud diagonal purple-blue gradient across a whole hero.

**Typography (this alone kills the "AI-ish" look if done right):**
- Headings: a distinctive serif or high-contrast display sans — e.g. **"Fraunces"** or **"Instrument Serif"** for a premium editorial feel, OR **"General Sans" / "Clash Display"** for a sharp modern-premium feel. Do NOT use Inter/Poppins/Manrope as the display font — those read as default AI-tool choices.
- Body: a clean grotesk like **"Inter"** or **"Satoshi"** is fine for body copy only, small size, generous line-height (1.6-1.7)
- Use dramatic size contrast: huge headline (`clamp(2.5rem, 8vw, 5.5rem)`), tiny eyebrow/label text in uppercase with wide letter-spacing above each section heading

**Layout principles:**
- Break the centered-single-column mold: use asymmetric grids, off-center headlines, overlapping elements, cards that break out of their container edges
- Generous whitespace — let sections breathe, don't cram
- Section transitions should feel like a physical scroll narrative, not stacked identical blocks

**Glassmorphism — done tastefully:**
- Apply to: nav bar (sticky, blurred), project cards, the hamburger menu overlay, stat/skill chips
- Do NOT apply glass to everything — overuse is what makes glass sites look templated. Use it as an accent layer, not the whole page.

**Motion & Premium Animations (Framer Motion):**
- Hero: staggered text reveal on load (words/lines fade+slide up with slight delay cascade), subtle parallax on background mesh gradient as user scrolls
- Scroll-reveal: sections fade+slide into view once, using `whileInView` with `viewport={{ once: true }}`, staggered children for cards
- Custom cursor (desktop only): small dot that scales/morphs into a ring when hovering interactive elements — subtle, not gimmicky
- Project cards: on hover, image scales slightly (1.03-1.05), a soft glass overlay slides up revealing tech stack tags, cursor changes to "View Project →"
- Magnetic buttons: primary CTA buttons subtly follow cursor position within a small radius on hover (magnetic effect)
- Page/section number indicator or scroll progress bar (thin, accent-colored, fixed to top or side) — nice premium touch
- Smooth scroll (Lenis or CSS `scroll-behavior: smooth` + intersection observer for nav highlighting)
- Skill bars/chips: animate in with a slight bounce/spring physics on first view
- All animations respect `prefers-reduced-motion`

**Hamburger menu (mobile-first — this is the primary nav pattern even on desktop, per the brief):**
- Icon: animated hamburger → X morph (Framer Motion `path` morphing or simple rotate/translate of 3 bars)
- On open: full-screen glass overlay slides/fades in with staggered nav link reveal (each link slides in from right with delay)
- Include mini social icons + email at the bottom of the mobile menu overlay
- Add a subtle background blur/dim on the page content behind the overlay

---

## 5. SITE STRUCTURE & SECTIONS

### A. Navigation
Sticky glass nav bar. Logo/monogram "ND" on the left (styled as a small badge — reuse the resume's "ND" monogram concept but redesigned as a clean geometric mark, not a default circle-avatar-generator look). Hamburger menu trigger on the right (all breakpoints, per user's explicit request). Nav links: Home, About, Experience, Projects, Services, Skills, Testimonials, Contact. Include a small "Available for work" pill with a pulsing green dot.

### B. Hero
- Large headline (tagline above) with staggered reveal animation
- Sub-headline
- Two CTAs: primary "View My Work" (scrolls to Projects, magnetic button, accent-filled) and secondary "Download Resume" (glass outline button, downloads the PDF)
- Small trust row beneath: "40% faster reporting @ CodeAlpha" · "95%+ ML accuracy" · "10+ shipped client projects" — as animated counting stat chips
- Subtle floating glass badge showing current focus: "🎯 Currently: Freelance Dev → Training in Data Science & AI/ML"

### C. About
- Bio paragraph (above)
- Personal narrative angle: mention the dual-track story (shipping real products for real businesses while formally training in AI/DS) — this is his differentiator, lean into it
- Small "currently learning" section: SQL, Python (Pandas/NumPy/Scikit-learn/TensorFlow), Cloud Data Engineering (BigQuery, data lakehouses, Apache Iceberg)
- Languages: English (Professional), Hindi (Native), Bengali (Native) — small elegant indicator (not literal progress bars like the resume — do something more premium, e.g. a horizontal dot/dash meter)

### D. Experience (Internships)
Vertical timeline with glass cards, alternating or left-aligned:
1. **Data Analyst Intern — CodeAlpha** (01/2026–Present, Remote/Kolkata)
   - 20+ SQL queries on 100K+ row datasets, cut manual reporting time 40% across 5+ projects
   - Identified trends across 3+ datasets/week; reports adopted by 4 cross-functional teams
   - Built automated data validation pipelines, cut duplicate/error rate 30%
2. **Data Analytics Intern — Cognifyz Technologies** (02/2026–03/2026, Remote)
   - EDA on 5+ real-world datasets (Python/Pandas/Matplotlib), surfaced 3 high-impact patterns
   - Delivered 4+ interactive dashboards, cut stakeholder review time 50%, adopted company-wide

Add a "Key Achievement" highlight badge on each card (pulled from resume ⋆ notes).

### E. Projects — grouped into filterable categories with a tab/segmented-control filter (glass pill tabs): **All / Freelance Client Work / Hackathon Projects / Personal Projects**

**Freelance Client Work:**
| Project | URL | Notes |
|---|---|---|
| HZ IT Company | hzitcompany.com | Business website for IT company client |
| Kalika Restaurant | kalikaresturant.co.in | Restaurant client site |
| Jai Maa Ambe | jaimaambe.in | Client website |
| Hotel Khoai | hotelkhoai.co.in | Hotel booking/business site |
| Mahamaya Enterprise | mahamayaenterprise.shop | Hardware business e-commerce/storefront site |
| Luxury Auto (demo) | luxury-auto-tawny.vercel.app | Luxury used-car dealership concept/demo site — showcase piece used for client pitches (mention UAE market targeting if relevant) |

**Hackathon Projects:**
| Project | URL | Notes |
|---|---|---|
| Temple Crowd Management (SIH) | temple-crowd-management.vercel.app | Built for Smart India Hackathon — real-time computer vision crowd density monitoring system for high-footfall public/temple venues using OpenCV, reducing overcrowding risk |
| Summarify AI | summarify-ai-six.vercel.app | NLP-powered transformer-based document summarization web app (Python/NLP/Flask) — reduces content review time |
| Udaan India | github.com/Surja2003/UdaanIndia | HELLIOS: Predictive hospital resource and emergency load intelligence dashboard (React/FastAPI/Python/Docker) |

**Personal Projects:**
| Project | URL | Notes |
|---|---|---|
| AstroKing | github.com/Surja2003/AstroKing | ML horoscope forecasting — trained prediction models on astrological datasets with React front-end + Python API real-time inference |
| SpeedTest | github.com/Surja2003/SpeedTest | Personal network speed testing tool/utility |
| Investment Calculator | surja2003.github.io/Investment-Calculator | SIP/Lumpsum/SWP financial calculator SPA |

Each project card: glass card with project thumbnail (use a clean gradient placeholder with the project initial/icon if no screenshot is provided — instruct dev to swap in real screenshots later), title, one-line description, tech stack tags (small pill chips), category label, and two links — "Live Site ↗" / "GitHub ↗" as applicable. Hover reveals more detail per the animation spec above.

### F. Skills — visual grid, grouped by category (glass chips with subtle icons, animated stagger-in on scroll):
- **Languages:** Python, SQL, JavaScript, TypeScript
- **Data & ML:** Pandas, NumPy, Matplotlib, Scikit-Learn, TensorFlow, OpenCV
- **Web & Dev Tools:** React, Flask, Tailwind CSS, Vite, Framer Motion, Git, GitHub, Vercel
- **Core Competencies:** Machine Learning, Deep Learning, NLP, EDA, Data Visualization, REST APIs, Statistical Modeling

### G. Services & Pricing (freelance-facing section)
Frame around what clients actually hire him for. Suggest 3 service tiers as glass cards:
1. **Business Website** — for restaurants, hotels, dealerships, local businesses. Landing page/multi-page site, mobile-responsive, SEO-ready, deployed.
2. **Web/Mobile App Development** — custom React/React Native applications with backend integration (mention Firebase/Node.js experience from prior work).
3. **Data Dashboard / Analytics Solution** — turning spreadsheets/raw data into interactive dashboards (ties directly to his internship achievements — strong differentiator vs typical freelance dev portfolios).

Use "Starting from ₹X" or "Get a custom quote" language rather than hard-committing to numbers (leave pricing text as an editable placeholder — instruct dev to add a `pricing` field in content config for easy updates). Include a "Book a call" / "WhatsApp me directly" CTA (deep-link to `https://wa.me/917550914002`).

### H. Testimonials
Nespendra has verbal/spoken feedback from clients but nothing written yet. Build the section with a clean placeholder structure (3-card carousel or grid) using **generic placeholder testimonial objects** in the content config, clearly commented `// TODO: replace with real client quotes once collected in writing`, so the section is ready to populate later without a redesign. Design it as elegant pull-quote glass cards with a client name/role field, avoiding fake specific claims — use soft placeholder text like *"Add a short client quote here once collected."*

### I. Contact
- Split layout: left side has heading + direct contact details (email, phone, WhatsApp button, social icons) + location; right side has the contact form (Name, Email, Message, Submit) styled as a glass panel
- Form submits via Formspree (or note where to plug in an endpoint) with success/error states animated
- Footer: small nav recap, social icons, "Built by Nespendra Das © 2026", subtle back-to-top button with scroll-progress ring

---

## 6. TECHNICAL & SEO REQUIREMENTS

- Fully responsive, mobile-first breakpoints (test at 375px, 768px, 1024px, 1440px)
- Semantic HTML, proper heading hierarchy, alt text on all images
- Meta tags: title, description, Open Graph image, Twitter card — set title to something like "Nespendra Das — Full-Stack Developer & Data Analyst"
- `sitemap.xml` and `robots.txt`
- Lighthouse targets: 90+ performance, 100 accessibility where feasible
- Lazy-load below-the-fold images
- Favicon using the "ND" monogram mark
- Deploy-ready for Vercel (correct `vite.config.ts`, no server-only dependencies unless using Vercel serverless functions for the contact form)
- Include a `src/data/content.ts` file where ALL text content (bio, project list, skills, contact info) lives as typed constants — so future edits don't require touching component code

---

## 7. FINAL ANTI-GENERIC CHECKLIST (verify before considering it done)

- [ ] No default purple/blue gradient hero
- [ ] No Inter-only typography — a distinctive display font is used for headings
- [ ] Layout isn't perfectly centered/symmetric everywhere — has intentional asymmetry
- [ ] Glass effect is used selectively as an accent, not on every element
- [ ] Hamburger menu present and animated on all breakpoints
- [ ] Custom cursor / magnetic buttons / scroll-progress or another premium micro-interaction included
- [ ] Real content specifics (CodeAlpha, Cognifyz, SIH, actual project names) are visible — not generic Lorem-ipsum-style placeholders
- [ ] Color accent is a single deliberate, unusual choice — not default blue/purple/green
- [ ] Testimonials section is structurally ready but honestly placeholder (no fabricated quotes)

---

**End of prompt. Build the full site now, file by file, starting with the Tailwind config and content data file, then component structure, then pages.**