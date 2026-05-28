import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import { Navigation } from './components/Navigation';
import { CursorTrailBackground } from './components/CursorTrailBackground';

/**
 * Page color map — each route's content area matches its active tab color.
 * This creates the seamless "folder" merge effect.
 */
const PAGE_COLORS: Record<string, string> = {
  '/': '#AEE1FF',
  '/projects': '#FFB5D8',
  '/contact': '#D4C4FF',
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function AppContent() {
  const location = useLocation();
  const bgColor = PAGE_COLORS[location.pathname] || PAGE_COLORS['/'];

  return (
    <div className="bg-[#FFF6C3] bg-grid-pattern min-h-screen font-comic relative">
      {/* Cursor Trail — above background, behind all UI content */}
      <CursorTrailBackground />

      <div className="relative z-10">
        {/* Unified Folder Navigation — tabs sit directly on the content box */}
        <Navigation />

        {/* Main Content Container — the "folder body" that the active tab merges into */}
        <div
          className="folder-body mx-4 sm:mx-8 max-w-7xl lg:mx-auto border-4 border-black rounded-b-2xl rounded-tr-2xl shadow-brutal-lg min-h-[85vh] relative"
          style={{ backgroundColor: bgColor }}
        >
          {/* Inner texture overlay */}
          <div
            className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none"
            style={{ mixBlendMode: 'overlay' }}
          />

          {/* Page content */}
          <div className="relative z-10 p-4 sm:p-8">
            <AnimatedRoutes />
          </div>
        </div>

        {/* Footer path */}
        <div className="px-4 sm:px-8 max-w-7xl mx-auto mt-4 mb-8">
          <p className="font-pixel text-sm text-center uppercase tracking-wider text-gray-600">
            ▸ C:\Users\Sabstracts\portfolio\ — session active ✓
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
