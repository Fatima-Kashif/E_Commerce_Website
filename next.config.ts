import type { NextConfig } from "next";
// production build
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: ""
      
      }
    ]
  }
};

export default nextConfig;
