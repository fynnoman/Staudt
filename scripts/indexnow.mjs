#!/usr/bin/env node
// Submit the current sitemap URLs to IndexNow (Bing, Yandex, Seznam, Naver, Yep).
// Run after deploy: `node scripts/indexnow.mjs`
import { SERVICES } from "../lib/business.js";

const KEY = "547c692685ba80a17725c06e041b6530";
const HOST = "www.fzgtechstaudt.de";
const BASE = `https://${HOST}`;

const staticUrls = [
  `${BASE}/`,
  `${BASE}/portfolio`,
  `${BASE}/kontakt`,
  `${BASE}/impressum`,
  `${BASE}/datenschutz`
];

// Service URLs — add new ones automatically.
const serviceUrls = [
  "inspektion",
  "hu-au",
  "glasservice",
  "reifenwechsel-lagerung",
  "kfz-service",
  "oelwechsel",
  "motorrad"
].map((slug) => `${BASE}/leistungen/${slug}`);

const urlList = [...staticUrls, ...serviceUrls];

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `${BASE}/${KEY}.txt`,
  urlList
};

try {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body)
  });
  if (res.ok) {
    console.log(`IndexNow: submitted ${urlList.length} URLs (status ${res.status})`);
  } else {
    const text = await res.text();
    console.error(`IndexNow failed: ${res.status} ${text}`);
    process.exit(1);
  }
} catch (err) {
  console.error("IndexNow request error:", err);
  process.exit(1);
}
