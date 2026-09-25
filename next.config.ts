import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920],
    qualities: [60, 75],
  },
};

export default nextConfig;
