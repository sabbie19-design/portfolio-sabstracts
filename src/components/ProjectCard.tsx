import { useState } from 'react';
import { motion } from 'motion/react';
import { WindowModal } from './WindowModal';
import { RetroGalleryModal } from './RetroGalleryModal';
import type { PortfolioProject } from '../data/portfolioData';

interface ProjectCardProps {
  project: PortfolioProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);

  const isGallery = project.images.length > 1;
  const hasVideo = !!project.videoEmbed;
  const hasFlipbook = !!project.flipbookEmbed;
  const coverImage = project.thumbnail || project.images[0];

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <WindowModal
          title={`${project.title.substring(0, 18)}${project.title.length > 18 ? '...' : ''}`}
          barColor="bg-[#FFD166]"
          icon={project.icon}
          className="h-full hover:-translate-y-2 transition-transform"
        >
          {/* Image/Video/Flipbook Container */}
          <div
            className="relative h-44 border-4 border-black mb-4 overflow-hidden shadow-[inset_2px_2px_0px_rgba(0,0,0,0.2)] cursor-pointer group"
            onClick={() => !hasVideo && !hasFlipbook && (isGallery ? setGalleryOpen(true) : setDetailOpen(true))}
          >
            {hasVideo ? (
              <iframe
                src={project.videoEmbed}
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : hasFlipbook ? (
              <iframe
                src={project.flipbookEmbed}
                title={project.title}
                className="w-full h-full border-0"
                allowFullScreen
              />
            ) : coverImage ? (
              <>
                <img
                  src={coverImage}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform group-hover:scale-105"
                  loading="lazy"
                />

                {/* Retro Folder Icon Overlay for galleries */}
                {isGallery && (
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-[#C0C0C0] border-2 border-black px-2 py-1 shadow-[inset_1px_1px_0px_rgba(255,255,255,1),inset_-1px_-1px_0px_rgba(0,0,0,0.4)] group-hover:bg-[#FFD166] transition-colors">
                    {/* Pixel folder icon SVG */}
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="shrink-0">
                      <rect x="0" y="3" width="20" height="13" fill="#FFD700" stroke="black" strokeWidth="1.5"/>
                      <rect x="0" y="1" width="8" height="4" fill="#FFD700" stroke="black" strokeWidth="1.5"/>
                      <rect x="1" y="5" width="18" height="10" fill="#FFEC8B" stroke="black" strokeWidth="0.5"/>
                      <line x1="2" y1="7" x2="18" y2="7" stroke="#DAA520" strokeWidth="0.5"/>
                    </svg>
                    <span className="font-pixel text-xs text-black leading-none">{project.images.length}</span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="font-pixel text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-black/60 px-3 py-1 border-2 border-white/50">
                    {isGallery ? '📂 OPEN GALLERY' : '🔍 VIEW'}
                  </span>
                </div>
              </>
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center font-pixel text-gray-500 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:10px_10px]">
                [NO PREVIEW]
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="font-paytone text-xl sm:text-2xl mb-1 truncate leading-tight">{project.title}</h3>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap mb-2">
            {project.tags.slice(0, 3).map(t => (
              <span key={t} className="font-pixel text-xs uppercase px-2 bg-white border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] inline-block">{t}</span>
            ))}
            {project.tags.length > 3 && (
              <span className="font-pixel text-xs uppercase px-2 bg-gray-100 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] inline-block">+{project.tags.length - 3}</span>
            )}
          </div>

          {/* Description */}
          <p className="font-comic text-base font-bold line-clamp-2 leading-tight text-gray-800">{project.description}</p>

          {/* Role badge — always visible */}
          <div className="mt-3">
            <span className="font-pixel text-xs uppercase px-2 py-1 bg-[#D4C4FF] border-2 border-black shadow-[1px_1px_0_0_rgba(0,0,0,1)] inline-block">
              ⚡ {project.role}
            </span>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-3 border-t-2 border-dashed border-black flex justify-between items-center">
            <button
              onClick={() => setDetailOpen(true)}
              className="font-pixel underline cursor-pointer font-bold text-base hover:text-pink-500 bg-transparent border-none"
            >
              Details...
            </button>
            <div className="flex gap-2">
              {isGallery && (
                <button
                  onClick={() => setGalleryOpen(true)}
                  className="bg-[#FFD166] border-2 border-black px-3 py-1 font-pixel text-sm uppercase shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-1 active:bg-[#FFEC8B]"
                >
                  📂 Gallery
                </button>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#AEE1FF] border-2 border-black px-3 py-1 font-pixel text-sm uppercase shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-1 active:bg-[#89CFF0] no-underline text-black"
                >
                  Live ↗
                </a>
              )}
            </div>
          </div>
        </WindowModal>
      </motion.div>

      {/* Gallery Modal */}
      <RetroGalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={project.images}
        title={project.title}
      />

      {/* Detail Modal */}
      {detailOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
          onClick={() => setDetailOpen(false)}
        >
          <motion.div
            initial={{ y: 50, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 20, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl my-auto"
          >
            <WindowModal title={`${project.title}.exe`} barColor="bg-[#8CE0D1]" icon="📁">
              <div className="flex flex-col gap-5 p-2 sm:p-6">
                {/* Cover image, video, or flipbook */}
                {hasVideo ? (
                  <div className="w-full aspect-video border-4 border-black overflow-hidden shadow-brutal">
                    <iframe
                      src={project.videoEmbed}
                      title={project.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : hasFlipbook ? (
                  <div className="w-full border-4 border-black overflow-hidden shadow-brutal" style={{ position: 'relative', paddingTop: 'max(60%,324px)' }}>
                    <iframe
                      src={project.flipbookEmbed}
                      title={project.title}
                      className="absolute inset-0 w-full h-full border-0"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div
                    className="w-full h-48 sm:h-72 border-4 border-black overflow-hidden shadow-brutal relative cursor-pointer"
                    onClick={() => { setDetailOpen(false); setGalleryOpen(true); }}
                  >
                    <img src={coverImage} alt={project.title} className="w-full h-full object-contain" />
                    {isGallery && (
                      <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-[#C0C0C0] border-2 border-black px-3 py-1 shadow-[inset_1px_1px_0px_rgba(255,255,255,1)]">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                          <rect x="0" y="3" width="20" height="13" fill="#FFD700" stroke="black" strokeWidth="1.5"/>
                          <rect x="0" y="1" width="8" height="4" fill="#FFD700" stroke="black" strokeWidth="1.5"/>
                          <rect x="1" y="5" width="18" height="10" fill="#FFEC8B" stroke="black" strokeWidth="0.5"/>
                        </svg>
                        <span className="font-pixel text-sm">{project.images.length} images — click to browse</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Title & Year */}
                <div>
                  <h2 className="font-paytone text-3xl sm:text-5xl uppercase tracking-wide mb-2 text-black">{project.title}</h2>
                  {project.year && (
                    <span className="font-pixel text-base bg-[#AEE1FF] px-3 py-1 border-2 border-black inline-block shadow-[2px_2px_0_0_rgba(0,0,0,1)] uppercase tracking-widest">
                      📅 {project.year}
                    </span>
                  )}
                </div>

                {/* Role */}
                <div className="bg-[#FFD166] px-4 py-2 border-4 border-black inline-block shadow-[2px_2px_0_0_rgba(0,0,0,1)] self-start">
                  <span className="font-pixel text-lg font-bold uppercase tracking-widest">MY ROLE: {project.role}</span>
                </div>

                {/* Description */}
                <div className="border-l-4 border-black pl-4 py-2 bg-white/50">
                  <p className="font-comic font-bold text-xl sm:text-2xl leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex gap-3 flex-wrap">
                  {project.tags.map(t => (
                    <span key={t} className="px-3 py-1 bg-white border-4 border-black font-pixel shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-base uppercase tracking-wider">{t}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t-4 border-black border-dashed flex justify-between items-center flex-wrap gap-3">
                  <div className="flex gap-3">
                    {isGallery && (
                      <button
                        onClick={() => { setDetailOpen(false); setGalleryOpen(true); }}
                        className="px-5 py-2 bg-[#FFD166] border-4 border-black font-pixel shadow-brutal hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-lg uppercase tracking-widest"
                      >
                        📂 Open Gallery
                      </button>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-[#AEE1FF] border-4 border-black font-pixel shadow-brutal hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-lg uppercase tracking-widest no-underline text-black"
                      >
                        View Live ↗
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setDetailOpen(false)}
                    className="px-6 py-2 bg-[#FF5E5E] text-white border-4 border-black font-pixel shadow-brutal hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-lg uppercase tracking-widest"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </WindowModal>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
