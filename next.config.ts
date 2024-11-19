import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/joshuatuan/portfolio/refs/heads/assets/images/**",
      },
    ],
  },
};

export default nextConfig;
