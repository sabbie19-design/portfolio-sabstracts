import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCard } from '../components/ProjectCard';
import { ALL_PROJECTS, CATEGORIES, type Category } from '../data/portfolioData';

// Pixel-art style SVG icons (16x16 grid) for each category
const CATEGORY_PIXEL_ICONS: Record<Category, ReactNode> = {
  'All': (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" style={{ imageRendering: 'pixelated' }}>
      <rect x="2" y="1" width="12" height="2" fill="currentColor"/>
      <rect x="1" y="3" width="14" height="11" fill="currentColor"/>
      <rect x="3" y="5" width="4" height="3" fill="#FFF"/>
      <rect x="9" y="5" width="4" height="3" fill="#FFF"/>
      <rect x="3" y="10" width="4" height="3" fill="#FFF"/>
      <rect x="9" y="10" width="4" height="3" fill="#FFF"/>
    </svg>
  ),
  'Website Projects': (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" style={{ imageRendering: 'pixelated' }}>
      <rect x="1" y="2" width="14" height="11" fill="currentColor"/>
      <rect x="2" y="3" width="12" height="2" fill="#87CEEB"/>
      <rect x="2" y="5" width="12" height="7" fill="#FFF"/>
      <rect x="3" y="4" width="1" height="1" fill="#FF6B6B"/>
      <rect x="5" y="4" width="1" height="1" fill="#FFD93D"/>
      <rect x="7" y="4" width="1" height="1" fill="#6BCB77"/>
      <rect x="6" y="13" width="4" height="1" fill="currentColor"/>
      <rect x="4" y="14" width="8" height="1" fill="currentColor"/>
    </svg>
  ),
  'Game Design': (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" style={{ imageRendering: 'pixelated' }}>
      <rect x="4" y="4" width="8" height="8" fill="currentColor"/>
      <rect x="5" y="5" width="2" height="2" fill="#FFF"/>
      <rect x="9" y="5" width="2" height="2" fill="#FFF"/>
      <rect x="5" y="9" width="2" height="2" fill="#FFF"/>
      <rect x="9" y="9" width="2" height="2" fill="#FFF"/>
      <rect x="7" y="7" width="2" height="2" fill="#FFF"/>
    </svg>
  ),
  'Graphic Design': (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" style={{ imageRendering: 'pixelated' }}>
      <rect x="2" y="12" width="2" height="3" fill="currentColor"/>
      <rect x="3" y="9" width="2" height="3" fill="currentColor"/>
      <rect x="5" y="6" width="2" height="6" fill="currentColor"/>
      <rect x="7" y="3" width="2" height="9" fill="currentColor"/>
      <rect x="9" y="1" width="2" height="2" fill="#FF6B6B"/>
      <rect x="9" y="3" width="2" height="3" fill="#FFD93D"/>
      <rect x="9" y="6" width="2" height="3" fill="#6BCB77"/>
      <rect x="9" y="9" width="2" height="3" fill="#87CEEB"/>
    </svg>
  ),
  'Logo Design': (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" style={{ imageRendering: 'pixelated' }}>
      <rect x="3" y="2" width="2" height="12" fill="currentColor"/>
      <rect x="5" y="2" width="6" height="2" fill="currentColor"/>
      <rect x="9" y="4" width="2" height="3" fill="currentColor"/>
      <rect x="5" y="7" width="4" height="2" fill="currentColor"/>
    </svg>
  ),
  'Motion Graphics': (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" style={{ imageRendering: 'pixelated' }}>
      <rect x="2" y="2" width="12" height="12" fill="currentColor"/>
      <rect x="3" y="3" width="10" height="10" fill="#333"/>
      <rect x="6" y="5" width="2" height="6" fill="#FFF"/>
      <rect x="8" y="6" width="2" height="4" fill="#FFF"/>
      <rect x="10" y="7" width="1" height="2" fill="#FFF"/>
    </svg>
  ),
  'Product Design': (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" style={{ imageRendering: 'pixelated' }}>
      <rect x="3" y="4" width="10" height="10" fill="currentColor"/>
      <rect x="4" y="5" width="8" height="8" fill="#D4A574"/>
      <rect x="5" y="2" width="6" height="3" fill="currentColor"/>
      <rect x="6" y="1" width="4" height="1" fill="currentColor"/>
      <rect x="6" y="7" width="4" height="4" fill="#FFF"/>
      <rect x="7" y="8" width="2" height="2" fill="currentColor"/>
    </svg>
  ),
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filteredProjects = activeFilter === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === activeFilter);

  const projectCount = filteredProjects.length;

  return (
    <div className="pb-8">
      {/* ─── RETRO TOOLBAR ─── */}
      <div className="retro-toolbar mb-6">
        {/* Toolbar title bar */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#000080] to-[#1084d0] border-b-2 border-black">
          <span className="font-pixel text-white text-xs sm:text-sm tracking-wider">📁 Filter: Category</span>
          <div className="ml-auto flex gap-1">
            <div className="w-4 h-4 border-2 border-black bg-[#C0C0C0] shadow-[inset_1px_1px_0px_#FFF,inset_-1px_-1px_0px_#808080] flex items-center justify-center">
              <span className="text-[8px] font-bold leading-none">─</span>
            </div>
            <div className="w-4 h-4 border-2 border-black bg-[#C0C0C0] shadow-[inset_1px_1px_0px_#FFF,inset_-1px_-1px_0px_#808080] flex items-center justify-center">
              <span className="text-[8px] font-bold leading-none">□</span>
            </div>
            <div className="w-4 h-4 border-2 border-black bg-[#C0C0C0] shadow-[inset_1px_1px_0px_#FFF,inset_-1px_-1px_0px_#808080] flex items-center justify-center">
              <span className="text-[8px] font-bold leading-none">✕</span>
            </div>
          </div>
        </div>

        {/* Toolbar button area */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 p-2 sm:p-3 bg-[#C0C0C0] border-2 border-t-0 border-black shadow-[inset_1px_1px_0px_#FFF,inset_-1px_-1px_0px_#808080]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`
                toolbar-btn flex items-center gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5
                border-2 font-pixel text-[10px] sm:text-xs uppercase tracking-wide
                transition-all whitespace-nowrap select-none
                ${activeFilter === cat
                  ? 'toolbar-btn--active border-black bg-white shadow-[inset_1px_1px_0px_#808080,inset_-1px_-1px_0px_#FFF]'
                  : 'border-[#FFF] border-r-[#808080] border-b-[#808080] bg-[#D4D4D4] shadow-[1px_1px_0px_#000] hover:bg-[#E0E0E0] active:shadow-none active:border-[#808080] active:border-r-[#FFF] active:border-b-[#FFF]'
                }
              `}
            >
              <span className="leading-none flex items-center">{CATEGORY_PIXEL_ICONS[cat]}</span>
              <span>{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div className="mb-6 bg-white border-2 border-black px-3 py-1 inline-block shadow-[inset_1px_1px_0px_rgba(0,0,0,0.15)]">
        <span className="font-pixel text-xs sm:text-sm text-gray-700">
          ▸ {projectCount} item{projectCount !== 1 ? 's' : ''} in /{activeFilter === 'All' ? '*' : activeFilter.toLowerCase().replace(' ', '-')}/ ✓
        </span>
      </div>

      {/* ─── PROJECT GRID ─── */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <span className="text-6xl mb-4">📭</span>
          <p className="font-pixel text-xl text-gray-600 uppercase tracking-wider">No projects found in this category</p>
        </div>
      )}

      {/* Footer status */}
      <div className="mt-8 pt-4 border-t-4 border-black border-dashed">
        <p className="font-pixel text-sm text-center uppercase tracking-wider text-gray-600">
          ▸ C:\Users\Sabstracts\portfolio\projects\ — {ALL_PROJECTS.length} total item(s) loaded ✓
        </p>
      </div>
    </div>
  );
}
