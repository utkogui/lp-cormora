/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@untitledui/icons'],
  },
  poweredByHeader: false,
};

export default nextConfig;
