/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    formats: ['image/webp']
  },
  reactStrictMode: true,
}

module.exports = nextConfig
