import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['streamdown'],
  reactStrictMode: false,

  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;
