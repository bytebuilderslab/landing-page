/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export to out/, served by the Cloudflare Worker in wrangler.jsonc.
  output: "export",
  // No image optimization server in a static export; images ship as committed.
  images: { unoptimized: true },
};

export default nextConfig;
