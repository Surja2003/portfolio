import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "#FAFAF8",
        color: "#141412",
      }}
    >
      <ScrollProgress />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
