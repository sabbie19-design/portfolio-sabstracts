import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  icon: string;
}

const ICONS = ['⭐', '✨', '💖', '☕', '🎲'];
const MIN_DISTANCE = 40; // minimum px between spawns

export function CursorTrailBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const idCounter = useRef(0);

  const removeParticle = useCallback((id: number) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MIN_DISTANCE) return;

      lastPos.current = { x: e.clientX, y: e.clientY };

      const newParticle: Particle = {
        id: idCounter.current++,
        x: e.clientX,
        y: e.clientY,
        icon: ICONS[Math.floor(Math.random() * ICONS.length)],
      };

      setParticles((prev) => [...prev, newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[1] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1.5, opacity: 0, y: -20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            onAnimationComplete={() => removeParticle(particle.id)}
            className="fixed pointer-events-none select-none text-2xl"
            style={{
              left: particle.x,
              top: particle.y,
              translateX: '-50%',
              translateY: '-50%',
            }}
          >
            {particle.icon}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
