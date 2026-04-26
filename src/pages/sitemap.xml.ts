import type { GetServerSideProps } from "next";
import { getAllArticlesMeta } from "@/lib/articles";

const DEFAULT_SITE_URL = "https://bytebuilderslab.com";

function normalizeSiteUrl(value?: string) {
  if (!value) return DEFAULT_SITE_URL;
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildSitemapXml(siteUrl: string) {
  const staticPages = [
    { path: "/en", lastModified: undefined, changeFrequency: "weekly", priority: "1.0" },
    { path: "/de", lastModified: undefined, changeFrequency: "weekly", priority: "0.9" },
    { path: "/articles", lastModified: undefined, changeFrequency: "weekly", priority: "0.8" },
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

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  const sitemap = buildSitemapXml(siteUrl);

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
