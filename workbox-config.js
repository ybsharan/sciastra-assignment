module.exports = {
  globDirectory: 'build/',
  globPatterns: ['**/*.{js,css,html,png,jpg,json}'],
  swDest: 'build/sw.js',
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
  ],
};
