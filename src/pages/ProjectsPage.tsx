import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderSection } from '../components/FolderSection';
import { ProjectCard } from '../components/ProjectCard';
import { ALL_PROJECTS, CATEGORIES, type Category } from '../data/portfolioData';

// Category icon map for the retro filter tabs
const CATEGORY_ICONS: Record<Category, string> = {
  'All': '🗂️',
  'Website Projects': '🌐',
  'Game Design': '🎲',
  'Graphic Design': '🎨',
  'Logo Design': '✒️',
  'Motion Graphics': '🎬',
  'Product Design': '📦',
};

// Alternating tab colors for that chunky Y2K button feel
const TAB_COLORS: string[] = [
  'bg-[#D4C4FF]',  // All - purple
  'bg-[#AEE1FF]',  // Website - blue
  'bg-[#FFD166]',  // Game - gold
  'bg-[#FFB5D8]',  // Graphic - pink
  'bg-[#B2F0E6]',  // Logo - mint
  'bg-[#FF94C7]',  // Motion - hot pink
  'bg-[#FFEC8B]',  // Product - yellow
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filteredProjects = activeFilter === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === activeFilter);

  const projectCount = filteredProjects.length;

  return (
    <main className="pt-[80px] px-4 sm:px-8 max-w-7xl mx-auto relative overflow-hidden sm:overflow-visible pb-[30vh]">
      <FolderSection
        id="projects"
        title="02. PROJECTS.zip"
        color="bg-[#FFB5D8]"
        tabColor="bg-[#FF94C7]"
        zIndex="z-10"
        stickyTop="top-[50px] sm:top-[60px]"
      >
        {/* ─── RETRO FILTER SYSTEM ─── */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-2 sm:px-5 sm:py-2 border-4 border-black font-pixel text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-1 sm:gap-2 ${
                  activeFilter === cat
                    ? `${TAB_COLORS[i]} translate-y-1 shadow-[1px_1px_0_0_rgba(0,0,0,1)]`
                    : `bg-[#C0C0C0] shadow-[inset_2px_2px_0px_rgba(255,255,255,1),inset_-2px_-2px_0px_rgba(0,0,0,0.3),4px_4px_0_0_rgba(0,0,0,1)] hover:brightness-110 active:translate-y-1 active:shadow-[1px_1px_0_0_rgba(0,0,0,1)]`
                }`}
              >
                <span className="text-base sm:text-lg leading-none">{CATEGORY_ICONS[cat]}</span>
                <span className="hidden sm:inline">{cat}</span>
                <span className="sm:hidden">{cat === 'All' ? 'All' : cat.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Status bar */}
          <div className="mt-3 bg-white border-2 border-black px-3 py-1 inline-block shadow-[inset_1px_1px_0px_rgba(0,0,0,0.2)]">
            <span className="font-pixel text-sm text-gray-700">
              ▸ Showing {projectCount} item{projectCount !== 1 ? 's' : ''} in {activeFilter === 'All' ? 'all categories' : activeFilter} ✓
            </span>
          </div>
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
      </FolderSection>
    </main>
  );
}
