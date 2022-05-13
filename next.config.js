/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
}

module.exports = nextConfig
