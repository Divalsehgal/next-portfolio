import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["raw.githubusercontent.com", "images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
  },

  sassOptions: {
    includePaths: [path.join(process.cwd(), "src/app/styles")],
    // 👉 Variables + Typography auto-injected globally
    prependData: `
      @use "dist/variables" as *;
      @use "base/typography" as *;
    `
  },
};

export default nextConfig;
