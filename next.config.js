/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["cdn.dribbble.com"]
  }
}

module.exports = nextConfig
