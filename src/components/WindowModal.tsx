import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface WindowModalProps {
  title: string;
  children: ReactNode;
  className?: string;
  barColor?: string;
  icon?: string;
  onClick?: () => void;
}

export function WindowModal({ title, children, className = '', barColor = 'bg-[#FF94C7]', icon = '🦋', onClick }: WindowModalProps) {
  return (
    <motion.div 
      whileHover={onClick ? { scale: 1.01 } : {}}
      className={`border-4 border-black shadow-brutal bg-white flex flex-col ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <div className={`${barColor} border-b-4 border-black px-2 py-1 flex justify-between items-center shrink-0`}>
        <div className="flex items-center space-x-2 overflow-hidden mr-2">
          <span>{icon}</span>
          <span className="font-pixel text-lg tracking-wider truncate font-bold text-black">{title}</span>
        </div>
        <div className="flex space-x-1 shrink-0">
          <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-black bg-white flex items-center justify-center cursor-default shadow-[inset_1px_1px_0px_rgba(255,255,255,1)]">
             <span className="leading-none text-sm -mt-2">_</span>
          </div>
          <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-black bg-white flex items-center justify-center cursor-default shadow-[inset_1px_1px_0px_rgba(255,255,255,1)]">
             <span className="leading-none text-xs">□</span>
          </div>
          <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-black bg-[#FF5E5E] flex items-center justify-center cursor-default hover:bg-red-600 transition-colors shadow-[inset_1px_1px_0px_rgba(255,255,255,0.4)]">
             <span className="leading-none text-sm font-bold pb-1 text-white">x</span>
          </div>
        </div>
      </div>
      <div className="flex-grow p-4 sm:p-6 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] relative">
        {children}
      </div>
    </motion.div>
  );
}
