import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // Optimizes images for better LCP
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Example: if you use a CDN
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: true, // Only use if you're confident in your local checks
  },
};

export default nextConfig;
