import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // ✅ React strict mode helps catch issues early
  reactStrictMode: true,

  // ✅ Experimental appDir (enabled by default in Next.js 15, but explicit here)
  // ✅ Image optimization for portfolio images
  images: {
    domains: ["raw.githubusercontent.com", "images.unsplash.com"], // add more if needed
    formats: ["image/avif", "image/webp"],
  },

  // ✅ SCSS settings
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src/app/styles")],
    // 👉 Only variables are injected globally
    prependData: `
      @use "dist/variables" as *;
    `
    
  },


  // ✅ Bundle analyzer (optional, for debugging build size)
  // webpack(config) {
  //   if (process.env.ANALYZE === "true") {
  //     const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
  //     config.plugins.push(new BundleAnalyzerPlugin());
  //   }
  //   return config;
  // },
};

export default nextConfig;
