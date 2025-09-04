/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'gateway.pinata.cloud'],
  },
};

export default nextConfig;
