import Head from "next/head";
import Link from "next/link";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { getAllArticlesMeta, type ArticleMeta } from "@/lib/articles";

type Props = {
  articles: ArticleMeta[];
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      articles: getAllArticlesMeta(),
    },
  };
};

export default function ArticlesIndex({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>SEO Articles | ByteBuildersLab</title>
        <meta
          name="description"
          content="Example search-focused articles powered by Markdown and frontmatter."
        />
      </Head>

      <div className="min-h-screen bg-[var(--color-ink-soft)] text-[var(--color-ink)]">
        <main className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">
          <section className="relative overflow-hidden rounded-[2.2rem] border border-[var(--color-line)] bg-white px-6 py-10 shadow-[var(--shadow-panel)] lg:px-10 lg:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(104,143,179,0.18),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.9),rgba(236,242,247,0.9))]" />
            <div className="relative max-w-3xl">
              <p className="section-kicker">The System</p>
              <h1 className="section-title max-w-2xl">
                Examples of workflows which can be optimized with AI
              </h1>
              {/* <p className="section-copy max-w-2xl">
                This example index is built from local Markdown files with frontmatter. Add
                a new file in `content/articles` and the page is generated automatically.
              </p> */}
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group rounded-[1.8rem] border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-panel)]"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  <span>{article.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                  <span>{formatDate(article.publishedAt)}</span>
                </div>

                <h2 className="title-safe mt-5 font-[var(--font-display)] text-4xl leading-none">
                  {article.title}
                </h2>
                <p className="copy-safe mt-5 text-base leading-8 text-[var(--color-muted)]">
                  {article.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-line-strong)] px-3 py-1 text-xs font-medium text-[var(--color-accent-deep)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/articles/${article.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] transition group-hover:text-[var(--color-accent-deep)]"
                >
                  Read article
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
