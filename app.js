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

/* ==========================================================================
   Picture Rail Gallery Physics Engine & Component
   ========================================================================== */
const RAIL_CONSTANTS = {
  PERSPECTIVE: 1200,
  GAP: 0.3,
  BREATH: 0.1,
  MARGIN: 0.05,
  EDGE: 36,
  RAIL_MIN_UNIT: 90,
  RAIL_MAX_UNIT: 150,
  CAROUSEL_MAX_UNIT: 128,
  LIFT_SCALE: 0.06,
  SUPERSAMPLE: 2,
  LIFT_GROW: 1.12,
  LIFT_Z: 26,
  TILT_X: -6,
  TILT_Y: 4,
  SWING_MAX: 14,
  SWING_DAMP: 2.2,
  SWING_G: 3900,
  SWING_COUPLING: 0.08,
  DRAG_COUPLING: 0.16,
  NEIGHBOUR_KICK: 12,
  DEG: 180 / Math.PI
};

let railState = {
  items: [],
  shapes: [],
  drops: [],
  layout: null,
  width: 0,
  active: null,
  carouselIndex: 0,
  focusIndex: 0,
  sim: {
    x: [], vx: [], tx: [],
    sw: [], vsw: [],
    e: [], ve: [], te: [],
    ty: [], vty: [], tty: [],
    hx: [], hv: [],
    drag: -1, grab: 0, free: 0, last: 0, raf: 0
  },
  playing: true,
  beatTimer: null,
  brushed: false,
  pointer: { id: -1, index: -1, x: 0, y: 0, moved: false, kind: "", swipe: 0, lastX: 0, lastT: 0, v: 0 },
  elements: {
    stage: null,
    dots: null,
    captionTitle: null,
    captionByline: null,
    openDetailBtn: null,
    hangs: [],
    backs: [],
    swings: [],
    slots: [],
    tilts: [],
    lights: [],
    glares: [],
    dims: [],
    shadows: [],
    washes: []
  }
};

function shapeOfWork(item) {
  const aspect = Math.max(0.4, Math.min(2.5, item.aspect ?? 0.8));
  const frame = item.frame ?? "black";
  const mold = frame === "oak" ? 0.068 : frame === "white" ? 0.058 : 0.046;
  const mat = item.mat ? 0.11 : 0;
  const matB = item.mat ? 0.022 : 0;
  const iw = Math.sqrt(aspect);
  return { frame, mold, mat, matB, w: iw + 2 * (mold + mat), h: 1 / iw + 2 * (mold + mat) + matB };
}

function computeRailLayout(shapes, drops, width) {
  const n = shapes.length;
  // Always active sliding gallery so frames maintain generous size and never fold
  const carousel = true;
  const unit = Math.round(
    width < 640
      ? Math.max(110, width * 0.28)
      : Math.max(130, Math.min(165, width * 0.135))
  );
  const railTop = 6;
  const railT = Math.round(Math.max(9, Math.min(16, unit * 0.11)));
  const pivotY = railTop + railT + Math.round(unit * 0.045) + 2;
  const maxH = shapes.reduce((m, s) => Math.max(m, s.h), 0) * unit;
  const centre = pivotY + unit * 0.22 + maxH / 2;
  const tops = shapes.map((s, i) =>
    Math.round(
      Math.max(
        pivotY + unit * 0.08,
        centre - (s.h * unit) / 2 + Math.max(-0.15, Math.min(0.6, drops[i] ?? 0)) * unit
      )
    )
  );
  const bottom = shapes.reduce((m, s, i) => Math.max(m, (tops[i] ?? 0) + s.h * unit), pivotY);
  return { width, unit, carousel, railTop, railT, pivotY, tops, stageH: Math.round(bottom + 42) };
}

function computeRailTargets(lay, shapes, front, centreIndex) {
  const n = shapes.length;
  if (n === 0) return [];

  const safeFront = (front !== null && Number.isFinite(front))
    ? Math.max(0, Math.min(n - 1, Math.round(front)))
    : null;

  let c = 0;
  if (Number.isFinite(centreIndex)) {
    c = Math.max(0, Math.min(n - 1, Math.round(centreIndex)));
  } else if (safeFront !== null) {
    c = safeFront;
  }

  const unit = (lay && Number.isFinite(lay.unit) && lay.unit > 20) ? lay.unit : 120;
  const width = (lay && Number.isFinite(lay.width) && lay.width > 100) ? lay.width : 980;

  const feet = shapes.map((s, i) => (s.w || 1) * unit * (i === safeFront ? RAIL_CONSTANTS.LIFT_GROW : 1));
  const gapAfter = (a) => unit * (RAIL_CONSTANTS.GAP + (safeFront !== null && (a === safeFront || a + 1 === safeFront) ? RAIL_CONSTANTS.BREATH : 0));
  const xs = new Array(n).fill(0);

  // Center active frame at stage horizontal center
  xs[c] = width / 2;

  // Distribute subsequent frames smoothly to the right
  for (let i = c + 1; i < n; i++) {
    xs[i] = xs[i - 1] + (feet[i - 1] + feet[i]) / 2 + gapAfter(i - 1);
  }
  // Distribute previous frames smoothly to the left
  for (let i = c - 1; i >= 0; i--) {
    xs[i] = xs[i + 1] - (feet[i + 1] + feet[i]) / 2 - gapAfter(i);
  }
  return xs;
}

function railPendulum(lay, shape, i) {
  return Math.max(30, (lay.tops[i] ?? 0) - lay.pivotY + (shape.h * lay.unit) / 2);
}

function railReach(s, lay, shape, i) {
  const e = Math.max(0, Math.min(1, s.e[i] ?? 0));
  const half = (shape.w * lay.unit * (1 + (RAIL_CONSTANTS.LIFT_GROW - 1) * e)) / 2;
  const top = (lay.tops[i] ?? 0) - lay.pivotY;
  const bottom = top + shape.h * lay.unit;
  const r = (s.sw[i] ?? 0) / RAIL_CONSTANTS.DEG;
  const c = Math.cos(r);
  const sn = Math.sin(r);
  return [Math.min(-half * c - top * sn, -half * c - bottom * sn), Math.max(half * c - top * sn, half * c - bottom * sn)];
}

function railRestTilt(i) {
  return (((i * 37 + 11) % 7) - 3) * 0.5;
}

function resolveRailContacts(s, lay, list) {
  const n = list.length;
  if (n <= 1) return;

  // Strict physical non-penetration along the rail rod.
  // Frames have physical width and cannot pass through or overlap adjacent frames.
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < n - 1; i++) {
      const a = list[i];
      const b = list[i + 1];
      if (!a || !b) continue;

      const xi = Number.isFinite(s.x[i]) ? s.x[i] : (s.tx[i] ?? 0);
      const xi1 = Number.isFinite(s.x[i + 1]) ? s.x[i + 1] : (s.tx[i + 1] ?? 0);

      // Safe separation distance based on frame dimensions plus air gap (14px)
      const minDistance = ((a.w + b.w) * lay.unit) * 0.5 + 14;
      const currentDist = xi1 - xi;
      const overlap = minDistance - currentDist;

      if (overlap > 0) {
        // Separate equally without pumping kinetic energy
        s.x[i] = xi - overlap * 0.5;
        s.x[i + 1] = xi1 + overlap * 0.5;

        // Inelastic velocity contact: damp converging velocities only
        const va = Number.isFinite(s.vx[i]) ? s.vx[i] : 0;
        const vb = Number.isFinite(s.vx[i + 1]) ? s.vx[i + 1] : 0;
        const vRel = va - vb; // Positive when approaching each other
        if (vRel > 0) {
          s.vx[i] = va - vRel * 0.5;
          s.vx[i + 1] = vb + vRel * 0.5;
        }
      }
    }
  }
}

function paintRailFrame(i) {
  const { sim: s, layout: lay, shapes: list, elements: el } = railState;
  const shape = list[i];
  if (!shape || !lay) return;

  const w = shape.w * lay.unit;
  let x = s.x[i];
  if (!Number.isFinite(x)) {
    x = s.tx[i] ?? (lay.width / 2);
    s.x[i] = x;
    s.vx[i] = 0;
  }
  let theta = s.sw[i];
  if (!Number.isFinite(theta)) {
    theta = railRestTilt(i);
    s.sw[i] = theta;
    s.vsw[i] = 0;
  }
  let e = s.e[i];
  if (!Number.isFinite(e)) {
    e = s.te[i] ?? 0;
    s.e[i] = e;
    s.ve[i] = 0;
  }

  e = Math.max(0, Math.min(1.2, e));
  const lit = Math.max(0, Math.min(1, e));
  const ty = (Number.isFinite(s.ty[i]) ? s.ty[i] : 0) * lit;
  const left = `translate3d(${(x - w / 2).toFixed(2)}px, 0, 0)`;

  const hang = el.hangs[i];
  if (hang) {
    hang.style.transform = left;
    const distanceToActive = Math.abs(i - (railState.active ?? 0));
    hang.style.zIndex = lit > 0.4 ? "30" : String(Math.max(1, 20 - distanceToActive));
    hang.setAttribute("data-active", lit > 0.4 ? "true" : "false");
    const dot = hang.querySelector(".label-status-dot");
    if (dot) dot.style.display = lit > 0.4 ? "inline-block" : "none";
  }

  const back = el.backs[i];
  if (back) back.style.transform = `${left} rotate(${theta.toFixed(3)}deg)`;

  const swing = el.swings[i];
  if (swing) swing.style.transform = `rotate(${theta.toFixed(3)}deg)`;

  const tilt = el.tilts[i];
  if (tilt) {
    const scaleVal = ((1 + RAIL_CONSTANTS.LIFT_SCALE * e) / RAIL_CONSTANTS.SUPERSAMPLE).toFixed(4);
    tilt.style.transform = `perspective(${RAIL_CONSTANTS.PERSPECTIVE}px) translateZ(${(RAIL_CONSTANTS.LIFT_Z * e).toFixed(2)}px) rotateX(${(RAIL_CONSTANTS.TILT_X * e).toFixed(3)}deg) rotateY(${ty.toFixed(3)}deg) scale(${scaleVal})`;
  }

  const light = el.lights[i];
  if (light) light.style.opacity = lit.toFixed(3);

  const wash = el.washes[i];
  if (wash) wash.style.opacity = lit.toFixed(3);

  const glare = el.glares[i];
  if (glare) glare.style.transform = `translate3d(${(-ty * 3 - theta * 1.6).toFixed(2)}%, 0, 0)`;

  const shadow = el.shadows[i];
  if (shadow) {
    shadow.style.transform = `translate3d(${(-ty * 1.4).toFixed(2)}px, ${(lay.unit * 0.04 + 10 * e).toFixed(2)}px, 0) scale(${(1 + 0.035 * e).toFixed(4)}, ${(1 + 0.07 * e).toFixed(4)})`;
    shadow.style.opacity = (1 - 0.3 * lit).toFixed(3);
  }

  let others = 0;
  for (let k = 0; k < list.length; k++) if (k !== i) others = Math.max(others, s.e[k] ?? 0);
  const dim = el.dims[i];
  if (dim) dim.style.opacity = (0.08 * Math.max(0, Math.min(1, others)) * (1 - lit)).toFixed(4);
}

function stepRailSimulation(now) {
  const { sim: s, layout: lay, shapes: list } = railState;
  const n = list.length;
  if (!lay || n === 0) return;

  // Robust time delta: strictly clamp to [0.002s .. 0.05s] to eliminate 0/0 NaN and frame explosion
  let dt = 1 / 60;
  if (s.last && Number.isFinite(s.last)) {
    const elapsed = (now - s.last) / 1000;
    if (elapsed > 0.001 && elapsed < 0.2) {
      dt = Math.min(0.05, elapsed);
    }
  }
  s.last = now;

  const sub = Math.max(3, Math.ceil(dt / 0.0115));
  const h = dt / sub;

  for (let k = 0; k < sub; k++) {
    for (let i = 0; i < n; i++) {
      const shape = list[i];
      if (!shape) continue;
      const len = Math.max(30, railPendulum(lay, shape, i));

      // X translation spring
      const tx = Number.isFinite(s.tx[i]) ? s.tx[i] : (lay.width / 2);
      const currX = Number.isFinite(s.x[i]) ? s.x[i] : tx;
      const beforeVx = Number.isFinite(s.vx[i]) ? s.vx[i] : 0;
      const stiff = 140;
      const damp = 2 * Math.sqrt(140) * 0.88;
      const ax = -stiff * (currX - tx) - damp * beforeVx;
      let newVx = beforeVx + ax * h;
      newVx = Math.max(-2500, Math.min(2500, newVx));
      s.vx[i] = newVx;
      s.x[i] = currX + newVx * h;

      // Lift spring
      const te = Number.isFinite(s.te[i]) ? s.te[i] : 0;
      const currE = Number.isFinite(s.e[i]) ? s.e[i] : te;
      const currVe = Number.isFinite(s.ve[i]) ? s.ve[i] : 0;
      const ae = -150 * (currE - te) - 2 * Math.sqrt(150) * 0.78 * currVe;
      s.ve[i] = currVe + ae * h;
      s.e[i] = currE + s.ve[i] * h;

      // 3D tilt spring
      const tty = Number.isFinite(s.tty[i]) ? s.tty[i] : 0;
      const currTy = Number.isFinite(s.ty[i]) ? s.ty[i] : tty;
      const currVty = Number.isFinite(s.vty[i]) ? s.vty[i] : 0;
      const at = -110 * (currTy - tty) - 2 * Math.sqrt(110) * 0.72 * currVty;
      s.vty[i] = currVty + at * h;
      s.ty[i] = currTy + s.vty[i] * h;

      // Swing angle spring
      const rest = railRestTilt(i) * (1 - Math.max(0, Math.min(1, s.e[i] ?? 0)));
      const currSw = Number.isFinite(s.sw[i]) ? s.sw[i] : rest;
      const currVsw = Number.isFinite(s.vsw[i]) ? s.vsw[i] : 0;
      const as = -(RAIL_CONSTANTS.SWING_G / len) * (currSw - rest) - RAIL_CONSTANTS.SWING_DAMP * currVsw;
      let newVsw = currVsw + as * h;
      newVsw = Math.max(-180, Math.min(180, newVsw));
      s.vsw[i] = newVsw;
      s.sw[i] = Math.max(-RAIL_CONSTANTS.SWING_MAX, Math.min(RAIL_CONSTANTS.SWING_MAX, currSw + newVsw * h));
    }
    resolveRailContacts(s, lay, list);
  }

  const follow = 1 - Math.exp(-dt / 0.035);
  for (let i = 0; i < n; i++) {
    const shape = list[i];
    const x = Number.isFinite(s.x[i]) ? s.x[i] : (s.tx[i] ?? 0);
    const lastHx = Number.isFinite(s.hx[i]) ? s.hx[i] : x;
    const was = Number.isFinite(s.hv[i]) ? s.hv[i] : 0;
    const rawV = dt > 0 ? (x - lastHx) / dt : 0;
    const clampedV = Math.max(-1500, Math.min(1500, Number.isFinite(rawV) ? rawV : 0));
    const hv = was + (clampedV - was) * follow;
    s.hx[i] = x;
    s.hv[i] = hv;
    if (shape) {
      const pen = railPendulum(lay, shape, i);
      const deltaV = (hv - was) * (RAIL_CONSTANTS.DEG / Math.max(30, pen)) * RAIL_CONSTANTS.SWING_COUPLING;
      const kick = Math.max(-25, Math.min(25, Number.isFinite(deltaV) ? deltaV : 0));
      s.vsw[i] = Math.max(-120, Math.min(120, (s.vsw[i] ?? 0) + kick));
    }
  }

  let busy = false;
  for (let i = 0; i < n; i++) {
    paintRailFrame(i);
    const rest = railRestTilt(i) * (1 - Math.max(0, Math.min(1, s.e[i] ?? 0)));
    if (
      Math.abs(s.vx[i] ?? 0) > 0.4 ||
      Math.abs((s.x[i] ?? 0) - (s.tx[i] ?? 0)) > 0.25 ||
      Math.abs((s.e[i] ?? 0) - (s.te[i] ?? 0)) > 0.002 ||
      Math.abs(s.ve[i] ?? 0) > 0.01 ||
      Math.abs((s.ty[i] ?? 0) - (s.tty[i] ?? 0)) > 0.02 ||
      Math.abs(s.vty[i] ?? 0) > 0.05 ||
      Math.abs((s.sw[i] ?? 0) - rest) > 0.02 ||
      Math.abs(s.vsw[i] ?? 0) > 0.05
    ) {
      busy = true;
    }
  }

  if (busy) {
    s.raf = requestAnimationFrame(stepRailSimulation);
  } else {
    s.raf = 0;
    s.last = 0;
    for (let i = 0; i < n; i++) {
      s.x[i] = s.tx[i] ?? 0;
      s.hx[i] = s.x[i] ?? 0;
      s.hv[i] = 0;
      s.vx[i] = 0;
      s.e[i] = s.te[i] ?? 0;
      s.ve[i] = 0;
      s.ty[i] = s.tty[i] ?? 0;
      s.vty[i] = 0;
      s.sw[i] = railRestTilt(i) * (1 - Math.max(0, Math.min(1, s.e[i] ?? 0)));
      s.vsw[i] = 0;
      paintRailFrame(i);
    }
  }
}

function kickRailSimulation() {
  const s = railState.sim;
  if (!s.raf) {
    s.last = 0;
    s.raf = requestAnimationFrame(stepRailSimulation);
  }
}

function impulseRail(i, amount) {
  if (i < 0 || i >= railState.shapes.length) return;
  railState.sim.vsw[i] = (railState.sim.vsw[i] ?? 0) + amount;
  kickRailSimulation();
}

function chooseRailPrint(index) {
  if (index === null || !Number.isFinite(index)) return;
  const n = railState.shapes.length;
  if (n === 0) return;
  const nextIdx = Math.max(0, Math.min(n - 1, Math.round(index)));
  const old = Number.isFinite(railState.active) ? railState.active : null;
  railState.active = nextIdx;
  railState.carouselIndex = nextIdx;

  const { sim: s, layout: lay, shapes: list, items } = railState;
  if (!lay) return;

  const xs = computeRailTargets(lay, list, nextIdx, nextIdx);
  for (let i = 0; i < n; i++) {
    s.tx[i] = xs[i] ?? 0;
    s.te[i] = i === nextIdx ? 1 : 0;
    if (i !== nextIdx) s.tty[i] = 0;
  }

  impulseRail(nextIdx - 1, RAIL_CONSTANTS.NEIGHBOUR_KICK);
  impulseRail(nextIdx + 1, -RAIL_CONSTANTS.NEIGHBOUR_KICK);
  if (old !== null && old !== nextIdx) {
    impulseRail(old, -RAIL_CONSTANTS.NEIGHBOUR_KICK * 0.5);
  }

  kickRailSimulation();

  // Update Caption & Buttons
  const currentItem = items[nextIdx];
  const capTitle = document.getElementById("rail-caption-title");
  const capByline = document.getElementById("rail-caption-byline");
  const openBtn = document.getElementById("rail-open-detail-btn");

  if (currentItem) {
    if (capTitle) capTitle.textContent = currentItem.title;
    if (capByline) {
      const byline = [[currentItem.categoryLabel, currentItem.year || "2026"].filter(Boolean).join(" • "), currentItem.tag].filter(Boolean).join(" · ");
      capByline.textContent = `${byline} · Angkat karya untuk melihat sisi belakang`;
    }
    if (openBtn) {
      openBtn.textContent = `Angkat & Balik Sisi Belakang (${currentItem.id})`;
      openBtn.onclick = () => openWorkModal(currentItem.id);
    }
  }

  // Update Pagination Dots
  const dots = document.querySelectorAll(".rail-dot-btn");
  dots.forEach((dot, dotIdx) => {
    dot.classList.toggle("is-active", dotIdx === nextIdx);
  });

  // Update Prev / Next Buttons
  const prevBtn = document.getElementById("rail-prev-btn");
  const nextBtn = document.getElementById("rail-next-btn");
  if (prevBtn) prevBtn.disabled = nextIdx <= 0;
  if (nextBtn) nextBtn.disabled = nextIdx >= n - 1;
}

function prevRailPrint() {
  const current = Number.isFinite(railState.active) ? railState.active : (Number.isFinite(railState.carouselIndex) ? railState.carouselIndex : 0);
  if (current > 0) {
    railState.playing = false;
    chooseRailPrint(current - 1);
  }
}

function nextRailPrint() {
  const current = Number.isFinite(railState.active) ? railState.active : (Number.isFinite(railState.carouselIndex) ? railState.carouselIndex : 0);
  if (current < railState.shapes.length - 1) {
    railState.playing = false;
    chooseRailPrint(current + 1);
  }
}

function aimRail(index, clientX) {
  const stage = railState.elements.stage;
  const shape = railState.shapes[index];
  if (!stage || !shape || !railState.layout) return;

  const s = railState.sim;
  const local = clientX - stage.getBoundingClientRect().left;
  const half = (shape.w * railState.layout.unit) / 2;
  for (let i = 0; i < railState.shapes.length; i++) {
    s.tty[i] = i === index ? Math.max(-1, Math.min(1, (local - (s.x[index] ?? 0)) / half)) * RAIL_CONSTANTS.TILT_Y : 0;
  }
  kickRailSimulation();
}

function nearestRailPrint(clientX, clientY) {
  const stage = railState.elements.stage;
  if (!stage || !railState.layout) return null;

  const box = stage.getBoundingClientRect();
  const x = clientX - box.left;
  const y = clientY - box.top;
  const { layout: lay, shapes: list, sim: s } = railState;
  const n = list.length;
  let best = null;
  let distance = Infinity;

  for (let i = 0; i < n; i++) {
    const shape = list[i];
    if (!shape) continue;
    const reachR = railReach(s, lay, shape, i);
    const cx = s.x[i] ?? 0;
    const bottom = (lay.tops[i] ?? 0) + shape.h * lay.unit + 30;
    if (x < cx + reachR[0] - 4 || x > cx + reachR[1] + 4 || y < lay.railTop - 4 || y > bottom) continue;
    const d = Math.abs(x - cx);
    if (d < distance) {
      best = i;
      distance = d;
    }
  }
  return best;
}

function initPictureRailGallery(filterKey = "all", initialIndex = 0) {
  const stage = document.getElementById("picture-rail-stage");
  const dotsContainer = document.getElementById("picture-rail-dots");
  if (!stage) return;

  cancelAnimationFrame(railState.sim.raf);
  clearTimeout(railState.beatTimer);

  const filtered = filterKey === "all"
    ? PORTFOLIO_WORKS
    : PORTFOLIO_WORKS.filter((item) => item.category === filterKey);

  railState.items = filtered;
  railState.shapes = filtered.map(shapeOfWork);
  railState.drops = filtered.map((item) => item.drop ?? 0);
  railState.elements.stage = stage;
  railState.elements.dots = dotsContainer;

  function resizeAndMount(initial = false) {
    const width = Math.max(320, stage.clientWidth || window.innerWidth || 980);
    railState.width = width;
    const lay = computeRailLayout(railState.shapes, railState.drops, width);
    railState.layout = lay;
    stage.style.height = `${lay.stageH}px`;

    // Initialize Sim
    const count = filtered.length;
    const s = railState.sim;
    s.x = new Array(count).fill(0);
    s.vx = new Array(count).fill(0);
    s.tx = new Array(count).fill(0);
    s.sw = new Array(count).fill(0);
    s.vsw = new Array(count).fill(0);
    s.e = new Array(count).fill(0);
    s.ve = new Array(count).fill(0);
    s.te = new Array(count).fill(0);
    s.ty = new Array(count).fill(0);
    s.vty = new Array(count).fill(0);
    s.tty = new Array(count).fill(0);
    s.hx = new Array(count).fill(0);
    s.hv = new Array(count).fill(0);
    s.drag = -1;
    s.free = 0;
    s.last = 0;

    const activeIdx = Number.isFinite(initialIndex) ? Math.max(0, Math.min(count - 1, Math.round(initialIndex))) : 0;
    const xs = computeRailTargets(lay, railState.shapes, activeIdx, activeIdx);
    for (let i = 0; i < count; i++) {
      s.x[i] = xs[i] ?? 0;
      s.tx[i] = xs[i] ?? 0;
      s.hx[i] = xs[i] ?? 0;
      s.sw[i] = railRestTilt(i);
    }

    // Render DOM Elements
    renderRailDOMElements();

    if (dotsContainer) {
      dotsContainer.innerHTML = filtered.map((item, i) => `
        <button type="button" class="rail-dot-btn ${i === activeIdx ? "is-active" : ""}" aria-label="${item.title}" data-rail-dot="${i}"></button>
      `).join("");

      dotsContainer.querySelectorAll("[data-rail-dot]").forEach((btn) => {
        btn.addEventListener("click", () => {
          railState.playing = false;
          const idx = parseInt(btn.getAttribute("data-rail-dot"), 10);
          chooseRailPrint(idx);
        });
      });
    }

    chooseRailPrint(activeIdx);

    if (initial && !railState.brushed) {
      railState.brushed = true;
      for (let i = 0; i < count; i++) {
        setTimeout(() => impulseRail(i, 18 - i * 1.2), 160 + i * 65);
      }
    }
  }

  function renderRailDOMElements() {
    const { items, shapes, layout: lay } = railState;
    const U = lay.unit;
    const blur = Math.max(3, U * 0.05);

    let html = `
      <div aria-hidden="true" data-rail style="top: ${lay.railTop}px; height: ${lay.railT}px;">
        <div class="rail-drop-shadow"></div>
        <div class="rail-body"></div>
        <div class="rail-ridge-top"></div>
        <div class="rail-ridge-bottom"></div>
      </div>
      <div aria-hidden="true" class="rail-backdrop-layer">
    `;

    items.forEach((item, i) => {
      const shape = shapes[i];
      const w = shape.w * U;
      const h = shape.h * U;
      const top = lay.tops[i] ?? 0;
      html += `
        <div data-back="${i}" class="rail-back" style="position: absolute; left: 0; top: 0; width: ${w}px; height: 0; transform-origin: ${w / 2}px ${lay.pivotY + 1}px;">
          <span data-wash="${i}" data-wash style="position: absolute; left: ${-w * 0.5}px; width: ${w * 2}px; top: ${top - h * 0.5}px; height: ${h * 1.75}px;"></span>
          <span style="position: absolute; left: 0; top: ${top}px; width: ${w}px; height: ${h}px; filter: blur(${blur.toFixed(1)}px); opacity: 0.5;">
            <span data-shadow="${i}" style="position: absolute; inset: 0; border-radius: 2px; background: #000;"></span>
          </span>
        </div>
      `;
    });

    html += `</div>`;

    items.forEach((item, i) => {
      const shape = shapes[i];
      const w = shape.w * U;
      const h = shape.h * U;
      const top = lay.tops[i] ?? 0;
      const ringY = top + h * 0.07;
      const m = Math.max(2, shape.mold * U);
      const mat = shape.mat * U;
      const matB = shape.matB * U;
      const fixture = Math.max(30, Math.min(190, shape.w * U * 0.46));
      const hood = Math.max(4, Math.min(12, U * 0.05));
      const arm = Math.max(5, Math.min(20, U * 0.07));
      const above = arm + hood;

      html += `
        <div data-hang="${i}" style="position: absolute; left: 0; top: 0; width: ${w}px; height: 0; z-index: ${10 + i};">
          <span class="hook-plate" style="position: absolute; left: ${w / 2 - 5}px; top: ${lay.railTop - 3}px; width: 10px; height: ${lay.pivotY - lay.railTop + 6}px;" aria-hidden="true">
            <span style="position: absolute; inset-inline: 0; top: 0; height: 4px; border-radius: 999px; background: linear-gradient(to bottom, #ecd27c, #8b6508); box-shadow: 0 1px 1px rgba(0,0,0,0.4);"></span>
            <span style="position: absolute; top: 3px; left: 2.5px; width: 5px; bottom: 5px; border-radius: 0 0 1px 1px; background: linear-gradient(to right, #ecd27c, #8b6508);"></span>
            <svg style="position: absolute; bottom: 0; left: 0; overflow: visible; color: #5a3c03;" width="10" height="7">
              <path d="M 3.1 0 Q 3.1 6.2 5 6.2 Q 6.9 6.2 6.9 2.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
            </svg>
          </span>

          <span data-label style="top: ${top + h + 10}px; right: 0;">
            <span class="label-status-dot" style="display: none;"></span>${item.tag || "Print"}
          </span>

          <span data-swing="${i}" style="position: absolute; left: 0; top: 0; width: ${w}px; height: 0; transform-origin: ${w / 2}px ${lay.pivotY + 1}px;">
            <svg style="pointer-events: none; position: absolute; left: 0; top: 0; overflow: visible;" width="${Math.max(1, w)}" height="${Math.max(1, ringY)}" aria-hidden="true">
              <g>
                <line x1="${w / 2 + 0.7}" y1="${lay.pivotY + 1.8}" x2="${w * 0.2 + 0.7}" y2="${ringY + 0.8}" stroke="black" stroke-opacity="0.25" stroke-width="1.4"></line>
                <line x1="${w / 2}" y1="${lay.pivotY + 1}" x2="${w * 0.2}" y2="${ringY}" stroke="var(--text-primary)" stroke-opacity="0.65" stroke-width="1"></line>
                <line x1="${w / 2 - 0.3}" y1="${lay.pivotY + 1}" x2="${w * 0.2 - 0.3}" y2="${ringY}" stroke="white" stroke-opacity="0.35" stroke-width="0.4"></line>
              </g>
              <g>
                <line x1="${w / 2 + 0.7}" y1="${lay.pivotY + 1.8}" x2="${w * 0.8 + 0.7}" y2="${ringY + 0.8}" stroke="black" stroke-opacity="0.25" stroke-width="1.4"></line>
                <line x1="${w / 2}" y1="${lay.pivotY + 1}" x2="${w * 0.8}" y2="${ringY}" stroke="var(--text-primary)" stroke-opacity="0.65" stroke-width="1"></line>
                <line x1="${w / 2 - 0.3}" y1="${lay.pivotY + 1}" x2="${w * 0.8 - 0.3}" y2="${ringY}" stroke="white" stroke-opacity="0.35" stroke-width="0.4"></line>
              </g>
            </svg>

            <button type="button" data-frame="${i}" data-work-id="${item.id}" style="left: 0; top: ${top}px; width: ${w}px; height: ${h}px;" aria-label="${item.title}">
              <span data-tilt="${i}" style="left: ${(-(RAIL_CONSTANTS.SUPERSAMPLE - 1) * w) / 2}px; top: ${(-(RAIL_CONSTANTS.SUPERSAMPLE - 1) * h) / 2}px; width: ${w * RAIL_CONSTANTS.SUPERSAMPLE}px; height: ${h * RAIL_CONSTANTS.SUPERSAMPLE}px; transform: scale(${1 / RAIL_CONSTANTS.SUPERSAMPLE});">
                <span style="position: absolute; inset: 0; display: block; zoom: ${RAIL_CONSTANTS.SUPERSAMPLE};">
                  <span class="picture-lamp-fixture" style="bottom: 100%; width: ${fixture}px; height: ${above}px;" aria-hidden="true">
                    <span class="lamp-stem" style="left: calc(26% - 0.75px); width: 1.5px; height: ${arm + hood * 0.5}px;"></span>
                    <span class="lamp-stem" style="left: calc(74% - 0.75px); width: 1.5px; height: ${arm + hood * 0.5}px;"></span>
                    <span class="lamp-hood" style="height: ${hood}px;"></span>
                    <span class="lamp-hood-highlight" style="height: ${Math.max(1, hood * 0.22)}px; margin-top: ${hood * 0.12}px;"></span>
                  </span>

                  <span style="position: absolute; inset: 0; border-radius: 1.5px; box-shadow: 0 0 0 0.6px rgba(0,0,0,0.45);">
                    <span class="moulding-side moulding-${shape.frame} moulding-t" style="left:0; right:0; top:0; height:${m}px; clip-path: polygon(0 0, 100% 0, calc(100% - ${m}px) 100%, ${m}px 100%);"></span>
                    <span class="moulding-side moulding-${shape.frame} moulding-l" style="left:0; top:0; bottom:0; width:${m}px; clip-path: polygon(0 0, 100% ${m}px, 100% calc(100% - ${m}px), 0 100%);"></span>
                    <span class="moulding-side moulding-${shape.frame} moulding-r" style="right:0; top:0; bottom:0; width:${m}px; clip-path: polygon(0 ${m}px, 100% 0, 100% 100%, 0 calc(100% - ${m}px));"></span>
                    <span class="moulding-side moulding-${shape.frame} moulding-b" style="left:0; right:0; bottom:0; height:${m}px; clip-path: polygon(${m}px 0, calc(100% - ${m}px) 0, 100% 100%, 0 100%);"></span>

                    <span class="rail-mat-board" style="inset: ${m}px;">
                      <span class="rail-artwork-box" style="left: ${mat}px; right: ${mat}px; top: ${mat}px; bottom: ${mat + matB}px;">
                        <img src="${item.image}" alt="${item.title}" class="rail-poster-img" loading="lazy" draggable="false">
                      </span>
                      <span data-glare="${i}" class="rail-glass-glare"></span>
                    </span>

                    <span data-light="${i}" style="left: 0; right: 0; top: -${above}px; bottom: 0;">
                      <span class="light-bulb-glow" style="top: ${hood * 0.6}px; width: ${fixture * 0.86}px; height: ${Math.max(2, hood * 0.45)}px;"></span>
                      <span class="light-cone-wash" style="top: ${above - 1}px; height: ${h * 0.9}px;"></span>
                    </span>

                    <span data-dim="${i}" style="position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none;"></span>
                  </span>
                </span>
              </span>
            </button>
          </span>
        </div>
      `;
    });

    stage.innerHTML = html;

    // Cache element references for zero GC overhead during 60fps raf loop
    const el = railState.elements;
    el.hangs = items.map((_, i) => stage.querySelector(`[data-hang="${i}"]`));
    el.backs = items.map((_, i) => stage.querySelector(`[data-back="${i}"]`));
    el.swings = items.map((_, i) => stage.querySelector(`[data-swing="${i}"]`));
    el.slots = items.map((_, i) => stage.querySelector(`[data-frame="${i}"]`));
    el.tilts = items.map((_, i) => stage.querySelector(`[data-tilt="${i}"]`));
    el.lights = items.map((_, i) => stage.querySelector(`[data-light="${i}"]`));
    el.glares = items.map((_, i) => stage.querySelector(`[data-glare="${i}"]`));
    el.dims = items.map((_, i) => stage.querySelector(`[data-dim="${i}"]`));
    el.shadows = items.map((_, i) => stage.querySelector(`[data-shadow="${i}"]`));
    el.washes = items.map((_, i) => stage.querySelector(`[data-wash="${i}"]`));

    // Paint all frames immediately to their calculated initial positions
    for (let i = 0; i < items.length; i++) {
      paintRailFrame(i);
    }
  }

  // Wire Prev / Next Navigation buttons
  const prevBtn = document.getElementById("rail-prev-btn");
  const nextBtn = document.getElementById("rail-next-btn");
  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      prevRailPrint();
    };
  }
  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      nextRailPrint();
    };
  }

  // Keyboard navigation on stage
  stage.tabIndex = 0;
  stage.onkeydown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevRailPrint();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextRailPrint();
    }
  };

  // Pointer event interaction (smooth sideways swipe, drag & tap to center/open)
  stage.onpointerdown = (event) => {
    if (event.button !== 0) return;
    const hit = nearestRailPrint(event.clientX, event.clientY);
    const now = performance.now();
    railState.pointer = {
      id: event.pointerId,
      index: hit ?? -1,
      x: event.clientX,
      y: event.clientY,
      moved: false,
      kind: event.pointerType,
      swipe: 0,
      lastX: event.clientX,
      lastT: now,
      v: 0
    };
  };

  stage.onpointermove = (event) => {
    const p = railState.pointer;
    const s = railState.sim;
    const lay = railState.layout;
    if (!lay) return;

    if (p.id === event.pointerId) {
      const clientX = Number.isFinite(event.clientX) ? event.clientX : p.lastX;
      const clientY = Number.isFinite(event.clientY) ? event.clientY : p.y;
      const dx = clientX - p.x;
      const now = performance.now();
      if (!p.moved && Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(clientY - p.y)) {
        p.moved = true;
        railState.playing = false;
        if (stage.setPointerCapture && typeof stage.setPointerCapture === "function") {
          try {
            stage.setPointerCapture(event.pointerId);
          } catch (_) {}
        }
      }
      if (p.moved) {
        const dt = Math.max(1, now - p.lastT);
        const v = (clientX - p.lastX) / dt;
        p.v = Number.isFinite(v) ? (p.v * 0.6 + v * 0.4) : p.v;
        p.lastX = clientX;
        p.lastT = now;
        p.swipe = dx;

        const currentCenter = Number.isFinite(railState.active) ? railState.active : (Number.isFinite(railState.carouselIndex) ? railState.carouselIndex : 0);
        const xs = computeRailTargets(lay, railState.shapes, currentCenter, currentCenter);
        for (let i = 0; i < railState.shapes.length; i++) {
          s.tx[i] = (xs[i] ?? 0) + (Number.isFinite(dx) ? dx : 0);
        }
        kickRailSimulation();
      }
      return;
    }

    // Subtle 3D tilt when hovering active frame with mouse
    if (event.pointerType !== "mouse") return;
    const hit = nearestRailPrint(event.clientX, event.clientY);
    if (hit !== null && hit === railState.active) {
      aimRail(hit, event.clientX);
    }
  };

  stage.onpointerup = (event) => finishRailPointer(event, false);
  stage.onpointercancel = (event) => finishRailPointer(event, true);
  stage.onpointerleave = (event) => {
    if (event.pointerType !== "mouse" || railState.pointer.id >= 0) return;
    for (let i = 0; i < railState.shapes.length; i++) railState.sim.tty[i] = 0;
    kickRailSimulation();
  };

  function finishRailPointer(event, cancelled) {
    const p = railState.pointer;
    if (p.id !== event.pointerId) return;
    const s = railState.sim;
    const lay = railState.layout;

    if (stage.hasPointerCapture && typeof stage.releasePointerCapture === "function") {
      try {
        if (stage.hasPointerCapture(event.pointerId)) {
          stage.releasePointerCapture(event.pointerId);
        }
      } catch (_) {}
    }

    const wasMoved = p.moved;
    const clientX = (event && Number.isFinite(event.clientX) && event.clientX !== 0) ? event.clientX : p.lastX;
    const dx = clientX - p.x;
    const v = Number.isFinite(p.v) ? p.v : 0;
    const from = Number.isFinite(railState.active) ? railState.active : (Number.isFinite(railState.carouselIndex) ? railState.carouselIndex : 0);

    railState.pointer = { ...p, id: -1, swipe: 0, moved: false };

    if (wasMoved) {
      let step = 0;
      if (Math.abs(v) > 0.28) {
        step = v < 0 ? 1 : -1;
      } else if (Number.isFinite(dx) && Math.abs(dx) > 38) {
        step = dx < 0 ? 1 : -1;
      }
      const next = Math.max(0, Math.min(railState.shapes.length - 1, from + step));
      railState.carouselIndex = next;
      chooseRailPrint(next);
      return;
    }

    if (cancelled || p.index < 0) return;
    railState.playing = false;
    const hitIndex = p.index;
    if (hitIndex !== railState.active) {
      // Clicked a neighboring frame on the side -> slide to center that frame!
      chooseRailPrint(hitIndex);
    } else {
      // Clicked the currently centered active frame -> open 3D inspection modal!
      const hitWork = railState.items[hitIndex];
      if (hitWork) {
        openWorkModal(hitWork.id);
      }
    }
  }

  // Autoplay Loop (fixed cadence 2.6s)
  function scheduleNextBeat() {
    clearTimeout(railState.beatTimer);
    if (!railState.playing || railState.items.length === 0) return;
    railState.beatTimer = setTimeout(() => {
      if (!railState.playing) return;
      const current = railState.active ?? 0;
      const next = (current + 1) % railState.items.length;
      chooseRailPrint(next);
      scheduleNextBeat();
    }, 2600);
  }
  scheduleNextBeat();

  // Resize handler
  resizeAndMount(true);
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
  const railWrap = document.getElementById("picture-rail-wrap");
  const gridWrap = document.getElementById("portfolio-grid");
  const gridContainer = document.getElementById("portfolio-grid-container");
  let currentFilter = "all";

  function setViewMode(mode) {
    const isRail = mode === "rail";
    if (viewRailBtn) {
      viewRailBtn.classList.toggle("is-active", isRail);
      viewRailBtn.setAttribute("aria-pressed", String(isRail));
    }
    if (viewGridBtn) {
      viewGridBtn.classList.toggle("is-active", !isRail);
      viewGridBtn.setAttribute("aria-pressed", String(!isRail));
    }
    if (railWrap) railWrap.hidden = !isRail;
    if (gridWrap) gridWrap.hidden = isRail;
    if (gridContainer) gridContainer.hidden = isRail;
    if (isRail) {
      initPictureRailGallery(currentFilter);
    }
  }

  if (gridContainer) {
    gridContainer.hidden = true;
  }

  if (viewRailBtn) {
    viewRailBtn.addEventListener("click", () => setViewMode("rail"));
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
    initPictureRailGallery(filterKey);
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
      if (railWrap && !railWrap.hidden) {
        const preserveIdx = Number.isFinite(railState.active) ? railState.active : (Number.isFinite(railState.carouselIndex) ? railState.carouselIndex : 0);
        initPictureRailGallery(currentFilter, preserveIdx);
      }
    }, 150);
  });

  initPictureRailGallery("all");
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

    setCardFlipped(false);

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
  initPortfolioControls();
  initDialogsAndTriggers();
  initBriefForm();
  initInteractiveBackgroundAndCursor();
  initScrollReveal();
});
