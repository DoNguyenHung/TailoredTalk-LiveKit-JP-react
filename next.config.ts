import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['streamdown'],
  reactStrictMode: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
