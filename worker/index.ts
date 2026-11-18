// Cloudflare Worker in front of the static export (out/). Only "/" reaches this
// code (wrangler.jsonc run_worker_first): it sends visitors to /de or /en from
// Accept-Language, as the old getServerSideProps index page did. Everything
// else is served straight from the static assets.

type Language = "en" | "de";

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

export function detectLanguage(acceptLanguageHeader: string | null): Language {
  if (!acceptLanguageHeader) return "en";

  const normalized = acceptLanguageHeader.toLowerCase();
  return normalized.startsWith("de") || normalized.includes(",de") ? "de" : "en";
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      const language = detectLanguage(request.headers.get("accept-language"));
      return new Response(null, {
        status: 307,
        headers: { Location: `/${language}`, Vary: "Accept-Language" },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
