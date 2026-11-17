import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const {
  STUDIO_WA_NUMBER,
  PORTFOLIO_WORKS,
  escapeHtml,
  calcCircularDiff,
  wrapIndex
} = require("../app.js");

test("escapeHtml sanitizes dangerous input to prevent XSS", () => {
  assert.equal(escapeHtml(null), "");
  assert.equal(escapeHtml(undefined), "");
  assert.equal(escapeHtml("John Doe"), "John Doe");
  assert.equal(
    escapeHtml('<img src=x onerror="alert(1)">'),
    "&lt;img src=x onerror=&quot;alert(1)&quot;&gt;"
  );
  assert.equal(
    escapeHtml("<script>alert('xss')</script>"),
    "&lt;script&gt;alert(&#039;xss&#039;)&lt;/script&gt;"
  );
  assert.equal(
    escapeHtml("A & B 'Special' \"Quotes\""),
    "A &amp; B &#039;Special&#039; &quot;Quotes&quot;"
  );
});

test("wrapIndex correctly wraps circular index around N items", () => {
  const N = 12;
  assert.equal(wrapIndex(0, N), 0);
  assert.equal(wrapIndex(5, N), 5);
  assert.equal(wrapIndex(11, N), 11);
  assert.equal(wrapIndex(12, N), 0);
  assert.equal(wrapIndex(13, N), 1);
  assert.equal(wrapIndex(-1, N), 11);
  assert.equal(wrapIndex(-2, N), 10);
});

test("calcCircularDiff calculates the shortest difference for 7-card fan arc", () => {
  const N = 12;
  // Center card: diff is 0
  assert.equal(calcCircularDiff(0, 0, N), 0);
  assert.equal(calcCircularDiff(5, 5, N), 0);

  // Adjacent cards (offset ±1)
  assert.equal(calcCircularDiff(1, 0, N), 1);
  assert.equal(calcCircularDiff(11, 0, N), -1);

  // Edge cards (offset ±3)
  assert.equal(calcCircularDiff(3, 0, N), 3);
  assert.equal(calcCircularDiff(9, 0, N), -3);

  // Symmetry when wrapping at ends
  assert.equal(calcCircularDiff(0, 11, N), 1);
  assert.equal(calcCircularDiff(10, 11, N), -1);
});

test("PORTFOLIO_WORKS has valid metadata and image links", () => {
  assert.ok(Array.isArray(PORTFOLIO_WORKS));
  assert.equal(PORTFOLIO_WORKS.length, 12);

  for (const work of PORTFOLIO_WORKS) {
    assert.ok(work.id && typeof work.id === "string", `Missing id in ${JSON.stringify(work)}`);
    assert.ok(work.title && typeof work.title === "string", `Missing title in ${work.id}`);
    assert.ok(work.image && typeof work.image === "string", `Missing image in ${work.id}`);
    assert.ok(["poster", "socmed"].includes(work.category), `Invalid category in ${work.id}`);
    assert.ok(Array.isArray(work.specs), `Missing specs array in ${work.id}`);
  }
});

test("WhatsApp studio number and link formation", () => {
  assert.equal(STUDIO_WA_NUMBER, "6289519203345");
  const sampleText = "Halo Sukunaru Studio, saya *Budi*.\n\nSaya ingin berdiskusi.";
  const encoded = encodeURIComponent(sampleText);
  const waUrl = `https://wa.me/${STUDIO_WA_NUMBER}?text=${encoded}`;

  assert.ok(waUrl.startsWith("https://wa.me/6289519203345?text="));
  assert.ok(waUrl.includes("*Budi*"));
});
