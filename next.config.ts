import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: '/crystals-cleaning-painting',
  assetPrefix: '/crystals-cleaning-painting/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  }
  
};

export default nextConfig;
