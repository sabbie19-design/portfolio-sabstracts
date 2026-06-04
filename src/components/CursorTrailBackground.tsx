import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  type: 'logo' | 'dot';
}

const MIN_DISTANCE = 36;

/** logo.png from /public */
function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <img
      src="/logo.png"
      alt=""
      width={size}
      height={size}
      style={{ display: 'block', imageRendering: 'auto' }}
      draggable={false}
    />
  );
}

/** Butter-yellow circle with dashed border */
function DotMark({ size = 16 }: { size?: number }) {
  const r = size / 2;
  // circumference of a circle radius = r - 1 (stroke inset)
  const cr = r - 2;
  const circ = 2 * Math.PI * cr;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      style={{ display: 'block' }}
    >
      {/* Filled butter-yellow circle */}
      <circle cx={r} cy={r} r={cr - 1} fill="#FFD166" />
      {/* Dashed dark border */}
      <circle
        cx={r} cy={r} r={cr}
        stroke="#1a1a2e"
        strokeWidth="1.5"
        strokeDasharray={`${circ / 6} ${circ / 12}`}
        fill="none"
      />
    </svg>
  );
}

export function CursorTrailBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const idCounter = useRef(0);
  const typeToggle = useRef<0 | 1>(0);

  const removeParticle = useCallback((id: number) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      if (Math.sqrt(dx * dx + dy * dy) < MIN_DISTANCE) return;

      lastPos.current = { x: e.clientX, y: e.clientY };

      // alternate between logo and dot
      const type: 'logo' | 'dot' = typeToggle.current === 0 ? 'logo' : 'dot';
      typeToggle.current = typeToggle.current === 0 ? 1 : 0;

      setParticles((prev) => [
        ...prev,
        { id: idCounter.current++, x: e.clientX, y: e.clientY, type },
      ]);
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
          <motion.div
            key={particle.id}
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{
              scale: particle.type === 'logo' ? 1.15 : 1.4,
              opacity: 0,
              y: -24,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: particle.type === 'logo' ? 1.1 : 0.85, ease: 'easeOut' }}
            onAnimationComplete={() => removeParticle(particle.id)}
            className="fixed pointer-events-none select-none"
            style={{
              left: particle.x,
              top: particle.y,
              translateX: '-50%',
              translateY: '-50%',
            }}
          >
            {particle.type === 'logo' ? (
              <LogoMark size={28} />
            ) : (
              <DotMark size={16} />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
