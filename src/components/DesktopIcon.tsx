import { motion } from 'motion/react';

interface DesktopIconProps {
  color: string;
  letter: string;
  title: string;
}

export function DesktopIcon({ color, letter, title }: DesktopIconProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.1, rotate: [-2, 2, 0] }}
      className="flex flex-col items-center gap-2 cursor-pointer w-20 sm:w-24 group"
    >
      <div className={`w-16 h-16 sm:w-20 sm:h-20 ${color} border-4 border-black shadow-brutal flex items-center justify-center rounded-xl relative overflow-hidden group-hover:shadow-brutal-lg transition-all`}>
         {/* Little diagonal highlight line typical in some retro tech */}
         <div className="absolute top-0 right-0 w-8 h-8 bg-white/30 skew-x-12 translate-x-4 -translate-y-2"></div>
         <span className="font-paytone text-2xl sm:text-4xl text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">{letter}</span>
      </div>
      <div className="font-pixel bg-white border-2 border-black px-2 mt-1 text-center font-bold tracking-widest shadow-[2px_2px_0_rgba(0,0,0,1)] text-xs sm:text-base">
        {title}
      </div>
    </motion.div>
  )
}
