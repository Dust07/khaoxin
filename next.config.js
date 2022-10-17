/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

const nextConfig = {
  distDir: "build",
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
  swcMinify: true,
  async redirect() {
    return [
      {
        source: "/",
        destination: "/",
        permanent: true,
      }
    ]
  }
}

module.exports = withPWA(nextConfig)
