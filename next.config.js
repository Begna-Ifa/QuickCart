const path = require("path");

const nextConfig = {
  experimental: {
    turbo: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname), // ✅ Ensure this points to the root
    };
    return config;
  },
  images: {
    domains: ["raw.githubusercontent.com"], // Add GitHub's raw domain to allow images from this source
  },
};

module.exports = nextConfig;
