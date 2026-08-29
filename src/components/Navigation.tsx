import { NavLink, useLocation } from 'react-router-dom';

/**
 * Navigation — Unified Folder Tab System
 * 
 * The tabs sit directly on top of the main content container.
 * The active tab shares the same background color as the page content below,
 * with its bottom border removed so it seamlessly merges — like a real manila folder.
 * Inactive tabs are muted and sit slightly lower.
 */

const NAV_ITEMS = [
  { path: '/', label: '01_INTRO.exe', shortLabel: '01_INTRO', color: '#AEE1FF', mutedColor: '#8BBDD4' },
  { path: '/projects', label: '02_PROJECTS.zip', shortLabel: '02_PROJECTS', color: '#FFB5D8', mutedColor: '#D4899F' },
  { path: '/contact', label: '03_CONTACT.bat', shortLabel: '03_CONTACT', color: '#D4C4FF', mutedColor: '#A898CC' },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="flex items-end gap-[2px] sm:gap-[4px] px-2 sm:px-8 max-w-7xl mx-auto pt-4 overflow-x-auto no-scrollbar sm:overflow-x-visible" aria-label="Main navigation">
      {/* Brand / Logo — Y2K styled logo.png */}
      <div className="hidden sm:flex items-center mr-4 mb-[4px] select-none">
        <div className="relative group">
          {/* Glow halo behind logo */}
          <div
            className="absolute inset-0 rounded-lg opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, #FFB5D8, #D4C4FF, #AEE1FF)',
            }}
          />
          {/* Pixel border frame */}
          <div
            className="relative border-[3px] border-black rounded-lg overflow-hidden"
            style={{
              boxShadow: '3px 3px 0px #000, inset 0 0 0 1px rgba(255,255,255,0.3)',
            }}
          >
            <img
              src="/logo.png"
              alt="Sabstracts"
              className="w-10 h-10 object-contain block"
              style={{ imageRendering: 'pixelated' }}
            />
            {/* Chrome sheen sweep on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
          </div>

          {/* Y2K corner sparkle */}
          <span
            className="absolute -top-2 -right-2 text-[10px] leading-none pointer-events-none animate-pulse"
            aria-hidden="true"
            style={{ color: '#FFD166', textShadow: '0 0 4px #FFD166' }}
          >
            ✦
          </span>
        </div>
      </div>

      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            className="no-underline shrink-0 sm:shrink"
            aria-current={isActive ? 'page' : undefined}
          >
            <div
              className={`
                unified-tab font-paytone text-[9px] min-[380px]:text-[10px] sm:text-xs uppercase tracking-wider
                px-2 py-1.5 min-[380px]:px-2.5 min-[380px]:py-2 sm:px-5 sm:py-2.5
                border-2 sm:border-4 border-black rounded-t-lg
                transition-all duration-150 select-none
                ${isActive
                  ? 'unified-tab--active border-b-0 relative z-20 translate-y-[4px]'
                  : 'unified-tab--inactive translate-y-[8px] hover:translate-y-[6px]'
                }
              `}
              style={{
                backgroundColor: isActive ? item.color : item.mutedColor,
                boxShadow: isActive
                  ? 'inset 2px 2px 0px rgba(255,255,255,0.5), inset -1px -1px 0px rgba(0,0,0,0.1)'
                  : 'inset 1px 1px 0px rgba(255,255,255,0.3), inset -1px -1px 0px rgba(0,0,0,0.2), 0 2px 0 rgba(0,0,0,0.3)',
              }}
            >
              <span className={`${isActive ? 'text-black' : 'text-black/70'} whitespace-nowrap`}>
                <span className="hidden min-[480px]:inline">{item.label}</span>
                <span className="min-[480px]:hidden">{item.shortLabel}</span>
              </span>
            </div>
          </NavLink>
        );
      })}

      {/* CV Button — highlighted to attract employers */}
      <a
        href="https://flowcv.com/resume/uh1q69h4rbws"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline ml-auto group shrink-0"
      >
        <div
          className="
            unified-tab font-paytone text-[9px] min-[380px]:text-[10px] sm:text-xs uppercase tracking-wider
            px-2 py-1.5 min-[380px]:px-2.5 min-[380px]:py-2 sm:px-5 sm:py-2.5
            border-2 sm:border-4 border-black rounded-t-lg
            transition-all duration-150 select-none
            translate-y-[8px] group-hover:translate-y-[4px]
            relative overflow-hidden
          "
          style={{
            backgroundColor: '#FF5E5E',
            boxShadow: 'inset 1px 1px 0px rgba(255,255,255,0.4), 2px 2px 0px rgba(0,0,0,1)',
          }}
        >
          {/* Shimmer sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 pointer-events-none" />
          <span className="relative z-10 text-white whitespace-nowrap font-bold drop-shadow-sm">
            <span className="hidden min-[480px]:inline">📄 VIEW CV ✦</span>
            <span className="min-[480px]:hidden">📄 CV ✦</span>
          </span>
        </div>
      </a>
    </nav>
  );
}
