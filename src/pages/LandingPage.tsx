import { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { WindowModal } from '../components/WindowModal';
import { SkillsMarquee } from '../components/SkillsMarquee';
import { ProjectCard } from '../components/ProjectCard';
import { ALL_PROJECTS } from '../data/portfolioData';

// Smooth scroll-triggered animation
const fadeSlideUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const CAPABILITIES = [
  {
    icon: '🎨',
    folder: '📁',
    title: 'Creative & UI/UX Design',
    desc: 'Crafting intuitive, visually striking interfaces and translating abstract ideas into cohesive digital designs.',
    color: 'bg-[#FFB5D8]',
  },
  {
    icon: '📋',
    folder: '📁',
    title: 'Project Management',
    desc: 'Organizing timelines, structuring team workflows, and keeping complex projects on track.',
    color: 'bg-[#AEE1FF]',
  },
  {
    icon: '🔍',
    folder: '📁',
    title: 'Quality Assurance',
    desc: 'Rigorously testing layouts, interactions, and systems to ensure a flawless user experience.',
    color: 'bg-[#B2F0E6]',
  },
  {
    icon: '💻',
    folder: '📁',
    title: 'Web & App Development',
    desc: 'Bringing designs to life through frontend coding and interactive application development.',
    color: 'bg-[#D4C4FF]',
  },
];

const FEATURED_PROJECT_IDS = ['librowse', 'its-our-studio', 'mathpulse-ai'];

// Projects to showcase in the hero carousel
const CAROUSEL_PROJECTS = ALL_PROJECTS.filter(p =>
  ['librowse', 'its-our-studio', 'arta-css', 'mathpulse-ai', 'trace-of-mango', 'cyndikato-rulebook', 'flipbook-ttrpg'].includes(p.id)
  && (p.thumbnail || p.images.length > 0)
);

export default function LandingPage() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCarouselIndex((prev) => (prev + 1) % CAROUSEL_PROJECTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCarouselIndex((prev) => (prev - 1 + CAROUSEL_PROJECTS.length) % CAROUSEL_PROJECTS.length);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="pb-8">
      {/* ─── ABOUT / HERO SECTION ─── */}
      <motion.div {...fadeSlideUp} className="mb-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start relative">
          <WindowModal title="ABOUT_ME.exe" barColor="bg-[#FF94C7]" icon="🦋" className="flex-1 w-full relative z-10">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Profile picture inside the container */}
              <img
                src="/assets/sab-pic.png"
                alt="Sabstracts"
                className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-black shadow-brutal object-contain shrink-0"
              />
              <div className="flex-1">
                <h1 className="font-paytone text-4xl sm:text-6xl text-black mb-3 uppercase leading-tight">
                  Hello! I'm Sab. ✩
                </h1>
                <span className="font-paytone text-[#FF5E5E] text-2xl sm:text-3xl tracking-wide block mb-4">
                  Graphic Designer | UI/UX | QA | PM
                </span>
              </div>
            </div>
            <p className="font-comic text-xl sm:text-2xl leading-relaxed text-gray-800 border-l-4 border-black pl-4 my-6 font-bold">
              Sabstracts: Turning abstract ideas into concrete digital experiences.
            </p>
            <div className="flex items-center justify-between mt-8 flex-wrap gap-4">
              <div className="flex gap-4 flex-wrap">
                <span className="font-pixel text-xl tracking-widest underline uppercase text-[#FF94C7]">
                  Design 🎨
                </span>
                <span className="font-pixel text-xl tracking-widest underline uppercase text-gray-700">
                  Code 💻
                </span>
                <span className="font-pixel text-xl tracking-widest  underline uppercase text-[#256fb2]">
                  Strategy 
                </span>
              </div>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#FF94C7] border-4 border-black shadow-brutal font-pixel text-lg sm:text-xl uppercase tracking-widest text-black hover:bg-[#FFB5D8] transition-colors"
                >
                  💌 Let's Collaborate!
                </motion.button>
              </Link>
            </div>
          </WindowModal>

          {/* Project Carousel */}
          <div className="w-full lg:w-96 flex flex-col gap-6 relative z-10">
            <WindowModal title="SHOWCASE.gif" barColor="bg-[#D4C4FF]" icon="🎬">
              <div className="relative overflow-hidden rounded-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={carouselIndex}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full"
                  >
                    <div className="w-full aspect-[4/3] border-4 border-black shadow-brutal overflow-hidden">
                      <img
                        src={CAROUSEL_PROJECTS[carouselIndex].thumbnail || CAROUSEL_PROJECTS[carouselIndex].images[0]}
                        alt={CAROUSEL_PROJECTS[carouselIndex].title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="mt-3">
                      <h3 className="font-paytone text-sm uppercase truncate">
                        {CAROUSEL_PROJECTS[carouselIndex].icon} {CAROUSEL_PROJECTS[carouselIndex].title}
                      </h3>
                      <p className="font-comic text-xs text-gray-600 mt-1 line-clamp-2">
                        {CAROUSEL_PROJECTS[carouselIndex].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Controls */}
                <div className="flex items-center justify-between mt-3">
                  <button
                    onClick={prevSlide}
                    className="w-8 h-8 bg-[#FFB5D8] border-3 border-black shadow-brutal font-paytone text-sm flex items-center justify-center hover:bg-[#FF94C7] transition-colors"
                    aria-label="Previous project"
                  >
                    ◀
                  </button>
                  <div className="flex gap-1.5">
                    {CAROUSEL_PROJECTS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCarouselIndex(i)}
                        className={`w-2.5 h-2.5 border-2 border-black transition-all ${
                          i === carouselIndex ? 'bg-[#FF94C7] scale-125' : 'bg-white'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextSlide}
                    className="w-8 h-8 bg-[#FFB5D8] border-3 border-black shadow-brutal font-paytone text-sm flex items-center justify-center hover:bg-[#FF94C7] transition-colors"
                    aria-label="Next project"
                  >
                    ▶
                  </button>
                </div>
              </div>
            </WindowModal>
            <div className="hidden lg:block absolute -right-8 -bottom-16 opacity-80 pointer-events-none rotate-12 drop-shadow-lg text-6xl select-none">💖</div>
          </div>
        </div>
      </motion.div>

      {/* ─── CAPABILITIES SECTION ─── */}
      <motion.div {...fadeSlideUp} className="mb-8">
        <WindowModal title="CAPABILITIES.exe" barColor="bg-[#FFD166]" icon="⚡">
          <div className="relative">
            <div className="absolute top-2 right-2 text-3xl opacity-40 pointer-events-none select-none animate-pulse">✦</div>
            <h2 className="font-paytone text-3xl sm:text-4xl mb-6 star-stroke uppercase">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {CAPABILITIES.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  className={`${cap.color} border-4 border-black shadow-brutal p-4 sm:p-5 relative overflow-hidden group hover:-translate-y-1 transition-transform`}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-bl-full pointer-events-none"></div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0 mt-1 font-pixel border-2 border-black bg-white w-9 h-9 flex items-center justify-center shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                      {cap.folder}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{cap.icon}</span>
                        <h3 className="font-paytone text-base sm:text-lg leading-tight uppercase">{cap.title}</h3>
                      </div>
                      <p className="font-comic text-sm sm:text-base font-bold text-gray-800 leading-snug">{cap.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t-4 border-black border-dashed">
              <p className="font-pixel text-sm text-center uppercase tracking-wider text-gray-600">
                ▸ C:\Users\Sabstracts\capabilities\ — 4 item(s) loaded ✓
              </p>
            </div>
          </div>
        </WindowModal>
      </motion.div>

      {/* ─── SKILLS SECTION ─── */}
      <motion.div {...fadeSlideUp} className="mb-8">
        <div ref={skillsRef} className="bg-white/60 backdrop-blur-sm border-4 border-black shadow-brutal p-6 sm:p-10 rounded-xl relative overflow-hidden">
          <div className="absolute top-4 right-4 text-4xl opacity-50 pointer-events-none rotate-12 select-none">⚙️</div>
          
          <h2 className="font-paytone text-4xl mb-8 star-stroke">SOFTWARE_SKILLS</h2>
          <SkillsMarquee direction="left" skills={[
            { color: 'bg-[#31A8FF]', letter: 'Ps', title: 'Photoshop' },
            { color: 'bg-[#FF9A00]', letter: 'Ai', title: 'Illustrator' },
            { color: 'bg-[#9999FF]', letter: 'Ae', title: 'AfterEffects' },
            { color: 'bg-[#000000]', letter: 'Fg', title: 'Figma' },
            { color: 'bg-[#7CB342]', letter: 'Kr', title: 'Krita' },
            { color: 'bg-[#4EBFED]', letter: 'Af', title: 'Affinity' },
            { color: 'bg-[#00C4CC]', letter: 'Cv', title: 'Canva' },
            { color: 'bg-[#31A8FF]', letter: 'Ps', title: 'Photoshop' },
            { color: 'bg-[#FF9A00]', letter: 'Ai', title: 'Illustrator' },
            { color: 'bg-[#9999FF]', letter: 'Ae', title: 'AfterEffects' },
            { color: 'bg-[#000000]', letter: 'Fg', title: 'Figma' },
            { color: 'bg-[#7CB342]', letter: 'Kr', title: 'Krita' },
            { color: 'bg-[#4EBFED]', letter: 'Af', title: 'Affinity' },
            { color: 'bg-[#00C4CC]', letter: 'Cv', title: 'Canva' },
          ]} />

          <div className="border-b-4 border-black border-dashed my-8"></div>
          
          <h2 className="font-paytone text-4xl mb-8 star-stroke">DEV_TOOLKIT</h2>
          <SkillsMarquee direction="right" skills={[
            { color: 'bg-[#61DAFB]', letter: 'Re', title: 'React' },
            { color: 'bg-[#3178C6]', letter: 'Ts', title: 'TypeScript' },
            { color: 'bg-[#38B2AC]', letter: 'Tw', title: 'Tailwind' },
            { color: 'bg-[#FF9A00]', letter: 'Py', title: 'Python' },
            { color: 'bg-[#3DDC84]', letter: 'As', title: 'Android Studio' },
            { color: 'bg-[#5C2D91]', letter: 'Vs', title: 'Visual Studio' },
            { color: 'bg-[#F05032]', letter: 'Gt', title: 'Git' },
            { color: 'bg-[#181717]', letter: 'Gh', title: 'GitHub' },
            { color: 'bg-[#000000]', letter: 'Vc', title: 'Vercel' },
            { color: 'bg-[#61DAFB]', letter: 'Re', title: 'React' },
            { color: 'bg-[#3178C6]', letter: 'Ts', title: 'TypeScript' },
            { color: 'bg-[#38B2AC]', letter: 'Tw', title: 'Tailwind' },
            { color: 'bg-[#000000]', letter: 'Nx', title: 'Next.js' },
            { color: 'bg-[#FF9A00]', letter: 'Py', title: 'Python' },
            { color: 'bg-[#3DDC84]', letter: 'As', title: 'Android Studio' },
            { color: 'bg-[#5C2D91]', letter: 'Vs', title: 'Visual Studio' },
            { color: 'bg-[#F05032]', letter: 'Gt', title: 'Git' },
            { color: 'bg-[#181717]', letter: 'Gh', title: 'GitHub' },
            { color: 'bg-[#000000]', letter: 'Vc', title: 'Vercel' },
          ]} />
        </div>
      </motion.div>

      {/* ─── FEATURED PROJECTS ─── */}
      <motion.div {...fadeSlideUp} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ALL_PROJECTS.filter(p => FEATURED_PROJECT_IDS.includes(p.id)).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* ACCESS FULL ARCHIVE BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mt-12"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#FF94C7] border-4 border-black shadow-brutal font-pixel text-xl sm:text-2xl uppercase tracking-widest text-black hover:bg-[#FFB5D8] transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-2xl">📂</span>
                ACCESS_FULL_ARCHIVE.exe
                <span className="text-2xl">💾</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Footer status */}
      <div className="mt-8 pt-4 border-t-4 border-black border-dashed">
        <p className="font-pixel text-sm text-center uppercase tracking-wider text-gray-600">
          ▸ C:\Users\Sabstracts\intro\ — all sections loaded ✓
        </p>
      </div>
    </div>
  );
}
