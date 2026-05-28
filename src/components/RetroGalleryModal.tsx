import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RetroGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

export function RetroGalleryModal({ isOpen, onClose, images, title }: RetroGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose, goNext, goPrev]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, scale: 0.9 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl max-h-[90vh] flex flex-col"
          >
            {/* Retro Window Chrome */}
            <div className="bg-gradient-to-r from-[#000080] via-[#0000AA] to-[#000080] border-4 border-black border-b-0 px-3 py-2 flex justify-between items-center rounded-t-lg shadow-[inset_1px_1px_0px_rgba(255,255,255,0.3)]">
              <div className="flex items-center gap-2 overflow-hidden">
                {/* Retro folder icon */}
                <span className="text-xl">📂</span>
                <span className="font-pixel text-white text-base sm:text-lg tracking-wider truncate drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                  C:\Gallery\{title.replace(/\s/g, '_')}\
                </span>
              </div>
              <div className="flex gap-1 shrink-0">
                <button
                  className="w-6 h-6 border-2 border-black bg-[#C0C0C0] flex items-center justify-center font-pixel text-sm shadow-[inset_1px_1px_0px_rgba(255,255,255,1),inset_-1px_-1px_0px_rgba(0,0,0,0.4)] active:shadow-[inset_-1px_-1px_0px_rgba(255,255,255,1),inset_1px_1px_0px_rgba(0,0,0,0.4)]"
                  onClick={onClose}
                  aria-label="Close gallery"
                >
                  <span className="font-bold text-black leading-none">✕</span>
                </button>
              </div>
            </div>

            {/* Menu bar */}
            <div className="bg-[#C0C0C0] border-x-4 border-black px-3 py-1 flex gap-4 font-pixel text-sm shadow-[inset_0_-1px_0px_rgba(0,0,0,0.3)]">
              <span className="underline cursor-default">File</span>
              <span className="underline cursor-default">View</span>
              <span className="underline cursor-default">Help</span>
            </div>

            {/* Image viewport */}
            <div className="bg-[#008080] border-x-4 border-black flex-1 min-h-0 flex items-center justify-center relative overflow-hidden p-4">
              {/* Scanline overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
              }}></div>

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`${title} - Image ${currentIndex + 1}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.25 }}
                  className="max-w-full max-h-[55vh] object-contain border-4 border-black shadow-brutal bg-white p-1"
                />
              </AnimatePresence>

              {/* Nav arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#C0C0C0] border-4 border-black font-pixel text-2xl shadow-[inset_2px_2px_0px_rgba(255,255,255,1),inset_-2px_-2px_0px_rgba(0,0,0,0.4)] hover:bg-[#D4D4D4] active:shadow-[inset_-2px_-2px_0px_rgba(255,255,255,1),inset_2px_2px_0px_rgba(0,0,0,0.4)] flex items-center justify-center"
                    aria-label="Previous image"
                  >
                    ◀
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#C0C0C0] border-4 border-black font-pixel text-2xl shadow-[inset_2px_2px_0px_rgba(255,255,255,1),inset_-2px_-2px_0px_rgba(0,0,0,0.4)] hover:bg-[#D4D4D4] active:shadow-[inset_-2px_-2px_0px_rgba(255,255,255,1),inset_2px_2px_0px_rgba(0,0,0,0.4)] flex items-center justify-center"
                    aria-label="Next image"
                  >
                    ▶
                  </button>
                </>
              )}
            </div>

            {/* Status bar / thumbnail strip */}
            <div className="bg-[#C0C0C0] border-4 border-black border-t-2 px-3 py-2 flex items-center justify-between rounded-b-lg">
              <div className="flex gap-2 overflow-x-auto no-scrollbar flex-1 mr-4">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 border-2 overflow-hidden transition-all ${
                      i === currentIndex
                        ? 'border-[#000080] shadow-[inset_2px_2px_0px_rgba(0,0,128,0.5)] scale-110'
                        : 'border-black shadow-[inset_1px_1px_0px_rgba(255,255,255,1),inset_-1px_-1px_0px_rgba(0,0,0,0.3)] hover:border-[#000080]'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <span className="font-pixel text-sm shrink-0 bg-white border-2 border-black px-2 py-1 shadow-[inset_1px_1px_0px_rgba(0,0,0,0.2)]">
                {currentIndex + 1}/{images.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
