/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
  env: {
    CMS_BASE_URL: process.env.CMS_BASE_URL
  },
}

module.exports = nextConfig