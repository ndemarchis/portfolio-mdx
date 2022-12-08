const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    loader: 'imgix',
    path: 'https://images.unsplash.com/',
  },
}

export default nextConfig;
