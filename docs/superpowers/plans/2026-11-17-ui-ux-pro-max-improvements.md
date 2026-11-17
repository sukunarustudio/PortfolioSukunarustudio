# UI/UX & Design Intelligence Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use super-subagent-driven-development (recommended) or super-executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menghadirkan perbaikan menyeluruh pada UI/UX, aksesibilitas mobile (touch targets ≥44px, keyboard navigation), tipografi Swiss Editorial, modal focus management, dan micro-interactions pada landing page Sukunaru Studio.

**Architecture:** Pure Vanilla Web Stack (HTML5 semantic markup, CSS custom properties design tokens, and modular Vanilla ES6+ JavaScript). Tidak memerlukan build step atau dependensi runtime berat.

**Tech Stack:** HTML5, CSS3 (CSS Grid, Flexbox, Design Tokens, CSS Transforms), Vanilla JavaScript, Font Google (Plus Jakarta Sans, Instrument Serif, JetBrains Mono).

**Spec:** Desain sistem Sukunaru Studio: Swiss Editorial Poster Style, palet warna Gelap/Terang adaptif, aksen amber `#FF8E00`, mobile-first responsive layout, kepatuhan WCAG 2.1 AA.

## Global Constraints

- **Single Source of Truth:** Semua perubahan dilakukan langsung pada `index.html`, `styles.css`, dan `app.js`.
- **Zero Build Dependencies:** Tanpa Webpack/Vite/Babel di runtime produksi; pertahankan vanilla JS yang kompatibel dengan modern evergreen browsers.
- **Immediate Push Rule:** Sesuai instruksi pengguna ("setiap perubahan langsung push aja"), setiap task yang selesai diverifikasi harus segera di-commit dan di-push ke remote `origin main`.
- **Contrast & Token Discipline:** Pertahankan kontras teks normal minimal 4.5:1 (WCAG AA) pada kedua mode (Dark `#0C0C0C` dan Light `#F5F2EB`).
- **Touch Target Minimum:** Elemen interaktif pada mobile wajib memiliki area sentuh minimal 44×44px (atau 48×48px) untuk mencegah misclick.

## Review Focus

1. **Mobile Touch Area**: Tombol navigasi fan poster (`.fan-nav-btn`) dan modal close button tidak boleh kekecilan (<44px) saat disentuh di layar smartphone.
2. **Keyboard Focus & Modal Trap**: Saat modal poster (`#work-dialog`) atau produk (`#product-dialog`) terbuka, penekanan tombol `Tab` tidak boleh tembus ke halaman belakang, dan `Escape` harus menutup modal dengan mulus.
3. **Carousel Keyboard & Swipe**: Pengguna keyboard harus bisa menelusuri poster dengan tombol panah `ArrowLeft` / `ArrowRight` saat carousel terfokus.
4. **Form Brief WA UX**: Validasi formulir harus menyertakan atribut aksesibilitas (`aria-invalid`, `aria-describedby`) dan menyediakan opsi salin teks draft selain buka tab WA.
5. **Git Hygiene**: Menghapus file legacy Next.js/React yang sudah tidak digunakan agar status repositori bersih dan terawat.

---

### Task 1: Repositori Cleanup & Git Working Tree Hygiene

**Files:**
- Modify/Stage: `git status` (hapus referensi file Next.js/React yang sudah didelete: `components/ui/*`, `lib/utils.ts`, `src/*`)

**Steps:**
- [x] Stage file-file lama yang sudah dihapus dari workspace (`git add -u`).
- [x] Commit dengan pesan `chore(cleanup): hapus file eksperimen legacy nextjs/react agar repositori bersih` dan push ke `origin main`.
- [x] Verifikasi bahwa `git status` bersih (clean working tree).

---

### Task 2: Mobile Touch Targets & Ergonomi Interaksi (WCAG 2.5.5 / 2.5.8)

**Files:**
- Modify: `styles.css` (area `.fan-nav-btn`, `.fan-active-modal-btn`, `.mobile-menu-btn`, `.theme-toggle`, `.dialog-close-btn`)
- Modify: `index.html` (memastikan icon dan tombol memiliki label aksesibel)

**Steps:**
- [x] Perbesar tap target `.fan-nav-btn` pada mobile: visual ukuran proporsional namun area hit sentuh menggunakan pseudo-element atau padding minimal 44×44px.
- [x] Optimalkan `.fan-active-modal-btn` pada mobile agar nyaman ditekan dengan thumb zone yang pas.
- [x] Pastikan `.dialog-close-btn` dan action buttons di dalam modal memiliki min-height 44px dan focus indicator jelas.
- [x] Verifikasi dengan review CSS dan pengujian tampilan.
- [x] Commit `fix(ui): optimasi mobile touch targets minimal 44px dan ergonomi tombol` dan push ke `origin main`.

---

### Task 3: Carousel Keyboard Accessibility & Gesture Refinement

**Files:**
- Modify: `app.js` (`initFanPosterCarousel`)
- Modify: `styles.css` (fokus ring pada `.fan-carousel-stage-wrap`)

**Steps:**
- [x] Tambahkan event listener keyboard (`keydown`) pada `#fan-carousel-wrap`:
  - `ArrowLeft`: Navigasi ke poster sebelumnya (`prevCard()`).
  - `ArrowRight`: Navigasi ke poster selanjutnya (`nextCard()`).
  - `Enter` / `Space`: Buka modal poster aktif (`openWorkModal`).
- [x] Tambahkan `:focus-visible` styling yang rapi pada carousel wrap agar pengguna keyboard tahu elemen sedang aktif.
- [x] Tingkatkan kenyamanan gesture swipe pada layar sentuh dengan threshold dinamis (misal 35px) dan pencegahan scroll vertikal yang tidak disengaja.
- [x] Verifikasi sintaks JS dengan `node -c app.js`.
- [x] Commit `feat(carousel): tambahkan navigasi keyboard arrow dan penyempurnaan swipe mobile` dan push ke `origin main`.

---

### Task 4: Modal Accessibility & Focus Management

**Files:**
- Modify: `app.js` (`initDialogsAndTriggers`)
- Modify: `styles.css` (animasi dialog dan backdrop)

**Steps:**
- [x] Implementasikan focus trap sederhana pada `<dialog>` native:
  - Simpan elemen pemicu (`document.activeElement`) sebelum membuka modal.
  - Saat modal terbuka, otomatis fokuskan ke tombol close pertama atau judul dialog.
  - Tangani siklus tombol `Tab` dan `Shift + Tab` agar tetap berada di dalam modal saat terbuka.
  - Kembalikan fokus ke elemen pemicu saat modal ditutup.
- [x] Pastikan penutupan via tombol ESC dan klik backdrop bekerja mulus tanpa glitch visual.
- [x] Verifikasi sintaks JS dengan `node -c app.js`.
- [x] Commit `fix(a11y): implementasikan focus trap dan focus restoration pada modal dialog` dan push ke `origin main`.

---

### Task 5: Swiss Typography & Micro-copy Polish

**Files:**
- Modify: `styles.css` (headings, colophon, text-wrap, line-height)
- Modify: `index.html` (atribut aksesibilitas, tipografi heading)

**Steps:**
- [x] Terapkan `text-wrap: balance` pada `.section-title`, `.hero-title`, `.dialog-title` untuk mencegah orphan words (kata menggantung).
- [x] Atur batas lebar baca optimal (`max-width: 65ch`) pada subjudul dan paragraf deskripsi agar mata pengunjung tidak lelah membaca di layar monitor lebar.
- [x] Pertajam kontras dan hierarki pada teks colophon teknis (`JetBrains Mono` metadata, chip kategori, tahun rilis).
- [x] Commit `style(typography): terapkan text-wrap balance dan perbaikan hierarki swiss editorial` dan push ke `origin main`.

---

### Task 6: WhatsApp Brief Generator Micro-interactions

**Files:**
- Modify: `index.html` (tambahkan tombol "Salin Draft Pesan" dan container feedback)
- Modify: `app.js` (`initBriefForm`)
- Modify: `styles.css` (styling tombol salin dan animasi toast feedback)

**Steps:**
- [x] Tambahkan tombol sekunder "Salin Pesan" di samping tombol kirim WhatsApp pada formulir brief.
- [x] Di `app.js`, tambahkan fitur `navigator.clipboard.writeText`:
  - Jika pengguna ingin menyalin pesan sebelum membuka WA, berikan feedback instan "✓ Pesan brief berhasil disalin ke clipboard!".
  - Tambahkan atribut aksesibilitas `aria-invalid="true"` pada input yang gagal validasi dan `aria-describedby` ke elemen pesan error terkait.
- [x] Verifikasi sintaks JS dengan `node -c app.js`.
- [x] Commit `feat(form): tambah opsi salin draft pesan WA dan perbaikan aksesibilitas formulir` dan push ke `origin main`.

---

### Task 7: Verifikasi Menyeluruh & Testing Linting

**Files:**
- Review: `index.html`, `styles.css`, `app.js`

**Steps:**
- [x] Jalankan validasi sintaks JavaScript pada `app.js` (`node -c app.js`).
- [x] Cek konsistensi markup HTML dan integritas link navigasi (`#karya`, `#produk`, `#jasa`, `#sosmed`).
- [x] Verifikasi responsivitas pada breakpoint mobile (360px, 480px) dan desktop (1280px+).
- [x] Push commit final jika ada penyesuaian akhir.
