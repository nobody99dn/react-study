/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/movie/:id',
        destination: '/detail/:id'
      },
      { source: '/home', destination: '/movies' }
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true
      }
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  images: {
    domains: [
      'lh5.googleusercontent.com',
      'lh3.googleusercontent.com',
      'lh4.googleusercontent.com',
      'lh6.googleusercontent.com'
    ],
    deviceSizes: [480, 768, 1024, 1200, 2048],
    imageSizes: [16, 48, 96, 128, 348]
  },
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/movies': { page: '/movies' }
    };
  }
};

module.exports = nextConfig;
