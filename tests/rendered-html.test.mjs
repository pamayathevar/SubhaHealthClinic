import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

test("exports the complete clinic homepage for Netlify", async () => {
  const [html, pageSource] = await Promise.all([
    readFile(new URL("index.html", outputRoot), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(html, /<title>Subha Health ENT Clinic \| Dindigul<\/title>/i);
  assert.match(html, /Breathe easier\./);
  assert.match(html, /Diagnostic endoscopies/);
  assert.match(html, /Care with clarity\./);
  assert.match(html, /Representative care imagery/);
  assert.match(html, /subhahealthentdgl@gmail\.com/);
  assert.match(pageSource, /அனைவரும் அணுகக்கூடிய தரமான ENT சிகிச்சை/);
  assert.match(pageSource, /ஒவ்வொரு கட்டத்திலும் அக்கறை/);
  assert.match(html, /https:\/\/subhahealthclinic\.com\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("exports required public assets", async () => {
  await Promise.all([
    access(new URL("subha-health-logo.png", outputRoot)),
    access(new URL("og.png", outputRoot)),
    access(new URL("services/diagnostic-endoscopy.jpg", outputRoot)),
    access(new URL("services/microscopic-ear-surgery.jpg", outputRoot)),
    access(new URL("gallery/ear-examination.jpg", outputRoot)),
    access(new URL("gallery/otoendoscopy-examination.jpg", outputRoot)),
    access(new URL("gallery/doctor-consultation.jpg", outputRoot)),
  ]);
});
