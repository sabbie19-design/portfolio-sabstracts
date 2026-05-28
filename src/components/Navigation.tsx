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
  { path: '/', label: '01_INTRO.exe', color: '#AEE1FF', mutedColor: '#8BBDD4' },
  { path: '/projects', label: '02_PROJECTS.zip', color: '#FFB5D8', mutedColor: '#D4899F' },
  { path: '/contact', label: '03_CONTACT.bat', color: '#D4C4FF', mutedColor: '#A898CC' },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="flex items-end gap-[2px] px-4 sm:px-8 max-w-7xl mx-auto pt-4" aria-label="Main navigation">
      {/* Brand / Logo — sits before the tabs */}
      <div className="hidden sm:flex items-center mr-4 mb-[4px]">
        <span className="font-paytone text-lg tracking-widest star-stroke select-none">SAB</span>
      </div>

      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            className="no-underline"
            aria-current={isActive ? 'page' : undefined}
          >
            <div
              className={`
                unified-tab font-paytone text-[10px] sm:text-xs uppercase tracking-wider
                px-3 py-2 sm:px-5 sm:py-2.5
                border-4 border-black rounded-t-lg
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
                {item.label}
              </span>
            </div>
          </NavLink>
        );
      })}
    </nav>
  );
}
