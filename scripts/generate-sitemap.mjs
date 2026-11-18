// Writes out/sitemap.xml after `next build` (static export). It replaced the
// getServerSideProps route at /sitemap.xml, which a static export can't run.
// Imports the TypeScript article loader directly: Node strips the types.
import fs from "node:fs";
import path from "node:path";
import { getAllArticlesMeta } from "../src/lib/articles.ts";

const DEFAULT_SITE_URL = "https://bytebuilderslab.com";

function normalizeSiteUrl(value) {
  if (!value) return DEFAULT_SITE_URL;
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildSitemapXml(siteUrl) {
  const staticPages = [
    { path: "/en", lastModified: undefined, changeFrequency: "weekly", priority: "1.0" },
    { path: "/de", lastModified: undefined, changeFrequency: "weekly", priority: "0.9" },
    { path: "/articles", lastModified: undefined, changeFrequency: "weekly", priority: "0.8" },
    { path: "/privacy", lastModified: undefined, changeFrequency: "yearly", priority: "0.3" },
  ];

  const articlePages = getAllArticlesMeta().map((article) => ({
    path: `/articles/${article.slug}`,
    lastModified: article.updatedAt ?? article.publishedAt,
    changeFrequency: "monthly",
    priority: "0.7",
  }));

  const urls = [...staticPages, ...articlePages]
    .map(({ path, lastModified, changeFrequency, priority }) => {
      const fields = [
        `<loc>${escapeXml(`${siteUrl}${path}`)}</loc>`,
        lastModified ? `<lastmod>${escapeXml(lastModified)}</lastmod>` : "",
        `<changefreq>${changeFrequency}</changefreq>`,
        `<priority>${priority}</priority>`,
      ]
        .filter(Boolean)
        .join("");

      return `<url>${fields}</url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

const outFile = path.join(process.cwd(), "out", "sitemap.xml");
fs.writeFileSync(outFile, buildSitemapXml(normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)));
console.log(`sitemap: wrote ${outFile}`);
