#!/usr/bin/env node

/**
 * Generate sitemap.xml for static export
 * This script runs after the Next.js build to create a sitemap for GitHub Pages
 */

const fs = require('fs');
const path = require('path');

// Import chapter data
const CHAPTERS_INFO = [
  { number: 1, verseCount: 47 },
  { number: 2, verseCount: 72 },
  { number: 3, verseCount: 43 },
  { number: 4, verseCount: 42 },
  { number: 5, verseCount: 29 },
  { number: 6, verseCount: 47 },
  { number: 7, verseCount: 30 },
  { number: 8, verseCount: 28 },
  { number: 9, verseCount: 34 },
  { number: 10, verseCount: 42 },
  { number: 11, verseCount: 55 },
  { number: 12, verseCount: 20 },
  { number: 13, verseCount: 35 },
  { number: 14, verseCount: 27 },
  { number: 15, verseCount: 20 },
  { number: 16, verseCount: 24 },
  { number: 17, verseCount: 28 },
  { number: 18, verseCount: 78 }
];

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://nrenx.github.io/Bhagavad-gita';
const LAST_MODIFIED = new Date().toISOString();

function generateSitemap() {
  const urls = [];

  // Static pages
  urls.push({
    loc: `${BASE_URL}/`,
    lastmod: LAST_MODIFIED,
    changefreq: 'weekly',
    priority: '1.0'
  });

  urls.push({
    loc: `${BASE_URL}/chapters/`,
    lastmod: LAST_MODIFIED,
    changefreq: 'weekly',
    priority: '0.9'
  });

  urls.push({
    loc: `${BASE_URL}/about/`,
    lastmod: LAST_MODIFIED,
    changefreq: 'monthly',
    priority: '0.6'
  });

  urls.push({
    loc: `${BASE_URL}/donate/`,
    lastmod: LAST_MODIFIED,
    changefreq: 'monthly',
    priority: '0.5'
  });

  // Chapter pages
  CHAPTERS_INFO.forEach(chapter => {
    urls.push({
      loc: `${BASE_URL}/chapter/${chapter.number}/`,
      lastmod: LAST_MODIFIED,
      changefreq: 'weekly',
      priority: '0.8'
    });

    // Verse pages
    for (let verse = 1; verse <= chapter.verseCount; verse++) {
      urls.push({
        loc: `${BASE_URL}/chapter/${chapter.number}/verse/${verse}/`,
        lastmod: LAST_MODIFIED,
        changefreq: 'monthly',
        priority: '0.7'
      });
    }
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
}

// Generate sitemap
const sitemap = generateSitemap();

// Write to out directory
const outDir = path.join(process.cwd(), 'out');
const sitemapPath = path.join(outDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap, 'utf8');

console.log(`✓ Generated sitemap.xml with ${CHAPTERS_INFO.reduce((sum, ch) => sum + ch.verseCount + 1, 4)} URLs`);
console.log(`  Location: ${sitemapPath}`);
