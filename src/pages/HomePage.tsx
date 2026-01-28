import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Research } from "../components/Research";
import { Skills } from "../components/Skills";

type LocationState = {
  scrollTo?: string;
} | null;

export function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = (location.state as LocationState) ?? null;
    const id = state?.scrollTo;
    if (!id) return;

    // Defer until after paint so the section exists.
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      navigate("/", { replace: true, state: null });
    }, 0);

    return () => window.clearTimeout(t);
  }, [location.state, navigate]);

  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Projects />
      <Research />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
