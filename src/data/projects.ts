import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Calculator,
  Gauge,
  Landmark,
  Store,
} from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  longDescription: string;
  techStack: string[];
  highlights: string[];
  features: string[];
  Icon: LucideIcon;
  repoUrl: string;
  demoUrl?: string;
  academic?: boolean;
};

export const projects: Project[] = [
  {
    slug: "summarify-ai",
    title: "Summarify.ai",
    subtitle: "NLP document summarization",
    summary:
      "Summarizes long text into concise, readable key points with a practical NLP pipeline.",
    longDescription:
      "Summarify.ai is a document summarization project focused on reducing reading time for long text. It explores an end-to-end text workflow (cleaning → preprocessing → summarization → readable output) and presents results in a simple, product-style interface.",
    techStack: [
      "Python",
      "NLP",
      "Text preprocessing",
      "Git/GitHub",
    ],
    highlights: ["NLP pipeline", "Summarization", "Readable output"],
    features: [
      "Input long text and generate a shorter summary",
      "Handles basic text cleanup (spacing, noise) before summarization",
      "Produces structured output that’s easy to scan",
      "Repository includes code and documentation for reproducibility",
    ],
    Icon: BrainCircuit,
    repoUrl: "https://github.com/Surja2003/Summarify.ai",
    demoUrl: "https://summarify-ai-six.vercel.app/",
    academic: true,
  },
  {
    slug: "investment-calculator",
    title: "Investment Calculator",
    subtitle: "FinTech SIP/Lumpsum calculator",
    summary:
      "Calculates expected growth for SIP and lumpsum investments with clear breakdowns.",
    longDescription:
      "Investment Calculator is a finance utility that helps estimate returns for SIP (Systematic Investment Plan) and lumpsum investments. It focuses on a clean UI, quick inputs, and clear output so users can understand projections at a glance.",
    techStack: ["JavaScript", "HTML", "CSS", "Finance formulas", "Git/GitHub"],
    highlights: ["FinTech", "SIP/Lumpsum", "Clean UI"],
    features: [
      "Supports SIP and lumpsum calculations",
      "Shows projected value based on inputs",
      "Simple, fast UX for quick what-if scenarios",
      "Easy to extend with charts or export",
    ],
    Icon: Calculator,
    repoUrl: "https://github.com/Surja2003/investment-calculator",
    demoUrl: "https://surja2003.github.io/Investment-Calculator/",
    academic: true,
  },
  {
    slug: "temple-crowd-management",
    title: "Temple Crowd Management",
    subtitle: "Smart queue management concept",
    summary:
      "A smart queue/crowd-flow project concept aimed at safer, smoother temple visits.",
    longDescription:
      "Temple Crowd Management is a project concept focused on organizing queues and improving crowd flow. The goal is to reduce congestion, improve safety, and give visitors a smoother experience using practical tracking/token ideas and simple system design.",
    techStack: ["System design", "Queue management", "Web concepts", "Git/GitHub"],
    highlights: ["Smart queue", "Safety", "Scalable concept"],
    features: [
      "Defines a queue/token-based flow for visitors",
      "Focuses on safety and congestion reduction",
      "Designed to be scalable for different crowd sizes",
      "Can be extended with dashboards, alerts, and reporting",
    ],
    Icon: Landmark,
    repoUrl: "https://github.com/Surja2003/temple-crowd-management",
    demoUrl: "https://temple-crowd-management.vercel.app/",
    academic: true,
  },
  {
    slug: "speedtest",
    title: "SpeedTest",
    subtitle: "Network testing tool",
    summary:
      "Lightweight tool to test basic network speed and connectivity in the browser.",
    longDescription:
      "SpeedTest is a simple network testing project that measures basic connectivity and speed metrics with a straightforward interface. It’s built as a practical tool/demo and can be expanded with more detailed reporting.",
    techStack: ["JavaScript", "Web APIs", "Networking basics", "Git/GitHub"],
    highlights: ["Network", "Testing", "Lightweight"],
    features: [
      "Runs a basic speed test flow",
      "Displays results in a clear, readable UI",
      "Useful for quick demos and experiments",
      "Designed to be extended with history and charts",
    ],
    Icon: Gauge,
    repoUrl: "https://github.com/Surja2003/speedtest",
  },
  {
    slug: "mahamaya-enterprise",
    title: "Mahamaya Enterprise",
    subtitle: "Local supplier website",
    summary:
      "Business website for a local supplier with clean, responsive layout and structured sections.",
    longDescription:
      "Mahamaya Enterprise is a business-style website project with a responsive layout and well-structured content sections. It’s designed to present products/services clearly and make contacting the business easy.",
    techStack: ["React", "Tailwind CSS", "Vite", "Responsive UI", "Git/GitHub"],
    highlights: ["Business site", "Responsive", "Modern UI"],
    features: [
      "Responsive layout for mobile and desktop",
      "Clear sections for services/products and contact",
      "Simple navigation and modern styling",
      "Easy to maintain and extend",
    ],
    Icon: Store,
    repoUrl: "https://github.com/Surja2003/mahamaya-enterprise",
    demoUrl: "https://mahamaya-enterprise.vercel.app/",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
