import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { WindowModal } from '../components/WindowModal';
import { SkillsMarquee } from '../components/SkillsMarquee';

// Heavy folder pull animation — smooth, no bounce
const folderSlideUp = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

// Lighter content fade for inner elements
const fadeSlideUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
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

const FEATURED_PROJECTS = [
  {
    title: 'MathPulse AI',
    client: 'EdTech Startup',
    desc: 'MathPulse AI - Teacher-Side Score Tracking for Grade 11 STEM General Mathematics.',
    tags: ['React', 'Python', 'OpenAI'],
    icon: '🧮',
    category: 'Website Projects',
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
  }
];

export default function LandingPage() {
  const skillsRef = useRef<HTMLDivElement>(null);

  return (
    <main className="pt-[80px] px-4 sm:px-8 max-w-7xl mx-auto relative overflow-hidden sm:overflow-visible pb-[30vh]">

      {/* FOLDER 1: INTRO — rigid folder with scroll animation */}
      <motion.div {...folderSlideUp} id="intro" className="relative z-10 mb-8">
        <div className="inline-block px-4 py-2 sm:px-8 sm:py-3 bg-[#89CFF0] border-4 border-black border-b-0 rounded-t-2xl font-bold font-paytone text-base sm:text-xl uppercase relative top-[4px] shadow-[inset_2px_2px_0px_rgba(255,255,255,0.4)]">
          <span className="text-black tracking-wide drop-shadow-[1px_1px_0px_rgba(255,255,255,0.5)]">01. INTRO.exe</span>
        </div>
        <div className="border-4 border-black shadow-brutal-lg bg-[#AEE1FF] min-h-[80vh] p-4 sm:p-8 relative z-10 rounded-b-2xl rounded-tr-2xl pb-16">
          <div className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none" style={{ mixBlendMode: 'overlay' }}></div>
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-8 items-start relative mt-4">
              <WindowModal title="ABOUT_ME.exe" barColor="bg-[#FF94C7]" icon="🦋" className="flex-1 w-full relative z-10">
                <h1 className="font-paytone text-5xl sm:text-7xl text-black mb-3 uppercase leading-tight">
                  Sabstracts ✩ <br/>
                  <span className="text-[#FF5E5E] text-4xl sm:text-5xl tracking-wide">UI/UX & PM</span>
                </h1>
                <p className="font-comic text-xl sm:text-2xl leading-relaxed text-gray-800 border-l-4 border-black pl-4 my-6 font-bold">
                  Sabstracts: Turning abstract ideas into concrete digital experiences.
                </p>
                <div className="flex gap-4 mt-8 flex-wrap">
                  <div className="px-4 py-2 bg-black text-[#FF94C7] font-pixel text-xl tracking-widest uppercase shadow-brutal border-2 border-black">
                    Design 🎨
                  </div>
                  <div className="px-4 py-2 bg-white text-black font-pixel text-xl tracking-widest uppercase shadow-brutal border-2 border-black">
                    Code 💻
                  </div>
                  <div className="px-4 py-2 bg-[#89CFF0] text-black font-pixel text-xl tracking-widest uppercase shadow-brutal border-2 border-black">
                    Strategy 📈
                  </div>
                </div>
              </WindowModal>

              <div className="w-full lg:w-80 flex flex-col gap-6 relative z-10">
                <WindowModal title="now_playing.mp3" barColor="bg-[#D4C4FF]" icon="💿">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border-4 border-black bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 animate-[spin_4s_linear_infinite] shadow-brutal mb-4 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_75%,rgba(0,0,0,0.1)_75%,rgba(0,0,0,0.1))] bg-[length:10px_10px]"></div>
                      <div className="w-6 h-6 bg-white border-4 border-black rounded-full z-10 shadow-[inset_1px_1px_0px_rgba(0,0,0,0.5)]"></div>
                    </div>
                    <p className="font-pixel text-xl font-bold text-center uppercase tracking-wide">Dreaming Of You</p>
                    <p className="font-pixel text-lg">02:31 / 04:09</p>
                    <div className="flex gap-4 mt-4 text-2xl font-pixel bg-white border-2 border-black px-4 py-1 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                      <button className="hover:text-pink-500 active:translate-y-1">⏮</button>
                      <button className="hover:text-pink-500 active:translate-y-1">▶</button>
                      <button className="hover:text-pink-500 active:translate-y-1">⏭</button>
                    </div>
                  </div>
                </WindowModal>
                <div className="hidden lg:block absolute -right-8 -bottom-16 opacity-80 pointer-events-none rotate-12 drop-shadow-lg text-6xl select-none">💖</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CAPABILITIES SECTION */}
      <motion.div {...fadeSlideUp} className="relative z-15 mb-8">
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

      {/* FOLDER 2: SKILLS — rigid folder with scroll animation */}
      <motion.div {...folderSlideUp} id="skills" className="relative z-20 mb-8">
        <div className="inline-block px-4 py-2 sm:px-8 sm:py-3 bg-[#8CE0D1] border-4 border-black border-b-0 rounded-t-2xl font-bold font-paytone text-base sm:text-xl uppercase relative top-[4px] shadow-[inset_2px_2px_0px_rgba(255,255,255,0.4)]">
          <span className="text-black tracking-wide drop-shadow-[1px_1px_0px_rgba(255,255,255,0.5)]">03. SKILLS.bat</span>
        </div>
        <div className="border-4 border-black shadow-brutal-lg bg-[#B2F0E6] min-h-[80vh] p-4 sm:p-8 relative z-10 rounded-b-2xl rounded-tr-2xl pb-16">
          <div className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none" style={{ mixBlendMode: 'overlay' }}></div>
          <div className="relative z-10">
            <div ref={skillsRef} className="flex flex-col gap-8 h-full mt-4">
              <div className="bg-white/60 backdrop-blur-sm border-4 border-black shadow-brutal p-6 sm:p-10 rounded-xl relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl opacity-50 pointer-events-none rotate-12 select-none">⚙️</div>
                
                <h2 className="font-paytone text-4xl mb-8 star-stroke">SOFTWARE_SKILLS</h2>
                <SkillsMarquee direction="left" skills={[
                  { color: 'bg-[#31A8FF]', letter: 'Ps', title: 'Photoshop' },
                  { color: 'bg-[#FF9A00]', letter: 'Ai', title: 'Illustrator' },
                  { color: 'bg-[#FF3366]', letter: 'Id', title: 'InDesign' },
                  { color: 'bg-[#9999FF]', letter: 'Ae', title: 'AfterEffects' },
                  { color: 'bg-[#000000]', letter: 'Fg', title: 'Figma' },
                  { color: 'bg-[#31A8FF]', letter: 'Ps', title: 'Photoshop' },
                  { color: 'bg-[#FF9A00]', letter: 'Ai', title: 'Illustrator' },
                  { color: 'bg-[#FF3366]', letter: 'Id', title: 'InDesign' },
                  { color: 'bg-[#9999FF]', letter: 'Ae', title: 'AfterEffects' },
                  { color: 'bg-[#000000]', letter: 'Fg', title: 'Figma' },
                ]} />

                <div className="border-b-4 border-black border-dashed my-8"></div>
                
                <h2 className="font-paytone text-4xl mb-8 star-stroke">DEV_TOOLKIT</h2>
                <SkillsMarquee direction="right" skills={[
                  { color: 'bg-[#61DAFB]', letter: 'Re', title: 'React' },
                  { color: 'bg-[#3178C6]', letter: 'Ts', title: 'TypeScript' },
                  { color: 'bg-[#38B2AC]', letter: 'Tw', title: 'Tailwind' },
                  { color: 'bg-[#000000]', letter: 'Nx', title: 'Next.js' },
                  { color: 'bg-[#FF9A00]', letter: 'Py', title: 'Python' },
                  { color: 'bg-[#61DAFB]', letter: 'Re', title: 'React' },
                  { color: 'bg-[#3178C6]', letter: 'Ts', title: 'TypeScript' },
                  { color: 'bg-[#38B2AC]', letter: 'Tw', title: 'Tailwind' },
                  { color: 'bg-[#000000]', letter: 'Nx', title: 'Next.js' },
                  { color: 'bg-[#FF9A00]', letter: 'Py', title: 'Python' },
                ]} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FOLDER 3: FEATURED PROJECTS — rigid folder with scroll animation */}
      <motion.div {...folderSlideUp} id="featured" className="relative z-30 mb-8">
        <div className="inline-block px-4 py-2 sm:px-8 sm:py-3 bg-[#FF94C7] border-4 border-black border-b-0 rounded-t-2xl font-bold font-paytone text-base sm:text-xl uppercase relative top-[4px] shadow-[inset_2px_2px_0px_rgba(255,255,255,0.4)]">
          <span className="text-black tracking-wide drop-shadow-[1px_1px_0px_rgba(255,255,255,0.5)]">02. FEATURED.zip</span>
        </div>
        <div className="border-4 border-black shadow-brutal-lg bg-[#FFB5D8] min-h-[80vh] p-4 sm:p-8 relative z-10 rounded-b-2xl rounded-tr-2xl pb-16">
          <div className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none" style={{ mixBlendMode: 'overlay' }}></div>
          <div className="relative z-10">
            <div className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {FEATURED_PROJECTS.map((proj, i) => (
                  <motion.div
                    key={proj.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  >
                    <WindowModal 
                      title={`${proj.title.substring(0, 18)}...`} 
                      barColor="bg-[#FFD166]"
                      icon={proj.icon}
                      className="h-full hover:-translate-y-2 transition-transform"
                    >
                      <div className="h-40 bg-gray-100 border-4 border-black mb-4 flex items-center justify-center font-pixel text-gray-500 shadow-[inset_2px_2px_0px_rgba(0,0,0,0.2)] bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:10px_10px] pointer-events-none">
                        [FEATURED_PROJECT]
                      </div>
                      <h3 className="font-paytone text-2xl mb-1 leading-tight mt-2">{proj.title}</h3>
                      <div className="flex gap-2 isolate flex-wrap">
                        {proj.tags.map(t => (
                          <span key={t} className="font-pixel text-xs uppercase px-2 bg-white border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] mb-2 inline-block">{t}</span>
                        ))}
                      </div>
                      <p className="font-comic text-base font-bold line-clamp-3 leading-tight mt-2">{proj.desc}</p>
                    </WindowModal>
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
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
