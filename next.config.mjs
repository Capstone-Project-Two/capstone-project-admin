/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/postPhotos/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      }
    ],
  },
};

export default nextConfig;
