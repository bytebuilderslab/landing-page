import Head from "next/head";
import Link from "next/link";
import type { GetStaticProps } from "next";

type Language = "de" | "en";

type Section = {
  heading: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
};

type PrivacyContent = {
  title: string;
  intro: string;
  lastUpdatedLabel: string;
  sections: readonly Section[];
};

// TODO(ameet): Replace with the legal entity name and postal address before merging.
// The nDSG (Art. 19) requires the controller's identity and contact details on this page.
const controllerName = "[Rechtlicher Firmenname]";
const controllerAddress = "[Strasse Nr., PLZ Ort, Schweiz]";
const contactEmail = "hello@bytebuilderslab.com";
const lastUpdated = "2026-11-18";

const content: Record<Language, PrivacyContent> = {
  de: {
    title: "Datenschutzerklärung",
    intro:
      "Diese Erklärung informiert gemäss dem Schweizer Datenschutzgesetz (nDSG), wie ByteBuildersLab Personendaten bearbeitet, wenn Sie diese Website besuchen oder von uns eine geschäftliche Kontaktaufnahme erhalten.",
    lastUpdatedLabel: "Stand",
    sections: [
      {
        heading: "1. Verantwortliche Stelle",
        paragraphs: [
          `${controllerName}, ${controllerAddress}`,
          `Kontakt für alle Datenschutzanliegen: ${contactEmail}`,
        ],
      },
      {
        heading: "2. Woher wir Ihre Daten haben",
        paragraphs: [
          "Wenn wir Unternehmen per E-Mail kontaktieren, stammen die Daten nicht von Ihnen persönlich, sondern aus öffentlichen Quellen:",
        ],
        items: [
          "Schweizerisches Handelsamtsblatt (SHAB) und das Handelsregister (Firmenname, UID, Sitz, Zweck, Organe)",
          "Öffentlich zugängliche Unternehmenswebsites inklusive Impressum (Tätigkeit, Geschäfts-E-Mail-Adresse, Ansprechpersonen)",
        ],
      },
      {
        heading: "3. Welche Daten wir bearbeiten",
        items: [
          "Firmendaten: Name, UID, Adresse, Branche, Website",
          "Geschäftliche Kontaktdaten: Name und Funktion der Ansprechperson, geschäftliche E-Mail-Adresse",
          "Kommunikationsverlauf: gesendete und empfangene Nachrichten, Antworten, Terminbuchungen",
          "Technische Daten beim Websitebesuch: IP-Adresse und Serverlogs durch den Hosting-Anbieter",
        ],
      },
      {
        heading: "4. Zweck der Bearbeitung",
        paragraphs: [
          "Wir kontaktieren ausschliesslich Unternehmen (B2B), die von unseren KI-Workflow-Audits profitieren könnten. Die E-Mails werden einzeln auf das jeweilige Unternehmen zugeschnitten und in geringer Menge versendet. Wir bearbeiten die Daten, um diese Kontaktaufnahme vorzubereiten, Antworten zu verwalten, Terminanfragen abzuwickeln und Ihren Widerspruch zu respektieren.",
        ],
      },
      {
        heading: "5. Dienstleister und Auslandbezug",
        paragraphs: [
          "Wir setzen Dienstleister ein, die Daten in unserem Auftrag bearbeiten. Einige davon sind im Ausland tätig (unter anderem EU und USA). Wir wählen Anbieter mit angemessenem Datenschutzniveau oder vertraglichen Garantien.",
        ],
        items: [
          "Brevo (E-Mail-Versand und Zustellung)",
          "Cal.com (Terminbuchung)",
          "Google (KI-Sprachmodell zur Unterstützung beim Verfassen von E-Mail-Entwürfen; es werden nur öffentliche Unternehmensinformationen übermittelt)",
          "CRM- und Automatisierungssysteme zur Verwaltung der Kontakte",
          "Hosting-Anbieter dieser Website",
        ],
      },
      {
        heading: "6. Aufbewahrung",
        items: [
          "Kontaktdaten ohne Reaktion: höchstens 12 Monate nach der letzten Kontaktaufnahme, danach Löschung",
          "Laufende Kundenbeziehung oder Dialog: so lange, wie er andauert, plus gesetzliche Aufbewahrungsfristen",
          "Widersprüche und Abmeldungen: Ihre E-Mail-Adresse bleibt dauerhaft auf einer Sperrliste, damit wir Sie nicht erneut kontaktieren",
        ],
      },
      {
        heading: "7. Ihre Rechte und Widerspruch",
        paragraphs: [
          `Sie können jederzeit Auskunft, Berichtigung oder Löschung Ihrer Daten verlangen und der Bearbeitung widersprechen. Eine kurze Antwort auf unsere E-Mail oder eine Nachricht an ${contactEmail} genügt. Ihr Widerspruch wird sofort umgesetzt, und Sie erhalten von uns keine weiteren Nachrichten.`,
          "Sie haben zudem das Recht, sich beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) zu beschweren.",
        ],
      },
      {
        heading: "8. Änderungen",
        paragraphs: [
          "Wir passen diese Erklärung an, wenn sich unsere Bearbeitungen ändern. Es gilt die jeweils hier veröffentlichte Fassung.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Notice",
    intro:
      "This notice explains, under the Swiss Federal Act on Data Protection (nFADP), how ByteBuildersLab processes personal data when you visit this website or receive a business email from us.",
    lastUpdatedLabel: "Last updated",
    sections: [
      {
        heading: "1. Controller",
        paragraphs: [
          `${controllerName}, ${controllerAddress}`,
          `Contact for all privacy matters: ${contactEmail}`,
        ],
      },
      {
        heading: "2. Where we get your data",
        paragraphs: [
          "When we contact companies by email, the data does not come from you personally but from public sources:",
        ],
        items: [
          "The Swiss Official Gazette of Commerce (SHAB) and the commercial register (company name, UID, seat, purpose, officers)",
          "Publicly accessible company websites including the legal notice (activities, business email address, contact persons)",
        ],
      },
      {
        heading: "3. What data we process",
        items: [
          "Company data: name, UID, address, industry, website",
          "Business contact data: name and role of the contact person, business email address",
          "Communication history: messages sent and received, replies, call bookings",
          "Technical data when visiting the website: IP address and server logs held by the hosting provider",
        ],
      },
      {
        heading: "4. Purpose",
        paragraphs: [
          "We only contact companies (B2B) that may benefit from our AI workflow audits. Each email is written individually for the company and sent in low volume. We process the data to prepare that outreach, manage replies, handle call requests and honour your objection.",
        ],
      },
      {
        heading: "5. Service providers and transfers abroad",
        paragraphs: [
          "We use service providers who process data on our behalf. Some operate abroad (including the EU and the USA). We choose providers with an adequate level of data protection or contractual safeguards.",
        ],
        items: [
          "Brevo (email sending and delivery)",
          "Cal.com (call booking)",
          "Google (AI language model that helps draft emails; only public company information is sent)",
          "CRM and automation systems used to manage contacts",
          "The hosting provider of this website",
        ],
      },
      {
        heading: "6. Retention",
        items: [
          "Contact data without any response: at most 12 months after the last contact, then deleted",
          "Ongoing dialogue or customer relationship: for as long as it lasts, plus statutory retention periods",
          "Objections and unsubscribes: your email address stays permanently on a suppression list so we never contact you again",
        ],
      },
      {
        heading: "7. Your rights and objection",
        paragraphs: [
          `You may request access, correction or deletion of your data and object to its processing at any time. A short reply to our email or a message to ${contactEmail} is enough. Your objection takes effect immediately and you will receive no further messages from us.`,
          "You also have the right to lodge a complaint with the Federal Data Protection and Information Commissioner (FDPIC).",
        ],
      },
      {
        heading: "8. Changes",
        paragraphs: [
          "We update this notice when our processing changes. The version published here applies.",
        ],
      },
    ],
  },
};

export const getStaticProps: GetStaticProps = async () => ({ props: {} });

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Datenschutz / Privacy | ByteBuildersLab</title>
        <meta
          name="description"
          content="Datenschutzerklärung und Privacy Notice von ByteBuildersLab (nDSG)."
        />
      </Head>

      <div className="min-h-screen bg-[var(--color-ink-soft)] text-[var(--color-ink)]">
        <main className="mx-auto max-w-3xl px-6 py-14 lg:py-20">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
          >
            ← ByteBuildersLab
          </Link>

          {(["de", "en"] as const).map((language) => (
            <PrivacySection
              key={language}
              language={language}
              content={content[language]}
            />
          ))}
        </main>
      </div>
    </>
  );
}

function PrivacySection({
  language,
  content,
}: {
  language: Language;
  content: PrivacyContent;
}) {
  return (
    <section
      id={language}
      lang={language}
      className="mt-10 rounded-[1.8rem] border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-card)] lg:p-10"
    >
      <h1 className="title-safe font-[var(--font-display)] text-4xl leading-none">
        {content.title}
      </h1>
      <p className="copy-safe mt-5 text-base leading-8 text-[var(--color-muted)]">
        {content.intro}
      </p>
      <p className="mt-2 text-sm text-[var(--color-muted)]">
        {content.lastUpdatedLabel}: {lastUpdated}
      </p>

      {content.sections.map((section) => (
        <div key={section.heading} className="mt-8">
          <h2 className="text-lg font-semibold">{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p
              key={paragraph}
              className="copy-safe mt-3 leading-7 text-[var(--color-muted)]"
            >
              {paragraph}
            </p>
          ))}
          {section.items && (
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-[var(--color-muted)]">
              {section.items.map((item) => (
                <li key={item} className="copy-safe">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
