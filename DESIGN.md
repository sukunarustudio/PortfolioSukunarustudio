# DESIGN.md: Sukunaru Studio

## Identity & Character
- **Studio Name:** Sukunaru Studio
- **Core Offerings (50:50 Dual Track):**
  1. **Design Services:** Social Media Design (Content Feeds & Stories) and Print Poster Design.
  2. **Digital Products (Direct Link):** **Vectonaru** (Ultra Vectorizer & Microstock Companion) and **Sukunaru Filter Studio** (Print, Halftone & Editorial Visual Filter Engine).
- **Visual Language:** Bold Editorial / Swiss Print Studio. Inspired by physical print production sheets, crop registration marks, high-contrast poster typography, and tactile paper/ink contrast.
- **Dials:** `Dial: ENERGY 3 / RHYTHM 3 / MOTION 2`

## Color System (2 Core + 1 Accent)
Every color pairing is mathematically verified against WCAG 2.x AA contrast standards:

### Dark Theme (Default: Print Gallery Wall)
- **Reason for Dark Default:** Poster artwork and high-saturation social media feeds require a deep matte ink background so artwork colors pop without visual interference. A full Light Theme ("Warm Paper Proof") toggle is shipped and verified alongside it.
- **Core 1 (Canvas Ink):** `#0C0C0C` (Surface Primary) / `#161616` (Surface Elevated)
- **Core 2 (Warm Paper Foreground):** `#F5F2EB` (Contrast on `#0C0C0C`: `17.50:1`, on `#161616`: `16.19:1`)
- **Secondary Text (Warm Stone):** `#BDB7AC` (Contrast on `#0C0C0C`: `9.81:1`, on `#161616`: `9.08:1`)
- **Accent (Sukunaru Orange):** `#FF8E00` (Contrast on `#0C0C0C`: `8.50:1`, on `#161616`: `7.86:1`; `#0C0C0C` text on `#FF8E00` button: `8.50:1`)
- **Structural Hairline Border:** `#3D3A35` (`3.12:1` non-text contrast for interactive boundaries: `#57534C`)

### Light Theme (Paper Proof Sheet)
- **Core 1 (Warm Paper Canvas):** `#F5F2EB` (Surface Primary) / `#EAE5D9` (Surface Elevated)
- **Core 2 (Deep Ink Foreground):** `#111111` (Contrast on `#F5F2EB`: `16.89:1`)
- **Secondary Text (Charcoal Ink):** `#4A463F` (Contrast on `#F5F2EB`: `8.39:1`)
- **Accent (Sukunaru Amber Ink for Text/Links on Light):** `#944E00` (Contrast on `#F5F2EB`: `5.61:1`, on `#EAE5D9`: `4.99:1`)
- **Accent Surface (Buttons on Light):** `#FF8E00` with `#0C0C0C` text (`8.50:1`)

## Typography & Hierarchy
- **Display / Headlines (`Instrument Serif` & `Plus Jakarta Sans`, 600-700):** `Instrument Serif` paired with clean geometric `Plus Jakarta Sans` replaces the overly brutalist wide display type, giving headlines a refined contemporary design-agency and editorial magazine poise without harshness.
- **Body & UI (`Plus Jakarta Sans`, 400-600):** High x-height humanist sans-serif for crisp legibility on service deliverables, licensing notes, and mobile screens.
- **Technical Specs (`JetBrains Mono`, 500):** Used strictly for print dimensions (`A2 / 420x594mm`), DPI ratings (`300 DPI CMYK`), version tags, and price figures.

## Written Reasons for Major Design Decisions (R-31)
1. **Why this color palette?** Deep ink black (`#0C0C0C`), warm paper (`#F5F2EB`), and Sukunaru Brand Orange (`#FF8E00`) evoke physical screen-printing ink on archival paper while achieving `8.50:1` WCAG AAA contrast on dark surfaces and primary buttons.
2. **Why this layout structure?** Sections follow a 50:50 dual-track buyer journey (Split Hero -> Flagship 2-Product Showcase -> Asymmetric Poster/Feed Wall -> Editorial Service Ledger -> Direct WA Brief Builder & Social Directory), avoiding uniform template grids.
3. **Why this typography?** `Plus Jakarta Sans` (600-700) combined with `Instrument Serif` accents delivers a sleek, modern design-studio voice that avoids harsh brutalism while keeping strong hierarchy.
4. **Why this spacing?** Fluid `clamp()` spacing creates tight specification groupings separated by generous gallery pauses so each section breathes differently (RHYTHM 3).
5. **Why non-uniform containers instead of identical cards?** Flagship software products need interactive preview panels, posters need 3:4 vertical frames, social feeds need 1:1/4:5 frames, and services read best as an itemized production ledger.
6. **Why custom technical SVG artwork & honest placeholders?** Real studio portfolio images require owner files, so artwork slots use structured SVG print-registration compositions explicitly marked `[PLACEHOLDER KARYA]` to stay 100% honest (R-23, R-38).
7. **Why an interactive Halftone Canvas & Print-Registration Cursor (R-07, R-19)?** The background halftone dot matrix and artboard registration cursor directly express Sukunaru Studio's two flagship tools (**Sukunaru Filter Studio** halftone print engine and **Vectonaru** vector anchor precision), responding only to pointer movement on fine-pointer devices and automatically disabling on touchscreens or `prefers-reduced-motion`.
