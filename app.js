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
    specs: ["Rasio 4:5 (1080x1350)", "CMYK & RGB Ready", "Sports Key Visual"]
  },
  {
    id: "SKN-02",
    category: "poster",
    categoryLabel: "AUTOMOTIVE PRINT POSTER",
    spanClass: "span-4",
    image: "assets/works/lamborghini-svj.jpg",
    title: "Lamborghini Aventador SVJ Roadster",
    summary: "Desain poster otomotif dengan pemenggalan panel triptych vertikal di atas kanvas kuning Giallo Orion untuk menonjolkan siluet aerodinamika V12.",
    specs: ["Format A3/A2", "300 DPI Print", "Automotive Series"]
  },
  {
    id: "SKN-03",
    category: "poster",
    categoryLabel: "AUTOMOTIVE SPEC SHEET",
    spanClass: "span-4",
    image: "assets/works/huracan-evo.jpg",
    title: "Lamborghini Huracán EVO: V10 Technical Sheet",
    summary: "Eksplorasi tata letak lembar spesifikasi otomotif dengan tiga sudut pandang sinematik, tipografi outline tegas, dan data performa terstruktur.",
    specs: ["Format A3/A2", "300 DPI Print", "Editorial Grid"]
  },
  {
    id: "SKN-04",
    category: "poster",
    categoryLabel: "BOTANICAL TYPOGRAPHY",
    spanClass: "span-4",
    image: "assets/works/sakura-spring.jpg",
    title: "Sakura (散る花の哲学): Ephemeral Spring",
    summary: "Perpaduan tipografi display Jepang-Inggris, potongan objek kelopak sakura berlapis, dan tata letak teks terbelah yang mengelilingi subjek.",
    specs: ["Poster No. 03", "Mixed Typography", "Print & Exhibition"]
  },
  {
    id: "SKN-05",
    category: "poster",
    categoryLabel: "BOTANICAL TYPOGRAPHY",
    spanClass: "span-4",
    image: "assets/works/lavender-botanical.jpg",
    title: "Hana Shizen (花自然): Lavender Essence",
    summary: "Studi kontras warna ungu-kuning dengan komposisi fotografi botani yang menembus bingkai horizon dan tipografi kanji berkarakter tebal.",
    specs: ["Poster No. 03B", "Botanical Series", "Print & Exhibition"]
  },
  {
    id: "SKN-06",
    category: "poster",
    categoryLabel: "HALFTONE PRINT EDITION",
    spanClass: "span-4",
    image: "assets/works/always-believe-halftone.jpg",
    title: "Always Believe: Green Raster Halftone Portrait",
    summary: "Pengolahan potret menjadi matriks titik raster halftone hijau zamrud di atas tekstur kertas hangat menggunakan teknik Sukunaru Filter Studio.",
    specs: ["Halftone Raster", "Risograph Style", "A3 Print"]
  },
  {
    id: "SKN-07",
    category: "socmed",
    categoryLabel: "CONCEPTUAL SOCIAL VISUAL",
    spanClass: "span-4",
    image: "assets/works/clarity-focus.jpg",
    title: "Clarity Over Noise: Bounding-Box Visual",
    summary: "Visual kampanye media sosial bertema fokus kreatif dengan teknik directional motion blur, grain tekstur, dan penanda seleksi vektor.",
    specs: ["Social Campaign", "Motion Blur & Grain", "High-Engagement Post"]
  },
  {
    id: "SKN-08",
    category: "socmed",
    categoryLabel: "EDITORIAL FEED VISUAL",
    spanClass: "span-4",
    image: "assets/works/find-your-focus.jpg",
    title: "Pause, Breathe, Aim: Find Your Focus",
    summary: "Konten visual reflektif dengan permainan kedalaman bidang (depth-of-field), bingkai bidik minimalis, dan kontras tipografi serif.",
    specs: ["Instagram & Pinterest", "Editorial Portrait", "Color Graded"]
  },
  {
    id: "SKN-09",
    category: "socmed",
    categoryLabel: "HALFTONE & GLOW SERIES",
    spanClass: "span-4",
    image: "assets/works/presence-stillness.jpg",
    title: "Presence in Stillness: Luminous Silhouette",
    summary: "Eksperimen tekstur dot-matrix pada langit gradien biru dengan siluet subjek bercahaya untuk konten visual penceritaan (visual storytelling).",
    specs: ["Poster No. 07", "Dot-Matrix Sky", "Visual Storytelling"]
  },
  {
    id: "SKN-10",
    category: "socmed",
    categoryLabel: "ARCHIVE ZINE VISUAL",
    spanClass: "span-4",
    image: "assets/works/stillness-reflection.jpg",
    title: "Stillness Reflection: Vintage Paper Grain",
    summary: "Desain konten bergaya sampul zine dengan tekstur kertas distress, indeks metadata di bagian kop, dan efek masking tipografi pada lanskap.",
    specs: ["Poster No. 02", "Paper Texture", "Zine Aesthetic"]
  },
  {
    id: "SKN-11",
    category: "socmed",
    categoryLabel: "OUTDOOR VISUAL STORY",
    spanClass: "span-4",
    image: "assets/works/back-to-nature.jpg",
    title: "Back to Nature: Misty Highlands Edition",
    summary: "Komposisi visual petualangan dengan tipografi putih yang menyatu di balik kabut pegunungan, dilengkapi elemen kode batang edisi.",
    specs: ["Rasio 4:5 Feed", "Atmospheric Grade", "Series No. 002"]
  },
  {
    id: "SKN-12",
    category: "socmed",
    categoryLabel: "CONCEPTUAL SERIES",
    spanClass: "span-4",
    image: "assets/works/embrace-the-light.jpg",
    title: "Embrace The Light: Twilight Dock Series",
    summary: "Seri penutup kampanye visual dengan kontras siluet cahaya di dermaga senja dan tipografi serif berpendar lembut.",
    specs: ["Series No. 05", "Conceptual Art", "Social & Print"]
  }
];

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
      <article class="work-piece ${work.spanClass}">
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

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
}

function initProductStateControls() {
  const stateButtons = document.querySelectorAll("[data-product-state]");
  const content = document.getElementById("products-content");
  const loadingBox = document.getElementById("products-state-loading");
  const errorBox = document.getElementById("products-state-error");

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

  function activateFilter(filterKey) {
    tabs.forEach((t) => {
      const active = t.getAttribute("data-filter") === filterKey;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
    });
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

  const productDialog = document.getElementById("product-dialog");
  const closeProductBtn = document.getElementById("close-product-dialog");
  const closeProductSecondary = document.getElementById("dialog-product-close-secondary");

  let activeWorkTopic = "";

  function openWorkModal(workId) {
    if (!workDialog) return;
    const found = PORTFOLIO_WORKS.find((item) => item.id === workId);
    if (!found) return;

    document.getElementById("dialog-work-code").textContent = found.id;
    document.getElementById("dialog-work-category").textContent = found.categoryLabel;
    document.getElementById("dialog-work-title").textContent = found.title;
    document.getElementById("dialog-work-desc").textContent = found.summary;
    const imgEl = document.getElementById("dialog-work-image");
    if (imgEl) {
      imgEl.src = found.image;
      imgEl.alt = found.title;
    }
    document.getElementById("dialog-work-specs").innerHTML = found.specs
      .map((s) => `<span class="spec-chip">${s}</span>`)
      .join("");
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

    const directProductBtn = event.target.closest("[data-direct-product]");
    if (directProductBtn && productDialog) {
      event.preventDefault();
      const productName = directProductBtn.getAttribute("data-direct-product");
      document.getElementById("dialog-product-title").textContent = productName;
      document.getElementById("dialog-product-url-chip").textContent = `Official License • Direct WhatsApp Checkout`;
      const waMsg = encodeURIComponent(
        `Halo Sukunaru Studio, saya ingin membeli lisensi produk digital *${productName}*. Mohon info langkah pembayarannya.`
      );
      document.getElementById("dialog-product-wa-link").href = `https://wa.me/${STUDIO_WA_NUMBER}?text=${waMsg}`;
      productDialog.showModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
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

    if (canUseFinePointer && !pointer.isTouchMode && cursorEl && pointer.active) {
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

      if (!isTouch && canUseFinePointer && cursorEl) {
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

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileMenu();
  initProductStateControls();
  initPortfolioControls();
  initDialogsAndTriggers();
  initBriefForm();
  initInteractiveBackgroundAndCursor();
});
