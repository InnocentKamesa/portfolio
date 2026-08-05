import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false, // Set to true if this is a permanent 301 redirect
      },
    ]
  },
}

export default nextConfig;
