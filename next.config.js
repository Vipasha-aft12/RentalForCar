/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // static HTML export — real content in every file
  trailingSlash: true,       // clean /path/ URLs matching the SEO sheet canonicals
  images: { unoptimized: true }, // required for static export
};
module.exports = nextConfig;
