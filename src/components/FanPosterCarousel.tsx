"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import gsap from "gsap";

export interface PosterItem {
  id: string;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  dimensions?: string;
  summary?: string;
  artist?: string;
}

export interface FanPosterCarouselProps {
  posters?: PosterItem[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  onPosterClick?: (poster: PosterItem) => void;
}

// 12 High-Resolution Default A4 Studio Posters from Sukunaru Studio Portfolio
export const DEFAULT_POSTERS: PosterItem[] = [
  {
    id: "SKN-01",
    title: "Matthijs de Ligt #04: Man United Tribute",
    category: "Sports Editorial Poster",
    year: "2025",
    imageUrl: "assets/works/deligt-manutd.jpg",
    dimensions: "A4 • 300 DPI (210 x 297 mm)",
    artist: "Alwi Abdul Aziz",
    summary: "Komposisi poster olahraga bergaya Swiss editorial dengan blok warna kontras tinggi, potongan gestur subjek, dan kolofon tipografi naratif."
  },
  {
    id: "SKN-02",
    title: "Lamborghini Aventador SVJ Roadster",
    category: "Automotive Print Poster",
    year: "2025",
    imageUrl: "assets/works/lamborghini-svj.jpg",
    dimensions: "A4 • 300 DPI (210 x 297 mm)",
    artist: "Alwi Abdul Aziz",
    summary: "Desain poster otomotif dengan pemenggalan panel triptych vertikal di atas kanvas kuning Giallo Orion untuk menonjolkan siluet V12."
  },
  {
    id: "SKN-03",
    title: "Lamborghini Huracán EVO: Aerodinamica",
    category: "Automotive Print Poster",
    year: "2025",
    imageUrl: "assets/works/huracan-evo.jpg",
    dimensions: "A4 • 300 DPI (210 x 297 mm)",
    artist: "Alwi Abdul Aziz",
    summary: "Eksplorasi poster teknis dengan tipografi grid asimetris, cetak blok warna biru azzurro, dan diagram spesifikasi aerodinamika sirkuit."
  },
  {
    id: "SKN-04",
    title: "Always Believe: Vintage Halftone Textures",
    category: "Archival Typography",
    year: "2025",
    imageUrl: "assets/works/always-believe-halftone.jpg",
    dimensions: "A4 • 300 DPI (210 x 297 mm)",
    artist: "Alwi Abdul Aziz",
    summary: "Poster tipografi editorial bertekstur risograph kasar dengan pemisahan tinta cetak manual dan titik raster halftone retro."
  },
  {
    id: "SKN-05",
    title: "Embrace The Light: Abstract Editorial",
    category: "Art Direction Print",
    year: "2025",
    imageUrl: "assets/works/embrace-the-light.jpg",
    dimensions: "A4 • 300 DPI (210 x 297 mm)",
    artist: "Alwi Abdul Aziz",
    summary: "Eksperimen pencahayaan chiaroscuro dengan tipografi serif klasik yang diperbesar dan aksen geometric framing minimalis."
  },
  {
    id: "SKN-06",
    title: "Find Your Focus: Studio Series",
    category: "Minimalist Motivation",
    year: "2025",
    imageUrl: "assets/works/find-your-focus.jpg",
    dimensions: "A4 • 300 DPI (210 x 297 mm)",
    artist: "Alwi Abdul Aziz",
    summary: "Kombinasi ruang negatif luas khas Bauhaus dengan layout monospasi teknis dan aksen warna warm amber studio."
  },
  {
    id: "SKN-07",
    title: "Clarity & Vision: Modernist Grid",
    category: "Swiss Modernism",
    year: "2025",
    imageUrl: "assets/works/clarity-focus.jpg",
    dimensions: "A4 • 300 DPI (210 x 297 mm)",
    artist: "Alwi Abdul Aziz",
    summary: "Penerapan grid modular Zurich 12 kolom dengan penekanan hirarki tipografi tegas dan perlakuan gambar monokromatik."
  },
  {
    id: "SKN-08",
    title: "Presence & Stillness: Zen Editorial",
    category: "Fine Art Photography",
    year: "2025",
    imageUrl: "assets/works/presence-stillness.jpg",
    dimensions: "A4 • 300 DPI (210 x 297 mm)",
    artist: "Alwi Abdul Aziz",
    summary: "Eksplorasi kontemplasi visual dengan palet warna earthy, tekstur kertas katun alami, dan komposisi simetri tenang."
  },
  {
    id: "SKN-09",
    title: "Stillness Reflection: Studio Print",
    category: "Botanical Series",
    year: "2025",
    imageUrl: "assets/works/stillness-reflection.jpg",
    dimensions: "A4 • 300 DPI (210 x 297 mm)",
    artist: "Alwi Abdul Aziz",
    summary: "Fotografi still life bernuansa hangat dengan finishing matte fine art dan tipografi pelengkap berukuran mikro."
  },
  {
    id: "SKN-10",
    title: "Lavender Botanical: Risograph Series",
    category: "Botanical Illustration",
    year: "2025",
    imageUrl: "assets/works/lavender-botanical.jpg",
    dimensions: "A4 • 300 DPI (210 x 297 mm)",
    artist: "Alwi Abdul Aziz",
    summary: "Ilustrasi botani dengan efek cetak saring multi-pass, distorsi tepi tinta alami, dan registrasi warna sengaja misaligned."
  },
  {
    id: "SKN-11",
    title: "Sakura Spring: Eastern Minimalist",
    category: "Exhibition Poster",
    year: "2025",
    imageUrl: "assets/works/sakura-spring.jpg",
    dimensions: "A4 • 300 DPI (210 x 297 mm)",
    artist: "Alwi Abdul Aziz",
    summary: "Simulasi poster pameran seni Tokyo dengan perpaduan karakter kanji minimalis dan palet warna musim semi kontemporer."
  },
  {
    id: "SKN-12",
    title: "Back to Nature: Archival Collection",
    category: "Eco Architecture",
    year: "2025",
    imageUrl: "assets/works/back-to-nature.jpg",
    dimensions: "A4 • 300 DPI (210 x 297 mm)",
    artist: "Alwi Abdul Aziz",
    summary: "Dokumentasi visual lanskap alam bebas dengan komposisi framing berlapis dan detail cetak beresolusi tinggi 300 DPI."
  }
];

export const FanPosterCarousel: React.FC<FanPosterCarouselProps> = ({
  posters = DEFAULT_POSTERS,
  className = "",
  autoPlay = false,
  autoPlayInterval = 4500,
  onPosterClick
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedPoster, setSelectedPoster] = useState<PosterItem | null>(null);
  const [viewportWidth, setViewportWidth] = useState<number>(1200);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dragStartX = useRef<number>(0);
  const dragDeltaX = useRef<number>(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const totalPosters = posters.length;

  // Responsive scaling multipliers for x-spread and card width
  const responsiveConfig = useMemo(() => {
    if (viewportWidth < 640) {
      // Mobile phone (< 640px)
      return {
        cardWidth: 175,
        xSpread: [0, 68, 130, 185],
        ySpread: [0, 16, 40, 72],
        rotSpread: [0, 5, 10, 15],
        scaleSpread: [1, 0.92, 0.85, 0.78],
        maxVisibleOffset: 2 // Hide ±3 on narrow phones for clean zero-overflow
      };
    } else if (viewportWidth < 1024) {
      // Tablet / iPad (640px - 1023px)
      return {
        cardWidth: 220,
        xSpread: [0, 105, 195, 275],
        ySpread: [0, 20, 48, 85],
        rotSpread: [0, 6, 12, 17],
        scaleSpread: [1, 0.92, 0.85, 0.78],
        maxVisibleOffset: 3
      };
    }
    // Desktop (>= 1024px)
    return {
      cardWidth: 260,
      xSpread: [0, 140, 260, 360],
      ySpread: [0, 22, 55, 98],
      rotSpread: [0, 6, 12, 18],
      scaleSpread: [1, 0.92, 0.85, 0.78],
      maxVisibleOffset: 3
    };
  }, [viewportWidth]);

  // Window resize listener
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setViewportWidth(window.innerWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute circular shortest offset between any item and the active index (-N/2 to N/2)
  const getShortestOffset = useCallback(
    (index: number, active: number, total: number) => {
      let diff = index - active;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;
      return diff;
    },
    []
  );

  // GSAP 3 Fan Arc animation update
  const animateCards = useCallback(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      posters.forEach((_, index) => {
        const el = cardRefs.current[index];
        if (!el) return;

        const offset = getShortestOffset(index, activeIndex, totalPosters);
        const absOffset = Math.abs(offset);
        const sign = offset === 0 ? 0 : offset > 0 ? 1 : -1;

        if (absOffset > responsiveConfig.maxVisibleOffset) {
          // Cards beyond visible offset fade out smoothly
          gsap.to(el, {
            x: sign * (responsiveConfig.xSpread[3] + 80),
            y: responsiveConfig.ySpread[3] + 40,
            rotation: sign * (responsiveConfig.rotSpread[3] + 6),
            scale: 0.68,
            opacity: 0,
            zIndex: 1,
            pointerEvents: "none",
            duration: 0.55,
            ease: "power3.out",
            overwrite: "auto"
          });
        } else {
          // Visible 7-card arc positions
          const targetX = sign * responsiveConfig.xSpread[absOffset];
          const targetY = responsiveConfig.ySpread[absOffset];
          const targetRot = sign * responsiveConfig.rotSpread[absOffset];
          const targetScale = responsiveConfig.scaleSpread[absOffset];
          const targetZ = 10 - absOffset * 2;
          const targetOpacity = absOffset === 3 ? 0.75 : 1;

          gsap.to(el, {
            x: targetX,
            y: targetY,
            rotation: targetRot,
            scale: targetScale,
            opacity: targetOpacity,
            zIndex: targetZ,
            pointerEvents: "auto",
            duration: 0.55,
            ease: "power3.out",
            overwrite: "auto"
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeIndex, posters, totalPosters, responsiveConfig, getShortestOffset]);

  useEffect(() => {
    animateCards();
  }, [animateCards]);

  // Navigate functions
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalPosters);
  }, [totalPosters]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalPosters) % totalPosters);
  }, [totalPosters]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Autoplay support
  useEffect(() => {
    if (!autoPlay) return;
    autoPlayTimerRef.current = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [autoPlay, autoPlayInterval, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPoster) {
        if (e.key === "Escape") setSelectedPoster(null);
        return;
      }
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, selectedPoster]);

  // Touch and Mouse Drag / Swipe Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragDeltaX.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    dragDeltaX.current = e.clientX - dragStartX.current;
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 45;
    if (dragDeltaX.current < -threshold) {
      handleNext();
    } else if (dragDeltaX.current > threshold) {
      handlePrev();
    }
  };

  // Card click interaction
  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      // Center card clicked -> open lightbox
      const activePoster = posters[activeIndex];
      setSelectedPoster(activePoster);
      if (onPosterClick) onPosterClick(activePoster);
    } else {
      // Side card clicked -> bring to center
      setActiveIndex(index);
    }
  };

  // Active Center Card Hover Lift
  const handleCardMouseEnter = (index: number) => {
    if (index !== activeIndex) return;
    const el = cardRefs.current[index];
    if (el) {
      gsap.to(el, {
        y: responsiveConfig.ySpread[0] - 8,
        scale: 1.025,
        duration: 0.28,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
  };

  const handleCardMouseLeave = (index: number) => {
    if (index !== activeIndex) return;
    const el = cardRefs.current[index];
    if (el) {
      gsap.to(el, {
        y: responsiveConfig.ySpread[0],
        scale: 1,
        duration: 0.28,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-7xl mx-auto px-4 py-8 select-none overflow-hidden ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ touchAction: "pan-y" }}
      aria-roledescription="carousel"
      aria-label="Galeri Poster Cetak A4"
    >
      {/* 3D Fan Arc Stage Container */}
      <div
        className="relative w-full flex items-center justify-center mx-auto"
        style={{
          height: `${responsiveConfig.cardWidth * 1.414 + 110}px`,
          perspective: 1400
        }}
      >
        {posters.map((poster, index) => {
          const offset = getShortestOffset(index, activeIndex, totalPosters);
          const isCenter = offset === 0;

          return (
            <div
              key={poster.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={() => handleCardMouseLeave(index)}
              role="button"
              tabIndex={0}
              aria-label={`Poster: ${poster.title} (${poster.year})`}
              aria-current={isCenter ? "true" : "false"}
              className={`absolute top-4 cursor-pointer will-change-transform group transition-shadow duration-300 rounded-2xl shadow-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 ${
                isCenter ? "ring-2 ring-[#FF8E00]/60 ring-offset-2 ring-offset-black" : "opacity-90 hover:opacity-100"
              }`}
              style={{
                width: `${responsiveConfig.cardWidth}px`,
                aspectRatio: "1 / 1.414"
              }}
            >
              {/* Poster Image calibrated strictly for A4 portrait (1:1.414) */}
              <img
                src={poster.imageUrl}
                alt={poster.title}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover rounded-2xl pointer-events-none transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* Ambient Gloss Highlight Overlay */}
              <div
                className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/40 via-transparent to-white/10 rounded-2xl"
                aria-hidden="true"
              />

              {/* Side Card Overlay Tint for Visual Hierarchy */}
              {!isCenter && (
                <div
                  className="absolute inset-0 bg-black/25 hover:bg-transparent transition-colors duration-200 rounded-2xl"
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Control Bar: Lihat Detail Button, Prev/Next & Dots */}
      <div className="mt-5 flex flex-col items-center justify-center gap-4">
        {/* Single Action Button: Lihat Detail */}
        <button
          type="button"
          onClick={() => setSelectedPoster(posters[activeIndex])}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF8E00] hover:bg-[#ffa024] text-black font-bold text-sm shadow-lg shadow-[#FF8E00]/25 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          aria-label="Lihat detail poster aktif"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6" />
            <path d="M9 21H3v-6" />
            <path d="M21 3l-7 7" />
            <path d="M3 21l7-7" />
          </svg>
          <span>Lihat Detail</span>
        </button>

        {/* Circular Controls & Dots */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-1">
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Karya Sebelumnya"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-zinc-900 border border-zinc-700/80 text-zinc-200 hover:text-white hover:border-[#FF8E00] hover:bg-zinc-800 transition-all duration-200 active:scale-95 shadow-md"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Interactive Pagination Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm">
            {posters.map((poster, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={poster.id}
                  type="button"
                  onClick={() => handleDotClick(index)}
                  aria-label={`Buka slide ${index + 1}: ${poster.title}`}
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? "w-6 sm:w-7 h-2 bg-[#FF8E00] shadow-sm shadow-[#FF8E00]/50"
                      : "w-2 h-2 bg-[#d4d4d8] hover:bg-zinc-300 opacity-60 hover:opacity-100"
                  }`}
                />
              );
            })}
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Karya Selanjutnya"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-zinc-900 border border-zinc-700/80 text-zinc-200 hover:text-white hover:border-[#FF8E00] hover:bg-zinc-800 transition-all duration-200 active:scale-95 shadow-md"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-Screen Accessible Modal Lightbox for Uncropped A4 Poster */}
      {selectedPoster && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPoster(null)}
        >
          {/* Lightbox Inner Container */}
          <div
            className="relative max-w-4xl w-full bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedPoster(null)}
              aria-label="Tutup pratinjau poster [ESC]"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 flex items-center justify-center transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Uncropped A4 Poster Frame */}
            <div className="relative flex-shrink-0 w-full sm:w-[320px] md:w-[360px] aspect-[1/1.414] rounded-xl overflow-hidden shadow-2xl border border-zinc-800 bg-black">
              <img
                src={selectedPoster.imageUrl}
                alt={selectedPoster.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Poster Details & Ordering Specs */}
            <div className="flex flex-col justify-between flex-grow w-full text-left space-y-4">
              <div>
                <span className="inline-block px-2.5 py-1 text-[11px] font-mono font-semibold rounded bg-zinc-900 border border-zinc-800 text-[#FF8E00] tracking-wider uppercase">
                  {selectedPoster.id} &bull; {selectedPoster.category}
                </span>
                <h2 id="lightbox-title" className="text-xl sm:text-2xl font-bold text-white font-sans mt-2 tracking-tight">
                  {selectedPoster.title}
                </h2>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  Artis: {selectedPoster.artist || "Alwi Abdul Aziz"} &bull; Tahun: {selectedPoster.year}
                </p>
                <p className="text-sm text-zinc-300 font-sans mt-3 leading-relaxed">
                  {selectedPoster.summary || "Komposisi poster cetak dengan disiplin Swiss Editorial System beresolusi tinggi 300 DPI siap cetak fisik dan pameran visual."}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1.5 font-mono text-xs text-zinc-300">
                <div className="flex justify-between">
                  <span className="text-zinc-500">FORMAT CETAK:</span>
                  <span className="font-semibold text-zinc-200">{selectedPoster.dimensions || "A4 (210 x 297 mm)"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">RESOLUSI:</span>
                  <span className="font-semibold text-zinc-200">300 DPI &bull; CMYK & RGB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">STATUS HAK CIPTA:</span>
                  <span className="font-semibold text-[#FF8E00]">Hak Guna Komersial & Cetak</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`https://wa.me/6289519203345?text=${encodeURIComponent(`Halo Sukunaru Studio, saya tertarik untuk memesan cetak poster/desain serupa untuk karya: *${selectedPoster.title}* (${selectedPoster.id}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[44px] px-5 py-2.5 rounded-lg bg-[#FF8E00] hover:bg-[#ffa024] text-black font-bold text-sm flex items-center justify-center transition-all active:scale-98 shadow-lg shadow-[#FF8E00]/20"
                >
                  Pesan Cetak via WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedPoster(null)}
                  className="px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 font-medium text-sm transition-colors"
                >
                  Tutup [ESC]
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FanPosterCarousel;
