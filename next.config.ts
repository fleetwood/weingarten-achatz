import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: process.env.NODE_ENV === 'development'
  }
};

export default nextConfig;
