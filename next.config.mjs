const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/SDEV255_FinalProject/' : '',
  basePath: isProd ? '/SDEV255_FinalProject' : '',
  output: 'export'
};

export default nextConfig;