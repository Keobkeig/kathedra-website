import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["github.com", "res.cloudinary.com", "images.unsplash.com"],
  },
  devIndicators: false,
  // Add these settings to help with hydration
  reactStrictMode: true,
  swcMinify: true
};

export default nextConfig;
