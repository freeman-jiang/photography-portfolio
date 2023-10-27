/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.ctfassets.net" },
      { hostname: "downloads.ctfassets.net" },
    ],
  },
  transpilePackages: ["contentful-typescript-codegen"],
};

module.exports = nextConfig;
