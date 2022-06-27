/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["images.unsplash.com", process.env.NEXT_PUBLIC_SUPABASE_URL],
  },
  nextConfig,
};
