/**
 * Portfolio Data — Build-time manifest of all assets organized by category.
 * Each project entry includes metadata (description, role, tags) and image paths.
 * 
 * Categories map to the physical folder structure in /assets/:
 *   - "Website Projects"    → assets/projects/
 *   - "Game Design"         → assets/game design assets/
 *   - "Graphic Design"      → assets/graphic design/
 *   - "Logo Design"         → assets/logo design/
 *   - "Motion Graphics"     → assets/motion graphics/
 *   - "Product Design"      → assets/product design/
 */

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  role: string;
  category: string;
  tags: string[];
  year?: string;
  link?: string;
  images: string[];        // relative paths from public root
  thumbnail?: string;      // preferred cover image
  icon: string;            // emoji icon for the card
  videoEmbed?: string;     // YouTube embed URL for motion graphics / prototypes
  flipbookEmbed?: string;  // FlipHTML5 embed URL for flipbooks / rulebooks
}

// ─── WEBSITE PROJECTS (assets/projects/) ────────────────────────────────────

const websiteProjects: PortfolioProject[] = [
  {
    id: 'mathpulse-ai',
    title: 'MathPulse AI',
    description: 'An AI-powered math learning assistant deployed on Hugging Face Spaces, helping students solve and understand math problems interactively.',
    role: 'Developer & AI Engineer',
    category: 'Website Projects',
    tags: ['Python', 'Hugging Face', 'AI', 'Gradio', 'Machine Learning'],
    year: '2025',
    link: 'https://huggingface.co/spaces/Deign86/mathpulse-ai',
    thumbnail: '/assets/projects/mathpulse-ai/thumbnail.png',
    images: [
      '/assets/projects/mathpulse-ai/thumbnail.png',
    ],
    icon: '🧠',
  },
  {
    id: 'librowse',
    title: 'Librowse',
    description: 'A beautiful, highly interactive digital library platform and community portal for book enthusiasts.',
    longDescription: 'Librowse is a premium side project designed to showcase high-fidelity interfaces and interactive user flows. It features real-time chat modals, beautiful reviews, detailed books lists, administrative monitoring dashboards, and seamless profile/settings controls.',
    role: 'Frontend Developer, Project Manager & QA Tester',
    category: 'Website Projects',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Framer Motion'],
    year: '2024',
    link: 'https://github.com/venoxy/librowse',
    thumbnail: '/assets/projects/librowse/thumbnail.webp',
    images: [
      '/assets/projects/librowse/banner.png',
      '/assets/projects/librowse/landing.png',
      '/assets/projects/librowse/Librowse_Home_Page.png',
      '/assets/projects/librowse/Librowse_Books_Page.png',
      '/assets/projects/librowse/Librowse_Chat_Modal.png',
      '/assets/projects/librowse/Librowse_Chats_Page.png',
      '/assets/projects/librowse/Librowse_Daily_Check-in_Modal.png',
      '/assets/projects/librowse/Librowse_Modal.png',
      '/assets/projects/librowse/Librowse_Monitoring_Page.png',
      '/assets/projects/librowse/Librowse_My_Books_Tab.png',
      '/assets/projects/librowse/Librowse_Notification_Modal.png',
      '/assets/projects/librowse/Librowse_Profile_Page.png',
      '/assets/projects/librowse/Librowse_Request_Page.png',
      '/assets/projects/librowse/Librowse_Reviews_Tab.png',
      '/assets/projects/librowse/Librowse_Settings_Tab.png',
      '/assets/projects/librowse/Librowse_Verification_Tab.png',
      '/assets/projects/librowse/Librowse_Violations_Tab.png',
    ],
    icon: '📚',
  },
  {
    id: 'its-our-studio',
    title: "It's Our Studio",
    description: 'A full-featured photography studio platform with admin dashboard, booking system, and gallery management.',
    longDescription: 'A comprehensive studio management platform featuring a public-facing website with gallery, packages, testimonials, and contact sections, plus a full admin dashboard with analytics, bookings, CMS, feedback, and reports management.',
    role: 'Frontend Developer & UI/UX Designer',
    category: 'Website Projects',
    tags: ['React', 'Tailwind', 'Node.js', 'Dashboard'],
    year: '2024',
    thumbnail: '/assets/projects/ItsOurStudio/banner.png',
    images: [
      '/assets/projects/ItsOurStudio/banner.png',
      '/assets/projects/ItsOurStudio/landing.gif',
      '/assets/projects/ItsOurStudio/About Section.png',
      '/assets/projects/ItsOurStudio/IMage Carousel Section.png',
      '/assets/projects/ItsOurStudio/Package Section.png',
      '/assets/projects/ItsOurStudio/BackDrop Preview Section.png',
      '/assets/projects/ItsOurStudio/Gallery Page.png',
      '/assets/projects/ItsOurStudio/Services Page.png',
      '/assets/projects/ItsOurStudio/Testimonial Section.png',
      '/assets/projects/ItsOurStudio/Contact Section.png',
      '/assets/projects/ItsOurStudio/Analytics - Admin Dashboard.png',
      '/assets/projects/ItsOurStudio/Bookings - Admin Dashboard.png',
      '/assets/projects/ItsOurStudio/Calendar - Admin Dashboard.png',
      '/assets/projects/ItsOurStudio/CMS - Admin Dashboard.png',
      '/assets/projects/ItsOurStudio/Feedback Management - Admin Dashboard.png',
      '/assets/projects/ItsOurStudio/Gallery Manager - Admin Dashboard.png',
      '/assets/projects/ItsOurStudio/RBMS - Admin Dashboard.png',
      '/assets/projects/ItsOurStudio/Reports Management - Admin Dashboard.png',
    ],
    icon: '📸',
  },
  {
    id: 'arta-css',
    title: 'ARTA',
    description: 'A multi-section responsive mobile application showcasing modern Flutter UI techniques and layout mastery.',
    role: 'Frontend Developer',
    category: 'Website Projects',
    tags: ['Flutter', 'Dart', 'Responsive Design'],
    thumbnail: '/assets/projects/arta css/LANDING PAGE (USER-SIDE).png',
    images: [
      '/assets/projects/arta css/LANDING PAGE (USER-SIDE).png',
      '/assets/projects/arta css/SECTION 1.png',
      '/assets/projects/arta css/SECTION 2.1.png',
      '/assets/projects/arta css/SECTION 2.2.png',
      '/assets/projects/arta css/SECTION 2.3.png',
      '/assets/projects/arta css/SECTION 3.1.png',
      '/assets/projects/arta css/SECTION 3.2.png',
      '/assets/projects/arta css/SECTION 3.3.png',
      '/assets/projects/arta css/SECTION 3.4.png',
      '/assets/projects/arta css/SECTION 3.5.png',
      '/assets/projects/arta css/SECTION 4.png',
      '/assets/projects/arta css/SECTION 5.png',
    ],
    icon: '🎨',
  },
];

// ─── GAME DESIGN (assets/game design assets/) ───────────────────────────────

const gameDesignProjects: PortfolioProject[] = [
  {
    id: 'cyndikato-cards',
    title: 'Cyndikato Card Game',
    description: 'Card prototype designs for a tabletop politics card game.',
    role: 'Illustrator & Game Designer',
    category: 'Game Design',
    tags: ['Illustrator', 'Game Design', 'Print'],
    images: [
      '/assets/game design assets/Revised Card Prototype.png',
      '/assets/game design assets/Revised Card Prototype (3).png',
      '/assets/game design assets/Revised Card Prototype (6).png',
    ],
    thumbnail: '/assets/game design assets/Revised Card Prototype.png',
    icon: '🎲',
  },
  {
    id: 'character-hillbilly',
    title: 'Hillbilly',
    description: 'Character illustration for the Entity Realm TTRPG showcase.',
    role: 'Character Illustrator',
    category: 'Game Design',
    tags: ['Illustrator', 'Character Design', 'TTRPG'],
    images: ['/assets/game design assets/HILLBILLY.png'],
    icon: '🪓',
  },
  {
    id: 'character-huntress',
    title: 'Huntress',
    description: 'Character illustration for the Entity Realm TTRPG showcase.',
    role: 'Character Illustrator',
    category: 'Game Design',
    tags: ['Illustrator', 'Character Design', 'TTRPG'],
    images: ['/assets/game design assets/HUNTRESS.png'],
    icon: '🏹',
  },
  {
    id: 'character-nurse',
    title: 'Nurse',
    description: 'Character illustration for the Entity Realm TTRPG showcase.',
    role: 'Character Illustrator',
    category: 'Game Design',
    tags: ['Illustrator', 'Character Design', 'TTRPG'],
    images: ['/assets/game design assets/NURSE.png'],
    icon: '💉',
  },
  {
    id: 'character-the-hag',
    title: 'The Hag',
    description: 'Character illustration for the Entity Realm TTRPG showcase.',
    role: 'Character Illustrator',
    category: 'Game Design',
    tags: ['Illustrator', 'Character Design', 'TTRPG'],
    images: ['/assets/game design assets/THE-HAG.png'],
    icon: '🧙',
  },
  {
    id: 'character-trapper',
    title: 'Trapper',
    description: 'Character illustration for the Entity Realm TTRPG showcase.',
    role: 'Character Illustrator',
    category: 'Game Design',
    tags: ['Illustrator', 'Character Design', 'TTRPG'],
    images: ['/assets/game design assets/TRAPPER-final.png'],
    icon: '🪤',
  },
  {
    id: 'character-wraith',
    title: 'Wraith',
    description: 'Character illustration for the Entity Realm TTRPG showcase.',
    role: 'Character Illustrator',
    category: 'Game Design',
    tags: ['Illustrator', 'Character Design', 'TTRPG'],
    images: ['/assets/game design assets/WRAITH-final_v2.png'],
    icon: '👻',
  },
  {
    id: 'flipbook-ttrpg',
    title: 'TTRPG Flipbook',
    description: 'A tabletop role-playing game book designed with immersive lore and gameplay mechanics.',
    role: 'Game Designer & Layout Artist',
    category: 'Game Design',
    tags: ['TTRPG', 'Layout Design', 'Game Design'],
    images: [],
    flipbookEmbed: 'https://online.fliphtml5.com/czivl/qipi/',
    link: 'https://online.fliphtml5.com/czivl/qipi/',
    icon: '📖',
  },
  {
    id: 'cyndikato-rulebook',
    title: 'Cyndikato Rulebook',
    description: 'Complete rulebook for the Cyndikato tabletop card game with gameplay instructions and lore.',
    role: 'Game Designer & Layout Artist',
    category: 'Game Design',
    tags: ['Rulebook', 'Layout Design', 'Game Design'],
    images: [],
    flipbookEmbed: 'https://online.fliphtml5.com/czivl/zgcp/',
    link: 'https://online.fliphtml5.com/czivl/zgcp/',
    icon: '📕',
  },
];

// ─── GRAPHIC DESIGN (assets/graphic design/) ────────────────────────────────

const graphicDesignProjects: PortfolioProject[] = [
  {
    id: 'coffee-poster',
    title: 'Coffee Poster',
    description: 'A bold typographic poster design for a specialty coffee brand.',
    role: 'Graphic Designer',
    category: 'Graphic Design',
    tags: ['Photoshop', 'Typography', 'Print'],
    images: ['/assets/graphic design/CoffeePoster.jpg'],
    icon: '☕',
  },
  {
    id: 'movie-poster',
    title: 'Movie Poster',
    description: 'Cinematic poster design with dramatic lighting and composition.',
    role: 'Graphic Designer',
    category: 'Graphic Design',
    tags: ['Photoshop', 'Photo Manipulation'],
    images: ['/assets/graphic design/movie-poster.jpg'],
    icon: '🎬',
  },
  {
    id: 'tabletop-design',
    title: 'Cyndikato Game Banner Design',
    description: 'Board game banner design and layout for tabletop gaming.',
    role: 'Graphic Designer & Illustrator',
    category: 'Graphic Design',
    tags: ['Illustrator', 'Layout Design'],
    images: ['/assets/graphic design/TableTop --ed.png'],
    icon: '🎯',
  },
  {
    id: 'tanim-design',
    title: 'Tanim',
    description: 'Creative editorial design with expressive typography.',
    role: 'Graphic Designer',
    category: 'Graphic Design',
    tags: ['Photoshop', 'Editorial'],
    images: ['/assets/graphic design/tanim.jpg'],
    icon: '✏️',
  },
  {
    id: 'tundra-design',
    title: 'Tundra',
    description: 'Environmental-themed graphic design with cold-tone aesthetics.',
    role: 'Graphic Designer',
    category: 'Graphic Design',
    tags: ['Photoshop', 'Illustration'],
    images: ['/assets/graphic design/tundra.png'],
    icon: '❄️',
  },
  {
    id: 'designs-collection',
    title: 'Design Collection',
    description: 'A curated collection of miscellaneous graphic design works.',
    role: 'Graphic Designer',
    category: 'Graphic Design',
    tags: ['Photoshop', 'Illustrator'],
    images: [
      '/assets/graphic design/designs1.jpg',
      '/assets/graphic design/new (1).png',
    ],
    icon: '🖼️',
  },
];

// ─── LOGO DESIGN (assets/logo design/) ──────────────────────────────────────

const logoDesignProjects: PortfolioProject[] = [
  {
    id: 'cyndikato-logo',
    title: 'Cyndikato Logo',
    description: 'Brand identity logo design for Cyndikato gaming studio.',
    role: 'Brand Designer',
    category: 'Logo Design',
    tags: ['Illustrator', 'Branding'],
    images: ['/assets/logo design/cyndikato_logo_logo_1.png'],
    icon: '🎮',
  },
  {
    id: 'pk-studio-logo',
    title: 'PK Studio Logo',
    description: 'Clean, modern logo design for PK Studio creative agency.',
    role: 'Brand Designer',
    category: 'Logo Design',
    tags: ['Illustrator', 'Branding'],
    images: ['/assets/logo design/pk_studio_logo_1.png'],
    icon: '🏢',
  },
  {
    id: 'librowse-logo',
    title: 'Librowse Logo',
    description: 'Friendly, approachable logo for the Librowse digital library platform.',
    role: 'Brand Designer',
    category: 'Logo Design',
    tags: ['Illustrator', 'Branding', 'UI'],
    images: ['/assets/logo design/v2 logo librowse.png'],
    icon: '📖',
  },
];

// ─── MOTION GRAPHICS (assets/motion graphics/) ──────────────────────────────

const motionGraphicsProjects: PortfolioProject[] = [
  {
    id: 'boy-animation',
    title: 'Boy Animation',
    description: 'Character animation featuring expressive movement and fluid motion design.',
    role: 'Motion Designer & Animator',
    category: 'Motion Graphics',
    tags: ['After Effects', 'Animation', 'Character Design'],
    images: [],
    videoEmbed: 'https://www.youtube.com/embed/iQ1K4wyLM5U?autoplay=1&mute=1&loop=1&playlist=iQ1K4wyLM5U&controls=0&showinfo=0&rel=0&modestbranding=1',
    icon: '🧑',
  },
  {
    id: 'text-animation',
    title: 'Text Animation',
    description: 'Kinetic typography and text-based motion graphics with dynamic transitions.',
    role: 'Motion Designer',
    category: 'Motion Graphics',
    tags: ['After Effects', 'Typography', 'Motion'],
    images: [],
    videoEmbed: 'https://www.youtube.com/embed/ZVOHSDCpDzk?autoplay=1&mute=1&loop=1&playlist=ZVOHSDCpDzk&controls=0&showinfo=0&rel=0&modestbranding=1',
    icon: '✍️',
  },
  {
    id: 'girl-animation',
    title: 'Girl Animation',
    description: 'Stylized character animation with smooth keyframe transitions.',
    role: 'Motion Designer & Animator',
    category: 'Motion Graphics',
    tags: ['After Effects', 'Animation', 'Character Design'],
    images: [],
    videoEmbed: 'https://www.youtube.com/embed/Tn-KmFhRdao?autoplay=1&mute=1&loop=1&playlist=Tn-KmFhRdao&controls=0&showinfo=0&rel=0&modestbranding=1',
    icon: '👧',
  },
  {
    id: 'solar-system-animation',
    title: 'Solar System Animation',
    description: 'Educational motion graphics depicting planetary orbits and celestial mechanics.',
    role: 'Motion Designer & Animator',
    category: 'Motion Graphics',
    tags: ['After Effects', 'Animation', 'Educational'],
    images: [],
    videoEmbed: 'https://www.youtube.com/embed/hstRn0ovLtQ?autoplay=1&mute=1&loop=1&playlist=hstRn0ovLtQ&controls=0&showinfo=0&rel=0&modestbranding=1',
    icon: '🪐',
  },
  {
    id: 'trace-of-mango',
    title: 'Trace of Mango',
    description: 'Frame-by-frame animation storyboard and motion graphics sequence.',
    role: 'Motion Designer & Animator',
    category: 'Motion Graphics',
    tags: ['After Effects', 'Illustration', 'Animation'],
    images: [
      '/assets/motion graphics/trace of mango/3.png',
      '/assets/motion graphics/trace of mango/4.png',
      '/assets/motion graphics/trace of mango/5.png',
      '/assets/motion graphics/trace of mango/6.png',
      '/assets/motion graphics/trace of mango/7(1).png',
      '/assets/motion graphics/trace of mango/8(1).png',
      '/assets/motion graphics/trace of mango/10(1).png',
      '/assets/motion graphics/trace of mango/F8(1).png',
      '/assets/motion graphics/trace of mango/nai_3.png',
      '/assets/motion graphics/trace of mango/dawg_2520copy-bwDzI.png',
    ],
    thumbnail: '/assets/motion graphics/trace of mango/3.png',
    videoEmbed: 'https://www.youtube.com/embed/OOzlys6PXHY?autoplay=1&mute=1&loop=1&playlist=OOzlys6PXHY&controls=0&showinfo=0&rel=0&modestbranding=1',
    icon: '🥭',
  },
  {
    id: 'taskly-prototype',
    title: 'Taskly Prototype',
    description: 'Interactive UI/UX prototype walkthrough for a task management application.',
    role: 'UI/UX Designer & Prototyper',
    category: 'Prototyping',
    tags: ['Figma', 'Prototyping', 'UI/UX'],
    images: [],
    videoEmbed: 'https://www.youtube.com/embed/oRhv4HNa5Hc?autoplay=1&mute=1&loop=1&playlist=oRhv4HNa5Hc&controls=0&showinfo=0&rel=0&modestbranding=1',
    icon: '📋',
  },
  {
    id: 'kiddie-coin',
    title: 'Kiddie Coin',
    description: 'Animated prototype for a kid-friendly financial literacy app.',
    role: 'UI/UX Designer & Prototyper',
    category: 'Prototyping',
    tags: ['Figma', 'Prototyping', 'UI/UX'],
    images: [],
    videoEmbed: 'https://www.youtube.com/embed/6ZDEWDWmg6I?autoplay=1&mute=1&loop=1&playlist=6ZDEWDWmg6I&controls=0&showinfo=0&rel=0&modestbranding=1',
    icon: '🪙',
  },
];

// ─── PRODUCT DESIGN (assets/product design/) ────────────────────────────────

const productDesignProjects: PortfolioProject[] = [
  {
    id: 'product-mockup',
    title: 'Product Packaging',
    description: 'Complete product packaging and mockup design for consumer goods.',
    role: 'Product Designer',
    category: 'Product Design',
    tags: ['Photoshop', 'Packaging', 'Mockup'],
    images: [
      '/assets/product design/mockup-package-and-product.jpg',
      '/assets/product design/Product-Poster.jpg',
    ],
    thumbnail: '/assets/product design/mockup-package-and-product.jpg',
    icon: '📦',
  },
];

// ─── ANDROID APPLICATION (assets/android application/) ──────────────────────

const androidProjects: PortfolioProject[] = [
  {
    id: 'android-app',
    title: 'Android Application',
    description: 'Mobile application UI screens designed and developed for Android platform.',
    role: 'Frontend Developer',
    category: 'Android App',
    tags: ['Android', 'Mobile', 'UI/UX'],
    images: [
      '/assets/android application/704670991_980554504804597_2818027696428540658_n.jpg',
      '/assets/android application/704613836_1003996308640554_3638036877747795353_n.jpg',
      '/assets/android application/704652180_1355812939700458_8330021027224282269_n.jpg',
      '/assets/android application/708047921_1298382698580847_2042323893952759863_n.jpg',
      '/assets/android application/708312053_2037191230340803_8044312988572673163_n.jpg',
    ],
    thumbnail: '/assets/android application/704670991_980554504804597_2818027696428540658_n.jpg',
    icon: '📱',
  },
];

// ─── COMBINED EXPORT ────────────────────────────────────────────────────────

export const ALL_PROJECTS: PortfolioProject[] = [
  ...websiteProjects,
  ...gameDesignProjects,
  ...graphicDesignProjects,
  ...logoDesignProjects,
  ...motionGraphicsProjects,
  ...androidProjects,
  ...productDesignProjects,
];

export const CATEGORIES = [
  'All',
  'Website Projects',
  'Game Design',
  'Graphic Design',
  'Logo Design',
  'Motion Graphics',
  'Prototyping',
  'Android App',
  'Product Design',
] as const;

export type Category = (typeof CATEGORIES)[number];
