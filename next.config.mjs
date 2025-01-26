/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.credly.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "instagram.fdel3-2.fna.fbcdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "instagram.fdel3-1.fna.fbcdn.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
