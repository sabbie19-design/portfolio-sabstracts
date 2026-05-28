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
}

// ─── WEBSITE PROJECTS (assets/projects/) ────────────────────────────────────

const websiteProjects: PortfolioProject[] = [
  {
    id: 'librowse',
    title: 'Librowse',
    description: 'A beautiful, highly interactive digital library platform and community portal for book enthusiasts.',
    longDescription: 'Librowse is a premium side project designed to showcase high-fidelity interfaces and interactive user flows. It features real-time chat modals, beautiful reviews, detailed books lists, administrative monitoring dashboards, and seamless profile/settings controls.',
    role: 'Full Stack Developer & UI Designer',
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
    role: 'Full Stack Developer & UI/UX Designer',
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
    title: 'ARTA CSS',
    description: 'A multi-section responsive website showcasing modern CSS techniques and layout mastery.',
    role: 'Frontend Developer',
    category: 'Website Projects',
    tags: ['HTML', 'CSS', 'Responsive Design'],
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
    description: 'Character card designs for a tabletop horror card game inspired by Dead by Daylight.',
    role: 'Illustrator & Game Designer',
    category: 'Game Design',
    tags: ['Illustrator', 'Game Design', 'Print'],
    images: [
      '/assets/game design assets/Revised Card Prototype.png',
      '/assets/game design assets/Revised Card Prototype (3).png',
      '/assets/game design assets/Revised Card Prototype (6).png',
      '/assets/game design assets/HILLBILLY.png',
      '/assets/game design assets/HUNTRESS.png',
      '/assets/game design assets/NURSE.png',
      '/assets/game design assets/THE-HAG.png',
      '/assets/game design assets/TRAPPER-final.png',
      '/assets/game design assets/WRAITH-final_v2.png',
    ],
    thumbnail: '/assets/game design assets/Revised Card Prototype.png',
    icon: '🎲',
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
    title: 'TableTop Design',
    description: 'Board game visual design and layout for tabletop gaming.',
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
    icon: '🥭',
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

// ─── COMBINED EXPORT ────────────────────────────────────────────────────────

export const ALL_PROJECTS: PortfolioProject[] = [
  ...websiteProjects,
  ...gameDesignProjects,
  ...graphicDesignProjects,
  ...logoDesignProjects,
  ...motionGraphicsProjects,
  ...productDesignProjects,
];

export const CATEGORIES = [
  'All',
  'Website Projects',
  'Game Design',
  'Graphic Design',
  'Logo Design',
  'Motion Graphics',
  'Product Design',
] as const;

export type Category = (typeof CATEGORIES)[number];
