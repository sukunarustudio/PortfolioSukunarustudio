"use client";

import React from "react";
import PictureRailGallery from "@/components/ui/picture-rail-gallery";
import type { PictureRailItem } from "@/components/ui/picture-rail-gallery";

export const SUKUNARU_PICTURE_RAIL_PRINTS: PictureRailItem[] = [
  {
    id: "SKN-01",
    title: "Matthijs de Ligt #04: Manchester United Tribute",
    artist: "Sukunaru Studio",
    year: "2026",
    image: "/assets/works/deligt-manutd.jpg",
    aspect: 0.8,
    frame: "black",
    mat: true,
    drop: 0.04,
    tag: "A2 Print",
    details: ["Edisi Arsip Cetak Fisik", "Rasio 4:5 (1080×1350)", "Swiss Editorial Sports Grid", "CMYK 300 DPI Ready", "Signed on the back"],
  },
  {
    id: "SKN-02",
    title: "Lamborghini Aventador SVJ Roadster",
    artist: "Sukunaru Studio",
    year: "2026",
    image: "/assets/works/lamborghini-svj.jpg",
    aspect: 4 / 3,
    frame: "oak",
    mat: false,
    drop: 0.12,
    tag: "A3 Print",
    details: ["Edisi Poster Otomotif", "Format A3/A2 • 300 DPI CMYK", "Triptych Layout Giallo Orion", "Signed by Sukunaru Studio"],
  },
  {
    id: "SKN-03",
    title: "Lamborghini Huracán EVO: Technical Sheet",
    artist: "Sukunaru Studio",
    year: "2026",
    image: "/assets/works/huracan-evo.jpg",
    aspect: 0.75,
    frame: "white",
    mat: true,
    drop: -0.02,
    tag: "A3 Spec",
    details: ["Format A3/A2 • 300 DPI", "Technical Spec Outline Sheet", "V10 Aerodynamics Breakdown"],
  },
  {
    id: "SKN-04",
    title: "Sakura (散る花の哲学): Ephemeral Spring",
    artist: "Sukunaru Studio",
    year: "2026",
    image: "/assets/works/sakura-spring.jpg",
    aspect: 0.75,
    frame: "black",
    mat: true,
    drop: 0.14,
    tag: "No. 03",
    details: ["Poster No. 03 Ephemeral Spring", "Tipografi Jepang-Inggris Dual-Script", "Print & Exhibition Edition"],
  },
  {
    id: "SKN-05",
    title: "Hana Shizen (花自然): Lavender Essence",
    artist: "Sukunaru Studio",
    year: "2026",
    image: "/assets/works/lavender-botanical.jpg",
    aspect: 0.75,
    frame: "oak",
    mat: true,
    drop: 0.02,
    tag: "No. 03B",
    details: ["Poster No. 03B Lavender Essence", "Studi Kontras Ungu-Kuning", "300 DPI Archival Paper"],
  },
  {
    id: "SKN-06",
    title: "Always Believe: Green Raster Halftone",
    artist: "Sukunaru Studio",
    year: "2026",
    image: "/assets/works/always-believe-halftone.jpg",
    aspect: 1,
    frame: "white",
    mat: true,
    drop: 0.16,
    tag: "Halftone",
    details: ["Sukunaru Filter Studio Engine", "Matriks Raster Halftone Zamrud", "Risograph Aesthetic Edition"],
  },
  {
    id: "SKN-07",
    title: "Clarity Over Noise: Bounding-Box Visual",
    artist: "Sukunaru Studio",
    year: "2026",
    image: "/assets/works/clarity-focus.jpg",
    aspect: 0.8,
    frame: "black",
    mat: false,
    drop: 0.06,
    tag: "Feed",
    details: ["Instagram Feed Campaign", "Directional Blur & Grain", "Bounding-Box Vector Overlay"],
  },
  {
    id: "SKN-08",
    title: "Pause, Breathe, Aim: Find Your Focus",
    artist: "Sukunaru Studio",
    year: "2026",
    image: "/assets/works/find-your-focus.jpg",
    aspect: 0.8,
    frame: "oak",
    mat: true,
    drop: 0,
    tag: "Editorial",
    details: ["Instagram & Pinterest Visual", "Editorial Portrait & Serif Typography", "High-Engagement Visual"],
  },
  {
    id: "SKN-09",
    title: "Presence in Stillness: Luminous Silhouette",
    artist: "Sukunaru Studio",
    year: "2026",
    image: "/assets/works/presence-stillness.jpg",
    aspect: 0.8,
    frame: "black",
    mat: true,
    drop: 0.1,
    tag: "Story",
    details: ["Poster No. 07 Luminous Silhouette", "Dot-Matrix Sky Gradient", "Storytelling Key Visual"],
  },
  {
    id: "SKN-10",
    title: "Stillness Reflection: Vintage Paper Grain",
    artist: "Sukunaru Studio",
    year: "2026",
    image: "/assets/works/stillness-reflection.jpg",
    aspect: 0.8,
    frame: "oak",
    mat: false,
    drop: 0.05,
    tag: "Zine",
    details: ["Poster No. 02 Vintage Paper Grain", "Zine Cover Aesthetic", "Masking Tipografi Lanskap"],
  },
  {
    id: "SKN-11",
    title: "Back to Nature: Misty Highlands Edition",
    artist: "Sukunaru Studio",
    year: "2026",
    image: "/assets/works/back-to-nature.jpg",
    aspect: 0.8,
    frame: "white",
    mat: true,
    drop: 0.08,
    tag: "Series 02",
    details: ["Series No. 002 Misty Highlands", "Tipografi Terbenam Kabut", "Barcode & Edisi Arsip"],
  },
  {
    id: "SKN-12",
    title: "Embrace The Light: Twilight Dock Series",
    artist: "Sukunaru Studio",
    year: "2026",
    image: "/assets/works/embrace-the-light.jpg",
    aspect: 0.8,
    frame: "black",
    mat: true,
    drop: 0.03,
    tag: "Series 05",
    details: ["Series No. 05 Twilight Dock", "Siluet Dermaga Senja", "Conceptual Art & Social Feed"],
  },
];

export default function PictureRailGalleryDemo({ autoplay = true }: { autoplay?: boolean }) {
  return (
    <div data-picture-demo className="flex min-h-svh w-full items-center justify-center bg-background text-foreground">
      <PictureRailGallery
        items={SUKUNARU_PICTURE_RAIL_PRINTS}
        eyebrow="Archival Print Shop · Sukunaru Studio"
        heading="Dinding Galeri Rel Interaktif: Sentuh, Geser & Balik Karya Cetak"
        caption="Geser kursor di sepanjang rel untuk menyalakan lampu pameran, geser bingkai fisik, atau klik untuk membalik sisi belakang karya."
        autoplay={autoplay}
        labels={{
          front: "Sisi Depan",
          back: "Sisi Belakang & Label",
          close: "Tutup",
          open: "Angkat untuk melihat detail",
        }}
        action={
          <a
            href="#sosmed"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm outline-none transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
          >
            Pesan Cetak via WhatsApp
          </a>
        }
      />
    </div>
  );
}
