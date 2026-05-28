import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderSection } from '../components/FolderSection';
import { WindowModal } from '../components/WindowModal';

const FILTERS = ['All', 'Website Projects', 'Game Design Assets', 'Graphic Designs', 'Motion Graphics', 'Product Design'];

const PROJECTS = [
  {
    title: 'MathPulse AI - Teacher-Side Score Tracking',
    client: 'EdTech Startup',
    desc: 'MathPulse AI - Teacher-Side Score Tracking for Grade 11 STEM General Mathematics. AI-driven adaptive math tutoring platform with real-time analytics dashboard for educators.',
    tags: ['React', 'Python', 'OpenAI'],
    icon: '🧮',
    category: 'Website Projects',
    link: '#'
  },
  {
    title: 'Cyndikato - Rulebook & Iconography',
    client: 'Indie Publisher',
    desc: 'Tabletop Game Rulebook & Iconography Design.',
    tags: ['Illustrator', 'Figma', 'Print'],
    icon: '🎲',
    category: 'Game Design Assets',
    link: '#'
  },
  {
    title: 'it\'s ouR Studio Platform',
    client: 'Design Agency',
    desc: 'Vercel Platform Redesign with high-impact visual aesthetics.',
    tags: ['Next.js', 'Tailwind', 'Motion'],
    icon: '✨',
    category: 'Website Projects',
    link: '#'
  },
  {
    title: 'Y2K Sticker Pack',
    client: 'Self-Initiated',
    desc: 'Maximalist Y2K style sticker pack for digital planners.',
    tags: ['Photoshop', 'Illustration'],
    icon: '🦋',
    category: 'Graphic Designs',
    link: '#'
  }
];

// Motion Graphics — embedded YouTube unlisted videos
const MOTION_GRAPHICS = [
  {
    title: 'Motion Reel 01',
    desc: 'Kinetic typography and logo animation showcase.',
    tags: ['After Effects', 'Motion Design'],
    youtubeId: 'YOUR_VIDEO_ID_1', // Replace with your unlisted YouTube video ID
  },
  {
    title: 'Motion Reel 02',
    desc: 'UI animation and micro-interaction explorations.',
    tags: ['After Effects', 'Figma'],
    youtubeId: 'YOUR_VIDEO_ID_2', // Replace with your unlisted YouTube video ID
  },
  {
    title: 'Motion Reel 03',
    desc: 'Brand identity motion graphics and transitions.',
    tags: ['After Effects', 'Premiere Pro'],
    youtubeId: 'YOUR_VIDEO_ID_3', // Replace with your unlisted YouTube video ID
  },
];

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeProject]);

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
        {/* FILTER SYSTEM */}
        <div className="flex flex-wrap gap-3 mt-2 mb-6">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 border-2 border-black font-pixel text-sm sm:text-base uppercase tracking-widest shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all flex items-center gap-2 ${activeFilter === f ? 'bg-[#D4C4FF] text-black translate-y-1 shadow-none' : 'bg-white text-black hover:bg-gray-100'}`}
            >
              {f === 'All' ? '🗂️' : '📁'} {f}
            </button>
          ))}
        </div>

        {/* MOTION GRAPHICS — YouTube Embeds */}
        {activeFilter === 'Motion Graphics' ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <AnimatePresence mode="popLayout">
              {MOTION_GRAPHICS.map((vid, i) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  key={vid.title}
                  className="h-full"
                >
                  <WindowModal
                    title={`${vid.title}.mp4`}
                    barColor="bg-[#D4C4FF]"
                    icon="🎬"
                    className="h-full"
                  >
                    <div className="relative w-full pb-[56.25%] border-4 border-black mb-4 overflow-hidden shadow-[inset_2px_2px_0px_rgba(0,0,0,0.2)]">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${vid.youtubeId}`}
                        title={vid.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <h3 className="font-paytone text-2xl mb-1 leading-tight mt-2">{vid.title}</h3>
                    <div className="flex gap-2 isolate flex-wrap">
                      {vid.tags.map(t => (
                        <span key={t} className="font-pixel text-xs uppercase px-2 bg-white border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] mb-2 inline-block">{t}</span>
                      ))}
                    </div>
                    <p className="font-comic text-base font-bold line-clamp-2 leading-tight mt-2">{vid.desc}</p>
                  </WindowModal>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* REGULAR PROJECT CARDS */
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(proj => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  key={proj.title}
                  className="h-full"
                >
                  <WindowModal 
                    title={`${proj.title.substring(0, 15)}...`} 
                    onClick={() => setActiveProject(proj)}
                    barColor="bg-[#FFD166]"
                    icon={proj.icon}
                    className="h-full hover:-translate-y-2 transition-transform"
                  >
                    <div className="h-40 bg-gray-100 border-4 border-black mb-4 flex items-center justify-center font-pixel text-gray-500 shadow-[inset_2px_2px_0px_rgba(0,0,0,0.2)] bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:10px_10px] pointer-events-none">
                      [CLICK_TO_PREVIEW]
                    </div>
                    <h3 className="font-paytone text-2xl mb-1 truncate leading-tight mt-2">{proj.title}</h3>
                    <div className="flex gap-2 isolate">
                      <span className="font-pixel text-xs uppercase px-2 bg-white border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] mb-4 inline-block">{proj.tags[0]}</span>
                    </div>
                    <p className="font-comic text-base font-bold line-clamp-2 h-12 leading-tight">{proj.desc}</p>
                    <div className="mt-4 pt-4 border-t-2 border-dashed border-black flex justify-between items-center group">
                      <span className="font-pixel underline cursor-pointer font-bold text-base hover:text-pink-500">Details...</span>
                      <a 
                        href={proj.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e: React.MouseEvent) => e.stopPropagation()} 
                        className="bg-[#AEE1FF] border-2 border-black px-3 py-1 font-pixel text-sm uppercase shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-1 active:bg-[#89CFF0]"
                      >
                        View Live <span className="text-lg leading-none mt-[-2px]">↗</span>
                      </a>
                    </div>
                  </WindowModal>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </FolderSection>

      {/* PROJECT DETAILS OVERLAY MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
            onClick={() => setActiveProject(null)}
          >
            <motion.div 
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.95 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="w-full max-w-4xl min-h-[min(600px,90vh)] my-auto"
            >
              <WindowModal title={`${activeProject.title}.exe`} barColor="bg-[#8CE0D1]" icon="📁" onClick={() => {}}>
                <div className="flex flex-col gap-6 p-2 sm:p-6">
                  <div className="w-full h-48 sm:h-80 bg-gray-200 border-4 border-black flex flex-col items-center justify-center shadow-brutal font-pixel text-gray-800 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#FFB5D8]" style={{ backgroundImage: 'linear-gradient(45deg, #FF94C7 25%, transparent 25%, transparent 75%, #FF94C7 75%, #FF94C7), linear-gradient(45deg, #FF94C7 25%, transparent 25%, transparent 75%, #FF94C7 75%, #FF94C7)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px', opacity: 0.3 }}></div>
                    <span className="z-10 bg-white px-4 py-2 border-4 border-black shadow-brutal text-2xl sm:text-3xl mb-4 text-center break-all max-w-[90%]">PROJECT_{activeProject.title.substring(0,4).toUpperCase()}.GIF</span>
                    <span className="z-10 font-bold bg-[#AEE1FF] px-2 py-1 text-sm border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">[High_Resolution_Assets_Missing]</span>
                  </div>
                  
                  <div>
                    <h2 className="font-paytone text-3xl sm:text-5xl uppercase tracking-wide mb-3 text-black">{activeProject.title}</h2>
                    <p className="font-pixel text-lg sm:text-xl font-bold bg-[#FFD166] px-3 py-1 self-start border-4 border-black inline-block uppercase tracking-widest shadow-[2px_2px_0_0_rgba(0,0,0,1)]">CLIENT: {activeProject.client}</p>
                  </div>
                  
                  <p className="font-comic font-bold text-xl sm:text-2xl border-l-4 border-black pl-4 py-2 bg-white/50">{activeProject.desc}</p>
                  
                  <div className="flex gap-3 mt-4 flex-wrap">
                    {activeProject.tags.map((t: string) => (
                      <span key={t} className="px-3 sm:px-4 py-1 sm:py-2 bg-white border-4 border-black font-pixel shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-base sm:text-lg uppercase tracking-wider">{t}</span>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t-4 border-black border-dashed flex justify-end">
                    <button 
                      onClick={() => setActiveProject(null)}
                      className="px-6 sm:px-8 py-2 sm:py-3 bg-[#FF5E5E] text-white border-4 border-black font-pixel shadow-brutal hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-xl sm:text-2xl uppercase tracking-widest"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </WindowModal>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
