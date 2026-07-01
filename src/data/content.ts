export const personal = {
  name: "Nespendra Das",
  initials: "ND",
  role: "Full-Stack Developer & Data Analyst",
  location: "Purba Bardhaman, West Bengal, India",
  availability: "Available for remote work worldwide",
  tagline: "I build the products businesses run on today — and the data systems they'll run on tomorrow.",
  subHeadline:
    "Full-stack freelance developer shipping premium web & mobile products for clients across India and the UAE, while training as a Data Analyst & AI/ML Engineer.",
  bio: "Nespendra is a Computer Science undergraduate (AI & Data Science) at Sikkim Manipal Institute of Technology who runs a freelance development practice alongside his studies. He has shipped production websites and apps for restaurants, hotels, dealerships, and local businesses — and has completed data analytics internships at CodeAlpha and Cognifyz Technologies, cutting reporting time by 40% and building dashboards adopted company-wide. He's currently deepening his skills in SQL, Python, ML, and cloud data engineering (BigQuery, data lakehouses) while continuing to freelance full-time.",
  currentFocus: "Freelance Dev → Training in Data Science & AI/ML",
  education: {
    degree: "B.Tech — Computer Science (AI & Data Science)",
    institution: "Sikkim Manipal Institute of Technology",
    period: "2024 – 2028",
    location: "Sikkim, India",
  },
  email: "dasnespendra@gmail.com",
  phone: "+91 7550914002",
  whatsapp: "https://wa.me/917550914002",
  github: "https://github.com/Surja2003/",
  linkedin: "https://www.linkedin.com/in/nespendra-das-939577338/",
  resume: "/resume.pdf",
  profilePhoto: "/profile.jpg",
};

export const stats = [
  { value: 10, suffix: "+", label: "Client projects shipped" },
  { value: 40, suffix: "%", label: "Faster reporting @ CodeAlpha" },
  { value: 3, suffix: "", label: "Hackathon projects built" },
];

export const languages = [
  { name: "English", level: "Professional", dots: 4 },
  { name: "Hindi", level: "Native", dots: 5 },
  { name: "Bengali", level: "Native", dots: 5 },
];

export const currentlyLearning = [
  "SQL & Advanced Query Optimization",
  "Python (Pandas / NumPy / Scikit-learn / TensorFlow)",
  "Cloud Data Engineering (BigQuery, Apache Iceberg)",
  "Data Lakehouses & Modern Data Architecture",
];

export const experiences = [
  {
    id: 1,
    role: "Freelance Full-Stack Developer",
    company: "Independent / Self-employed",
    period: "2024 – Present",
    type: "Remote · India & UAE",
    highlight: "10+ production projects shipped",
    achievements: [
      "Built and deployed 10+ production websites and apps for clients across restaurants, hotels, dealerships, and local businesses in India and UAE",
      "Delivered projects using React, TypeScript, Node.js, Firebase, and Tailwind CSS — mobile-first and SEO-optimized",
      "Managed end-to-end client relationships: scoping, design, development, deployment, and support",
    ],
  },
  {
    id: 2,
    role: "Data Analyst Intern",
    company: "CodeAlpha",
    period: "01/2026 – Present",
    type: "Remote / Kolkata",
    highlight: "40% reduction in manual reporting time",
    achievements: [
      "Wrote 20+ SQL queries on 100K+ row datasets, cutting manual reporting time 40% across 5+ projects",
      "Identified trends across 3+ datasets/week; reports adopted by 4 cross-functional teams",
      "Built automated data validation pipelines, reducing duplicate/error rate by 30%",
    ],
  },
  {
    id: 3,
    role: "Data Analytics Intern",
    company: "Cognifyz Technologies",
    period: "02/2026 – 03/2026",
    type: "Remote",
    highlight: "50% faster stakeholder review time",
    achievements: [
      "Conducted EDA on 5+ real-world datasets using Python/Pandas/Matplotlib, surfacing 3 high-impact patterns",
      "Delivered 4+ interactive dashboards, cutting stakeholder review time 50%, adopted company-wide",
    ],
  },
];

export type ProjectCategory = "All" | "Freelance" | "Hackathon" | "Personal";

export const projects = [
  {
    id: 1,
    title: "HZ IT Company",
    description: "Business website for a growing IT company client, showcasing services, portfolio, and contact info.",
    url: "https://hzitcompany.com",
    github: "",
    category: "Freelance" as ProjectCategory,
    tech: ["React", "Tailwind CSS", "Vite"],
    accent: "#B8622C",
  },
  {
    id: 2,
    title: "Kalika Restaurant",
    description: "Restaurant client website with menu, gallery, and reservation flow for a local dining establishment.",
    url: "https://kalikaresturant.co.in",
    github: "",
    category: "Freelance" as ProjectCategory,
    tech: ["React", "JavaScript", "CSS"],
    accent: "#1F4D3C",
  },
  {
    id: 3,
    title: "Jai Maa Ambe",
    description: "Full-featured client website built for a local business, mobile-first and SEO-optimized.",
    url: "https://jaimaambe.in",
    github: "",
    category: "Freelance" as ProjectCategory,
    tech: ["HTML", "CSS", "JavaScript"],
    accent: "#B8622C",
  },
  {
    id: 4,
    title: "Hotel Khoai",
    description: "Hotel booking and business website with room listings, amenities showcase, and contact integration.",
    url: "https://hotelkhoai.co.in",
    github: "",
    category: "Freelance" as ProjectCategory,
    tech: ["React", "Tailwind CSS", "Firebase"],
    accent: "#1F4D3C",
  },
  {
    id: 5,
    title: "Mahamaya Enterprise",
    description: "E-commerce storefront for a hardware business — product catalog, inquiry flow, and business info.",
    url: "https://mahamayaenterprise.shop",
    github: "",
    category: "Freelance" as ProjectCategory,
    tech: ["React", "Node.js", "Tailwind CSS"],
    accent: "#B8622C",
  },
  {
    id: 6,
    title: "Luxury Auto",
    description: "Luxury used-car dealership concept site — built as a client pitch showcase, targeting the UAE premium market.",
    url: "https://luxury-auto-tawny.vercel.app",
    github: "",
    category: "Freelance" as ProjectCategory,
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accent: "#1F4D3C",
  },
  {
    id: 7,
    title: "Temple Crowd Management",
    description: "Smart India Hackathon project — real-time computer vision crowd density monitoring for high-footfall venues using OpenCV.",
    url: "https://temple-crowd-management.vercel.app",
    github: "https://github.com/Surja2003/Temple-Crowd-Management",
    category: "Hackathon" as ProjectCategory,
    tech: ["Python", "OpenCV", "React", "Flask"],
    accent: "#B8622C",
  },
  {
    id: 8,
    title: "Summarify AI",
    description: "NLP-powered transformer-based document summarization web app that reduces content review time significantly.",
    url: "https://summarify-ai-six.vercel.app",
    github: "https://github.com/Surja2003/Summarify-AI",
    category: "Hackathon" as ProjectCategory,
    tech: ["Python", "Flask", "NLP", "React"],
    accent: "#1F4D3C",
  },
  {
    id: 9,
    title: "Udaan India",
    description: "HELLIOS: A predictive hospital resource and emergency load intelligence dashboard — forecasts ED admissions, ICU capacity risk, and surfaces staffing signals.",
    url: "https://udaan-india.vercel.app",
    github: "https://github.com/Surja2003/UdaanIndia",
    category: "Hackathon" as ProjectCategory,
    tech: ["React", "TypeScript", "FastAPI", "Python", "Tailwind CSS", "Docker"],
    accent: "#B8622C",
  },
  {
    id: 10,
    title: "AstroKing",
    description: "ML-powered horoscope forecasting — trained prediction models on astrological datasets with React front-end and Python API for real-time inference.",
    url: "",
    github: "https://github.com/Surja2003/AstroKing",
    category: "Personal" as ProjectCategory,
    tech: ["Python", "Scikit-learn", "React", "Flask"],
    accent: "#1F4D3C",
  },
  {
    id: 11,
    title: "SpeedTest",
    description: "Personal network speed testing utility — clean UI, accurate measurement, zero bloat.",
    url: "",
    github: "https://github.com/Surja2003/SpeedTest",
    category: "Personal" as ProjectCategory,
    tech: ["JavaScript", "React", "Node.js"],
    accent: "#B8622C",
  },
  {
    id: 12,
    title: "Investment Calculator",
    description: "SIP / Lumpsum / SWP financial calculator SPA with animated results and export options.",
    url: "https://surja2003.github.io/Investment-Calculator",
    github: "https://github.com/Surja2003/Investment-Calculator",
    category: "Personal" as ProjectCategory,
    tech: ["React", "TypeScript", "Recharts"],
    accent: "#1F4D3C",
  },
];

export const skills = {
  Languages: [
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "🗄️" },
    { name: "JavaScript", icon: "⚡" },
    { name: "TypeScript", icon: "🔷" },
  ],
  "Data & ML": [
    { name: "Pandas", icon: "🐼" },
    { name: "NumPy", icon: "🔢" },
    { name: "Matplotlib", icon: "📊" },
    { name: "Scikit-Learn", icon: "🤖" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "OpenCV", icon: "👁️" },
  ],
  "Web & Dev Tools": [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "FastAPI", icon: "🚀" },
    { name: "Flask", icon: "🧪" },
    { name: "Docker", icon: "🐳" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Vite", icon: "⚡" },
    { name: "Framer Motion", icon: "🎭" },
    { name: "Git", icon: "📦" },
    { name: "GitHub", icon: "🐙" },
    { name: "Vercel", icon: "▲" },
  ],
  "Core Competencies": [
    { name: "Machine Learning", icon: "🤖" },
    { name: "Deep Learning", icon: "🧬" },
    { name: "NLP", icon: "💬" },
    { name: "EDA", icon: "🔍" },
    { name: "Data Visualization", icon: "📈" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Statistical Modeling", icon: "📐" },
  ],
};

export const services = [
  {
    id: 1,
    title: "Business Website",
    icon: "🌐",
    description:
      "For restaurants, hotels, dealerships, and local businesses. Full landing page or multi-page site — mobile-responsive, SEO-ready, and deployed.",
    features: ["Mobile-first design", "SEO optimization", "Performance tuned", "CMS integration (optional)"],
    pricing: "Starting from ₹9,999",
    cta: "Get a custom quote",
  },
  {
    id: 2,
    title: "Web / Mobile App",
    icon: "📱",
    description:
      "Custom React and React Native applications with backend integration. Firebase, Node.js, or serverless — whatever fits your product.",
    features: ["React / React Native", "Backend integration", "Firebase / Node.js", "API development"],
    pricing: "Starting from ₹24,999",
    cta: "Book a discovery call",
  },
  {
    id: 3,
    title: "Data Dashboard & Analytics",
    icon: "📊",
    description:
      "Turn raw spreadsheets and data into interactive, decision-ready dashboards. The same capability that cut reporting time by 40% at CodeAlpha — now for your business.",
    features: ["Interactive dashboards", "Automated reporting", "Data validation", "Stakeholder-ready insights"],
    pricing: "Starting from ₹15,999",
    cta: "Let's talk data",
  },
];

// Testimonials intentionally empty — will be populated with real client quotes
export const testimonials: {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
}[] = [];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
