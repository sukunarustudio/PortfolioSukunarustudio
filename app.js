const STUDIO_WA_NUMBER = "6289519203345";

const PORTFOLIO_WORKS = [
  {
    id: "SKN-01",
    category: "poster",
    categoryLabel: "SPORTS EDITORIAL POSTER",
    spanClass: "span-4",
    image: "assets/works/deligt-manutd.jpg",
    title: "Matthijs de Ligt #04: Manchester United Tribute",
    summary: "Komposisi poster olahraga bergaya Swiss editorial dengan blok warna kontras tinggi, potongan tiga gestur subjek, dan kolofon naratif.",
    specs: ["Rasio 4:5 (1080x1350)", "CMYK & RGB Ready", "Sports Key Visual"],
    aspect: 0.8,
    frame: "black",
    mat: true,
    drop: 0.04,
    tag: "A2 Print",
    details: ["Edisi Arsip Cetak Fisik", "Rasio 4:5 (1080×1350)", "Swiss Editorial Sports Grid", "CMYK 300 DPI Ready", "Signed on the back"]
  },
  {
    id: "SKN-02",
    category: "poster",
    categoryLabel: "AUTOMOTIVE PRINT POSTER",
    spanClass: "span-4",
    image: "assets/works/lamborghini-svj.jpg",
    title: "Lamborghini Aventador SVJ Roadster",
    summary: "Desain poster otomotif dengan pemenggalan panel triptych vertikal di atas kanvas kuning Giallo Orion untuk menonjolkan siluet aerodinamika V12.",
    specs: ["Format A3/A2", "300 DPI Print", "Automotive Series"],
    aspect: 4 / 3,
    frame: "oak",
    mat: false,
    drop: 0.12,
    tag: "A3 Print",
    details: ["Edisi Poster Otomotif", "Format A3/A2 • 300 DPI CMYK", "Triptych Layout Giallo Orion", "Signed by Sukunaru Studio"]
  },
  {
    id: "SKN-03",
    category: "poster",
    categoryLabel: "AUTOMOTIVE SPEC SHEET",
    spanClass: "span-4",
    image: "assets/works/huracan-evo.jpg",
    title: "Lamborghini Huracán EVO: Technical Sheet",
    summary: "Eksplorasi tata letak lembar spesifikasi otomotif dengan tiga sudut pandang sinematik, tipografi outline tegas, dan data performa terstruktur.",
    specs: ["Format A3/A2", "300 DPI Print", "Editorial Grid"],
    aspect: 0.75,
    frame: "white",
    mat: true,
    drop: -0.02,
    tag: "A3 Spec",
    details: ["Format A3/A2 • 300 DPI", "Technical Spec Outline Sheet", "V10 Naturally Aspirated Spec"]
  },
  {
    id: "SKN-04",
    category: "poster",
    categoryLabel: "BOTANICAL TYPOGRAPHY",
    spanClass: "span-4",
    image: "assets/works/sakura-spring.jpg",
    title: "Sakura (散る花の哲学): Ephemeral Spring",
    summary: "Perpaduan tipografi display Jepang-Inggris, potongan objek kelopak sakura berlapis, dan tata letak teks terbelah yang mengelilingi subjek.",
    specs: ["Poster No. 03", "Mixed Typography", "Print & Exhibition"],
    aspect: 0.75,
    frame: "black",
    mat: true,
    drop: 0.14,
    tag: "No. 03",
    details: ["Poster No. 03 Ephemeral Spring", "Tipografi Jepang-Inggris Dual-Script", "Print & Exhibition Edition"]
  },
  {
    id: "SKN-05",
    category: "poster",
    categoryLabel: "BOTANICAL TYPOGRAPHY",
    spanClass: "span-4",
    image: "assets/works/lavender-botanical.jpg",
    title: "Hana Shizen (花自然): Lavender Essence",
    summary: "Studi kontras warna ungu-kuning dengan komposisi fotografi botani yang menembus bingkai horizon dan tipografi kanji berkarakter tebal.",
    specs: ["Poster No. 03B", "Botanical Series", "Print & Exhibition"],
    aspect: 0.75,
    frame: "oak",
    mat: true,
    drop: 0.02,
    tag: "No. 03B",
    details: ["Poster No. 03B Lavender Essence", "Studi Kontras Ungu-Kuning", "300 DPI Archival Paper"]
  },
  {
    id: "SKN-06",
    category: "poster",
    categoryLabel: "HALFTONE PRINT EDITION",
    spanClass: "span-4",
    image: "assets/works/always-believe-halftone.jpg",
    title: "Always Believe: Green Raster Halftone Portrait",
    summary: "Pengolahan potret menjadi matriks titik raster halftone hijau zamrud di atas tekstur kertas hangat menggunakan teknik Sukunaru Filter Studio.",
    specs: ["Halftone Raster", "Risograph Style", "A3 Print"],
    aspect: 1,
    frame: "white",
    mat: true,
    drop: 0.16,
    tag: "Halftone",
    details: ["Sukunaru Filter Studio Engine", "Matriks Raster Halftone Zamrud", "Risograph Aesthetic Edition"]
  },
  {
    id: "SKN-07",
    category: "socmed",
    categoryLabel: "CONCEPTUAL SOCIAL VISUAL",
    spanClass: "span-4",
    image: "assets/works/clarity-focus.jpg",
    title: "Clarity Over Noise: Bounding-Box Visual",
    summary: "Visual kampanye media sosial bertema fokus kreatif dengan teknik directional motion blur, grain tekstur, dan penanda seleksi vektor.",
    specs: ["Social Campaign", "Motion Blur & Grain", "High-Engagement Post"],
    aspect: 0.8,
    frame: "black",
    mat: false,
    drop: 0.06,
    tag: "Feed",
    details: ["Instagram Feed Campaign", "Directional Blur & Grain", "Bounding-Box Vector Overlay"]
  },
  {
    id: "SKN-08",
    category: "socmed",
    categoryLabel: "EDITORIAL FEED VISUAL",
    spanClass: "span-4",
    image: "assets/works/find-your-focus.jpg",
    title: "Pause, Breathe, Aim: Find Your Focus",
    summary: "Konten visual reflektif dengan permainan kedalaman bidang (depth-of-field), bingkai bidik minimalis, dan kontras tipografi serif.",
    specs: ["Instagram & Pinterest", "Editorial Portrait", "Color Graded"],
    aspect: 0.8,
    frame: "oak",
    mat: true,
    drop: 0,
    tag: "Editorial",
    details: ["Instagram & Pinterest Visual", "Editorial Portrait & Serif Typography", "High-Engagement Visual"]
  },
  {
    id: "SKN-09",
    category: "socmed",
    categoryLabel: "HALFTONE & GLOW SERIES",
    spanClass: "span-4",
    image: "assets/works/presence-stillness.jpg",
    title: "Presence in Stillness: Luminous Silhouette",
    summary: "Eksperimen tekstur dot-matrix pada langit gradien biru dengan siluet subjek bercahaya untuk konten visual penceritaan (visual storytelling).",
    specs: ["Poster No. 07", "Dot-Matrix Sky", "Visual Storytelling"],
    aspect: 0.8,
    frame: "black",
    mat: true,
    drop: 0.1,
    tag: "Story",
    details: ["Poster No. 07 Luminous Silhouette", "Dot-Matrix Sky Gradient", "Storytelling Key Visual"]
  },
  {
    id: "SKN-10",
    category: "socmed",
    categoryLabel: "ARCHIVE ZINE VISUAL",
    spanClass: "span-4",
    image: "assets/works/stillness-reflection.jpg",
    title: "Stillness Reflection: Vintage Paper Grain",
    summary: "Desain konten bergaya sampul zine dengan tekstur kertas distress, indeks metadata di bagian kop, dan efek masking tipografi pada lanskap.",
    specs: ["Poster No. 02", "Paper Texture", "Zine Aesthetic"],
    aspect: 0.8,
    frame: "oak",
    mat: false,
    drop: 0.05,
    tag: "Zine",
    details: ["Poster No. 02 Vintage Paper Grain", "Zine Cover Aesthetic", "Masking Tipografi Lanskap"]
  },
  {
    id: "SKN-11",
    category: "socmed",
    categoryLabel: "OUTDOOR VISUAL STORY",
    spanClass: "span-4",
    image: "assets/works/back-to-nature.jpg",
    title: "Back to Nature: Misty Highlands Edition",
    summary: "Komposisi visual petualangan dengan tipografi putih yang menyatu di balik kabut pegunungan, dilengkapi elemen kode batang edisi.",
    specs: ["Rasio 4:5 Feed", "Atmospheric Grade", "Series No. 002"],
    aspect: 0.8,
    frame: "white",
    mat: true,
    drop: 0.08,
    tag: "Series 02",
    details: ["Series No. 002 Misty Highlands", "Tipografi Terbenam Kabut", "Barcode & Edisi Arsip"]
  },
  {
    id: "SKN-12",
    category: "socmed",
    categoryLabel: "CONCEPTUAL SERIES",
    spanClass: "span-4",
    image: "assets/works/embrace-the-light.jpg",
    title: "Embrace The Light: Twilight Dock Series",
    summary: "Seri penutup kampanye visual dengan kontras siluet cahaya di dermaga senja dan tipografi serif berpendar lembut.",
    specs: ["Series No. 05", "Conceptual Art", "Social & Print"],
    aspect: 0.8,
    frame: "black",
    mat: true,
    drop: 0.03,
    tag: "Series 05",
    details: ["Series No. 05 Twilight Dock", "Siluet Dermaga Senja", "Conceptual Art & Social Feed"]
  }
];

let openWorkModal = null;

/* ==========================================================================
   7-Card Fan Arc Poster Carousel (A4 Aspect Ratio: 1 / 1.414)
   ========================================================================== */
const FAN_CAROUSEL_CONFIG = {
  desktop: {
    cardWidth: 260,
    offsets: {
      0: { scale: 1, rot: 0, x: 0, y: 0, zIndex: 10, opacity: 1 },
      1: { scale: 0.92, rot: 6, x: 140, y: 22, zIndex: 8, opacity: 1 },
      "-1": { scale: 0.92, rot: -6, x: -140, y: 22, zIndex: 8, opacity: 1 },
      2: { scale: 0.85, rot: 12, x: 260, y: 55, zIndex: 6, opacity: 1 },
      "-2": { scale: 0.85, rot: -12, x: -260, y: 55, zIndex: 6, opacity: 1 },
      3: { scale: 0.78, rot: 18, x: 360, y: 98, zIndex: 4, opacity: 0.85 },
      "-3": { scale: 0.78, rot: -18, x: -360, y: 98, zIndex: 4, opacity: 0.85 }
    }
  },
  tablet: {
    cardWidth: 220,
    offsets: {
      0: { scale: 1, rot: 0, x: 0, y: 0, zIndex: 10, opacity: 1 },
      1: { scale: 0.92, rot: 6, x: 105, y: 20, zIndex: 8, opacity: 1 },
      "-1": { scale: 0.92, rot: -6, x: -105, y: 20, zIndex: 8, opacity: 1 },
      2: { scale: 0.85, rot: 12, x: 195, y: 50, zIndex: 6, opacity: 1 },
      "-2": { scale: 0.85, rot: -12, x: -195, y: 50, zIndex: 6, opacity: 1 },
      3: { scale: 0.78, rot: 18, x: 270, y: 88, zIndex: 4, opacity: 0.75 },
      "-3": { scale: 0.78, rot: -18, x: -270, y: 88, zIndex: 4, opacity: 0.75 }
    }
  },
  mobile: {
    cardWidth: 175,
    offsets: {
      0: { scale: 1, rot: 0, x: 0, y: 0, zIndex: 10, opacity: 1 },
      1: { scale: 0.92, rot: 5.5, x: 68, y: 16, zIndex: 8, opacity: 1 },
      "-1": { scale: 0.92, rot: -5.5, x: -68, y: 16, zIndex: 8, opacity: 1 },
      2: { scale: 0.84, rot: 11, x: 130, y: 40, zIndex: 6, opacity: 0.9 },
      "-2": { scale: 0.84, rot: -11, x: -130, y: 40, zIndex: 6, opacity: 0.9 },
      3: { scale: 0.76, rot: 16, x: 185, y: 72, zIndex: 4, opacity: 0 },
      "-3": { scale: 0.76, rot: -16, x: -185, y: 72, zIndex: 4, opacity: 0 }
    }
  }
};

let fanCarouselState = {
  activeIndex: 0,
  items: [],
  cards: [],
  dots: [],
  isDragging: false
};

function initFanPosterCarousel(filterKey = "all", initialIndex = 0) {
  const wrap = document.getElementById("fan-carousel-wrap");
  const stage = document.getElementById("fan-carousel-stage");
  const dotsContainer = document.getElementById("fan-dots-container");
  const prevBtn = document.getElementById("fan-prev-btn");
  const nextBtn = document.getElementById("fan-next-btn");
  const titleEl = document.getElementById("fan-active-title");
  const categoryEl = document.getElementById("fan-active-category");
  const modalBtn = document.getElementById("fan-active-modal-btn");

  if (!stage || !wrap) return;

  const filtered = filterKey === "all"
    ? PORTFOLIO_WORKS
    : PORTFOLIO_WORKS.filter((item) => item.category === filterKey);

  const items = filtered.length > 0 ? filtered : PORTFOLIO_WORKS;
  fanCarouselState.items = items;
  fanCarouselState.activeIndex = Math.max(0, Math.min(items.length - 1, initialIndex));

  // Render cards into stage
  stage.innerHTML = items.map((item, idx) => `
    <div class="fan-poster-card" data-index="${idx}" data-id="${item.id}" role="button" tabindex="0" aria-label="${item.title}">
      <img src="${item.image}" alt="${item.title}" loading="lazy" width="540" height="763" />
      <div class="fan-poster-overlay"></div>
    </div>
  `).join("");

  // Render dots
  if (dotsContainer) {
    dotsContainer.innerHTML = items.map((item, idx) => `
      <button type="button" class="fan-dot ${idx === fanCarouselState.activeIndex ? 'is-active' : ''}" data-dot-index="${idx}" aria-label="Lihat ${item.title}"></button>
    `).join("");
  }

  const cardEls = Array.from(stage.querySelectorAll(".fan-poster-card"));
  fanCarouselState.cards = cardEls;

  function getLayoutConfig() {
    const w = window.innerWidth;
    if (w >= 1024) return FAN_CAROUSEL_CONFIG.desktop;
    if (w >= 640) return FAN_CAROUSEL_CONFIG.tablet;
    return FAN_CAROUSEL_CONFIG.mobile;
  }

  function getCardGeometry(shortestDiff, config) {
    const strDiff = String(shortestDiff);
    if (strDiff in config.offsets) {
      return config.offsets[strDiff];
    }
    const sign = shortestDiff > 0 ? 1 : -1;
    return {
      scale: 0.7,
      rot: sign * 22,
      x: sign * (config.cardWidth * 1.55),
      y: 110,
      zIndex: 1,
      opacity: 0
    };
  }

  function renderFan(immediate = false) {
    const N = items.length;
    const config = getLayoutConfig();
    const active = fanCarouselState.activeIndex;
    const activeItem = items[active];

    if (titleEl && activeItem) titleEl.textContent = activeItem.title;
    if (categoryEl && activeItem) categoryEl.textContent = activeItem.categoryLabel || (activeItem.specs ? activeItem.specs.join(" • ") : "A4 POSTER PRINT");
    if (modalBtn && activeItem) {
      modalBtn.setAttribute("data-work-id", activeItem.id);
      modalBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (typeof openWorkModal === "function") {
          openWorkModal(activeItem.id);
        } else if (typeof window.openWorkModal === "function") {
          window.openWorkModal(activeItem.id);
        }
      };
    }

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".fan-dot");
      dots.forEach((dot, idx) => {
        dot.classList.toggle("is-active", idx === active);
      });
    }

    const hasGsap = typeof window.gsap !== "undefined";

    cardEls.forEach((card, idx) => {
      // Circular shortest difference modulo N
      const diff = ((idx - active + N + Math.floor(N / 2)) % N) - Math.floor(N / 2);
      const geom = getCardGeometry(diff, config);
      const isActive = diff === 0;

      card._geom = geom;
      card.classList.toggle("is-active", isActive);
      card.style.zIndex = String(geom.zIndex);
      card.style.pointerEvents = geom.opacity > 0.05 ? "auto" : "none";

      card.style.setProperty("--fan-x", `${geom.x}px`);
      card.style.setProperty("--fan-y", `${geom.y}px`);
      card.style.setProperty("--fan-rot", `${geom.rot}deg`);
      card.style.setProperty("--fan-scale", String(geom.scale));

      if (hasGsap && !immediate) {
        window.gsap.to(card, {
          xPercent: -50,
          yPercent: -50,
          x: geom.x,
          y: geom.y,
          rotation: geom.rot,
          scale: geom.scale,
          opacity: geom.opacity,
          duration: 0.55,
          ease: "power3.out",
          overwrite: "auto"
        });
      } else {
        card.style.opacity = String(geom.opacity);
        card.style.transform = `translate3d(calc(-50% + ${geom.x}px), calc(-50% + ${geom.y}px), 0) rotate(${geom.rot}deg) scale(${geom.scale})`;
      }
    });
  }

  function goToIndex(newIdx) {
    const N = items.length;
    fanCarouselState.activeIndex = ((newIdx % N) + N) % N;
    renderFan();
  }

  function next() {
    goToIndex(fanCarouselState.activeIndex + 1);
  }

  function prev() {
    goToIndex(fanCarouselState.activeIndex - 1);
  }

  // Card click / hover / keyboard activation
  cardEls.forEach((card, idx) => {
    card.addEventListener("mouseenter", () => {
      if (idx !== fanCarouselState.activeIndex) return;
      const geom = card._geom;
      if (!geom) return;
      if (typeof window.gsap !== "undefined") {
        window.gsap.to(card, {
          xPercent: -50,
          yPercent: -50,
          x: geom.x,
          y: geom.y - 10,
          scale: geom.scale * 1.035,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto"
        });
      } else {
        card.style.transform = `translate3d(calc(-50% + ${geom.x}px), calc(-50% + ${geom.y - 10}px), 0) rotate(${geom.rot}deg) scale(${geom.scale * 1.035})`;
      }
    });

    card.addEventListener("mouseleave", () => {
      if (idx !== fanCarouselState.activeIndex) return;
      const geom = card._geom;
      if (!geom) return;
      if (typeof window.gsap !== "undefined") {
        window.gsap.to(card, {
          xPercent: -50,
          yPercent: -50,
          x: geom.x,
          y: geom.y,
          scale: geom.scale,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto"
        });
      } else {
        card.style.transform = `translate3d(calc(-50% + ${geom.x}px), calc(-50% + ${geom.y}px), 0) rotate(${geom.rot}deg) scale(${geom.scale})`;
      }
    });

    card.addEventListener("click", () => {
      if (fanCarouselState.isDragging) return;
      if (idx === fanCarouselState.activeIndex) {
        // Jangan buka detail saat klik gambar di browser HP (hanya buka lewat tombol Lihat Detail)
        const isMobile = window.innerWidth <= 768 || (window.matchMedia && window.matchMedia("(max-width: 768px)").matches);
        if (isMobile) {
          return;
        }
        const item = items[idx];
        if (item) {
          if (typeof openWorkModal === "function") {
            openWorkModal(item.id);
          } else if (typeof window.openWorkModal === "function") {
            window.openWorkModal(item.id);
          }
        }
      } else {
        goToIndex(idx);
      }
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (idx === fanCarouselState.activeIndex) {
          const isMobile = window.innerWidth <= 768 || (window.matchMedia && window.matchMedia("(max-width: 768px)").matches);
          if (isMobile) {
            return;
          }
          const item = items[idx];
          if (item) {
            if (typeof openWorkModal === "function") {
              openWorkModal(item.id);
            } else if (typeof window.openWorkModal === "function") {
              window.openWorkModal(item.id);
            }
          }
        } else {
          goToIndex(idx);
        }
      }
    });
  });

  // Dots click
  if (dotsContainer) {
    dotsContainer.onclick = (e) => {
      const target = e.target.closest(".fan-dot");
      if (!target) return;
      const idx = parseInt(target.getAttribute("data-dot-index"), 10);
      if (!isNaN(idx)) goToIndex(idx);
    };
  }

  // Navigation buttons
  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      prev();
    };
  }
  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      next();
    };
  }

  // Touch & pointer swipe gestures
  let startX = 0;
  let startY = 0;
  let hasMoved = false;

  wrap.onpointerdown = (e) => {
    startX = e.clientX;
    startY = e.clientY;
    hasMoved = false;
    fanCarouselState.isDragging = false;
  };

  wrap.onpointermove = (e) => {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
      hasMoved = true;
    }
  };

  wrap.onpointerup = (e) => {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (hasMoved && Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      fanCarouselState.isDragging = true;
      setTimeout(() => { fanCarouselState.isDragging = false; }, 100);
      if (dx < 0) {
        next();
      } else {
        prev();
      }
    }
  };

  // Keyboard navigation
  wrap.onkeydown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  renderFan(true);
}

function renderPortfolio(filterKey) {
  const grid = document.getElementById("portfolio-grid");
  const emptyBox = document.getElementById("portfolio-state-empty");
  const loadingBox = document.getElementById("portfolio-state-loading");

  if (!grid || !emptyBox || !loadingBox) return;

  loadingBox.hidden = true;

  const items = filterKey === "all"
    ? PORTFOLIO_WORKS
    : PORTFOLIO_WORKS.filter((item) => item.category === filterKey);

  if (items.length === 0) {
    grid.innerHTML = "";
    grid.hidden = true;
    emptyBox.hidden = false;
    return;
  }

  emptyBox.hidden = true;
  grid.hidden = false;

  grid.innerHTML = items
    .map(
      (work) => `
      <article class="work-piece ${work.spanClass} scroll-reveal-item">
        <div class="work-canvas" data-work-id="${work.id}" role="button" tabindex="0" aria-label="Perbesar karya ${work.title}">
          <img src="${work.image}" alt="${work.title}" class="work-poster-img" loading="lazy" width="540" height="720">
        </div>
        <div class="work-info">
          <div class="work-meta-line">
            <span>${work.id}</span>
            <span>${work.categoryLabel}</span>
          </div>
          <h3 class="work-title">${work.title}</h3>
          <p class="work-summary">${work.summary}</p>
          <div class="work-footer">
            <span class="work-spec-tag">${work.specs.join(" • ")}</span>
            <button type="button" class="btn btn-outline" data-work-id="${work.id}">
              Lihat Poster Penuh
            </button>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  if (typeof window.registerScrollRevealItems === "function") {
    window.registerScrollRevealItems(grid.querySelectorAll(".scroll-reveal-item"));
  }
}

function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const root = document.documentElement;
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("sukunaru_theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    root.setAttribute("data-theme", savedTheme);
  }

  function syncThemeUI() {
    const current = root.getAttribute("data-theme") || "dark";
    const isLight = current === "light";
    toggleBtn.setAttribute("aria-pressed", String(isLight));
    const labelText = isLight ? "Ganti ke mode gelap" : "Ganti ke mode terang";
    toggleBtn.setAttribute("aria-label", labelText);
    toggleBtn.setAttribute("title", labelText);
  }

  syncThemeUI();

  toggleBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("sukunaru_theme", next);
    syncThemeUI();
  });
}

function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const nav = document.getElementById("primary-nav");
  const menuText = menuBtn ? menuBtn.querySelector(".menu-btn-text") : null;

  if (!menuBtn || !nav) return;

  function setMenuState(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.classList.toggle("is-active", open);
    nav.classList.toggle("is-open", open);
    if (menuText) {
      menuText.textContent = open ? "Tutup" : "Menu";
    }
  }

  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    setMenuState(!isExpanded);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target) && nav.classList.contains("is-open")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setMenuState(false);
      menuBtn.focus();
    }
  });
}

function initProductStateControls() {
  const stateButtons = document.querySelectorAll("[data-product-state]");
  const content = document.getElementById("products-content");
  const loadingBox = document.getElementById("products-state-loading");
  const errorBox = document.getElementById("products-state-error");

  if (!stateButtons.length || !content || !loadingBox || !errorBox) return;

  stateButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetState = btn.getAttribute("data-product-state");

      document.querySelectorAll(".product-mode-control .state-pill").forEach((pill) => {
        pill.classList.toggle("is-active", pill.getAttribute("data-product-state") === targetState);
      });

      if (targetState === "loading") {
        content.hidden = true;
        errorBox.hidden = true;
        loadingBox.hidden = false;
      } else if (targetState === "error") {
        content.hidden = true;
        loadingBox.hidden = true;
        errorBox.hidden = false;
      } else {
        loadingBox.hidden = true;
        errorBox.hidden = true;
        content.hidden = false;
      }
    });
  });
}

function initPortfolioControls() {
  const tabs = document.querySelectorAll(".filter-tab");
  const resetBtn = document.querySelector("[data-reset-filter]");
  const viewRailBtn = document.getElementById("view-rail-btn");
  const viewGridBtn = document.getElementById("view-grid-btn");
  const fanWrap = document.getElementById("fan-carousel-wrap");
  const gridWrap = document.getElementById("portfolio-grid");
  const gridContainer = document.getElementById("portfolio-grid-container");
  let currentFilter = "all";

  function setViewMode(mode) {
    const isFan = mode === "fan" || mode === "rail";
    if (viewRailBtn) {
      viewRailBtn.classList.toggle("is-active", isFan);
      viewRailBtn.setAttribute("aria-pressed", String(isFan));
    }
    if (viewGridBtn) {
      viewGridBtn.classList.toggle("is-active", !isFan);
      viewGridBtn.setAttribute("aria-pressed", String(!isFan));
    }
    if (fanWrap) fanWrap.hidden = !isFan;
    if (gridWrap) gridWrap.hidden = isFan;
    if (gridContainer) gridContainer.hidden = isFan;
    if (isFan) {
      initFanPosterCarousel(currentFilter, fanCarouselState.activeIndex || 0);
    }
  }

  if (gridContainer) {
    gridContainer.hidden = true;
  }

  if (viewRailBtn) {
    viewRailBtn.addEventListener("click", () => setViewMode("fan"));
  }
  if (viewGridBtn) {
    viewGridBtn.addEventListener("click", () => setViewMode("grid"));
  }

  function activateFilter(filterKey) {
    currentFilter = filterKey;
    tabs.forEach((t) => {
      const active = t.getAttribute("data-filter") === filterKey;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
    });
    initFanPosterCarousel(filterKey, 0);
    renderPortfolio(filterKey);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filterKey = tab.getAttribute("data-filter") || "all";
      activateFilter(filterKey);
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => activateFilter("all"));
  }

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (fanWrap && !fanWrap.hidden) {
        initFanPosterCarousel(currentFilter, fanCarouselState.activeIndex || 0);
      }
    }, 150);
  });

  initFanPosterCarousel("all", 0);
  renderPortfolio("all");
}

function prefillAndScrollToBrief(topicText) {
  const select = document.getElementById("inquiry-topic");
  const details = document.getElementById("project-details");
  const section = document.getElementById("brief-wa");

  if (select) {
    const matchingOption = Array.from(select.options).find((opt) => opt.value === topicText);
    if (matchingOption) {
      select.value = topicText;
    } else {
      select.value = "Custom Project / Kolaborasi Lainnya";
      if (details && !details.value.includes(topicText)) {
        details.value = `Topik: ${topicText}\n`;
      }
    }
  }

  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const nameInput = document.getElementById("client-name");
  if (nameInput) {
    setTimeout(() => nameInput.focus(), 300);
  }
}

function initDialogsAndTriggers() {
  const workDialog = document.getElementById("work-dialog");
  const closeWorkBtn = document.getElementById("close-work-dialog");
  const closeWorkSecondary = document.getElementById("dialog-close-secondary");
  const orderSimilarBtn = document.getElementById("dialog-order-similar");

  const spinStage = document.getElementById("dialog-spin-stage");
  const flipFrontBtn = document.getElementById("flip-front-btn");
  const flipBackBtn = document.getElementById("flip-back-btn");
  const flipArea = document.getElementById("dialog-flip-area");
  const frameMoulding = document.getElementById("dialog-frame-moulding");
  const frameMat = document.getElementById("dialog-frame-mat");

  function setCardFlipped(isBack) {
    if (spinStage) {
      spinStage.classList.toggle("is-flipped", isBack);
    }
    if (flipFrontBtn) {
      flipFrontBtn.classList.toggle("is-active", !isBack);
      flipFrontBtn.setAttribute("aria-pressed", String(!isBack));
    }
    if (flipBackBtn) {
      flipBackBtn.classList.toggle("is-active", isBack);
      flipBackBtn.setAttribute("aria-pressed", String(isBack));
    }
  }

  if (flipFrontBtn) {
    flipFrontBtn.addEventListener("click", () => setCardFlipped(false));
  }
  if (flipBackBtn) {
    flipBackBtn.addEventListener("click", () => setCardFlipped(true));
  }

  if (flipArea) {
    let startX = 0;
    let isPointerDown = false;
    flipArea.addEventListener("pointerdown", (e) => {
      startX = e.clientX;
      isPointerDown = true;
    });
    flipArea.addEventListener("pointerup", (e) => {
      if (!isPointerDown) return;
      isPointerDown = false;
      const diff = e.clientX - startX;
      if (Math.abs(diff) > 25) {
        const currentlyFlipped = spinStage ? spinStage.classList.contains("is-flipped") : false;
        setCardFlipped(!currentlyFlipped);
      }
    });
    flipArea.addEventListener("pointercancel", () => {
      isPointerDown = false;
    });
  }

  const productDialog = document.getElementById("product-dialog");
  const closeProductBtn = document.getElementById("close-product-dialog");
  const closeProductSecondary = document.getElementById("dialog-product-close-secondary");

  const DIGITAL_PRODUCTS_DATA = {
    vectonaru: {
      code: "SKN-PRD-01 // PRODUCTION",
      category: "VECTOR & STOCK TOOL",
      name: "Vectonaru",
      price: "Rp 149.000",
      desc: "Aplikasi desktop untuk convert gambar raster ke vektor bersih dan menyusun metadata judul serta kata kunci CSV microstock secara otomatis.",
      features: [
        "Konversi raster ke format vektor EPS dan SVG bersih siap submit microstock.",
        "Kurva presisi dan pemisahan warna otomatis tanpa anchor point berlebih.",
        "Ekspor metadata CSV judul & keyword microstock sekali klik.",
        "Mendukung konversi satuan gambar maupun mode pemrosesan batch banyak file sekaligus.",
        "Lisensi permanen (lifetime) tanpa biaya langganan bulanan."
      ],
      waUrl: `https://wa.me/${STUDIO_WA_NUMBER}?text=` + encodeURIComponent("Halo Sukunaru Studio, saya ingin membeli lisensi resmi produk digital *Vectonaru* (Rp 149.000). Mohon info langkah aktivasi dan pembayarannya.")
    },
    filterstudio: {
      code: "SKN-PRD-02 // STUDIO EDITION",
      category: "PRINT & HALFTONE",
      name: "Sukunaru Filter Studio",
      price: "Rp 129.000",
      desc: "Aplikasi olah tekstur cetak untuk memberi efek risograph, titik raster halftone, dan grain poster otentik pada artwork grafis.",
      features: [
        "Simulasi raster halftone & riso grain real-time dengan sudut dan frekuensi titik presisi.",
        "Koleksi preset tekstur poster khas Sukunaru Studio siap pakai.",
        "Ekspor gambar resolusi ultra-tinggi siap cetak (300 DPI CMYK) maupun web.",
        "Pemrosesan instan tanpa beban render berat seperti pada plugin konvensional.",
        "Lisensi permanen (lifetime) untuk penggunaan komersial maupun personal."
      ],
      waUrl: `https://wa.me/${STUDIO_WA_NUMBER}?text=` + encodeURIComponent("Halo Sukunaru Studio, saya ingin membeli lisensi resmi produk digital *Sukunaru Filter Studio* (Rp 129.000). Mohon info langkah aktivasi dan pembayarannya.")
    }
  };

  function openProductModal(key) {
    if (!productDialog) return;
    const data = DIGITAL_PRODUCTS_DATA[key] || DIGITAL_PRODUCTS_DATA.vectonaru;

    const codeEl = document.getElementById("dialog-product-code");
    const catEl = document.getElementById("dialog-product-category");
    const priceEl = document.getElementById("dialog-product-price");
    const titleEl = document.getElementById("dialog-product-title");
    const descEl = document.getElementById("dialog-product-desc");
    const featuresEl = document.getElementById("dialog-product-features");
    const waLinkEl = document.getElementById("dialog-product-wa-link");

    if (codeEl) codeEl.textContent = data.code;
    if (catEl) catEl.textContent = data.category;
    if (priceEl) priceEl.textContent = data.price;
    if (titleEl) titleEl.textContent = data.name;
    if (descEl) descEl.textContent = data.desc;
    if (featuresEl) {
      featuresEl.innerHTML = data.features.map((f) => `<li>${f}</li>`).join("");
    }
    if (waLinkEl) {
      waLinkEl.href = data.waUrl;
    }

    productDialog.showModal();
  }

  const legalDialog = document.getElementById("legal-dialog");
  const closeLegalBtn = document.getElementById("close-legal-dialog");
  const closeLegalSecondary = document.getElementById("close-legal-secondary");

  const LEGAL_CONTENTS = {
    terms: {
      code: "LEGAL // 01",
      category: "LEGAL & LISENSI KARYA",
      title: "Ketentuan Lisensi & Hak Cipta",
      content: `
        <h4>1. Komisi Desain Kustom (Poster &amp; Feeds)</h4>
        <p>Klien yang memesan layanan desain (poster cetak, feed media sosial, key visual) memperoleh <strong>Hak Guna Komersial Penuh (Full Commercial Usage Rights)</strong> atas hasil akhir desain yang disepakati untuk keperluan promosi, cetak merchandise, pameran, maupun kampanye digital tanpa batas waktu.</p>
        <p>Sukunaru Studio tetap memegang hak moral kepengarangan dan hak untuk menampilkan karya tersebut dalam portofolio studio, arsip cetak fisik, dan publikasi media resmi studio.</p>
        <h4>2. Software Kreator (Vectonaru &amp; Filter Studio)</h4>
        <p>Lisensi perangkat lunak Vectonaru dan Sukunaru Filter Studio diberikan per pembeli/lisensi resmi. Pengguna berhak mempergunakan aset visual atau vektor yang dihasilkan oleh aplikasi untuk keperluan personal maupun komersial tanpa royalti tambahan.</p>
        <p>Dilarang keras menyalin kode program, mendekompilasi, mendistribusikan ulang (re-distribute), atau menjual kembali installer aplikasi tanpa izin tertulis resmi dari Sukunaru Studio.</p>
      `
    },
    privacy: {
      code: "PRIVACY // 02",
      category: "KEBIJAKAN PRIVASI",
      title: "Kebijakan Privasi & Nol Pelacak",
      content: `
        <h4>1. Prinsip Zero-Tracking &amp; Tanpa Cookie Pihak Ketiga</h4>
        <p>Website Sukunaru Studio dibangun dengan prinsip integritas privasi tinggi. Kami <strong>tidak menggunakan cookie pelacak pihak ketiga</strong>, skrip telemetri intrusif, maupun pixel iklan pengumpul data pengguna.</p>
        <h4>2. Komunikasi Langsung via WhatsApp Resmi</h4>
        <p>Seluruh interaksi, pengiriman brief proyek, dan konsultasi dilakukan secara transparan dan terenkripsi langsung melalui nomor resmi WhatsApp Sukunaru Studio (+62 895 1920 3345).</p>
        <h4>3. Keamanan Data &amp; Kerahasiaan Klien</h4>
        <p>Materi, file referensi gambar, maupun identitas yang Anda kirimkan untuk pengerjaan proyek dijaga kerahasiaannya dan tidak akan pernah dibagikan atau diperjualbelikan kepada pihak ketiga manapun.</p>
      `
    },
    credits: {
      code: "SPEC // 03",
      category: "KREDIT & TEKNOLOGI",
      title: "Kredit Tipografi & Spesifikasi Rekayasa",
      content: `
        <h4>1. Identitas &amp; Desain Grafis Studio</h4>
        <p>Konseptualisasi, sistem visual editorial, arsitektur tata letak, dan grafis poster orisinal dirancang secara independen oleh <strong>Sukunaru Studio</strong> dengan disiplin Swiss Print Graphic &amp; Precision Creative Engineering.</p>
        <h4>2. Lisensi Tipografi Resmi</h4>
        <ul>
          <li><strong>Plus Jakarta Sans</strong> &mdash; Didesain oleh Gumpita Rahayu / Tokotype (SIL Open Font License). Digunakan sebagai tipografi body, navigasi, dan antarmuka.</li>
          <li><strong>Instrument Serif</strong> &mdash; Didesain oleh Instrument Studio (SIL Open Font License). Digunakan sebagai aksen editorial dan headline judul studio.</li>
          <li><strong>JetBrains Mono</strong> &mdash; Didesain oleh JetBrains Team (SIL Open Font License). Digunakan untuk spesifikasi cetak teknis, dimensi DPI, dan registrasi artboard.</li>
        </ul>
        <h4>3. Standar Rekayasa Web Murni</h4>
        <p>Dikembangkan dengan HTML5 Semantik, CSS Modern Grid/Flexbox dengan variabel warna berstandar WCAG 2.1 AA/AAA, serta Vanilla JavaScript murni tanpa runtime framework berat untuk performa kilat dan keandalan maksimal.</p>
      `
    }
  };

  let activeWorkTopic = "";

  openWorkModal = function(workId) {
    window.openWorkModal = openWorkModal;
    if (!workDialog) return;
    const found = PORTFOLIO_WORKS.find((item) => item.id === workId);
    if (!found) return;

    const codeEl = document.getElementById("dialog-work-code");
    if (codeEl) codeEl.textContent = found.id;
    const catEl = document.getElementById("dialog-work-category");
    if (catEl) catEl.textContent = found.categoryLabel;
    const titleEl = document.getElementById("dialog-work-title");
    if (titleEl) titleEl.textContent = found.title;
    const descEl = document.getElementById("dialog-work-desc");
    if (descEl) descEl.textContent = found.summary;
    const imgEl = document.getElementById("dialog-work-image");
    if (imgEl) {
      imgEl.src = found.image;
      imgEl.alt = found.title;
    }

    if (frameMoulding) {
      frameMoulding.setAttribute("data-frame", found.frame || "black");
    }
    if (frameMat) {
      if (found.mat === false) {
        frameMat.style.padding = "0px";
      } else {
        frameMat.style.padding = "";
      }
    }

    const labelTitle = document.getElementById("dialog-label-title");
    const labelEdition = document.getElementById("dialog-label-edition");
    const labelDetails = document.getElementById("dialog-label-details");

    if (labelTitle) labelTitle.textContent = found.title;
    if (labelEdition) labelEdition.textContent = found.tag ? `${found.tag} • ARCHIVE ED.` : "STUDIO ARCHIVE";
    if (labelDetails) {
      const detailsList = found.details || found.specs || [];
      labelDetails.innerHTML = detailsList.map((d) => `<li>${d}</li>`).join("");
    }

    if (typeof setCardFlipped === "function") {
      setCardFlipped(false);
    }

    const specsEl = document.getElementById("dialog-work-specs");
    if (specsEl) {
      specsEl.innerHTML = (found.specs || [])
        .map((s) => `<span class="spec-chip">${s}</span>`)
        .join("");
    }
    activeWorkTopic =
      found.category === "poster"
        ? "Paket Jasa: Key Visual & Event Poster Print"
        : "Paket Jasa: Sukunaru Feed Starter Pack";
    workDialog.showModal();
  }

  document.addEventListener("click", (event) => {
    const workBtn = event.target.closest("[data-work-id]");
    if (workBtn && workDialog) {
      openWorkModal(workBtn.getAttribute("data-work-id"));
      return;
    }

    const briefBtn = event.target.closest("[data-open-brief]");
    if (briefBtn) {
      const topic = briefBtn.getAttribute("data-open-brief");
      prefillAndScrollToBrief(topic);
      return;
    }

    // If clicking directly on buy button, let link navigate to WhatsApp
    const directBuyBtn = event.target.closest("[data-direct-buy]");
    if (directBuyBtn) {
      return;
    }

    // If clicking on product card, open product detail popup
    const productCard = event.target.closest("[data-product-key]");
    if (productCard) {
      event.preventDefault();
      const key = productCard.getAttribute("data-product-key");
      openProductModal(key);
      return;
    }

    const directProductBtn = event.target.closest("[data-direct-product]");
    if (directProductBtn && productDialog) {
      event.preventDefault();
      const productName = directProductBtn.getAttribute("data-direct-product") || "";
      const key = productName.toLowerCase().includes("filter") ? "filterstudio" : "vectonaru";
      openProductModal(key);
      return;
    }

    const legalTriggerBtn = event.target.closest("[data-legal-trigger]");
    if (legalTriggerBtn && legalDialog) {
      event.preventDefault();
      const type = legalTriggerBtn.getAttribute("data-legal-trigger");
      const info = LEGAL_CONTENTS[type] || LEGAL_CONTENTS.terms;
      const codeEl = document.getElementById("dialog-legal-code");
      const catEl = document.getElementById("dialog-legal-category");
      const titleEl = document.getElementById("dialog-legal-title");
      const contentEl = document.getElementById("dialog-legal-content");

      if (codeEl) codeEl.textContent = info.code;
      if (catEl) catEl.textContent = info.category;
      if (titleEl) titleEl.textContent = info.title;
      if (contentEl) contentEl.innerHTML = info.content;

      legalDialog.showModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      const productCard = event.target.closest("[data-product-key]");
      if (productCard && !event.target.closest("a, button")) {
        event.preventDefault();
        const key = productCard.getAttribute("data-product-key");
        openProductModal(key);
        return;
      }

      const workCanvas = event.target.closest(".work-canvas[data-work-id]");
      if (workCanvas) {
        event.preventDefault();
        openWorkModal(workCanvas.getAttribute("data-work-id"));
      }
    }
  });

  if (orderSimilarBtn && workDialog) {
    orderSimilarBtn.addEventListener("click", () => {
      workDialog.close();
      prefillAndScrollToBrief(activeWorkTopic);
    });
  }

  [closeWorkBtn, closeWorkSecondary].forEach((btn) => {
    if (btn && workDialog) {
      btn.addEventListener("click", () => workDialog.close());
    }
  });

  [closeProductBtn, closeProductSecondary].forEach((btn) => {
    if (btn && productDialog) {
      btn.addEventListener("click", () => productDialog.close());
    }
  });

  [closeLegalBtn, closeLegalSecondary].forEach((btn) => {
    if (btn && legalDialog) {
      btn.addEventListener("click", () => legalDialog.close());
    }
  });

  [productDialog, legalDialog].forEach((dialogEl) => {
    if (!dialogEl) return;
    dialogEl.addEventListener("click", (event) => {
      const rect = dialogEl.getBoundingClientRect();
      const isInDialog = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        dialogEl.close();
      }
    });
  });
}

function initBriefForm() {
  const form = document.getElementById("wa-brief-form");
  if (!form) return;

  const nameInput = document.getElementById("client-name");
  const topicInput = document.getElementById("inquiry-topic");
  const detailsInput = document.getElementById("project-details");

  const errName = document.getElementById("error-client-name");
  const errTopic = document.getElementById("error-inquiry-topic");
  const errDetails = document.getElementById("error-project-details");
  const feedback = document.getElementById("form-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    errName.hidden = true;
    errTopic.hidden = true;
    errDetails.hidden = true;
    feedback.hidden = true;

    let hasError = false;

    if (!nameInput.value.trim()) {
      errName.textContent = "Mohon isi nama Anda atau nama brand terlebih dahulu.";
      errName.hidden = false;
      hasError = true;
    }

    if (!topicInput.value.trim()) {
      errTopic.textContent = "Pilih salah satu layanan desain atau produk digital yang ingin ditanyakan.";
      errTopic.hidden = false;
      hasError = true;
    }

    if (!detailsInput.value.trim()) {
      errDetails.textContent = "Tuliskan gambaran singkat kebutuhan atau pertanyaan Anda.";
      errDetails.hidden = false;
      hasError = true;
    }

    if (hasError) return;

    const compiledText = [
      `Halo Sukunaru Studio, saya *${nameInput.value.trim()}*.`,
      `Saya ingin berdiskusi mengenai: *${topicInput.value.trim()}*.`,
      `Rincian kebutuhan: ${detailsInput.value.trim()}`
    ].join("\n\n");

    const waUrl = `https://wa.me/${STUDIO_WA_NUMBER}?text=${encodeURIComponent(compiledText)}`;

    feedback.innerHTML = `Format pesan WhatsApp siap dikirim untuk <strong>${nameInput.value.trim()}</strong>. Membuka WhatsApp... <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;font-weight:700;">Klik di sini jika WhatsApp belum terbuka</a>.`;
    feedback.hidden = false;

    window.open(waUrl, "_blank", "noopener,noreferrer");
  });
}

function initInteractiveBackgroundAndCursor() {
  const canvas = document.getElementById("halftone-canvas");
  const cursorEl = document.getElementById("studio-cursor");
  const coordsEl = document.getElementById("cursor-coords");
  if (!canvas) return;

  const canUseFinePointer = window.matchMedia("(pointer: fine)").matches;
  const ctx = canvas.getContext("2d", { alpha: true });
  const offscreenCanvas = document.createElement("canvas");
  const offscreenCtx = offscreenCanvas.getContext("2d");

  let width = 0;
  let height = 0;
  let lastWidth = 0;
  let dpr = 1;
  let fadeTimer = null;

  const pointer = {
    x: -1000,
    y: -1000,
    smoothX: -1000,
    smoothY: -1000,
    strength: 0,
    targetStrength: 0,
    isTouchMode: false,
    active: false,
    rafPending: false
  };

  function getGridConfig() {
    const isCompact = width < 720;
    return {
      spacing: isCompact ? 34 : 36,
      influenceRadius: isCompact ? 120 : 160
    };
  }

  function buildStaticGridBuffer() {
    offscreenCanvas.width = canvas.width;
    offscreenCanvas.height = canvas.height;
    offscreenCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    offscreenCtx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const baseDotColor = isLight ? "rgba(17, 17, 17, 0.14)" : "rgba(245, 242, 235, 0.11)";
    const { spacing } = getGridConfig();

    offscreenCtx.fillStyle = baseDotColor;
    offscreenCtx.beginPath();
    for (let x = spacing / 2; x < width; x += spacing) {
      for (let y = spacing / 2; y < height; y += spacing) {
        offscreenCtx.moveTo(x + 1.15, y);
        offscreenCtx.arc(x, y, 1.15, 0, Math.PI * 2);
      }
    }
    offscreenCtx.fill();
  }

  function resizeCanvas(forceRebuild) {
    const newWidth = window.innerWidth;
    const newHeight = Math.max(window.innerHeight, document.documentElement.clientHeight || 0);

    // Ignore minor vertical URL-bar resize jumps during mobile scroll
    if (!forceRebuild && newWidth === lastWidth && Math.abs(newHeight - height) < 140) {
      return;
    }

    lastWidth = newWidth;
    width = newWidth;
    height = newHeight;
    dpr = width < 720 ? 1 : Math.min(window.devicePixelRatio || 1, 1.75);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    buildStaticGridBuffer();
    scheduleFrame();
  }

  function renderFrame() {
    pointer.rafPending = false;

    const lerpSpeed = pointer.isTouchMode ? 0.42 : 0.25;
    const fadeSpeed = pointer.isTouchMode
      ? pointer.targetStrength === 0
        ? 0.34
        : 0.38
      : 0.16;

    const dxCursor = pointer.x - pointer.smoothX;
    const dyCursor = pointer.y - pointer.smoothY;
    pointer.smoothX += dxCursor * lerpSpeed;
    pointer.smoothY += dyCursor * lerpSpeed;
    pointer.strength += (pointer.targetStrength - pointer.strength) * fadeSpeed;

    if (canUseFinePointer && !pointer.isTouchMode && width > 768 && cursorEl && pointer.active) {
      const halfSize = cursorEl.classList.contains("is-interactive") ? 26 : 17;
      cursorEl.style.transform = `translate3d(${(pointer.smoothX - halfSize).toFixed(1)}px, ${(pointer.smoothY - halfSize).toFixed(1)}px, 0)`;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(offscreenCanvas, 0, 0, width, height);

    if (pointer.strength > 0.015) {
      const { spacing, influenceRadius } = getGridConfig();
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const bgEraser = isLight ? "#F5F2EB" : "#0C0C0C";

      const startX = Math.max(
        spacing / 2,
        Math.floor((pointer.smoothX - influenceRadius) / spacing) * spacing + spacing / 2
      );
      const endX = Math.min(width, pointer.smoothX + influenceRadius);
      const startY = Math.max(
        spacing / 2,
        Math.floor((pointer.smoothY - influenceRadius) / spacing) * spacing + spacing / 2
      );
      const endY = Math.min(height, pointer.smoothY + influenceRadius);

      for (let x = startX; x <= endX; x += spacing) {
        for (let y = startY; y <= endY; y += spacing) {
          const dx = x - pointer.smoothX;
          const dy = y - pointer.smoothY;
          const dist = Math.hypot(dx, dy);

          if (dist < influenceRadius) {
            const factor = (1 - dist / influenceRadius) * pointer.strength;
            const push = factor * 10;
            const angle = Math.atan2(dy, dx);
            const drawX = x + Math.cos(angle) * push;
            const drawY = y + Math.sin(angle) * push;
            const radius = 1.2 + factor * 3.1;

            ctx.fillStyle = bgEraser;
            ctx.fillRect(x - 2, y - 2, 4, 4);

            ctx.beginPath();
            ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 142, 0, ${(0.28 + factor * 0.65).toFixed(2)})`;
            ctx.fill();
          }
        }
      }
    } else {
      pointer.strength = 0;
    }

    const stillMoving = Math.abs(dxCursor) > 0.45 || Math.abs(dyCursor) > 0.45;
    const stillFading = Math.abs(pointer.targetStrength - pointer.strength) > 0.015;

    if ((pointer.active && stillMoving) || stillFading) {
      scheduleFrame();
    }
  }

  function scheduleFrame() {
    if (!pointer.rafPending) {
      pointer.rafPending = true;
      requestAnimationFrame(renderFrame);
    }
  }

  function activatePoint(clientX, clientY, isTouch) {
    if (fadeTimer) {
      clearTimeout(fadeTimer);
      fadeTimer = null;
    }
    pointer.isTouchMode = Boolean(isTouch);
    pointer.x = clientX;
    pointer.y = clientY;
    if (!pointer.active || pointer.strength < 0.08 || isTouch) {
      pointer.smoothX = clientX;
      pointer.smoothY = clientY;
    }
    pointer.active = true;
    pointer.targetStrength = 1;
    scheduleFrame();

    if (isTouch) {
      // Auto-hide quickly on mobile if finger holds still or finishes scrolling
      fadeTimer = setTimeout(() => {
        pointer.active = false;
        pointer.targetStrength = 0;
        scheduleFrame();
      }, 130);
    }
  }

  function releasePoint(delayMs) {
    if (fadeTimer) clearTimeout(fadeTimer);
    if (delayMs <= 0) {
      pointer.active = false;
      pointer.targetStrength = 0;
      scheduleFrame();
      return;
    }
    fadeTimer = setTimeout(() => {
      pointer.active = false;
      pointer.targetStrength = 0;
      scheduleFrame();
    }, delayMs);
  }

  window.addEventListener(
    "pointermove",
    (event) => {
      const isTouch = event.pointerType === "touch";
      activatePoint(event.clientX, event.clientY, isTouch);

      if (isTouch && cursorEl) {
      cursorEl.classList.remove("is-visible");
    }
    if (!isTouch && canUseFinePointer && width > 768 && cursorEl) {
        cursorEl.classList.add("is-visible");
        if (coordsEl) {
          coordsEl.textContent = `X:${Math.round(event.clientX)} Y:${Math.round(event.clientY)}`;
        }
        const interactiveTarget = event.target.closest("a, button, input, select, textarea, .work-piece, .flagship-item");
        cursorEl.classList.toggle("is-interactive", Boolean(interactiveTarget));
      }
    },
    { passive: true }
  );

  window.addEventListener(
    "pointerdown",
    (event) => {
      activatePoint(event.clientX, event.clientY, event.pointerType === "touch");
    },
    { passive: true }
  );

  window.addEventListener(
    "pointerup",
    (event) => {
      if (event.pointerType === "touch") {
        releasePoint(0);
      }
    },
    { passive: true }
  );

  window.addEventListener(
    "touchstart",
    (event) => {
      if (event.touches && event.touches.length > 0) {
        activatePoint(event.touches[0].clientX, event.touches[0].clientY, true);
      }
    },
    { passive: true }
  );

  window.addEventListener(
    "touchmove",
    (event) => {
      if (event.touches && event.touches.length > 0) {
        activatePoint(event.touches[0].clientX, event.touches[0].clientY, true);
      }
    },
    { passive: true }
  );

  window.addEventListener(
    "touchend",
    () => {
      releasePoint(0);
    },
    { passive: true }
  );

  window.addEventListener(
    "touchcancel",
    () => {
      releasePoint(0);
    },
    { passive: true }
  );

  document.addEventListener("mouseleave", () => {
    releasePoint(60);
    if (cursorEl) {
      cursorEl.classList.remove("is-visible");
    }
  });

  window.addEventListener("resize", () => resizeCanvas(false));

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      setTimeout(() => {
        buildStaticGridBuffer();
        scheduleFrame();
      }, 20);
    });
  }

  resizeCanvas(true);
}

function initScrollToTop() {
  const brandLinks = document.querySelectorAll(
    ".brand-mark, .footer-brand-link, #footer-back-to-top, .back-to-top-button"
  );

  brandLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });

      // Close mobile navigation drawer if open
      const nav = document.getElementById("primary-nav");
      const menuBtn = document.getElementById("mobile-menu-btn");
      if (nav && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        if (menuBtn) {
          menuBtn.setAttribute("aria-expanded", "false");
          menuBtn.classList.remove("is-active");
          const menuText = menuBtn.querySelector(".menu-btn-text");
          if (menuText) menuText.textContent = "Menu";
        }
      }

      // Reset URL hash to top
      if (window.location.hash) {
        history.pushState(null, "", window.location.pathname + window.location.search);
      }
    });
  });
}

function initScrollReveal() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || !("IntersectionObserver" in window)) {
    return;
  }

  document.documentElement.classList.add("scroll-reveal-init");

  let revealQueue = [];
  let queueTimer = null;

  function processQueue() {
    if (revealQueue.length === 0) return;

    // Sort queue by document order to guarantee top-to-bottom / left-to-right stagger
    revealQueue.sort((a, b) => {
      return (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) ? -1 : 1;
    });

    const currentBatch = [...revealQueue];
    revealQueue = [];
    queueTimer = null;

    currentBatch.forEach((el, index) => {
      const delaySeconds = index * 0.12;
      revealElement(el, delaySeconds);
    });
  }

  function revealElement(el, delaySeconds) {
    el.style.setProperty("--reveal-delay", `${delaySeconds.toFixed(2)}s`);

    requestAnimationFrame(() => {
      el.classList.add("is-revealing");
    });

    let settled = false;
    const settle = () => {
      if (settled) return;
      settled = true;
      el.classList.remove("scroll-reveal-item", "is-revealing");
      el.classList.add("reveal-settled");
      el.style.removeProperty("--reveal-delay");
      el.style.willChange = "";
    };

    el.addEventListener(
      "transitionend",
      (e) => {
        if (e.target === el && (e.propertyName === "opacity" || e.propertyName === "transform")) {
          settle();
        }
      },
      { once: true }
    );

    // Safety fallback timer: 0.6s animation duration + delay + 100ms buffer
    setTimeout(settle, (delaySeconds + 0.6) * 1000 + 100);
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      let hasNew = false;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          obs.unobserve(entry.target);
          revealQueue.push(entry.target);
          hasNew = true;
        }
      });

      if (hasNew) {
        if (queueTimer) clearTimeout(queueTimer);
        queueTimer = setTimeout(processQueue, 35);
      }
    },
    {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.08
    }
  );

  function observeElements(elements) {
    if (!elements) return;
    elements.forEach((el) => {
      if (
        el &&
        el.nodeType === 1 &&
        !el.classList.contains("reveal-settled") &&
        !el.classList.contains("is-revealing")
      ) {
        observer.observe(el);
      }
    });
  }

  window.registerScrollRevealItems = observeElements;

  // Initial observation of all items marked with .scroll-reveal-item
  const initialItems = document.querySelectorAll(".scroll-reveal-item");
  observeElements(initialItems);
}

function initCopyrightYear() {
  const currentYearEl = document.getElementById("current-year");
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initScrollToTop();
  initCopyrightYear();
  initMobileMenu();
  initProductStateControls();
  initDialogsAndTriggers();
  initPortfolioControls();
  initBriefForm();
  initInteractiveBackgroundAndCursor();
  initScrollReveal();
});
