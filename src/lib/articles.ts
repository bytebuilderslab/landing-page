import fs from "fs";
import path from "path";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

type FrontmatterValue = string | string[];

type ArticleFrontmatter = Record<string, FrontmatterValue>;

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: string;
  heroQuote?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type Article = ArticleMeta & {
  content: string;
  html: string;
  headings: Array<{
    id: string;
    level: 2 | 3;
    text: string;
  }>;
};

function ensureArticlesDir() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    fs.mkdirSync(ARTICLES_DIR, { recursive: true });
  }
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderInlineMarkdown(value: string) {
  let html = escapeHtml(value);

  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]+)\)/g,
    '<a href="$2" class="article-link">$1</a>',
  );
  html = html.replace(/`([^`]+)`/g, '<code class="article-inline-code">$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  return html;
}

function parseFrontmatter(source: string) {
  if (!source.startsWith("---\n")) {
    return { frontmatter: {} as ArticleFrontmatter, content: source.trim() };
  }

  const closingIndex = source.indexOf("\n---\n", 4);

  if (closingIndex === -1) {
    return { frontmatter: {} as ArticleFrontmatter, content: source.trim() };
  }

  const rawFrontmatter = source.slice(4, closingIndex);
  const content = source.slice(closingIndex + 5).trim();
  const lines = rawFrontmatter.split("\n");
  const frontmatter: ArticleFrontmatter = {};
  let activeArrayKey: string | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (!line.trim()) {
      continue;
    }

    if (line.startsWith("  - ") || line.startsWith("- ")) {
      if (!activeArrayKey) {
        continue;
      }

      const value = line.replace(/^\s*-\s*/, "").trim().replace(/^["']|["']$/g, "");
      const current = frontmatter[activeArrayKey];
      if (Array.isArray(current)) {
        current.push(value);
      }
      continue;
    }

    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      activeArrayKey = null;
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();

    if (!value) {
      frontmatter[key] = [];
      activeArrayKey = key;
      continue;
    }

    frontmatter[key] = value.replace(/^["']|["']$/g, "");
    activeArrayKey = null;
  }

  return { frontmatter, content };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const html: string[] = [];
  const headings: Article["headings"] = [];
  let paragraphBuffer: string[] = [];
  let listItems: string[] = [];
  let orderedListItems: string[] = [];
  let quoteBuffer: string[] = [];
  let codeFence: { language: string; lines: string[] } | null = null;

  const flushParagraph = () => {
    if (!paragraphBuffer.length) return;
    html.push(`<p>${renderInlineMarkdown(paragraphBuffer.join(" "))}</p>`);
    paragraphBuffer = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    html.push(
      `<ul>${listItems.map((item) => `<li>${renderInlineMarkdown(item)}</li>`).join("")}</ul>`,
    );
    listItems = [];
  };

  const flushOrderedList = () => {
    if (!orderedListItems.length) return;
    html.push(
      `<ol>${orderedListItems.map((item) => `<li>${renderInlineMarkdown(item)}</li>`).join("")}</ol>`,
    );
    orderedListItems = [];
  };

  const flushQuote = () => {
    if (!quoteBuffer.length) return;
    html.push(
      `<blockquote><p>${renderInlineMarkdown(quoteBuffer.join(" "))}</p></blockquote>`,
    );
    quoteBuffer = [];
  };

  const flushAll = () => {
    flushParagraph();
    flushList();
    flushOrderedList();
    flushQuote();
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      flushAll();

      if (codeFence) {
        html.push(
          `<pre><code class="language-${escapeHtml(codeFence.language)}">${escapeHtml(
            codeFence.lines.join("\n"),
          )}</code></pre>`,
        );
        codeFence = null;
      } else {
        codeFence = {
          language: line.replace("```", "").trim(),
          lines: [],
        };
      }
      continue;
    }

    if (codeFence) {
      codeFence.lines.push(line);
      continue;
    }

    if (!line.trim()) {
      flushAll();
      continue;
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      flushAll();
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      const id = slugify(text);

      if (level === 2 || level === 3) {
        headings.push({ id, level, text });
      }

      html.push(`<h${level} id="${id}">${renderInlineMarkdown(text)}</h${level}>`);
      continue;
    }

    if (line === "---") {
      flushAll();
      html.push("<hr />");
      continue;
    }

    if (line.startsWith("> ")) {
      flushParagraph();
      flushList();
      flushOrderedList();
      quoteBuffer.push(line.slice(2).trim());
      continue;
    }

    if (line.match(/^-\s+/)) {
      flushParagraph();
      flushOrderedList();
      flushQuote();
      listItems.push(line.replace(/^-\s+/, "").trim());
      continue;
    }

    if (line.match(/^\d+\.\s+/)) {
      flushParagraph();
      flushList();
      flushQuote();
      orderedListItems.push(line.replace(/^\d+\.\s+/, "").trim());
      continue;
    }

    paragraphBuffer.push(line.trim());
  }

  flushAll();

  return {
    html: html.join("\n"),
    headings,
  };
}

function resolveMeta(slug: string, frontmatter: ArticleFrontmatter, content: string): ArticleMeta {
  const tags = Array.isArray(frontmatter.tags) ? frontmatter.tags : [];

  return {
    slug,
    title: typeof frontmatter.title === "string" ? frontmatter.title : slug,
    description:
      typeof frontmatter.description === "string"
        ? frontmatter.description
        : content.slice(0, 160),
    excerpt:
      typeof frontmatter.excerpt === "string"
        ? frontmatter.excerpt
        : content.slice(0, 220),
    publishedAt:
      typeof frontmatter.publishedAt === "string"
        ? frontmatter.publishedAt
        : new Date().toISOString().slice(0, 10),
    updatedAt: typeof frontmatter.updatedAt === "string" ? frontmatter.updatedAt : undefined,
    author: typeof frontmatter.author === "string" ? frontmatter.author : "ByteBuildersLab",
    category:
      typeof frontmatter.category === "string" ? frontmatter.category : "SEO Strategy",
    tags,
    readingTime:
      typeof frontmatter.readingTime === "string" ? frontmatter.readingTime : "6 min read",
    heroQuote:
      typeof frontmatter.heroQuote === "string" ? frontmatter.heroQuote : undefined,
    ctaLabel: typeof frontmatter.ctaLabel === "string" ? frontmatter.ctaLabel : undefined,
    ctaHref: typeof frontmatter.ctaHref === "string" ? frontmatter.ctaHref : undefined,
  };
}

export function getAllArticleSlugs() {
  ensureArticlesDir();

  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllArticlesMeta() {
  return getAllArticleSlugs()
    .map((slug) => getArticleBySlug(slug))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map(({ html: _html, content: _content, headings: _headings, ...meta }) => meta);
}

export function getArticleBySlug(slug: string): Article {
  const fullPath = path.join(ARTICLES_DIR, `${slug}.md`);
  const source = fs.readFileSync(fullPath, "utf8");
  const { frontmatter, content } = parseFrontmatter(source);
  const { html, headings } = renderMarkdown(content);
  const meta = resolveMeta(slug, frontmatter, content);

  return {
    ...meta,
    content,
    html,
    headings,
  };
}
