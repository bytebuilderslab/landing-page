import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import enContent from "@/locales/en.json";
import deContent from "@/locales/de.json";
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

type Language = "en" | "de";

const content = {
  en: enContent,
  de: deContent,
} as const;

type Content = typeof enContent;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { lang: "en" } }, { params: { lang: "de" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ language: Language }> = async ({
  params,
}) => {
  const language = params?.lang === "de" ? "de" : "en";

  return {
    props: {
      language,
    },
  };
};

export default function LocalizedPage({
  language,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const t: Content = content[language];
  const otherLanguage: Language = language === "en" ? "de" : "en";
  const currentBase = `/${language}`;
  const otherBase = `/${otherLanguage}`;

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="de" href="/de" />
      </Head>

      <div className="min-h-screen bg-[var(--color-ink-soft)] text-[var(--color-ink)]">
        <header className="border-b border-[var(--color-line)] bg-[rgba(245,247,250,0.92)]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-10">
            <Link href={currentBase} className="group inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white">
                <span className="relative h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[var(--color-accent)]" />
                  <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--color-accent)]" />
                  <span className="absolute left-[2px] top-[2px] h-1.5 w-1.5 rounded-full border border-[var(--color-accent)] bg-[var(--color-ink-soft)]" />
                  <span className="absolute bottom-[2px] right-[2px] h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                </span>
              </span>
              <span className="font-[var(--font-display)] text-2xl tracking-[0.03em] text-[var(--color-ink)]">
                ByteBuildersLab
              </span>
            </Link>

            <div className="flex items-center gap-4 lg:gap-8">
              <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--color-muted)] lg:flex">
                <a className="transition hover:text-[var(--color-ink)]" href={`${currentBase}#process`}>
                  {t.nav.process}
                </a>
                <a className="transition hover:text-[var(--color-ink)]" href={`${currentBase}#results`}>
                  {t.nav.results}
                </a>
                <a className="transition hover:text-[var(--color-ink)]" href={`${currentBase}#fit`}>
                  {t.nav.fit}
                </a>
                <a className="transition hover:text-[var(--color-ink)]" href={`${currentBase}#about`}>
                  {t.nav.about}
                </a>
              </nav>

              <div className="flex items-center gap-3">
                <div
                  aria-label={t.languageLabel}
                  className="inline-flex rounded-full border border-[var(--color-line-strong)] bg-white p-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]"
                >
                  <Link
                    href="/en"
                    className={`rounded-full px-3 py-2 transition ${
                      language === "en"
                        ? "bg-[var(--color-ink)] text-white"
                        : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    EN
                  </Link>
                  <Link
                    href="/de"
                    className={`rounded-full px-3 py-2 transition ${
                      language === "de"
                        ? "bg-[var(--color-ink)] text-white"
                        : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    DE
                  </Link>
                </div>

                <a
                  href={`${currentBase}#book`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-deep)]"
                >
                  {t.cta.book}
                  <CalendarDaysIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </header>

        <main id="top">
          <section className="relative overflow-hidden border-b border-[var(--color-line)]">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(70,99,129,0.45),transparent)]" />
            <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
              <div className="max-w-2xl">
                <p className="inline-flex items-center rounded-full border border-[var(--color-line-strong)] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  {t.hero.eyebrow}
                </p>
                <h1 className="title-safe mt-8 max-w-3xl font-[var(--font-display)] text-6xl leading-[0.92] text-[var(--color-ink)] sm:text-7xl">
                  {t.hero.title}
                </h1>
                <div className="copy-safe mt-8 max-w-xl space-y-4 text-lg leading-8 text-[var(--color-muted)]">
                  <p>{t.hero.body1}</p>
                  <p>{t.hero.body2}</p>
                </div>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={`${currentBase}#book`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-deep)]"
                  >
                    {t.cta.book}
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`${currentBase}#examples`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent-deep)]"
                  >
                    {t.cta.examples}
                    <ChevronRightIcon className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-14 grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
                  {t.hero.trust.map((item) => (
                    <div
                      key={item.title}
                      className="min-w-0 rounded-[1.6rem] border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-card)]"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                        {item.title}
                      </p>
                      <p className="copy-safe mt-3 text-sm leading-6 text-[var(--color-ink)]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(104,143,179,0.24),transparent_68%)] blur-2xl" />
                <div className="absolute bottom-6 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(57,82,108,0.18),transparent_70%)] blur-3xl" />

                <div className="relative overflow-hidden rounded-[1.4rem] border border-[var(--color-line-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(238,243,248,0.96))] p-6 shadow-[var(--shadow-panel)]">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
                  <div className="mb-6 flex items-center justify-between border-b border-[var(--color-line)] pb-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                        {t.diagnosis.eyebrow}
                      </p>
                      <p className="mt-2 text-xl font-semibold text-[var(--color-ink)]">
                        {t.diagnosis.title}
                      </p>
                    </div>
                    <span className="rounded-full border border-[var(--color-line-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-deep)]">
                      {t.diagnosis.status}
                    </span>
                  </div>

                  <div className="relative grid gap-5 xl:grid-cols-[1fr_auto_1fr]">
                    <ProcessState
                      title={t.diagnosis.before}
                      badge={t.diagnosis.friction}
                      tone="before"
                      steps={t.diagnosis.beforeSteps}
                    />
                    <div className="flex items-center justify-center py-2 xl:py-0">
                      <div className="flex items-center gap-3 xl:flex-col">
                        <span className="hidden h-20 w-px bg-[linear-gradient(180deg,rgba(57,82,108,0.02),rgba(57,82,108,0.3),rgba(57,82,108,0.02))] xl:block" />
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white shadow-[0_10px_25px_rgba(23,39,54,0.08)]">
                          <ArrowRightIcon className="h-5 w-5 text-[var(--color-accent-deep)]" />
                        </div>
                        <span className="hidden h-20 w-px bg-[linear-gradient(180deg,rgba(57,82,108,0.02),rgba(57,82,108,0.3),rgba(57,82,108,0.02))] xl:block" />
                      </div>
                    </div>
                    <ProcessState
                      title={t.diagnosis.after}
                      badge={t.diagnosis.resolved}
                      tone="after"
                      steps={t.diagnosis.afterSteps}
                    />
                  </div>

                  <div className="mt-6 grid gap-3 rounded-[1rem] border border-dashed border-[var(--color-line-strong)] bg-[rgba(246,248,251,0.9)] p-5 md:grid-cols-2 xl:grid-cols-3">
                    {t.diagnosis.signals.map((signal) => (
                      <AuditSignal key={signal.label} {...signal} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="examples" className="border-b border-[var(--color-line)] bg-white">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
              <div className="max-w-3xl">
                <p className="section-kicker">{t.sections.examples.kicker}</p>
                <h2 className="section-title">{t.sections.examples.title}</h2>
                <p className="section-copy">{t.sections.examples.copy}</p>
              </div>

              <div className="mt-12 grid gap-8 xl:grid-cols-2">
                {t.examplePanels.map((panel) => (
                  <article
                    key={panel.category}
                    className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-ink-soft)] shadow-[var(--shadow-card)]"
                  >
                    <div className="flex items-center justify-between border-b border-[var(--color-line)] px-6 py-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                          {panel.title}
                        </p>
                        <h3 className="title-safe mt-2 text-xl font-semibold text-[var(--color-ink)] sm:text-2xl">
                          {panel.category}
                        </h3>
                      </div>
                      <span className="rounded-full border border-[var(--color-line-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-deep)]">
                        {t.sections.examples.badge}
                      </span>
                    </div>

                    <div className="grid gap-px bg-[var(--color-line)] md:grid-cols-2">
                      <ComparisonColumn
                        title={t.diagnosis.before}
                        badge={panel.beforeLabel}
                        tone="before"
                        items={panel.before}
                      />
                      <ComparisonColumn
                        title={t.diagnosis.after}
                        badge={panel.afterLabel}
                        tone="after"
                        items={panel.after}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="process" className="border-b border-[var(--color-line)]">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
              <div className="max-w-xl">
                <p className="section-kicker">{t.sections.process.kicker}</p>
                <h2 className="section-title">{t.sections.process.title}</h2>
                <p className="section-copy">{t.sections.process.copy}</p>
              </div>

              <div className="grid gap-5">
                {t.processSteps.map((step) => (
                  <div
                    key={step.id}
                    className="grid gap-6 rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)] md:grid-cols-[auto_1fr]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-ink-soft)] text-sm font-semibold tracking-[0.18em] text-[var(--color-accent-deep)]">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="title-safe text-xl font-semibold text-[var(--color-ink)] sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="copy-safe mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="book" className="border-b border-[var(--color-line)] bg-white">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
              <div className="grid gap-10 rounded-[2.2rem] border border-[var(--color-line-strong)] bg-[linear-gradient(180deg,#fbfcfe_0%,#eef3f8_100%)] p-8 shadow-[var(--shadow-panel)] lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
                <div className="max-w-2xl">
                  <p className="section-kicker">{t.sections.audit.kicker}</p>
                  <h2 className="section-title">{t.sections.audit.title}</h2>
                  <p className="section-copy">{t.sections.audit.copy}</p>
                </div>

                <div className="rounded-[1.8rem] border border-[var(--color-line-strong)] bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {t.sections.audit.phaseOne}
                  </p>
                  <div className="mt-5 flex items-end justify-between gap-4 border-b border-[var(--color-line)] pb-5">
                    <div>
                      <p className="font-[var(--font-display)] text-5xl leading-none text-[var(--color-ink)]">
                        CHF 1499
                      </p>
                      <p className="copy-safe mt-2 text-sm text-[var(--color-muted)]">
                        {t.sections.audit.priceNote}
                      </p>
                    </div>
                    <p className="rounded-full border border-[var(--color-line-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-deep)]">
                      {t.sections.audit.duration}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-4 text-sm leading-6 text-[var(--color-ink)]">
                    {t.sections.audit.items.map((item) => (
                      <ListItem key={item} text={item} />
                    ))}
                  </ul>

                  <a
                    href="https://cal.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-ink)] bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-deep)]"
                  >
                    {t.cta.book}
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="fit" className="border-b border-[var(--color-line)]">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
              <div className="max-w-3xl">
                <p className="section-kicker">{t.sections.fit.kicker}</p>
                <h2 className="section-title">{t.sections.fit.title}</h2>
                <p className="section-copy">{t.sections.fit.copy}</p>
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-card)]">
                  <h3 className="title-safe text-xl font-semibold text-[var(--color-ink)] sm:text-2xl">
                    {t.sections.fit.positive}
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {t.fitSignals.map((item) => (
                      <ListItem key={item} text={item} />
                    ))}
                  </ul>
                </div>
                <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-ink-soft)] p-7 shadow-[var(--shadow-card)]">
                  <h3 className="title-safe text-xl font-semibold text-[var(--color-ink)] sm:text-2xl">
                    {t.sections.fit.negative}
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {t.disqualifiers.map((item) => (
                      <li
                        key={item}
                        className="copy-safe rounded-[1.2rem] border border-dashed border-[var(--color-line-strong)] px-4 py-4 text-sm leading-6 text-[var(--color-muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="results" className="border-b border-[var(--color-line)] bg-white">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
              <div className="max-w-3xl">
                <p className="section-kicker">{t.sections.results.kicker}</p>
                <h2 className="section-title">{t.sections.results.title}</h2>
                <p className="section-copy">{t.sections.results.copy}</p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {t.proofCards.map((card) => (
                  <article
                    key={card.metric}
                    className="min-w-0 rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-ink-soft)] p-6 shadow-[var(--shadow-card)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {card.metric}
                    </p>
                    <h3 className="title-safe mt-3 text-xl font-semibold text-[var(--color-ink)] sm:text-2xl">
                      {card.title}
                    </h3>
                    <p className="copy-safe mt-4 text-sm leading-6 text-[var(--color-muted)]">
                      {card.note}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="border-b border-[var(--color-line)]">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
              <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-card)]">
                <div className="relative min-h-[28rem] overflow-hidden rounded-[1.6rem] border border-dashed border-[var(--color-line-strong)] bg-[linear-gradient(180deg,rgba(241,245,249,0.9),rgba(225,232,240,0.9))]">
                  <Image
                    src="/Headshot_Ameet_Madan.png"
                    alt="Portrait"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              <div>
                <p className="section-kicker">{t.sections.about.kicker}</p>
                <div className="mt-6">
                  <p className="title-safe font-[var(--font-display)] text-4xl leading-[1.05] text-[var(--color-ink)] lg:text-5xl">
                    {t.sections.about.quote}
                  </p>
                  <div className="copy-safe mt-8 space-y-4 text-base leading-8 text-[var(--color-muted)]">
                    {t.sections.about.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-[var(--color-line)] bg-white">
            <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
              <div className="max-w-3xl">
                <p className="section-kicker">{t.sections.faq.kicker}</p>
                <h2 className="section-title">{t.sections.faq.title}</h2>
              </div>

              <div className="mt-12 space-y-4">
                {t.faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-[1.6rem] border border-[var(--color-line)] bg-[var(--color-ink-soft)] p-6 shadow-[var(--shadow-card)]"
                  >
                    <summary className="title-safe cursor-pointer list-none text-lg font-semibold text-[var(--color-ink)]">
                      <span className="inline-flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                        {item.question}
                      </span>
                    </summary>
                    <p className="copy-safe mt-4 max-w-3xl pl-5 text-base leading-7 text-[var(--color-muted)]">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[var(--color-ink)] text-white">
            <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(255,255,255,0.62)]">
                {t.sections.final.kicker}
              </p>
              <h2 className="title-safe mx-auto mt-6 max-w-3xl font-[var(--font-display)] text-5xl leading-[0.95] text-white sm:text-6xl">
                {t.sections.final.title}
              </h2>
              <p className="copy-safe mx-auto mt-6 max-w-2xl text-lg leading-8 text-[rgba(255,255,255,0.74)]">
                {t.sections.final.copy}
              </p>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-white bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-accent-soft)]"
              >
                {t.cta.book}
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
            </div>
          </section>
        </main>

        <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[var(--color-ink)] text-[rgba(255,255,255,0.7)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_auto] lg:px-10">
            <div>
              <p className="font-[var(--font-display)] text-2xl text-white">
                ByteBuildersLab
              </p>
              <p className="mt-3 max-w-md text-sm leading-6">
                {t.sections.footer.descriptor}
              </p>
            </div>

            <div className="grid gap-6 text-sm md:grid-cols-3">
              <div className="space-y-3">
                <a className="block transition hover:text-white" href={`${currentBase}#process`}>
                  {t.nav.process}
                </a>
                <a className="block transition hover:text-white" href={`${currentBase}#results`}>
                  {t.nav.results}
                </a>
                <a className="block transition hover:text-white" href={`${currentBase}#fit`}>
                  {t.nav.fit}
                </a>
              </div>
              <div className="space-y-3">
                <a className="block transition hover:text-white" href={`${currentBase}#about`}>
                  {t.nav.about}
                </a>
                <a
                  className="block transition hover:text-white"
                  href="mailto:hello@bytebuilderslab.com"
                >
                  hello@bytebuilderslab.com
                </a>
                <a
                  className="block transition hover:text-white"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="space-y-3">
                <a
                  className="block transition hover:text-white"
                  href="https://cal.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.sections.footer.booking}
                </a>
                <Link className="block transition hover:text-white" href={otherBase}>
                  {otherLanguage.toUpperCase()}
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function ProcessState({
  title,
  badge,
  tone,
  steps,
}: {
  title: string;
  badge: string;
  tone: "before" | "after";
  steps: readonly string[];
}) {
  return (
    <div
      className={`rounded-[1.6rem] border p-4 ${
        tone === "before"
          ? "border-[rgba(140,156,172,0.35)] bg-[rgba(231,236,242,0.86)]"
          : "workflow-resolve border-[rgba(99,129,158,0.35)] bg-[rgba(252,253,255,0.98)]"
      }`}
    >
      <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-deep)]">
            {tone === "before" ? "A" : "B"}
          </span>
          <p className="title-safe text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            {title}
          </p>
        </div>
        <span
          className={`rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
            tone === "before"
              ? "bg-[rgba(111,127,143,0.12)] text-[var(--color-muted)]"
              : "bg-[rgba(91,123,154,0.12)] text-[var(--color-accent-deep)]"
          }`}
        >
          {badge}
        </span>
      </div>
      <div className="mt-4 space-y-3">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`workflow-step grid grid-cols-[auto_1fr] items-start gap-3 rounded-[0.95rem] border px-4 py-3.5 text-sm ${
              tone === "before"
                ? "border-[rgba(143,155,168,0.32)] bg-[rgba(255,255,255,0.78)] text-[var(--color-ink)]"
                : "border-[rgba(126,154,179,0.28)] bg-[rgba(247,250,253,1)] text-[var(--color-ink)]"
            }`}
            style={{ animationDelay: `${index * 140}ms` }}
          >
            <span className="mt-0.5 inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="copy-safe leading-6">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AuditSignal({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
        {label}
      </p>
      <p className="title-safe mt-2 text-lg font-semibold text-[var(--color-ink)]">{value}</p>
      <p className="copy-safe mt-1 text-sm leading-6 text-[var(--color-muted)]">{detail}</p>
    </div>
  );
}

function ComparisonColumn({
  title,
  badge,
  tone,
  items,
}: {
  title: string;
  badge: string;
  tone: "before" | "after";
  items: readonly string[];
}) {
  return (
    <div className="bg-white p-6">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="title-safe text-xl font-semibold text-[var(--color-ink)]">{title}</h3>
        <span
          className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${
            tone === "before"
              ? "bg-[rgba(111,127,143,0.12)] text-[var(--color-muted)]"
              : "bg-[rgba(91,123,154,0.12)] text-[var(--color-accent-deep)]"
          }`}
        >
          {badge}
        </span>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={item}
            className={`workflow-step rounded-[1.2rem] border px-4 py-4 text-sm leading-6 ${
              tone === "before"
                ? "border-[rgba(140,156,172,0.28)] bg-[rgba(242,245,248,0.92)] text-[var(--color-ink)]"
                : "workflow-resolve border-[rgba(126,154,179,0.28)] bg-[rgba(247,250,253,0.98)] text-[var(--color-ink)]"
            }`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <span className="copy-safe">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-[var(--color-ink)]">
      <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none text-[var(--color-accent-deep)]" />
      <span className="copy-safe min-w-0">{text}</span>
    </li>
  );
}
