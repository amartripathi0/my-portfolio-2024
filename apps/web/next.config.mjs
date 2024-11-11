/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'roboto.studio',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
    ],
  },
}

export default nextConfig
