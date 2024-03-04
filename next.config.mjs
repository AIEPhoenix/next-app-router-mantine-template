/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      "@mantine/form",
      "@mantine/dates",
      "@mantine/modals",
      "@mantine/nprogress",
      "@mantine/notifications",
    ],
  },
};

export default nextConfig;
