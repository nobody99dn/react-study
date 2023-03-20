/** @type {import('next').NextConfig} */

const securityHeaders = [];

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders
      }
    ];
  }
});

const nextConfig = withMDX({
  reactStrictMode: true,
  swcMinify: true,

  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  env: {
    customKey: 'my-value'
  },
  basePath: './'
});

module.exports = nextConfig;
