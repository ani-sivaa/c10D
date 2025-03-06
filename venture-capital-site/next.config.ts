import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // This will bypass ESLint during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This will bypass TypeScript errors during build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;