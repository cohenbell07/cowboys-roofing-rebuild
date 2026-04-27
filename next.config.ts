import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
