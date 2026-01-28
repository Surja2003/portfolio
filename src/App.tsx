import { Suspense, lazy, useEffect } from 'react';
import { LazyMotion, m, useScroll, useSpring } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Background } from './components/Background.tsx';

const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const ProjectDetailsPage = lazy(() =>
  import('./pages/ProjectDetailsPage').then((m) => ({ default: m.ProjectDetailsPage }))
);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => document.documentElement.classList.remove('dark');
  }, []);

  return (
    <LazyMotion features={() => import('./motionFeatures').then((mod) => mod.default)} strict>
      <div className="bg-slate-950 text-white min-h-screen relative">
        <Background />
        {/* Progress bar */}
        <m.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 origin-left z-50"
          style={{ scaleX }}
        />

        <Navigation />

        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
          </Routes>
        </Suspense>

        <footer className="relative z-10 py-8 text-center text-gray-400 border-t border-gray-800/60">
          <div className="max-w-7xl mx-auto px-6">
            <p>&copy; {new Date().getFullYear()} Nespendra Das. Built with React + Vite + Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </LazyMotion>
  );
}

export default App;