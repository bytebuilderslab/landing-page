import type { GetServerSideProps } from "next";

type Language = "en" | "de";

function detectLanguage(acceptLanguageHeader?: string): Language {
  if (!acceptLanguageHeader) return "en";

  const normalized = acceptLanguageHeader.toLowerCase();
  return normalized.startsWith("de") || normalized.includes(",de") ? "de" : "en";
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const language = detectLanguage(req.headers["accept-language"]);

  return {
    redirect: {
      destination: `/${language}`,
      permanent: false,
    },
  };
};

export default function HomeRedirect() {
  return null;
}
