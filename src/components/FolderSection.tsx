import { ReactNode } from 'react';

interface FolderSectionProps {
  id: string;
  title: string;
  color: string;
  tabColor: string;
  zIndex: string;
  stickyTop: string;
  children: ReactNode;
}

export function FolderSection({ id, title, color, tabColor, zIndex, stickyTop, children }: FolderSectionProps) {
  return (
    <div id={id} className={`relative ${zIndex} mb-8`}>
      <div className={`sticky ${stickyTop} pt-4 z-20`}>
        {/* Tab wrapper to hide bottom border overlap */}
        <div className={`inline-block px-4 py-2 sm:px-8 sm:py-3 ${tabColor} border-4 border-black border-b-0 rounded-t-2xl font-bold font-paytone text-base sm:text-xl uppercase relative top-[4px] shadow-[inset_2px_2px_0px_rgba(255,255,255,0.4)]`}>
          <span className="text-black tracking-wide drop-shadow-[1px_1px_0px_rgba(255,255,255,0.5)]">{title}</span>
        </div>
      </div>
      <div className={`border-4 border-black shadow-brutal-lg ${color} min-h-[80vh] p-4 sm:p-8 relative z-10 rounded-b-2xl rounded-tr-2xl pb-16`}>
         {/* Inner texture / aesthetic highlight */}
         <div className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none" style={{ mixBlendMode: 'overlay' }}></div>
         <div className="relative z-10">
           {children}
         </div>
      </div>
    </div>
  )
}
