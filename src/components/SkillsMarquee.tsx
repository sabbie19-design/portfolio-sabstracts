import { useState } from 'react';
import { motion } from 'motion/react';
import { DesktopIcon } from './DesktopIcon';

interface Skill {
  color: string;
  letter: string;
  title: string;
}

interface SkillsMarqueeProps {
  skills: Skill[];
  direction?: 'left' | 'right';
}

export function SkillsMarquee({ skills, direction = 'left' }: SkillsMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  const animationDirection = direction === 'left' ? '-50%' : '0%';
  const animationStart = direction === 'left' ? '0%' : '-50%';

  return (
    <div 
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/60 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/60 to-transparent z-10 pointer-events-none"></div>
      
      <motion.div
        className="flex gap-8 sm:gap-12 w-max"
        animate={{
          x: isPaused ? undefined : [animationStart, animationDirection],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
        style={{ x: isPaused ? undefined : animationStart }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={`${skill.title}-${index}`}
            whileHover={{ scale: 1.2, y: -8 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <DesktopIcon color={skill.color} letter={skill.letter} title={skill.title} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
