import React from "react";
import FanPosterCarousel, { DEFAULT_POSTERS } from "@/components/FanPosterCarousel";

export default function PortfolioLandingPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#FF8E00] selection:text-black">
      {/* Portfolio Section with 7-Card Fan Arc Carousel */}
      <section className="py-16 sm:py-24 overflow-hidden" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#FF8E00] uppercase">
            ARCHIVAL PRINT &bull; A4 EDITIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2 font-sans">
            Galeri Poster Cetak <span className="italic font-serif font-normal text-[#FF8E00]">Sukunaru Studio</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed">
            Eksplorasi karya desain poster format A4 dengan tata letak busur dinamis 3D.
            Sentuh, geser, atau klik karya untuk melihat detail dan memesan cetak fisik 300 DPI.
          </p>
        </div>

        {/* Reusable Fan Poster Carousel Component strictly calibrated for A4 (1:1.414) */}
        <FanPosterCarousel posters={DEFAULT_POSTERS} autoPlay={false} />
      </section>
    </main>
  );
}
