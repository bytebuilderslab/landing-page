import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { getAllArticleSlugs, getArticleBySlug, type Article } from "@/lib/articles";

type Props = {
  article: Article;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllArticleSlugs().map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";

  return {
    props: {
      article: getArticleBySlug(slug),
    },
  };
};

export default function ArticlePage({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author,
    },
  };

  return (
    <>
      <Head>
        <title>{article.title} | ByteBuildersLab</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:type" content="article" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-[var(--color-ink-soft)] text-[var(--color-ink)]">
        <main className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to articles
          </Link>

          <section className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <article className="overflow-hidden rounded-[2.2rem] border border-[var(--color-line)] bg-white shadow-[var(--shadow-panel)]">
              <div className="border-b border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(245,249,252,0.98),rgba(229,237,244,0.92))] px-6 py-10 lg:px-10 lg:py-14">
                <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  <span>{article.category}</span>
                  <span className="h-1 w-1 self-center rounded-full bg-[var(--color-accent)]" />
                  <span>{article.readingTime}</span>
                </div>

                <h1 className="title-safe mt-6 max-w-4xl font-[var(--font-display)] text-5xl leading-[0.94] sm:text-6xl">
                  {article.title}
                </h1>
                <p className="copy-safe mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
                  {article.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--color-muted)]">
                  <span>By {article.author}</span>
                  <span>Published {formatDate(article.publishedAt)}</span>
                  {article.updatedAt ? <span>Updated {formatDate(article.updatedAt)}</span> : null}
                </div>

                {article.heroQuote ? (
                  <blockquote className="mt-10 max-w-3xl border-l-2 border-[var(--color-accent)] pl-5 font-[var(--font-display)] text-2xl italic leading-9 text-[var(--color-accent-deep)]">
                    {article.heroQuote}
                  </blockquote>
                ) : null}
              </div>

              <div className="px-6 py-8 lg:px-10 lg:py-10">
                <div className="mb-8 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-line-strong)] bg-[var(--color-ink-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent-deep)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="article-prose"
                  dangerouslySetInnerHTML={{ __html: article.html }}
                />
              </div>
            </article>

            <aside className="grid gap-5 lg:sticky lg:top-8">
              <div className="rounded-[1.6rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  On this page
                </p>
                <div className="mt-4 grid gap-3">
                  {article.headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={`text-sm leading-6 text-[var(--color-muted)] transition hover:text-[var(--color-ink)] ${
                        heading.level === 3 ? "pl-4" : ""
                      }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-[var(--color-line)] bg-[var(--color-ink)] p-6 text-white shadow-[var(--shadow-card)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Book a Call
                </p>
                <h2 className="mt-4 font-[var(--font-display)] text-3xl leading-none">
                  Does this sound like your team or your problem?
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/76">
                  Let us talk more about your specific use case and how we can help you build the right AI solution for your team. We offer a free 30-minute strategy call to discuss your needs and explore potential solutions.
                </p>
                <Link
                  href={article.ctaHref ?? "/en#book"}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-accent-soft)]"
                >
                  {"Book a strategy call"}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </section>
        </main>
      </div>
    </>
  );
}
