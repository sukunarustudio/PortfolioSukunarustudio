const STUDIO_WA_NUMBER = "6281200000000";

const PORTFOLIO_WORKS = [
  {
    id: "WRK-01",
    category: "poster",
    categoryLabel: "POSTER DESIGN PRINT",
    spanClass: "span-poster",
    title: "Nocturnal Sound Fest: Key Visual Poster",
    summary: "Poster cetak ukuran A2 untuk pertunjukan musik independen dengan komposisi tipografi vertikal dan separasi warna risograph.",
    specs: ["A2 (420x594mm)", "CMYK 300 DPI", "[PLACEHOLDER KARYA ASLI]"],
    svgLabel: "POSTER A2 / NOCTURNAL SOUND"
  },
  {
    id: "WRK-02",
    category: "socmed",
    categoryLabel: "SOCIAL MEDIA DESIGN",
    spanClass: "span-socmed",
    title: "Kopi Bara: 30-Day Modular Feed System",
    summary: "Perancangan ulang tata letak feed Instagram dan sistem carousel produk agar pengumuman menu baru tetap terbaca jelas di layar ponsel.",
    specs: ["27 Feed Posts", "Rasio 4:5 (1080x1350px)", "[PLACEHOLDER KARYA ASLI]"],
    svgLabel: "SOCIAL GRID 4:5 / KOPI BARA"
  },
  {
    id: "WRK-03",
    category: "socmed",
    categoryLabel: "SOCIAL MEDIA DESIGN",
    spanClass: "span-socmed",
    title: "TechTalks ID: Educational Carousel Identity",
    summary: "Template dan eksekusi desain microblog carousel 5-slide dengan hierarki tipografi tegas untuk meningkatkan simpanan konten.",
    specs: ["Carousel 5 Slide", "Source PSD & Figma", "[PLACEHOLDER KARYA ASLI]"],
    svgLabel: "CAROUSEL SYSTEM / TECHTALKS"
  },
  {
    id: "WRK-04",
    category: "poster",
    categoryLabel: "POSTER DESIGN PRINT",
    spanClass: "span-poster",
    title: "Monolith Streetwear: Capsule Drop Print Poster",
    summary: "Poster fisik edisi rilis pakaian dan selebaran lipat dalam kemasan dengan efek halftone dari Sukunaru Filter Studio.",
    specs: ["A3 Print + Insert", "Spot Orange Ink", "[PLACEHOLDER KARYA ASLI]"],
    svgLabel: "PRINT A3 / MONOLITH DROP"
  },
  {
    id: "WRK-05",
    category: "poster",
    categoryLabel: "POSTER DESIGN PRINT",
    spanClass: "span-half",
    title: "Pameran Garis & Ruang: Triptych Poster Series",
    summary: "Seri tiga poster cetak untuk pameran desain grafis dengan sistem grid Swiss dan tanda registrasi cetak terbuka.",
    specs: ["Seri 3 Poster A2", "Print-Ready PDF", "[PLACEHOLDER KARYA ASLI]"],
    svgLabel: "TRIPTYCH SERIES / GARIS & RUANG"
  },
  {
    id: "WRK-06",
    category: "socmed",
    categoryLabel: "SOCIAL MEDIA DESIGN",
    spanClass: "span-half",
    title: "Sukunaru Visual Lab: Release Campaign Kit",
    summary: "Paket pengumuman peluncuran produk digital untuk feed, story, dan sampul sorotan profil studio.",
    specs: ["12 Feed + 6 Story", "RGB High-Res", "[PLACEHOLDER KARYA ASLI]"],
    svgLabel: "CAMPAIGN KIT / VISUAL LAB"
  }
];

function createWorkSvg(work) {
  const isPoster = work.category === "poster";
  return `
    <svg class="work-svg-preview" viewBox="0 0 480 260" role="img" aria-label="Placeholder karya ${work.title}">
      <rect x="6" y="6" width="468" height="248" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
      <line x1="6" y1="38" x2="474" y2="38" stroke="currentColor" stroke-width="1"/>
      <text x="18" y="26" font-family="JetBrains Mono, monospace" font-size="11" fill="currentColor">${work.id} // ${work.categoryLabel}</text>
      <text x="340" y="26" font-family="JetBrains Mono, monospace" font-size="11" fill="#FF8E00">[PLACEHOLDER KARYA]</text>
      ${
        isPoster
          ? `
            <rect x="165" y="54" width="150" height="184" fill="none" stroke="#FF8E00" stroke-width="2"/>
            <line x1="178" y1="80" x2="288" y2="80" stroke="currentColor" stroke-width="3"/>
            <line x1="178" y1="96" x2="260" y2="96" stroke="#FF8E00" stroke-width="3"/>
            <circle cx="240" cy="154" r="32" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <text x="178" y="222" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor">${work.svgLabel}</text>
          `
          : `
            <rect x="34" y="64" width="124" height="148" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <rect x="178" y="64" width="124" height="148" fill="none" stroke="#FF8E00" stroke-width="2"/>
            <rect x="322" y="64" width="124" height="148" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <text x="48" y="142" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor">SLIDE 01</text>
            <text x="192" y="142" font-family="JetBrains Mono, monospace" font-size="10" fill="#FF8E00">${work.svgLabel}</text>
            <text x="336" y="142" font-family="JetBrains Mono, monospace" font-size="10" fill="currentColor">SLIDE 03</text>
          `
      }
    </svg>
  `;
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
      <article class="work-piece ${work.spanClass}">
        <div class="work-canvas">
          ${createWorkSvg(work)}
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
              Detail &amp; Spesifikasi
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

  document.addEventListener("click", (event) => {
    const workBtn = event.target.closest("[data-work-id]");
    if (workBtn && workDialog) {
      const workId = workBtn.getAttribute("data-work-id");
      const found = PORTFOLIO_WORKS.find((item) => item.id === workId);
      if (found) {
        document.getElementById("dialog-work-code").textContent = found.id;
        document.getElementById("dialog-work-category").textContent = found.categoryLabel;
        document.getElementById("dialog-work-title").textContent = found.title;
        document.getElementById("dialog-work-desc").textContent = found.summary;
        document.getElementById("dialog-work-specs").innerHTML = found.specs
          .map((s) => `<span class="spec-chip">${s}</span>`)
          .join("");
        activeWorkTopic =
          found.category === "poster"
            ? "Paket Jasa: Key Visual & Event Poster Print"
            : "Paket Jasa: Sukunaru Feed Starter Pack";
        workDialog.showModal();
      }
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
      const targetUrl = directProductBtn.getAttribute("data-direct-url");
      document.getElementById("dialog-product-title").textContent = productName;
      document.getElementById("dialog-product-url-chip").textContent = `Direct Link Placeholder: ${targetUrl}`;
      const waMsg = encodeURIComponent(
        `Halo Sukunaru Studio, saya ingin membeli produk digital *${productName}*. Mohon info link pembayaran / lisensinya.`
      );
      document.getElementById("dialog-product-wa-link").href = `https://wa.me/${STUDIO_WA_NUMBER}?text=${waMsg}`;
      productDialog.showModal();
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
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let fadeTimer = null;

  const pointer = {
    x: -1000,
    y: -1000,
    smoothX: -1000,
    smoothY: -1000,
    strength: 0,
    targetStrength: 0,
    active: false,
    rafPending: false
  };

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    scheduleFrame();
  }

  function renderFrame() {
    pointer.rafPending = false;

    const dxCursor = pointer.x - pointer.smoothX;
    const dyCursor = pointer.y - pointer.smoothY;
    pointer.smoothX += dxCursor * 0.25;
    pointer.smoothY += dyCursor * 0.25;
    pointer.strength += (pointer.targetStrength - pointer.strength) * 0.14;

    if (canUseFinePointer && cursorEl && pointer.active) {
      const halfSize = cursorEl.classList.contains("is-interactive") ? 26 : 17;
      cursorEl.style.transform = `translate3d(${(pointer.smoothX - halfSize).toFixed(1)}px, ${(pointer.smoothY - halfSize).toFixed(1)}px, 0)`;
    }

    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const baseDotColor = isLight ? "rgba(17, 17, 17, 0.14)" : "rgba(245, 242, 235, 0.12)";
    const isCompactScreen = width < 720;
    const spacing = isCompactScreen ? 28 : 36;
    const influenceRadius = isCompactScreen ? 150 : 165;

    for (let x = spacing / 2; x < width; x += spacing) {
      for (let y = spacing / 2; y < height; y += spacing) {
        const dx = x - pointer.smoothX;
        const dy = y - pointer.smoothY;
        const dist = Math.hypot(dx, dy);

        if (pointer.strength > 0.02 && dist < influenceRadius) {
          const factor = (1 - dist / influenceRadius) * pointer.strength;
          const push = factor * 11;
          const angle = Math.atan2(dy, dx);
          const drawX = x + Math.cos(angle) * push;
          const drawY = y + Math.sin(angle) * push;
          const radius = 1.2 + factor * 3.4;

          ctx.beginPath();
          ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 142, 0, ${(0.28 + factor * 0.65).toFixed(2)})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(x, y, 1.15, 0, Math.PI * 2);
          ctx.fillStyle = baseDotColor;
          ctx.fill();
        }
      }
    }

    const stillMoving = Math.abs(dxCursor) > 0.35 || Math.abs(dyCursor) > 0.35;
    const stillFading = Math.abs(pointer.targetStrength - pointer.strength) > 0.02;

    if (stillMoving || stillFading) {
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
    pointer.x = clientX;
    pointer.y = clientY;
    if (!pointer.active || pointer.strength < 0.08 || isTouch) {
      pointer.smoothX = clientX;
      pointer.smoothY = clientY;
    }
    pointer.active = true;
    pointer.targetStrength = 1;
    scheduleFrame();
  }

  function releasePoint(delayMs) {
    if (fadeTimer) clearTimeout(fadeTimer);
    fadeTimer = setTimeout(() => {
      pointer.active = false;
      pointer.targetStrength = 0;
      scheduleFrame();
    }, delayMs);
  }

  window.addEventListener("pointermove", (event) => {
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
  });

  window.addEventListener("pointerdown", (event) => {
    activatePoint(event.clientX, event.clientY, event.pointerType === "touch");
  });

  window.addEventListener("pointerup", (event) => {
    if (event.pointerType === "touch") {
      releasePoint(700);
    }
  });

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
      releasePoint(700);
    },
    { passive: true }
  );

  window.addEventListener(
    "touchcancel",
    () => {
      releasePoint(300);
    },
    { passive: true }
  );

  document.addEventListener("mouseleave", () => {
    releasePoint(100);
    if (cursorEl) {
      cursorEl.classList.remove("is-visible");
    }
  });

  window.addEventListener("resize", resizeCanvas);

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => setTimeout(scheduleFrame, 20));
  }

  resizeCanvas();
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
