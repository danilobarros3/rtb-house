/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/orders",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
