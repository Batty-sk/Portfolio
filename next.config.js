/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/,
      use: {
        loader: 'file-loader',
        options: {
          // Simplified naming pattern
          name: 'static/media/[name].[hash].[ext]',
          // Ensure proper path for client-side
          publicPath: '/_next',
          // Only emit files when building for client
          emitFile: !isServer,
        },
      },
    });

    return config;
  },
  // Add some performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  // Increase build timeout if needed
  staticPageGenerationTimeout: 180,
};

module.exports = nextConfig;