/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.hashnode.com',
      'images.credly.com',
      'secure.wphackedhelp.com',
      'camo.githubusercontent.com',
      'appinventiv.com',
      'spideropsnet.com',
      'cf-assets.www.cloudflare.com',
      'cf-assets.www.cloudflare.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cf-assets.www.cloudflare.com',
        pathname: '/**',
      }
    ]
  },
  output: "export",
}

module.exports = nextConfig 