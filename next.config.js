const bundleAnalyzer = require('@next/bundle-analyzer');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "./styles/_mantine.scss";`,
  },
  experimental: {
    optimizePackageImports: [
      '@mantine/core',
      '@mantine/hooks',
      '@mantine/form',
      '@mantine/dates',
      '@mantine/modals',
      '@mantine/nprogress',
      '@mantine/notifications',
    ],
  },
  webpack(config) {
    config.plugins.push(
      require('unplugin-icons/webpack').default({
        compiler: 'jsx',
        jsx: 'react',
      })
    );

    return config;
  },
  output: 'standalone',
};

module.exports = withBundleAnalyzer(nextConfig);
