/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|ico)$/i,
      type: 'asset/resource',
    })
    return config
  },
}

export default nextConfig

