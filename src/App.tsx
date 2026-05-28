import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import { CursorTrailBackground } from './components/CursorTrailBackground';

const NAV_ITEMS = [
  { path: '/', label: 'Intro', hex: '#AEE1FF' },
  { path: '/projects', label: 'Projects', hex: '#FFB5D8' },
  { path: '/contact', label: 'Contact', hex: '#D4C4FF' },
];

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: -30 }}
        transition={{
          duration: 0.4,
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

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#FFF6C3] bg-grid-pattern min-h-screen font-comic relative">
        {/* Cursor Trail — above background, behind all UI content */}
        <CursorTrailBackground />

        {/* Global Nav Bar */}
        <header className="fixed top-0 left-0 w-full h-[60px] bg-[#FFF6C3] border-b-4 border-black z-50 flex items-end px-4 sm:px-8 shrink-0 shadow-brutal">
          <div className="flex items-center space-x-2 sm:space-x-6 w-full max-w-6xl mx-auto overflow-x-auto no-scrollbar">
            <NavLink to="/" className="font-paytone text-2xl sm:text-3xl tracking-widest star-stroke pb-1 pr-4 shrink-0 no-underline">
              PORTFOLIO
            </NavLink>
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={{ '--tab-bg': item.hex } as React.CSSProperties}
                className={({ isActive }) =>
                  `nav-tab px-6 py-2 sm:px-10 sm:py-2 hover:brightness-110 transition-all shrink-0 no-underline ${isActive ? 'brightness-110 translate-y-[-2px]' : ''}`
                }
              >
                <span className="font-paytone text-xs sm:text-sm uppercase relative">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </header>

        <div className="relative z-10">
          <AnimatedRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}
